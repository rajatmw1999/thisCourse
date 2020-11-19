import React, {Component} from "react";
import ReactDOM from 'react-dom';
import './Nj_PageComponent.css'
import img4 from './img/img4.png'
// import Landing_Page_Card_Nj from "../components/Landing_Page_Card_Nj/Landing_Page_Card_Nj";

class Nj_PageComponent extends Component {
    componentDidMount()
    {
        var loginName = localStorage.getItem("google-name");
        if(loginName=="null")
        {
            window.location = "/signup";
        }
    }
    render() {
        return (
            <div className="popular_courses">
            <div className=" popular_courses">
                <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="section_title text-center mb-100">
                        <h3 className="akruti-h3">Popular Courses</h3>
                        <p className="akruti-p">
                              Your domain control panel is designed for ease-of-use and <br></br> allows for all aspects of your
                            domains.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                    <div className="course_nav">
                        <nav>
                            <ul className="nav" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active akruti-a" id="home-tab" data-toggle="tab" href="#home" role="tab"
                                        aria-controls="home" aria-selected="true">All Courses</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link akruti-a" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                                        aria-controls="profile" aria-selected="false">Photoshop</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link akruti-a" id="contact-tab" data-toggle="tab" href="#contact" role="tab"
                                        aria-controls="contact" aria-selected="false">UI/UX</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link akruti-a" id="design-tab" data-toggle="tab" href="#design" role="tab"
                                        aria-controls="design" aria-selected="false">Web Design</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link akruti-a" id="Web-tab" data-toggle="tab" href="#Web" role="tab"
                                        aria-controls="design" aria-selected="false">Web dev</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link akruti-a" id="Web-tab1" data-toggle="tab" href="#Web1" role="tab"
                                        aria-controls="design" aria-selected="false">Wordpress</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link akruti-a" id="Web-tab11" data-toggle="tab" href="#Web11" role="tab"
                                        aria-controls="design" aria-selected="false">Adobe XD</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link akruti-a" id="Adobe-XD-tab8" data-toggle="tab" href="#Adobe-XD8" role="tab"
                                        aria-controls="design" aria-selected="false">Sketch App</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link akruti-a" id="Adobe-XD-tab9" data-toggle="tab" href="#Adobe-XD9" role="tab"
                                        aria-controls="design" aria-selected="false">Illustrator</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

        </div>
                
               
            </div>
            <div className="all_courses">
            <div className="container">
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_courses">
                                            <div className="thumb">
                                                <a className="akruti-a" href="#">
                                                    <img className="akruti-img" src={img4} alt=""></img>
                                                </a>
                                            </div>
                                            <div className="courses_info">
                                                <span>Photoshop</span>
                                                <h3 className="akruti-h3"><a className="akruti-a" href="#">Mobile App design step by step <br></br>
                                                        from beginner</a></h3>
                                                <div className="star_prise d-flex justify-content-between">
                                                    <div className="star">
                                                        <i className="flaticon-mark-as-favorite-star"></i>
                                                        <span>(4.5)</span>
                                                    </div>
                                                    <div className="prise">
                                                        <span className="offer">$89.00</span>
                                                        <span className="active_prise">
                                                            $49
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_courses">
                                            <div className="thumb">
                                                <a className="akruti-a" href="#">
                                                    <img className="akruti-img" src={img4} alt=""></img>
                                                </a>
                                            </div>
                                            <div className="courses_info">
                                                <span>Photoshop</span>
                                                <h3 className="akruti-h3"><a className="akruti-a" href="#">Mobile App design step by step <br></br>
                                                        from beginner</a></h3>
                                                <div className="star_prise d-flex justify-content-between">
                                                    <div className="star">
                                                        <i className="flaticon-mark-as-favorite-star"></i>
                                                        <span>(4.5)</span>
                                                    </div>
                                                    <div className="prise">
                                                        <span className="offer">$89.00</span>
                                                        <span className="active_prise">
                                                            $49
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_courses">
                                            <div className="thumb">
                                                <a className="akruti-a" href="#">
                                                    <img className="akruti-img" src={img4} alt=""></img>
                                                </a>
                                            </div>
                                            <div className="courses_info">
                                                <span>Photoshop</span>
                                                <h3 className="akruti-h3"><a className="akruti-a" href="#">Mobile App design step by step <br></br>
                                                        from beginner</a></h3>
                                                <div className="star_prise d-flex justify-content-between">
                                                    <div className="star">
                                                        <i className="flaticon-mark-as-favorite-star"></i>
                                                        <span>(4.5)</span>
                                                    </div>
                                                    <div className="prise">
                                                        <span className="offer">$89.00</span>
                                                        <span className="active_prise">
                                                            $49
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_courses">
                                            <div className="thumb">
                                                <a className="akruti-a" href="#">
                                                    <img className="akruti-img" src={img4} alt=""></img>
                                                </a>
                                            </div>
                                            <div className="courses_info">
                                                <span>Photoshop</span>
                                                <h3 className="akruti-h3"><a className="akruti-a" href="#">Mobile App design step by step <br></br>
                                                        from beginner</a></h3>
                                                <div className="star_prise d-flex justify-content-between">
                                                    <div className="star">
                                                        <i className="flaticon-mark-as-favorite-star"></i>
                                                        <span>(4.5)</span>
                                                    </div>
                                                    <div className="prise">
                                                        <span className="offer">$89.00</span>
                                                        <span className="active_prise">
                                                            $49
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_courses">
                                            <div className="thumb">
                                                <a className="akruti-a" href="#">
                                                    <img className="akruti-img" src={img4} alt=""></img>
                                                </a>
                                            </div>
                                            <div className="courses_info">
                                                <span>Photoshop</span>
                                                <h3 className="akruti-h3"><a className="akruti-a" href="#">Mobile App design step by step <br></br>
                                                        from beginner</a></h3>
                                                <div className="star_prise d-flex justify-content-between">
                                                    <div className="star">
                                                        <i className="flaticon-mark-as-favorite-star"></i>
                                                        <span>(4.5)</span>
                                                    </div>
                                                    <div className="prise">
                                                        <span className="offer">$89.00</span>
                                                        <span className="active_prise">
                                                            $49
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_courses">
                                            <div className="thumb">
                                                <a className="akruti-a" href="#">
                                                    <img className="akruti-img" src={img4} alt=""></img>
                                                </a>
                                            </div>
                                            <div className="courses_info">
                                                <span>Photoshop</span>
                                                <h3 className="akruti-h3"><a className="akruti-a" href="#">Mobile App design step by step <br></br>
                                                        from beginner</a></h3>
                                                <div className="star_prise d-flex justify-content-between">
                                                    <div className="star">
                                                        <i className="flaticon-mark-as-favorite-star"></i>
                                                        <span>(4.5)</span>
                                                    </div>
                                                    <div className="prise">
                                                        <span className="offer">$89.00</span>
                                                        <span className="active_prise">
                                                            $49
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
        
        
        
        
        

                        </div>
                    </div>
                </div>
            </div>
            </div>
            
            

            </div>
        );
    }
}

export default Nj_PageComponent;