import React, { useState } from 'react'
import AttachFile from './AttachFile'
import TypeQuestion from './TypeQuestion'

const CreateQuestion = (props) => {
  const [files, setFiles]= useState(()=> [])
  const [previewFiles, setPreviewFiles]= useState(()=> [])
  return (
    <div className="fdjlikjsdkljasas" style={{width: "100%", display: "flex", justifyContent: 'center', height: "260px", background: "#2e89ff"}}>
      <AttachFile setFiles={setFiles} files={files} setPreviewFiles={setPreviewFiles} previewFiles={previewFiles} />
      <TypeQuestion files={files} setFiles={setFiles} setPreviewFiles={setPreviewFiles} previewFiles={previewFiles} />
    </div>
  )
}

export default CreateQuestion