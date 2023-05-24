// import React from 'react'
import { Button } from "@mui/material"
import { Helmet } from "react-helmet-async"
import "./Live.sass"
import PodcastsIcon from '@mui/icons-material/Podcasts';
import GroupsIcon from '@mui/icons-material/Groups';
import { Link, Route, Routes } from "react-router-dom";
import InitLiveStream from "./Components/InitLiveStream";
import InitMeetingRoom from "./Components/InitMeetingRoom";
import MainLive from "./Components/MainLive";
// import { Peer } from "peerjs"
// import { v4 } from 'uuid'
// import { SERVER_URL } from '../../config/config'

const Live = () => {
  // const ref= useRef()
  // eslint-disable-next-line
  // const [peerState, setPeerState]= useState()
  // useEffect(()=> {
  //   const peer= new Peer(v4(), {host: `localhost`, port: 4000, path: "/peerjs"})
  //   setPeerState(()=> peer)
  // }, [])
  return (
    <>
      <Helmet>
        <title>Live | Quiz</title>
      </Helmet>
      <div className="dksldkalskaewa">
        <div className={"choose-a-function"} style={{display: "flex", alignItems: "center", gap: 16, padding: 16}}>
          <Link to={"/live/c/livestream"} style={{textDecoration: "none", color: "#fff"}}>
            <Button variant={"contained"}>&nbsp;
              <PodcastsIcon /> <span style={{marginLeft: 8}}>Make a livestreaming</span>
            </Button>
          </Link>
          <Link to={"/live/c/meet/room"} style={{textDecoration: "none", color: "#fff"}}>
            <Button variant={"contained"}>&nbsp;
              <GroupsIcon /> <span style={{marginLeft: 8}}>Make a meeting room</span>
            </Button>
          </Link>
        </div>
        <br />
        <Routes>
          <Route path={"/c/livestream"} element={<InitLiveStream />} />
          <Route path={"/c/meet/room"} element={<InitMeetingRoom />} />
          <Route path={"/"} element={<MainLive />} />
        </Routes>
      </div>
    </>
  )
}

export default Live