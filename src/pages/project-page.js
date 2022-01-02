import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"

const ProjectOneTitle = styled.div`
  font-family: "Inconsolata";
  font-size: 200%;
  margin-bottom: 20px;
  width: 80%
  text-align: left;
  padding-left: 17%;
  padding-top: 30%
`
const ProjectTwoTitle = styled.div`
  font-family: "Inconsolata";
  font-size: 200%;
  margin-bottom: 20px;
  text-align: right;
  padding-right: 20%;
  padding-top: 15%;
`

const ProjectOne = styled.p`
  font-family: "Inconsolata";
  padding-left: 17%;
  width: 80%;
  text-align: left;
  line-height: 250%;
`
const ProjectTwo = styled.div`
  font-family: "Inconsolata";
  padding-left: 17%;
  text-align: right;
  width: 80%;
  line-height: 250%;
`

const ProjectPage = () => (
  <Layout>
    <Seo title="Page two" />
    <ProjectTwoTitle>Simulated Poker</ProjectTwoTitle>
    <ProjectTwo>
      Currently, I am working on a Java-based poker game. Based on the popular
      Texas hold em variation of Poker, my application is a two-player Poker
      game with all of the classic rules. Using the application, I created a
      Monte Carlo simulation to predict possibilites and likely outcomes. I am
      working on a way to use that data to create an impossible to beat NPC.{" "}
    </ProjectTwo>
    <ProjectOneTitle>Cryptocurrency Tracking Web App</ProjectOneTitle>
    <ProjectOne>
      Using Node.js and the public CoinGecko API, I created a mock version of
      the popular website coinmarketcap.com to track the most widely used
      financial indicies of popular cryptocurrencies.<br></br>
      <a href="https://github.com/jaewonjung297/cointracker">
        Click here for the GitHub repository
      </a>
    </ProjectOne>
  </Layout>
)

export default ProjectPage
