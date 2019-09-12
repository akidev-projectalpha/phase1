import React from 'react';
import hands from '../img/hands-holding-smartphone-bar-chart-rocket-launch_1262-20647.jpg';
import logo from "../img/logo.png" ;
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="App">
      <div className = "left"  >
        <img className="logo" src={logo} alt="logo" ></img>
        <div className = "bar" >
          <Link to='/login'>
            <button type="button"> Log in using harvest </button>
          </Link>
          <button> Saleforce(Sandbox) </button>
          <button> Saleforce(Production,Developer) </button>
        </div>
      </div>
      <div className = "right" >
        <img src={hands} alt="mainImage" />
      </div>
    </div>
  );
}
export default Nav;


