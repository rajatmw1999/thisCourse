import React , {Component} from 'react';


import './quizc.css';
class Quiz2 extends Component{
    componentDidMount () {
        const script = document.createElement("script");
    
        script.src = "q.js";
        script.async = true;
    
        document.body.appendChild(script);
    }

    render() {
      return(
    <div>
        <form method="get" action="submit.html">
	
	<div className="container">
		<div>
			<div className="ques">
				<p>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
			</div>
			<div className="triangle-down"></div>
			<div className="vl"></div>
			<div className="row">
				<div className="col-4 card ques1 " role="button">
					<div className="card-body">
					<span className="badge A">A</span>
					<span>Lorem</span>
					</div>
				</div>
				<div className="hl"></div>
				<div className="col-4 card ques1" role="button">
					<div className="card-body">
					<span className="badge B">B</span>
					<span>ipsum</span>
					</div>
				</div>
			</div>
			<div className="vl"></div>
			<div className="row">
				<div className="col-4 card ques1" role="button">
					<div className="card-body">
					<span className="badge C">C</span>
					<span>sit amet</span>
					</div>
				</div>
				<div className="hl"></div>
				<div className="col-4 card ques1" role="button">
					<div className="card-body">
					<span className="badge D">D</span>
					<span>adipiscing</span>
					</div>
				</div>
			</div>
		</div>
		<hr></hr>
		<div>
			<div className="ques">
				<p>2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
			</div>
			<div className="triangle-down"></div>
			<div className="vl"></div>
			<div className="row">
				<div className="col-4 card ques2" role="button">
					<div className="card-body">
					<span className="badge A">A</span>
					<span>Lorem</span>
					</div>
				</div>
				<div className="hl"></div>
				<div className="col-4 card ques2" role="button">
					<div className="card-body">
					<span className="badge B">B</span>
					<span>ipsum</span>
					</div>
				</div>
			</div>
			<div className="vl"></div>
			<div className="row">
				<div className="col-4 card ques2" role="button">
					<div className="card-body">
					<span className="badge C">C</span>
					<span>sit amet</span>
					</div>
				</div>
				<div className="hl"></div>
				<div className="col-4 card ques2" role="button">
					<div className="card-body">
					<span className="badge D">D</span>
					<span>adipiscing</span>
					</div>
				</div>
			</div>
		</div>
		<hr></hr>
		<div>
			<div className="ques">
				<p>2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
			</div>
			<div className="triangle-down"></div>
			<div className="vl"></div>
			<div className="row">
				<div className="col-4 card ques3" role="button">
					<div className="card-body">
					<span className="badge A">A</span>
					<span>Lorem</span>
					</div>
				</div>
				<div className="hl"></div>
				<div className="col-4 card ques3" role="button">
					<div className="card-body">
					<span className="badge B">B</span>
					<span>ipsum</span>
					</div>
				</div>
			</div>
			<div className="vl"></div>
			<div className="row">
				<div className="col-4 card ques3" role="button">
					<div className="card-body">
					<span className="badge C">C</span>
					<span>sit amet</span>
					</div>
				</div>
				<div className="hl"></div>
				<div className="col-4 card ques3" role="button">
					<div className="card-body">
					<span className="badge D">D</span>
					<span>adipiscing</span>
					</div>
				</div>
			</div>
		</div>
		<hr></hr>
		<button className="btn btn-lg btn-primary">Next</button>
	</div>
	</form>
    </div> 
          
          
        );
    }
  }
 

export default Quiz2;
