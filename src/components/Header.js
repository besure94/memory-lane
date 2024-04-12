import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <React.Fragment>
      <h1>Memory Lane</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="sign-in">Sign In</Link>
        </li>
      </ul>
      <hr/>
    </React.Fragment>
  );
}

export default Header;