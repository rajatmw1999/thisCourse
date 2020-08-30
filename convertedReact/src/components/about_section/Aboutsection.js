import React, {Component} from "react";
import ReactDOM from 'react-dom';
import "./about_section.css";

class Aboutsection extends React.Component {
    render() {
        return (
            <div className="bg">
                <div className="container col-12 col-md-10">
                    <div id="text">
                        <h1 className="about_h1">ThisCourse</h1>
                        <p className="tag">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
                            <br/>
                            Share It!
                            <a href="#" className="fa custom_about fa-linkedin"></a>
                            <a href="#" className="fa custom_about fa-twitter"></a>
                            <a href="#" className="fa custom_about fa-facebook"></a>
                            <a href="#" className="fa custom_about fa-reddit"></a>
                        </p>
                    </div>

                    <div className="rule">
                        <hr/>
                    </div>

                    {/* <div className="bottom">
                        <ul>
                            <li className="alpha">A</li>
                            <li className="alpha">B</li>
                            <li className="alpha">C</li>
                            <li className="alpha">D</li>
                            <li className="alpha">E</li>
                            <li className="alpha">F</li>
                            <li className="alpha">H</li>
                            <li className="alpha">I</li>
                            <li className="alpha">J</li>
                            <li className="alpha">G</li>
                            <li className="alpha">K</li>
                            <li className="alpha">L</li>
                            <li className="alpha">M</li>
                            <li className="alpha">N</li>
                            <li className="alpha">O</li>
                            <li className="alpha">P</li>
                            <li className="alpha">Q</li>
                            <li className="alpha">R</li>
                            <li className="alpha">S</li>
                            <li className="alpha">T</li>
                            <li className="alpha">U</li>
                            <li className="alpha">W</li>
                            <li className="alpha">X</li>
                            <li className="alpha">Y</li>
                            <li className="alpha">Z</li>
                        </ul>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default Aboutsection;