import React from "react"
import FilterableSwiftTable from "../components/FilterableSwiftTable"

export const FilterableSwiftTableContext = React.createContext({
  query: "",
  swifts: []
})

class FilterableSwiftTableContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: "",
      swifts: []
    }
  }

  getSwifts = async query => {
    const swifts = await fetch(`/api?query=${query}&country_code=US`).then(res => res.json())

    this.setState({ query, swifts })
  }

  render() {
    return (
      <FilterableSwiftTableContext.Provider value={this.state}>
        <FilterableSwiftTable onQueryChange={this.getSwifts} />
      </FilterableSwiftTableContext.Provider>
    )
  }
}

export default FilterableSwiftTableContainer
