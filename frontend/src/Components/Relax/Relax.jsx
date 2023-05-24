import { useRef, useEffect } from 'react'
import io from "socket.io-client"
import { SERVER_URL } from '../../config/config'
import { Helmet } from 'react-helmet-async'
import { Button } from '@mui/material'
import { Routes, Route, Link } from 'react-router-dom'
import CreateRelax from './Component/CreateRelax'
import SpecificRoom from './Component/SpecificRoom'

const Relax = (props) => {
  const socketRef= useRef()
  useEffect(()=> {
    socketRef.current= io(`${SERVER_URL}/user`, {transports: ["websocket", "polling"]})
    return ()=> {
      socketRef.current.disconnect()
    }
  }, [])
 
  return (
    <div className="jksdjhjdfhjkdsklsa">
      <Helmet>
        <title>Relax</title>
      </Helmet>
      <div className={"create-a-relax-room"} style={{padding: 16}}>
        <Link to={"/relax/c/relax"} style={{textDecoration: "none", color: "#fff"}}>
          <Button variant={"contained"}>Create relax</Button>
        </Link>
      </div>
      <Routes>
        <Route path={"/c/relax"} element={<CreateRelax />} />
        <Route path={"/r/room?roomId="} element={<SpecificRoom />} />
      </Routes>
    </div>
  )
}

export default Relax