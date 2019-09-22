import React from 'react';
import logo from '../img/default.png';

function LoginDev() {
  return (
    <div className='loginNav'>

        <div className='searchBar'>
          <form >
            <i class="fa fa-search search-icon"></i>
            <button type="text" placeholder="Search.." name="search">
            <i class="close fa fa-close"></i>
            </button>
          </form> 
        </div>
        
        <div className="accountInfo dropdown">
        <img className="userPic" src={logo} alt="logo" ></img>
        <button className="dropbtn">First Name Last Name <li className='fa fa-chevron-down '></li></button>
        <div className="dropdown-content">
        <a href="#">something</a>
        <a href="#">something</a>
        <a href="#">something</a>
        </div>
        </div>

    </div>
  );
}
export default LoginDev;