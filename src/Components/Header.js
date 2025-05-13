import React from 'react';
import { Link, Navigate } from 'react-router-dom';

const Header = () => {
  return (
    <section style={{
      backgroundColor: '#495E57',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '3rem 4rem',
      flexWrap: 'wrap',
      borderRadius: '0.5rem'
    }}>

      <article style={{ flex: '1', maxWidth: '500px' }}>
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
      </article>


      <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          src="/restauranfood.jpg"
          alt="Delicious dish"
          style={{
            maxWidth: '100%',
            width: '20vw',
            height: '50vh',
            borderRadius:' 1em',
            objectFit: 'cover',
            transform: 'scale(1.2)',
            position: 'relative',
            top: '7vh',
          }}
        />
      </div>
    </section>
  );
};

export default Header;
