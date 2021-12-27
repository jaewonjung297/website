import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"

const Hello = styled.header`
  text-align: left;
  font-size: 200%;
`

const Paragraph = styled.p`
  text-align: left;
  margin: 25px;
`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hello>Hello</Hello>
    <Paragraph>Welcome to my website!</Paragraph>
    <Paragraph>
      I'm a sophomore at Duke University studying computer science. My personal
      interests include economics, finance, statistics, game design, and
      programming. Scroll down to view my past and current projects!{" "}
    </Paragraph>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
)

export default IndexPage
