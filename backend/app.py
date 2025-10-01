
from flask import Flask, request, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

PLACES = [
    {
        "id": 1,
        "name": "Netarhat — Queen of Chotanagpur",
        "type": "nature",
        "speciality": "Hill-station vibes, sunrise/sunset viewpoints, forests, Netarhat Lake",
        "rough_expense": "₹1,500–3,500 (1–2 days)",
        "coords": [23.4707, 84.2670]
    },
    {
        "id": 2,
        "name": "Betla National Park (Palamu)",
        "type": "wildlife",
        "speciality": "Tiger/wildlife reserve, jeep safaris, watchtowers, Palamu forts nearby",
        "rough_expense": "₹2,000–5,000 (1–2 days)",
        "coords": [23.8167, 84.2167]
    },
    {
        "id": 3,
        "name": "Hundru Falls (near Ranchi)",
        "type": "nature",
        "speciality": "Scenic 320 ft waterfall on Subarnarekha River, picnic spot",
        "rough_expense": "₹300–800 (day trip)",
        "coords": [23.3667, 85.5667]
    },
    {
        "id": 4,
        "name": "Dassam & Jonha Falls",
        "type": "nature",
        "speciality": "Two dramatic waterfalls near Ranchi, good for day circuit",
        "rough_expense": "₹400–900 (day trip)",
        "coords": [23.35, 85.5833]
    },
    {
        "id": 5,
        "name": "Parasnath Hill (Giridih)",
        "type": "adventure",
        "speciality": "Highest hill, Jain pilgrimage site, trekking routes, panoramic views",
        "rough_expense": "₹800–2,000 (1–2 days)",
        "coords": [23.9966, 86.1460]
    },
    {
        "id": 6,
        "name": "Deoghar (Baba Baidyanath Temple)",
        "type": "culture",
        "speciality": "Major Hindu pilgrimage center, religious tourism, local markets",
        "rough_expense": "₹1,200–3,000 (1–2 days)",
        "coords": [24.4828, 86.6944]
    },
    {
        "id": 7,
        "name": "Hazaribagh / Hazaribagh National Park",
        "type": "wildlife",
        "speciality": "Grasslands, picnic spots, wildlife sanctuary, birding",
        "rough_expense": "₹1,200–3,000 (1–2 days)",
        "coords": [23.9966, 85.3616]
    },
    {
        "id": 8,
        "name": "Dalma Hills & Jamshedpur (Ghatshila nearby)",
        "type": "nature",
        "speciality": "Hills, forest trails, Dalma Wildlife, cultural river spots",
        "rough_expense": "₹1,000–3,000 (1–2 days)",
        "coords": [22.7750, 86.2026]
    },
    {
        "id": 9,
        "name": "Patratu Valley & Patratu Dam",
        "type": "adventure",
        "speciality": "Scenic valley drive, winding roads, viewpoints, road trips",
        "rough_expense": "₹500–1,200 (day trip)",
        "coords": [23.6775, 85.2894]
    },
    {
        "id": 10,
        "name": "Tribal Villages & Cultural Trails (Latehar/Gumla/Simdega)",
        "type": "culture",
        "speciality": "Tribal handicrafts, festivals, cuisine, experiential tourism",
        "rough_expense": "₹2,000–6,000 (multi-day)",
        "coords": [23.7460, 84.5030]
    }
]

# Interest mapping for flexibility
INTEREST_MAP = {
    "nature": ["nature", "wildlife"],
    "culture": ["culture"],
    "adventure": ["adventure", "nature"]
}

@app.route('/api/plan', methods=['POST'])
def plan_itinerary():
    data = request.json or {}
    days = int(data.get('days', 2))
    interest = data.get('interest', 'nature')

    # Match places by interest
    matched = [p for p in PLACES if p['type'] in INTEREST_MAP.get(interest, [])]
    if not matched:
        matched = PLACES  # fallback to all

    # Pick random unique places up to 'days'
    chosen = random.sample(matched, min(days, len(matched)))

    plan = {"days": days, "plan": []}
    for d, place in enumerate(chosen, start=1):
        plan['plan'].append({
            "day": d,
            "place": place['name'],
            "speciality": place['speciality'],
            "rough_expense": place['rough_expense'],
            "coords": place['coords'],
            "activities": ["Sightseeing", "Local food", "Photography"],
            "estimate_cost": random.randint(500, 3000)
        })
    return jsonify(plan)

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json or {}
    message = (data.get('message') or '').lower()
    if 'hello' in message:
        reply = 'Hello! How can I help you plan your trip to Jharkhand?'
    elif 'netarhat' in message:
        reply = 'Netarhat is famous for its sunrise/sunset viewpoints and forests.'
    else:
        reply = 'I can help with itineraries, local crafts, and travel guides.'
    return jsonify({'reply': reply})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

