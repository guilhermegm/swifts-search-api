import React from "react"
import SwiftRow from "./SwiftRow"

const SwiftTable = props => {
  return (
    <div>
      <h3>Results</h3>
      {props.swifts.map(swift => <SwiftRow swift={swift} key={swift} />)}
    </div>
  )
}

export default SwiftTable
