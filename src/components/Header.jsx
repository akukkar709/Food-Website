import { useState, useEffect } from 'react'
import LoginModal from './LoginModal'
import SignupModal from './SignupModal'
import OrdersPage from './OrdersPage'
import '../styles/Header.css'

export default function Header() {
  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [showOrders, setShowOrders] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('currentUser')
    if (user) {
      setCurrentUser(JSON.parse(user))
    }
  }, [])

  const handleLoginClick = () => {
    setShowSignup(false)
    setShowLogin(true)
    setShowMenu(false)
  }

  const handleSignupClick = () => {
    setShowLogin(false)
    setShowSignup(true)
    setShowMenu(false)
  }

  const handleCloseLogin = () => setShowLogin(false)
  
  const handleCloseSignup = () => {
    setShowSignup(false)
    // Refresh user data after signup
    const user = localStorage.getItem('currentUser')
    if (user) {
      setCurrentUser(JSON.parse(user))
    }
  }

  const switchToSignup = () => {
    setShowLogin(false)
    setShowSignup(true)
  }

  const switchToLogin = () => {
    setShowSignup(false)
    setShowLogin(true)
  }

  const toggleMenu = () => setShowMenu(!showMenu)
  
  const toggleProfileMenu = () => setShowProfileMenu(!showProfileMenu)

  const handleLogout = () => {
    localStorage.removeItem('currentUser')
    setCurrentUser(null)
    setShowProfileMenu(false)
  }

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <h1>🍕 Pizzwala</h1>
          </div>
          <nav className="nav-menu">
            <a href="#home" className="nav-link">Home</a>
            <a href="#products" className="nav-link">Products</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <nav className="nav-buttons">
            <button 
              className="btn btn-help"
              onClick={() => alert('Help center - Coming soon!')}
              title="Get Help"
            >
              <span className="help-icon">?</span> Help
            </button>
            <button 
              className="btn btn-order"
              onClick={() => alert('Order Now clicked!')}
            >
              Order Now
            </button>
            
            {currentUser ? (
              <div className="profile-container">
                <button 
                  className="profile-btn"
                  onClick={toggleProfileMenu}
                  title={currentUser.name}
                >
                  <span className="profile-avatar">👤</span>
                  <span className="profile-name">{currentUser.name.split(' ')[0]}</span>
                </button>
                {showProfileMenu && (
                  <div className="profile-menu">
                    <div className="profile-header">
                      <p className="profile-user-name">{currentUser.name}</p>
                    </div>
                    
                    <button 
                      className="profile-menu-item"
                      onClick={() => {
                        alert('Profile page - Coming soon!')
                        setShowProfileMenu(false)
                      }}
                    >
                       Profile
                    </button>
                    
                    <button 
                      className="profile-menu-item"
                      onClick={() => {
                        setShowOrders(true)
                        setShowProfileMenu(false)
                      }}
                    >
                       Orders
                    </button>
                    
                    <button 
                      className="profile-menu-item"
                      onClick={() => {
                        alert('Favorites - Coming soon!')
                        setShowProfileMenu(false)
                      }}
                    >
                      Favorites
                    </button>
                    
                    <div className="profile-divider"></div>
                    
                    <button 
                      className="profile-menu-item logout-item"
                      onClick={handleLogout}
                    >
                    Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="menu-container">
                <button 
                  className="btn btn-menu"
                  onClick={toggleMenu}
                  title="Menu"
                >
                  ☰
                </button>
                {showMenu && (
                  <div className="dropdown-menu">
                    <button 
                      className="dropdown-item"
                      onClick={handleLoginClick}
                    >
                      Login
                    </button>
                    <button 
                      className="dropdown-item"
                      onClick={handleSignupClick}
                    >
                      Register
                    </button>
                  </div>
                )}
              </div>
            )}
          </nav>
        </div>
      </header>

      {showLogin && (
        <LoginModal 
          onClose={handleCloseLogin}
          onSwitchToSignup={switchToSignup}
        />
      )}

      {showSignup && (
        <SignupModal 
          onClose={handleCloseSignup}
          onSwitchToLogin={switchToLogin}
        />
      )}

      {showOrders && currentUser && (
        <OrdersPage 
          onClose={() => setShowOrders(false)}
          userName={currentUser.name}
        />
      )}
    </>
  )
}
