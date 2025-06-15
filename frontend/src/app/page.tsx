'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import QuoteForm from '../components/QuoteForm';
import { useQuoteForm } from '../components/QuoteFormProvider';
import Script from 'next/script';
import PhotoSlider from './components/PhotoSlider';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setShowQuoteForm } = useQuoteForm();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetStarted = () => {
    setShowQuoteForm(true);
    setMobileMenuOpen(false);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-synvra-black">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 nav-blur' : 'py-6'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-gradient">Synvra</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/services" className="text-synvra-gray-200 hover:text-synvra-white transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="text-synvra-gray-200 hover:text-synvra-white transition-colors">
                Portfolio
              </Link>
              <Link href="/about" className="text-synvra-gray-200 hover:text-synvra-white transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-synvra-gray-200 hover:text-synvra-white transition-colors">
                Contact
              </Link>
              <div className="relative group">
                <button className="text-synvra-gray-200 hover:text-synvra-white transition-colors">
                  Legal
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 rounded-lg overflow-hidden bg-synvra-black/95 backdrop-blur-sm border border-synvra-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link href="/privacy-policy" className="block px-4 py-2 text-synvra-gray-200 hover:text-synvra-white hover:bg-synvra-white/5 transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="block px-4 py-2 text-synvra-gray-200 hover:text-synvra-white hover:bg-synvra-white/5 transition-colors">
                    Terms of Service
                  </Link>
                  <Link href="/cookies" className="block px-4 py-2 text-synvra-gray-200 hover:text-synvra-white hover:bg-synvra-white/5 transition-colors">
                    Cookie Policy
                  </Link>
                </div>
              </div>
              <button 
                onClick={handleGetStarted}
                className="button-primary px-6 py-2"
              >
                Get Started
              </button>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-synvra-white hover:text-synvra-blue transition-colors"
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className={`${scrolled ? 'nav-blur' : 'bg-synvra-black'} px-4 pt-4 pb-6 space-y-4`}>
              <Link href="/services" className="block text-synvra-gray-200 hover:text-synvra-white transition-colors py-2">
                Services
              </Link>
              <Link href="/portfolio" className="block text-synvra-gray-200 hover:text-synvra-white transition-colors py-2">
                Portfolio
              </Link>
              <Link href="/about" className="block text-synvra-gray-200 hover:text-synvra-white transition-colors py-2">
                About
              </Link>
              <Link href="/contact" className="block text-synvra-gray-200 hover:text-synvra-white transition-colors py-2">
                Contact
              </Link>
              <div className="pt-2 mt-2 border-t border-synvra-white/10">
                <p className="text-sm text-synvra-gray-400 mb-2">Legal</p>
                <Link href="/privacy-policy" className="block text-synvra-gray-200 hover:text-synvra-white transition-colors py-2">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="block text-synvra-gray-200 hover:text-synvra-white transition-colors py-2">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="block text-synvra-gray-200 hover:text-synvra-white transition-colors py-2">
                  Cookie Policy
                </Link>
              </div>
              <button 
                onClick={handleGetStarted}
                className="button-primary w-full py-2"
              >
                Get Started
      </button>
            </div>
      </div>
        )}
      </nav>

      {/* Hero Section with Photo Slider */}
      <PhotoSlider />

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight">
              Building software that
              <span className="text-gradient"> exceed expectations</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-synvra-gray-300 mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto">
              From concept to code, we make it happen. Partner with us today to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16">
              <button 
                onClick={handleGetStarted}
                className="button-primary text-base px-6 py-3"
              >
                Get Started
              </button>
              <Link 
                href="/portfolio" 
                className="button-secondary text-base px-6 py-3"
              >
                View Our Work
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  metric: "97%",
                  label: "Client Satisfaction",
                  description: "Consistently exceeding expectations"
                },
                {
                  metric: "600+",
                  label: "Projects Delivered",
                  description: "Across diverse industries"
                },
                {
                  metric: "85%",
                  label: "Revenue Growth",
                  description: "Average client business impact"
                }
              ].map((stat, index) => (
                <div key={index} className="glass-card p-6 md:p-8">
                  <div className="text-2xl md:text-3xl font-bold text-synvra-white mb-3">{stat.metric}</div>
                  <div className="text-base md:text-lg font-semibold text-synvra-blue mb-2">{stat.label}</div>
                  <div className="text-sm md:text-base text-synvra-gray-300">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-radial from-synvra-blue/20 to-transparent opacity-30"></div>
      </section>

      {/* Company Highlights */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: '500+', label: 'Enterprise Clients', icon: '🏢' },
              { number: '99.9%', label: 'Client Satisfaction', icon: '⭐' },
              { number: '24/7', label: 'Technical Support', icon: '🛟' }
            ].map((stat, index) => (
              <div key={index} className="glass-card p-6 hover:border-synvra-blue/30 transition-all duration-300">
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-synvra-white mb-2">{stat.number}</div>
                <div className="text-synvra-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elite Development Team */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading">Elite Global Development Team</h2>
              <p className="text-xl text-synvra-gray-300 mb-8">
                Our team consists of 200+ exceptional full stack developers, carefully selected from the top 1% of global talent.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: 'Rigorous Selection',
                    description: 'Only 1% of applicants meet our stringent technical and professional standards.',
                    icon: '🎯'
                  },
                  {
                    title: 'Diverse Expertise',
                    description: 'Specialists across all major technologies and domains, ensuring comprehensive solutions.',
                    icon: '🌐'
                  },
                  {
                    title: 'Continuous Growth',
                    description: 'Regular training and certification programs to stay ahead of technology trends.',
                    icon: '📈'
                  },
                  {
                    title: 'Global Collaboration',
                    description: 'Teams distributed across multiple time zones for round-the-clock development and support.',
                    icon: '🌍'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 glass-card p-6 hover:border-synvra-blue/30 transition-all duration-300">
                    <div className="text-4xl">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-synvra-white mb-2">{item.title}</h3>
                      <p className="text-synvra-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden glass-card p-8">
                <div className="relative h-full">
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div className="grid grid-cols-4 gap-4 h-full">
                      {[
                        'https://images.unsplash.com/photo-1560250097-0b93528c311a', // Professional male developer
                        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2', // Professional female developer
                        'https://images.unsplash.com/photo-1556157382-97eda2d62296', // Professional male developer
                        'https://images.unsplash.com/photo-1580489944761-15a19d654956', // Professional female developer
                        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d', // Professional male developer
                        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e', // Professional female developer
                        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e', // Professional male developer
                        'https://images.unsplash.com/photo-1580489944761-15a19d654956', // Professional female developer
                        'https://images.unsplash.com/photo-1560250097-0b93528c311a', // Professional male developer
                        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2', // Professional female developer
                        'https://images.unsplash.com/photo-1556157382-97eda2d62296', // Professional male developer
                        'https://images.unsplash.com/photo-1580489944761-15a19d654956', // Professional female developer
                        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d', // Professional male developer
                        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e', // Professional female developer
                        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e', // Professional male developer
                        'https://images.unsplash.com/photo-1580489944761-15a19d654956'  // Professional female developer
                      ].map((imageUrl, i) => (
                        <div
                          key={i}
                          className="relative aspect-square rounded-lg overflow-hidden group"
                        >
                          <Image
                            src={imageUrl}
                            alt={`Team member ${i + 1}`}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                            sizes="(max-width: 768px) 25vw, 20vw"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d';
                            }}
                          />
                          <div className="absolute inset-0 bg-synvra-blue/10 group-hover:bg-synvra-blue/20 transition-colors duration-300" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-synvra-black/60 backdrop-blur-sm">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-gradient mb-4">200+</div>
                      <div className="text-xl text-synvra-white">Elite Full Stack Developers</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-synvra-blue/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-synvra-blue/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Our Services</h2>
          <p className="section-subheading text-center mb-12">
            Comprehensive software solutions for modern enterprises
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Enterprise Solutions',
                description: 'Custom ERP, CRM, and business process automation systems tailored to your workflow.',
                icon: '🏢',
                features: ['Business Process Automation', 'Data Analytics', 'Enterprise Integration'],
                href: '/services/enterprise-solutions'
              },
              {
                title: 'AI & Machine Learning',
                description: 'Intelligent solutions powered by advanced AI algorithms and machine learning models.',
                icon: '🤖',
                features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision'],
                href: '/services/ai-machine-learning'
              },
              {
                title: 'Web Applications',
                description: 'Scalable, responsive web applications with modern architecture and seamless UX.',
                icon: '🌐',
                features: ['Progressive Web Apps', 'SaaS Platforms', 'E-commerce Solutions'],
                href: '/services/web-applications'
              },
              {
                title: 'Mobile Development',
                description: 'Native and cross-platform mobile apps for iOS and Android with cutting-edge features.',
                icon: '📱',
                features: ['iOS & Android Apps', 'Cross-platform Development', 'Mobile Commerce'],
                href: '/services/mobile-development'
              },
              {
                title: 'Cloud & DevOps',
                description: 'Robust cloud infrastructure and DevOps solutions for optimal performance and scalability.',
                icon: '☁️',
                features: ['Cloud Migration', 'Infrastructure Automation', 'Continuous Integration'],
                href: '/services/cloud-devops'
              },
              {
                title: 'Blockchain',
                description: 'Secure and transparent blockchain solutions for modern business needs.',
                icon: '🔗',
                features: ['Smart Contracts', 'DeFi Applications', 'NFT Platforms'],
                href: '/services/blockchain'
              },
              {
                title: 'IoT Solutions',
                description: 'Connected device ecosystems with real-time monitoring and control capabilities.',
                icon: '📡',
                features: ['Device Management', 'Real-time Analytics', 'Industrial IoT'],
                href: '/services/iot-solutions'
              },
              {
                title: 'Cybersecurity',
                description: 'Advanced security solutions to protect your digital assets and infrastructure.',
                icon: '🔒',
                features: ['Threat Detection', 'Security Audits', 'Compliance Solutions'],
                href: '/services/cybersecurity'
              },
              {
                title: 'Data Engineering',
                description: 'Robust data pipelines and analytics solutions for informed decision-making.',
                icon: '📊',
                features: ['Big Data Processing', 'Data Warehousing', 'Business Intelligence'],
                href: '/services/data-engineering'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="glass-card p-6 hover:border-synvra-blue/30 transition-all duration-300 hover:scale-[1.02] cursor-pointer group relative"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-synvra-white flex items-center gap-2">
                  {service.title}
                  <span className="text-synvra-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                </h3>
                <p className="text-synvra-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-synvra-gray-200">
                      <div className="w-1.5 h-1.5 bg-synvra-blue rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Link 
                    href={service.href}
                    className="text-synvra-blue hover:text-synvra-white transition-colors inline-flex items-center gap-2"
                  >
                    Learn More
                    <span className="text-synvra-blue group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Featured Projects</h2>
          <p className="section-subheading text-center mb-12">
            Transforming businesses through innovative solutions
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Global Payment Platform",
                description: "Built a scalable payment infrastructure processing $2B+ annually for a leading fintech company.",
                impact: "500K+ daily transactions",
                tech: ["React", "Node.js", "PostgreSQL", "AWS"],
                category: "FinTech",
                image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e",
                icon: "💳",
                href: "/projects/payment-platform"
              },
              {
                title: "AI-Powered Healthcare System",
                description: "Developed an intelligent healthcare platform serving 1000+ medical facilities.",
                impact: "10M+ patient records managed",
                tech: ["Python", "TensorFlow", "MongoDB", "Azure"],
                category: "Healthcare",
                image: "https://images.unsplash.com/photo-1551076805-e1869033e561",
                icon: "🏥",
                href: "/projects/healthcare-system"
              },
              {
                title: "Smart Manufacturing Platform",
                description: "IoT solution for predictive maintenance and real-time monitoring of industrial equipment.",
                impact: "45% reduction in downtime",
                tech: ["IoT", "Azure IoT", "React", "TypeScript"],
                category: "Industrial IoT",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
                icon: "🏭",
                href: "/projects/manufacturing"
              },
              {
                title: "E-commerce Ecosystem",
                description: "End-to-end e-commerce platform with AI-powered recommendations and real-time analytics.",
                impact: "300% increase in sales",
                tech: ["Next.js", "GraphQL", "AWS", "Redis"],
                category: "E-commerce",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
                icon: "🛍️",
                href: "/projects/ecommerce"
              }
            ].map((project, index) => (
              <Link 
                key={index} 
                href={project.href}
                className="block glass-card overflow-hidden hover:border-synvra-blue/30 transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="relative h-64 mb-8">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={800}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    priority={index < 2}
                    loading={index < 2 ? 'eager' : 'lazy'}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1518770660439-4636190af475';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-synvra-black/90" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-synvra-blue/10 text-synvra-gray-200 text-sm backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="text-4xl">{project.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-synvra-white mb-4 group-hover:text-synvra-blue transition-colors">
                        {project.title}
                        <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      </h3>
                      <p className="text-synvra-gray-300 mb-4">{project.description}</p>
                      <div className="flex items-center text-synvra-blue mb-4">
                        <span className="text-lg">🎯</span>
                        <span className="ml-2">{project.impact}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1 rounded-full bg-synvra-blue/10 text-synvra-gray-200 text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-heading">Why Partner With Synvra?</h2>
            <p className="text-xl text-synvra-gray-300">
              We combine technical excellence with innovative thinking to deliver transformative digital solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Technical Excellence',
                description: 'Our team of elite developers and architects brings decades of combined experience in building enterprise-grade solutions.',
                icon: '💡',
                points: ['Industry-leading expertise', 'Best practices & standards', 'Continuous innovation']
              },
              {
                title: 'Proven Methodology',
                description: 'Our battle-tested development process ensures consistent quality and timely delivery of your projects.',
                icon: '📈',
                points: ['Agile development', 'Regular updates', 'Quality assurance']
              },
              {
                title: 'Long-term Partnership',
                description: 'We are not just a service provider – we are your technology partner committed to your long-term success.',
                icon: '🤝',
                points: ['Dedicated support', 'Strategic consulting', 'Growth-focused solutions']
              }
            ].map((value, index) => (
              <div key={index} className="glass-card p-8 hover:border-synvra-blue/30 transition-all duration-300">
                <div className="text-4xl mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-synvra-white mb-4">{value.title}</h3>
                <p className="text-synvra-gray-300 mb-6">{value.description}</p>
                <ul className="space-y-3">
                  {value.points.map((point, i) => (
                    <li key={i} className="flex items-center text-synvra-gray-200">
                      <div className="w-1.5 h-1.5 bg-synvra-blue rounded-full mr-2" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">What Our Clients Say</h2>
          <p className="section-subheading text-center mb-12">
            Success stories from industry leaders
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "Synvra's expertise in AI and machine learning helped us reduce operational costs by 40% while improving customer satisfaction scores.",
                author: "Sarah Chen",
                position: "CTO",
                company: "TechCorp Global"
              },
              {
                quote: "The team's technical prowess and commitment to quality delivered a solution that exceeded our expectations and transformed our business.",
                author: "Michael Rodriguez",
                position: "Director of Innovation",
                company: "FinTech Solutions"
              },
              {
                quote: "Working with Synvra has been a game-changer. Their cloud solutions helped us scale our operations seamlessly across multiple regions.",
                author: "Emma Thompson",
                position: "Head of Operations",
                company: "E-commerce Leaders"
              },
              {
                quote: "The dedication and expertise of the Synvra team made our digital transformation journey smooth and successful.",
                author: "David Park",
                position: "CEO",
                company: "Healthcare Innovations"
              }
            ].map((testimonial, index) => (
              <div key={index} className="glass-card p-8 hover:border-synvra-blue/30 transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="text-4xl mb-6">"</div>
                  <p className="text-synvra-gray-200 mb-8 flex-grow">
                    {testimonial.quote}
                  </p>
          <div>
                    <div className="text-synvra-white font-bold">{testimonial.author}</div>
                    <div className="text-synvra-gray-300">{testimonial.position}</div>
                    <div className="text-synvra-blue">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Our Work</h2>
          <p className="section-subheading text-center">
            Delivering excellence across industries
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-commerce Platform',
                category: 'Web Development',
                image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1',
                description: 'Modern e-commerce solution with AI-powered recommendations'
              },
              {
                title: 'Healthcare App',
                category: 'Mobile Development',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
                description: 'Patient-centric healthcare management system'
              },
              {
                title: 'Cloud Infrastructure',
                category: 'Cloud Solutions',
                image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8',
                description: 'Scalable cloud architecture for enterprise'
              },
              {
                title: 'FinTech Dashboard',
                category: 'Web Development',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
                description: 'Real-time financial analytics platform'
              },
              {
                title: 'IoT Management',
                category: 'IoT Solutions',
                image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
                description: 'Industrial IoT monitoring system'
              },
              {
                title: 'AI Analytics',
                category: 'Machine Learning',
                image: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d',
                description: 'Advanced data analytics with AI'
              }
            ].map((project, index) => (
              <div key={index} className="group glass-card p-4 cursor-pointer hover:scale-[1.02] transition-all duration-300">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    priority={index < 3}
                    loading={index < 3 ? 'eager' : 'lazy'}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1518770660439-4636190af475';
                    }}
                  />
                  <div className="absolute inset-0 bg-synvra-blue/10 group-hover:bg-synvra-blue/20 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-synvra-white mb-2">{project.title}</h3>
                <p className="text-synvra-gray-300 mb-2">{project.description}</p>
                <span className="inline-block px-3 py-1 rounded-full bg-synvra-blue/10 text-synvra-gray-200 text-sm">
                  {project.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Our Technology Stack</h2>
          <p className="section-subheading text-center mb-12">
            Leveraging cutting-edge technologies to build robust solutions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: 'Frontend',
                technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
                icon: '🎨'
              },
              {
                category: 'Backend',
                technologies: ['Node.js', 'Python', 'Java', 'Go', 'GraphQL'],
                icon: '⚙️'
              },
              {
                category: 'Database',
                technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
                icon: '🗄️'
              },
              {
                category: 'DevOps',
                technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
                icon: '🚀'
              }
            ].map((stack, index) => (
              <div key={index} className="glass-card p-6 hover:border-synvra-blue/30 transition-colors">
                <div className="text-3xl mb-4">{stack.icon}</div>
                <h3 className="text-xl font-bold text-synvra-white mb-4">{stack.category}</h3>
                <ul className="space-y-2">
                  {stack.technologies.map((tech, i) => (
                    <li key={i} className="text-synvra-gray-300">{tech}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Our Development Process</h2>
          <p className="section-subheading text-center mb-12">
            A systematic approach to delivering exceptional software
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                phase: 'Discovery & Planning',
                description: 'Deep dive into requirements, market research, and technical feasibility analysis.',
                steps: ['Requirement Analysis', 'Technical Architecture', 'Project Roadmap']
              },
              {
                phase: 'Design & Development',
                description: 'Iterative development with continuous feedback and quality assurance.',
                steps: ['UI/UX Design', 'Agile Development', 'Code Reviews']
              },
              {
                phase: 'Deployment & Support',
                description: 'Smooth deployment and ongoing maintenance for optimal performance.',
                steps: ['CI/CD Pipeline', 'Performance Monitoring', '24/7 Support']
              }
            ].map((process, index) => (
              <div key={index} className="glass-card p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-synvra-blue/20 flex items-center justify-center text-2xl">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-synvra-white ml-4">{process.phase}</h3>
                </div>
                <p className="text-synvra-gray-300 mb-6">{process.description}</p>
                <ul className="space-y-3">
                  {process.steps.map((step, i) => (
                    <li key={i} className="flex items-center text-synvra-gray-200">
                      <div className="w-2 h-2 bg-synvra-blue rounded-full mr-3" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Case Studies</h2>
          <p className="section-subheading text-center mb-12">
            Real-world impact through innovative solutions
          </p>
          <div className="space-y-12">
            {[
              {
                title: 'Enterprise E-commerce Platform',
                client: 'Global Retail Corporation',
                impact: ['500% increase in online sales', '99.99% uptime', '50% reduction in operational costs'],
                tech: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
                description: 'Developed a scalable e-commerce platform handling millions of transactions monthly.'
              },
              {
                title: 'Healthcare Management System',
                client: 'National Healthcare Provider',
                impact: ['30% improvement in patient care', '45% reduction in wait times', 'HIPAA compliant'],
                tech: ['React', 'Python', 'MongoDB', 'Docker'],
                description: 'Built a comprehensive healthcare management system with real-time patient monitoring.'
              }
            ].map((study, index) => (
              <div key={index} className="glass-card p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-synvra-white mb-2">{study.title}</h3>
                    <p className="text-synvra-blue mb-4">{study.client}</p>
                    <p className="text-synvra-gray-300 mb-6">{study.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-synvra-blue/10 text-synvra-gray-200 text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
          </div>
          <div>
                    <h4 className="text-lg font-semibold text-synvra-white mb-4">Key Impact</h4>
                    <ul className="space-y-4">
                      {study.impact.map((item, i) => (
                        <li key={i} className="flex items-center text-synvra-gray-200">
                          <div className="w-2 h-2 bg-synvra-blue rounded-full mr-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Industry Expertise</h2>
          <p className="section-subheading text-center mb-12">
            Delivering specialized solutions across diverse sectors
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                industry: 'Healthcare',
                description: 'HIPAA-compliant solutions for modern healthcare challenges.',
                expertise: ['Electronic Health Records', 'Telemedicine Platforms', 'Medical Imaging Systems']
              },
              {
                industry: 'FinTech',
                description: 'Secure and scalable financial technology solutions.',
                expertise: ['Payment Processing', 'Blockchain Integration', 'Risk Management']
              },
              {
                industry: 'E-commerce',
                description: 'End-to-end solutions for online retail success.',
                expertise: ['Marketplace Platforms', 'Inventory Management', 'Payment Gateway Integration']
              },
              {
                industry: 'Enterprise',
                description: 'Custom solutions for large-scale business operations.',
                expertise: ['ERP Systems', 'Business Intelligence', 'Workflow Automation']
              },
              {
                industry: 'EdTech',
                description: 'Innovative solutions for modern education.',
                expertise: ['Learning Management Systems', 'Virtual Classrooms', 'Student Analytics']
              },
              {
                industry: 'IoT & Manufacturing',
                description: 'Smart solutions for connected industries.',
                expertise: ['Industrial IoT', 'Predictive Maintenance', 'Supply Chain Optimization']
              }
            ].map((industry, index) => (
              <div key={index} className="glass-card p-6 hover:border-synvra-blue/30 transition-colors">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-synvra-white mb-4">{industry.industry}</h3>
                <p className="text-sm md:text-base text-synvra-gray-300 mb-4">{industry.description}</p>
                <ul className="space-y-3">
                  {industry.expertise.map((item, i) => (
                    <li key={i} className="flex items-center text-synvra-gray-200">
                      <div className="w-2 h-2 bg-synvra-blue rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading">About Synvra</h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Our Mission',
                    description: 'To empower businesses with transformative digital solutions that drive growth and innovation.'
                  },
                  {
                    title: 'Global Presence',
                    description: 'With teams across multiple continents, we deliver excellence to clients worldwide.'
                  },
                  {
                    title: 'Our Values',
                    description: 'We believe in innovation, transparency, and building lasting partnerships with our clients.'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-synvra-blue/10 flex items-center justify-center">
                      <div className="w-6 h-6 bg-synvra-blue rounded-full" />
          </div>
          <div>
                      <h3 className="text-xl font-bold text-synvra-white mb-2">{item.title}</h3>
                      <p className="text-synvra-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-synvra-blue/20 to-synvra-white/5 glass-card" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-synvra-blue/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-synvra-blue/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-synvra-blue/10 to-synvra-white/5" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="section-heading">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-synvra-gray-200">Let&apos;s discuss how we can help you achieve your goals.</p>
          <Link href="/contact" className="button-primary inline-block px-8 py-3 text-lg font-medium hover:bg-synvra-blue/90 active:bg-synvra-blue/80">
            Contact Us
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-synvra-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <span className="text-xl font-bold text-gradient">Synvra</span>
              </div>
              <p className="text-synvra-gray-300">
                Transforming ideas into digital excellence through innovative software solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-synvra-white mb-4">Services</h3>
              <ul className="space-y-2 text-sm md:text-base">
                <li><Link href="/services/web-applications" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">Web Development</Link></li>
                <li><Link href="/services/mobile-development" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">Mobile Apps</Link></li>
                <li><Link href="/services/cloud-devops" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">Cloud Solutions</Link></li>
                <li><Link href="/services/enterprise-solutions" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">Consulting</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-synvra-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm md:text-base">
                <li><Link href="/about" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">Careers</Link></li>
                <li><Link href="/blog" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-synvra-white mb-4">Connect</h3>
              <ul className="space-y-2 text-sm md:text-base">
                <li><Link href="https://twitter.com/synvra" target="_blank" rel="noopener noreferrer" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">Twitter</Link></li>
                <li><Link href="https://linkedin.com/company/synvra" target="_blank" rel="noopener noreferrer" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">LinkedIn</Link></li>
                <li><Link href="https://github.com/synvra" target="_blank" rel="noopener noreferrer" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">GitHub</Link></li>
                <li><Link href="https://discord.gg/synvra" target="_blank" rel="noopener noreferrer" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">Discord</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-synvra-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-synvra-gray-300">© 2025 Synvra. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">Cookie Policy</Link>
              <Link href="/sitemap.xml" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">Sitemap</Link>
        </div>
      </div>
    </div>
      </footer>

      <Script
        id="breadcrumb-schema-home"
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
              }
            ]
          })
        }}
      />
    </main>
  );
}
