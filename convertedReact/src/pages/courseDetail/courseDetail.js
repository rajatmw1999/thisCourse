import React, {Component} from "react";
import "./courseDetail.css";
import Navbar from "../../components/Navbar/index";
import CourseDetailSection from "../../components/course-detail section/CourseDetail";
import SuggestionCarousel from "../../components/suggestion-carousel/index";
import Footer from "../../components/footer/index";

class courseDetail extends Component {
    constructor(props) {
        super(props);
        // console.log(window.location.pathname);
        var data = window.location.pathname.split('/', 3);
        var IdofCourse = data[2];
        var nameOfSkill = data[1];
        this.state={
            IdofCourse:IdofCourse,
            nameOfSkill:nameOfSkill
        }
        
        // console.log(IdofCourse);
        // console.log(nameOfSkill);
    }
    render() {
        return (
            <div>
                <Navbar/>
                <CourseDetailSection Id={this.state.IdofCourse} nameOfSkill={this.state.nameOfSkill}/>
                {/* WE NEED A NEW CAROUSEL FOR THIS PAGE */}
                {/* COMPONENTS ARE BEING CONVERTED TO REACT RIGHT NOW */}
                {/* <SuggestionCarousel /> */}
                <Footer />
            </div>

        );
    }
}

export default courseDetail;