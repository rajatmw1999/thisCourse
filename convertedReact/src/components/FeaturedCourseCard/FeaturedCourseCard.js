import React, {Component} from "react";
import "./index.css";
import photo from './img/1.png'

class FeaturedCourseCard extends Component {
    render() {
        return <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="single_courses">
                    <div class="thumb">
                        <a class="akruti-a" href="#">
                            <img class="akruti-img" src={photo} alt=""/>
                        </a>
                    </div>
                    <div class="courses_info">
                        <span>Photoshop</span>
                        <h3 class="akruti-h3"><a class="akruti-a" href="#">Mobile App design step by step <br/>
                                from beginner</a></h3>
                        <div class="star_prise d-flex justify-content-between">
                            <div class="star">
                                <i class="flaticon-mark-as-favorite-star"></i>
                                <span>(4.5)</span>
                            </div>
                            <div class="prise">
                                <span class="offer">$89.00</span>
                                <span class="active_prise">
                                    $49
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                                    
                                   
    }
}

export default FeaturedCourseCard;