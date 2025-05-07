import React from 'react';
import { Link, Navigate } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{
      backgroundColor: '#495E57',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '3rem 4rem',
      flexWrap: 'wrap',
      borderRadius: '0.5rem'
    }}>

      <div style={{ flex: '1', maxWidth: '500px' }}>
        <h1 style={{ color: '#F4CE14', fontSize: '2.5rem', marginBottom: '0.2em' }}>Little Lemon</h1>
        <h2 style={{ fontWeight: '400', fontSize: '1.8rem', marginTop: 0 }}>Chicago</h2>
        <p style={{
          color: '#EDEFEE',
          fontSize: '1rem',
          lineHeight: '1.5',
          marginTop: '1em'
        }}>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <Link to="/booking">
          <button style={{
            backgroundColor: '#F4CE14',
            border: 'none',
            borderRadius: '8px',
            padding: '0.75rem 1.5rem',
            fontWeight: 'bold',
            marginTop: '2rem',
            fontSize: '1rem',
            cursor: 'pointer'
          }}>
            Reserve a Table
          </button>
        </Link>
      </div>


      <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          src="/restauranfood.jpg"
          alt="Delicious dish"
          style={{
            height: '250px',
            width: '300px',
            borderRadius: '16px',
            objectFit: 'cover',
          }}
        />
      </div>
    </header>
  );
};

export default Header;
