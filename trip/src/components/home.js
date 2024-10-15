import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';



function Home() {
  const navigate = useNavigate();

  // Define handleNavigate to navigate to specific paths
  const handleNavigate = (path) => {
    navigate(path);
 
  };

  const handleSignIn = () => {
    navigate('/booking'); // Adjust this path if needed
  };

  return (
    <div className="home-container">
      {/* Main Section */}
      <div className="home-header">
        <h1>Welcome to ExploreMore Travel</h1>
        <p>"At ExploreMore Travel, we believe that every journey is an experience worth remembering. Whether you're planning a weekend getaway or a cross-country adventure, our bus booking service is designed to provide comfort, convenience, and reliability at every step of the way. With our range of luxury, sleeper, and seater buses, you'll find the perfect travel option to match your needs. Explore our routes, choose your bus type, and get ready for a smooth and hassle-free booking experience."</p>
        <p>Join us for an adventure!</p>
      </div>
      <div className="home-header">
        <h1>Seamless Booking, Anywhere, Anytime</h1>
        <p>"We understand that comfort is key when traveling, which is why we offer a variety of bus types to suit your preferences. Our sleeper buses provide the perfect environment for long journeys, giving you the space to relax and rest. If you're looking for more flexibility, our luxury and seater buses are equipped with modern amenities to make your ride enjoyable and stress-free. With ExploreMore Travel, you can expect top-quality service, comfortable seating, and a journey designed with your satisfaction in mind."</p>
        <p>Join us for an adventure!</p>
      </div>

      {/* Features Section */}
      <div className="home-features">
        <div className="feature-card" onClick={() => handleNavigate('./CustomerService')}>
          <h3>OUR SERVICES</h3>
          <img src="/images/smile.jpg" alt="comfort zone" />
          <p>Experience ultimate comfort with our premium fleet.</p>
        </div>
        <div className="feature-card" onClick={() => handleNavigate('./customerOffers')}>
          <h3>OFFERS</h3>
          <img src="/images/home bg.jpg" alt="comfort zone" />
          <p>We are here to assist you at any hour of the day.</p>
        </div>
        <div className="feature-card" onClick={() => handleNavigate('./about')}>
          <h3>ABOUT US</h3>
          <img src="/images/about.jpg" alt="comfort zone" />
          <p>We are here to assist you at any hour of the day.</p>
        </div>
      </div>

      {/* New Feature: Testimonials Section */}
      <div className="home-testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial">
          <p>"The best travel experience I've ever had! The seats were super comfortable, and the staff was amazing!" - Sarah P.</p>
        </div>
        <div className="testimonial">
          <p>"Affordable, reliable, and luxurious. I always choose ExploreMore Travel for my trips!" - John D.</p>
        </div>
        <div className="testimonial">
          <p>"Booking was easy, and the service was top-notch. Highly recommend!" - Emily R.</p>
        </div>
      </div>

      {/* New Feature: Image Carousel */}
      <div className="home-carousel">
        <h2>Explore Our Fleet</h2>
        <div className="carousel">
          <img src="/images/bus1.jpg" alt="Luxury Bus 1" /><hr></hr>
          <p>At ExploreMore Travel, we take pride in offering a diverse fleet of buses to meet the needs of every type of traveler. Whether you're embarking on a short trip within the state or planning a longer journey across regions, our fleet is equipped to provide comfort, safety, and convenience. From spacious sleeper buses that allow you to rest on the go, to luxury coaches with premium amenities for a first-class travel experience, we’ve thought of every detail to make your trip as enjoyable as possible. Our seater buses offer flexibility for those who prefer a quick, comfortable ride, while our sleeper options are ideal for long-distance travelers who want to relax and unwind. Explore our fleet and find the perfect bus for your next adventure with ExploreMore Travel.

</p>
       
        </div>
      </div>

      {/* Booking Button */}
      <div className="home-content">
        <button className="book-now-button" onClick={handleSignIn}>BOOK NOW</button>
      </div>
    </div>
  );
}

export default Home;
