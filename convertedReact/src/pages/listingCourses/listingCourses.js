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
import Cta from '../../pages/LandingPage/Cta/index'

import ReferenceCourseTag from '../../components/ReferenceCourseTag/ReferenceCourseTag'

class listingCourses extends Component{
    constructor(props) {
        super(props);
        this.state={
            loaded:false,
            items:[],
            error:null,
            list:[],
            listNo:3
        }
        this.clickedLoadMore = this.clickedLoadMore.bind(this);
        console.log("Hi");
    }

    async clickedLoadMore(){
      // document.body.style.overflow = 'hidden';
      await this.setState({
        listNo:this.state.listNo + 3
      });
      var list = this.state.list;
      console.log(this.state.list);
       for (var i=(this.state.listNo - 3); i<this.state.listNo; ++i)
      {
        if(this.state.items[i] != undefined)
          list[i] = this.state.items[i];
      }
      console.log(this.state.list);
      await this.setState({
        list:list
      });

    }

    componentDidMount() {
      console.log("dbQuery = " + this.props.dbQuery);
        var fetchSkills = domain + "data/searchsome/" + this.props.dbQuery;
        console.log(fetchSkills);
       
        fetch(`${fetchSkills}`)
          .then(res => res.json())
          .then(
            (result) => {
            console.log(result.data);
            var list = [];
            for (var i=(this.state.listNo - 3); i<this.state.listNo; ++i)
            {
              if(result.data[i] != undefined)
              list[i] = result.data[i];
            }
            console.log(list);
              this.setState({
                loaded: true,
                items: result.data,
                list:list
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
                <ReferenceCourseTag category={this.props.displayName} />
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
                            this.state.list.map((data) => 
                            data.Courses.map((course) =>
                                <Card platform={data.platform} LinkToCourse={course.LinkToCourse} NameofCourse={course.NameofCourse} 
                                Rating={course.Rating} nameOfSkill={data.nameSkill}
                                UrlOfImageThumbnail={course.UrlOfImageThumbnail} Instructor={course.Instructor} Id={course._id}
                                />
                            )
                            ):"Loading!!"
                        }
                        <button className="btn btn-outline-primary rajat_listing_loadmore_btn" onClick={this.clickedLoadMore}>Load More!</button>
                        </div>
                    </div>
                </div>
                <SuggestionCarousel category={this.props.displayName} />
                
                <Cta />
                <Footer />
            </div>
        );
    }
}


export default listingCourses;