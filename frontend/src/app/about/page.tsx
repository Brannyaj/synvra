'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

export default function About() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const values = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible in technology.",
      icon: "💡"
    },
    {
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering value.",
      icon: "🎯"
    },
    {
      title: "Quality Excellence",
      description: "We maintain the highest standards in code quality and design.",
      icon: "✨"
    },
    {
      title: "Continuous Learning",
      description: "We stay ahead by constantly learning and evolving.",
      icon: "📚"
    }
  ];

  return (
    <main className="min-h-screen bg-synvra-black">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 nav-blur' : 'py-6'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-gradient">Synvra</span>
            </Link>
            <Link href="/" className="text-synvra-gray-200 hover:text-synvra-white transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-synvra-white">About Synvra</h1>
            <p className="text-xl text-synvra-gray-300 max-w-3xl mx-auto">
              We're a team of passionate developers dedicated to transforming businesses 
              through innovative software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-synvra-white mb-6">Our Story</h2>
              <div className="space-y-4 text-synvra-gray-300">
                <p>
                  Founded in 2020, Synvra emerged from a vision to bridge the gap between 
                  cutting-edge technology and real-world business challenges. Our journey 
                  began with a small team of dedicated developers and has grown into a 
                  full-service digital transformation partner.
                </p>
                <p>
                  Today, we're proud to work with leading companies across industries, 
                  helping them leverage technology to drive growth, efficiency, and 
                  innovation. Our commitment to excellence and continuous learning has 
                  made us a trusted partner for businesses worldwide.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Team collaboration"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-synvra-blue/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-synvra-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-synvra-white mb-4">{value.title}</h3>
                <p className="text-synvra-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="glass-card p-12 text-center">
            <h2 className="text-3xl font-bold text-synvra-white mb-6">Join Our Team</h2>
            <p className="text-xl text-synvra-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for 
              technology and innovation. Join us in building the future of digital solutions.
            </p>
            <Link 
              href="/careers" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-synvra-blue text-synvra-white font-semibold hover:bg-synvra-blue-dark transition-colors"
            >
              View Open Positions
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Script
        id="breadcrumb-schema-about"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://synvra.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About",
                "item": "https://synvra.com/about"
              }
            ]
          })
        }}
      />
    </main>
  );
} 