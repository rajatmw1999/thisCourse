import React, {Component} from "react";
import "./index.css";
import FeaturedCourseCard from '../FeaturedCourseCard/FeaturedCourseCard';
import Navbar from '../Navbar/index'
import Footer from '../footer/index'
import {categoryData} from '../../data/category'
import Cta from '../../pages/LandingPage/Cta/index'
import {domain} from '../../data/hosted'

class FeaturedLandingPageSection extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            loading:true,
            allCourses:null
        }
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }
    
    async componentDidMount(){
        
        
        const categoryPath =  categoryData.map((data) =>  
        <li class="nav-item">
             <a 
             onClick={() => this.handleCategoryChange(data.redirectLink.split('-')[0])} 
             class="nav-link akruti-a" id="home-tab" data-toggle="tab" href="#" role="tab"
            aria-controls="home" aria-selected="true">{data.displayName}</a>
        </li>
        ) 
        this.setState({
            navTabs:categoryPath,
            loading:false
        });

        var fetchAllFeatured = domain + 'admin/courses/all';
        await fetch(`${fetchAllFeatured}`)
        .then(res => res.json())
        .then(
          (result) => {
          console.log(result);
          const display = result.map((data) => 
            <FeaturedCourseCard  data={data}/>
          );
          this.setState({
              allCourses:display,
              categoryCourses:display
          });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              loaded: true,
              error
            });
          }
        )
        
    }

    async handleCategoryChange(link){
        if(link != "all"){
        var featured = link + '-featured';
        var fetchCategoryFeatured = domain + 'admin/featuredCoursesByCategory' + link;
        console.log(featured);
        // /admin/featuredCoursesByCategory/TeCh
        await fetch(`${fetchCategoryFeatured}`)
        .then(res => res.json())
        .then(
          (result) => {
          console.log(result);
          const display = result.map((data) => 
            <FeaturedCourseCard data={result}/>
          );
          this.setState({
              categoryCourses:display
          });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              loaded: true,
              error
            });
          }
        )
        }
        else
        {
            this.setState({
                categoryCourses:this.state.allCourses
            });
        }
    }

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
                                        aria-controls="home" aria-selected="true"
                                        onClick={() => this.handleCategoryChange("all")} 
                                        >All Courses</a>
                                </li>
                               {this.state.loading?"":this.state.navTabs}
                               
                                {/* <li class="nav-item">
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
                                </li> */}
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
                                    {/* {courseCards} */}
                                    {this.state.categoryCourses? this.state.categoryCourses : "" }

                                    <div class="col-xl-12">
                                        <div class="more_courses text-center">
                                            <a class="akruti-a" href="/roadmaps" target="_blank" class="boxed_btn_rev">Check Related Roadmaps</a>
                                        </div>
                                    </div>
                                </div>
                    </div>
                    {/* <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div class="row">
                                    

                                    


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
                    </div> */}
                </div>
            </div>
        </div>
    </div>
    <Cta />
    <Footer />
    </div>);
    }
}

export default FeaturedLandingPageSection;