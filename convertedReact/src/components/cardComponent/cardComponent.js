import React,{Component} from "react";
import "./cardComponent.css";

class CardComponent extends Component {
    render(){
        return(
            <div className="card mb-3" style={{maxWidth:"900px"}}>
                <div className="row no-gutters">
            <div className="col-md-4 search-course-card--card--left-col--3kKip">
                <a href="/the-web-developer-bootcamp/">
                    <img className="card-img" src="https://udemy-images.udemy.com/course/304x171/625204_436a_2.jpg" alt="course image" width="304" height="171" className="card__image">    
                    </img>
                </a>        
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <div className="from">
                        <div>
                            <img className='iconDetails' src="https://www.vectorlogo.zone/logos/udemy/udemy-icon.svg" alt="udemy" >
                            </img>
                        </div>
                       <p>udemy</p>
                    </div>
                    <div className="card__head">
                        <a href="/the-web-developer-bootcamp/" className="card__title">Web Dev 101: Zero To Hero</a>
                        <div className="col-right-0 time"><span className="star" aria-hidden="true">★★★★★</span></div>
                    </div>
                   
                    <p className="summary">
                        The only course you need to learn <strong>web</strong> <strong>development</strong> - HTML, CSS, JS, Node, and More!
                    </p>
                    
                    <div className="fluid-row">
                            <div className="col-left-0 upvotes">
                                {/* <i className="fa fa-chalkboard-teacher"></i>  */}
                                Michel Ray
                            </div>
                            <div className="col-left-0 upvotes">
                            {/* <span><i className="fa fa-stopwatch"></i></span> */}
                                 9 hours
                                
                            </div>
                            <div className="col-left-0 upvotes" style={{color:"green"}}>
                                Price: $13   
                            </div>
                            <a href="https://betapage.co/startup/time-continuum-app" className="read_more"> 
                                SEE DETAILS
                            </a>
                    </div>
                </div>  
            </div>
        </div>
            </div>
        );
    }
}

export default CardComponent;