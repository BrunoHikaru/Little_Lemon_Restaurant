import React, { Component } from 'react'
import { Instagram, Facebook } from 'lucide-react'



const Footer = () => {
  return (
    <footer style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between' }}>
      <div>
        <img src='Logo.svg' style={{marginTop:70}}/>
      </div>
      <div>
        <h4>Navigation</h4>
        <ul style={{listStyleType:'none', marginLeft: -37}}>
          <li><a href='#' style={{textDecoration:'None'}}>Home</a></li>
          <li><a href='#' style={{textDecoration:'None'}}>About</a></li>
          <li><a href='#' style={{textDecoration:'None'}}>Menu</a></li>
          <li><a href='#' style={{textDecoration:'None'}}>Reservations</a></li>
          <li><a href='#' style={{textDecoration:'None'}}>Order Online</a></li>
          <li><a href='#' style={{textDecoration:'None'}}>Login</a></li>
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