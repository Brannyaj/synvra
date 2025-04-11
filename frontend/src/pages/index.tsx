import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="hero-section">
      <nav className="navbar">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">Services</a>
        <a href="#" className="nav-link">Case Studies</a>
        <a href="#" className="nav-link">Technologies</a>
        <a href="#" className="nav-link">About</a>
        <a href="#" className="nav-link">Contact</a>
      </nav>
      <div className="hero-content">
        <h1 className="hero-title">Transforming Ideas into Digital Excellence</h1>
        <p className="hero-subtitle">
          Delivering game-changing software solutions that drive measurable business growth.
        </p>
        <div className="cta-buttons">
          <button className="cta-button primary">Get Started</button>
          <button className="cta-button secondary">View Our Work</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 