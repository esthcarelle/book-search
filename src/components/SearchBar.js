import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <form onSubmit={this.props.fetchBooks}>
          <div class="input-group md-form form-sm form-2 pl-0">
            <input
              class="form-control my-0 py-1 "
              type="text"
              id="searchValue"
              placeholder="Search book"
              defaultValue={this.props.valueFromHomeSearch}
              aria-label="Search"
            />
            <div class="input-group-append ">
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
