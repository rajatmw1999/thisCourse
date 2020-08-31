import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class OutermostCategory extends React.Component {
  render() {
    return (
      <div className='container  outer-div-outermost'>
        <div className='row form-group grp1'>
          <div className='col-12 col-lg-3 all'>
            <img
              className='aradhna_outimg col-4'
              src='https://img.icons8.com/color/48/000000/book-reading.png'
            />
            <p className='para col-8'>Computer science</p>
          </div>
          <div className='col-12 col-lg-3 all'>
            <img
              className='aradhna_outimg col-4'
              src='https://img.icons8.com/color/48/000000/stationery.png'
            />
            <p className='para col-8'>Art and Design</p>
          </div>
          <div className='col-12 col-lg-3 all'>
            <img
              className='aradhna_outimg col-4'
              src='https://img.icons8.com/color/48/000000/handshake.png'
            />
            <p className='para col-8'>Business</p>
          </div>
          <div className='col-12 col-lg-3 all'>
            <img
              className='aradhna_outimg biggerheading col-4'
              src='https://img.icons8.com/color/48/000000/combo-chart.png'
              // style={{ marginBottom: '23px' }}
            />
            <p className='para col-8'>Personal Development</p>
          </div>
        </div>

        <div className='row form-group grp2'>
          <div className='col-12 col-lg-3 all'>
            <img
              className='aradhna_outimg col-4'
              src='https://img.icons8.com/color/48/000000/satellites.png'
              
            />
            <p className='para col-8'>Data science</p>
          </div>
          <div className='col-12 col-lg-3 all'>
            <img
              className='aradhna_outimg col-4 biggerheading'
              // style={{ marginBottom: '23px' }}
              src='https://img.icons8.com/color/48/000000/network.png'
              
            />
            <p className='col-8 para'>Physical science and engineering</p>
          </div>
          <div className='col-12 col-lg-3 all'>
            <img
              className='aradhna_outimg col-4'
              src='https://img.icons8.com/color/48/000000/omnichannel.png'
              
            />
            <p className='para col-8'>Marketing</p>
          </div>
          <div className='col-12 col-lg-3 all'>
            <img
              className='aradhna_outimg col-4 biggerheading'
              src='https://img.icons8.com/color/48/000000/communication.png '
              // style={{ marginBottom: '23px' }}
            />
            <p className=' col-8 para'>Language and communication</p>
          </div>
        </div>

        <div className='row form-group'>
          <div className='col-12 col-lg-3 all'>
            <img
              className='aradhna_outimg col-4'
              src='https://img.icons8.com/color/48/000000/orchid.png'
            />
            <p className='para col-8'>Life sciences</p>
          </div>
          <div className='col-12 col-lg-3 all'>
            <img
              className='aradhna_outimg col-4'
              src='https://img.icons8.com/color/48/000000/deviation.png'
            />
            <p className='para col-8'>Math and Logic</p>
          </div>
          <div className='col-12 col-lg-3 all'>
            <img
              className='aradhna_outimg col-4'
              src='https://img.icons8.com/color/48/000000/conference-call.png'
            />
            <p className='para col-8'>Social sciences</p>
          </div>
          <div className='col-12 col-lg-3 all'>
            <img
              className='aradhna_outimg col-4'
              src='https://img.icons8.com/color/48/000000/heart-health.png'
            />
            <p className='para col-8'>Health and fitness</p>
          </div>
        </div>
      </div>
    );
  }
}

export default OutermostCategory;
