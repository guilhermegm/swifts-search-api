import React from "react"
import SearchBar from "./SearchBar"
import SwiftTable from "./SwiftTable"

const FilterableSwiftTable = props => {
  return (
    <div>
      <SearchBar onQueryChange={props.onQueryChange} />
      <SwiftTable />
    </div>
  )
}

export default FilterableSwiftTable
