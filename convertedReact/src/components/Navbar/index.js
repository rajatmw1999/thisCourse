import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

class navbar extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          navExpanded: false
        };
      }
    
      setNavExpanded = (expanded) => {
        this.setState({ navExpanded: expanded });
      }
    
      setNavClose = () => {
        this.setState({ navExpanded: false });
      }

      
    
    
    render() {
      return <div className="navigation-wrap bg-light start-header start-style">
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <Navbar bg="light" expand="lg" className="navbar navbar-expand-md navbar-light" onToggle={this.setNavExpanded} expanded={this.state.navExpanded}>

                   
                      <Navbar.Brand href="#home">ThisCourse</Navbar.Brand>

                        <Navbar.Toggle  className="navbar_navbar-toggler"  aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">

                      <Nav classNameName="mr-auto" className="navbar-nav ml-auto py-md-0">
                        <li className="navbar_nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                            <Nav.Link className="navbar_nav-link dropdown-toggle" href="#home" onClick={this.setNavClose}>Home
                            </Nav.Link>
                        </li>
                        <li className="navbar_nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                            <Nav.Link className="navbar_nav-link dropdown-toggle" href="#" onClick={this.setNavClose}>Page 1
                            </Nav.Link>
                        </li>
                        <li className="navbar_nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                            <Nav.Link className="navbar_nav-link dropdown-toggle" href="#" onClick={this.setNavClose}>Page 2
                            </Nav.Link>
                        </li>
                        <li className="navbar_nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                            <Nav.Link className="navbar_nav-link dropdown-toggle" href="#" onClick={this.setNavClose}>Signup
                            </Nav.Link>
                        </li>
                        <li className="navbar_nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                            <Nav.Link className="navbar_nav-link dropdown-toggle" href="#" onClick={this.setNavClose}>Login
                            </Nav.Link>
                        </li>
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