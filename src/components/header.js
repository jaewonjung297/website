import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import * as styles from "./header.module.css"
import "@fontsource/inconsolata"

const SiteHeader = styled.header`
  margin-bottom: 1.45rem;
  font-family: "Inconsolata";
`

const Inner = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
  font-family: "Inconsolata";
`

const Heading = styled.h1`
  margin: 0;
`

const HomeLink = styled(Link)`
  color: black;
  font-weight: 20;
  text-decoration: none;
  font-family: "Inconsolata";
`
const OtherLink = styled(Link)`
  padding-left: 20px;
  color: black;
  font-weight: 12;
  font-size: 0.5em;
  text-decoration: none;
  font-family: "Inconsolata";
`

const Header = ({ siteTitle }) => (
  <SiteHeader>
    <Inner>
      <Heading>
        <HomeLink to="/">{siteTitle}</HomeLink>
        <OtherLink to="/project-page/">Project Page</OtherLink>
        <OtherLink to="/about/">About</OtherLink>
      </Heading>
    </Inner>
  </SiteHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
