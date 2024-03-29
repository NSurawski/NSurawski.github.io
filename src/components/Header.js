import React from "react"
import Fade from "react-reveal/Fade"
import Tada from "react-reveal/Tada"
import data from "../yourdata"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <Tada duration={5000} forever={true}>
            <h2>
              Hi, I'm {data.name}{" "}
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
            </Tada>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : "Software Engineer"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[1]
                  ? data.headerTagline[1]
                  : "Certified ScrumMaster"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[2]
                  ? data.headerTagline[2]
                  : "and Creative"}
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>{data.headerParagraph}</p>
          </Fade>
          <Fade bottom>
            <a
              href="https://drive.google.com/file/d/1EShPo30-1LLyMvNuMAslstSR7LoRMXT3/view?usp=sharing"
              className="primary-btn"
            >
              RESUME
            </a>
          </Fade>
          <Fade bottom>
            <a
              href={`mailto:${
                data.contactEmail ? data.contactEmail : "nicolesurawski@gmail.com"
              }`}
              className="primary-btn"
            >
              LET'S CHAT
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
