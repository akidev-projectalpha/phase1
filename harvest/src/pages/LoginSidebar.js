import React from 'react';
import '../App.css';
import logo from '../img/default.png';
import 'font-awesome/css/font-awesome.min.css';

// scource link
// https://fontawesome.com/v4.7.0/icons/

function LoginSidebar() {
  return (
    <div className='sidebar'>
        <img className="loginLogo" src={logo} alt="logo" ></img>
        <li className="fa fa-newspaper-o"> <a> Overview </a> </li>
        <li className="fa fa-users"> <a> Recuit </a></li>
        <li className="fa fa-clock-o"> <a>Reminder </a></li>
        <li className="fa fa-comment-o"> <a>Message </a></li>
        <li className="fa fa-american-sign-language-interpreting"> <a>Estimate </a></li>
        <li className="fa fa-cog"> <a>Settings </a></li>
    </div>
  );
}
export default LoginSidebar;