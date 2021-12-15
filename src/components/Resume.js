import React from "react"
import data from "../yourdata"
import Fade from "react-reveal/Fade"

const Resume = () => {
  return (
    <div className="section" id="resume">
      <div className="resume-headers-container">
        <div className="resume-headers">
          <Fade bottom cascade>
            <h1>Resume</h1>
          </Fade>
        </div>
      </div>

      <div className="container">
        <div className="resume-container">
          <article>
            <div className="education">
              <div className="title">
                <h3>Education</h3>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Resume
