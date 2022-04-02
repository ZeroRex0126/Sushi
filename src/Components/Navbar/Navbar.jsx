import React, { useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <Link className="navbar-brand navbar-logo" to="/" exact>
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
        <i className="fas fa-bars text-white"></i>
      </div>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <li className="nav-item">
            <Link className="nav-link" to="/" exact>
              <i className="fas fa-home"></i>Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/Menu" exact>
              <i className="far fa-address-book"></i>Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ContactUs" exact>
              <i className="far fa-copy"></i>Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
