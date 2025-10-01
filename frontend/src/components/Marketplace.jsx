import React from 'react'

const sampleItems = [
  {id:1,name:'Tribal Handloom Shawl',price:1200,vendor:'Chotanagpur Crafts'},
  {id:2,name:'Terracotta Pot',price:350,vendor:'Hillside Artisans'}
]

export default function Marketplace(){
  return (
    <div className="card">
      <h2>Local Marketplace</h2>
      <ul>
        {sampleItems.map(i=> (
          <li key={i.id}><strong>{i.name}</strong> — ₹{i.price} <br/><small>by {i.vendor}</small></li>
        ))}
      </ul>
    </div>
  )
}
