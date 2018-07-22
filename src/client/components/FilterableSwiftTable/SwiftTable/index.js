import React from "react"
import SwiftRow from "./SwiftRow"
import { FilterableSwiftTableContext } from "../../../containers/FilterableSwiftTableContainer"

const SwiftTable = props => {
  return (
    <div>
      <h3>Results</h3>
      <FilterableSwiftTableContext.Consumer>
        {({ swifts }) =>
          swifts.map(swift => (
            <SwiftRow
              text={`City: ${swift.city} - Bank: ${swift.bank} - SWIFT: ${swift.swift_code}`}
              key={swift.id}
            />
          ))
        }
      </FilterableSwiftTableContext.Consumer>
    </div>
  )
}

export default SwiftTable
