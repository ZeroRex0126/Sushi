import React, { useEffect } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <Link className="navbar-brand navbar-logo" to="/">
        KOI SUSHI
      </Link>

      <div
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </div>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              <i className="fas fa-home"></i>Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/Menu">
              <i className="far fa-address-book"></i>Menu
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/ContactUs">
              <i className="far fa-copy"></i>Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
