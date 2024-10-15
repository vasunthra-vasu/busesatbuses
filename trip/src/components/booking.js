import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './booking.css';

const Booking = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [busType, setBusType] = useState('');
  const navigate = useNavigate();

  // State and district data
  const stateOptions = ['chennai', 'Mumbai', 'Kerala', 'Bengaluru', 'Hyderabad', 'Punjab', 'Shimla', 'Goa'];

  // Handle the search logic and send data to the backend
  const handleSearch = async () => {
    if (from && to && busType) {
      try {
        const response = await fetch('http://localhost:5004/api/bookings', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ from, to, busType }),
        });

        const data = await response.json();
        if (response.status === 201) {
          alert('Booking successful!');
          // Navigate to bus type-specific page
          navigate(`/${busType}`, { state: { from, to, busType } });
        } else {
          alert(data.message);
        }
      } catch (err) {
        alert('Error occurred during booking.');
        console.error(err);
      }
    } else {
      alert('Please select all fields.');
    }
  };

  return (
    <div>
      <h1 className="main-heading">Book Your Bus</h1>
      <div className="booking-form">
        <div className="route-selection">
          <div className="form-group">
            <label htmlFor="from">From (State):</label>
            <select
              id="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            >
              <option value="">--Select Departure--</option>
              {stateOptions.map((state, idx) => (
                <option key={idx} value={state}>{state}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="to">To (State):</label>
            <select
              id="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            >
              <option value="">--Select Destination--</option>
              {stateOptions.map((state, idx) => (
                <option key={idx} value={state}>{state}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="busType">Select Bus Type:</label>
          <select
            id="busType"
            value={busType}
            onChange={(e) => setBusType(e.target.value)}
          >
            <option value="">--Select Bus Type--</option>
            <option value="sleeper">Sleeper</option>
            <option value="seater">Seater</option>
          </select>
        </div>

        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default Booking;
