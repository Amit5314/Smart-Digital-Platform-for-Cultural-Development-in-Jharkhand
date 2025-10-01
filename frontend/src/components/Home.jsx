import React from 'react'
import './Styling/home.css'
export default function Home(){
  return (
    <div>
      <div className="card">
        <h1>Welcome to Jharkhand — Smart Tourism</h1>
        <p>Discover Netarhat, Betla National Park, Hundru Falls, Deoghar, and more. Use the planner, view immersive previews, buy local crafts, and book verified guides and homestays.</p>
      </div>

      <div className="card">
        <h2>Featured Experiences</h2>
        <ul>
          <li>Netarhat sunrise trekking</li>
          <li>Betla safari & tribal village visit</li>
          <li>Hundru Falls picnic + local craft workshop</li>
        </ul>
      </div>
    </div>
  )
}
