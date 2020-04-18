import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ListOfBooks from "./ListOfBooks";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Details from "./Details";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      query: "",
      loading: false
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange = e => {
    e.preventDefault();
    this.setState({ loading: true });
    const URL = `https://www.googleapis.com/books/v1/volumes`;
    this.setState({ query: e.target.value });
    axios
      .get(`${URL}?q=${this.state.query}&maxResults=30`)
      .then(res => {
        this.setState({ loading: false });
        this.setState({ books: res.data.items });
        console.log(this.state.books[0]);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  getDetails = (event, book) => {
    event.preventDefault();
    console.log(book);
  };
  render() {
    return (
      <div>
        <div className="row no-gutters">
          <div className="col-12 my-4">
            <SearchBar
              onChange={this.onChange.bind(this)}
              query={this.state.query}
            />
          </div>
          {!this.state.loading ? (
            <ListOfBooks
              getDetails={this.getDetails}
              books={this.state.books}
            />
          ) : (
            <div className="d-flex justify-content-center pt-5">
              <span>fetching...</span>
            </div>
          )}
          <Details />
        </div>
      </div>
    );
  }
}
export default Home;
