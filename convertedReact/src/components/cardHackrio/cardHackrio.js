import React,{Component} from "react";
import "./cardHackrio.css";
import ScriptTag from 'react-script-tag';
import {skillsData} from '../../data/skills'
import {categoryData} from '../../data/category'
class CardHackrio extends Component{
    constructor(props) {
        super(props);
        console.log(this.props.category);
        this.handleChangeSearch = this.handleChangeSearch.bind(this);
        var skills = [];
        let categoryName=this.props.category;
        var categoriesTabs = [];
        skillsData.forEach(function(data){
            var afterSplit = data.category.split('-')[0];
            
             if(afterSplit == categoryName)
             {
                skills.push(data.skills);
                if(data.category.split('-')[1])
                    categoriesTabs.push(data.category.split('-')[1]);
             }
            // console.log(data.category);
        });
        // console.log(skills);
        console.log(categoriesTabs);
        var one = [];
        skills.forEach(function(skillDataOne){
            skillDataOne.forEach(function(final){
                one.push(final);
            });
            
        }); 
        console.log(one);
        const ret = one.map((data) =>  
        <a href={`${data.redirectLink}`} target="_blank" className="topic-grid-item js-topic-grid-item">
            <img className="topic-thumbnail" alt="Python Tutorials and Courses" src={`${data.imageUrl}`} />
            <p className="js-topic">{data.displayName}</p>
        </a>
        )
        const categoryPath =  categoryData.map((data) =>  
        <li class="nav-item">
             <a 
             onClick={() => this.handleCategoryChange(data.redirectLink)} 
             class="nav-link akruti-a" id="home-tab" data-toggle="tab" href="#" role="tab"
            aria-controls="home" aria-selected="true">{data.displayName}</a>
        </li>
        ) 
        this.state={
            allSkills:ret,
            dataToDisplay:ret,
            search:null,
            items:one,
            navTabs:categoryPath
        }
      }

      async handleChangeSearch(e){
        var searchQuery = e.target.value;
        console.log(searchQuery);
        if(!searchQuery)
            {
                var display = this.state.items.map((data)=>
                <a href={`${data.redirectLink}`} className="topic-grid-item js-topic-grid-item">
                <img className="topic-thumbnail" alt="Python Tutorials and Courses" src={`${data.imageUrl}`} />
                <p className="js-topic">{data.displayName}</p>
            </a>
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
            let categoryStr = await elm.displayName.toLowerCase();
            const regex = /%20/gi;
            // const regex= /searchQuery/;
            // categoryStr = await categoryStr.replace(regex, " ");
            
            // if (categoryStr === searchQuery.toLowerCase()) {
            if(categoryStr.includes(searchQuery))  
            arr.push(elm);
            // }
          }
          var display = arr.map((data)=>
          <a href={`${data.redirectLink}`} className="topic-grid-item js-topic-grid-item">
                <img className="topic-thumbnail" alt="Python Tutorials and Courses" src={`${data.imageUrl}`} />
                <p className="js-topic">{data.displayName}</p>
            </a>
        );
      this.setState({
          dataToDisplay:display
      });
    }
  
    }

    // async componentDidMount(){
    //     const categoryPath = await categoryData.map((data) =>  
    //     <li class="nav-item">
    //          <a 
    //         //  onClick={() => this.handleCategoryChange(data.redirectLink)} 
    //          class="nav-link active akruti-a" id="home-tab" data-toggle="tab" href="#" role="tab"
    //         aria-controls="home" aria-selected="true">{data.displayName}</a>
    //     </li>
    //     )
    //     this.setState({navTabs:categoryPath});
    //     console.log(this.state.navTabs);
    // }

    async handleCategoryChange(link){
        var skills = [];
        skillsData.forEach(async(data) => {
            var afterSplit = data.redirectLink;
            
             if(afterSplit == link.split('-')[0])
             {
                skills.push(data.skills);
                // if(data.category.split('-')[1])
                //     categoriesTabs.push(data.category.split('-')[1]);
             }
            // console.log(data.category);
        });


        // console.log(link);
        var one = [];
        skills.forEach(async(skillDataOne) => {
             skillDataOne.forEach(function(final){
                //  console.log(final);
                one.push(final);
            });
        }); 
        console.log(one);
        const ret = one.map((data) =>  
        <a href={`${data.redirectLink}`} target="_blank" className="topic-grid-item js-topic-grid-item">
            <img className="topic-thumbnail" alt="Python Tutorials and Courses" src={`${data.imageUrl}`} />
            <p className="js-topic">{data.displayName}</p>
        </a>
        )
        this.setState({
            allSkills:ret,
            dataToDisplay:ret,
            items:one
        });
    }

