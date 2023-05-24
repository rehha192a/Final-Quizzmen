// import { Button } from '@mui/material'
import Peer from 'peerjs'
import React, { useEffect, useRef } from 'react'
import { useState, useContext } from 'react'
import { SocketContext } from '../../../ContainerSocket/ContainerSocket'

const InitMeetingRoom = (props) => {
  const [refSelf, setSelfVideo]= useState()
  const myRef= useRef(null)
  const { socketRef }= useContext(SocketContext)
  useEffect(()=> {
    const myPeer= new Peer()
    navigator.mediaDevices.getUserMedia({video: true, audio: true})
    .then(stream=> {
      myRef.current.srcObject = stream
    })
    .catch((err)=> console.log(err))
    myPeer.on("open", function(id) {
      socketRef?.current?.emit("join-room", {roomId: id})
    })
    return ()=> setSelfVideo(()=> undefined)
  }, [socketRef, myRef])
  return (
    <div className={"init-meeting-room"}>
      <video playsInline ref={myRef} autoPlay={true} muted></video>
    </div>
  )
}

export default InitMeetingRoom