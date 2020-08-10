
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


  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
    Sign Up
  </button>


  <div className="modal fade" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">

        
        <div className="modal-header">
          <h4 className="modal-title">Welcome to InCampus Ltd.</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>

     
        <div className="modal-body">
          <center>
            Sign up to get tutorials ranked and much more!<br></br>
              CONTINUE WITH:
              </center>
        <div className="container">

         <center></center>
          <button className="btn-G"><i className="fa fa-google"></i> Google</button>
            <button className="btn-fb"><i className="fa fa-facebook"></i> facebook</button>
            <button className="btn-ld"><i className="fa fa-linkedin"></i> LinkedIn</button>

          <div className="strike">
            <p className="or">Or</p>
          </div>

          <hr></hr>
  <input type="text" placeholder="Full Name" name="name" required></input>
<br></br>
  <input type="text" placeholder="Email" name="email" required></input>
<br></br>
  <input type="password" placeholder="Enter Password" name="psw" required></input>

                    <p className="psw-char">
                      Minimum 6 characters
                      </p>
                    <div className="clearfix">
                      <button type="submit" className="signupbtn btn btn-success">Create Account</button>
                    </div>
                  </div>
                  <p className="signin">Already have an account? <a href="#">Login!</a></p>
          
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

















