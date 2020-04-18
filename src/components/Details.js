import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
class Details extends Component{
    render(){
        return (<div
            className="col-12 col-lg-4 col-xl-4 px-2 px-md-4 px-lg-4 px-xl-4 pt-4"
            id="rightSidebar"
          >
            <div id="tabcont">
              <div className="tab_container">
                <ul className="nav nav-tabs d-flex " role="tablist">
                  <li className="active ">
                    <a
                       
                   data-toggle="tab"
                    href="#description"
                      
                    >
                      Description
                    </a>
                  </li>
                  <li >
                    <a
                      
                      data-toggle="tab"
                      href="#details"
                     
                    >
                      Details
                    </a>
                  </li>
                </ul>
                <div className="tab-content mt-3" id="myTabContent">
                  <div
                    className="tab-pane fade in active"
                    id="description"
                    
                  >
                    "Description"
                  </div>
                 
                  <div
                    className="tab-pane fade "
                    id="details"
                   
                  >
                    "Details"
                 
                  </div>
                </div>
              </div>
            </div>
  </div>)
    }
}
export default Details