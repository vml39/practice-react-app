import React from 'react';
import logo from './logo.svg';
import './App.css';
import City from './components/City';

function App() {
  return (
    <div className="App">
      <City name="Ithaca" population="16000" weather="snowy" />
    </div>
  );
}

export default App;
