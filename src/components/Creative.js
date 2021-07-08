import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"

import data from "../yourdata"

// import ref29salad  from "../images/ref29salad.jpg"

const Creative = () => {
  return (
    <div className="section" id="creative">
      <div className="container">
        <div className="creative-wrapper">
          <Fade bottom>
            <h1>Creative</h1>
          </Fade>

          <div className="grid">
            <Fade bottom cascade>
              {data.images.map((image, index) => (
                <Card
                  key={index}
                  imgUrl={image.imageSrc}
                ></Card>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Creative
