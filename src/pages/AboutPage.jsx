import React from 'react';
import { Link } from 'react-router-dom';
import { FaPizzaSlice, FaHeart, FaTruck, FaAward, FaClock, FaUsers } from 'react-icons/fa';
import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Pizzawala</h1>
          <p>Delivering delicious pizzas with love and passion since 2020</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <div className="container">
          <h2>Our Story</h2>
          <div className="story-content">
            <div className="story-text">
              <p>
                Welcome to Pizzawala, where every slice tells a story of passion, quality, and love for food. 
                What started as a small dream in 2020 has grown into a beloved pizza destination in the heart of Punjab.
              </p>
              <p>
                Founded by a student entrepreneur with a vision to bring authentic, delicious pizzas to the community, 
                Pizzawala has become synonymous with quality ingredients, innovative recipes, and exceptional customer service.
              </p>
              <p>
                Located opposite CGC-Landran in Sahibzada Ajit Singh Nagar, we're proud to serve our community with 
                the finest pizzas made from fresh, locally-sourced ingredients.
              </p>
            </div>
            <div className="story-image">
              <FaPizzaSlice className="story-icon" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="our-values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <FaHeart className="value-icon" />
              <h3>Made with Love</h3>
              <p>Every pizza is crafted with passion and attention to detail, ensuring the perfect balance of flavors.</p>
            </div>
            <div className="value-card">
              <FaAward className="value-icon" />
              <h3>Quality First</h3>
              <p>We use only the freshest ingredients and highest quality products to create our delicious pizzas.</p>
            </div>
            <div className="value-card">
              <FaTruck className="value-icon" />
              <h3>Fast Delivery</h3>
              <p>Quick and reliable delivery service to bring hot, fresh pizzas right to your doorstep.</p>
            </div>
            <div className="value-card">
              <FaUsers className="value-icon" />
              <h3>Customer Focus</h3>
              <p>Your satisfaction is our priority. We go above and beyond to ensure every customer has a great experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Specialties */}
      <section className="our-specialties">
        <div className="container">
          <h2>Our Specialties</h2>
          <div className="specialties-content">
            <div className="specialty-item">
              <h3>Authentic Recipes</h3>
              <p>Our recipes are carefully crafted to bring you the authentic taste of Italian pizza with a local twist.</p>
            </div>
            <div className="specialty-item">
              <h3>Fresh Ingredients</h3>
              <p>We source our ingredients locally to ensure freshness and support our community.</p>
            </div>
            <div className="specialty-item">
              <h3>Innovative Flavors</h3>
              <p>From classic margherita to unique fusion pizzas, we have something for every taste preference.</p>
            </div>
            <div className="specialty-item">
              <h3>Vegetarian & Non-Vegetarian</h3>
              <p>Extensive menu catering to both vegetarian and non-vegetarian preferences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>5000+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Pizza Varieties</p>
            </div>
            <div className="stat-item">
              <h3>4.8★</h3>
              <p>Average Rating</p>
            </div>
            <div className="stat-item">
              <h3>30 mins</h3>
              <p>Average Delivery Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <div className="container">
          <h2>Visit Us Today!</h2>
          <p>Experience the best pizza in town. Located opposite CGC-Landran, we're ready to serve you.</p>
          <div className="cta-buttons">
            <Link to="/menu" className="btn btn-primary">Order Now</Link>
            <a href="tel:+919877398270" className="btn btn-secondary">Call Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
