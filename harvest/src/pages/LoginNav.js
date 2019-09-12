import React from 'react';

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

        <div className='accountInfo'>
          <h4>Dropdown</h4>
        </div>
    </div>
  );
}
export default LoginDev;