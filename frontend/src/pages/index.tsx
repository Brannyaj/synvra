import React from 'react';

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#001F3F', color: '#FFFFFF' }}>
      <nav style={{ marginBottom: '20px' }}>
        <a href="#" style={{ margin: '0 15px', color: '#FFFFFF', textDecoration: 'none' }}>Home</a>
        <a href="#" style={{ margin: '0 15px', color: '#FFFFFF', textDecoration: 'none' }}>Services</a>
        <a href="#" style={{ margin: '0 15px', color: '#FFFFFF', textDecoration: 'none' }}>Case Studies</a>
        <a href="#" style={{ margin: '0 15px', color: '#FFFFFF', textDecoration: 'none' }}>Technologies</a>
        <a href="#" style={{ margin: '0 15px', color: '#FFFFFF', textDecoration: 'none' }}>About</a>
        <a href="#" style={{ margin: '0 15px', color: '#FFFFFF', textDecoration: 'none' }}>Contact</a>
      </nav>
      <h1 style={{ fontSize: '3em', marginBottom: '20px' }}>Transforming Ideas into Digital Excellence</h1>
      <p style={{ fontSize: '1.2em', marginBottom: '40px' }}>
        Delivering game-changing software solutions that drive measurable business growth.
      </p>
      <button style={{ padding: '10px 20px', margin: '10px', backgroundColor: '#007BFF', color: '#FFFFFF', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Get Started
      </button>
      <button style={{ padding: '10px 20px', margin: '10px', backgroundColor: '#28A745', color: '#FFFFFF', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        View Our Work
      </button>
    </div>
  );
};

export default HomePage; 