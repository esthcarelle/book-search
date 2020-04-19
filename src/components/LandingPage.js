import React,{Component} from 'react'
import './LandingPage.css'
class LandingPage extends Component{
   
    render(){
        return(<div className="container-fluid" >
            <h1  className="title"><span className="book_color">Book </span>Search</h1>
           <div className="box">
               <form onSubmit={this.props.changePageOnClick}>
           <div class="input-group md-form form-sm form-2 pl-0">
  <input class="form-control my-0 py-1 " id="searchValue" type="text" placeholder="Search" aria-label="Search"/>
  <div class="input-group-append "  >
    <button class="input-group-text blue_blackground lighten-3" type="submit"  id="basic-text1"><i class="fas fa-search  text-white"
        aria-hidden="true"></i></button>
  </div>
</div>  
</form>        
        </div>
        
        </div>)
    }
}
export default LandingPage