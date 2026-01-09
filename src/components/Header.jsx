import { useNavigate } from 'react-router-dom';
import '../styles/Header.css'
export default function Header() {
    const navigate = useNavigate();
    
    const handleContactClick = (e) => {
      e.preventDefault();
      const footerContact = document.getElementById('footer-contact');
      if (footerContact) {
        footerContact.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Add highlight effect
        footerContact.classList.add('highlight-contact');
        setTimeout(() => {
          footerContact.classList.remove('highlight-contact');
        }, 2000);
      }
    };

    const handleAboutClick = (e) => {
      e.preventDefault();
      navigate('/about');
    };

    return (
    <header className="header">
      <div className="header-container">
        <div className="logo"  onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <h1>🍕 PizzaGenie</h1>
        </div>
        <nav className="nav-menu">
          <a href="#products" className="nav-link">Food Items</a>
          <a href="#about" className="nav-link" onClick={handleAboutClick}>About</a>
          <a href="#contact" className="nav-link" onClick={handleContactClick}>Contact</a>
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