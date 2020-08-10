import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Footer extends React.Component {
    
    
    render() {
      return <div className="footer-clean">
                <footer>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-4 col-md-3 item">
                                <h3>Categories</h3>
                                <ul>
                                    <li><a href="#">Web Development</a></li>
                                    <li><a href="#">Networking</a></li>
                                    <li><a href="#">Cloud Computing</a></li>
                                    <li><a href="#">Data Science</a></li>
                                    <li><a href="#">Data Structures</a></li>
                                    <li><a href="#">Algorithms</a></li>
                                    <li><a href="#">App Development</a></li>
                                    <li><a href="#">Ethical Hacking</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-4 col-md-3 item">
                                <h3>Providers</h3>
                                <ul>
                                    <li><a href="#">Freecodecamp.org</a></li>
                                    <li><a href="#">Linkedin Learning</a></li>
                                    <li><a href="#">NetAcad.com</a></li>
                                    <li><a href="#">Coursera</a></li>
                                    <li><a href="#">Udemy</a></li>
                                    <li><a href="#">Edx</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-4 col-md-3 item">
                                <h3>ThisCourse</h3>
                                <ul>
                                    <li><a href="#">Roadmaps</a></li>
                                    <li><a href="#">Newsletter</a></li>
                                    <li><a href="#"></a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 item social"><a href="#" className="fb-col"><i className="icon ion-social-facebook"></i></a><a href="#"className="tw-col"><i className="icon ion-social-twitter"></i></a>
                                <a href="#" className="lin-col"><i className="icon ion-social-linkedin"></i></a><a href="#" className="ins-col"><i className="icon ion-social-instagram"></i></a>
                                <p className="copyright">ThisCourse © 2020</p>
                                <p className="copyright">Terms &amp; Conditions</p>
                                <p className="copyright">Privacy Policy</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>;
     
  }
  }
  
  export default Footer;