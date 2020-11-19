import React, {Component} from "react";
import ReactDOM from 'react-dom';
import '../cardHackrio/cardHackrio.css'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabPane from 'react-bootstrap/TabPane'
import RoadmapCard from '../roadmap-card/Roadmap_Card';
import "./index.css";
import roadmapCategory from '../../data/roadmapCategory';
import {domain} from '../../data/hosted'
import Roadmap from "../read-more-roadmap/Roadmap";
import renderHtml from 'react-render-html'
class Navtabs extends React.Component {

    constructor(props){
        super(props);
        console.log(this.props);
        this.state={
            loaded:false,
            error:null,
            dataToDisplay:null,
            items:null,
            display:"Loading",
            category:"",
            search:""
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeSearch = this.handleChangeSearch.bind(this);
        this.goToRoadmap  = this.goToRoadmap.bind(this);
        // this.wrapper = React.createRef();
    }
    
    load = () => {
    };

    async handleChangeSearch(e){
        var searchQuery = e.target.value;
        console.log(searchQuery);
        if(!searchQuery)
            {
                var display = this.state.items.map((data)=>
          <RoadmapCard onClick={() => this.goToRoadmap(data._id)} Id={data._id} name={data.NameOfRoadmap} author={data.NameofAuthor} image={data.ImageLink} likes={data.Likes} text={data.Text}/>
        );
      this.setState({
          dataToDisplay:display
      });  
            }
            else{
        // console.log(e);
        var arr=[];
        this.setState({search:searchQuery});
        for (let elm of this.state.items) {
            console.log(elm);
            let categoryStr = await elm.NameOfRoadmap.toLowerCase();
            const regex = /%20/gi;
            // const regex= /searchQuery/;
            // categoryStr = await categoryStr.replace(regex, " ");
            
            // if (categoryStr === searchQuery.toLowerCase()) {
            if(categoryStr.includes(searchQuery))  
            arr.push(elm);
            // }
          }
          var display = arr.map((data)=>
          <RoadmapCard onClick={() => this.goToRoadmap(data._id)}  Id={data._id} name={data.NameOfRoadmap} author={data.NameofAuthor} image={data.ImageLink} likes={data.Likes} text={data.Text}/>
        );
      this.setState({
          dataToDisplay:display
      });
    }
    }

    async handleClick  (param){
        console.log(param);
        var fetchSkills = await domain + "roadmap/category/" + param.toLowerCase();
        console.log(fetchSkills);
       var dataFetch;
       await fetch(`${fetchSkills}`)
          .then(res => res.json())
          .then(
            (result) => {
            console.log(result);
            dataFetch =  result;
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                loaded: true,
                error
              });
            }
          )
      
            var display = dataFetch.map((data)=>
            <RoadmapCard onClick={() => this.goToRoadmap(data._id)} Id={data._id} name={data.NameOfRoadmap} author={data.NameofAuthor} image={data.ImageLink} likes={data.Likes} text={data.Text}/>
             );
           this.setState({
               items:dataFetch,
               dataToDisplay:display,
               category:param
           });
      
        
    }
    async goToRoadmap(id){
        console.log(id);
        window.location = '/roadmap/' + id;
    }
    async componentDidMount  ()  {
        this.load();
        

        var fetchSkills = domain + "roadmap/category/" + roadmapCategory[0].displayName.toLowerCase();
        console.log(fetchSkills);
       
        await fetch(`${fetchSkills}`)
          .then(res => res.json())
          .then(
            (result) => {
            console.log(result);
            this.setState({
                items:result,
                category: roadmapCategory[0].displayName
            })
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                loaded: true,
                error
              });
            }
          )
            if(this.state.items){
         var display = this.state.items.map((data)=>
          <RoadmapCard onClick={() => this.goToRoadmap(data._id)}Id={data._id}   name={data.NameOfRoadmap} author={data.NameofAuthor} image={data.ImageLink} likes={data.Likes} text={data.Text}/>
          );
        this.setState({
            dataToDisplay:display
        });
    }     
        //   var displayNavTabs = roadmapCategory.map((data) => 
        //     <li class="nav-item rajat_navtabs_buttonmargin" onClick={() => this.handleClick(data.displayName)}>
        //         <a class="nav-link active btn btn-light btn-xs">{data.displayName}</a>
        //     </li>
        //   );
        var displayNavTabs = roadmapCategory.map((data) => 
        <li class="nav-item">
        <a 
        onClick={() => this.handleClick(data.displayName)} 
        class="nav-link akruti-a" id="home-tab" data-toggle="tab" href="#" role="tab"
       aria-controls="home" aria-selected="true">{data.displayName}</a>
        </li>
        );
    this.setState({display:displayNavTabs});
      };

    render() {
        return <div className="">
        
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
                <div className="container">
                    <div className="">
            <div className="row">
                <div className="col-xs-12 text-center hero-header-container" style={{width: "100%"}}>
                    <div className="desktop-search-bar search-bar">
                        <div className="form-holder">
                            <div className="navbarSearch">
                                <input onChange={this.handleChangeSearch} id="myInput" onkeyup="myFunction()" className="form-control navbar-search-input js-navbar-search-input nav-input js-filter-topics" type="text" placeholder="Search for the roadmaps: " />
                            </div>
                            <img className="card-hackrioicon color-filter" src="https://hackr.io/assets/images/header-icons/search-header.svg" width="17" height="17" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <br />
                    {/* <TabPane  defaultActiveKey="home" className="nav nav-pills navtabs_indi" >
                        {this.state.display}
                        <Tab eventKey="home" title="home">

                            <h3>{this.props.title}</h3>
                            <RoadmapCard />
                            <RoadmapCard />
                            <RoadmapCard />
                       
                        </Tab>
                       <a href="#menu1"> <Tab eventKey="menu1" title="All" onClick={this.onClick}>
                            <h3>Menu 1</h3>
                            <RoadmapCard />
                            <RoadmapCard />
                            <RoadmapCard />
                        </Tab>
                        </a>
                        <Tab eventKey="menu2" title="Branding">
                            <h3>Menu 3</h3>
                        </Tab>
                        <Tab eventKey="menu3" title="Animation">
                            <h3>Menu 4</h3>
                        </Tab>
                        <Tab eventKey="menu4" title="Mobile">
                            <h3>Menu 5</h3>
                        </Tab>
                        <Tab eventKey="menu5" title="Print">

                        </Tab>
                        <Tab eventKey="menu6" title="Product Design">

                        </Tab>
                        <Tab eventKey="menu7" title="Typography">

                        </Tab>
                        <Tab eventKey="menu8" title="Web Design">
                            
                        </Tab>

                      
                           
                    </TabPane> */}
                    {/* <div className="rajat_navtabs_center">
                        
                        <ul class="nav">
                        {this.state.display}
                        </ul>
                    </div> */}
                    
                      <div class="col-xl-12">
                    <div class="course_nav">
                        <nav>
                        <div className="container">
                            <ul class="nav" id="myTab" role="tablist">
                                {this.state.display}
                            </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                </div>
            
                    <br />
                    <div className="rajat_navtabs_center">
                        
                    <h3>{this.state.category}</h3>
                    </div>
                            <div class="row">
              
                    
                {/* </div> */}
                
            </div>
            <br />
            {this.state.dataToDisplay ? this.state.dataToDisplay : 
            <div>
            <div className="rajat_loading_loader_animation">
              </div>
              <h1>Loading....</h1>
          </div>}
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