
import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <header className="header">
        <h1>BusBooker</h1>
        <p>Your Go-To Solution for Easy Bus Ticket Booking</p>
      </header>

      <div className="content">
        <h2>About Us</h2>
        <p>Welcome to BusBooker, where we are dedicated to making your travel experience as smooth and hassle-free as possible. Our mission is to provide a user-friendly platform where you can easily book bus tickets for your journeys across the country.</p>

        <h2>Who We Are</h2>
        <ul>
        <li><p>BusBooker is a leading online bus ticket booking platform that connects travelers with a wide range of bus operators. Our team is passionate about travel and committed to offering a seamless booking experience, with a focus on reliability, convenience, and customer satisfaction.</p></li>
        </ul>

        <h2>Our Services</h2>
        <ul>
          <li><strong>Easy Booking:</strong> Our intuitive website allows you to search for and book bus tickets quickly and easily. Whether you're planning a short trip or a long journey, you can find and reserve your seat in just a few clicks.</li>
          <li><strong>Wide Selection:</strong> We partner with numerous bus operators to offer you a variety of travel options. From luxury coaches to budget-friendly buses, you can choose the best option that fits your needs and preferences.</li>
          <li><strong>Secure Transactions:</strong> Your safety and privacy are our top priorities. We use the latest encryption technologies to ensure that your personal information and payment details are protected.</li>
          <li><strong>Customer Support:</strong> Our dedicated support team is here to assist you with any questions or concerns. Whether you need help with booking, cancellations, or any other issue, we're here to ensure your travel experience is smooth.</li>
        </ul>

        <h2>Why Choose Us?</h2>
        <ul>
          <li><strong>Convenience:</strong> Book tickets from the comfort of your home or on the go with our mobile-friendly website.</li>
          <li><strong>Transparency:</strong> Clear and straightforward pricing with no hidden fees.</li>
          <li><strong>Flexibility:</strong> Easy cancellations and modifications to suit your travel plans.</li>
          <li><strong>Customer Focused:</strong> We prioritize your needs and strive to exceed your expectations.</li>
        </ul>

        <h2>Get in Touch</h2>
        <p>Have any questions or feedback? We'd love to hear from you! Contact us at <a href="mailto:contact@busbooker.com">contact@busbooker.com</a> or call us at 1-800-555-1234.</p>
      </div>

      <footer className="footer">
        <p>&copy; 2024 BusBooker. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
