import React, {Component} from "react";

import './styles.css'

class Cta extends Component {
    render() {
      if(this.props.criteria == "roadmap"){
        return(
          <section id="call-to-action" class="wow fadeInUp">
          <div class="container">
            <div class="row">
              <div class="col-lg-9 text-center text-lg-left">
                <h3 class="cta-title vanshika_h3">Skill roadmaps  </h3>
                <p class="cta-text"> Explore exclusive rodmaps on different skills and stay updated with latest trends and skills  
        </p>
              </div>
              <div class="col-lg-3 cta-btn-container text-center">
                <a class="cta-btn align-middle" target="_blank" href="/roadmaps">Explore more</a>
              </div>
            </div>
          </div>
        </section> 
        )
      }
      else{
        return (
          
  <section id="call-to-action" class="wow fadeInUp">
  <div class="container">
    <div class="row">
      <div class="col-lg-9 text-center text-lg-left">
        <h3 class="cta-title vanshika_h3">Grab best offers </h3>
        <p class="cta-text"> Grab best offers on the best courses from the top platforms at one place 
</p>
      </div>
      <div class="col-lg-3 cta-btn-container text-center">
        <a class="cta-btn align-middle" target="_blank" href="/featured">Explore OFFERS</a>
      </div>
    </div>
  </div>
</section> 
        );
      }
    }
}

export default Cta;