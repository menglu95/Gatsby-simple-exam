import React from "react"
import Header from "./components/header"
import { Link } from "gatsby"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Header headerText="About Gatsby" arbitraryPhrase="is arbitrary" />
      <Header headerText="Hello" arbitraryPhrase="OK" />
      <p>Such wow. Very React</p>
      <Link to={"/contact/"}>Contact</Link>
    </div>
  )
}
