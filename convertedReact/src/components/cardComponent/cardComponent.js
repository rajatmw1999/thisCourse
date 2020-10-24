import React,{Component} from "react";
import "./cardComponent.css";
import renderHtml from 'react-render-html';
import CourseDetail from '../../pages/courseDetail/courseDetail'
import pic1 from '../../data/1.jpg'
import pic2 from '../../data/2.jpg'
import pic3 from '../../data/3.jpg'
import pic4 from '../../data/4.jpg'
import pic5 from '../../data/5.jpg'
import pic6 from '../../data/6.jpg'
import pic7 from '../../data/7.jpg'
import pic8 from '../../data/8.jpg'
import arcademics from './icons/arcademics.PNG'
import skillshare from './icons/skillshare.png'
import {
    Route,
    Link
  } from 'react-router-dom';
class CardComponent extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props);
    }

    render(){
        var link = "https://" + this.props.platform + ".com";
        if(this.props.platform == "YOUTUBE")
        {
            name = this.props.NameofCourse;
            link = this.props.LinkToCourse;
            duration = this.props.NumberofHours;
            price = this.props.Price;
            img = this.props.UrlOfImageThumbnail;
        }
        else
        {
        if(this.props.LinkToCourse){
        link = this.props.LinkToCourse;
        link = link.substring(1,link.length-1);
        }
        var name, platform, rating, price,duration;
        if(this.props.NumberofHours)
        {
            duration = this.props.NumberofHours;
            duration = duration.substring(1, duration.length-1);
        }
        if(this.props.Price)
        {
            price = this.props.Price;
            price = duration.substring(1, price.length-1);
        }
        var number = Math.floor((Math.random() * 8) + 1);
        var img;
        if(number == 1)
            img=pic1;
        else if(number ==2)
            img = pic2;
            else if(number ==3)
            img = pic3;
            else if(number ==4)
            img = pic4;
            else if(number ==5)
            img = pic5;
            else if(number ==6)
            img = pic6;
            else if(number ==7)
            img = pic7;
            else if(number ==8)
            img = pic8;
        if((this.props.UrlOfImageThumbnail)&&(this.props.UrlOfImageThumbnail[1]=='h')&&(this.props.UrlOfImageThumbnail[2]=='t')&&(this.props.UrlOfImageThumbnail[3]=='t')){
        img = this.props.UrlOfImageThumbnail;
        img = img.substring(1, img.length-1);
        }
        if(this.props.NameofCourse)
            name= this.props.NameofCourse.substring(1, this.props.NameofCourse.length-1);

        if(this.props.Rating)
        {
            rating = this.props.Rating;
            rating = rating.substring(1,4);
            // rating = this.props.Rating.substring(1,this.props.Rating-1);
            // rating = renderHtml(rating);
            // console.log("Rating  = " + rating);
        }
    }
        

        var picUrl;
        if(this.props.platform == "udemy")
            picUrl = "https://www.vectorlogo.zone/logos/udemy/udemy-icon.svg";
        else if(this.props.platform == "apnaCourse")
            picUrl = "https://www.apnacourse.com/assets/img/mobile_logo.png";
        else if(this.props.platform == "arcademics")
            picUrl = arcademics;
        else if(this.props.platform == "bitdegree")
            picUrl = "https://cdn.bitdegree.org/assets/bitdegree-logo-black.svg";
        else if(this.props.platform == "Code Academy")
            picUrl = "https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515403_10914.png";
        else if(this.props.platform == "coursera")
            picUrl = "https://lh3.googleusercontent.com/13U5Vnio6xeZwOUzpOqf6lCq3phOUw80y4e9VLAONVfkEqYbME5ySDvg28CPien5dHs";
        else if(this.props.platform == "digigrad")
            picUrl = "https://digigrad.in/wp-content/themes/digigrad/images/logo/digigradlogo.png";
        else if(this.props.platform == "edx")
            picUrl = "https://www.edx.org/sites/default/files/theme/edx-logo-header.png";
        else if(this.props.platform == "harvard")
            picUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png";
        else if(this.props.platform == "khanAcademy")
            picUrl = "https://lh3.googleusercontent.com/wr5KhcPHfYGPiVQcAHgP4zVDTVOZU7OwwUy74jsTcAKQ6r1X1NyITJnjgQXzcovmIQ";
        else if(this.props.platform == "openYale")
            picUrl = "https://cdn01.alison-static.net/publishers/78/f1.jpg";
        else if(this.props.platform == "skillShare")
            picUrl = skillshare;
        else if(this.props.platform == "udacity")
            picUrl = "https://d20vrrgs8k4bvw.cloudfront.net/images/open-graph/udacity.png";
        else if(this.props.platform == "verbling")
            picUrl = "https://cdn.verbling.com/0000_images/logos/logomark-gradient-400.png";
        else if(this.props.platform == "YOUTUBE")
            picUrl = "https://lh3.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc"


        if(this.props.NameofCourse){
        return(
            <div className="">
            <div className="card mb-3" >
                <div className="row no-gutters">
            <div className="col-md-3 search-course-card--card--left-col--3kKip">
                <a target="_blank" href={link}>
                    <img className="card-img" 
                    src={img}
                     alt="course image" width="304" height="171" className="aradhna_card__image">    
                    </img>
                </a>        
            </div>
            <div className="col-md-9">
                <div className="card-body">
                    <div className="from">
                        <div>

                            <img className='iconDetails' src={picUrl} /> 



                        </div>
                       <p>{this.props.platform}</p>
                    </div>
                    <div className="card__head">
                        <a target="_blank" href={link} className="card__title">{name}</a>
                        {/* <div className="col-right-0 time"><span className="star" aria-hidden="true">★★★★★</span></div> */}
                        {
                        this.props.Rating?
                        <div className="col-right-0 time"><span className="star" aria-hidden="true">{rating}★</span></div>
                        :""
                        }
                    </div>
                   
                    <p className="summary">
                        {
                            this.props.CourseDescription?this.props.CourseDescription:"Level up your skills by taking the best courses online. Now! Check out the course by clicking on See Details."
                        }
                    </p>
                    
                    <div className="fluid-row">
                            <div className="col-left-0 upvotes">
                                {/* <i className="fa fa-chalkboard-teacher"></i>  */}
                                {this.props.Instructor?this.props.Instructor:this.props.platform}
                            </div>
                            {   this.props.NumberofHours?
                                <div className="col-left-0 upvotes">
                            {/* <span><i className="fa fa-stopwatch"></i></span> */}
                                 {duration}
                                
                            </div>:""}
                            {this.props.Price?
                            <div className="col-left-0 upvotes" style={{color:"green"}}>
                                {price}
                            </div>
                            :""}
                            <a target="_blank" 
                            href={link}
                             className="read_more">
                            {/* <Link to={link} className="read_more">                           */}
                                {/* <a href={`${this.props.LinkToCourse}`}>SEE DETAILS</a> */}
                                SEE DETAILS
                            {/* </Link> */}
                            </a>
                    </div>
                </div>  
            </div>
        </div>
        </div>
        </div>
          
        );}
        else
        {
            return(
                <div></div>
            )
        }
    }
}

export default CardComponent;