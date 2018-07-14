import React from "react"

class SearchBar extends React.Component {
  handleQueryChange = e => {
    this.props.onQueryChange(e.target.value)
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.query}
          onChange={this.handleQueryChange}
        />
      </div>
    )
  }
}

export default SearchBar
