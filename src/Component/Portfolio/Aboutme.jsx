import React from "react";
import "../Portfolio/aboutme.css";
import me from "../Portfolio/portfolioimg/profile.jpg";
export default function Aboutme() {
  return (
    <div className="secondmain" id="section1">
      <div className="contain">
        <div className="about">
        <b className="me">About</b></div>

        <div className="mecont">
          <div className="aboutme">
            <img
              className="aboutimg"
              src={me}
              alt=""
              height="300px"
              width="300px"
            />
          </div>
          <div className="total">
            <div className="paramain">
              <div className="para">
                <p>
                  I am Aswinsundar , web developer from Chennai , Tamilnadu{" "}
                  <br />
                  I have rich experience in web site design and <br />
                  building and customization, also <br /> I am good at
                  WordPress.
                </p>

                <div>
                  <button>Download CV</button>
                </div>
              </div>
            </div>

            <div className="mainbar">
              <div className="bar">
                <p>frontend</p>
                <div className="barmain">
                  <div className="barsub"></div>
                </div>
              </div>
              <div className="barone">
                <p>backend</p>
                <div className="barmain">
                  <div className="barsec"></div>
                </div>
              </div>
              <div className="bartwo">
                <p>database</p>
                <div className="barmain">
                  <div className="barthr"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      

        <div class="wrapper">
          <timeline class="timeline">
            <entry class="entry">
              <h4>Higher Secondary</h4>
              <info class="meta">
                <h3>12th</h3>
                <h5>School : vedhha vikass br hr sec school</h5>
                <h5>Percentage : 44%</h5>
                <h5>Passed out : 2017</h5>
              </info>
            </entry>
            <entry class="entry">
              <h4>Degree</h4>
              <info class="meta">
                <h4>B.E.Mechanical</h4>
                <h4>College : Easwari Engineering College</h4>
                <h5>CGPA  8.3</h5>
                <h5>Passed out : 2023</h5>
              </info>
            </entry>
          </timeline>
        </div>

       
      </div>
    </div>
  );
}
