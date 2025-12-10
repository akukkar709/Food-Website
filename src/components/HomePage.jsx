import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Hero from './Hero'
import PizzaGallery from './PizzaGallery'
import WelcomeModal from './WelcomeModal'

export default function HomePage() {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const hasRegistered = localStorage.getItem('userRegistered')
    if (!hasRegistered) {
      setShowWelcomeModal(true)
    }
  }, [])

  const handleRegistrationComplete = () => {
    localStorage.setItem('userRegistered', 'true')
    setShowWelcomeModal(false)
  }


  const handleOrderNow = () => {
    navigate('/menu')
  }

  const handleBrowse = () => {
    const gallerySection = document.getElementById('menu-gallery')
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {showWelcomeModal && (
        <WelcomeModal onRegistrationComplete={handleRegistrationComplete} />
      )}
      <Header />
      <Hero onOrderNow={handleOrderNow} onBrowse={handleBrowse} />
      <PizzaGallery />
      <main className="main-content">
        <h1>Our Specialties</h1>
        <p>Discover our delicious pizza collection</p>
      </main>
    </>
  )
}




