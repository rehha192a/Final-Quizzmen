import React, { useState } from 'react'
import "./CreateAnswer.sass"

const CreateAnswer = (props) => {
  const [countAnswer, setCountAnswer]= useState(()=> ([
    {color: "#2d70ae", answer: ""},
    {color: "#2d9da6", answer: ""},
    {color: "#efa929", answer: ""}, 
    {color: "#d5546d", answer: ""}
  ]))
  return (
    <div className="ghjkdhsksdhjkhjkds" style={{width: "100%", height: "auto", display: "flex", justifyContent: "center", alignItems: "center", background: "#2e89ff"}}>
        {
            countAnswer.map((item, key)=> <Wrapper {...item} key={key} />)
        }
    </div>
  )
}

export default CreateAnswer

const Wrapper= (props)=> {
    return (
        <div className="dfdkskdldalkfadas" style={{flex: "1 1 0", height: "300px", padding: 5}}>
            <div className="vddshkjdfhjkdskjhdsajh" style={{width: "100%", height: "100%", borderRadius: 10, backgroundColor: props.color, display: "flex", justifyContent: "center", alignItems: "center", padding: 5}}>
                <div placeholder="fdjdlkdjskld" contentEditable="true" className="fdnlsdjkljdskl" style={{minHeight: 25, maxWidth: "100%", wordWrap: "break-word", width: "auto", wordBreak: "break-all", display: "flex", justifyContent: "center", alignItems: "center", fontSize: 18, color: "#fff", fontWeight: 600, border: "none", outline: "none"}}></div>
            </div>
        </div>
    )
}