import React from 'react';
import DishCard from './ui/DishCard';

const dishes = [
  {
    title: "Greek Salad",
    price: "$12.99",
    image: "/greek_salad.jpg",
    description: "Crispy lettuce, peppers, olives and feta cheese, garnished with crunchy garlic croutons."
  },
  {
    title: "Bruschetta",
    price: "$5.99",
    image: "/bruchetta.svg",
    description: "Grilled bread with garlic and olive oil."
  },
  {
    title: "Lemon Dessert",
    price: "$6.00",
    image: "/lemon_dessert.jpg",
    description: "Straight from grandma's recipe book. Authentic and fresh."
  }
];

const Main = () => {
  return (
    <main style={{ padding: '3rem 2rem' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        <h2 style={{ fontSize: '2rem' }}>This weeks specials!</h2>
        <button style={{
          backgroundColor: '#F4CE14',
          border: 'none',
          borderRadius: '8px',
          padding: '0.5rem 1rem',
          fontWeight: 'bold',
          marginTop: '1rem'
        }}>Online Menu</button>
      </div>
      <div style={{
        display: 'flex',
        gap: '2rem',
        flexWrap: 'wrap',
        marginTop: '2rem',
        justifyContent: 'center'
      }}>
        {dishes.map((dish, i) => (
          <DishCard
            key={i}
            title={dish.title}
            price={dish.price}
            description={dish.description}
            image={dish.image}
          />
        ))}
      </div>
    </main>
  );
};

export default Main;
