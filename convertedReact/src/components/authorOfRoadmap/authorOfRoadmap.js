import React, {Component} from "react"
import "./authorOfRoadmap.css";

class AuthorOfRoadmap extends Component {
    constructor(props)
    {
        super(props);
        console.log(this.props);
    }
    render() {
        return (
            <div className="authorroadmap container col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <div className="customstyle_author">
                <div className="cover-photo"><br/>
                    <img
                        src={this.props.data.ImageofAuthor?`${this.props.data.ImageofAuthor}`:"https://img.icons8.com/fluent/48/000000/user-male.png"}
                        className="profile"></img>
                </div>
                <div className="profile-name">
                    <strong>{this.props.data.NameofAuthor}</strong>
                </div>
                <p className="about-profile">
                    {this.props.data.DescofAuthor?this.props.data.DescofAuthor:""}
                </p>
                {/* <button className="follownow-btn">Follow</button> */}
                {/* <div className="col-sm-4 col-md-4  col-lg-3 item social">
                                <a href="#" className="fb-col">
                                    
                                    <ion-icon name="logo-facebook" className="icon" style={{fontSize:"42px"}}></ion-icon>
                                </a>
                                <a href="#"className="tw-col">
                                    
                                    <ion-icon name="logo-twitter" className="icon" style={{fontSize:"35px"}}></ion-icon>
                                </a>
                                <a href="#" className="lin-col">
                                    
                                    <ion-icon name="logo-linkedin" className="icon" style={{fontSize:"35px"}}></ion-icon>
                                </a><a href="#" className="ins-col">
                                   
                                    <ion-icon name="logo-instagram" className="icon" style={{fontSize:"35px"}}></ion-icon>
                                </a>
                              
                    </div> */}
    
                    {this.props.data.WorkofAuthor?
                    <span>
                    <p className="heading">WORK</p>
                    <p className="answer">{this.props.data.WorkofAuthor}</p>
                    </span>
                    :""
                    }
                    {this.props.data.DatePublished?
                    <span>
                    <p className="heading">JOINED</p>
                <p className="answer">{this.props.data.DatePublished}</p>
                    </span>
                    :
                    ""
                    }
                
                <br /></div></div>
        );
    }
}

export default AuthorOfRoadmap;