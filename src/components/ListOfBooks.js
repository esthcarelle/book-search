import React, { Component } from "react";
import "./ListOfBooks.css";

class ListOfBooks extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row" id="bg_color">
          <div className="col-md-1"></div>
          <div className="col-md-11">
            <p>{this.props.totalItems} books found</p>

            <div className="container-card-content p-4 mt-3 font_size">
              {this.props.books.length ? (
                this.props.books.map(book => {
                  return (
                    <div class="card card_width">
                      {book.volumeInfo.imageLinks ? (
                        <img
                          className="card-img-top"
                          src={book.volumeInfo.imageLinks.thumbnail}
                          alt="Card image cap"
                        />
                      ) : (
                        <img
                          className="card-img-top"
                          src="https://whatworksconsultants.com/wp-content/uploads/2014/06/book.jpg"
                          alt="Card image cap"
                        />
                      )}
                      <div className="card-body">
                        <h5 className="card-title">{book.volumeInfo.title}</h5>
                        {book.volumeInfo.authors ? (
                          <p className="card-text">
                            Authors:
                            {this.props.getBookAuthors(book.volumeInfo.authors)}
                          </p>
                        ) : null}
                        {book.volumeInfo.publisher ? (
                          <p className="card-text">
                            Publishing house:{book.volumeInfo.publisher}
                          </p>
                        ) : null}
                        <a
                          onClick={this.props.getDetails.bind(this, book)}
                          className="btn btn-primary blue_color size"
                        >
                          Get more details
                        </a>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div>No available books!!</div>
              )}

              <br></br>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ListOfBooks;
