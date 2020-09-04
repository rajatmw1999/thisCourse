import React,{Component} from "react";
import "./listingCourses.css";
// import Navbar from "../../components/nav_search/index";
import Navbar from "../../components/Navbar/index";
import AboutUs from "../../components/about_section/Aboutsection";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Card from "../../components/cardComponent/cardComponent";
// import CardHackrio from "../../components/cardHackrio/cardHackrio";
import FilterBox from "../../components/FilterBox/index";
import Footer from "../../components/footer/index";
import SuggestionCarousel from '../../components/suggestion-carousel';
import {domain} from '../../data/hosted'
import { skillsData } from "../../data/skills";
import { Link } from "react-router-dom";

class listingCourses extends Component{
    constructor(props) {
        super(props);
        this.state={
            loaded:false,
            items:[],
            error:null
        }
    }



    componentDidMount() {
        var fetchSkills = domain + "data/" + this.props.dbQuery;
        console.log(fetchSkills);
        fetch(`${fetchSkills}`)
          .then(res => res.json())
          .then(
            (result) => {
            console.log(result.data);
              this.setState({
                loaded: true,
                items: result.data
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
        //   console.log(this.state.items);
      }

    render(){
        // let mainCards = [];
        // for(let i=0;i<5;i++){
        //     mainCards.push(<Card />);
        // }
        return(
            <div className="listinCourses">
                <Navbar />
                <AboutUs displayName={this.props.displayName}/>
                <BreadCrumb />
                <div className="container col-12  col-xl-10">
                    <div className="row">
                    <div className="col-12 col-lg-3 cardRow">
                        <FilterBox />
                    </div>
                        {/* <div className="col-12 col-lg-9 cardRow">
                            {mainCards}
                        </div> */}
                        <div className="col-12 col-lg-9 cardRow">
                        {
                            this.state.loaded?
                            this.state.items.map((data) => 
                            data.Courses.map((course) =>
                                <Card platform={data.platform} LinkToCourse={course.LinkToCourse} NameofCourse={course.NameofCourse} 
                                Rating={course.Rating} nameOfSkill={data.nameSkill}
                                UrlOfImageThumbnail={course.UrlOfImageThumbnail} Instructor={course.Instructor} Id={course._id}
                                />
                            )
                            ):"Loading!!"
                        }
                        </div>
                    </div>
                </div>
                <SuggestionCarousel />
                <Footer />
            </div>
        );
    }
}


export default listingCourses;