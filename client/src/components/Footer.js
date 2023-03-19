import React from "react";
import "../styles/Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import play from "./images/play.png";
import styled from "styled-components";

function Footer() {
  return (
    <div id="footer-div">
      <div id="continents-f"></div>
      <div id="dwnld-bnr">
        <div id="bnr-content">
          <div id="banner-txt">
            <h2>Download Our App</h2>
            <p>Offers best functionality among all other travel apps</p>
            <button id="dwnld-btn">
              <div>
                <img id="play-icon" src={play} height="35" width="35"></img>
              </div>
              <div id="btn-text">
                <p>GET IT ON</p>
                <h3>Google Play</h3>
              </div>
            </button>
          </div>
          <div id="phn-container">
            <img
              id="phn"
              src="https://purepng.com/public/uploads/large/purepng.com-apple-iphone-xappleapple-iphonephonesmartphonemobile-devicetouch-screeniphone-xiphone-10electronicsobjects-251530689596wod8s.png"
              height="320"
              width="320"
            ></img>
          </div>
        </div>
      </div>
      <footer id="footer">
        <div id="f-body">
          <div id="flogo-div">
            <a href="#">
              <img
                id="f-logo"
                src="https://www.golakshadweep.com/assets/new-theme/img/logo2.png"
                alt="logo"
                height="60"
                width="120"
              ></img>
            </a>
            <p>
              Many desktop publishing packages and <br />
              web page editors now use Lorem Ipsum as their default model text.
            </p>
          </div>
          <div id="footer-items">
            <div className="footer-list">
              <ul>
                <span className="list-title">Company</span>
                <a href="#">
                  <li className="flist-item">Apple</li>
                </a>
                <a href="#">
                  <li className="flist-item">Pear</li>
                </a>
                <a href="#">
                  <li className="flist-item">Orange</li>
                </a>
              </ul>
            </div>
            <div className="footer-list">
              <ul>
                <span className="list-title">Company</span>
                <a href="#">
                  <li className="flist-item">Apple</li>
                </a>
                <a href="#">
                  <li className="flist-item">Pear</li>
                </a>
                <a href="#">
                  <li className="flist-item">Orange</li>
                </a>
              </ul>
            </div>
            <div className="footer-list">
              <ul>
                <span className="list-title">Company</span>
                <a href="#">
                  <li className="flist-item">Apple</li>
                </a>
                <a href="#">
                  <li className="flist-item">Pear</li>
                </a>
                <a href="#">
                  <li className="flist-item">Orange</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <FacebookIcon id="icon" />
          <TwitterIcon id="icon" />
          <LinkedInIcon id="icon" />
          <InstagramIcon id="icon" />
          <hr />
          <span id="copy-right">
            <p>
              Copyright © 2023 GoL Travels Private Limited. All Rights Reserved.
            </p>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

export const div = styled.div`
  padding: 80px 60px;
  background: black;
  position: absolute;
  bottom: 0;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;
