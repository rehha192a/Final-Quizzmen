import createError from "http-errors";
import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";
import http from "http";
import https from "https"
import dotenv from "dotenv";
import { Server } from "socket.io";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./graphql/typeDefs/typeDefs.js";
import { resolvers } from "./graphql/resolvers/resolvers.js";
import { makeExecutableSchema } from "@graphql-tools/schema";
// import { createAdapter } from "@socket.io/redis-adapter"
// import { createClient } from "redis"
import { instrument } from "@socket.io/admin-ui"
import jade from "jade"
import fs from "fs"

let privateKey    = fs.readFileSync('./ssl/selfsigned.key', 'utf8');
let certificate   = fs.readFileSync('./ssl/selfsigned.crt', 'utf8');
let credentials   = {key: privateKey, cert: certificate};

// import { PubSub } from "graphql-subscriptions";
// import { WebSocketServer } from "ws";
// import { useServer } from "graphql-ws/lib/use/ws";
process.setMaxListeners(0);
dotenv.config();

const app = express();
const httpServer = http.createServer(app);
const httpsServer= https.createServer(credentials, app)
const io = new Server(httpServer,{
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});
instrument(io, {
  auth: false
});
// const pubClient = createClient({ url: "redis://localhost:6379" });
// await pubClient.connect()
// const subClient = pubClient.duplicate();
// io.adapter(createAdapter(pubClient, subClient))

// const wsServer = new WebSocketServer({
//     server: server,
//     path: "/api/graphql",
//   });
async function startServer() {
  const schema = makeExecutableSchema({ typeDefs, resolvers });
  const apolloServer = new ApolloServer({
    schema,
    formatResponse: (response) => {
      response.extensions = {
        is_final: true,
      };
      return response;
    },
    cache: true,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    cors: "*",
    path: "/api/graphql",
    extensions({ document, variables, operationName, result }) {
      return { runTime: Date.now() - startTime };
    },
  });
}

io.of("/client").on("connection", (socket) => {
  // console.log(socket.id);
  socket.on("join-room", (data)=> {
    console.log(data)
  })
});

io.of("/user").on("connection", socket=> {
  console.log(socket.id)
  socket.on("handle_audio", data=> {
    io.emit("handle_from_server", data)
  })
  socket.on("join-room", (data)=> {
    console.log(data)
  })
})

io.on("connection", socket=> {
  socket.on("handle_audio", data=> {
    io.emit("handle_from_server", data)
  })
  socket.on("join-room", (data)=> {
    console.log(data)
  })
})
await startServer();

app.engine("html", jade.renderFile)
app.set("view engine", "jade")
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static("public"))
app.use("/", indexRouter);
app.use(usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// console.log(process.env.HOST)
httpServer.listen(process.env.PORT || 4000, () =>
  console.log("Server run on port "+ process.env.PORT || 4000)
);


httpsServer.listen(process.env.PORT_SSL || 8443, ()=> {
  console.log("Server run ssl on port "+ process.env.PORT_SSL || 8443)
})