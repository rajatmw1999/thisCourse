import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Footer extends React.Component {
    
    
    render() {
      return <div className="footer-clean">
                <footer>
                    <div className="container col-12 col-md-11">
                        <div className="row justify-content-center">
                            <div className="col-sm-4 col-md-3 item col-lg-2">
                                <h3>Categories</h3>
                                <ul>
                                    <li className="aradhna_footerli"><a href="#">Web Development</a></li>
                                    <li className="aradhna_footerli"><a href="#">Networking</a></li>
                                    <li className="aradhna_footerli"><a href="#">Cloud Computing</a></li>
                                    <li className="aradhna_footerli"><a href="#">Data Science</a></li>
                                    <li className="aradhna_footerli"><a href="#">Data Structures</a></li>
                                    <li className="aradhna_footerli"><a href="#">Algorithms</a></li>
                                    <li className="aradhna_footerli"><a href="#">App Development</a></li>
                                    <li className="aradhna_footerli"><a href="#">Ethical Hacking</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-4 col-md-3 item col-lg-2">
                                <h3>Providers</h3>
                                <ul>
                                    <li className="aradhna_footerli"><a href="#">Freecodecamp.org</a></li>
                                    <li className="aradhna_footerli"><a href="#">Linkedin Learning</a></li>
                                    <li className="aradhna_footerli"><a href="#">NetAcad.com</a></li>
                                    <li className="aradhna_footerli"><a href="#">Coursera</a></li>
                                    <li className="aradhna_footerli"><a href="#">Udemy</a></li>
                                    <li className="aradhna_footerli"><a href="#">Edx</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-4 col-md-3 item col-lg-2">
                                <h3>ThisCourse</h3>
                                <ul>
                                    <li className="aradhna_footerli"><a href="#">Roadmaps</a></li>
                                    <li className="aradhna_footerli"><a href="#">Newsletter</a></li>
                                    {/* <li className="aradhna_footerli"><a href="#"></a></li> */}
                                    <li className="aradhna_footerli"><a href="#">Contact Us</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-4 col-md-4  col-lg-3 item social">
                                <a href="#" className="fb-col">
                                    <i className="icon ion-social-facebook"></i>
                                </a>
                                <a href="#"className="tw-col">
                                    <i className="icon ion-social-twitter"></i>
                                </a>
                                <a href="#" className="lin-col">
                                    <i className="icon ion-social-linkedin"></i>
                                </a><a href="#" className="ins-col">
                                    <i className="icon ion-social-instagram"></i>
                                </a>
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