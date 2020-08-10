import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import photo from './img/bg-img/1.jpg';
import photo2 from './img/bg-img/2.jpg';
import photo3 from './img/bg-img/3.jpg';

class newsbox extends React.Component {
    
    
    render() {
        return <div class="hero-area">
        <div class="hero-post-slides">

            <div class="single-slide">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <div class="single-blog-post style-1" data-animation="fadeInUpBig" data-delay="100ms" data-duration="1000ms">
                                <div class="blog-thumbnail bg-overlay">
                                    <a href="#"><img src={photo} alt=""/></a>
                                </div>

                                <div class="blog-content">
                                    <span class="post-date">June 20, 2018</span>
                                    <a href="#" class="post-title">Traffic Problems in Time Square</a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-12 col-md-6">
                            <div class="single-blog-post style-1 mb-30" data-animation="fadeInUpBig" data-delay="300ms" data-duration="1000ms">
                                <div class="blog-thumbnail bg-overlay">
                                    <a href="#"><img src={photo2} alt=""/></a>
                                </div>

                                <div class="blog-content">
                                    <span class="post-date">June 20, 2018</span>
                                    <a href="#" class="post-title">The best way to spend your holliday</a>
                                </div>
                            </div>
                            <div class="single-blog-post style-1" data-animation="fadeInUpBig" data-delay="500ms" data-duration="1000ms">
                                <div class="blog-thumbnail bg-overlay">
                                    <a href="#"><img src={photo3} alt=""/></a>
                                </div>

                                <div class="blog-content">
                                    <span class="post-date">June 20, 2018</span>
                                    <a href="#" class="post-title">Sport results for the weekend games</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
;
     
  }
}
  
export default newsbox;