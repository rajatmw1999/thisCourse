import React, {Component} from "react"
import Navbar from '../components/Navbar/index';
// import AboutSection from '../components/about_section/Aboutsection'
import BlogPostRoadmap from '../components/blogPostRoadmap/blogPostRoadmap';
import AuthorOfRoadmap from '../components/authorOfRoadmap/authorOfRoadmap';
import Roadmap from '../components/read-more-roadmap/Roadmap';
import RoadmapMore from '../components/roadmap-more-cards/Roadmap-more';
import Footer from "../components/footer/index";
import Aboutsection from "../components/about_section/Aboutsection";
// import Timeline from "../components/timeline/index";


class ParticularRoadmapPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Aboutsection displayName="Roadmap" />
            
                <BlogPostRoadmap />
                <AuthorOfRoadmap />
                <Roadmap />
              
                {/* <RoadmapMore /> */}
                {/* <Navbar /> */}
                <Footer />
             
                {/* <Timeline /> */}
          

                {/* <RoadmapCard /> */}

            </div>
        );
    }
}

export default ParticularRoadmapPage;