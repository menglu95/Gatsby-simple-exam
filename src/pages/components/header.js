import React from "react"

export default function Header(props) {
  return (
    <div>
      <h1>{props.headerText}</h1>
      <h3>{props.arbitraryPhrase}</h3>
    </div>
  )
}
