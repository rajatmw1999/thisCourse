import React , {Component} from 'react';
import {domain} from '../../data/hosted'

import './style.css';


class Roadmap extends Component{
    constructor(props){
      super(props);
      this.state={
        loading:true,
        roadmaps:"",
        error:null,
        display:null,
        heading:"",
        troadmap:"",
        terror:"",
        tloading:"",
        tdisplay:""
      }
      console.log(this.props);
    };
      
    async componentDidMount(){
      // localhost:5000/roadmap/category/development
      if(this.props.criteria == "category")
      {
      var fetchSkills = domain + "roadmap/category/" + this.props.category;
            console.log(fetchSkills);
            await fetch(`${fetchSkills}`)
              .then(res => res.json())
              .then(
                (result) => {
                console.log(result);
                this.setState({
                    roadmaps:result,
                    loading:false,
                    heading:"Users Also Read"
                })
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                  this.setState({
                    loading: false,
                    error
                  });
                }
          );
          var dataLimit = [];
          for(let i=0; i<6; ++i)
          {
              if(this.state.roadmaps[i])
              dataLimit.push(this.state.roadmaps[i])
          }
            
          var displayData = dataLimit.map((data) => 
          <a href={`/roadmap/${data._id}`} >
            <div className="single-other-article">
            <div className="picture">
            <img width="100" height="100" src={`${data.ImageLink}`}></img>
            </div>
            <div className="content">
            <h3 className="aradhna_readmoreheading  fw-bold mb-0">{data.NameOfRoadmap}</h3>
            <h4 className="fs-base">
            {data.NameofAuthor} - <time datetime="2020-07-17T06:11:03Z" title="Friday, 17 July, 2020, 11:41:03 am">Jul 17</time>
          </h4>
        </div>
      </div>
    </a>
          )
          this.setState({
            display:displayData
          }); 
        }
        if(this.props.criteria == "likes")
        {
          var fetchSkills = domain + "roadmap/10";
            console.log(fetchSkills);
            await fetch(`${fetchSkills}`)
              .then(res => res.json())
              .then(
                (result) => {
                console.log(result);
                this.setState({
                    troadmaps:result,
                    tloading:false,
                    theading:"Trending Roadmaps"
                })
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                  this.setState({
                    tloading: false,
                    terror:error
                  });
                }
          );
          var dataLimit = [];
          for(let i=0; i<10; ++i)
          {
              if(this.state.troadmaps[i])
              dataLimit.push(this.state.troadmaps[i])
          }
            
          var displayData = dataLimit.map((data) => 
          <a href={`/roadmap/${data._id}`} >
            <div className="single-other-article">
            <div className="picture">
            <img width="100" height="100" src={`${data.ImageLink}`}></img>
            </div>
            <div className="content">
            <h3 className="aradhna_readmoreheading  fw-bold mb-0">{data.NameOfRoadmap}</h3>
            <h4 className="fs-base">
            {data.NameofAuthor} - <time datetime="2020-07-17T06:11:03Z" title="Friday, 17 July, 2020, 11:41:03 am">{data.DatePublished}</time>
          </h4>
        </div>
      </div>
    </a>
          )
          this.setState({
            tdisplay:displayData
          }); 
        }
      }
    
    render() {
      return(
    <div>
        <div className="crayons-layout__content grid col-sm-12 col-md-12 col-lg-4 col-xl-4">     
        <div className="more-articles crayons-card crayons-card--secondary">
  {/* <h1 className="fs-4xl fw-bold mb-4">
    
    Read Next
  </h1> */}
  {this.state.display}
    {this.state.tdisplay}
    
    {/* <a href="#" >
      <div className="single-other-article">
        <div className="picture">
          <img width="100" height="100" src="1.jpg"></img>
        </div><div className="content">
          <h3 className="aradhna_readmoreheading  fw-bold mb-0">Understanding Non-Relational (NoSQL) Databases (Part 1)</h3>
          <h4 className="fs-base">
            Nyasha (Nash) Nziramasanga - <time datetime="2020-07-17T06:11:03Z" title="Friday, 17 July, 2020, 11:41:03 am">Jul 17</time>
          </h4>
        </div>
      </div>
    </a>
    <a href="#">
      <div className="single-other-article">
        <div className="picture">
          <img width="100" height="100" src="2.jpg"></img>
        </div><div className="content">
          <h3 className="aradhna_readmoreheading  fw-bold mb-0">How to Build an Alexa Skill using Python</h3>
          <h4 className="fs-base">
            Trilochan Parida - <time datetime="2020-07-17T04:31:51Z" title="Friday, 17 July, 2020, 10:01:51 am">Jul 17</time>
          </h4>
        </div>
      </div>
    </a>
    <a href="#">
    <div className="single-other-article">
        <div className="picture">
          <img width="100" height="100" src="3.jpg"></img>
        </div><div className="content">
          <h3 className="aradhna_readmoreheading  fw-bold mb-0">Running DPDK Forwarding Applications with Pktgen-DPDK</h3>
          <h4 className="fs-base">
            Mishal Shah - <time datetime="2020-07-16T19:09:05Z" title="Friday, 17 July, 2020, 12:39:05 am">Jul 16</time>
          </h4>
        </div>
      </div>
    </a>
    <a href="#">
      <div className="single-other-article">
        <div className="picture">
          <img width="100" height="100"  src="4.jpg">
          </img>    
        </div><div className="content">
          <h3 className="aradhna_readmoreheading  fw-bold mb-0">Creating a custom name for a foreign key</h3>
          <h4 className="fs-base">
            Joe Avila - <time datetime="2020-07-16T18:41:25Z" title="Friday, 17 July, 2020, 12:11:25 am">Jul 16</time>
          </h4>
        </div>
      </div>
    </a> */}
    
</div>
</div>
        
    </div> 
          
          
        );
    }
  }
 

export default Roadmap;
