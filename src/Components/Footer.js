import React, { Component } from 'react'
import { Instagram, Facebook } from 'lucide-react'



const Footer = () => {
  return (
    <footer style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between', marginTop:'20px'}}>
      <div>
        <img src='Logo.svg' style={{marginTop:70}}/>
      </div>
      <div>
        <h4>Navigation</h4>
        <ul style={{listStyleType:'none', marginLeft: -37}}>
          <li><a href='#' style={{textDecoration:'None', color:'#333333'}}>Home</a></li>
          <li><a href='#' style={{textDecoration:'None', color:'#333333'}}>About</a></li>
          <li><a href='#' style={{textDecoration:'None', color:'#333333'}}>Menu</a></li>
          <li><a href='#' style={{textDecoration:'None', color:'#333333'}}>Reservations</a></li>
          <li><a href='#' style={{textDecoration:'None', color:'#333333'}}>Order Online</a></li>
          <li><a href='#' style={{textDecoration:'None', color:'#333333'}}>Login</a></li>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <text>E-mail</text>
      </div>
      <div>
        <h4>Social Media</h4>
        <Instagram style={{cursor: 'pointer'}}/>
        <Facebook style={{cursor: 'pointer'}}/>
      </div>
      
    </footer>
  )
}

export default Footer