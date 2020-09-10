import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {categoryData} from '../../data/category';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import ParticularOuterMostCategory from '../../pages/ParticularOuterMostCategory'

class OutermostCategory extends React.Component {
  constructor(props){  
    super(props);  
    //this.handleEvent = this.handleEvent.bind(this); 
    const ret = categoryData.map((data) =>  
    <div className='col-12 col-lg-3 all'>
            <img
              className='aradhna_outimg col-4'
              src="https://img.icons8.com/color/48/000000/book-reading.png"
            />
            <p className='para col-8'>{data.displayName}</p>
    </div>
    )

    this.state={
      category:ret
    }
  }  

  render() {
    return (
      <div className='container  outer-div-outermost'>
        <div className='row form-group'>
          {this.state.category}
        </div>
      </div>
    );
  }
}

export default OutermostCategory;
