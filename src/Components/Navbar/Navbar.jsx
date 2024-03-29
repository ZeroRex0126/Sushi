import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-mainbg">
        <Link className="navbar-brand navbar-logo" to="/">
          KOI SUSHI
        </Link>
        <div className="mobile-menu">
          <input
            type="checkbox"
            id="active"
            checked={menuOpen}
            onChange={(e) => {
              setMenuOpen(e.target.checked);
            }}
          />
          <label htmlFor="active" className="menu-btn">
            <div className="hamburger hamburger1">
              <span className="bar bar1"></span>
              <span className="bar bar2"></span>
              <span className="bar bar3"></span>
              <span className="bar bar4"></span>
            </div>
          </label>
          <div className="wrapper">
            <ul>
              <li
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              >
                <NavLink to="/">Home</NavLink>
              </li>
              <li
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              >
                <NavLink to="/Menu">Menu</NavLink>
              </li>
              <li
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              >
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              >
                <NavLink to="/ContactUs">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ">
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>

            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/Menu">
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ContactUs">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
