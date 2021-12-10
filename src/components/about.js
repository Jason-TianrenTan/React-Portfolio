import React, { useState, useEffect } from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import SyntaxHighlighter from "react-syntax-highlighter"
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"
import scrollTo from "gatsby-plugin-smoothscroll"
import TimeLine from "./TimeLine"

function getElapsedAge() {
  let birth = Date.parse("1/22/1998")
  let age = Date.now() - birth
  return (age / (365 * 86400 * 1000)).toFixed(9)
}

const About = () => {
  const [age, setAge] = useState(23.0)
  useEffect(() => {
    const timer = setTimeout(() => {
      setAge(getElapsedAge())
    }, 200)
    return () => clearTimeout(timer)
  })

  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
              For more information, check out my{" "}
              <button onClick={() => scrollTo("#resume")}>
                Resume <img className="smallLogo" src={data.resumeLogo} />
              </button>
            </p>

            <SyntaxHighlighter language="java" style={docco}>
              {`class Me {
        //Basic Info
        name = "Tianren Tan";
        preferredName = "Jason";
        age = ${getElapsedAge()};
    
        //Education
        currentSchool = new School("University of California, Irvine", 
            time = { from: "2021.9", to: "2022.12"});
        previousSchool = new School("Wuhan University", 
            time = { from : "2016.9", to: "2020.6"});
    
        //a little about me
        hobbies = ["Movies", "Table Tennis", "Go (board game)", "Coding", "Legos"]
        careerGoals = ["Build better software or platforms that make everyone's lives easier",
             "Still figuring out next steps..."]
    
        //For more please check out my resume
    }`}
            </SyntaxHighlighter>
            <p>
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
            </p>
            <TimeLine />
          </div>
          <div className="image-wrapper">
            <img className="avatar" src={data.aboutImage} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
