import React from "react";
import axios from "axios";
import './Styling/itinerary.css';


export default function ItineraryPlanner() {
  const [prefs, setPrefs] = React.useState({
    days: 2,
    interest: "nature",
    budget: "medium",
  });
  const [plan, setPlan] = React.useState(null);

  const submit = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/plan", prefs);
      setPlan(res.data);
    } catch (e) {
      alert("Backend not running");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Preferences Card */}
      <div className="card p-6 shadow-xl rounded-3xl mb-8 bg-white border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-green-700">
          AI-based Itinerary Planner
        </h2>

        {/* Days */}
        <label className="block font-semibold mb-2 text-gray-700">Days</label>
        <input
          type="number"
          className="border border-gray-300 p-3 w-full mb-4 rounded-xl focus:ring-2 focus:ring-green-300 focus:outline-none"
          value={prefs.days}
          onChange={(e) => setPrefs({ ...prefs, days: +e.target.value })}
        />

        {/* Interest */}
        <label className="block font-semibold mb-2 text-gray-700">Interest</label>
        <select
          className="border border-gray-300 p-3 w-full mb-4 rounded-xl focus:ring-2 focus:ring-green-300 focus:outline-none"
          value={prefs.interest}
          onChange={(e) => setPrefs({ ...prefs, interest: e.target.value })}
        >
          <option value="nature">Nature</option>
          <option value="culture">Culture</option>
          <option value="adventure">Adventure</option>
        </select>

        {/* Budget */}
        <label className="block font-semibold mb-2 text-gray-700">Budget</label>
        <select
          className="border border-gray-300 p-3 w-full mb-6 rounded-xl focus:ring-2 focus:ring-green-300 focus:outline-none"
          value={prefs.budget}
          onChange={(e) => setPrefs({ ...prefs, budget: e.target.value })}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <button
          className="btn bg-green-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-green-700 shadow-lg transition duration-300"
          onClick={submit}
        >
          Generate Itinerary
        </button>
      </div>

      {/* Plan Card */}
      {plan && (
        <div className="card p-6 shadow-xl rounded-3xl bg-white border border-gray-200">
          <h3 className="text-2xl font-bold mb-6 text-green-700">
            Your {plan.days}-Day Suggested Itinerary
          </h3>

          <div className="space-y-6">
            {plan.plan.map((dayPlan, idx) => (
              <div
                key={idx}
                className="border-l-4 border-green-600 rounded-lg p-4 bg-gray-50 shadow-sm hover:shadow-md transition duration-300"
              >
                <h4 className="font-bold text-xl mb-2 text-gray-800">
                  Day {dayPlan.day}: {dayPlan.place}
                </h4>
                <p className="text-sm text-gray-600 mb-3 font-medium">
                  Estimated Cost: <span className="text-green-700">₹{dayPlan.estimate_cost}</span>
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  {dayPlan.activities.map((act, i) => (
                    <li key={i}>{act}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
