import React from "react"
import data from "../yourdata"
import Fade from "react-reveal/Fade"
import scrollTo from "gatsby-plugin-smoothscroll"

const Resume = () => {
  return (
    <div className="section" id="resume">
      <div className="resume-headers-container">
        <div className="resume-headers">
          <Fade bottom cascade>
            <div className="headers-wrapper">
              <h1>Resume</h1>
              <div className="link-container">
                <button onClick={() => scrollTo("#education")}>
                  Education
                </button>
                <button onClick={() => scrollTo("#experience")}>
                  Experience
                </button>
                <button onClick={() => scrollTo("#projects")}>Projects</button>
                <button onClick={() => scrollTo("#recognitions")}>
                  Recognitions
                </button>
              </div>
            </div>
          </Fade>
        </div>
      </div>

      <div className="container">
        <div className="resume-container">
          <article style={{width : "100%"}}>
            <div className="about">
              <div className="title">
                <h1>Summary</h1>
              </div>
              <hr/>
            </div>

            <div className="education">
              <div className="title">
                <h1>EDUCATION</h1>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Resume
