import React, {Component} from "react";
import "./BreadCrumb.css";

class BreadCrumb extends Component {
    render() {
        return (
            <div className="breadcrumb">
                <a href="#">
                    <span>Art & Design</span>
                </a>
                <span>|</span>
                <a href="#">
                    <span>Marketing</span>
                </a>
                <span>|</span>
                <a href="#">
                    <span>Personal Development</span>
                </a>
                <span>|</span>
                <a href="#">
                    <span>Computer Science</span>
                </a>
                <span>></span>
                <span>Adobe Premiere Pro</span>
            </div>
        );
    }
}

export default BreadCrumb;