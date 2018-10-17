import React, { Component } from "react";
import "./searchPanel.css";

class SearchPanel extends Component {
  state = {
    inpSearch: ""
  };

  onSearch = e => {
    const { onSearchChange = () => {} } = this.props;
    this.setState({ inpSearch: e.target.value });
    onSearchChange(e.target.value);
  };
  // onSearch = e => {
  //   this.setState({ inpSearch: e.target.value });
  //   this.onSearchChange(e.target.value);
  // };
  // onSearchChange = s => {
  //   this.props.onSearchChange(s);
  // };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Search"
        value={this.state.inpSearch}
        onChange={this.onSearch}
      />
    );
  }
}

export default SearchPanel;
