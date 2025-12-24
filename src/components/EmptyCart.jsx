// src/components/EmptyCart.jsx
import { Link } from 'react-router-dom';
import { FaUtensils, FaSmileBeam, FaShoppingBag } from 'react-icons/fa';
import '../styles/EmptyCart.css';

export default function EmptyCart() {
  return (
    <div className="empty-cart-container">
      <div className="empty-cart-content">
        <div className="empty-cart-illustration">
          <div className="plate">
            <div className="pizza">
              <div className="pizza__top"></div>
              <div className="pizza__top pizza__top--shadow"></div>
              <div className="pizza__top pizza__top--cheese"></div>
              <div className="pizza__top pizza__top--sauce"></div>
              <div className="pizza__topping pizza__topping--1"></div>
              <div className="pizza__topping pizza__topping--2"></div>
              <div className="pizza__topping pizza__topping--3"></div>
              <div className="pizza__topping pizza__topping--4"></div>
            </div>
            <div className="plate__shadow"></div>
          </div>
          <div className="cart-icon">
            <FaShoppingBag className="cart-bag" />
          </div>
        </div>
        
        <div className="empty-cart-text">
          <h2>Your Cart is Empty <FaSmileBeam className="smile-icon" /></h2>
          <p>Looks like you haven't added any delicious food yet!</p>
          <p className="suggestion">Hungry? Let's fix that!</p>
        </div>
        
        <Link to="/menu" className="browse-menu-btn">
          <FaUtensils className="menu-icon" />
          Explore Our Tasty Menu
        </Link>
        
        <div className="empty-cart-features">
          <div className="feature">
            <div className="feature-icon">🚚</div>
            <span>Fast Delivery</span>
          </div>
          <div className="feature">
            <div className="feature-icon">🍕</div>
            <span>100% Delicious</span>
          </div>
          <div className="feature">
            <div className="feature-icon">👨‍🍳</div>
            <span>Freshly Made</span>
          </div>
        </div>
      </div>
    </div>
  );
}