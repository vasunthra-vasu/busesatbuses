import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isLogin ? 'http://localhost:5005/login' : 'http://localhost:5005/signup';
      const response = await axios.post(url, formData);

      if (response.status === 200) {
        if (isLogin) {
          alert('Login successful');
        } else {
          alert('Sign up successful. Redirecting to login page...');
          setTimeout(() => {
            setIsLogin(true);
            setFormData({ name: '', email: '', phone: '', password: '' });
          }, 2000);
        }
      } else {
        alert(isLogin ? 'Login failed. Please check your credentials.' : 'Sign up successful!');
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message || 'An error occurred. Please try again.');
      } else if (error.request) {
        alert('No response from server. Please try again.');
      } else {
        alert('Error: ' + error.message);
      }
    }
  };

  return (
    <div className="auth-container">
      <h1>{isLogin ? 'Login Page' : 'Sign Up Page'}</h1>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required={!isLogin}
            />
          </label>
        )}
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        {!isLogin && (
          <label>
            Phone Number:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required={!isLogin}
            />
          </label>
        )}
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
      </button>
    </div>
  );
};

export default Auth;
