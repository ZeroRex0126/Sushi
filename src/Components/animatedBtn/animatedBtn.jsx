import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./animatedBtn.css";

const AnimatedBtn = ({ navTo, title, color, clickFunc }) => {
  return (
    <div className="animatedBtn">
      <NavLink
        to={navTo ? `/${navTo}` : ""}
        style={color}
        onClick={clickFunc ? clickFunc : () => {}}
      >
        <span>{title}</span>
        <i></i>
      </NavLink>
    </div>
  );
};

export default AnimatedBtn;
