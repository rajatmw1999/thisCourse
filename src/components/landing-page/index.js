import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CountUp from 'react-countup';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';

var fn = function () {
  /* do you want */  
}



class LandingPage extends React.Component {
    
    
    render() {
      return <div>
                <header className="container-fluid bg-white text-capitalize" id="header-1">
                  <figure className="mx-auto" id="img-div">
                      <div id="image" >
                        <img src="https://www.picturepaste.ca/images/2020/05/08/enter.png" width="150" alt="..."/>
                      </div>
                    </figure>
                </header>


                <section className="jumbotron container-fluid bg-cover " id="main-pic">
                  <div className="container">
                    <h1>Become <span className="text-success">Successful</span></h1>
                      <h3>Build your own path</h3>
                      <button type="button" className="btn btn-primary font-weight-bold">get started</button>
                  </div>
                </section>


                <section  className="bg-light mb-4" id="intro">
                  <div className="container mb-4">
                    <div className="row mx-auto">
                      <div className=" col-11 col-sm-12 col-md-9 col-lg-9 col-xl-10 mx-auto">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit volutpat maecenas volutpat blandit. Amet dictum sit amet justo. Hendrerit gravida rutrum quisque non tellus orci ac auctor. Ipsum dolor sit amet consectetur.
                          </p>
                      </div>
                    </div>
                  </div>
                </section>


                <div id="choose-easybank" className="container-md mt-5 pt-5 mt-md-custom-easybank d-md-flex flex-md-wrap">
                  <h2><strong>Why Choose Us?</strong></h2>


                  <p className="text-left text-md-left color-grayish-blue w-100 gutter-md-left-padding"> We leverage Open Banking to turn your bank account into your financial hub. Control
                    your finances like never before.</p>
                  <div className="card col-sm-6 col-lg-3 row justify-content-center align-items-center align-items-md-start flex-direction-column">
                    <img src="https://svgshare.com/i/JpQ.svg" alt="Online Banking" className="img-fluid"/>
                    <h4>Online Banking</h4>
                    <p className="text-left text-md-left color-grayish-blue whyusp"> Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                  </div>
                  <div className="card col-sm-6 col-lg-3 row justify-content-center align-items-center align-items-md-start flex-direction-column">
                    <img src="https://svgshare.com/i/Joj.svg" alt="Simple Budgeting" className="img-fluid"/>
                    <h4> Simple Budgeting</h4>
                    <p className="text-left  text-md-left color-grayish-blue whyusp">See exactly where your money goes
                      each month. Receive notifications when you’re close to hitting your limits.</p>
                  </div>
                  <div className="card col-sm-6 col-lg-3 row justify-content-center align-items-center align-items-md-start flex-direction-column">
                    <img src="https://svgshare.com/i/Jp4.svg" alt="Fast Onboarding" className="img-fluid"/>
                    <h4>Fast Onboarding</h4>
                    <p className="text-left  text-md-left color-grayish-blue whyusp">We don’t do branches. Open your
                      account in minutes online and start taking control of your finances right away.</p>
                  </div>
                  <div className="card col-sm-6 col-lg-3 row justify-content-center align-items-center align-items-md-start flex-direction-column">
                    <img src="https://svgshare.com/i/Jp4.svg" alt="Open API" className="img-fluid"/>
                    <h4>Open API</h4>
                    <p className="text-left  text-md-left color-grayish-blue whyusp">Manage your savings, investments,
                      pension, and much more from one account. Tracking your money has never been easier.</p>
                  </div>
                </div>
<hr/>
    <h2 ><strong>Our Stats</strong></h2>

    <section id="counter-stats" className="wow fadeInRight" data-wow-duration="1.4s">
    	<div className="container">
    		<div className="row">

    			<div className="col-lg-3 stats">
    				<i className="fa fa-code" aria-hidden="true"></i>
            <br/>
            <CountUp
              start={0}
              end={900000}
              duration={5}
            ></CountUp>
    				{/* <div className="counting" data-count="900000">0</div> */}
    				<h4>Lines of code</h4>
    			</div>

    			<div className="col-lg-3 stats">
    				<i className="fa fa-check" aria-hidden="true"></i>
            <br/>
            <CountUp
              start={0}
              end={280}
              duration={5}
            ></CountUp>
    				<h4>Projects done</h4>
    			</div>

    			<div className="col-lg-3 stats">
    				<i className="fa fa-user" aria-hidden="true"></i>
            <br/>
            <CountUp
              start={0}
              end={75}
              duration={5}
            ></CountUp>
    				<h4>Happy clients</h4>
    			</div>

    			<div className="col-lg-3 stats">
    				<i className="fa fa-coffee" aria-hidden="true"></i>
            <br/>
            <CountUp
              start={0}
              end={999}
              duration={5}
            ></CountUp>
    				<h4>Cups of coffee</h4>
    			</div>
    		</div>
    	</div>
    </section>
<br/>
<br/>
<hr/>
<h2 className="testimonials"><strong>Testimonials</strong></h2>
{/* <div id="tfeature" className="container">
        <div className="columns">
            <div className="col-1"><button className="tfeature_btn" id="tfeature_prev"><span className="sr-only">Show Previous Testimonial
            </span>&lt;</button></div>
            <div className="col-9"><div id="tfeature-images" tabindex="-1"></div></div>
            <div className="col-1"><button className="tfeature_btn" id="tfeature_next"><span className="sr-only">Show Next Testimonial</span>&gt;</button></div>
        </div>
        <div id="tfeature-testimonial" aria-live="assertive" tabindex="0">
            <div id="tfeature-testimonial_content">...</div>
            <div id="tfeature-testimonial_author">...</div>
        </div>
</div> */}
    <Coverflow
    
      displayQuantityOfSide={2}
      navigation={false}
      enableHeading={false}
      infiniteScroll
      enableHeading
      media={{
        '@media (max-width: 900px)': {
          height: '500px'
        },
        '@media (min-width: 900px)': {
          width: '960px',
          height: '600px'
        }
      }}
    >

{/* <div
      onClick={() => fn()}
      onKeyDown={() => fn()}
      role="menuitem"
      tabIndex="0"
    >
    
      
    </div> */}


    <img
        src='https://brash-ui.firebaseapp.com/img/test-pic1.png'
        alt='Han Solo'
        style={{ display: 'block', width: '100%' , }}
        height="260" width="250"
      />
    <img src='https://brash-ui.firebaseapp.com/img/test-pic2.jpg' alt='Princess Leia' data-action="http://andyyou.github.io/react-coverflow/" height="260" width="250"/>
    <img src='https://brash-ui.firebaseapp.com/img/test-pic3.png' alt='Finn' data-action="http://andyyou.github.io/react-coverflow/"  height="260" width="200"/>
    <img src='https://brash-ui.firebaseapp.com/img/test-pic4.png' alt='Rey' data-action="http://andyyou.github.io/react-coverflow/"  height="260" width="250"/>
    <img src='https://brash-ui.firebaseapp.com/img/test-pic5.png' alt='Finn' data-action="http://andyyou.github.io/react-coverflow/"  height="260" width="250"/>
  
    
    </Coverflow>

    {/* <Coverflow
    width={660}
    height={280}
    displayQuantityOfSide={2}
    navigation={false}
    enableHeading={false}
    infiniteScroll
  >
    <div
      onClick={() => fn()}
      onKeyDown={() => fn()}
      role="menuitem"
      tabIndex="0"
    >
      <img
        src='https://brash-ui.firebaseapp.com/img/test-pic1.png'
        alt='title or description'
        style={{ display: 'block', width: '100%' }}
      />
    </div>
    <img src='https://brash-ui.firebaseapp.com/img/test-pic1.png' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
    <img src='https://brash-ui.firebaseapp.com/img/test-pic1.png' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
  </Coverflow> */}

<hr/>
  <div className="container partners">
    <h2><strong>Our Partners</strong></h2>
     <section className="customer-logos slider">

        <div className="slide"><img src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg"/></div>
        <div className="slide"><img src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg"/></div>
        <div className="slide"><img src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg"/></div>
        <div className="slide"><img src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg"/></div>
        <div className="slide"><img src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg"/></div>
        <div className="slide"><img src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg"/></div>
        <div className="slide"><img src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg"/></div>
        <div className="slide"><img src="https://image.freepik.com/free-vector/retro-label-on-rustic-background_82147503374.jpg"/></div>
     </section>
  </div>

    <footer id="foot">
      <p className="text-center">&copy; 2019-2020 ThisCourse Ltd. All rights reserved</p>
      <nav className="text-center text-white font-weight-bold">
        <a href="#">Privacy</a> | <a href="#">Policy Cookies</a> | <a href="#">Terms and Conditions</a>
      </nav>
      </footer>
      </div>

  ;
     
  }
}
  
export default LandingPage;