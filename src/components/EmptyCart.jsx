// // src/components/EmptyCart.jsx
// import { Link } from 'react-router-dom';
// import { FaUtensils, FaSmileBeam, FaShoppingBag, FaShippingFast, FaPizzaSlice, FaUserTie} from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import '../styles/EmptyCart.css';

// export default function EmptyCart() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1,
//       transition: { 
//         staggerChildren: 0.3,
//         delayChildren: 0.2 
//       } 
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { 
//       y: 0, 
//       opacity: 1,
//       transition: { type: 'spring', stiffness: 100 }
//     }
//   };

//   return (
//     <motion.div 
//       className="empty-cart-container"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <div className="empty-cart-content">
//         <motion.div 
//           className="empty-cart-illustration"
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
//         >
//           <div className="plate">
//             <div className="pizza">
//               <div className="pizza__top"></div>
//               <div className="pizza__top pizza__top--shadow"></div>
//               <div className="pizza__top pizza__top--cheese"></div>
//               <div className="pizza__top pizza__top--sauce"></div>
//               <div className="pizza__topping pizza__topping--1"></div>
//               <div className="pizza__topping pizza__topping--2"></div>
//               <div className="pizza__topping pizza__topping--3"></div>
//               <div className="pizza__topping pizza__topping--4"></div>
//               <div className="pizza__topping pizza__topping--5"></div>
//             </div>
//             <div className="plate__shadow"></div>
//           </div>
//           <div className="cart-icon">
//             <FaShoppingBag className="cart-bag" />
//           </div>
//         </motion.div>
        
//         <motion.div 
//           className="empty-cart-text"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <motion.h2 variants={itemVariants}>
//             Your Cart is Empty <FaSmileBeam className="smile-icon" />
//           </motion.h2>
//           <motion.p variants={itemVariants} className="subtitle">
//             Looks like you haven't added any delicious food yet!
//           </motion.p>
//           <motion.p variants={itemVariants} className="suggestion">
//             Hungry? Let's fix that with our mouth-watering menu!
//           </motion.p>
//         </motion.div>
        
//         <motion.div variants={itemVariants} style={{ margin: '2rem 0' }}>
//           <Link to="/menu" className="browse-menu-btn">
//             <FaUtensils className="menu-icon" />
//             Explore Our Tasty Menu
//           </Link>
//         </motion.div>
        
//         <motion.div 
//           className="empty-cart-features"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <motion.div className="feature" variants={itemVariants}>
//             <div className="feature-icon">
//               <FaShippingFast />
//             </div>
//             <span>Fast Delivery</span>
//           </motion.div>
//           <motion.div className="feature" variants={itemVariants}>
//             <div className="feature-icon">
//               <FaPizzaSlice />
//             </div>
//             <span>100% Delicious</span>
//           </motion.div>
//           <motion.div className="feature" variants={itemVariants}>
//             <div className="feature-icon">
//               <FaChefHat />
//             </div>
//             <span>Freshly Made</span>
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// }


// src/components/EmptyCart.jsx
import { Link } from 'react-router-dom';
import { FaUtensils, FaShoppingBag, FaPizzaSlice, FaTruck, FaSmileBeam,FaUserTie } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../styles/EmptyCart.css';

export default function EmptyCart() {
  return (
    <motion.div 
      className="empty-cart-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="empty-cart-card">
        <div className="cart-icon-container">
          <div className="cart-icon-circle">
            <FaShoppingBag className="cart-icon" />
          </div>
        </div>

        <motion.div 
          className="empty-cart-content"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2>Your Cart is Empty</h2>
          <p className="empty-message">Looks like you haven't added anything to your cart yet</p>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link to="/menu" className="browse-btn">
              <FaUtensils className="btn-icon" />
              Browse Our Delicious Menu
            </Link>
          </motion.div>
        </motion.div>

        <div className="features-grid">
          <motion.div 
            className="feature-card"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="feature-icon">
              <FaTruck />
            </div>
            <h4>Fast Delivery</h4>
            <p>Quick and reliable delivery to your doorstep</p>
          </motion.div>

          <motion.div 
            className="feature-card"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="feature-icon">
              <FaPizzaSlice />
            </div>
            <h4>Fresh Ingredients</h4>
            <p>100% fresh and high-quality ingredients</p>
          </motion.div>

          <motion.div 
            className="feature-card"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="feature-icon">
              <FaSmileBeam />
            </div>
            <h4>Satisfaction</h4>
            <p>100% satisfaction guaranteed</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}