import React, {Component} from "react";
import "./about_section.css";

class aboutSection extends Component {
    render() {
        return (
            <div className="bg">
                <div>
                    <div id="text">
                        <h1>ThisCourse</h1>
                        <p className="tag">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
                            <br/>
                            Share It!
                            <a href="#" Name="fa fa-linkedin"></a>
                            <a href="#" className="fa fa-twitter"></a>
                            <a href="#" className="fa fa-facebook"></a>
                            <a href="#" className="fa fa-reddit"></a>
                        </p>
                    </div>

                    <div className="rule">
                        <hr/>
                    </div>

                    {/* <div className="bottom">
                        <ul>
                            <li className="a">A</li>
                            <li>B</li>
                            <li>C</li>
                            <li>D</li>
                            <li>E</li>
                            <li>F</li>
                            <li>G</li>
                            <li>H</li>
                            <li>I</li>
                            <li>J</li>
                            <li>K</li>
                            <li>L</li>
                            <li>M</li>
                            <li>N</li>
                            <li>O</li>
                            <li>P</li>
                            <li>Q</li>
                            <li>R</li>
                            <li>S</li>
                            <li>T</li>
                            <li>U</li>
                            <li>W</li>
                            <li>X</li>
                            <li>Y</li>
                            <li>Z</li>
                        </ul>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default aboutSection;