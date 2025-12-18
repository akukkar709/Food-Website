import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AIAssistant from './components/AIAssistant';
import { NotificationProvider } from './context/NotificationContext';
import './App.css';


function App() {
  return (
    <NotificationProvider>
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
    </NotificationProvider>
  );
}

export default App;
