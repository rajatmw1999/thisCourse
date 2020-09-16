import React, {Component} from "react";
import "./index.css";
import photo from './img/1.png'
import {domain} from '../../data/hosted'

class FeaturedCourseCard extends Component {
    constructor(props)
    {
        super(props);
        console.log(this.props);
        this.state={
            loading:true
        }
    }

    async componentDidMount(){
        if(this.props.criteria == "listingcourse")
        {
            var fetchSkills = domain + "admin/featuredCoursesByCategory/" + this.props.category;
           await fetch(`${fetchSkills}`)
          .then(res => res.json())
          .then(
            (result) => {
              var display = result.map((data2) => 
                <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="single_courses"  style={{boxShadow:"2px 2px 2px 2px silver", borderRadius:"5px"}}>
                    <div class="thumb">
                        <a class="akruti-a" href="#">
                            <img class="akruti-img" 
                            src={data2.imageURL?data2.imageURL:photo}
                            alt=""/>
                        </a>
                    </div>
                    <div class="courses_info">
                        <span>{data2.category} | {data2.company}</span>
                        <h3 class="akruti-h3"><a class="akruti-a" target="_blank" href={`${data2.link}`}>{data2.name}</a></h3>
                        <div class="star_prise d-flex justify-content-between">
                            <div class="star">
                                <i class="flaticon-mark-as-favorite-star"></i>
                                <span>{data2.nameOfSkill}</span>
                            </div>
                            <div class="prise">
                                <span class="offer">Rs. {data2.price}</span>
                                <span class="active_prise">
                                    Rs. {data2.priceDiscount}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                )
                this.setState({
                    loading: false,
                    display:display,
                    suggestions:result
                  });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                loading: false,
                error
              });
            }
          )
        }
    }

    render() {
        if(this.props.criteria == "listingcourse")
        {
            return (
                <div class="popular_courses">
                    <div className="container">
                    <div className="row ">
            <div className="col-6 title-section">
              <h2 className="heading">Users Also Bought</h2>
            </div>
            </div>
            {/* <div className="col-6 text-right">
              <div className="custom-nav">
              <a href="#" className="js-custom-prev-v2"><span className="icon-keyboard_arrow_left"></span></a>
              <span className="sleft"></span>
              <a href="#" className="js-custom-next-v2"><span className="icon-keyboard_arrow_right"></span></a>
              </div>
            </div> */}
          </div>
                     <div class="all_courses">
            <div class="container">
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div class="row">
                    {this.state.loading?"":this.state.display}
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
            );
        }
        else{
        return (<div class="col-xl-4 col-lg-4 col-md-6">
                <div class="single_courses">
                    <div class="thumb">
                        <a class="akruti-a" href="#">
                            <img class="akruti-img" 
                            src={this.props.data.imageURL?this.props.data.imageURL:photo}
                            alt=""/>
                        </a>
                    </div>
                    <div class="courses_info">
                        <span>{this.props.data.category} | {this.props.data.company}</span>
                        <h3 class="akruti-h3"><a class="akruti-a" target="_blank" href={`${this.props.data.link}`}>{this.props.data.name}</a></h3>
                        <div class="star_prise d-flex justify-content-between">
                            <div class="star">
                                <i class="flaticon-mark-as-favorite-star"></i>
                                <span>{this.props.data.nameOfSkill}</span>
                            </div>
                            <div class="prise">
                                <span class="offer">Rs. {this.props.data.price}</span>
                                <span class="active_prise">
                                    Rs. {this.props.data.priceDiscount}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
        }                    
                                   
    }
}

export default FeaturedCourseCard;