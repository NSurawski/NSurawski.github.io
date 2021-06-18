import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

// import ref29salad  from "../../images/ref29salad.jpg"

const Creative = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="creative-container">
          <Fade bottom cascade>
            <h1>{data.creativeHeading}</h1>
          </Fade>
          <p>{data.creativePara}</p>
        </div>
      </div>
    </div>
  )
}

export default Creative
