import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import * as styles from "./header.module.css"

const SiteHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`

const Inner = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`

const Heading = styled.h1`
  margin: 0;
`

const HomeLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <SiteHeader>
    <Inner>
      <Heading>
        <HomeLink to="/">{siteTitle}</HomeLink>
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
