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
const AboutTitle = styled.div`
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
const Text = styled.div`
  font-family: "Inconsolata";
  padding-left: 17%;
  text-align: right;
  width: 80%;
  line-height: 250%;
`

const ProjectPage = () => (
  <Layout>
    <Seo title="Page two" />
    <AboutTitle>About Jaewon</AboutTitle>
    <Text>
      I grew up in Raleigh, North Carolina, after moving from South Korea at age
      6. I attended school in the Raleigh area, involved in organizations like
      NHS and the local youth orchestra. I graduated from Enloe High School in
      Raleigh in May 2020 and enrolled in Duke University for my Bachelor's
      Degree in August 2020. Entering college, I had little to no idea of what
      to study. I enjoyed mathematics and economics in high school and decided
      to take classes on those subjects. Alongside those classes, I also took an
      intro computer science class, not knowing that I would actually enjoy the
      subject. I decided to pursue a major in computer science after that first
      semester of classes. As I dove deeper into the vast subject of computer
      science, I had a particular interest in the finance part of tech. Thus, I
      am pursuing the economics degree, as my love for the subject has increased
      after taking classes at Duke. I look forward to taking more specialized
      courses after completing the core classes, such as finance,
      macroeconomics, economic history, and game theory.{" "}
    </Text>
  </Layout>
)

export default ProjectPage
