import React, { Component } from "react";
import "./SearchBar.css";


class SearchBar extends Component {

    constructor(props){
        super(props);
       
    }
    
  render() {
    return (
      <div className="container-fluid">
        <div className="search-container">
          <form className="main-search">
            <input
              type="text"
              value={this.props.query}
              placeholder="Search country"
              name="searchText"
              onChange={this.props.onChange}
              className="rounded-pill"
            />
          </form>
        </div>
      </div>
    );
  }
}
export default SearchBar;
