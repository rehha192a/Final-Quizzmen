import React from "react";
import CreateAnswer from "./Component/CreateAnswer";
import CreateQuestion from "./Component/CreateQuestion";
import MenuFunction from "./Component/MenuFunction";

const CreateQuizMain = (props) => {
  return (
    <div
      className="djaklsjaklsjaksasa"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="dkjsjaksjakawewa"
        style={{ width: "100%", maxWidth: 1160, padding: 10, borderRadius: 10 }}
      >
        <MenuFunction />
        <CreateQuestion />
        <CreateAnswer />
      </div>
    </div>
  );
};

export default CreateQuizMain;
