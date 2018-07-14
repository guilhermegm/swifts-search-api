import React from "react"
import SearchBar from "./SearchBar"
import SwiftTable from "./SwiftTable"

const FilterableSwiftTable = props => {
  return (
    <div>
      <SearchBar query={props.query} onQueryChange={props.onQueryChange} />
      <SwiftTable swifts={props.swifts} />
    </div>
  )
}

export default FilterableSwiftTable
