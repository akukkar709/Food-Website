import { useState } from 'react'
import '../styles/AIAssistant.css'

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! 👋 I'm your Pizzwala AI Assistant. How can I help you today? You can ask me about our pizzas, ingredients, delivery, or anything food-related!",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const foodQueries = {
    'vegetarian': 'We have delicious vegetarian pizzas like Margherita, Veggie Supreme, and Garden Fresh. All made with fresh vegetables and mozzarella cheese!',
    'non-vegetarian': 'Our non-veg pizzas include Pepperoni Feast, Chicken Tikka, Meat Lovers, and BBQ Chicken. All topped with premium quality meat!',
    'price': 'Our pizzas range from ₹299 for small to ₹599 for large. We also have combo offers and discounts!',
    'delivery': 'We deliver within 30-45 minutes in your area. Free delivery on orders above ₹500!',
    'ingredients': 'We use fresh, high-quality ingredients including imported mozzarella, fresh vegetables, and premium meats. No preservatives!',
    'special': 'Try our Special Pizzwala Pizza - a unique blend of paneer, corn, and our secret sauce. It\'s a customer favorite!',
    'vegan': 'Yes! We offer vegan pizzas with dairy-free cheese and fresh vegetable toppings.',
    'spicy': 'We have spicy options like Chilli Garlic, Tandoori Chicken, and Spicy Veggie. You can customize the spice level!',
    'default': 'I can help you with information about our pizzas, prices, delivery, ingredients, and more. What would you like to know?'
  }

  const getAIResponse = (query) => {
    const lowerQuery = query.toLowerCase()
    
    for (const [key, response] of Object.entries(foodQueries)) {
      if (lowerQuery.includes(key)) {
        return response
      }
    }
    
    return foodQueries.default
  }

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages([...messages, userMessage])
    setInputValue('')
    setIsLoading(true)

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        text: getAIResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiResponse])
      setIsLoading(false)
    }, 500)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* AI Assistant Button */}
      <button 
        className="ai-assistant-btn"
        onClick={toggleChat}
        title="AI Assistant"
      >
        <span className="ai-icon">🤖</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="ai-chat-window">
          <div className="chat-header">
            <h3>🤖 Pizzwala AI Assistant</h3>
            <button 
              className="close-btn"
              onClick={toggleChat}
            >
              ✕
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`message ${message.sender}`}
              >
                <div className="message-content">
                  {message.text}
                </div>
                <span className="message-time">
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </span>
              </div>
            ))}
            {isLoading && (
              <div className="message bot">
                <div className="message-content">
                  <span className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="chat-input-area">
            <input
              type="text"
              placeholder="Ask about pizzas, prices, delivery..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              className="chat-input"
            />
            <button 
              className="send-btn"
              onClick={handleSendMessage}
              disabled={isLoading || inputValue.trim() === ''}
            >
              ➤
            </button>
          </div>

          <div className="quick-suggestions">
            <button 
              className="suggestion-btn"
              onClick={() => setInputValue('Tell me about vegetarian pizzas')}
            >
              🥬 Vegetarian
            </button>
            <button 
              className="suggestion-btn"
              onClick={() => setInputValue('What are your prices?')}
            >
              💰 Prices
            </button>
            <button 
              className="suggestion-btn"
              onClick={() => setInputValue('Do you deliver?')}
            >
              🚚 Delivery
            </button>
          </div>
        </div>
      )}
    </>
  )
}
