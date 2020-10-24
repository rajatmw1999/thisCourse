import React from 'react'
import PropTypes from 'prop-types';
import './index.css';
import photo from './images/img1.png'

const FeaturedCourseTracks = props => {
    return (
        <div  class="container">
            <h2 class="career_heading">Grab best offers <span><badge class="grad-badge">Exclusive Cashbacks</badge></span></h2>


            <div class="foundation and algorithm">
                <p class="sub-heading ">These are courses that take you from <strong>zero to hero</strong>. Each track is designed specifically to cater to a particular goal you can choose and <strong>covers everything you need to learn and assumes no prior knowledge.</strong></p>

                <div  class="courses-container row">

                    <div class="card course-card">
                        <div class="">
                        <img class="vanshika_icons card-img-top ML"src={photo}/>
                        <p>Competitive Programmer</p>
                        </div>
                    </div>
                    <div class="card course-card">
                        <div class=""><img class="vanshika_icons" src={photo}/>
                        <p>Android Developer</p>
                        </div>
                    </div>
                    <div class="card course-card">
                        <div class=""><img class="vanshika_icons"class="vanshika_icons" src={photo}/>
                        <p >Python &amp; Web Dev (MERN)</p>
                        </div>
                    </div>

                    <div class="card course-card">
                        <div class=""><img class="vanshika_icons" src={photo}/>
                        <p >C++ &amp; Web Dev (Node.js)</p>
                        </div>
                    </div>

                    <div class="card course-card">
                        <div class=""><img class="vanshika_icons" src={photo}/>
                        <p>Data Scientist</p>
                        </div>
                    </div>
                    <div class="card course-card">
                        <div class=""><img class="vanshika_icons" src={photo}/>
                        <p>Machine Learning</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      
    )
}

FeaturedCourseTracks.propTypes = {

}

export default FeaturedCourseTracks
