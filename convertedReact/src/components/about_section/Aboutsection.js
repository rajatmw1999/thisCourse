import React, {Component} from "react";
import ReactDOM from 'react-dom';
import "./about_section.css";
import image from '../../data/about_section.jpg'

const copyToClipboard = async str => {
    console.log(str);
    const el = await document.createElement('textarea');
    el.value = await window.location.href;
    document.body.appendChild(el);
    el.select();
    await document.execCommand('copy');
    document.body.removeChild(el);
    // window.alert("Copied Text!");
    // setInterval(function(){
        var url = "https://" + str + ".com";
        window.open(url, '_blank');
    // }, 500)
  };

class Aboutsection extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <div className="bg">
                <div className="container col-12 col-md-10">
                    <div id="text">
                        <h1 className="about_h1">{this.props.displayName}</h1>
                        <p className="tag">Best market place for best online and offline courses,<br/>
                            and community for guides and roadmaps! Skill Up with the Unga Factor!<br/>
                            <br/>
                            Share It! 
                            <a href="#" onClick={() => copyToClipboard("linkedin")} className="fa custom_about fa-linkedin"></a>
                            <a href="#" onClick={() => copyToClipboard("twitter")} className="fa custom_about fa-twitter"></a>
                            <a href="#" onClick={() => copyToClipboard("facebook")} className="fa custom_about fa-facebook"></a>
                            <a href="#" onClick={() => copyToClipboard("reddit")} className="fa custom_about fa-reddit"></a>
                            (click to copy)
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