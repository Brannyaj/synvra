import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './HomePage.css';

const HomePage = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Add cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation
    const animate = () => {
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

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: '#2563eb',
      transparent: true,
      opacity: 0.8
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="hero-section">
      <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} />
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