import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class OutermostCategory extends React.Component {
    
    
    render() {
      return <div className="outer-div-outermost">
      <div class="container">

      <div class="row form-group grp1" >
         <div class="col-md-3 all">	<img src="https://img.icons8.com/color/48/000000/book-reading.png" class="cs"/><p class="para_1">Computer science</p>
		</div>
        <div class="col-md-3 all" ><img src="https://img.icons8.com/color/48/000000/stationery.png" class="AD"/><p class="para_2">Art and Design</p></div>
        <div class="col-md-3 all"><img src="https://img.icons8.com/color/48/000000/handshake.png"class="BSNS"/><p class="para_3">Business</p></div>
         <div class="col-md-3 all"><img src="https://img.icons8.com/color/48/000000/combo-chart.png" class="PD"/><p class="para_4">Personal Development</p></div>
      </div>


	 <div class="row form-group grp2" >
         <div class="col-md-3 all"><img src="https://img.icons8.com/color/48/000000/satellites.png" class="DS"/><p class="para_5">Data science</p></div>
        <div class="col-md-3 all"><img src="https://img.icons8.com/color/48/000000/network.png" class="PSC"/><p class="para_6">Physical science
        <br/> and engineering</p></div>
        <div class="col-md-3 all"><img src="https://img.icons8.com/color/48/000000/omnichannel.png"class="Maktng "/><p class="para_7">Marketing</p></div>
        <div class="col-md-3 all"><img src="https://img.icons8.com/color/48/000000/communication.png"class="Landc"/><p class="para_8">Language
        <br/>and communication</p></div>

      </div>

      <div class="row form-group">
        <div class="col-md-3 all"><img src="https://img.icons8.com/color/48/000000/orchid.png"/><p class="para_9">Life sciences</p></div>
        <div class="col-md-3 all"><img src="https://img.icons8.com/color/48/000000/deviation.png"/><p class="para_10">Math and Logic</p></div>
        <div class="col-md-3 all"><img src="https://img.icons8.com/color/48/000000/conference-call.png"/><p class="para_11">Social sciences</p></div>
        <div class="col-md-3 all"><img src="https://img.icons8.com/color/48/000000/heart-health.png"/><p class="para_12">Health and fitness</p></div>

      </div>
</div>
</div>
;
     
  }
  }
  
  export default OutermostCategory;