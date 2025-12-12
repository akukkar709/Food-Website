import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AIAssistant from './components/AIAssistant';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <AIAssistant />
      </div>
    </CartProvider>
  );
}

export default App;
