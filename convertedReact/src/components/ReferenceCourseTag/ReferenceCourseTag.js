import React, {Component} from "react";
import "./index.css";
// import photo from './img/1.png'
import {domain} from '../../data/hosted'
class ReferenceCourseTag extends Component {
constructor(props){
  super(props);
  console.log("Inside ReferenceCourseTag = " + this.props.category);
  this.state={
    loading:true,
    roadmaps:[
      {
        ImageLink:"https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        NameofAuthor:"Admin",
        NameOfRoadmap:"Roadmap1",
        Likes:0,
        Category:"category",
        Text:""
      },
      {
        ImageLink:"https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        NameofAuthor:"Admin",
        NameOfRoadmap:"Roadmap2",
        Likes:0,
        Category:"category",
        Text:""
      },
      {
        ImageLink:"https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        NameofAuthor:"Admin",
        NameOfRoadmap:"Roadmap3",
        Likes:0,
        Category:"category",
        Text:""
      },
    ], 
    error:null
  }
}

componentDidMount(){
  var category = this.props.category.toLowerCase();
  var resultFetch;
  console.log(category);
  var fetchRoadmaps = domain + "roadmap/category/" + category;
        fetch(`${fetchRoadmaps}`)
          .then(res => res.json())
          .then(
            (result) => {
            console.log(result);
            resultFetch=result;
            this.setState({
              loading: false,
              roadmaps:resultFetch
            });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                loading: false,
                roadmaps:resultFetch,
                error
              });
            }
          )
        //   console.log(this.state.items);
}

  render() {
        return (
         
          <div  className="rajat_referencetag_outermostdiv">
        <div className="rajat_referencetag_outermostdiv">
        <div class="team rajat_card1">
        <div class="team-img">
          <img src={`${this.state.roadmaps[0].ImageLink}`} alt="Team Image"/>
        </div>
        
        <div class="team-content">
            <br/>
          
          <div class="col-4 aradhna_referencecoursedetainicons">
          {/* <i class="fas fa-lg fa-book-open" style={{color:"rgba(255,123,123,1)"}}></i>{' '} */}
          <em><span>{this.state.roadmaps[0].Category}</span></em>
          </div>
          {/* <div class="col-4 aradhna_referencecoursedetainicons">
          <i class="far fa-lg fa-eye" style={{color:"rgba(55,52,235,1)"}}></i>{' '}
          <span>{this.state.roadmaps[0].Category}</span>
          </div> */}
          <div class="col-4 aradhna_referencecoursedetainicons">
          <i class="fas fa-lg fa-long-arrow-alt-up" style={{color:"rgba(0,153,46,1)" }}></i>{' '}
          <span>{this.state.roadmaps[0].Likes}</span>
          </div>
          <br/>
          <hr/>
        <h3 className="col-12 heading_refcoursedetail" style={{textAlign:"left"}}>{this.state.roadmaps[0].NameOfRoadmap}</h3>
          {/* <h3>CEO &amp; Founder</h3> */}
          <p className="col-12" style={{textAlign:"left"}}>
          {this.state.roadmaps[0].Text.substring(0,50)}...
          </p>
        </div>
        </div>

        <div class="team rajat_card2">
        <div class="team-img">
          <img src={`${this.state.roadmaps[1].ImageLink}`} alt="Team Image"/>
        </div>
        
        <div class="team-content">
            <br/>
          
          <div class="col-4 aradhna_referencecoursedetainicons">
          {/* <i class="fas fa-lg fa-book-open" style={{color:"rgba(255,123,123,1)"}}></i>{' '} */}
          <em><span>{this.state.roadmaps[1].Category}</span></em>
          </div>
          {/* <div class="col-4 aradhna_referencecoursedetainicons">
          <i class="far fa-lg fa-eye" style={{color:"rgba(55,52,235,1)"}}></i>{' '}
          <span>{this.state.roadmaps[0].Category}</span>
          </div> */}
          <div class="col-4 aradhna_referencecoursedetainicons">
          <i class="fas fa-lg fa-long-arrow-alt-up" style={{color:"rgba(0,153,46,1)" }}></i>{' '}
          <span>{this.state.roadmaps[1].Likes}</span>
          </div>
          <br/>
          <hr/>
        <h3 className="col-12 heading_refcoursedetail" style={{textAlign:"left"}}>{this.state.roadmaps[1].NameOfRoadmap}</h3>
          {/* <h3>CEO &amp; Founder</h3> */}
          <p className="col-12" style={{textAlign:"left"}}>
          {this.state.roadmaps[1].Text.substring(0,50)}...
          </p>
        </div>
        </div>

        <div class="team rajat_card3">
        <div class="team-img">
          <img src={`${this.state.roadmaps[2].ImageLink}`} alt="Team Image"/>
        </div>
        
        <div class="team-content">
            <br/>
          
          <div class="col-4 aradhna_referencecoursedetainicons">
          {/* <i class="fas fa-lg fa-book-open" style={{color:"rgba(255,123,123,1)"}}></i>{' '} */}
          <em><span>{this.state.roadmaps[2].Category}</span></em>
          </div>
          {/* <div class="col-4 aradhna_referencecoursedetainicons">
          <i class="far fa-lg fa-eye" style={{color:"rgba(55,52,235,1)"}}></i>{' '}
          <span>{this.state.roadmaps[0].Category}</span>
          </div> */}
          <div class="col-4 aradhna_referencecoursedetainicons">
          <i class="fas fa-lg fa-long-arrow-alt-up" style={{color:"rgba(0,153,46,1)" }}></i>{' '}
          <span>{this.state.roadmaps[2].Likes}</span>
          </div>
          <br/>
          <hr/>
        <h3 className="col-12 heading_refcoursedetail" style={{textAlign:"left"}}>{this.state.roadmaps[2].NameOfRoadmap}</h3>
          {/* <h3>CEO &amp; Founder</h3> */}
          <p className="col-12" style={{textAlign:"left"}}>
          {this.state.roadmaps[2].Text.substring(0,50)}...
          </p>
        </div>
        </div>
        </div>
        
         <a className="btn btn-outline-primary rajat_explore_roadmap_button rajat_card1" href="#">Explore More Roadmaps</a>
         <br />
         <br />
         <br />
         
         </div>
        
        );
  
  }
}

export default ReferenceCourseTag 