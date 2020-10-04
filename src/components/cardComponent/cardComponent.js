import React,{Component} from "react";
import "./cardComponent.css";
import CourseDetail from '../../pages/courseDetail/courseDetail'
import {
    Route,
    Link
  } from 'react-router-dom';
class CardComponent extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props);
    }

    render(){
        return(
            <div className="">
            <div className="card mb-3" >
                <div className="row no-gutters">
            <div className="col-md-3 search-course-card--card--left-col--3kKip">
                <a href={`${this.props.LinkToCourse}`}>
                    <img className="card-img" src="https://udemy-images.udemy.com/course/304x171/625204_436a_2.jpg" alt="course image" width="304" height="171" className="aradhna_card__image">    
                    </img>
                </a>        
            </div>
            <div className="col-md-9">
                <div className="card-body">
                    <div className="from">
                        <div>
                            <img className='iconDetails' src="https://www.vectorlogo.zone/logos/udemy/udemy-icon.svg" alt="udemy" >
                            </img>
                        </div>
                       <p>{this.props.platform}</p>
                    </div>
                    <div className="card__head">
                        <a href={`${this.props.LinkToCourse}`} className="card__title">{this.props.NameofCourse}</a>
                        {/* <div className="col-right-0 time"><span className="star" aria-hidden="true">★★★★★</span></div> */}
                        {
                        this.props.Rating?
                        <div className="col-right-0 time"><span className="star" aria-hidden="true">{this.props.Rating}★</span></div>
                        :""
                        }
                    </div>
                   
                    <p className="summary">
                        The only course you need to learn <strong>web</strong> <strong>development</strong> - HTML, CSS, JS, Node, and More!
                    </p>
                    
                    <div className="fluid-row">
                            <div className="col-left-0 upvotes">
                                {/* <i className="fa fa-chalkboard-teacher"></i>  */}
                                {this.props.Instructor}
                            </div>
                            <div className="col-left-0 upvotes">
                            {/* <span><i className="fa fa-stopwatch"></i></span> */}
                                 9 hours
                                
                            </div>
                            <div className="col-left-0 upvotes" style={{color:"green"}}>
                                Price: $13   
                            </div>
                            <Link to={`/${this.props.nameOfSkill}/${this.props.Id}`} className="read_more">                          
                                SEE DETAILS
                            </Link>
                            
                    </div>
                </div>  
            </div>
        </div>
        </div>
        </div>
          
        );
    }
}

export default CardComponent;