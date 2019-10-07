import React from 'react';
import { connect } from 'react-redux'

class Building extends React.Component {

  render () {
    return (
      <div className='city'>
        We live in {this.props.name} with a population of {this.props.population}. The weather here is often {this.props.weather}. 
        <img src='images/ithaca.jpg' />
        <hr/>

        <School name="Cornell" />
      </div>
    );
  }

}

function mapStateToProps(state) {
  return { 
    building: building
  }
}

export default connect(mapStateToProps)(Building)
