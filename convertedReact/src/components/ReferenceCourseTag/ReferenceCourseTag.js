import React, {Component} from "react";
import "./index.css";
// import photo from './img/1.png'

class ReferenceCourseTag extends Component {
    render() {
        return <div class="team">
        <div class="team-img">
          <img src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Team Image"/>
        </div>
        
        <div class="team-content">
            <br/>
          
          <div class="col-4 aradhna_referencecoursedetainicons">
          <i class="fas fa-lg fa-book-open" style={{color:"rgba(255,123,123,1)"}}></i>{' '}
          <span>4.5 (120)</span>
          </div>
          <div class="col-4 aradhna_referencecoursedetainicons">
          <i class="far fa-lg fa-eye" style={{color:"rgba(55,52,235,1)"}}></i>{' '}
          <span>28,500</span>
          </div>
          <div class="col-4 aradhna_referencecoursedetainicons">
          <i class="fas fa-lg fa-long-arrow-alt-up" style={{color:"rgba(0,153,46,1)" }}></i>{' '}
          <span>28,500</span>
          </div>
          <br/>
          <hr/>
          <h3 className="col-12 heading_refcoursedetail" style={{textAlign:"left"}}>Best Way To Learn Pyhton As A
          Beginner</h3>
          {/* <h3>CEO &amp; Founder</h3> */}
          <p className="col-12" style={{textAlign:"left"}}>
          You Will Learn Pyhton Programming Language From Scratch To Advanced
          </p>
          <div class="team-skill">
            <div class="col-3 aradhna_referencecoursedetainicons">
                <img style={{height:"200", width:"200"}} src="Ellipse_5_bvd.png" srcset="Ellipse_5_bvd.png 1x, Ellipse_5_bvd@2x.png 2x"/>
				
            </div>
            <div class="col-3 aradhna_referencecoursedetainicons">
                <span>{'   '}Charles Jones</span>
				
            </div>
            <div class="col-6 aradhna_referencecoursedetainicons">
               
				
            </div>

            {/* <div class="col-6 aradhna_referencecoursedetainicons" style={{bottom:"40px" ,left:"20"}}>
            
							<span  id="ID9999_bvg">$99.99</span>
					
					
							<span id="ID3965_bvh">$39.65</span>
						
					
					
				
            </div> */}
            <br/>
    
         
           
          </div>
        </div>
        </div>

                                    
                                   
    }
}

export default ReferenceCourseTag 