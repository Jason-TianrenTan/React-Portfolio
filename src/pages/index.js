import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
// Components
import Work from "../components/Work"
import About from "../components/About"
import Skills from "../components/Skills"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"
import TimeLine from "../components/TimeLine"
import Resume from "../components/Resume"

const IndexPage = () => (
  <Layout>
    <SEO title="Jason Tan's Portfolio" />
    <About></About>
    <Skills></Skills>
    <Work></Work>
    <TimeLine></TimeLine>
    <Resume></Resume>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
