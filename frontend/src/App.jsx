import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ItineraryPlanner from './components/ItineraryPlanner'
// import Chatbot from './components/Chatbot'
import Marketplace from './components/Marketplace'
import MapView from './components/MapView'
import AdminDashboard from './components/AdminDashboard'
import 'leaflet/dist/leaflet.css';

export default function App() {
  const [view, setView] = React.useState('home')
  return (
    <div className="app-root">
      <Navbar setView={setView} />
      <main className="container">
        {view === 'home' && <Home />}
        {view === 'itinerary' && <ItineraryPlanner />}
        {/* {view === 'chat' && <Chatbot />} */}
        {view === 'market' && <Marketplace />}
        {view === 'map' && <MapView />}
        {view === 'admin' && <AdminDashboard />}
      </main>
    </div>
  )
}
