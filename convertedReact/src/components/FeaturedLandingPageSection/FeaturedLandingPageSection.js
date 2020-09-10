import React, {Component} from "react";
import "./index.css";
import FeaturedCourseCard from '../FeaturedCourseCard/FeaturedCourseCard';
import Navbar from '../Navbar/index'
import Footer from '../footer/index'

class FeaturedLandingPageSection extends Component {

    

    render() {

        let courseCards = [];
        for(let i=0;i<5;i++){
            courseCards.push(<FeaturedCourseCard />);
        }


        return (<div>
        <Navbar />
        <div class="popular_courses">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="section_title text-center mb-100">
                        <h3 class="akruti-h3">Popular Courses</h3>
                        <p class="akruti-p">
                              Your domain control panel is designed for ease-of-use and <br/> allows for all aspects of your
                            domains.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12">
                    <div class="course_nav">
                        <nav>
                            <ul class="nav" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active akruti-a" id="home-tab" data-toggle="tab" href="#home" role="tab"
                                        aria-controls="home" aria-selected="true">All Courses</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link akruti-a" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                                        aria-controls="profile" aria-selected="false">Photoshop</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link akruti-a" id="contact-tab" data-toggle="tab" href="#contact" role="tab"
                                        aria-controls="contact" aria-selected="false">UI/UX</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link akruti-a" id="design-tab" data-toggle="tab" href="#design" role="tab"
                                        aria-controls="design" aria-selected="false">Web Design</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link akruti-a" id="Web-tab" data-toggle="tab" href="#Web" role="tab"
                                        aria-controls="design" aria-selected="false">Web dev</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link akruti-a" id="Web-tab1" data-toggle="tab" href="#Web1" role="tab"
                                        aria-controls="design" aria-selected="false">Wordpress</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link akruti-a" id="Web-tab11" data-toggle="tab" href="#Web11" role="tab"
                                        aria-controls="design" aria-selected="false">Adobe XD</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link akruti-a" id="Adobe-XD-tab8" data-toggle="tab" href="#Adobe-XD8" role="tab"
                                        aria-controls="design" aria-selected="false">Sketch App</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link akruti-a" id="Adobe-XD-tab9" data-toggle="tab" href="#Adobe-XD9" role="tab"
                                        aria-controls="design" aria-selected="false">Illustrator</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

        </div>
        <div class="all_courses">
            <div class="container">
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div class="row">
                                    
                                    {/* courses card */}
                                    {courseCards}


                                    <div class="col-xl-12">
                                        <div class="more_courses text-center">
                                            <a class="akruti-a" href="#" class="boxed_btn_rev">More Courses</a>
                                        </div>
                                    </div>
                                </div>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div class="row">
                                    

                                    {courseCards}


                                    <div class="col-xl-12">
                                        <div class="more_courses text-center">
                                            <a class="akruti-a" href="#" class="boxed_btn_rev">More Courses</a>
                                        </div>
                                    </div>
                                </div>
                    </div>
                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <div class="row">
                                    

                                    {courseCards}

                                    <div class="col-xl-12">
                                        <div class="more_courses text-center">
                                            <a href="#" class="boxed_btn_rev akruti-a">More Courses</a>
                                        </div>
                                    </div>
                                </div>
                    </div>
                    <div class="tab-pane fade" id="design" role="tabpanel" aria-labelledby="design-tab">
                            <div class="row">
                                    


                                    {courseCards}


                                    <div class="col-xl-12">
                                        <div class="more_courses text-center">
                                            <a class="akruti-a" href="#" class="boxed_btn_rev">More Courses</a>
                                        </div>
                                    </div>
                                </div>
                    </div>
                    <div class="tab-pane fade" id="Web" role="tabpanel" aria-labelledby="Web-tab">
                            <div class="row">
                                    


                                    {courseCards}


                                    <div class="col-xl-12">
                                        <div class="more_courses text-center">
                                            <a class="akruti-a" href="#" class="boxed_btn_rev">More Courses</a>
                                        </div>
                                    </div>
                                </div>
                    </div>
                    <div class="tab-pane fade" id="Web1" role="tabpanel" aria-labelledby="Web-tab1">
                            <div class="row">
                                    

        
                                    {courseCards}
        


                                    <div class="col-xl-12">
                                        <div class="more_courses text-center">
                                            <a class="akruti-a" href="#" class="boxed_btn_rev">More Courses</a>
                                        </div>
                                    </div>
                                </div>
                    </div>
                    <div class="tab-pane fade" id="Web11" role="tabpanel" aria-labelledby="Web-tab11">
                            <div class="row">
                                    
                                    {courseCards}


                                    <div class="col-xl-12">
                                        <div class="more_courses text-center">
                                            <a class="akruti-a" href="#" class="boxed_btn_rev">More Courses</a>
                                        </div>
                                    </div>
                                </div>
                    </div>
                    <div class="tab-pane fade" id="Adobe-XD8" role="tabpanel" aria-labelledby="Adobe-XD8">
                            <div class="row">
                                    
                                    
                                    {courseCards}


                                    <div class="col-xl-12">
                                        <div class="more_courses text-center">
                                            <a class="akruti-a" href="#" class="boxed_btn_rev">More Courses</a>
                                        </div>
                                    </div>
                                </div>
                    </div>
                    <div class="tab-pane fade" id="Adobe-XD9" role="tabpanel" aria-labelledby="Adobe-XD-tab9">
                            <div class="row">
                                    

                                    
                                    {courseCards}

                                    <div class="col-xl-12">
                                        <div class="more_courses text-center">
                                            <a class="akruti-a" href="#" class="boxed_btn_rev">More Courses</a>
                                        </div>
                                    </div>
                                </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </div>);
    }
}

export default FeaturedLandingPageSection;