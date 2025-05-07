
import React, { Component } from 'react'
import DishCard from './ui/DishCard'

const dishes = [
  {
    title: "Greek Salad",
    price: "$12.99",
    image: "/greek_salad.jpg", 
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
  },
  {
    title: "Bruschetta",
    price: "$5.99",
    image: "/bruchetta.svg",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
  },
  {
    title: "Lemon Dessert",
    price: "$5.00",
    image: "/lemon_dessert.jpg",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
  }
];

const Main = () => {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '2rem',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      {dishes.map((dish, index) => (
        <DishCard
          key={index}
          title={dish.title}
          price={dish.price}
          description={dish.description}
          image={dish.image}
        />
      ))}
    </div>
  );
};
export default Main