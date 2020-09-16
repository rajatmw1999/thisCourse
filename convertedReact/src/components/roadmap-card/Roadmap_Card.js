import React , {Component} from 'react';

import './Roadmap_Card.css';
import renderHtml from 'react-render-html'


class RoadmapCard extends Component{
constructor(props)
{
  super(props);
  console.log(this.props);
}
      render() {
        return(
        
          <div className="hello col-12 col-md-4" style={{marginBottom: "2rem"}} >
<a target="_blank" href={`/roadmap/${this.props.Id}`}>
<div className="card roadmap" >
  <img className="card-img-top" src={this.props.image} alt="Roadmap Image"></img>
  <div className="card-body">
    <h2 className="card-title h4tag">{this.props.name}</h2>
    {this.props.text?
  <p className="card-text">{renderHtml(this.props.text.substring(0,45))}...</p>:""  
  }
    
    <div >
    <span ><em>{this.props.author}</em></span> <span className="spantag">{this.props.likes} Upvotes</span> 
    {/* <span className="spantag">344000 Views</span> */}
    </div>
  </div>
</div>
</a>
          </div>
    
          
          
        );
    }
  }
    

export default RoadmapCard;
