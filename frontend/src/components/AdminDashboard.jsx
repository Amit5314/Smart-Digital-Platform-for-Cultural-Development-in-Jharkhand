import React from 'react'

export default function AdminDashboard(){
  const [stats] = React.useState({visitors:0, bookings:0, feedback:0})
  return (
    <div className="card">
      <h2>Admin Dashboard</h2>
      <div style={{display:'flex',gap:12}}>
        <div className="card">Visitors: {stats.visitors}</div>
        <div className="card">Bookings: {stats.bookings}</div>
        <div className="card">Feedback: {stats.feedback}</div>
      </div>
    </div>
  )
}
