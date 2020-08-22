import React, {Component} from "react";
import ReactDOM from 'react-dom';


import Aboutsection from  '../components/about_section/Aboutsection'
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import Navbar from '../components/Navbar/index';
import CardHackrio from '../components/cardHackrio/cardHackrio';
import Footer from '../components/footer/index';

class ParticularOuterMostCategory extends React.Component {
    render() {
        return (
        <div>
            <Navbar/>
            <Aboutsection />
            <BreadCrumb />  
            <CardHackrio />
            <Footer />
        </div>
        );
    }
}

export default ParticularOuterMostCategory;