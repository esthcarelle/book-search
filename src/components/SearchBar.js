import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.valueFromHomeSearch);
    return (
      <div className="container-fluid">
        <form onSubmit={this.props.onChange}>
          <div class="input-group md-form form-sm form-2 pl-0">
            <input
              class="form-control my-0 py-1 "
              type="text"
              id="searchValue"
              placeholder="Search bool"
              defaultValue={this.props.valueFromHomeSearch}
              aria-label="Search"
            />
            <div
              class="input-group-append "
              type="text"
              placeholder="Search book"
              name="searchText"
              onChange={this.props.onChange}
            >
              <button
                class="input-group-text blue_blackground lighten-3"
                type="submit"
                id="basic-text1"
              >
                <i class="fas fa-search  text-white" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
