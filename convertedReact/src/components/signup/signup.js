import Footer from '../footer/index'
import Cta from '../../pages/LandingPage/Cta/index'
import React , {Component} from 'react';
import './sig'
import Navbar from '../Navbar/index'
import './style.css';
import Aboutsection from '../about_section/Aboutsection'

// 667331424471-e52lkc91q7uqa67tlnvbr20cmckrnsr6.apps.googleusercontent.com

class Signup extends Component{
  constructor(props){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.onSignIn = this.onSignIn.bind(this);
  }
    handleSubmit()
    {}

    componentDidMount()
    {
      var loginName = localStorage.getItem("google-name");
      if(loginName!="null")
      {
          window.location = "/";
      }

    }

    render() {
      return(
    <div>
      {/* <meta name="google-signin-client_id" content="667331424471-e52lkc91q7uqa67tlnvbr20cmckrnsr6.apps.googleusercontent.com"></meta> */}
      <Navbar />
      <Aboutsection displayName="Join the SkillUnga community" />
        <div className="container">
          {/* <br/>
          <br/> */}
  {/* <h2>Become a <span style={{"color":"darkgreen"}}>SkillUnga</span> Member to avail special discounts on featured courses!</h2> */}
<br/>
<br/>

  {/* <button type="button" className="btn btn-primary aradhna_signupbutton" style={{"background-color": "#007aff"}} data-toggle="modal" data-target="#myModal">
    Sign Up
  </button> */}
<div className="row">
  <div className="col-lg-6">
  <div className=" " id="myModal" role="dialog">
    <div className="modal-dialog">
      <div className="modal-content">

        
        <div className="modal-header">
          <h5 className="modal-title">Create an account</h5>
          {/* <button type="button" className="close" data-dismiss="modal">&times;</button> */}
        </div>

     
        <div className="modal-body">
          <center>
              Sign up to get featured courses and much more!<br></br>
              {/* CONTINUE WITH: */}
              </center>
        <div className="container">
          <div className="row justify-content-center">

              <center></center>
              <div className="col-12">
              <div className="row justify-content-center">
   
              
              {/* <button className="btn-ld"><i className="fa fa-linkedin"></i> LinkedIn</button> */}
              {/* <div class="fb-login-button" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false" data-width=""></div> */}
              </div>
              </div>
              <br/>
              <div className="strike col-12">
              <div className="row justify-content-center">
                <p className="or">Sign Up</p>
                </div>
              </div>

              <hr></hr>

            <form onSubmit={this.handleSubmit}>
              <div className="col-12">
              <div className="row justify-content-center">
              <input className="aradhna_signupinput" type="text" placeholder="Full Name" name="name" required></input>
              <br></br>
                <input className="aradhna_signupinput" type="text" placeholder="Email" name="email" required></input>
                <br></br>
                <input className="aradhna_signupinput" type="text" placeholder="Profession : Student, Engineer, Graphic Designer" name="profession" required></input>
                <br></br>
                <input className="aradhna_signupinput" type="text" placeholder="Institute: College, Company, School" name="institute"></input>
              <br></br>
                <input className="aradhna_signupinput" type="password" placeholder="Enter Password" name="psw" required></input>
              </div>
              </div>
              </form>

              <p className="psw-char col-12 col-sm-9">
                  Minimum 6 characters
                </p>
                <button type="submit" className="signupbtn btn btn-primary">Create Account</button>
                <br/>
                {/* <p className="signin">Already have an account? <a href="#">Login!</a></p> */}
                  </div>
                  
          
          </div>

        </div>
        </div>



      </div>
    </div>

  </div>
<div className="col-lg-6">
<div className=" " id="myModal" role="dialog" >
    <div className="modal-dialog" >
      <div className="modal-content" style={{"backgroundColor":"#00CCCC"}}>

        
        <div className="modal-header">
          <h5 className="modal-title">Login to SkillUnga.</h5>
          {/* <button type="button" className="close" data-dismiss="modal">&times;</button> */}
        </div>

     
        <div className="modal-body">
          <center>
              {/* Sign up to get tutorials ranked and much more!<br></br> */}
              CONTINUE WITH:
              </center>
        <div className="container">
          <div className="row justify-content-center">

              <center></center>
              <div className="col-12">
              <div className="row justify-content-center">
              <div class="g-signin2" data-onsuccess="onSignIn"></div>

              {/* <div id="customBtn" class="customGPlusSignIn g-signin2" data-onsuccess="onSignIn" >
      <span class="icon"></span>
      <span class="buttonText">Google</span>
    </div> */}
              
              {/* <button className="btn-ld"><i className="fa fa-linkedin"></i> LinkedIn</button> */}
              {/* <div class="fb-login-button" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false" data-width=""></div> */}
              </div>
              </div>
              <br/>
              <div className="strike col-12">
              <div className="row justify-content-center">
                <p className="or">OR</p>
                </div>
              </div>

              <hr></hr>

              <div className="col-12">
              <div className="row justify-content-center">
              {/* <input className="aradhna_signupinput" type="text" placeholder="Full Name" name="name" required></input> */}
              {/* <br></br> */}
                <input className="aradhna_signupinput" type="text" placeholder="Email" name="email" required></input>
              <br></br>
                <input className="aradhna_signupinput" type="password" placeholder="Enter Password" name="psw" required></input>
                


               
              </div>
              </div>
              {/* <p className="psw-char col-12 col-sm-9">
                  Minimum 6 characters
                </p> */}
                <button type="submit" className="signupbtn btn btn-success">Login</button>
                <br/>
                {/* <p className="signin">Already have an account? <a href="#">Let the unga factor flow</a></p> */}
                  </div>
                  
          
          </div>

        </div>
        </div>


</div>
</div>



   

      </div>
    </div>



  </div>
  <br />
  <br />
  <Cta />
<Footer/>

</div>

          
          
        );
    }
  }
 

export default Signup;

















