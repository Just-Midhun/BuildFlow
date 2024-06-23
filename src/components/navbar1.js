import React from 'react';
import { Link } from 'react-router-dom';
import './navbar1.css'; 

function Navbar1() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-element">Home</Link>
        <Link to="/about" className="navbar-element">About</Link>
        <div className="navbar-logo"><img  src="../../assets/images/logo.png" alt="Logo" /></div>
        <Link to="/contact" className="navbar-element">Login</Link>
        <Link to="/contact" className="navbar-element">Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar1;
