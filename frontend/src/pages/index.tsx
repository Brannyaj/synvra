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

    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

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