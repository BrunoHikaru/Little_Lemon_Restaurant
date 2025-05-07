import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
    }}>
      <Link to="/">
        <img src="/Logo.svg" alt="Little Lemon Logo" style={{ height: '40px' }} />
      </Link>
      <ul style={{
        display: 'flex',
        gap: '1.5rem',
        listStyle: 'none',
        margin: 0,
        padding: 0
      }}>
        <li><Link to="/" style={{ textDecoration: 'none', color: '#333333' }}>Home</Link></li>
        <li><Link style={{ textDecoration: 'none', color: '#333333' }}>About</Link></li>
        <li><Link style={{ textDecoration: 'none', color: '#333333' }}>Menu</Link></li>
        <li><Link to="/booking" style={{ textDecoration: 'none', color: '#333333' }}>Reservations</Link></li>
        <li><Link style={{ textDecoration: 'none', color: '#333333' }}>Order Online</Link></li>
        <li><Link style={{ textDecoration: 'none', color: '#333333' }}>Login</Link></li>


      </ul>
    </nav>
  );
};

export default Nav;
