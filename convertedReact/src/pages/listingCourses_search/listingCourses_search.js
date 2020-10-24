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
import Cta from '../LandingPage/Cta/index'

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
        this.onFilterClick = this.onFilterClick.bind(this);
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

    async componentDidMount() {
        var searchQuery = window.location.pathname.split('/');
        var allFetch = [];
        for(let i=2; i<searchQuery.length; ++i)
          {
            var fetchSkills = domain + "data/searchsome/" + searchQuery[i];
            allFetch.push(fetchSkills);
          }
          // console.log(allFetch);
        
        // console.log(fetchSkills);
        var listAll = [];
        var list = [];
      allFetch.forEach(async(url) => {
        // console.log(url);
      await fetch(`${url}`)
        .then(res => res.json())
        .then(
          (result) => {
            // console.log(result.data);
            result.data.forEach(async(course) => {
              // console.log(course);
              if(course != undefined)
                listAll.push(course);
                for(var i=(this.state.listNo - 3); i<this.state.listNo; ++i)
                  {
                    if(listAll[i] != undefined)
                      list[i] = listAll[i];
                  }
                  this.setState({
                    loaded: true,
                    items: listAll,
                    list:list
                  });
            });
          // console.log(result.data);
         
          },
          (error) => {
            this.setState({
              loaded: true,
              error
            });
          }
        )
        
       });
       console.log(listAll);
          console.log(list);
            // this.setState({
            //   loaded: true,
            //   items: listAll,
            //   list:list
            // });
        //   console.log(this.state.items);
      }

      async onFilterClick(data){
        var final = [];
        // console.log(data);
        var all = this.state.items;
        data.provider.forEach(async function(eachprovider){
          await all.forEach(async function(eachitem){        
              if(eachitem.platform == eachprovider)
                final.push(eachitem);
          });
        });
        // all = this.state.items;
        // if(data.rating == 1)
        // {
        //   await all.forEach(async function(eachitem){
        //     if((eachitem.provider == "udemy")||(eachitem.provider == "udacity")||(eachitem.provider == "coursera")||(eachitem.provider == "edx")||(eachitem.provider == "skillShare"))
        //     {
        //       var flag = 1;
        //       final.forEach(async function(eachfinal){
        //         console.log(eachfinal);
        //         if(eachfinal.platform == eachitem.platform)
        //           {
        //             flag = 0;
        //           }
        //       });
        //       if(flag == 1)
        //       {
        //         final.push(eachitem);
        //         console.log(final);
        //       }
              
        //     }
        //   });
        // }
        if(final.length)
          this.setState({list:final});
        // console.log(final);
      }

    render(){
        // let mainCards = [];
        // for(let i=0;i<5;i++){
        //     mainCards.push(<Card />);
        // }
        return(
          
            <div className="listinCourses">
              {/* {this.state.loaded?console.log(this.state.list):""} */}
                <Navbar />
                <AboutUs displayName="Search Results"/>
                <BreadCrumb />
                {this.props.displayName? <ReferenceCourseTag category={this.props.displayName} />: ""}
                
                <div className="container col-12  col-xl-10">
                    <div className="row">
                    <div className="col-12 col-lg-3 cardRow">
                        <FilterBox clicked={this.onFilterClick}/>
                        
                    </div>
                       
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
                            ):<div>
                              <div className="rajat_loading_loader_animation">
                                </div>
                                <h1>Loading....</h1>
                            </div>
                        }
                       {this.state.loaded?<button className="btn btn-outline-primary rajat_listing_loadmore_btn" onClick={this.clickedLoadMore}>Load More!</button>:""} 
                        </div>
                    </div>
                </div>
                {/* {this.state.loaded?<SuggestionCarousel category={this.props.displayName} /> :""} */}
                <br />
                <Cta />
                <Footer />
            </div>
        );
    }
}


export default listingCourses;