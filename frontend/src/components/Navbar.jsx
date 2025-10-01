import React from 'react'
import './Styling/navbar.css'
// import logo from './Images/logo.png'

export default function Navbar({ setView }) {
  return (
    <nav className="navbar">
      {/* <img src={logo} alt="Jharkhand Tourism" className="logo" /> */}

      <div className="nav-buttons">
        <button onClick={() => setView('home')}>Home</button>
        <button onClick={() => setView('itinerary')}>Itinerary Planner</button>
        <button onClick={() => setView('map')}>Map</button>
        <button onClick={() => setView('market')}>Marketplace</button>
        {/* <button onClick={() => setView('chat')}>Chatbot</button> */}
      </div>

      {/* Admin button on right */}
      <div className="right-section">
        <button className="admin-btn" onClick={() => setView('admin')}>
          Admin Dashboard
        </button>
      </div>
    </nav>
  )
}
