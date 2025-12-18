// // src/pages/CheckoutPage.jsx
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useCart } from '../context/CartContext';
// import { FaArrowLeft } from 'react-icons/fa';
// import { sendTelegramMessage } from '../services/telegramService';
// import '../styles/CheckoutPage.css';

// export default function CheckoutPage() {
//   const { cart, getCartTotal } = useCart();
//   const navigate = useNavigate();
  
//   // Redirect to menu if cart is empty
//   useEffect(() => {
//     if (cart.length === 0) {
//       navigate('/menu');
//     }
//   }, [cart, navigate]);
  
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     address: '',
//     notes: ''
//   });


//   const CheckoutForm = () => {
//   const { cart, clearCart } = useCart();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const handleSubmit = async (formData) => {
//     setIsSubmitting(true);
    
//     const orderDetails = {
//       id: `ORD-${Date.now()}`,
//       customerName: formData.name,
//       phone: formData.phone,
//       address: formData.address,
//       items: cart.map(item => ({
//         name: item.name,
//         quantity: item.quantity,
//         price: item.price,
//       })),
//       total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
//       paymentMethod: formData.paymentMethod,
//       status: 'Received',
//       timestamp: new Date().toISOString(),
//     };
//     try {
//       // 1. First save order to your database (implement this)
//       // await saveOrderToDatabase(orderDetails);
      
//       // 2. Send notification to Telegram
//       await sendTelegramMessage(orderDetails);
      
//       // 3. Clear cart and show success message
//       clearCart();
//       navigate('/order-confirmation', { 
//         state: { orderId: orderDetails.id } 
//       });
      
//     } catch (error) {
//       console.error('Error placing order:', error);
//       // Show error message to user
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
//   // ... rest of your component

//   };



//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically send the order to your backend
//     console.log('Order submitted:', { ...formData, items: cart, total: getCartTotal() });
//     // Navigate to order confirmation or payment page
//     // navigate('/order-confirmation');
//   };

//   return (
//     <div className="checkout-page">
//       <div className="checkout-header">
//         <button className="back-button" onClick={() => navigate(-1)}>
//           <FaArrowLeft className="back-icon" /> Back to Menu
//         </button>
//         <h1>Checkout</h1>
//       </div>
//       <div className="checkout-container">
//         <form onSubmit={handleSubmit} className="checkout-form">
//           <div className="form-group">
//             <label htmlFor="name">Full Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               placeholder="Enter your full name"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="phone">Phone Number</label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               placeholder="Enter your phone number"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="address">Delivery Address</label>
//             <textarea
//               id="address"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               required
//               placeholder="Enter your complete delivery address"
//               rows="3"
//             />
//           </div>
// {/* 
//           <div className="form-group">
//             <label htmlFor="notes">Order Notes (Optional)</label>
//             <textarea
//               id="notes"
//               name="notes"
//               value={formData.notes}
//               onChange={handleChange}
//               placeholder="Any special instructions for delivery"
//               rows="2"
//             />
//           </div> */}

//           <div className="order-summary">
//             <h3>Order Summary</h3>
//             {cart.map(item => (
//               <div key={item.id} className="order-item">
//                 <span>{item.name} × {item.quantity}</span>
//                 <span>₹{item.price * item.quantity}</span>
//               </div>
//             ))}
//             <div className="order-total">
//               <span>Total</span>
//               <span>₹{getCartTotal()}</span>
//             </div>
//           </div>

//           <button type="submit" className="place-order-btn">
//             Place Order
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useCart } from '../context/CartContext';
// import { sendTelegramMessage } from '../services/telegramService';
// import '../styles/CheckoutPage.css';


