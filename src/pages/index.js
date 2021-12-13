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

const IndexPage = () => (
  <Layout>
    <SEO title="Jason Tan's Portfolio" />
    <About></About>
    <Work></Work>
    <Skills></Skills>
    <TimeLine></TimeLine>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
