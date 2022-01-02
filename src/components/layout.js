import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./navbar"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          padding: `0 1.0875rem 1.45rem`,
          backgroundImage: "linear-gradient(white, Gainsboro)",
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
            color: "black",
          }}
        >
          Connect with me on
          {` `}
          <a href="https://www.linkedin.com/in/jaewon-jung-09b568180/">
            LinkedIn
          </a>
          !
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
