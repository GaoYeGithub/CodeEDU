import React from 'react';
import '/src/css/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">      
        <img 
          src="src/images/logo.png" 
          alt="logo"
          className="header--image" 
        />CodeEDU</div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>Classes</li>
        <li>Apply</li>
        <li>Team</li>
        <li>Events</li>
        <li>Blog</li>
      </ul>
    </nav>
  );
}

export default Navbar;
