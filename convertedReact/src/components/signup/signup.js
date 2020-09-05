
import React , {Component} from 'react';


import './style.css';
class Signup extends Component{
    componentDidMount () {
        const script = document.createElement("script");
    
        script.src = "sig.js";
        script.async = true;
    
        document.body.appendChild(script);
    }

    render() {
      return(
    <div>
        <div className="container">
  <h2>Modal Signup Form</h2>


  <button type="button" className="btn btn-primary aradhna_signupbutton" style={{"background-color": "#007aff"}} data-toggle="modal" data-target="#myModal">
    Sign Up
  </button>


  <div className="modal fade " id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">

        
        <div className="modal-header">
          <h5 className="modal-title">Welcome to InCampus Ltd.</h5>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>

     
        <div className="modal-body">
          <center>
              Sign up to get tutorials ranked and much more!<br></br>
              CONTINUE WITH:
              </center>
        <div className="container">
          <div className="row justify-content-center">

              <center></center>
              <div className="col-12">
              <div className="row justify-content-center">
              <button className="btn-G"><i className="fa fa-google"></i> Google</button>
              
              <button className="btn-ld"><i className="fa fa-linkedin"></i> LinkedIn</button>
              <button className="btn-fb"><i className="fa fa-facebook"></i> facebook</button>
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
              <input className="aradhna_signupinput" type="text" placeholder="Full Name" name="name" required></input>
              <br></br>
                <input className="aradhna_signupinput" type="text" placeholder="Email" name="email" required></input>
              <br></br>
                <input className="aradhna_signupinput" type="password" placeholder="Enter Password" name="psw" required></input>
                


               
              </div>
              </div>
              <p className="psw-char col-12 col-sm-9">
                  Minimum 6 characters
                </p>
                <button type="submit" className="signupbtn btn btn-success">Create Account</button>
                <p className="signin">Already have an account? <a href="#">Login!</a></p>
                  </div>
                  
          
          </div>

        </div>
        </div>



      </div>
    </div>
  </div>

</div>

          
          
        );
    }
  }
 

export default Signup;

















