
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
      image: "/bruschetta.svg",
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
  
const DishCard = ({ title, price, description, image }) => {
    return (
      <div style={{
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        overflow: 'hidden',
        maxWidth: '300px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <img src={image} alt={title} />
        <div style={{ padding: '1em' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3>{title}</h3>
            <span style={{ color: 'orangered', fontWeight: 'bold' }}>{price}</span>
          </div>
          <p>{description}</p>
          <a href="#" style={{ fontWeight: 'bold' }}>Order a delivery 🚴‍♂️</a>
        </div>
      </div>
    )
  }

  export default DishCard;