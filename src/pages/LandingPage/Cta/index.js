import React, {Component} from "react";

import './styles.css'

class Cta extends Component {
    render() {
        return (
          
  <section id="call-to-action" class="wow fadeInUp">
  <div class="container">
    <div class="row">
      <div class="col-lg-9 text-center text-lg-left">
        <h3 class="cta-title vanshika_h3">Call To Action</h3>
        <p class="cta-text"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div class="col-lg-3 cta-btn-container text-center">
        <a class="cta-btn align-middle" target="_blank" href="/featured">Call To Action</a>
      </div>
    </div>
  </div>
</section> 
        );
    }
}

export default Cta;