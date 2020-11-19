import React, {Component} from "react"
import Navbar from '../../components/Navbar/index';
import {domain} from '../../data/hosted'
import BlogPostRoadmap from '../../components/blogPostRoadmap/blogPostRoadmap';
import AuthorOfRoadmap from '../../components/authorOfRoadmap/authorOfRoadmap';
import Roadmap from '../../components/read-more-roadmap/Roadmap';
import RoadmapMore from '../../components/roadmap-more-cards/Roadmap-more';
import Footer from "../../components/footer/index";
// import Timeline from "../components/timeline/index";
import './index.css';
import Aboutsection from "../../components/about_section/Aboutsection";
import ReferenceCourseTag from "../../components/ReferenceCourseTag/ReferenceCourseTag";
import RoadmapCard from '../../components/roadmap-card/Roadmap_Card'
import Cta from "../LandingPage/Cta";

class ParticularRoadmapPage extends Component {
    constructor(props){
        super(props);
        this.state={
            roadmap:"",
            loading:true,
            error:null
        }
    };

    async componentDidMount(){
            // var loginName = localStorage.getItem("google-name");
            // if(loginName=="null")
            // {
            //     window.location = "/signup";
            // }
            // else {
        
        var roadmapId = window.location.pathname.split('/')[2];
        console.log(roadmapId);
        var fetchSkills = domain + "roadmap/" + roadmapId;
        console.log(fetchSkills);
       
        await fetch(`${fetchSkills}`)
          .then(res => res.json())
          .then(
            (result) => {
            console.log(result);
            this.setState({
                roadmap:result[0],
                loading:false
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
          )
        // }
    }

    render() {
        return (
            <div className="">
                <Navbar />
               
                {this.state.loading?"":
                <Aboutsection displayName={this.state.roadmap.NameOfRoadmap} />
                }
                {this.state.loading?"":
                
                <div className="container aradhna_particularroadmap">
                
                <BlogPostRoadmap data={this.state.roadmap}/>
                <AuthorOfRoadmap data={this.state.roadmap}/>
                <Roadmap category={this.state.roadmap.Category} criteria="category"/>
                <Roadmap category={this.state.roadmap.Category} criteria="likes"/>
                
                </div>
    }

    <br />
    
                {/* <ReferenceCourseTag /> */}
                {/* <RoadmapMore /> */}
                {/* <Navbar /> */}
                {/* <div className="row">
                <RoadmapCard name="" likes="" author="" text="hey"/>
                </div> */}
                {/* <div className="container" style={{display:"block"}}>
                <Cta />
                </div> */}
                <Footer />
             
                {/* <Timeline /> */}
          

                

            </div>
        );
    }
}

export default ParticularRoadmapPage;