import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import photo from './14.jpg';

class newsbox2 extends React.Component {
    
    
    render() {
        return <div className="col-12 col-sm-3">
        <div className="single-blog-post style-2 mb-5">
            
            <div className="blog-thumbnail">
                <a href="#"><img src={photo} alt=""/></a>
            </div>

            <div className="blog-content">
                <span className="post-date">June 20, 2018</span>
                <a href="#" className="post-title">Elon Musk: Tesla worker admitted to sabotage</a>
                <a href="#" className="post-author">By Michael Smith</a>
            </div>
        </div>
    </div>
  
;
     
  }
}
  
export default newsbox2;