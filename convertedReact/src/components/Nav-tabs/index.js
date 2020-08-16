import React, {Component} from "react";
import ReactDOM from 'react-dom';

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import RoadmapCard from '../roadmap-card/Roadmap_Card';
import "./index.css";


class Navtabs extends React.Component {



    load = () => {
    };

    componentDidMount = () => {
        this.load();
      };

    render() {
        return <div className="container col-12">
        
                <br/>
                <br/>
            <div className="topnav" id="myTopnav">
                {/* <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    </button>
                </div> */}
                {/* <div className="collapse navbar-collapse" id="myNavbar" > */}

                    <Tabs defaultActiveKey="home" className="nav nav-pills navtabs_indi" >

                        <Tab className="" eventKey="home" title="home">
                        
                            <h3>HOME HERE</h3>
                            <RoadmapCard />
                            <RoadmapCard />
                            <RoadmapCard />
                       
                        </Tab>
                        <Tab eventKey="menu1" title="All">
                            <h3>Menu 1</h3>
                            <RoadmapCard />
                            <RoadmapCard />
                            <RoadmapCard />
                        </Tab>
                        <Tab eventKey="menu2" title="Branding">
                            <h3>Menu 3</h3>
                        </Tab>
                        <Tab eventKey="menu3" title="Animation">
                            <h3>Menu 4</h3>
                        </Tab>
                        <Tab eventKey="menu4" title="Mobile">

                        </Tab>
                        <Tab eventKey="menu5" title="Print">

                        </Tab>
                        <Tab eventKey="menu6" title="Product Design">

                        </Tab>
                        <Tab eventKey="menu7" title="Typography">

                        </Tab>
                        <Tab eventKey="menu8" title="Web Design">
                            
                        </Tab>
                        
                    </Tabs>


                {/* </div> */}
            </div>
            {/* <div className="tab-content">
                <div id="home" className="tab-pane fade in active">
                <h3>HOME HERE</h3>
                <RoadmapCard />
                <RoadmapCard />
                <RoadmapCard />
                </div>
                <div id="menu1" className="tab-pane fade">
                <h3>Menu 1</h3>
                <RoadmapCard />
                <RoadmapCard />
                <RoadmapCard />
                </div>
                <div id="menu2" className="tab-pane fade">
                <h3>Menu 2</h3>
                </div>
                <div id="menu3" className="tab-pane fade">
                <h3>Menu 3</h3>
                </div>
            </div> */}
            </div>
       
      
       
    }
}

export default Navtabs;