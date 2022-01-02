import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Navbar from "../components/navbar"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import "@fontsource/inconsolata"

const Hello = styled.p`
  text-align: left;
  width: 100px;
  margin: auto;
  margin-top: 100px;
  font-family: "Inconsolata";
  padding-top: 150px;
  font-size: 200%;
`
const Paragraph = styled.p`
  text-align: center;
  width: 80%;
  margin: auto;
  font-family: "Inconsolata";
  padding-top: 500px;
  font-size: 200%;
  line-height: 200%;
`
const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hello>Hello</Hello>
    <Paragraph>I'm Jaewon. Welcome to my personal website!</Paragraph>
    <Paragraph>
      I'm a sophomore at Duke University studying computer science. My personal
      interests include economics, finance, statistics, game design, and
      programming. <Link to="/project-page">Click Here</Link> to view my past
      and current projects!{" "}
    </Paragraph>
  </Layout>
)

export default IndexPage
