import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './components/about';
import Home from './components/home';
import Booking from './components/booking';
import Login from './components/Login';
import CustomerOffers from './components/customerOffers';
import Sleeper from './components/sleeper';
import Seater from './components/seater';


import CustomerService from './components/CustomerService';

import './App.css';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              
              <li><Link to="/booking">TICKET BOOKING</Link></li>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/Login">LOGIN</Link></li>
              
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/about" element={<About />} exact />
            <Route path="/booking" element={<Booking />} exact />
            <Route path="/Login" element={<Login/>} exact />
            <Route path="/sleeper" element={<Sleeper />}exact />
            <Route path="/seater" element={<Seater />}exact />
            <Route path="/customerOffers" element={<CustomerOffers />}exact />
            <Route path="/CustomerService" element={<CustomerService />}exact />
            
          
            
            
          </Routes>
        
          
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
