/* global gapi */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Spic from '../../data/s.png'

import './script'

// function signOut() {
//   console.log("Sign Out");
//   var auth2 = gapi.auth2.getAuthInstance();
//   auth2.signOut().then(function () {
//     console.log('User signed out.');
//   });
// }


class navbar extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          navExpanded: false,
          name:null,
          login:false
        };
        this.handleHoverDropDown = this.handleHoverDropDown.bind(this);
        // this.signOut = this.signOut.bind(this);
      }
    
      // componentDidMount(){
        // var loginName = localStorage.getItem("google-name");
      //   if(loginName!="null")
      //   {
      //     var firstName = loginName.split(' ')[0];
      //     this.setState({
      //       name:firstName,
      //       login:true
      //     });
      //   }
       
      // }

      setNavExpanded = (expanded) => {
        this.setState({ navExpanded: expanded });
      }
    
      setNavClose = () => {
        this.setState({ navExpanded: false });
      }

      
      handleHoverDropDown(){
        console.log("Hovered");
      }

      // signOut(){
      //   console.log("Sign Out");
      //   localStorage.setItem("google-name", null);
      //   localStorage.setItem("google-name", null);
      //   localStorage.setItem("auth-token", null);
      //   this.setState({
      //     name:null,
      //     login:false
      //   });
      // }
     
    //   signOut() {
    //     console.log("Signing Out");
    //   var auth2 = gapi.auth2.getAuthInstance();
    //   auth2.signOut().then(function () {
    //     console.log('User signed out.');
    //   });
    //   localStorage.setItem("google-name", null);
    //     localStorage.setItem("google-name", null);
    //     localStorage.setItem("auth-token", null);
    //     this.setState({
    //       name:null,
    //       login:false
    //     });
    // }

    render() {
      return <div className="navigation-wrap bg-light start-header start-style">
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <Navbar bg="light" expand="lg" className="navbar navbar-expand-md navbar-light aradhna_navbarfont" onToggle={this.setNavExpanded} expanded={this.state.navExpanded}>

                   
                      <Navbar.Brand href="/"> <img src={Spic} id="rajat_nav_logo" /> killUnga </Navbar.Brand>

                      <Navbar.Toggle  className="navbar_navbar-toggler"  aria-controls="basic-navbar-nav-search" />
                      <Navbar.Collapse id="basic-navbar-nav-search">

                      <Nav classNameName="mr-auto" className="navbar-nav ml-auto py-md-0">
                        <li className="navbar_nav-item pl-4 pl-md-0 ml-0 ml-md-4 ">
                            <Nav.Link className="navbar_nav-link dropdown-toggle aradhna_navbarfont" href="/" onClick={this.setNavClose}>Home
                            </Nav.Link>
                        </li>
                        <li className="navbar_nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                            <Nav.Link className="navbar_nav-link dropdown-toggle aradhna_navbarfont" href="/featured" onClick={this.setNavClose}>Featured
                            </Nav.Link>
                        </li>
                        <li className="navbar_nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                            <Nav.Link className="navbar_nav-link dropdown-toggle aradhna_navbarfont" href="/roadmaps" onClick={this.setNavClose}>Roadmaps
                            </Nav.Link>
                        </li>
                        
                        {/* <a href="#" onclick="signOut();">Sign out</a> */}
                        {/* <ul className="navbar_nav-item pl-4 pl-md-0 ml-0 ml-md-4 dropdown-content">
                            <Nav.Link className="navbar_nav-link dropdown-toggle aradhna_navbarfont" href="/#categories" onClick={this.setNavClose}>Categories
                            </Nav.Link>
                        </ul> */}
                        <li className="navbar_nav-item pl-4 pl-md-0 ml-0 ml-md-4" onClick={this.setNavClose}>
                        <Nav.Link className="navbar_nav-link dropdown-toggle aradhna_navbarfont" href="/development-c">Compare Courses

                            </Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                          </NavDropdown> */}
                        </li>
                        {this.state.login
                        ?
                        <li className="navbar_nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <Nav.Link className="navbar_nav-link dropdown-toggle aradhna_navbarfont" onClick={this.signOut}>Sign Out<em>({this.state.name})</em>
                        </Nav.Link>
                        </li>
                        :
                        <li className="navbar_nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                            <Nav.Link className="navbar_nav-link dropdown-toggle aradhna_navbarfont" href="/signup">Sign In
                            </Nav.Link>
                        </li>
                        }
                       
                        {/* <li className="navbar_nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                            <Nav.Link className="navbar_nav-link dropdown-toggle aradhna_navbarfont" href="#" onClick={this.setNavClose}>Login
                            </Nav.Link>
                        </li> */}
                      </Nav>
                     
                      </Navbar.Collapse>

                  </Navbar>
              </div>
          </div>
      </div>

  </div>
 
  ;
     
  }
  }
  
  export default navbar;