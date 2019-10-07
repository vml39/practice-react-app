import React from 'react';
import School from './School';

class City extends React.Component {

  render () {
    return (
      <div className='city'>
        We live in {/*TODO*/} with a population of {/*TODO*/}. The weather here is often {/*TODO*/}. 
        <img src='images/ithaca.jpg' />
        <hr/>

        <School name="Cornell" />
      </div>
    );
  }

}

export default City
