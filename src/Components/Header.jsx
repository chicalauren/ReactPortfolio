// imports
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

// Header component
function Header() {
  return (
    <header>
      <h1>Lauren Brown's Portfolio</h1>
      <Navigation />
    </header>
    
  );
}

// export
export default Header;