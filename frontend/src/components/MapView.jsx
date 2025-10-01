// import React from 'react'

// export default function MapView(){
//   return (
//     <div className="card">
//       <h2>Interactive Map (placeholder)</h2>
//       <div style={{height:300, background:'#eee', display:'flex',alignItems:'center',justifyContent:'center'}}>
//         Map Placeholder
//       </div>
//     </div>
//   )
// }
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default function MapView() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/plan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ days: 10, interest: 'nature' })
    })
      .then(res => res.json())
      .then(data => {
        const locs = data.plan.map(p => ({
          name: p.place,
          position: p.coords
        }));
        setLocations(locs);
      })
      .catch(err => console.error(err));
  }, []);

  const center = locations.length ? locations[0].position : [23.3441, 85.3096];

  return (
    <div className="card">
      <h2>Interactive Map</h2>
      <MapContainer center={center} zoom={6} style={{ height: 400, width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {locations.map((loc, index) => (
          <Marker key={index} position={loc.position}>
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}


