import React, {Component} from "react";
import "./courseDetail.css";
import Navbar from "../../components/Navbar/index";
import CourseDetailSection from "../../components/course-detail section/CourseDetail";
import SuggestionCarousel from "../../components/suggestion-carousel/index";
import Footer from "../../components/footer/index";

class courseDetail extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <CourseDetailSection/>
                <SuggestionCarousel />
                <Footer />
            </div>

        );
    }
}

export default courseDetail;