// const CheckoutPage = () => {
//   const navigate = useNavigate();
//   const { cart, clearCart } = useCart();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     address: '',
//     paymentMethod: 'cash' // Default payment method
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     const orderDetails = {
//       id: `ORD-${Date.now()}`,
//       customerName: formData.name,
//       phone: formData.phone,
//       address: formData.address,
//       items: cart.map(item => ({
//         name: item.name,
//         quantity: item.quantity,
//         price: item.price,
//       })),
//       total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
//       paymentMethod: formData.paymentMethod,
//       status: 'Received',
//       timestamp: new Date().toISOString(),
//     };

//     try {
//       // 1. First save order to your database (you'll need to implement this)
//       // await saveOrderToDatabase(orderDetails);
      
//       // 2. Send notification to Telegram
//       await sendTelegramMessage(orderDetails);
      
//       // 3. Clear cart and show success message
//       clearCart();
//       navigate('/order-confirmation', { 
//         state: { orderId: orderDetails.id } 
//       });
      
//     } catch (error) {
//       console.error('Error placing order:', error);
//       // You might want to show an error message to the user here
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="checkout-page">
//       <h1>Checkout</h1>
//       <form onSubmit={handleSubmit} className="checkout-form">
//         <div className="form-group">
//           <label>Full Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Phone Number</label>
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Delivery Address</label>
//           <textarea
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Payment Method</label>
//           <select
//             name="paymentMethod"
//             value={formData.paymentMethod}
//             onChange={handleChange}
//           >
//             <option value="cash">Cash on Delivery</option>
//             <option value="online">Online Payment</option>
//           </select>
//         </div>

//         <div className="order-summary">
//           <h3>Order Summary</h3>
//           {cart.map(item => (
//             <div key={item.id} className="order-item">
//               <span>{item.name} x {item.quantity}</span>
//               <span>₹{item.price * item.quantity}</span>
//             </div>
//           ))}
//           <div className="order-total">
//             <strong>Total:</strong>
//             <strong>₹{cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)}</strong>
//           </div>
//         </div>

//         <button 
//           type="submit" 
//           className="place-order-btn"
//           disabled={isSubmitting || cart.length === 0}
//         >
//           {isSubmitting ? 'Placing Order...' : 'Place Order'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CheckoutPage;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useCart } from '../context/CartContext';
// import { sendTelegramMessage } from '../services/telegramService';
// import '../styles/CheckoutPage.css';

// const CheckoutPage = () => {
//   const navigate = useNavigate();
//   const { cart, clearCart } = useCart();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [orderPlaced, setOrderPlaced] = useState(false);
//   const [orderId, setOrderId] = useState('');
  
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     address: '',
//     paymentMethod: 'cash'
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     const newOrderId = `ORD-${Date.now()}`;
//     const orderDetails = {
//       id: newOrderId,
//       customerName: formData.name,
//       phone: formData.phone,
//       address: formData.address,
//       items: cart.map(item => ({
//         name: item.name,
//         quantity: item.quantity,
//         price: item.price,
//       })),
//       total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
//       paymentMethod: formData.paymentMethod,
//       status: 'Received',
//       timestamp: new Date().toISOString(),
//     };

//     try {
//       await sendTelegramMessage(orderDetails);
//       setOrderId(newOrderId);
//       setOrderPlaced(true);
//       clearCart();
//     } catch (error) {
//       console.error('Error placing order:', error);
//       // Show error message to user
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Success animation styles
//   const successCheckmark = `
//     @keyframes checkmark {
//       0% { transform: scale(0.8); opacity: 0; }
//       50% { transform: scale(1.2); opacity: 1; }
//       100% { transform: scale(1); }
//     }

//     .success-animation {
//       text-align: center;
//       padding: 2rem;
//     }

//     .checkmark {
//       width: 80px;
//       height: 80px;
//       border-radius: 50%;
//       display: block;
//       stroke-width: 4;
//       stroke: #4CAF50;
//       stroke-miterlimit: 10;
//       margin: 0 auto 2rem;
//       box-shadow: inset 0px 0px 0px #4CAF50;
//       animation: checkmark 0.6s ease-in-out;
//     }

//     .checkmark__circle {
//       stroke-dasharray: 166;
//       stroke-dashoffset: 166;
//       stroke-width: 4;
//       stroke-miterlimit: 10;
//       stroke: #4CAF50;
//       fill: none;
//       animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
//     }

//     .checkmark__check {
//       transform-origin: 50% 50%;
//       stroke-dasharray: 48;
//       stroke-dashoffset: 48;
//       animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
//     }

//     @keyframes stroke {
//       100% { stroke-dashoffset: 0; }
//     }
//   `;

//   if (orderPlaced) {
//     return (
//       <div className="checkout-page">
//         <div className="success-animation">
//           <style>{successCheckmark}</style>
//           <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
//             <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
//             <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
//           </svg>
//           <h2>Order Placed Successfully!</h2>
//           <p>Your order ID is: <strong>{orderId}</strong></p>
//           <p>We've sent the details to your phone.</p>
//           <button 
//             onClick={() => navigate('/')}
//             style={{
//               marginTop: '2rem',
//               padding: '0.75rem 2rem',
//               backgroundColor: '#4CAF50',
//               color: 'white',
//               border: 'none',
//               borderRadius: '4px',
//               fontSize: '1rem',
//               cursor: 'pointer',
//               transition: 'background-color 0.3s'
//             }}
//           >
//             Back to Home
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="checkout-page">
//       <h1>Checkout</h1>
//       <form onSubmit={handleSubmit} className="checkout-form">
//         <div className="form-group">
//           <label>Full Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Phone Number</label>
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Delivery Address</label>
//           <textarea
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Payment Method</label>
//           <select
//             name="paymentMethod"
//             value={formData.paymentMethod}
//             onChange={handleChange}
//           >
//             <option value="cash">Cash on Delivery</option>
//             <option value="online">Online Payment</option>
//           </select>
//         </div>

//         <div className="order-summary">
//           <h3>Order Summary</h3>
//           {cart.map(item => (
//             <div key={item.id} className="order-item">
//               <span>{item.name} x {item.quantity}</span>
//               <span>₹{item.price * item.quantity}</span>
//             </div>
//           ))}
//           <div className="order-total">
//             <strong>Total:</strong>
//             <strong>₹{cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)}</strong>
//           </div>
//         </div>

//         <button 
//           type="submit" 
//           className="place-order-btn"
//           disabled={isSubmitting || cart.length === 0}
//         >
//           {isSubmitting ? 'Placing Order...' : 'Place Order'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CheckoutPage;





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { sendTelegramMessage } from '../services/telegramService';
import '../styles/CheckoutPage.css';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [errors, setErrors] = useState({
    phone: ''
  });
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    paymentMethod: 'cash'
  });

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    if (!phone) return 'Phone number is required';
    if (!phoneRegex.test(phone)) return 'Please enter a valid 10-digit phone number';
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Only allow numbers for phone field
    if (name === 'phone' && value !== '' && !/^\d*$/.test(value)) {
      return; // Prevent non-numeric input
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validate phone number on change
    if (name === 'phone') {
      setErrors(prev => ({
        ...prev,
        phone: validatePhone(value)
      }));
    }
  };

