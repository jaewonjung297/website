import { Link } from "@reach/router"
import React from "react"

export default function Navbar() {
  return (
    <nav>
      <h1>jaewonjung.com</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/project-page/">Projects</Link>
      </div>
    </nav>
  )
}
