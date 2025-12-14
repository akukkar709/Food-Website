// src/pages/CheckoutPage.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaArrowLeft } from 'react-icons/fa';
import '../styles/CheckoutPage.css';

export default function CheckoutPage() {
  const { cart, getCartTotal } = useCart();
  const navigate = useNavigate();
  
  // Redirect to menu if cart is empty
  useEffect(() => {
    if (cart.length === 0) {
      navigate('/menu');
    }
  }, [cart, navigate]);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the order to your backend
    console.log('Order submitted:', { ...formData, items: cart, total: getCartTotal() });
    // Navigate to order confirmation or payment page
    // navigate('/order-confirmation');
  };

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft className="back-icon" /> Back to Menu
        </button>
        <h1>Checkout</h1>
      </div>
      <div className="checkout-container">
        <form onSubmit={handleSubmit} className="checkout-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Delivery Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Enter your complete delivery address"
              rows="3"
            />
          </div>
{/* 
          <div className="form-group">
            <label htmlFor="notes">Order Notes (Optional)</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any special instructions for delivery"
              rows="2"
            />
          </div> */}

          <div className="order-summary">
            <h3>Order Summary</h3>
            {cart.map(item => (
              <div key={item.id} className="order-item">
                <span>{item.name} × {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
            <div className="order-total">
              <span>Total</span>
              <span>₹{getCartTotal()}</span>
            </div>
          </div>

          <button type="submit" className="place-order-btn">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}



