import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Navsearch extends React.Component {
    
    
    render() {
      return <div className="navigation-wrap bg-light start-header start-style">
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <nav className="navbar navbar-expand-md navbar-light">

                      <a className="navbar-brand" href="#" target="_blank">ThisCourse</a>

                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <div className="main">
                        <div className="form-group has-search">
                            {/* <span className="fa fa-search form-control-feedback"></span> */}
                            <input type="text" className="form-control" placeholder="Search" />
                        </div>
                      </div>
        
                        <ul className="navbar-nav ml-auto py-4 pt-5 py-md-0">
                              <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                                  <a className="nav-link dropdown-toggle" href="#" role="button" aria-haspopup="true" aria-expanded="false">Home</a>

                              </li>
                              <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                  <a className="nav-link" href="#">Page 1</a>
                              </li>
                              <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                  <a className="nav-link" href="#">Page 2</a>
                              </li>

                              <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                  <a className="nav-link" href="#">Signup</a>
                              </li>
                              <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                  <a className="nav-link" href="#">Login</a>
                              </li>
                          </ul>
                      </div>

                  </nav>
              </div>
          </div>
      </div>
  </div>;
     
  }
  }
  
  export default Navsearch;