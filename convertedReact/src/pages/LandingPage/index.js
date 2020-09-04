import React, {Component} from "react";
import ReactDOM from 'react-dom';

import RapidHero from './Rapid_Hero/Rapid_Hero'
import RapidNumbers from './Rapid_Numbers/Rapid_Numbers'
import RapidServices from './Rapid_Services/Rapid_Services'
import OuterMostCategory from '../../components/outermost-category/index'
import OutermostCategory from "../../components/outermost-category/index";
import Navbar from '../../components/Navbar/index'
import Footer from "../../components/footer";
import Cta from './Cta/index'
import FeaturedCourseTracks from "../../components/FeaturedCourseTracks/index";

class LandingPage extends React.Component {
    render() {
        return (
        <div>
            <Navbar />
            <RapidHero />
            <OutermostCategory />
            <FeaturedCourseTracks />
            <Cta />
            {/* <RapidNumbers /> */}
            <RapidServices />
            <Cta />
            <Footer />
        </div>
        );
    }
}

export default LandingPage;