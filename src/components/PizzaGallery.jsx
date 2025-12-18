// import '../styles/PizzaGallery.css'

// export default function PizzaGallery() {
//   const pizzas = [
//     {
//       id: 1,
//       name: 'Cheese Onion Pizza',
//       image: '/src/assets/CheeseOnion.jpg',
//       price: '₹60'
//     },
//     {
//       id: 2,
//       name: 'Cheese Capsicum',
//       image: '/src/assets/CheeseCapsicum.jpg',
//       price: '₹60'
//     },
//     {
//       id: 3,
//       name: 'Cheese Tomato',
//       image: '/src/assets/CheeseTomato.jpg',
//       price: '₹60'
//     },
//   ]

//   return (
//     <section className="pizza-gallery" id="menu-gallery">
//       <div className="gallery-container">
//         <div className="gallery-header">
//           <h2>Our Delicious Pizzas</h2>
//           <p>Handcrafted with love and the finest ingredients</p>
//         </div>

//         <div className="pizza-grid">
//           {pizzas.map((pizza) => (
//             <div key={pizza.id} className="pizza-card">
//               <div className="pizza-image-wrapper">
//                 <img 
//                   src={pizza.image} 
//                   alt={pizza.name}
//                   className="pizza-image"
//                 />
//                 {/* <div className="pizza-overlay">
//                   <button className="view-btn">View Details</button>
//                 </div> */}
//               </div>
              
//               <div className="pizza-info">
//                 <h3>{pizza.name}</h3>
//                 <p className="description">{pizza.description}</p>
                
//                 <div className="pizza-footer">
//                   <div className="price-rating">
//                     <span className="price">{pizza.price}</span>
//                     <span className="rating"> {pizza.rating}</span>
//                   </div>
//                   <button className="add-to-cart">Add to cart</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }



import { FaStar, FaShoppingCart, FaUtensils } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/PizzaGallery.css';
import { useNotification } from '../context/NotificationContext';

export default function PizzaGallery() {
  const { showNotification } = useNotification();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Sample data - replace with your actual data
  const foodItems = [
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
  ];

  const handleAddToCart = (e, item) => {
    e.stopPropagation();
    const cartItem = {
    ...item,
    // Convert price to number by removing the rupee symbol
    price: typeof item.price === 'string' 
      ? parseFloat(item.price.replace(/[^0-9.]/g, ''))
      : item.price,
    quantity: 1
  };
    addToCart({cartItem});
    showNotification(`${item.name} added to cart!`, 'success');
  };

  
  const navigateToMenu = () => {
    navigate('/menu');
  };

  return (
    <section className="food-gallery" id="menu-gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2>Our Delicious Menu</h2>
          <p>Handcrafted with love and the finest ingredients</p>
        </div>

        <div className="pizza-grid">
          {foodItems.map((item) => (
            <div 
              key={item.id} 
              className="pizza-card"
              onClick={() => navigate(`/menu#${item.id}`)}
            >
              {item.isPopular && (
                <div className="popular-badge">Popular</div>
              )}
              
              <div className="pizza-image-wrapper">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="pizza-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/placeholder-food.jpg';
                  }}
                />
              </div>
              
              <div className="pizza-info">
                <h3>{item.name}</h3>
                <p className="category">{item.category}</p>
                
                <div className="pizza-footer">
                  <div className="price-rating">
                    <span className="price">{item.price}</span>
                    <span className="rating">
                      <FaStar className="star-icon" /> {item.rating}
                    </span>
                  </div>
                  {/* <button 
                    className="add-to-cart"
                    onClick={(e) => handleAddToCart(e, item)}
                  >
                    <FaShoppingCart className="cart-icon" /> Add
                  </button> */}
                </div>
              </div>
            </div>
          ))}
          
          {/* View All Card */}
          <div 
            className="pizza-card view-all-card"
            onClick={navigateToMenu}
          >
            <div className="view-all-content">
              <FaUtensils className="view-all-icon" />
              <h3>View All Items</h3>
              <p>Explore our full menu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

