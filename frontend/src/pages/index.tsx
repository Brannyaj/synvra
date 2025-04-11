import React, { useEffect } from 'react';
import * as THREE from 'three';
import './HomePage.css';

const HomePage = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Particle effect
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({ size: 0.005, color: '#2563eb' });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="hero-section">
      <nav className="navbar">
        <div className="logo">Synvra</div>
        <div className="nav-menu">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Services</a>
          <a href="#" className="nav-link">Case Studies</a>
          <a href="#" className="nav-link">Technologies</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Contact</a>
        </div>
        <button className="cta-button primary">Get Started</button>
      </nav>
      <div className="hero-content">
        <h1 className="hero-title">Transforming Ideas into <span className="highlight">Digital Excellence</span></h1>
        <p className="hero-subtitle">
          Delivering game-changing software solutions that drive measurable business growth.
        </p>
        <div className="cta-buttons">
          <button className="cta-button primary">Get Started</button>
          <button className="cta-button secondary">View Our Work</button>
        </div>
      </div>
      <div className="stats-section">
        <div className="stat">
          <div className="icon">✔️</div>
          <div className="number">500+</div>
          <div className="label">Enterprise Clients</div>
        </div>
        <div className="stat">
          <div className="icon">🔒</div>
          <div className="number">99.9%</div>
          <div className="label">Success Rate</div>
        </div>
        <div className="stat">
          <div className="icon">⚡</div>
          <div className="number">2x</div>
          <div className="label">Faster Development</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 