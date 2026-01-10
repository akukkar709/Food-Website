import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp, FaTelegram, FaTelegramPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Details */}
        <div className="footer-section" id="footer-contact">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li>
              <FaPhone className="footer-icon" />
              <span>+91 8929292223</span>
            </li>
            {/* <li>
              <FaEnvelope className="footer-icon" />
              <span>info@pizzawala.com</span>
            </li> */}
            <li className="address">
              <FaMapMarkerAlt className="footer-icon" />
              <span>Opposite of CGC-Landran, Sahibzada Ajit Singh Nagar, Punjab-140307</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="quick-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About Us</Link></li>
            {/* <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li> */}
          </ul>
        </div>

        {/* Categories */}
        {/* <div className="footer-section">
          <h3>Categories</h3>
          <ul className="categories">
            <li><Link to="/menu?category=veg-pizzas">Veg Pizzas</Link></li>
            <li><Link to="/menu?category=non-veg-pizzas">Non-Veg Pizzas</Link></li>
            <li><Link to="/menu?category=pasta">Pasta</Link></li>
            <li><Link to="/menu?category=burgers">Burgers</Link></li>
            <li><Link to="/menu?category=garlic-bread">Garlic Bread</Link></li>
            <li><Link to="/menu?category=beverages">Beverages</Link></li>
          </ul>
        </div> */}

        {/* Connect With Us */}
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-links">
           
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
              <FaWhatsapp className="social-icon" />
            </a>

              {/* <a href="https://telegram.com" target="_blank" rel="noopener noreferrer" aria-label="telegram">
              <FaTelegramPlane className="social-icon" />
            </a> */}
            

          </div>
          <div className="newsletter">
            {/* <h4>Subscribe to our newsletter</h4> */}
            {/* <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form> */}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Pizzawala.All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;