import React , {Component} from 'react';


import './style.css';
class Search extends Component{
    

    render() {
      return(
    <div>
        <div className="main">
              <div class="form-group has-search">
              <span class="fa fa-search form-control-feedback"></span>
              <input type="text" class="form-control" placeholder="Search"></input>
            </div>
        </div>
        
    </div> 
          
          
        );
    }
  }
 

export default Search;
