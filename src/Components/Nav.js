
import React, { Component } from 'react'

const Nav = () => {
  return (
    <nav style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '10px'
    }}>
      <img src='Logo.svg' alt='Logo' style={{ maxWidth: '100px', height: 'auto' }} />
      <ul style={{
        display: 'flex',
        flexDirection: 'row',
        listStyleType: 'none',
        flexWrap: 'wrap',
        padding: 0,
        margin: 0,
        gap: '10px',
        marginLeft: 'auto'
      }}>
        <li><a href='#' style={{ textDecoration: 'none' }}>Home</a></li>
        <li><a href='#' style={{ textDecoration: 'none' }}>About</a></li>
        <li><a href='#' style={{ textDecoration: 'none' }}>Menu</a></li>
        <li><a href='#' style={{ textDecoration: 'none' }}>Reservations</a></li>
        <li><a href='#' style={{ textDecoration: 'none' }}>Order Online</a></li>
        <li><a href='#' style={{ textDecoration: 'none' }}>Login</a></li>
      </ul>
    </nav>
  )
};


export default Nav