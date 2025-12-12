import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import MenuPage from './components/MenuPage'
import AIAssistant from './components/AIAssistant'
import './App.css'
import { CartProvider } from './context/CartContext';
import CartPage from './pages/CartPage';

function App() {
  return (
    <CartProvider>
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <AIAssistant />
    </div>
    </CartProvider>
  );
}





export default App
