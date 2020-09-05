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
import Rapid_Hero from './pages/LandingPage/Rapid_Hero/Rapid_Hero';
import FeaturedCourseCard from './components/FeaturedCourseCard/FeaturedCourseCard';
import FeaturedLandingPageSection from "./components/FeaturedLandingPageSection/FeaturedLandingPageSection";
import ReferenceHome from './components/ReferenceHome/ReferenceHome';
import ReferenceCourseTag from './components/ReferenceCourseTag/ReferenceCourseTag';
import ReferenceCourseDetail from './components/ReferenceCourseDetail/ReferenceCourseDetail'

import Admin_ChangePassword from './pages/Admin-Pages/Aniket_ChangePassword'
import Admin_DeleteRescrape from './pages/Admin-Pages/Aniket_DeleteRescrapePage'
import Admin_EditFeaturedCourse from './pages/Admin-Pages/Aniket_EditFeaturedPage'
import Admin_NewFeaturedCourse from './pages/Admin-Pages/Aniket_NewFeaturedPage'
import Admin_Profile from './pages/Admin-Pages/Aniket_ProfilePage'
 
import {categoryData} from './data/category';
import {skillsData} from './data/skills';
import {
  Route,
  Link
} from 'react-router-dom';

function App() {
  var regex = /course[a-z]/;
  const categoryPath = categoryData.map((data) =>  
  // console.log(data.redirectLink);
  <Route exact path={`${data.redirectLink}-c`} render={()=><ParticularOuterMostCategory name={data.name} displayName={data.displayName} />} />
  )
  var skillsPath;
  skillsData.forEach(function(category){
    let categoryName = category.category;
  skillsPath = category.skills.map((data) =>
    <Route exact path={`${data.redirectLink}`} render={()=><ListingCoursesPage dbQuery={data.db} displayName={data.displayName} categoryName={categoryName} />} />
    // console.log(`skill${data.redirectLink}`)
    )
});

  return (

    <div>
        {/* <Route exact path="/:skillName/:id" component={CourseDetailPage} />
        {categoryPath}
        {skillsPath}
        <Route exact path='/' component={LandingPage} /> */}

        {/* <Admin_ChangePassword /> */}
        {/* <Admin_DeleteRescrape /> */}
        {/* <Admin_EditFeaturedCourse /> */}
        {/* <Admin_NewFeaturedCourse /> */}
        <Admin_Profile />


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
      
        {/* <FeaturedLandingPageSection/> */}
        {/* <FeaturedCourseCard /> */}
        {/* <FeaturedCourseTracks /> */}

        {/* <LandingPage /> */}
        {/* <ParticularOuterMostCategory /> */}
        {/* <ListingCoursesPage /> */}
        {/* <CourseDetailPage /> */}

        {/* <RoadmapLandingPage /> */}
        {/* <ParticularRoadmapPage/> */}
        {/* <ReferenceCourseTag/> */}
        {/* <ReferenceCourseDetail /> */}
        {/* <ReferenceHome/> */}

        </div>
  );
}

export default App;