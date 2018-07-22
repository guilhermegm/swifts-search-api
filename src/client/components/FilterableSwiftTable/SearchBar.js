import React from "react"
import { FilterableSwiftTableContext } from "../../containers/FilterableSwiftTableContainer"

class SearchBar extends React.Component {
  handleQueryChange = e => {
    this.props.onQueryChange(e.target.value)
  }

  render() {
    return (
      <div>
        <FilterableSwiftTableContext.Consumer>
          {({ query }) => (
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={this.handleQueryChange}
            />
          )}
        </FilterableSwiftTableContext.Consumer>
      </div>
    )
  }
}

export default SearchBar
