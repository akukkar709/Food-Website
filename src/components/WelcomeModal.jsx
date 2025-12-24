import { useState } from 'react'
import '../styles/WelcomeModal.css'

export default function WelcomeModal({ onRegistrationComplete }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Simulate API call and create user profile
    setTimeout(() => {
      if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
        setError('Please fill in all fields')
        setLoading(false)
      } else if (!formData.email.includes('@')) {
        setError('Please enter a valid email')
        setLoading(false)
      } else if (formData.password.length < 6) {
        setError('Password must be at least 6 characters')
        setLoading(false)
      } else if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match')
        setLoading(false)
      } else {
        // Create user profile
        const userProfile = {
          id: Date.now(),
          name: formData.name,
          email: formData.email,
          password: formData.password,
          createdAt: new Date().toLocaleString()
        }

        // Store user in localStorage
        const existingUsers = JSON.parse(localStorage.getItem('users') || '[]')
        const userExists = existingUsers.some(user => user.email === formData.email)

        if (userExists) {
          setError('Email already registered')
          setLoading(false)
        } else {
          existingUsers.push(userProfile)
          localStorage.setItem('users', JSON.stringify(existingUsers))
          localStorage.setItem('currentUser', JSON.stringify(userProfile))

          console.log('User profile created:', userProfile)
          alert(`Welcome, ${formData.name}! Your account has been created successfully.`)
          onRegistrationComplete()
        }
      }
    }, 300)
  }

  return (
    <div className="welcome-modal-overlay">
      <div className="welcome-modal-content">
        <div className="welcome-header">
          <h2>🍕 Welcome to Pizzwala</h2>
          <p>Join us and enjoy delicious pizzas!</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button 
            type="submit" 
            className="btn-register"
            disabled={loading}
          >
            {loading ? 'Creating account...' : 'Register & Continue'}
          </button>
        </form>

        <div className="welcome-footer">
          <p>By registering, you agree to our Terms of Service and Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}
