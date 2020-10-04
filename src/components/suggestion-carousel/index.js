import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import photo from './Course-Suggesion-1.jpg';
import './icomoon/style.css';
import pic from './udemy22.PNG'
import {skillsData} from '../../data/skills';
import {categoryData} from '../../data/category'
import {domain} from '../../data/hosted'
// import './js/main.js'
class SuggestionCarousel extends React.Component {
  
    constructor(props){
      super(props);

      var redirect = window.location.pathname;

      this.state={
        skills:[],
        suggestion:[],
        error:null
      }
    }
    
    async componentDidMount(){
      var skillName = this.props.category;
      var i=0,j=0;
      console.log(skillName);
      skillsData.forEach(function(data){
        data.skills.forEach(function(data2){
          var name2 = data2.displayName.toLowerCase();
          var name1 = skillName.toLowerCase();
          if(name1 == name2)
            j=i;
        });
        i=i+1;
        // console.log(data.category);
      });
      console.log(j);
      var suggest0 = skillsData[j].skills[0].redirectLink;
      var suggest0 = skillsData[j].skills[1].redirectLink;
      var fetchSkills = domain + "data/searchsome" + suggest0;
        console.log(fetchSkills);
       
        fetch(`${fetchSkills}`)
          .then(res => res.json())
          .then(
            (result) => {
              var skills = [];
            console.log(result.data);
            skills.push(result.data[0].Courses[0]);
            skills.push(result.data[0].Courses[1]);
            skills.push(result.data[1].Courses[0]);
            skills.push(result.data[1].Courses[1]);
            skills.push(result.data[2].Courses[0]);
            skills.push(result.data[2].Courses[1]);
            this.setState({
              suggestion:skills
            });
            console.log(this.state.suggestion);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                error
              });
            }
          )
    }

    render() {
        return (<div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-6 title-section">
              <h2 className="heading">Users Also Saw</h2>
            </div>
            <div className="col-6 text-right">
              <div className="custom-nav">
              <a href="#" className="js-custom-prev-v2"><span className="icon-keyboard_arrow_left"></span></a>
              <span className="sleft"></span>
              <a href="#" className="js-custom-next-v2"><span className="icon-keyboard_arrow_right"></span></a>
              </div>
            </div>
          </div>
    
    
          <div className="owl-4-slider owl-carousel" >
            <div className="item" >
              <div className="video-media">
                <img src={photo} alt="Image" className="img-fluid"/>
                <a href="#" className="d-flex play-button align-items-center" data-fancybox>
                  <span className="icon mr-3">
                    <span className="icon-play"></span>
                  </span>
                  <div className="caption">
                    <h3 className="m-0">Lorem ipsum dolor sit amet.</h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="item" >
              <div className="video-media">
                <img src={photo} alt="Image" className="img-fluid"/>
                <a href="https://vimeo.com/139714818" className="d-flex play-button align-items-center" data-fancybox>
                  <span className="icon mr-3">
                    <span className="icon-play"></span>
                  </span>
                  <div className="caption">
                    <h3 className="m-0">Lorem ipsum dolor sit amet.</h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="video-media">
                <img src={photo} alt="Image" className="img-fluid"/>
                <a href="https://vimeo.com/139714818" className="d-flex play-button align-items-center" data-fancybox>
                  <span className="icon mr-3">
                    <span className="icon-play"></span>
                  </span>
                  <div className="caption">
                    <h3 className="m-0">Lorem ipsum dolor sit amet.</h3>
                  </div>
                </a>
              </div>
            </div>
    
            <div className="item">
              <div className="video-media">
                <img src={photo} alt="Image" className="img-fluid"/>
                <a href="https://vimeo.com/139714818" className="d-flex play-button align-items-center" data-fancybox>
                  <span className="icon mr-3">
                    <span className="icon-play"></span>
                  </span>
                  <div className="caption">
                    <h3 className="m-0">Lorem ipsum dolor sit amet.</h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="video-media">
                <img src={photo} alt="Image" className="img-fluid"/>
                <a href="https://vimeo.com/139714818" className="d-flex play-button align-items-center" data-fancybox>
                  <span className="icon mr-3">
                    <span className="icon-play"></span>
                  </span>
                  <div className="caption">
                    <h3 className="m-0">Lorem ipsum dolor sit amet.</h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="video-media">
                <img src={photo} alt="Image" className="img-fluid"/>
                <a href="https://vimeo.com/139714818" className="d-flex play-button align-items-center" data-fancybox>
                  <span className="icon mr-3">
                    <span className="icon-play"></span>
                  </span>
                  <div className="caption">
                    <h3 className="m-0">Lorem ipsum dolor sit amet.</h3>
                  </div>
                </a>
              </div>
            </div>
    
          </div>
    
        </div>
      </div>
        );
     
  }
}
  
export default SuggestionCarousel;