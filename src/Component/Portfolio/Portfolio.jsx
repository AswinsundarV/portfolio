import React from "react";
import "../Portfolio/portfolio.css";
import { FaInstagram } from "react-icons/fa";
import me from "../Portfolio/portfolioimg/profile.jpg"
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Aboutme from "./Aboutme";

function Portfolio() {
  return (
    <div id="section">
      <div className="main">
        <div className="firstmain">
          <nav class="navbar fixed-top navbar-light bg-light">
            <h1 className="por">portfolio</h1>
            <div className="nav">
              <a class="navbar-brand" href="#section">
                Home
              </a>
              <a class="navbar-brand" href="#section1">
                About
              </a>
              <a class="navbar-brand" href="#section2">
                Skill
              </a>
              <a class="navbar-brand" href="#section3">
                Projects
              </a>
              <a class="navbar-brand" href="#section4">
                Mytech
              </a>
              <a class="navbar-brand" href="#section5">
                Contact
              </a>
            </div>
          </nav>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="profile">
          <img
            className="proimg"
            src={me}
            alt=""
            height="300px"
            width="300px"
          />
          <h1>Aswinsundar</h1>
          <h3>
            I'm a<span>Front End Developer</span>
          </h3>
          <div className="logo">
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaLinkedin />
            </a>
            <a href="">
              <FaXTwitter />
            </a>
            <a href="">
              <FaWhatsapp />
            </a>
            <a href="">
              <FaFacebookF />
            </a>
            <br />

            <button>Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
