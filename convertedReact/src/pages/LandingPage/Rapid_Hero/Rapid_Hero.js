import React, {Component} from "react";
import "./Rapid_Hero.css";
import im from './intro-img.svg'

class Rapid_Hero extends Component {
    render() {
        return (
            <div >

<section id="hero" className="clearfix">
    <div className="container d-flex h-100">
      <div className="row justify-content-center align-self-center" data-aos="fade-up">
        <div className="col-md-6 intro-info order-md-first order-last" data-aos="zoom-in" data-aos-delay="100">
          <h2>Rapid Solutions<br></br>for Your <span>Business!</span></h2>
          {/* <div>
            <input type="text" class="form-control" placeholder="Search Courses" />
          </div> */}
          <form class="rajat_rapid_hero_example" action="action_page.php">
  <input type="text" placeholder="Search Courses" name="search" />
  <button type="submit"><i class="fa fa-search"></i></button>
</form>
          <div>
            <a href="#categories" className="btn-get-started scrollto">Explore More</a>
          </div>
        </div>

        <div className="col-md-6 intro-img order-md-last order-first" data-aos="zoom-out" data-aos-delay="200">
          <img src={im} alt="" className="img-fluid"></img>
        </div>
      </div>

    </div>
  </section>
                
            </div>
        );
    }
}

export default Rapid_Hero;



