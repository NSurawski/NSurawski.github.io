import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h1>Contact</h1>
            <h2>{data.contactSubHeading}</h2>
          </Fade>
          <a className="email-link" href={`mailto:${data.contactEmail}`}>
            {data.contactEmail}
          </a>
          <a
            href={`https://drive.google.com/file/d/1pSdclyZ2aXGJRd3aJIWkuH9n_gyMsFFs/view?usp=sharing`}
            className="primary-btn"
            id="resume"
          >
            RESUME
          </a>
          <div className="social-icons">
            {data.social.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="icons"></img>
              </a>
            ))}
          </div>
          <span>
             <p class="text-muted small mb-0">Copyright &copy; Nicole Surawski 2021</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
