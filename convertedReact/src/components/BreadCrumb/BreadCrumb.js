import React, {Component} from "react";
import "./BreadCrumb.css";

class BreadCrumb extends Component {
    render() {
        return (
          
        
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
            
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Personal Development</a></li>
                <li class="breadcrumb-item"><a href="#">Computer Science</a></li>
                <li class="breadcrumb-item active" aria-current="page">Adobe Premiere Pro</li>
                
            </ol> 
        </nav>
   
         
          
      
        );
    }
}

export default BreadCrumb;