import React , {Component} from 'react';


import './style.css';
class Roadmap extends Component{
    

    render() {
      return(
    <div>
        <div className="crayons-layout__content grid col-sm-12 col-md-12 col-lg-4 col-xl-4">     
        <div className="more-articles crayons-card crayons-card--secondary">
  <h1 className="fs-4xl fw-bold mb-4">
    Read Next
  </h1>
    <a href="#" >
      <div className="single-other-article">
        <div className="picture">
          <img width="100" height="100" src="1.jpg"></img>
        </div><div className="content">
          <h3 className="fs-2xl fw-bold mb-0">Understanding Non-Relational (NoSQL) Databases (Part 1)</h3>
          <h4 className="fs-base">
            Nyasha (Nash) Nziramasanga - <time datetime="2020-07-17T06:11:03Z" title="Friday, 17 July, 2020, 11:41:03 am">Jul 17</time>
          </h4>
        </div>
      </div>
    </a>
    <a href="#">
      <div className="single-other-article">
        <div className="picture">
          <img width="100" height="100" src="2.jpg"></img>
        </div><div className="content">
          <h3 className="fs-2xl fw-bold mb-0">How to Build an Alexa Skill using Python</h3>
          <h4 className="fs-base">
            Trilochan Parida - <time datetime="2020-07-17T04:31:51Z" title="Friday, 17 July, 2020, 10:01:51 am">Jul 17</time>
          </h4>
        </div>
      </div>
    </a>
    <a href="#">
    <div className="single-other-article">
        <div className="picture">
          <img width="100" height="100" src="3.jpg"></img>
        </div><div className="content">
          <h3 className="fs-2xl fw-bold mb-0">Running DPDK Forwarding Applications with Pktgen-DPDK</h3>
          <h4 className="fs-base">
            Mishal Shah - <time datetime="2020-07-16T19:09:05Z" title="Friday, 17 July, 2020, 12:39:05 am">Jul 16</time>
          </h4>
        </div>
      </div>
    </a>
    <a href="#">
      <div className="single-other-article">
        <div className="picture">
          <img width="100" height="100"  src="4.jpg">
          </img>    
        </div><div className="content">
          <h3 className="fs-2xl fw-bold mb-0">Creating a custom name for a foreign key</h3>
          <h4 className="fs-base">
            Joe Avila - <time datetime="2020-07-16T18:41:25Z" title="Friday, 17 July, 2020, 12:11:25 am">Jul 16</time>
          </h4>
        </div>
      </div>
    </a>
</div>
</div>
        
    </div> 
          
          
        );
    }
  }
 

export default Roadmap;