// Add this right after the component's state declarations
const successCheckmark = `
  @keyframes checkmark {
    0% { transform: scale(0.8); opacity: 0; }
    50% { transform: scale(1.2); opacity: 1; }
    100% { transform: scale(1); }
  }

  .success-animation {
    text-align: center;
    padding: 2rem;
  }

  .checkmark {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: block;
    stroke-width: 4;
    stroke: #4CAF50;
    stroke-miterlimit: 10;
    margin: 0 auto 2rem;
    box-shadow: inset 0px 0px 0px #4CAF50;
    animation: checkmark 0.6s ease-in-out;
  }

  .checkmark__circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 4;
    stroke-miterlimit: 10;
    stroke: #4CAF50;
    fill: none;
    animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
  }

  .checkmark__check {
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
  }

  @keyframes stroke {
    100% { stroke-dashoffset: 0; }
  }
`;




  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate phone number before submission
    const phoneError = validatePhone(formData.phone);
    if (phoneError) {
      setErrors(prev => ({ ...prev, phone: phoneError }));
      return;
    }

    setIsSubmitting(true);
    
    const newOrderId = `ORD-${Date.now()}`;
    const orderDetails = {
      id: newOrderId,
      customerName: formData.name,
      phone: formData.phone,
      address: formData.address,
      items: cart.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
      paymentMethod: formData.paymentMethod,
      status: 'Received',
      timestamp: new Date().toISOString(),
    };

    try {
      await sendTelegramMessage(orderDetails);
      setOrderId(newOrderId);
      setOrderPlaced(true);
      clearCart();
    } catch (error) {
      console.error('Error placing order:', error);
      // Show error message to user
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success animation styles (keep your existing successCheckmark constant)

  if (orderPlaced) {
    return (
      <div className="checkout-page">
        <div className="success-animation">
          <style>{successCheckmark}</style>
          <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
            <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
          </svg>
          <h2>Order Placed Successfully!</h2>
          <p>Your order ID is: <strong>{orderId}</strong></p>
          <button 
            onClick={() => navigate('/')}
            style={{
              marginTop: '2rem',
              padding: '0.75rem 2rem',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            maxLength={10}
            className={errors.phone ? 'input-error' : ''}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label>Delivery Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Payment Method</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="cash">Cash on Delivery</option>
            <option value="online">Online Payment</option>
          </select>
        </div>

        <div className="order-summary">
          <h3>Order Summary</h3>
          {cart.map(item => (
            <div key={item.id} className="order-item">
              <span>{item.name} x {item.quantity}</span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}
          <div className="order-total">
            <strong>Total:</strong>
            <strong>₹{cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)}</strong>
          </div>
        </div>

        <button 
          type="submit" 
          className="place-order-btn"
          disabled={isSubmitting || cart.length === 0 || errors.phone}
        >
          {isSubmitting ? 'Placing Order...' : 'Place Order'}
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;