import React from "react"
import FilterableSwiftTable from "../components/FilterableSwiftTable"

class FilterableSwiftTableContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      swifts: [],
      query: ""
    }
  }

  getSwifts = async query => {
    const swifts = await fetch(`/api?query=${query}&country_code=US`).then(
      res => res.json()
    )

    this.setState({ query, swifts })
  }

  render() {
    return (
      <FilterableSwiftTable
        swifts={this.state.swifts}
        query={this.state.query}
        onQueryChange={this.getSwifts}
      />
    )
  }
}

export default FilterableSwiftTableContainer
