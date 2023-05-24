import React from "react";
import ImageIcon from "@mui/icons-material/Image";
import { Tooltip } from "@mui/material";

const AttachImage = (props) => {
  const getFiles= (e)=> {
    if(e.target.files.length > 0) {
      Object.values(e.target.files).map((item, key)=> {
        return props.setFiles(prev=> ([...prev, {key: item.lastModify, src: item, index: parseInt(key)}]))
      })
      Object.values(e.target.files).map((item, key)=> {
        const objectURL= URL.createObjectURL(item)
        return props.setPreviewFiles(prev=> ([...prev, {key: item.lastModify, src: objectURL, index: parseInt(key)}]))
      })
    }
  }
  return (
    <div
      className="ehuwehuidshaswa dhuisdyhuieyaas"
      style={{ width: "100%", height: "auto", aspectRatio: 1/1 }}
    >
      <Tooltip
        placement="left"
        title={<div style={{ fontSize: 18 }}>Image</div>}
      >
        <div
          className="djklsajsklajsiasjaa wrap-icon"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            position: "relative"
          }}
        >
          <ImageIcon
            className="djksjakslasas"
            style={{ width: "40px", height: "40px", color: "#fff" }}
          />
          <input onChange={getFiles} type="file" className="dsjldjakslajsklaa" style={{width: 40, height: 40, opacity: 0, position: "absolute", top: 0, left: 0, zIndex: 3, cursor: "pointer"}} />
          
        </div>
      </Tooltip>
    </div>
  );
};

export default AttachImage;
