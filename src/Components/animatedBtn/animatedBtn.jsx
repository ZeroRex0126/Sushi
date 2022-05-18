import React from "react";
import { NavLink } from "react-router-dom";
import "./animatedBtn.css";

const AnimatedBtn = ({ navTo, title, color, clickFunc, isBtn, btnType }) => {
  return (
    <div className="animatedBtn">
      {isBtn ? (
        <button
          type={btnType ? btnType : ""}
          style={color}
          onClick={clickFunc ? clickFunc : () => {}}
        >
          <span>{title}</span>
          <i className="btn-lines"></i>
        </button>
      ) : (
        <NavLink
          to={navTo ? `/${navTo}` : ""}
          style={color}
          onClick={clickFunc ? clickFunc : () => {}}
        >
          <span>{title}</span>
          <i></i>
        </NavLink>
      )}
    </div>
  );
};

export default AnimatedBtn;
