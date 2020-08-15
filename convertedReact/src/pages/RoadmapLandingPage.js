import React, {Component} from "react"
import Navbar from '../components/Navbar/index';
import Aboutsection from "../components/about_section/Aboutsection";

import RoadmapCard from '../components/roadmap-card/Roadmap_Card';
import Footer from "../components/footer/index";
import Navtabs from '../components/Nav-tabs/index';

class RoadmapLandingPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Aboutsection />
                <Navtabs />
                <RoadmapCard />
                <RoadmapCard />
                <RoadmapCard />
                <Footer />

            </div>
        );
    }
}

export default RoadmapLandingPage;