import '../styles/PizzaGallery.css'

export default function PizzaGallery() {
  const pizzas = [
    {
      id: 1,
      name: 'Tandoori Chicken Pizza',
      description: 'Delicious tandoori chicken with fresh coriander and onions',
      image: '/pizza.jpg',
      price: '₹449',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Margherita',
      description: 'Classic pizza with fresh mozzarella and basil',
      image: '/pizza.jpg',
      price: '₹299',
      rating: 4.6
    },
    {
      id: 3,
      name: 'Pepperoni Feast',
      description: 'Loaded with premium pepperoni and cheese',
      image: '/pizza.jpg',
      price: '₹399',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Veggie Supreme',
      description: 'Fresh vegetables with mozzarella and herbs',
      image: '/pizza.jpg',
      price: '₹349',
      rating: 4.5
    }
  ]

  return (
    <section className="pizza-gallery" id="menu-gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2>Our Delicious Pizzas</h2>
          <p>Handcrafted with love and the finest ingredients</p>
        </div>

        <div className="pizza-grid">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="pizza-card">
              <div className="pizza-image-wrapper">
                <img 
                  src={pizza.image} 
                  alt={pizza.name}
                  className="pizza-image"
                />
                <div className="pizza-overlay">
                  <button className="view-btn">View Details</button>
                </div>
              </div>
              
              <div className="pizza-info">
                <h3>{pizza.name}</h3>
                <p className="description">{pizza.description}</p>
                
                <div className="pizza-footer">
                  <div className="price-rating">
                    <span className="price">{pizza.price}</span>
                    <span className="rating">⭐ {pizza.rating}</span>
                  </div>
                  <button className="add-to-cart">🛒 Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
