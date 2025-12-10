import '../styles/Hero.css'

export default function Hero({ onOrderNow, onBrowse }) {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Step into Taste with <span className="brand-name">Pizzwala</span>
          </h1>
          <p className="hero-description">
            Discover trendy, delicious, and affordable pizzas that matches your taste.
          </p>
          <div className="hero-buttons">
            <button className="btn-order-now" onClick={onOrderNow}>
              Order Now on WhatsApp →
            </button>
            <button className="btn-browse" onClick={onBrowse}>
              Browse Collection
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=781&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Delicious Tandoori Chicken Pizza"
            className="pizza-image"
          />
        </div>
      </div>
    </section>
  )
}
