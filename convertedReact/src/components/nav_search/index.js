import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class navsearch extends React.Component {
    
    
    render() {
      return <div class="navigation-wrap bg-light start-header start-style">
      <div class="container">
          <div class="row">
              <div class="col-12">
                  <nav class="navbar navbar-expand-md navbar-light">

                      <a class="navbar-brand" href="#" target="_blank">ThisCourse</a>

                      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                      </button>
                      
                      <div class="collapse navbar-collapse" id="navbarSupportedContent">
                          <div class="main">
                        <div class="form-group has-search">
                            <span class="fa fa-search form-control-feedback"></span>
                            <input type="text" class="form-control" placeholder="Search" />
                        </div>
                      </div>
        
                        <ul class="navbar-nav ml-auto py-4 pt-5 py-md-0">
                              <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                                  <a class="nav-link dropdown-toggle" href="#" role="button" aria-haspopup="true" aria-expanded="false">Home</a>

                              </li>
                              <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                  <a class="nav-link" href="#">Page 1</a>
                              </li>
                              <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                  <a class="nav-link" href="#">Page 2</a>
                              </li>

                              <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                  <a class="nav-link" href="#">Signup</a>
                              </li>
                              <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                  <a class="nav-link" href="#">Login</a>
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
  
  export default navsearch;