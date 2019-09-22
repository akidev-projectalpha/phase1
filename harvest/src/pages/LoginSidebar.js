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
        <li className="fa fa-newspaper-o"> <a> Builds </a> </li>
        <li className="fa fa-users"> <a> Connections </a></li>
        <li className="fa fa-clock-o"> <a>Compare </a></li>
        <li className="fa fa-comment-o"> <a>Insights </a></li>
        <li className="fa fa-american-sign-language-interpreting"> <a>Workflows </a></li>
        <li className="fa fa-users"> <a> Team </a></li>
        <li className="fa fa-cog"> <a>Settings </a></li>
        <li className="fa fa-lock"> <a>Admin</a></li>
    </div>
  );
}
export default LoginSidebar;