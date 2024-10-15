import React, { useState } from 'react';
import './sleeper.css'; // Ensure sleeper.css contains the styles
import defaultImage from './default-sleeper.jpg'; // Default image for buses
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'; // Import axios for API calls

const sleeperBusesData = [
  {
    id: 1,
    name: 'Sleeper Express',
    seatingCapacity: 20,
    amenities: ['Wi-Fi', 'AC', 'Comfortable Beds', 'Entertainment System'],
    image: '/images/sleeper1.jpg',
    price: '$60',
    seats: Array(20).fill(false),
  },
  {
    id: 2,
    name: 'Comfort Sleeper',
    seatingCapacity: 16,
    amenities: ['Wi-Fi', 'AC', 'Charging Ports', 'On-board Meals'],
    image: '/images/sleeper2.jpg',
    price: '$75',
    seats: Array(16).fill(false),
  },
  {
    id: 3,
    name: 'Dreamliner Sleeper',
    seatingCapacity: 12,
    amenities: ['Wi-Fi', 'AC', 'Personal TV', 'Luxury Bedding'],
    image: '/images/sleeper3.jpg',
    price: '$90',
    seats: Array(12).fill(false),
  },
  {
    id: 4,
    name: 'Luxury Sleeper VIP',
    seatingCapacity: 10,
    amenities: ['Wi-Fi', 'AC', 'Personal TV', 'Premium Bedding'],
    image: '/images/sleeper4.jpg',
    price: '$120',
    seats: Array(10).fill(false),
  },
];

const SleeperBuses = () => {
  const [buses, setBuses] = useState(sleeperBusesData);
  const [passengerDetails, setPassengerDetails] = useState({
    name: '',
    mobile: '',
    email: '',
    travelDate: '', // Added travelDate field
    bookingTime: '',
    paymentMethod: '',
  });
  const [bookedSeats, setBookedSeats] = useState({});

  const handleSeatClick = (busId, seatIndex) => {
    const isBooked = bookedSeats[busId]?.includes(seatIndex + 1);
    if (isBooked) {
      alert('This bed is already booked.');
      return;
    }

    const updatedBuses = buses.map((bus) => {
      if (bus.id === busId) {
        const updatedSeats = bus.seats.map((seat, index) =>
          index === seatIndex ? !seat : seat
        );
        return { ...bus, seats: updatedSeats };
      }
      return bus;
    });

    setBuses(updatedBuses);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPassengerDetails({ ...passengerDetails, [name]: value });
  };

  const handleBooking = async (busId) => {
    const selectedBus = buses.find((bus) => bus.id === busId);
    const selectedSeats = selectedBus.seats.reduce((acc, seat, index) => {
      if (seat) acc.push(index + 1);
      return acc;
    }, []);

    if (
      !passengerDetails.name ||
      !passengerDetails.mobile ||
      !passengerDetails.email ||
      !passengerDetails.travelDate || // Added travelDate validation
      !passengerDetails.bookingTime ||
      !passengerDetails.paymentMethod
    ) {
      alert('Please fill in all passenger details, including the payment method and travel date.');
      return;
    }

    if (selectedSeats.length > 0) {
      try {
        const response = await axios.post('http://localhost:5001/api/book', {
          name: passengerDetails.name,
          mobile: passengerDetails.mobile,
          email: passengerDetails.email,
          travelDate: passengerDetails.travelDate,
          bookingTime: passengerDetails.bookingTime,
          paymentMethod: passengerDetails.paymentMethod,
          busId: busId,
          seats: selectedSeats,
        });

        if (response.status === 201) {
          alert(`Booking confirmed!`);

          setBookedSeats((prev) => ({
            ...prev,
            [busId]: selectedSeats,
          }));

          // Set all selected seats to booked for this bus
          setBuses((prevBuses) =>
            prevBuses.map((bus) =>
              bus.id === busId ? { ...bus, seats: Array(bus.seatingCapacity).fill(true) } : bus
            )
          );
        }
      } catch (error) {
        console.error('Error during booking:', error);
        alert('An error occurred during booking. Please try again later.');
      }
    } else {
      alert(`Please select at least one bed on the "${selectedBus.name}" bus.`);
    }
  };

  return (
    <div className="sleeper-buses-container">
      <h1>Sleeper Buses</h1>

      <div className="passenger-form">
        <h3>Enter Passenger Details</h3>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={passengerDetails.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile"
          value={passengerDetails.mobile}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={passengerDetails.email}
          onChange={handleInputChange}
        />
        <input
          type="date" // Added date input
          name="travelDate"
          value={passengerDetails.travelDate}
          onChange={handleInputChange}
        />
        <select
          name="bookingTime"
          value={passengerDetails.bookingTime}
          onChange={handleInputChange}
        >
          <option value="">Select Booking Time</option>
          {['10:30 AM', '12:30 PM', '3:00 PM', '5:30 PM', '8:00 PM', '10:30 PM'].map((time) => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
        <select
          name="paymentMethod"
          value={passengerDetails.paymentMethod}
          onChange={handleInputChange}
        >
          <option value="">Select Payment Method</option>
          {['Credit/Debit Card', 'Net Banking', 'UPI'].map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="sleeper-buses-vertical">
        {buses.map((bus) => (
          <div key={bus.id} className="sleeper-bus-card">
            <img
              src={bus.image || defaultImage}
              alt={bus.name}
              className="sleeper-bus-image"
            />
            <h2>{bus.name}</h2>
            <p><strong>Seating Capacity:</strong> {bus.seatingCapacity}</p>
            <p><strong>Amenities:</strong> {bus.amenities.join(', ')}</p>
            <p><strong>Price:</strong> {bus.price}</p>

            <div className="seat-selection">
              <h3>Select Beds:</h3>
              <div className="seat-grid">
                {bus.seats.map((seat, index) => {
                  const isBooked = bookedSeats[bus.id]?.includes(index + 1);
                  return (
                    <div
                      key={index}
                      className={`seat ${seat ? 'selected' : ''} ${isBooked ? 'booked' : ''}`}
                      onClick={() => !isBooked && handleSeatClick(bus.id, index)}
                      style={{ cursor: isBooked ? 'not-allowed' : 'pointer' }}
                    >
                      <FontAwesomeIcon icon={faBed} className="icon" />
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              className="book-now-button"
              onClick={() => handleBooking(bus.id)}
            >
              Book Now
            </button>

            {bookedSeats[bus.id] && bookedSeats[bus.id].length > 0 && (
              <p>Booked Beds: {bookedSeats[bus.id].join(', ')}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SleeperBuses;
