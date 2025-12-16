import { FaFilter, FaUtensils, FaChevronDown, FaChevronUp, FaChevronRight, FaStar, FaFire, FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/MenuPage.css';
import EmptyCart from './EmptyCart';
const pizzas = [
  {
    id: 1,
    name: "Cheese Onion Pizza",
    category: "Veg Pizzas",
    price: 60,
    image: "/cheese-onion-pizza.jpg",
    isPopular: true,

  },
  {
    id: 2,
    name: "Cheese Capsicum",
    category: "Veg Pizzas",
    price: 60,
     image: "/cheese-capsicum-pizza.jpg",
    isPopular: true,
   
  },
  {
    id: 3,
    name: "Cheese Tomato",
    category: "Veg Pizzas",
    price: 60,
    image: "/cheese-tomato-pizza.jpg",
    isPopular: true,
  },

  {
    id: 4,
    name : "Cheese Corn",
    category: "Veg Pizzas",
    price: 60,
    image: "/cheese-corn-pizza.jpg",
    isPopular: true,
  },

   
  {
    id: 5,
    name: "Paneer Special",
    category: "Veg Pizzas",
    price: 90,
     image: "/paneer-special-pizza.jpg",
    isPopular: true,

  },

  {
    id: 6,
    name: "Veg Loaded Pizza",
    category: "Veg Pizzas",
    price: 120,
    image: "/veg-loaded-pizza.jpg",
    isPopular: true,

  },

  {
    id: 7,
    name : "Onion & capsicum",
    category: "Veg Pizzas",
    price: 90,
    image: "/O & C -pizza.jpg",
    isPopular: true,

  },

  {
    id: 8,
    name : "Tomato & Corn",
    category: "Veg Pizzas",
    price: 90,
     image: "/T & C -pizza.jpg",
    isPopular: true,
  },

  {
    id: 9,
    name: "Onion and Corn",
    category: "Veg Pizzas",
    price: 90,
     image: "/O & CO -pizza.jpg",
    isPopular: true,
  },

  {
    id: 10,
    name : "Paneer and Corn",
    category: "Veg Pizzas",
    price: 90,
     image: "/P & C -pizza.jpg",
    isPopular: true, 
  },

  {
    id: 11,
    name : "Onion and Jalepino",
    category: "Veg Pizzas",
    price: 90,
    image: "/O & J -pizza.jpg",
    isPopular: true,
  },

  {
    id: 12,
    name: "Paneer and Onion",
    category: "Veg Pizzas",
    price: 90,
    image: "/P & O -pizza.jpg",
    isPopular: true,
  },

  {
    id: 13,
    name: "BBQ",
    category: "NonVeg Pizzas",
    price: 90,
    image: "/BBQ-pizza.jpg",
    isPopular: true,
  },

  {
    id: 14,
    name: "Spicy Chicken",
    category: "NonVeg Pizzas",
    price: 90,
    image: "/spicy-chicken-pizza.jpg",
    isPopular: true,
  },

  {
    id: 15,
    name: "Chicken Sausage",
    category: "NonVeg Pizzas",
    price: 90,
    image: "/chicken-sausage-pizza.jpg",
    isPopular: true,
  },


  {
    id: 16,
    name: "American Chicken",
    category: "NonVeg Pizzas",
    price: 90,
     image: "/American-pizza.jpg",
    isPopular: true,
  },

 
  {
    id: 17,
    name: "Onion and BBQ",
    category: "NonVeg Pizzas",
    price: 110,
      image: "/O & BBQ-pizza.jpg",
    isPopular: true,
  },
  
  {
    id: 18,
    name: "Capsicum and Spicy Chicken",
    category: "NonVeg Pizzas",
    price: 110,
    image: "/S & Cap-pizza.jpg",
    isPopular: true,
  },

   {
    id: 19,
    name: "Onion and Chicken Sausage",
    category: "NonVeg Pizzas",
    price: 110,
    image: "/O & CS-pizza.jpg",
    isPopular: true,
  },


   {
    id: 20,
    name: "Chicken Loaded Pizza",
    category: "NonVeg Pizzas",
    price: 130,
    image: "/chickenL-pizza.jpg",
    isPopular: true,
  },

  {
  id: 21,
  name: "White Sauce Pasta",
  category: "Pasta",
  price: 120,
  image: "/whiteSause.jpg",
  type: "veg"
},

{
  id: 22,
  name: "Red Sauce Pasta",
  category: "Pasta",
  price: 120,
  image: "/RedSause.jpg",
  type: "veg"
},

{
  id: 23,
  name: "Mix Sauce Pasta",
  category: "Pasta",
  price: 130,
  image: "/MixSauce.jpg",
  type: "veg"
},

{
  id: 24,
  name: "Chicken Pasta",
  category: "Pasta",
  price: 140,
  image: "/ChickenPasta.jpg",
  type: "non-veg"
},

{
  id: 25,
  name: "Veg Nuggets (10 PCS)",
  category: "Snacks",
  price: 90,
  image: "/VegNuggets.jpg",
  type: "veg"
},

{
  id: 26,
  name: "Chicken Popcorn (10 PCS)",
  category: "Snacks",
  price: 100,
  image: "/CP.jpg",
  type: "non-veg"
},



{
  id: 27,
  name: "Chicken Nuggets (6 PCS)",
  category: "Snacks",
  price: 140,
  image: "/CN.jpg",
  type: "non-veg"
},


{
  id: 28,
  name: "Chicken Wings (6 PCS)",
  category: "Snacks",
  price: 180,
  image: "/CW.jpg",
  type: "non-veg"
},

{
  id: 29,
  name: "Banana Shake",
  category: "Shakes",
   image: "/BananaShake.jpg",
  price: 70,
},

{
  id: 30,
  name: "Oreo Shake",
  category: "Shakes",
  image: "/OreoShake.jpg",
  price: 100,
  
},

{
  id: 31,
  name: "Mango Shake",
  category: "Shakes",
  image: "/MangoShake.jpg",
  price: 70,
  
},


{
  id: 32,
  name: "Strawberry Shake",
  category: "Shakes",
  image: "/StrawberryShake.jpg",
  price: 70,
  
},


// {
//   id: 33,
//   name: "Banana Shake",
//   category: "Shakes",
//   price: 70,
 
// },


{
  id: 34,
  name: "Cold Coffee",
  category: "Shakes",
   image: "/ColdCoffee.jpg",
  price: 80,
 
},


{
  id: 35,
  name: "Black Currant Shake",
  category: "Shakes",
  image: "/BC.jpg",
  price: 100,

},


{
  id: 36,
  name: "Chocolate Shake",
  category: "Shakes",
  image: "/CS.jpg",
  price: 100,

},

{
  id: 37,
  name: "Butter Scotch Shake",
  category: "Shakes",
  image: "/BS.jpg",
  price: 100,
},


{
  id: 38,
  name: "Virgin Mojito",
  category: "Mojito",
  image: "/VM.jpg",
  price: 80,
},



{
  id: 39,
  name: "Watermelon Mojito",
  category: "Mojito",
   image: "/WM.jpg",
  price: 80,
},

{
  id: 41,
  name: "Green Apple Mojito",
  category: "Mojito",
  image: "/GreenApple.jpg",
  price: 80,
},



{
  id: 42,
  name: "Veg Aloo Tikki Burger",
  category: "Burgers",
  image: "/VLT.jpg",
  price: 80,
},

{
  id: 43,
  name: "Special Veg Burger",
  category: "Burgers",
  image: "/SV.jpg",
  price: 80,
},

{
  id: 44,
  name: "Spicy Paneer Burger",
  category: "Burgers",
  image: "/SPB.jpg",
  price: 80,
},



{
  id: 45,
  name: "Cheese Burger",
  category: "Burgers",
   image: "/CB.png",
  price: 80,
},


{
  id: 46,
  name: "Non-Veg Burger",
  category: "Burgers",
  price: 80,
},


{
  id: 47,
  name: "Garlic Bread",
  category: "Garlic Breads",
  price: 80,
},


{
  id: 48,
  name: "Veg Pocket",
  category: "Garlic Breads",
  price: 80,
},

{
  id: 49,
  name: "Stuff Garlic Bread",
  category: "Garlic Breads",
  price: 80,
},

{
  id: 50,
  name: "Cheese Garlic Bread",
  category: "Garlic Breads",
  price: 80,
},


{
  id: 51,
  name: "Mushroom Garlic Bread",
  category: "Garlic Breads",
  price: 80,
},



{
  id: 52,
  name: "Add Cheesy Dip/Jalapenos Dip",
  category: "Garlic Breads",
  price: 80,
},


{
  id: 53,
  name: "Veg Taco",
  category: "Tacos",
  price: 80,
},


{
  id: 54,
  name: "Non-Veg Taco",
  category: "Taco",
  price: 80,
},



{
  id: 55,
  name: "Veg Wraps",
  category: "Wraps",
  price: 80,
},


{
  id: 56,
  name: "Paneer Wrap",
  category: "Wraps",
  price: 80,
},



{
  id: 57,
  name: "Chicken Wrap",
  category: "Wraps",
  price: 80,
},


{
  id: 58,
  name: "Chocolava Cake",
  category: "Desserts",
  price: 80,
},


{
  id: 59,
  name: "Chocolava Cake",
  category: "Desserts",
  price: 80,
},

{
  id: 60,
  name: "Veg Grilled Sandwich",
  category: "Sandwich",
  price: 80,
},

{
  id: 61,
  name: "Grilled Paneer Sandwich",
  category: "Sandwich",
  price: 80,
},

{
  id: 62,
  name: "Grilled Chicken Sandwich",
  category: "Sandwich",
  price: 80,
},




{
  id: 63,
  name: "French Fries(Salted)",
  category: "French Fries",
  price: 80,
},


{
  id: 64,
  name: "Peri-Peri Fries",
  category: "French Fries",
  price: 80,
},



{
  id: 65,
  name: "French Fries Large",
  category: "French Fries",
  price: 80,
},



{
  id: 66,
  name: "Cheesy Fries",
  category: "French Fries",
  price: 80,
},


];

export default function MenuPage() {
  const [showFilter, setShowFilter] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [quantities, setQuantities] = useState({});
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState({});
  const { addToCart, getCartCount } = useCart();
  const navigate = useNavigate();
  const categories = {
    'Veg Pizzas': {
      sizes: ['Regular (7")', 'Medium (10")', 'Large (13")']
    },
    'Non Veg Pizzas': {
      sizes: ['Regular (7")', 'Medium (10")', 'Large (13")']
    },
    'Burgers': null,
    'Garlic Breads': null,
    'Tacos': null,
    'French Fries': null,
    'Sandwich': null,
    'Wraps': null,
    'Desserts': null,
    'Pasta': { 
      sizes: []
  },
    'Snacks': null,
    'Shakes': {},
    'Mojito': null
  };



  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const toggleSize = (category, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [category]: prev[category]?.includes(size)
        ? prev[category].filter(s => s !== size)
        : [...(prev[category] || []), size]
    }));
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
    if (!showFilter) {
      setExpandedCategory(null);
    }
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedSizes({});
  };

  const hasAnyFilter = selectedCategories.length > 0 || 
                      Object.values(selectedSizes).some(sizes => sizes.length > 0);

  const isCategoryExpanded = (category) => expandedCategory === category;

  const updateQuantity = (id, change) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + change)
    }));
  };

   const handleaddToCart = (pizza, quantity) => {
  // Add your cart logic here
  console.log(`Added ${quantity} ${pizza.name} to cart`);
  // Example: You might want to use a context or state management for cart
  // setCartItems(prev => [...prev, { ...pizza, quantity }]);
};

  



    const filteredPizzas = pizzas.filter(pizza => {
  // If no filters are selected, show all pizzas (except pasta)
  if (selectedCategories.length === 0 && 
      Object.values(selectedSizes).every(arr => arr.length === 0)) {
    return pizza.category !== "Pasta"; // Hide pasta by default
  }






    // Filter by category
    const categoryMatch = selectedCategories.length === 0 || 
                         selectedCategories.includes(pizza.category);
    
    // Filter by size
    const sizeMatch = Object.entries(selectedSizes).every(([cat, sizes]) => {
      if (sizes.length === 0) return true;
      if (cat !== pizza.category) return true;
      return sizes.some(size => pizza.size?.includes(size.split(' ')[0]));
    });
    
    return categoryMatch && sizeMatch;
  });


   const handleAddToCart = (pizza, quantity) => {
    addToCart(pizza, quantity);
    // Reset quantity after adding to cart
    setQuantities(prev => ({ ...prev, [pizza.id]: 1 }));
  };

  
  return (
    <div className="menu-page">
      <header className="menu-header">
        <div className="menu-header-content">
          <div className="menu-header-text">
            <h1 className="menu-title">
              <FaUtensils className="menu-icon" />
              Our Menu
            </h1>
          </div>
          <div className="menu-actions">
            <div className="filter-container">
              <button 
                className="filter-btn" 
                onClick={toggleFilter}
                aria-expanded={showFilter}
                aria-label="Filter menu items"
              >
                <FaFilter className="filter-icon" />
                <span>Filter</span>
                {showFilter ? <FaChevronUp className="chevron-icon" /> : <FaChevronDown className="chevron-icon" />}
              </button>


              {showFilter && (
                <div className="filter-dropdown">
                  <div className="filter-dropdown-header">
                    <h3>Filter by Category</h3>
                    {hasAnyFilter && (
                      <button

                        className="clear-filters"
                        onClick={clearAllFilters}
                      >
                        Clear All
                      </button>

                    )}
                  </div>
                  <div className="filter-options">
                    {Object.entries(categories).map(([category, details]) => (
                      <div key={category} className="filter-category">
                        <label 
                          className={`filter-option ${isCategoryExpanded(category) ? 'expanded' : ''}`}
                          onClick={() => toggleCategory(category)}
                        >
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => {}}
                            onClick={(e) => e.stopPropagation()}
                          />
                          <span className="checkmark"></span>
                          <span className="category-name">{category}</span>
                          {details?.sizes && (
                            <span className="expand-icon">
                              {isCategoryExpanded(category) ? <FaChevronUp /> : <FaChevronRight />}
                            </span>
                          )}
                        </label>
                        
                        {isCategoryExpanded(category) && details?.sizes && (
                          <div className="size-options">
                            {details.sizes.map(size => (
                              <label key={size} className="size-option">
                                <input
                                  type="checkbox"
                                  checked={selectedSizes[category]?.includes(size) || false}
                                  onChange={() => toggleSize(category, size)}
                                />
                                <span className="checkmark"></span>
                                {size}
                              </label>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
 
              
          <button 
              className="header-cart-btn"
              onClick={() => navigate('/cart')}
              >

              <FaShoppingCart className="cart-icon" />
              Go to Cart
              <span className="cart-badge">{getCartCount()}</span>
            </button>     

          </div>
        </div>
      </header>


      

      {/* Pizza Grid Section */}
      <div className="menu-items-container">
        <h2 className="menu-category-title">Our Delicious Pizzas</h2>
        <div className="pizza-grid">
          {filteredPizzas.map(pizza => (
            <div key={pizza.id} className="pizza-card">
              {pizza.isPopular && (
                <div className="popular-tag">
                  <FaFire /> Popular
                </div>
              )}
              
              <div className="pizza-image-container">
                <img 
                  src={pizza.image} 
                  alt={pizza.name} 
                  className="pizza-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/placeholder-pizza.jpg';
                  }}
                />
              </div>
              
              
              <div className="pizza-info">
                <div className="pizza-header">
                  <h3 className="pizza-name">{pizza.name}</h3>
                  <div className="rating">
                    <FaStar className="star-icon" />
                    <span>{pizza.rating }</span>
                  </div>
                </div>
                
                <p className="pizza-category">{pizza.category} • {pizza.size}</p>
                

              <div className="price-section">
                <span className="price">₹{pizza.price}</span>
              <div className="cart-actions">
  <div className="quantity-selector">
    <button 
      onClick={(e) => {
        e.stopPropagation();
        updateQuantity(pizza.id, -1);
      }}
      className="quantity-btn"
    >

                  <FaMinus />
                     </button>
    <span className="quantity">{quantities[pizza.id] || 1}</span>
    <button 
      onClick={(e) => {
        e.stopPropagation();
        updateQuantity(pizza.id, 1);
      }}
      className="quantity-btn"
    >
                <FaPlus />
                    </button>
                  </div>
                
                <button 
                  className="cart-btn"
                  onClick={(e) => {
      e.stopPropagation();
      handleAddToCart(pizza, quantities[pizza.id] || 1);
    }}
  >
   
                  <FaShoppingCart className="cart-icon" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
        </div>
      </div>
    </div>
  );
}

