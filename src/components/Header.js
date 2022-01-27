import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <header>
          <h1><Link to="/">Canada Times</Link></h1>
          
          <Nav/>
        </header>
      )
}

export default Header;
