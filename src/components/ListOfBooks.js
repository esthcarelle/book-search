import React,{Component}  from 'react'
import './ListOfBooks.css'

class ListOfBooks extends Component{

    render(){
       
        return(
            <div className="container-card-content p-4 mt-3">
                {this.props.books ? this.props.books.map(book =>{
                    return (
<div class="card card_width" >
  <img className="card-img-top" src={book.volumeInfo.imageLinks.smallThumbnail} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{book.volumeInfo.title}</h5>
    <p className="card-text">Authors:

    </p>
    <p className="card-text">Publishing house:{book.volumeInfo.publisher}</p>
    <a onClick={this.props.getDetails(this,book)} class="btn btn-primary">Get more details</a>
  </div>
</div>
                    )
                    }  
                ):(
<div>No books with that query</div>
                )}
                
            
           
           
                

</div>
        )
    }
}
export default ListOfBooks;