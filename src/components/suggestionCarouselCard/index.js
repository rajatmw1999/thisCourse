import React from 'react';
import ReactDOM from 'react-dom';

import pic from './udemy22.PNG'

class SuggestionCarouselCard extends React.Component {
  render() {
    return (
<div className="row">
    <div className="col-lg-3">
<div className="block">
  <div className="card mb-2">
    <img className="card-img-top"
      src={pic} alt="Card image cap" />
    <div className="card-body">
      <h4 className="card-title">Adobe Flash CS5.5 for beginners</h4>
      <h6 className="h6-instructor">Andy Anderson</h6>
      <h6 className="h6" >11 hours</h6>
      <h5>FREE</h5>
      <a className="btn btn-primary">SEE DETAILS</a>
    </div>
  </div>
</div>
</div>
</div>
    );
  }
  }

export default SuggestionCarouselCard;


