import { useState } from 'react'
import '../styles/OrdersPage.css'

export default function OrdersPage({ onClose, userName }) {
  const [activeTab, setActiveTab] = useState('orders')
  const [orders] = useState([])

  const menuItems = [
    { id: 'orders', label: 'Orders' },
    { id: 'ongoing', label: 'Ongoing One'},
    { id: 'favorites', label: 'Favourites'},
    { id: 'payments', label: 'Payments' },
    { id: 'addresses', label: 'Addresses'},
    { id: 'settings', label: 'Settings' },
  ]

  return (
    <div className="orders-overlay">
      <div className="orders-container">
        {/* Header */}
        <div className="orders-header">
          <div className="header-content">
            <h2>{userName}</h2>
            <p>user@example.com</p>
          </div>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="orders-content">
          {/* Sidebar */}
          <aside className="orders-sidebar">
            {menuItems.map(item => (
              <button
                key={item.id}
                className={`sidebar-item ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => setActiveTab(item.id)}
              >
                <span className="sidebar-icon">{item.icon}</span>
                <span className="sidebar-label">{item.label}</span>
              </button>
            ))}
          </aside>

          {/* Main Content */}
          <main className="orders-main">
            {activeTab === 'orders' && (
              <div className="orders-section">
                <h3>Past Orders</h3>
                <div className="orders-list">
                  {orders.length > 0 ? (
                    orders.map(order => (
                      <div key={order.id} className="order-card">
                        <div className="order-header">
                          <h4>{order.name}</h4>
                          <span className="order-date">{order.date}</span>
                        </div>

                        <div className="order-body">
                          <div className="order-image">
                            <img src={order.image} alt={order.name} />
                          </div>

                          <div className="order-details">
                            <p className="order-items">{order.items}</p>
                            <p className="order-price">{order.price}</p>
                            <p className="order-quantity">Quantity: {order.quantity}</p>
                          </div>

                          <div className="order-actions">
                            <button className="btn-reorder">REORDER</button>
                            <button className="btn-help">HELP</button>
                          </div>
                        </div>

                        <div className="order-footer">
                          <button className="btn-show-more">SHOW MORE DETAILS</button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="no-orders">
                      <p>No orders yet</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'ongoing' && (
              <div className="section-content">
                <h3>Ongoing Orders</h3>
                <p>No ongoing orders at the moment</p>
              </div>
            )}

            {activeTab === 'favorites' && (
              <div className="section-content">
                <h3>Favourites</h3>
                <p>No favorites added yet</p>
              </div>
            )}

            {activeTab === 'payments' && (
              <div className="section-content">
                <h3>Payments</h3>
                <p>Payment methods will appear here</p>
              </div>
            )}

            {activeTab === 'addresses' && (
              <div className="section-content">
                <h3>Addresses</h3>
                <p>Saved addresses will appear here</p>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="section-content">
                <h3>Settings</h3>
                <p>Settings options will appear here</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
