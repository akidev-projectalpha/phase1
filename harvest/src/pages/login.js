import React from 'react';
import '../App.css';
import LoginNav from './LoginNav';
import LoginSidebar from './LoginSidebar';

function Login() {
  return (
    <body>
        <LoginNav />
        <LoginSidebar />
        <div className='loginMain'>
        </div>
    </body>
  );
}
export default Login;