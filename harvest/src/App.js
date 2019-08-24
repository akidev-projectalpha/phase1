import React from 'react';
import hands from './img/hands-holding-smartphone-bar-chart-rocket-launch_1262-20647.jpg';
import logo from "./img/logo.png" ;
import './App.css';

console.log(logo);

function App() {
  return (
    <div className="App">
      <div className = "left"  >
        <img className="logo" src={logo} alt="logo" ></img>
        <div className = "bar" >
        <button type="button"> Log in using harvest </button>
        <button> Saleforce(Sandbox) </button>
        <button> Saleforce(Production,Developer) </button>
        </div>
        </div>
        <div className = "right" >
          <img src={hands} alt="mainImage" className = "mainImage"/>
        </div>
    </div>
  );
}

export default App;
