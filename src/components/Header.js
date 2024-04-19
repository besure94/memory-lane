import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <React.Fragment>
      <div className='app-header'>
        <h1 id='main-heading'>Memory Lane</h1>
          <p><Link to="/">Home</Link></p>
          <p><Link to="sign-in">Sign In</Link></p>
      </div>
      <hr/>
    </React.Fragment>
  );
}

export default Header;