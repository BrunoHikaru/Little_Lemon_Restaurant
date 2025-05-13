import React from 'react';

const testimonials = [
  {
    name: 'Emily R.',
    comment: 'Amazing food and delightful ambiance. Will definitely come back!',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
  },
  {
    name: 'John D.',
    comment: 'Great service and tasty dishes. The lemon dessert was a highlight!',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 4,
  },
  {
    name: 'Sophia M.',
    comment: 'Loved the atmosphere and the fresh ingredients. Highly recommended!',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    rating: 5,
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="stars">
      {[...Array(5)].map((_, index) => (
        <span key={index}>
          {index < rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

const TestimonialCard = ({ name, comment, image, rating }) => {
  return (
    <div className="testimonial-card">
      <img src={image} alt={`${name}'s profile`} className="testimonial-image" />
      <h3>{name}</h3>
      <StarRating rating={rating} />
      <p className="testimonial-comment">"{comment}"</p>
    </div>
  );
};

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
