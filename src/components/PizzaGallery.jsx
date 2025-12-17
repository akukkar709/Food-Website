import '../styles/PizzaGallery.css'

export default function PizzaGallery() {
  const pizzas = [
    {
      id: 1,
      name: 'Cheese Onion Pizza',
      image: '/src/assets/CheeseOnion.jpg',
      price: '₹60'
    },
    {
      id: 2,
      name: 'Cheese Capsicum',
      image: '/src/assets/CheeseCapsicum.jpg',
      price: '₹60'
    },
    {
      id: 3,
      name: 'Cheese Tomato',
      image: '/src/assets/CheeseTomato.jpg',
      price: '₹60'
    },
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
                {/* <div className="pizza-overlay">
                  <button className="view-btn">View Details</button>
                </div> */}
              </div>
              
              <div className="pizza-info">
                <h3>{pizza.name}</h3>
                <p className="description">{pizza.description}</p>
                
                <div className="pizza-footer">
                  <div className="price-rating">
                    <span className="price">{pizza.price}</span>
                    <span className="rating"> {pizza.rating}</span>
                  </div>
                  <button className="add-to-cart">Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
