import React, {Component} from "react"
import Navbar from '../components/Navbar/index';
import Aboutsection from "../components/about_section/Aboutsection";
import Navtabs from '../components/Nav-tabs/index';
import RoadmapCard from '../components/roadmap-card/Roadmap_Card';
import Footer from "../components/footer/index";

class RoadmapLandingPage extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <Navbar />
                {this.props.displayName? <Aboutsection displayName={this.props.displayName} /> : <Aboutsection displayName="Roadmaps"/>}
                
                <Navtabs title={this.props.displayName} redirectLink={this.props.dbQuery}/>
                {/* <RoadmapCard />
                <RoadmapCard />
                <RoadmapCard /> */}
                <Footer />

            </div>
        );
    }
}

export default RoadmapLandingPage;