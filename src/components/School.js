import React from 'react';

class School extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 0,
      semesters: 0,
    }
  }

  addYear = () => {
    // TODO
  }

  yearToSemester = () => {
    // TODO
  }

  componentDidUpdate () {
    this.yearToSemester();
  }

  render () {
    return (
      <div className='school'> 
        <p>Welcome to {this.props.name}. I've been here for {this.state.years} years. That's {this.state.semesters} semesters!</p>
        Enter the number of years you've been here:
        <input onClick={this.addYear}></input>
        <img src='images/cornell.jpg' />
      </div>
    );
  }
}

export default School