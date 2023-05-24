import React from "react";
import CloseIcon from '@mui/icons-material/Close';

const TypeQuestion = (props) => {
  return (
    <div
      className="fjkldjsdiurioasas"
      style={{
        flex: "1 1 0",
        height: "100%",
        padding: 16,
        position: "relative",
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="fsjkdhsajhjsdasaas"
        style={{
          width: "100%",
          height: "100%",
          background: "#fff",
          display: "flex",
          overflow: "hidden",
          borderRadius: 10,
        }}
      >
        {props?.previewFiles?.length > 0 && (
          <div
            className="fdhjkehdsjkdhsajkdhs"
            style={{
              flex: "1 1 0",
              height: "100%",
              borderRadius: 10,
              overflow: "hidden",
              background: "#fff",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            {props?.previewFiles?.map((item, key) => (
              <div key={key} className="dskdlsjdkalsasas" style={{width: "100%", height: "100%"}}>
                <div className="gjiodjkjkldaas" style={{width: "100%", height: "100%", padding: 5, position: "relative"}}>
                  <img
                    src={item.src}
                    alt="open"
                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 10}}
                  />
                  <div onClick={()=> props?.setPreviewFiles(()=> [])} style={{display: "flex", justifyContent: "center", alignItems: "center", position: "absolute", right: 0, padding: 5, height: 40, width: 40, borderRadius: "50%", background: "#f2f0f5", zIndex: 100, top: 0, margin: 8, cursor: "pointer"}}><CloseIcon /></div>
                </div>
              </div>
            ))}
          </div>
        )}
        {/*  */}
        <div
          className="dfjkdjaskldjlkdas"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            flex: "1 1 0",
            borderColor: "transparent",
          }}
        >
          <textarea
            cols={10}
            rows={50}
            type="text"
            className="djskhjieouaiosasjkea"
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              resize: "none",
              fontSize: 18,
              fontWeight: 600,
              borderRadius: 10,
              verticalAlign: "center",
              padding: 10,
              border: "none",
              outline: "none",
            }}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default TypeQuestion;
