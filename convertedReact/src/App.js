import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import AboutSection from "./components/about_section/about_section";
import AuthorOfRoadmap from "./components/authorOfRoadmap/authorOfRoadmap";
import BlogPostRoadmap from "./components/blogPostRoadmap/blogPostRoadmap";
import BreadCrumb from "./components/BreadCrumb/BreadCrumb";
import CardComponent from "./components/cardComponent/cardComponent";
import CardHackrio from "./components/cardHackrio/cardHackrio";
import ContactUs from "./components/contactUs/contactUs";
import ContactForm from "./components/contactForm/contactForm";



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component ={ContactForm}></Route>
    </Switch>
    </Router>
  );
}

export default App;
