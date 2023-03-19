import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/Navbar.css";
import styled from 'styled-components';

function Navbar() {
  return (
    <div id="nav-bar">
      <ul>
        <Link to="/">
          <li>
            <img
              style={{ opacity: "1" }}
              id="logo"
              src="https://www.golakshadweep.com/assets/images/gol-logo.png"
              alt="logo"
              height="70"
              width="125"
            ></img>
          </li>
        </Link>
        <Link to="/login">
          <li className="nav-items">Find Reservations</li>
        </Link>
        <a href="#">
          <li className="nav-items">Packages ▾</li>
        </a>
        <Link to="/about">
          <li className="nav-items">About Lakshadweep ▾</li>
        </Link>
        <a href="#">
          <li className="nav-items">About Us</li>
        </a>
        <a href="#">
          <li className="nav-items">Gol</li>
        </a>
        <a href="#">
          <li className="nav-items">Support</li>
        </a>
        <Link to="/login">
          <li className="Loginbtns">
            <button id="login-btn" type="button">
              Login
            </button>
          </li>
        </Link>
        <Link to="/SignUp">
          <li className="Loginbtns">
            <button id="signup-btn" type="button">
              Sign Up
            </button>
          </li>
        </Link>
      </ul>

      <Outlet />
    </div>
  );
}

export default Navbar;