    render(){
        return(
            <div className="b ">
                <div className="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="course_nav">
                        <nav>
                            <ul class="nav" id="myTab" role="tablist">
                                {this.state.navTabs}
                                 {/* <li class="nav-item">
                                    <a class="nav-link active akruti-a" id="home-tab" data-toggle="tab" href="#home" role="tab"
                                        aria-controls="home" aria-selected="true">All Courses</a>
                                </li> */}
                                {/*<li class="nav-item">
                                    <a class="nav-link akruti-a" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                                        aria-controls="profile" aria-selected="false">Photoshop</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link akruti-a" id="contact-tab" data-toggle="tab" href="#contact" role="tab"
                                        aria-controls="contact" aria-selected="false">UI/UX</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link akruti-a" id="design-tab" data-toggle="tab" href="#design" role="tab"
                                        aria-controls="design" aria-selected="false">Web Design</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link akruti-a" id="Web-tab" data-toggle="tab" href="#Web" role="tab"
                                        aria-controls="design" aria-selected="false">Web dev</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link akruti-a" id="Web-tab1" data-toggle="tab" href="#Web1" role="tab"
                                        aria-controls="design" aria-selected="false">Wordpress</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link akruti-a" id="Web-tab11" data-toggle="tab" href="#Web11" role="tab"
                                        aria-controls="design" aria-selected="false">Adobe XD</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link akruti-a" id="Adobe-XD-tab8" data-toggle="tab" href="#Adobe-XD8" role="tab"
                                        aria-controls="design" aria-selected="false">Sketch App</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link akruti-a" id="Adobe-XD-tab9" data-toggle="tab" href="#Adobe-XD9" role="tab"
                                        aria-controls="design" aria-selected="false">Illustrator</a>
                                </li> */}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            </div>
                <ScriptTag type="text/javascript" src="./index.js" />
            <div className="home--hero-header hero--header-new">
                <div className="container">
                    <div className="">
            <div className="row">
                <div className="col-xs-12 text-center hero-header-container" style={{width: "100%"}}>
                    <div className="desktop-search-bar search-bar">
                        <div className="form-holder">
                            <div className="navbarSearch">
                                <input onChange={this.handleChangeSearch} id="myInput" onkeyup="myFunction()" className="form-control navbar-search-input js-navbar-search-input nav-input js-filter-topics" type="text" placeholder="Search for the skill you want to learn: " />
                            </div>
                            
                            <img className="card-hackrioicon color-filter" src="https://hackr.io/assets/images/header-icons/search-header.svg" width="17" height="17" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
       
        <div className="page--section paddingtop-sm marginbottom-lg margintop-md">
            <div className="container">
                <div className="">
                <div className="row">
                    <div className="col-xs-12 no-paddingright-desktop">
                        <div className="page--body">
                            <div id="courses"  className="flex-grid hackr--flex-grid home--flex-grid js-topics-list">
                                
                                {this.state.dataToDisplay?this.state.dataToDisplay:""}
                                
                                {this.state.dataToDisplay? <a href="" className="topic-grid-item js-topic-grid-item">
                <img className="topic-thumbnail" alt="Python Tutorials and Courses" src="https://img.icons8.com/cute-clipart/64/000000/hot-article.png" />
                <p className="js-topic">Check Roadmaps</p>
            </a>:""}
            {this.state.dataToDisplay?<a href="" className="topic-grid-item js-topic-grid-item">
                <img className="topic-thumbnail" alt="Python Tutorials and Courses" src="https://img.icons8.com/cute-clipart/64/000000/hot-article.png" />
                <p className="js-topic">Check More Categories</p>
            </a>:""}
            {this.state.dataToDisplay?<a href="" className="topic-grid-item js-topic-grid-item">
                <img className="topic-thumbnail" alt="Python Tutorials and Courses" src="https://img.icons8.com/cute-clipart/64/000000/hot-article.png" />
                <p className="js-topic">Check Discounted Courses</p>
            </a>:""}               
                              
                            </div>
                            <div id="no_topics_found" className="col-md-12 text-center hidden marginbottom-sm">
                                <span className="no-results"><em>Sorry, no results found!</em></span>
                                <p className="text-center margintop-md">We are a community-driven website. Please feel free to submit the courses/tutorials that you would want to recommend to the community.</p>
                            </div>
                        </div>

                    </div>
                    
                </div>
                
            </div>
            </div>
        </div>
            
        </div>

            </div>
        );
    }
}

export default CardHackrio;