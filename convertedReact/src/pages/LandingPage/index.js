import React, {Component} from "react";
import ReactDOM from 'react-dom';
import {domain} from '../../data/hosted'
import RapidHero from './Rapid_Hero/Rapid_Hero'
import RapidNumbers from './Rapid_Numbers/Rapid_Numbers'
import RapidServices from './Rapid_Services/Rapid_Services'
import OuterMostCategory from '../../components/outermost-category/index'
import OutermostCategory from "../../components/outermost-category/index";
import Navbar from '../../components/Navbar/index'
import Footer from "../../components/footer";
import Cta from './Cta/index'
import FeaturedCourseTracks from "../../components/FeaturedCourseTracks/index";
import categoryData from '../../data/category';
import ReferenceHome from '../../components/ReferenceHome/ReferenceHome'
import axios from 'axios'


class LandingPage extends React.Component {
    // async componentDidMount(){
       
    //     var stored = localStorage.getItem("google-email");
    //     var name = localStorage.getItem("google-name");
    //     var email = localStorage.getItem("google-email");
    //     var data = {
    //         "name":name,
    //         "email":email
    //     }
    //     if(stored){
    //     var fetchtoken = await domain + "api/jwt/google";
    //     axios.post(fetchtoken, email)
    //     .then(response => {
    //         console.log(response.data.token)
    //         localStorage.setItem("auth-token", response.data.token);
    //     });
    //     }
    // }
    render() {
        return (
        <div>
            <Navbar />
            <RapidHero />
            <br />
            <br />
            <section id="categories">
            <ReferenceHome />
            </section>
            <br />
            <br />
            {/* <OutermostCategory /> */}
            <FeaturedCourseTracks />
            <Cta />
            {/* <RapidNumbers /> */}
            <RapidServices />
            <Cta criteria="roadmap"/>
            <Footer />
        </div>
        );
    }
}

export default LandingPage;