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
        this.handleHoverDropDown = this.handleHoverDropDown.bind(this);
      }
    
      setNavExpanded = (expanded) => {
        this.setState({ navExpanded: expanded });
      }
    
      setNavClose = () => {
        this.setState({ navExpanded: false });
      }

      
      handleHoverDropDown(){
        console.log("Hovered");
      }
    
    render() {
      return <div className="navigation-wrap bg-light start-header start-style">
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <Navbar bg="light" expand="lg" className="navbar navbar-expand-md navbar-light aradhna_navbarfont" onToggle={this.setNavExpanded} expanded={this.state.navExpanded}>

                   
                      <Navbar.Brand href="/">ThisCourse</Navbar.Brand>

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
                        {/* <ul className="navbar_nav-item pl-4 pl-md-0 ml-0 ml-md-4 dropdown-content">
                            <Nav.Link className="navbar_nav-link dropdown-toggle aradhna_navbarfont" href="/#categories" onClick={this.setNavClose}>Categories
                            </Nav.Link>
                        </ul> */}
                        <li className="navbar_nav-item pl-4 pl-md-0 ml-0 ml-md-4" onClick={this.setNavClose}>
                        <Nav.Link className="navbar_nav-link dropdown-toggle aradhna_navbarfont" href="/#categories">Compare Courses

                            </Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                          </NavDropdown> */}
                        </li>
                        
                        <li className="navbar_nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                            <Nav.Link className="navbar_nav-link dropdown-toggle aradhna_navbarfont" href="#" onClick={this.setNavClose}>Login
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