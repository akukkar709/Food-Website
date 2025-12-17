// src/context/CartContext.jsx
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza, quantity) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === pizza.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === pizza.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...pizza, quantity }];
    });
  };


// const addToCart = (item) => {
//   setCartItems(prevItems => {
//     // Check if item already exists in cart
//     const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
    
//     if (existingItem) {
//       // If item exists, update quantity
//       return prevItems.map(cartItem => 
//         cartItem.id === item.id
//           ? { 
//               ...cartItem, 
//               quantity: cartItem.quantity + 1 
//             }
//           : cartItem
//       );
//     }
    
//     // If item doesn't exist, add it to cart
//     return [...prevItems, item];
//   });
// };





  const removeFromCart = (pizzaId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== pizzaId));
  };

  const updateQuantity = (pizzaId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === pizzaId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addToCart, 
        removeFromCart, 
        updateQuantity,
        getCartTotal,
        getCartCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};