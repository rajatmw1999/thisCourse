import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import photo from './Course-Suggesion-1.jpg';
import './icomoon/style.css';

class suggestionCarousel extends React.Component {
    
    
    render() {
        return <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-6 title-section">
              <h2 className="heading">Course suggestion</h2>
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
;
     
  }
}
  
export default suggestionCarousel;