import React from "react"
import data from "../yourdata"
import Fade from "react-reveal/Fade"

const Resume = () => {
  return (
    <div className="section" id="resume">
      <div className="container">
      <Fade bottom cascade>
            <h1>Resume</h1>
          </Fade>
        <article>
          <div className="education">
            <div className="title">
              <h3>Education</h3>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Resume
