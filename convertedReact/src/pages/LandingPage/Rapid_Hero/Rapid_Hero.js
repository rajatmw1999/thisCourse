import React, {Component} from "react";
import "./Rapid_Hero.css";
import im from './intro-img.svg'
import {skillsData} from '../../../data/skills';
import ReactDOM from 'react-dom'
// import Autocomplete from '../Autocomplete/index'
class Rapid_Hero extends Component {
constructor(props)
{
  super(props);
  this.state={
    search:"",
    autoSuggestSearch:null
  }
  // this.handleSearch = this.handleSearch.bind(this);
}

handleSubmit = async(e) => {
  e.preventDefault();
  if(this.state.search){
  console.log("Form submitted " + this.state.search);
  var searchUrl = "";
  this.state.autoSuggestSearch.forEach(function(link)
  {
    searchUrl = searchUrl + link;
  });
  console.log(searchUrl);
  if(this.state.autoSuggestSearch.length)
    window.location.href = "/search" + searchUrl;
}
}

handleSearch = async(event) => {
  var name = event.target.value;
  var redirectPath = [];
  name = name.split(' ');
  console.log(name);
  var allSkills = [];
  if(name.length){
  skillsData.forEach(async(data) => {
    data.skills.forEach(async(skill) => {
      name.forEach(async(searchData) => {
        if(skill.displayName.toLowerCase().includes(searchData.toLowerCase()))
          {
            allSkills.push(skill.displayName);
            redirectPath.push(skill.redirectLink);
          }
      })
    });
    // console.log(data.skills);
  });
  // console.log(allSkills);
  this.setState({
    search:name,
    autoSuggestSearch:redirectPath
  });
  console.log(redirectPath);
}
else{
  this.setState({
    search:event.target.value
  });
}
}

  render() {
        return (
            <div >

<section id="hero" className="clearfix">
    <div className="container d-flex h-100">
      <div className="row justify-content-center align-self-center" data-aos="fade-up">
        <div className="col-md-6 intro-info order-md-first order-last" data-aos="zoom-in" data-aos-delay="100">
          <h2>Explore best courses<br/> from all the <br/> <span>top platforms</span></h2>
          {/* <div>
            <input type="text" class="form-control" placeholder="Search Courses" />
          </div> */}
          <form class="rajat_rapid_hero_example" onSubmit={this.handleSubmit}>
  <input ref="searchBoxLanding" type="text" placeholder="Search Courses" name="search" autoComplete="on" onChange={this.handleSearch}/>
  {/* <Autocomplete
        suggestions={this.state.autoSuggestSearch} 
      />*/}
    
  <button type="submit"><i class="fa fa-search"></i></button>
</form>
{/* <p>Hey</p> */}
          <div>
            <a href="#categories" className="btn-get-started scrollto">Explore More</a>
          </div>
        </div>

        <div className="col-md-6 intro-img order-md-last order-first" data-aos="zoom-out" data-aos-delay="200">
          <img src={im} alt="" className="img-fluid"></img>
        </div>
      </div>

    </div>
  </section>
                
            </div>
        );
    }
}

export default Rapid_Hero;



