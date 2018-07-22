import React from "react"
import SwiftRow from "./SwiftRow"
import { FilterableSwiftTableContext } from "../../../containers/FilterableSwiftTableContainer"

const SwiftTable = props => {
  return (
    <div>
      <h3>Results</h3>
      <FilterableSwiftTableContext.Consumer>
        {({ swifts }) => swifts.map(swift => <SwiftRow swift={swift} key={swift} />)}
      </FilterableSwiftTableContext.Consumer>
    </div>
  )
}

export default SwiftTable
