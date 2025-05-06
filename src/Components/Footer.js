import React, { Component } from 'react'
import { Instagram, Facebook } from 'lucide-react'


const Footer = () => {
  return (
    <footer style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between',margin:70 }}>
      <div>
        <img src='Logo.svg' style={{marginTop:70}}/>
      </div>
      <div>
        <h4>Navigation</h4>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Menu</a></li>
          <li><a href='#'>Reservations</a></li>
          <li><a href='#'>Order Online</a></li>
          <li><a href='#'>Login</a></li>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <text>E-mail</text>
      </div>
      <div>
        <h4>Social Media</h4>
        <Instagram/>
        <Facebook/>
      </div>
    </footer>
  )
}

export default Footer