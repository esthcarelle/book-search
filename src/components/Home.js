import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ListOfBooks from "./ListOfBooks";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Details from "./Details";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import './Home.css'
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
      test:false,
      valueFromHomeSearch:"",
      totalItems:0
    };
    this.onChange = this.onChange.bind(this);
    this.getDetails = this.getDetails.bind(this);
    this.getBookAuthors = this.getBookAuthors.bind(this);
    this.getBookCategories = this.getBookCategories.bind(this);
    this.changePageOnClick = this.changePageOnClick.bind(this);
  }
  onChange = async e => {
    e.preventDefault();
    this.setState({ showDetails: false });
    this.setState({ loading: true });
    const URL = `https://www.googleapis.com/books/v1/volumes`;
    this.setState({ query: e.target.searchValue.value });
    await axios
      .get(`${URL}?q=${e.target.searchValue.value}&maxResults=30`)
      .then(res => {
        this.setState({ loading: false });
        this.setState({totalItems:res.data.totalItems})
        this.setState({ books: res.data.items });
        
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  getDetails = (book, event) => {
    this.setState({ bookDetails: book });
    this.setState({ showDetails: true });
    console.log(book);
  };
  getBookAuthors = authors => {
    if (authors) {
      if (authors.length === 2) {
        authors = authors.join(" and ");
      } else if (authors.length > 2) {
        let lastAuthor = " and " + authors.slice(-1);
        authors.pop();
        authors = authors.join(", ");
        authors += lastAuthor;
      }
      return authors;
    }
  };
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
  changePageOnClick =async  e => {
    e.preventDefault();
   if(e.target.searchValue.value.length===0)
   return toast("Field can't be empty!", { type: "info" });
    this.setState({ showResults: true });
    this.setState({valueFromHomeSearch:e.target.searchValue.value})
    this.setState({ loading: true });
    const URL = `https://www.googleapis.com/books/v1/volumes`;
    this.setState({ query: e.target.searchValue.value });
    await axios
      .get(`${URL}?q=${e.target.searchValue.value}&maxResults=30`)
      .then(res => {
        this.setState({ loading: false });
        this.setState({totalItems:res.data.totalItems})
        this.setState({ books: res.data.items });
       
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="container-fluid" >
        <div className="bg_color">
        {!this.state.showResults ? (
          <LandingPage changePageOnClick={this.changePageOnClick}  />
        ) : (
          <div className="row padding">
            <div className="col-md-1"><h5><span className="book_color">Book </span>Search</h5></div>
            <div className="col-md-11">
              <SearchBar
              valueFromHomeSearch={this.state.valueFromHomeSearch}
                onChange={this.onChange.bind(this)}
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
  <p>2020@Copyright...Esther Carrelle For Panavis</p>
</div>
      </div>
      <ToastContainer />
      </div>
    );
  }
}
export default Home;
