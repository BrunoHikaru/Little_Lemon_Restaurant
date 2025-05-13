import React, { Component } from 'react'
import { Instagram, Facebook } from 'lucide-react'



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <img src="Logo.svg" alt="Company Logo" className="footer__logo" />
      </div>
      <nav className="footer__nav" aria-label="Footer Navigation">
        <h4>Navigation</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Reservations</a></li>
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