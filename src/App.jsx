import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import MenuPage from './components/MenuPage'
import AIAssistant from './components/AIAssistant'
import './App.css'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
      <AIAssistant />
    </div>
  )
}

export default App
