import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Hero from './Hero'
import PizzaGallery from './PizzaGallery'

export default function HomePage() {
  const navigate = useNavigate()

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
      <Header />
      <Hero onOrderNow={handleOrderNow} onBrowse={handleBrowse} />
      <PizzaGallery />
      {/* <main className="main-content">
      <h1>Our Specialties</h1>

        <p>Discover our delicious pizza collection</p>
      </main> */}
    </>
  )
}





