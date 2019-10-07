import React from 'react';

class School extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO
    }
  }

  addYear = e => {
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
        <p>Welcome to {/*TODO*/}. I've been here for {this.state.years} years. That's {this.state.semesters} semesters!</p>
        Enter the number of years you've been here:
        <input onChange={e => this.addYear(e)}></input>
        <img src='images/cornell.jpg' />
      </div>
    );
  }
}

export default School