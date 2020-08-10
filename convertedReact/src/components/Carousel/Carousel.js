import React , {Component} from 'react';


import './Carousel.css';
import './custom.css';
class Carousel extends Component{
    componentDidMount () {
        const script = document.createElement("script");
        
        script.src = "custom.js";
        
        script.async = true;
    
        document.body.appendChild(script);
    }

    render() {
      return(
    <div>
        <div id="preloader">
		<div class="loader-container">
			<div class="progress-br float shadow">
				<div class="progress__item"></div>
			</div>
		</div>
	</div>
	
	
	<div id="carouselExampleControls" class="carousel slide bs-slider box-slider" data-ride="carousel" data-pause="hover" data-interval="false" >
		
        
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
         </ol>
		<div class="carousel-inner" role="listbox">
			<div class="carousel-item active">
				<div id="home" class="first-section" style="background-image:url('images/bg.png');">
					<div class="dtab">
						<div class="container">
							<div class="row">
								<div class="col-md-12 col-sm-12 text-right">
									<div class="big-tagline">
										<div class="card-group">
                      <div class="card">
                        <img src="images/Course-Suggesion-1.jpg" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, earum?</p>
                        </div>
                        <div class="card-footer">
                          <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                      </div>
                      <div class="card">
                        <img src="images/Course-Suggesion-1.jpg" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quaerat.</p>
                        </div>
                        <div class="card-footer">
                          <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                      </div>
                      <div class="card">
                        <img src="images/Course-Suggesion-1.jpg" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aspernatur.</p>
                        </div>
                        <div class="card-footer">
                          <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                      </div>
                    </div>
									</div>
								</div>
							</div>           
						</div>
					</div>
				</div>
			</div>



            


			<div class="carousel-item">
				<div id="home" class="first-section" style="background-image:url('images/bg.png');">
					<div class="dtab">
						<div class="container">
							<div class="row">
								<div class="col-md-12 col-sm-12 text-center">
									<div class="big-tagline">
										<div class="card-group">
                      <div class="card">
                        <img src="images/Course-Suggesion-1.jpg" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, repellendus.</p>
                        </div>
                        <div class="card-footer">
                          <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                      </div>
                      <div class="card">
                        <img src="images/Course-Suggesion-1.jpg" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident blanditiis necessitatibus fuga in.</p>
                        </div>
                        <div class="card-footer">
                          <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                      </div>
                      <div class="card">
                        <img src="images/Course-Suggesion-1.jpg" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam eos voluptates quisquam?</p>
                        </div>
                        <div class="card-footer">
                          <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                      </div>
                    </div>
									</div>
								</div>
							</div>           
						</div>
					</div>
				</div>
			</div>
			
			<a class="new-effect carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
				<span class="fa fa-angle-left" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			</a>

		
			<a class="new-effect carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
				<span class="fa fa-angle-right" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</a>
		</div>
	</div>
	

    

    <div class="copyrights">
        <div class="container">
            <div class="footer-distributed">
                <div class="footer-center">                   
                    <p class="footer-company-name">All Rights Reserved. &copy; 2020 <a href="#">thisCourse</a> Design By : <a href="https://github.com/imshashikantdev">Shashikant</a></p>
                </div>
            </div>
        </div>
    </div>

    <a href="#" id="scroll-to-top" class="dmtop global-radius"><i class="fa fa-angle-up"></i></a>
        
    </div> 
          
          
        );
    }
  }
 

export default Carousel;
