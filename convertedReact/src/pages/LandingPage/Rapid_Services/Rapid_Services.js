import React, {Component} from "react";
import "./Rapid_Services.css";
import client1 from './img/clients/client-1.png'
import client2 from './img/clients/client-2.png'
import client3 from './img/clients/client-3.png'
import client4 from './img/clients/client-4.png'
import client5 from './img/clients/client-5.png'
import client6 from './img/clients/client-6.png'
import client7 from './img/clients/client-7.png'
import client8 from './img/clients/client-8.png'

// import RapidNumbers from '../Rapid_Numbers/Rapid_Numbers'



class Rapid_Services extends Component {
    // componentDidMount () {
    //     const script = document.createElement("script");
    
    //     script.src = "nj.js";
    //     script.async = true;
    
    //     document.body.appendChild(script);
    // }
    render() {
        return (
            <div >
                  <div className="vanshika_body">

<section id="services" className="section-bg">
  <div className="container">

    <header className="section-header">
      <h3 className="vanshika_h3">Services</h3>
      <p className="vanshika_para">Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>
    </header>

    <div className="row">

      <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
        <div className="box">
          <div className="icon" style={{background:"#fceef3"}}><i className=" icons ion-ios-analytics-outline" style={{color:"#ff689b"}}></i></div>
          <h4 className="title"><span className="vanshika_anchor">Lorem Ipsum</span></h4>
          <p className="description vanshika_para">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
        <div className="box">
          <div className="icon" style={{background:"#fff0da"}}><i className=" icons ion-ios-bookmarks-outline" style={{color:"#e98e06"}} ></i></div>
          <h4 className="title"><span  className="vanshika_anchor">Dolor Sitema</span></h4>
          <p className="description vanshika_para">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
        <div className="box">
          <div className="icon" style={{background:"#e6fdfc"}} ><i className=" icons ion-ios-paper-outline" style={{color:"#3fcdc7"}} ></i></div>
          <h4 className="title"><span  className="vanshika_anchor">Sed ut perspiciatis</span></h4>
          <p className="description vanshika_para">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
        <div className="box">
          <div className="icon" style={{background:"#eafde7"}} ><i className=" icons ion-ios-speedometer-outline" style={{color:"#41cf2e"}}  ></i></div>
          <h4 className="title"><span  className="vanshika_anchor">Magni Dolores</span></h4>
          <p className="description vanshika_para">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
        <div className="box">
          <div className="icon"style={{background:"#e1eeff"}}  ><i className=" icons ion-ios-world-outline" style={{color:"#2282ff"}}  ></i></div>
          <h4 className="title"><span  className="vanshika_anchor">Nemo Enim</span></h4>
          <p className="description vanshika_para">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
        <div className="box">
          <div className="icon" style={{background:"#ecebff"}} ><i className=" icons ion-ios-clock-outline" style={{color:"#8660fe"}} ></i></div>
          <h4 className="title"><span  className="vanshika_anchor">Eiusmod Tempor</span></h4>
          <p className="vanshika_para description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
        </div>
      </div>

    </div>

  </div>
</section>

{/* <RapidNumbers /> */}

<section id="clients" className="wow fadeInUp">
  <div className="container">

    <header className="section-header">
      <h3 className="vanshika_h3">Our Clients</h3>
    </header>

    <div className="brands-logo">
      <img className="brands" src={client1} alt=""></img>
      <img className="brands" src={client2} alt=""></img>
      <img className="brands" src={client3} alt=""></img>
      <img className="brands" src={client4} alt=""></img>
      <img className="brands" src={client5} alt=""></img>
      <img className="brands" src={client6} alt=""></img>
      <img className="brands" src={client7} alt=""></img>
      <img className="brands" src={client8} alt=""></img>
    </div>

  </div>
</section>
</div>

            </div>

        );
    }
}

export default Rapid_Services;