import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./Details.css";
class Details extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 col-sm-2 col-lg-2 col-2"></div>
          <div className="col-md-4 col-sm-10 col-lg-4 col-12">
            <div class="card card_width card_height">
              {this.props.bookDetails.volumeInfo.imageLinks ? (
                <img
                  className="card-img-top  image_size"
                  src={this.props.bookDetails.volumeInfo.imageLinks.thumbnail}
                  alt="Card image cap"
                />
              ) : (
                <img
                  className="card-img-top"
                  src="https://whatworksconsultants.com/wp-content/uploads/2014/06/book.jpg"
                  alt="Card image cap"
                />
              )}
              <div className="card-body ">
                <h5 className="card-title">
                  {this.props.bookDetails.volumeInfo.title}
                </h5>
                {this.props.getBookAuthors(
                  this.props.bookDetails.volumeInfo.authors
                ) ? (
                  <p className="card-text">
                    Authors:
                    {this.props.getBookAuthors(
                      this.props.bookDetails.volumeInfo.authors
                    )}
                  </p>
                ) : null}
                {this.props.bookDetails.volumeInfo.publisher ? (
                  <p className="card-text">
                    Publishing house:
                    {this.props.bookDetails.volumeInfo.publisher}
                  </p>
                ) : null}{" "}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 col-sm-12 col-lg-6 color_gray padding">
            <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a
                  class="nav-item nav-link active color_gray"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#nav-home"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Description
                </a>
                <a
                  class="nav-item nav-link color_gray"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="#nav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Details
                </a>
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                {this.props.bookDetails.volumeInfo.description
                  ? this.props.bookDetails.volumeInfo.description
                  : "This book has no description."}
              </div>
              <div
                class="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                {this.props.bookDetails.volumeInfo.categories ? (
                  <p>
                    Categories:
                    {this.props.getBookCategories(
                      this.props.bookDetails.volumeInfo.categories
                    )}
                  </p>
                ) : null}
                {this.props.bookDetails.volumeInfo.pageCount ? (
                  <p>
                    Page count:{this.props.bookDetails.volumeInfo.pageCount}
                  </p>
                ) : null}
                {this.props.bookDetails.volumeInfo.publishedDate ? (
                  <p>
                    Published date:
                    {this.props.bookDetails.volumeInfo.publishedDate}
                  </p>
                ) : null}
                {this.props.bookDetails.volumeInfo.subtitle ? (
                  <p>Subtitle:{this.props.bookDetails.volumeInfo.subtitle}</p>
                ) : null}
                {this.props.bookDetails.saleInfo.saleability ? (
                  <p>
                    Saleability:{this.props.bookDetails.saleInfo.saleability}
                  </p>
                ) : null}
                {this.props.bookDetails.volumeInfo.maturityRating ? (
                  <p>
                    Maturity Rating:
                    {this.props.bookDetails.volumeInfo.maturityRating}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Details;
