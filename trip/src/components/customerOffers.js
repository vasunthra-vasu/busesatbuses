import React from 'react';
import './customerOffers.css'; // Ensure you create a CSS file for styling

const CustomerOffers = () => {
  return (
    <div className="offers-container">
      <h1 className="offers-title">Exclusive Offers</h1>
      <p className="offers-intro">
        We are committed to providing exceptional customer service. Our support team is available around the clock to assist you with any inquiries, bookings, or issues you may encounter during your journey.
      </p>

      {/* Special Offers Section */}
      <div className="special-offers">
        <center><h2 className="section-title">Special Offers for Sleeper Buses</h2></center> 

        {/* Baby Offer */}
        <div className="offer-card">
          <img src="/images/baby.jpg" alt="Baby Offer" className="offer-image" />
          <div className="offer-details">
            <h3>Babies (0-3 years)</h3>
            <p>
              Travel with your little one and enjoy special discounts for babies. We provide complimentary baby beds, meals, and essentials to ensure your journey is comfortable.
            </p>
          </div>
        </div>

        {/* New Couples Offer */}
        <div className="offer-card">
          <img src="/images/couple.jpg" alt="New Couples Offer" className="offer-image" />
          <div className="offer-details">
            <h3>New Couples</h3>
            <p>
              Celebrate your journey together! Enjoy special seating arrangements, complimentary snacks, and a romantic atmosphere perfect for new couples.
            </p>
          </div>
        </div>

        {/* Singles Offer */}
        <div className="offer-card">
          <img src="/images/single.jpg" alt="Singles Offer" className="offer-image" />
          <div className="offer-details">
            <h3>Singles</h3>
            <p>
              Traveling solo? Enjoy our exclusive offers for singles, including discounted seat upgrades and complimentary refreshments onboard.
            </p>
          </div>
        </div>

        {/* Friends Group Offer */}
        <div className="offer-card">
          <img src="/images/friends.webp" alt="Friends Group Offer" className="offer-image" />
          <div className="offer-details">
            <h3>Friends Group</h3>
            <p>
              Gather your friends for an adventure! Get exclusive group discounts and enjoy fun onboard entertainment together.
            </p>
          </div>
        </div>
      </div>

      {/* Customer Support Contact Section */}
      <div className="customer-support">
        <h2 className="section-title">Contact Our Support Team</h2>
        <p>If you need assistance, you can reach our customer support through the following:</p>
        <ul className="contact-list">
          <li>Phone: 1-800-EXPLORE</li>
          <li>Email: support@exploremoretravel.com</li>
          <li>Live Chat: Available on our website 24/7</li>
        </ul>
      </div>
    </div>
  );
};

export default CustomerOffers;
