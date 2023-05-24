import { Tooltip } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const NavigationComponent = (props) => {
  return (
    <Tooltip
      placement="bottom"
      title={
        <div style={{ fontSize: 18, textTransform: "capitalize" }}>
          {props.text}
        </div>
      }
    >
      <div className="navigation-component">
        <NavLink
          style={{ color: "#000", textDecoration: "none" }}
          to={"/" + props.link}
          className={({ isActive }) =>
            isActive
              ? "navigation-link-active navigation-link"
              : "navigation-link-inactive navigation-link"
          }
        >
          <div className="navigation-component-icon">{props.icon}</div>
          <div className="navigation-component-link">{props.text}</div>
        </NavLink>
      </div>
    </Tooltip>
  );
};

export default NavigationComponent;
