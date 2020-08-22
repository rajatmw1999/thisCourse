import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
// import Footer from './components/footer/index';
// import IQtestintro from './components/IQ-test-intro/index';
// import Navsearch from './components/nav_search/index';
// import Navbar from './components/Navbar/index';
// import IQtestadv from './components/IQ-test-advantage/index';
// import OutermostCategory from './components/outermost-category/index';
// import SuggestionCarousel from './components/suggestion-carousel/index';
// import Timeline from './components/timeline/index';
// import Newsbox from './components/newsbox/index';
// import LandingPage from './components/landing-page/index';
// import Newsbox2 from './components/newsbox2/index';
import Aboutsection from './components/about_section/Aboutsection'
import AuthorOfRoadmap from './components/authorOfRoadmap/authorOfRoadmap';
import Blogpost from './components/BlogPost - Editor/Blogpost';
// import BlogPostRoadmap from './components/blogPostRoadmap/blogPostRoadmap';
import BreadCrumb from './components/BreadCrumb/BreadCrumb';
import CardComponent from './components/cardComponent/cardComponent';
import CardHackrio from './components/cardHackrio/cardHackrio';
import CourseDetail from './components/course-detail section/CourseDetail';
import Footer from './components/footer/index';
import Navsearch from './components/nav_search/index';
import Navbar from './components/Navbar/index';
import OutermostCategory from './components/outermost-category/index'
import Roadmap from './components/read-more-roadmap/Roadmap';
import RoadmapCard from './components/roadmap-card/Roadmap_Card';
import Search from './components/searchbar/Search';
import Signup from './components/signup/signup';
import SuggestionCarousel from './components/suggestion-carousel';
import Timeline from './components/timeline';
import ListingCoursesPage from "./pages/listingCourses/listingCourses";
import CourseDetailPage from "./pages/courseDetail/courseDetail";
import RoadmapLandingPage  from './pages/RoadmapLandingPage';
import ParticularRoadmapPage  from './pages/ParticularRoadmapPage/ParticularRoadmapPage';
import FilterBox from './components/FilterBox/index';
import ParticularOuterMostCategory from './pages/ParticularOuterMostCategory'
import LandingPage from './pages/LandingPage/index'
import Rapid_Hero from './pages/LandingPage/Rapid_Hero/Rapid_Hero'

function App() {
  return (
    <div>
        {/* <Aboutsection /> */}
        {/* <AuthorOfRoadmap /> */}
        {/* <Blogpost /> */}
        {/* <BlogPostRoadmap /> */}
        {/* <BreadCrumb /> */}
        {/* <CardComponent /> */}
        {/* <CardHackrio /> */}
        {/* <CourseDetail /> */}
        {/* <Footer /> */}
       {/* <Navsearch /> */}
       {/* <FilterBox /> */}
        {/* <Navbar /> */}
        {/* <OutermostCategory /> */}
        {/* <Roadmap /> */}
        {/* <RoadmapCard /> */}
        {/* <Search /> */}
        {/* <Signup /> */}
        {/* <SuggestionCarousel /> */}
        {/* <Timeline /> */}
        {/* <ListingCoursesPage /> */}
        {/* <CourseDetailPage /> */}
        {/* <RoadmapLandingPage /> */}
        {/* <ParticularRoadmapPage/> */}
        {/* <ParticularOuterMostCategory /> */}
        <LandingPage />
        {/* <Rapid_Hero /> */}

        </div>
  );
}

export default App;