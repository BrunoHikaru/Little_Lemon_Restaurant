import React, { Component } from 'react'
import { Instagram, Facebook } from 'lucide-react'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <img src="Logo.svg" alt="Company Logo" className="footer__logo" />
      </div>
      <nav className="footer__nav" aria-label="Footer Navigation">
        <h4>Navigation</h4>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Menu</a></li>
          <li><Link to='/booking'>Reservations</Link></li>
          <li><a href="#">Order Online</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>

      <section className="footer__contact">
        <h4>Contact</h4>
        <address>
          <p>Email: littlelemon@restaurant.com</p>
        </address>
      </section>

      <section className="footer__social">
        <h4>Social Media</h4>
        <div className="footer__icons">
          <Instagram className="icon" />
          <Facebook className="icon" />
        </div>
      </section>
    </footer>

  );
};

export default Footer;