import React from "react"
import { shallow, mount, render } from "enzyme"
import Enzyme from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import FilterableSwiftTable from "./index"
import SearchBar from "./SearchBar"
import SwiftTable from "./SwiftTable"

Enzyme.configure({ adapter: new Adapter() })

describe('FilterableSwiftTable', () => {
  it("renders properly", () => {
    const query = "test"
    const onQueryChange = "onQueryChange"
    const swifts = "swifts"
    const wrapper = shallow(
      <FilterableSwiftTable query={query} onQueryChange={onQueryChange} swifts={swifts} />
    )
    const searchBar = wrapper.find(SearchBar)
    const swiftTable = wrapper.find(SwiftTable)
  
    expect(wrapper.find("div").length).toBe(1)
  
    expect(searchBar.length).toBe(1)
    expect(searchBar.props().query).toBe(query)
    expect(searchBar.props().onQueryChange).toBe(onQueryChange)
  
    expect(swiftTable.length).toBe(1)
    expect(swiftTable.props().swifts).toBe(swifts)
  })
})
