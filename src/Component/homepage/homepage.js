import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';

function HomePage() {
  return (
    <div className="container">
      <h1>Welcome to Our <b>Ecom360</b> Website</h1>
      <div className="btn-container">
        <Link to="/login" className="btn login-btn">Login</Link>
        <Link to="/reg"className="btn signup-btn">Signup</Link>
      </div>
    </div>
  );
}

export default HomePage;
