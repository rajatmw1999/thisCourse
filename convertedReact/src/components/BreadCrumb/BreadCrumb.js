import React, {Component} from "react";
import "./BreadCrumb.css";

class BreadCrumb extends Component {
    constructor(props){
        super(props);
        // console.log(this.props);
        this.state ={
            loading:true
        };
    }
    async componentDidMount(){
        var first, second, link1, link2;
        if(this.props.criteria == "outermost")
        {
            first = this.props.displayName + ' - Discounts';
            second = this.props.displayName + ' - Guides';
            link1 = "/featured";
            link2 = "/roadmaps";
            this.setState({
                name1:first,
                name2:second,
                link1:link1,
                link2:link2,
                loading:false
            }); 
        }
        else if(this.props.criteria =="courses")
        {
            first = this.props.displayName[0].category;
            link1 = this.props.displayName[0].category + '-c';
            second = this.props.displayName[0].category + ' - Discounts';
            var third = this.props.displayName[0].category + ' - Guides';
            link2 = "/featured";
            var link3 = "/roadmaps";
            this.setState({
                name1:first,
                name2:second,
                link1:link1,
                link2:link2,
                loading:false,
                name3:third,
                link3:link3
            }); 
        }
    }

    render() {
        return (
          
        
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
            
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                {this.state.loading?"":  <li class="breadcrumb-item"><a target="_blank" href={`${this.state.link1}`}>{this.state.name1}</a></li> }
                {this.state.loading?"":  <li class="breadcrumb-item"><a target="_blank" href={`${this.state.link2}`}>{this.state.name2}</a></li> }
                {this.state.loading?"":  <li class="breadcrumb-item"><a target="_blank" href={`${this.state.link3}`}>{this.state.name3}</a></li> }
                {/* {this.state.loading?"":  <li class="breadcrumb-item active" aria-current="page">Adobe Premiere Pro</li> } */}
                
                
                
                
                
                
                
                
            </ol> 
        </nav>
   
         
          
      
        );
    }
}

export default BreadCrumb;