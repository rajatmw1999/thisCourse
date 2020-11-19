import React from 'react'
import './styles.css'
import Footer from '../../components/footer/index'
import rajatpic from './images/rajat.jpg'
import akruti from './images/akruti.jpg'
import aniket from './images/aniket.jpg'
import aradhna from './images/aradhna.jpg'
import niroj from './images/niroj.jpg'
import shashikant from './images/shashikant.JPG'
import shikhar from './images/shikhar.jpg'
import vanshika from './images/vanshika.jpg'
import Navbar from '../../components/Navbar/index'

function OurTeam(){
    return(
<div>
<Navbar />

<div class="vanshika-ot-body">
    
	{/* <div className="rajat-ot-bg"></div>
	<div className="rajat-ot-bg rajat-ot-bg2"></div>
	<div className="rajat-ot-bg rajat-ot-bg3"></div> */}
	<div class="container">
		<h3 class="vanshika-ot-main-heading">Our<span class="vanshika-ot-Team"> Team</span></h3><br/>
		<em><p id="quote1" >"None of us is as smart as all of us."  - Kenneth H. Blanchard</p></em> <p id="rajat-team-quotes">It takes a single man to ideate a thought and a whole crew to turn it into reality.</p> <br />
		<p  id="rajat-team-quotes">So, here's to the amazing minds working behind SkillUnga!</p>
		<div class="row">
			<div class="col-6 col-lg-3 col-sm-4 ">
				<div class="card vanshika-ot-card">
	    			<img src={rajatpic} class="card-img-top vanshika-ot-img" alt="..." />
	    			<div class="card-body">
	    				<h5 class="card-title">Rajat Updhyay</h5>
	    				<p class="card-text vanshika-ot-card-text">Web designer</p>
	    				<a href="https://www.facebook.com"><i class="fab fa-facebook-f  vanshika-ot-social-icons"></i></a>
	    				<a href="https://www.instagram.com"><i class="fab fa-instagram  vanshika-ot-social-icons"></i></a>
	    				<a href="https://www.linkedin.com/in/rajatmw1999"><i class="fab fa-linkedin-in vanshika-ot-social-icons"></i></a>
 	    			</div>
				</div>
			</div>
			<div class="col-6 col-lg-3 col-sm-4 ">
				<div class="card vanshika-ot-card">
	    			<img src={aradhna} class="card-img-top vanshika-ot-img" alt="..." />
	    			<div class="card-body">
	    				<h5 class="card-title">Aradhna Sharma</h5>
	    				<p class="card-text vanshika-ot-card-text">Web designer</p>
	    				<a href="https://www.facebook.com"><i class="fab fa-facebook-f  vanshika-ot-social-icons"></i></a>
	    				<a href="https://www.instagram.com"><i class="fab fa-instagram  vanshika-ot-social-icons"></i></a>
	    				<a href="https://www.linkedin.com/in/aradhna-sharma-b3b1131a5"><i class="fab fa-linkedin-in vanshika-ot-social-icons"></i></a>
 	    			</div>
				</div>
			</div>
			<div class="col-6 col-lg-3 col-sm-4 ">
				<div class="card vanshika-ot-card">
	    			<img src={niroj} class="card-img-top vanshika-ot-img" alt="..." />
	    			<div class="card-body">
	    				<h5 class="card-title">Niroj Deb</h5>
	    				<p class="card-text vanshika-ot-card-text">Web designer</p>
	    				<a href="https://www.facebook.com"><i class="fab fa-facebook-f  vanshika-ot-social-icons"></i></a>
	    				<a href="https://www.instagram.com/_deb_nj_"><i class="fab fa-instagram  vanshika-ot-social-icons"></i></a>
	    				<a href="https://www.linkedin.com"><i class="fab fa-linkedin-in vanshika-ot-social-icons"></i></a>
 	    			</div>
				</div>
			</div>
			<div class="col-6 col-lg-3 col-sm-4 ">
				<div class="card vanshika-ot-card">
	    			<img src={shikhar} class="card-img-top vanshika-ot-img" alt="..." />
	    			<div class="card-body">
	    				<h5 class="card-title">Shikhar Gupta</h5>
	    				<p class="card-text vanshika-ot-card-text">Web designer</p>
	    				<a href="https://www.facebook.com"><i class="fab fa-facebook-f  vanshika-ot-social-icons"></i></a>
	    				<a href="https://www.instagram.com"><i class="fab fa-instagram  vanshika-ot-social-icons"></i></a>
	    				<a href="https://www.linkedin.com/in/shikhar-gupta-a02515172"><i class="fab fa-linkedin-in vanshika-ot-social-icons"></i></a>
 	    			</div>
				</div>
			</div>

			<div class="col-6 col-lg-3 col-sm-4 ">
				<div class="card vanshika-ot-card">
	    			<img src={akruti} class="card-img-top vanshika-ot-img" alt="..." /> 
	    			<div class="card-body">
	    				<h5 class="card-title">Akruti Sinha</h5>
	    				<p class="card-text vanshika-ot-card-text">Web designer</p>
	    				<a href="https://www.facebook.com"><i class="fab fa-facebook-f  vanshika-ot-social-icons"></i></a>
	    				<a href="https://www.instagram.com"><i class="fab fa-instagram  vanshika-ot-social-icons"></i></a>
	    				<a href="https://www.linkedin.com/in/akruti-sinha-10a990194"><i class="fab fa-linkedin-in vanshika-ot-social-icons"></i></a>
 	    			</div>
				</div>
			</div>
			<div class="col-6 col-lg-3 col-sm-4 ">
				<div class="card vanshika-ot-card">
	    			<img src={vanshika} class="card-img-top vanshika-ot-img" alt="..." />
	    			<div class="card-body">
	    				<h5 class="card-title">Vanshika</h5>
	    				<p class="card-text vanshika-ot-card-text">Web designer</p>
	    				<a href="https://www.facebook.com"><i class="fab fa-facebook-f  vanshika-ot-social-icons"></i></a>
	    				<a href="https://www.instagram.com"><i class="fab fa-instagram  vanshika-ot-social-icons"></i></a>
	    				<a href="https://www.linkedin.com/in/vanshika-gahlawat-6b3b331a5"><i class="fab fa-linkedin-in vanshika-ot-social-icons"></i></a>
 	    			</div>
				</div>
			</div>


			<div class="col-6 col-lg-3 col-sm-4 ">
				<div class="card vanshika-ot-card">
	    			<img src={aniket} class="card-img-top vanshika-ot-img" alt="..." />
	    			<div class="card-body">
	    				<h5 class="card-title">Aniket Kumar Sinha</h5>
	    				<p class="card-text vanshika-ot-card-text">Web designer</p>
	    				<a href="https://www.facebook.com"><i class="fab fa-facebook-f  vanshika-ot-social-icons"></i></a>
	    				<a href="https://www.instagram.com"><i class="fab fa-instagram  vanshika-ot-social-icons"></i></a>
	    				<a href="https://www.linkedin.com/in/aniketkumarsinha"><i class="fab fa-linkedin-in vanshika-ot-social-icons"></i></a>
 	    			</div>
				</div>
			</div>
			<div class="col-6 col-lg-3 col-sm-4 ">
				<div class="card vanshika-ot-card">
	    			<img src={shashikant} class="card-img-top vanshika-ot-img" alt="..." />
	    			<div class="card-body">
	    				<h5 class="card-title">Shashikant</h5>
	    				<p class="card-text vanshika-ot-card-text">Web designer</p>
	    				<a href="https://www.facebook.com"><i class="fab fa-facebook-f  vanshika-ot-social-icons"></i></a>
	    				<a href="https://www.instagram.com"><i class="fab fa-instagram  vanshika-ot-social-icons"></i></a>
	    				<a href="https://www.linkedin.com"><i class="fab fa-linkedin-in vanshika-ot-social-icons"></i></a>
 	    			</div>
				</div>
			</div>
			<div class="col-6 col-lg-3 col-sm-4 ">
				<div class="card vanshika-ot-card">
	    			<img src="https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top vanshika-ot-img" alt="..." />
	    			<div class="card-body">
	    				<h5 class="card-title">Tejaswini sharma</h5>
	    				<p class="card-text vanshika-ot-card-text">Web designer</p>
	    				<a href="https://www.facebook.com"><i class="fab fa-facebook-f  vanshika-ot-social-icons"></i></a>
	    				<a href="https://www.instagram.com"><i class="fab fa-instagram  vanshika-ot-social-icons"></i></a>
	    				<a href="http://linkedin.com/in/tejaswini-sharma-72165319a"><i class="fab fa-linkedin-in vanshika-ot-social-icons"></i></a>
 	    			</div>
				</div>
			</div>
			<div class="col-6 col-lg-3 col-sm-4">
				<div class="card vanshika-ot-card">
	    			<img src="https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top vanshika-ot-img" alt="..." />
	    			<div class="card-body">
	    				<h5 class="card-title">Name</h5>
	    				<p class="card-text vanshika-ot-card-text">Web designer</p>
	    				<a href="https://www.facebook.com"><i class="fab fa-facebook-f  vanshika-ot-social-icons"></i></a>
	    				<a href="https://www.instagram.com"><i class="fab fa-instagram  vanshika-ot-social-icons"></i></a>
	    				<a href="https://www.linkedin.com"><i class="fab fa-linkedin-in vanshika-ot-social-icons"></i></a>
 	    			</div>
				</div>
			</div>
			<div class="col-6 col-lg-3 col-sm-4">
				<div class="card vanshika-ot-card">
	    			<img src="https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top vanshika-ot-img" alt="..." />
	    			<div class="card-body">
	    				<h5 class="card-title">Name</h5>
	    				<p class="card-text vanshika-ot-card-text">Web designer</p>
	    				<a href="https://www.facebook.com"><i class="fab fa-facebook-f  vanshika-ot-social-icons"></i></a>
	    				<a href="https://www.instagram.com"><i class="fab fa-instagram  vanshika-ot-social-icons"></i></a>
	    				<a href="https://www.linkedin.com"><i class="fab fa-linkedin-in vanshika-ot-social-icons"></i></a>
 	    			</div>
				</div>
			</div>
		</div>
	</div>
	<br />
<br />
</div>

<Footer />
</div>
    );
}

export default OurTeam;