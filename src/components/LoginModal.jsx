import { useState } from 'react'
import '../styles/Modal.css'

export default function LoginModal({ onClose, onSwitchToSignup }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Simulate API call and authenticate user
    setTimeout(() => {
      if (!email || !password) {
        setError('Please fill in all fields')
        setLoading(false)
      } else if (!email.includes('@')) {
        setError('Please enter a valid email')
        setLoading(false)
      } else {
        // Check user credentials against stored profiles
        const users = JSON.parse(localStorage.getItem('users') || '[]')
        const user = users.find(u => u.email === email && u.password === password)

        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user))
          console.log('Login successful:', user)
          alert(`Welcome back, ${user.name}!`)
          onClose()
        } else {
          setError('Invalid email or password')
          setLoading(false)
        }
      }
    }, 300)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <h2>Login</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="modal-footer">
          <p>Don't have an account? 
            <button 
              className="link-button"
              onClick={onSwitchToSignup}
            >
              Sign up here
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
