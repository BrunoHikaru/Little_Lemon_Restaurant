import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="nav">
      <Link to="/">
        <img src="/Logo.svg" alt="Little Lemon Logo" className="logo" />
      </Link>

      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation menu">
        ☰
      </button>

      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#menu" onClick={closeMenu}>Menu</a></li>
        <li><Link to="/booking" onClick={closeMenu}>Reservations</Link></li>
        <li><a href="#order" onClick={closeMenu}>Order Online</a></li>
        <li><a href="#login" onClick={closeMenu}>Login</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
