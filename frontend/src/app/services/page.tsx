'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function Services() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'Enterprise Solutions',
      description: 'Custom ERP, CRM, and business process automation systems tailored to your workflow.',
      icon: '🏢',
      href: '/services/enterprise-solutions'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by advanced AI algorithms and machine learning models.',
      icon: '🤖',
      href: '/services/ai-machine-learning'
    },
    {
      title: 'Web Applications',
      description: 'Scalable, responsive web applications with modern architecture and seamless UX.',
      icon: '🌐',
      href: '/services/web-applications'
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android with cutting-edge features.',
      icon: '📱',
      href: '/services/mobile-development'
    },
    {
      title: 'Cloud & DevOps',
      description: 'Robust cloud infrastructure and DevOps solutions for optimal performance and scalability.',
      icon: '☁️',
      href: '/services/cloud-devops'
    },
    {
      title: 'Blockchain',
      description: 'Secure and transparent blockchain solutions for modern business needs.',
      icon: '🔗',
      href: '/services/blockchain'
    },
    {
      title: 'IoT Solutions',
      description: 'Connected device ecosystems with real-time monitoring and control capabilities.',
      icon: '📡',
      href: '/services/iot-solutions'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets and infrastructure.',
      icon: '🔒',
      href: '/services/cybersecurity'
    },
    {
      title: 'Data Engineering',
      description: 'Robust data pipelines and analytics solutions for informed decision-making.',
      icon: '📊',
      href: '/services/data-engineering'
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-synvra-white">Our Services</h1>
            <p className="text-xl text-synvra-gray-300 max-w-3xl mx-auto">
              Comprehensive software solutions tailored to your business needs. We combine technical excellence 
              with innovative thinking to deliver transformative digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link 
                key={index}
                href={service.href}
                className="glass-card p-8 hover:border-synvra-blue/30 transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-synvra-white mb-4 group-hover:text-synvra-blue transition-colors">
                  {service.title}
                  <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </h3>
                <p className="text-synvra-gray-300">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Script
        id="breadcrumb-schema-services"
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
                "name": "Services",
                "item": "https://synvra.com/services"
              }
            ]
          })
        }}
      />
    </main>
  );
} 