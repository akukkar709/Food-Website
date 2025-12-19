import { useNavigate } from 'react-router-dom';
import '../styles/Header.css'
export default function Header() {
    const navigate = useNavigate();
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo"  onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <h1>🍕 Pizzwala</h1>
        </div>
        <nav className="nav-menu">
          <a href="#products" className="nav-link">Food Items</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        <div className="header-actions">
          <button 
            className="btn btn-order"
            onClick={() => navigate('/menu')}
          >
            Order Now
          </button>
        </div>
      </div>
    </header>
  )
}