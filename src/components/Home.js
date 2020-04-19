import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ListOfBooks from "./ListOfBooks";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Details from "./Details";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "./Home.css";
import LandingPage from "./LandingPage";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      query: "",
      loading: false,
      showDetails: false,
      bookDetails: {},
      showResults: false,
      test: false,
      valueFromHomeSearch: "",
      totalItems: 0
    };
    this.fetchBooks = this.fetchBooks.bind(this);
    this.getDetails = this.getDetails.bind(this);
    this.getBookAuthors = this.getBookAuthors.bind(this);
    this.getBookCategories = this.getBookCategories.bind(this);
    this.changePageOnClick = this.changePageOnClick.bind(this);
    this.goBackToLandingPage = this.goBackToLandingPage.bind(this);
  }
  // componentDidMount(){
  //   if(localStorage.getItem("currentComponent")){
  //     if(localStorage.getItem("currentComponent")==="results"){

  //       this.reloadPage();
  //     }
  //     else if(localStorage.getItem("currentComponent")==="details"){
  //       this.setState({bookDetails:localStorage.getItem("bookDetails")});
  //       this.setState({showDetails:true});
  //       console.log(localStorage.getItem("bookDetails"))
  //     }
  //     else
  //     this.setState({showResults:false})

  //   }
  // }
  reloadPage = () => {
    this.setState({ loading: true });
    let query = localStorage.getItem("query");
    this.setState({ showResults: true });
    console.log(query);
    const URL = `https://www.googleapis.com/books/v1/volumes`;
    this.setState({ valueFromHomeSearch: query });
    axios
      .get(`${URL}?q=${query}&maxResults=30`)
      .then(res => {
        this.setState({ loading: false });
        this.setState({ totalItems: res.data.totalItems });
        this.setState({ books: res.data.items });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  //this function is for fetching the books from the api
  fetchBooks = async e => {
    e.preventDefault();
    //verify if the value is not empty
    if (e.target.searchValue.value.length === 0)
      return toast("Field can't be empty!", { type: "info" });
    this.setState({ showDetails: false });
    this.setState({ loading: true });
    const URL = `https://www.googleapis.com/books/v1/volumes`;
    this.setState({ query: e.target.searchValue.value });
    await axios
      .get(`${URL}?q=${e.target.searchValue.value}&maxResults=30`)
      .then(res => {
        this.setState({ loading: false });
        //set total number of books
        this.setState({ totalItems: res.data.totalItems });
        //set boos to state
        this.setState({ books: res.data.items });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  //get all details from a specific book
  getDetails = (book, event) => {
    this.setState({ bookDetails: book });
    this.setState({ showDetails: true });
  };
  // get all book authors of one book
  getBookAuthors = authors => {
    if (authors) {
      if (authors.length === 2) {
        authors = authors.join(" and ");
      } else if (authors.length > 2) {
        //concatenate with the last author with an 'and'
        let lastAuthor = " and " + authors.slice(-1);
        authors.pop();
        authors = authors.join(", ");
        authors += lastAuthor;
      }
      return authors;
    }
  };
  //get all book categories of a book
  getBookCategories = categories => {
    if (categories) {
      if (categories.length === 2) {
        categories = categories.join(" and ");
      } else if (categories.length > 2) {
        let lastcategory = " and " + categories.slice(-1);
        categories.pop();
        categories = categories.join(", ");
        categories += lastcategory;
      }

      return categories;
    }
  };
  //this function will help us to reload from the landing page to the results page with all the results
  changePageOnClick = async e => {
    e.preventDefault();
    if (e.target.searchValue.value.length === 0)
      return toast("Field can't be empty!", { type: "info" });
    this.setState({ showResults: true });
    this.setState({ showDetails: false });
    //set the value inserted in input to the state
    this.setState({ valueFromHomeSearch: e.target.searchValue.value });
    this.setState({ loading: true });
    const URL = `https://www.googleapis.com/books/v1/volumes`;
    this.setState({ query: e.target.searchValue.value });
    //fetch from API
    await axios
      .get(`${URL}?q=${e.target.searchValue.value}&maxResults=30`)
      .then(res => {
        this.setState({ loading: false });
        this.setState({ totalItems: res.data.totalItems });
        this.setState({ books: res.data.items });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  //this is for going back to the landing page
  goBackToLandingPage = () => {
    this.setState({ showResults: false });
    this.setState({ showDetails: false });
  };
  render() {
    //these conditions are for routes
    if (this.state.showDetails) {
      window.history.pushState("currentComponent", "Details", "/details");
      localStorage.setItem("currentComponent", "details");
      localStorage.setItem("details", this.state.bookDetails);
    } else if (this.state.showResults) {
      window.history.pushState("currentComponent", "Results", "/results");

      localStorage.setItem("currentComponent", "results");

      localStorage.setItem("query", this.state.query);
    } else {
      window.history.pushState("currentComponent", "Landing", "/");
    }
    return (
      <div className="container-fluid">
        <div className="bg_color">
          {!this.state.showResults ? (
            <LandingPage changePageOnClick={this.changePageOnClick} />
          ) : (
            <div className="row padding">
              <div className="col-md-1">
                <h5 onClick={this.goBackToLandingPage}>
                  <span className="book_color">Book </span>Search
                </h5>
              </div>
              <div className="col-md-11">
                <SearchBar
                  valueFromHomeSearch={this.state.valueFromHomeSearch}
                  fetchBooks={this.fetchBooks.bind(this)}
                  query={this.state.query}
                />
              </div>
              {this.state.showDetails ? (
                <div className="col-12">
                  <Details
                    getBookAuthors={this.getBookAuthors}
                    bookDetails={this.state.bookDetails}
                    getBookCategories={this.getBookCategories}
                  />
                </div>
              ) : (
                <div className="col-12">
                  {!this.state.loading ? (
                    <ListOfBooks
                      totalItems={this.state.totalItems}
                      getBookAuthors={this.getBookAuthors}
                      getDetails={this.getDetails}
                      books={this.state.books}
                    />
                  ) : (
                    <div className="d-flex justify-content-center pt-5">
                      <i className="fa fa-spinner fa-2x custom-spinner fa-spin"></i>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
          <div className="footer">
            <p>2020@Copyright...Esther Carrelle For Panavis Inc</p>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
}
export default Home;
