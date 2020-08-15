import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './index.css';

class Navsearch extends React.Component {

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
                       <Form inline>
                                <FormControl type="text" placeholder="Search" className="input_navsearch " />
                                <span className="fa fa-lg fa-search form-control-feedback search_nav-search"></span>
                            </Form>
                            <li className="navbar_nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                              <Nav.Link onClick={this.setNavClose} className="navbar_nav-link dropdown-toggle">
                                    Home

                              
                              </Nav.Link>
                            </li>
                              
                              <li className="navbar_nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                <Nav.Link onClick={this.setNavClose} className="navbar_nav-link dropdown-toggle">
                                    Page 1
                                </Nav.Link>
                              </li>
                              
                              <li className="navbar_nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                <Nav.Link to="#" onClick={this.setNavClose} className="navbar_nav-link dropdown-toggle">
                                    Page 2
                                </Nav.Link>
                              </li>
                              
                              <li className="navbar_nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                <Nav.Link onClick={this.setNavClose} className="navbar_nav-link dropdown-toggle">
                                    Signup
                                </Nav.Link>
                              </li>

                              
                              <li className="navbar_nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                <Nav.Link onClick={this.setNavClose} className="navbar_nav-link dropdown-toggle">
                                    Login
                                </Nav.Link>
                              </li>
                      </Nav>
                      </Navbar.Collapse>

                  </Navbar>
              </div>
          </div>
      </div>
  </div>;
     
  }
  }
  
  export default Navsearch;

  