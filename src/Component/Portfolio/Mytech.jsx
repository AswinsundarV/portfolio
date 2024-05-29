import React from 'react'
import "../Portfolio/mytech.css"
import html from "../Portfolio/portfolioimg/html-logo.png"
import css from "../Portfolio/portfolioimg/css3-logo-png-transparent.png"
import js from "../Portfolio/portfolioimg/javascript-39394.png"
import bs from "../Portfolio/portfolioimg/Bootstrap Logo.png"
import gh from "../Portfolio/portfolioimg/github.jpg"
import py from"../Portfolio/portfolioimg/python-logo-png-open-2000.png"
import vs from "../Portfolio/portfolioimg/visual-studio-code.png"
import react from "../Portfolio/portfolioimg/react-logo-1000-transparent_original.png"
export default function Mytech() {
  return (
    <div id='section4'>
          <div className="logmain">
          <div className="memy">
            <b>My Tech Knowledge</b>
          </div>
          <div className="logsub">
            <div className="logoimg">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                target="_blank"
              >
                <img
                  src={html}
                  alt=""
                  width={75}
                  height={100}
                />
              </a>
            </div>
            <div className="logoimg">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
              >
                <img
                  src={css}
                  alt=""
                  width={100}
                  height={100}
                />
              </a>
            </div>
            <div className="logoimg">
              <a href="https://javascript.info/" target="_blank">
                <img
                  src={js}
                  alt=""
                  width={100}
                  height={100}
                />
              </a>
            </div>
            <div className="logoimg">
              <a href="https://getbootstrap.com/" target="_blank">
                <img
                  src={bs}
                  alt=""
                  width={100}
                  height={100}
                />
              </a>
            </div>
            <div className="logoimg">
              <a href="https://react.dev/" target="_blank">
                <img
                  src={react}
                  alt=""
                  width={100}
                  height={100}
                />
              </a>
            </div>
            <div className="logoimg">
              <a href="https://www.python.org/" target="_blank">
                <img
                  src={py}
                  alt=""
                  width={100}
                  height={100}
                />
              </a>
            </div>
            <div className="logoimg">
              <a href="https://code.visualstudio.com/" target="_blank">
                <img
                  src={vs}
                  alt=""
                  width={100}
                  height={100}
                />
              </a>
            </div>
            <div className="logoimg">
              <a href="https://github.com/" target="_blank">
                <img
                  src={gh}
                  alt=""
                  width={100}
                  height={100}
                  className="logoimggit"
                />
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}
