import React,{Component} from "react";
import "./cardHackrio.css";
import ScriptTag from 'react-script-tag';
import {skillsData} from '../../data/skills'

class CardHackrio extends Component{
    constructor(props) {
        super(props);
        console.log(this.props.category);
        
        var skills;
        let categoryName=this.props.category;
        skillsData.forEach(function(data){
             if(data.category == categoryName)
                skills = data.skills;
            // console.log(data.category);
        });
        // console.log(skills);

        const ret = skills.map((data) =>  
        <a href={`${data.redirectLink}`} className="topic-grid-item js-topic-grid-item">
            <img className="topic-thumbnail" alt="Python Tutorials and Courses" src="https://hackr.io/tutorials/python/logo-python.svg?ver=1562823957" />
            <p className="js-topic">{data.displayName}</p>
        </a>
        ) 
        this.state={
            allSkills:ret
        }
      }
    render(){
        return(
            <div className="b ">
                <ScriptTag type="text/javascript" src="./index.js" />
            <div className="home--hero-header hero--header-new">
                <div className="container">
                    <div className="">
            <div className="row">
                <div className="col-xs-12 text-center hero-header-container" style={{width: "100%"}}>
                    <div className="desktop-search-bar search-bar">
                        <div className="form-holder">
                            <div className="navbarSearch">
                                <input id="myInput" onkeyup="myFunction()" className="form-control navbar-search-input js-navbar-search-input nav-input js-filter-topics" type="text" placeholder="Search for the language you want to learn: " />
                            </div>
                            <img className="card-hackrioicon color-filter" src="https://hackr.io/assets/images/header-icons/search-header.svg" width="17" height="17" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
       
        <div className="page--section paddingtop-sm marginbottom-lg margintop-md">
            <div className="container">
                <div className="">
                <div className="row">
                    <div className="col-xs-12 no-paddingright-desktop">
                        <div className="page--body">
                            <div id="courses"  className="flex-grid hackr--flex-grid home--flex-grid js-topics-list">
                                {this.state.allSkills}
                              
                            </div>
                            <div id="no_topics_found" className="col-md-12 text-center hidden marginbottom-sm">
                                <span className="no-results"><em>Sorry, no results found!</em></span>
                                <p className="text-center margintop-md">We are a community-driven website. Please feel free to submit the courses/tutorials that you would want to recommend to the community.</p>
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

export default CardHackrio;