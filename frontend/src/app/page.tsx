'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import PhotoSlider from './components/PhotoSlider';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetStarted = () => {
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
              <Link href="/services" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">
                Portfolio
              </Link>
              <Link href="/about" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">
                Blog
              </Link>
              <Link href="/careers" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">
                Careers
              </Link>
              <Link href="/faq" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">
                FAQ
              </Link>
              <Link href="/affiliate" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">
                Affiliate Program
              </Link>
              <Link href="/contact" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">
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
              <Link href="/get-started"><button className="button-primary px-6 py-2">Get Started</button></Link>
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
              <Link href="/blog" className="block text-synvra-gray-200 hover:text-synvra-white transition-colors py-2">
                Blog
              </Link>
              <Link href="/careers" className="block text-synvra-gray-200 hover:text-synvra-white transition-colors py-2">
                Careers
              </Link>
              <Link href="/faq" className="block text-synvra-gray-200 hover:text-synvra-white transition-colors py-2">
                FAQ
              </Link>
              <Link href="/affiliate" className="block text-synvra-gray-200 hover:text-synvra-white transition-colors py-2">
                Affiliate Program
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
              <Link href="/get-started"><button className="button-primary w-full py-2">Get Started</button></Link>
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
              <Link href="/get-started" className="group relative px-8 py-4 bg-[#0047CC] hover:bg-[#0047CC]/90 rounded-lg transition-all duration-300">
                <span className="relative z-10 text-white text-lg font-medium">Get Started</span>
                <div className="absolute inset-0 rounded-lg bg-[#00CC47] opacity-0 group-hover:opacity-100 mix-blend-screen transition-opacity duration-300" />
              </Link>
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

      {/* Company Highlights & Services Section - Side by Side */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Company Highlights */}
            <div className="space-y-8">
              <h2 className="section-heading">Why Choose Synvra?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { number: '500+', label: 'Enterprise Clients', icon: '🏢' },
                  { number: '99.9%', label: 'Client Satisfaction', icon: '⭐' },
                  { number: '24/7', label: 'Technical Support', icon: '🛟' },
                  { number: '200+', label: 'Elite Developers', icon: '👨‍💻' }
                ].map((stat, index) => (
                  <div key={index} className="glass-card p-6 hover:border-synvra-blue/30 transition-all duration-300">
                    <div className="text-3xl mb-3">{stat.icon}</div>
                    <div className="text-3xl font-bold text-synvra-white mb-2">{stat.number}</div>
                    <div className="text-synvra-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services Preview */}
            <div className="space-y-8">
              <h2 className="section-heading">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <Link 
                    key={index}
                    href={service.href}
                    className="glass-card p-6 hover:border-synvra-blue/30 transition-all duration-300 group"
                  >
                    <div className="text-3xl mb-3">{service.icon}</div>
                    <h3 className="text-xl font-bold text-synvra-white group-hover:text-synvra-blue transition-colors">
                      {service.title}
                      <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </h3>
                    <p className="text-synvra-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-synvra-gray-200">
                          <div className="w-1.5 h-1.5 bg-synvra-blue rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elite Team & Technology Stack - Side by Side */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Elite Team */}
            <div className="space-y-8">
              <h2 className="section-heading">Elite Global Development Team</h2>
              <p className="text-xl text-synvra-gray-300">
                Our team consists of 200+ exceptional full stack developers, carefully selected from the top 1% of global talent.
              </p>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden glass-card p-8">
                  <div className="relative h-full">
                    <div className="absolute top-0 left-0 w-full h-full">
                      <div className="grid grid-cols-4 gap-4 h-full">
                        {[
                          'https://images.unsplash.com/photo-1560250097-0b93528c311a',
                          'https://images.unsplash.com/photo-1556157382-97eda2d62296',
                          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
                          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
                          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
                          'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79',
                          'https://images.unsplash.com/photo-1548544149-4835e62ee5b3',
                          'https://images.unsplash.com/photo-1545167622-3a6ac756afa4'
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

            {/* Technology Stack */}
            <div className="space-y-8">
              <h2 className="section-heading">Our Technology Stack</h2>
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    category: 'Frontend',
                    technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript'],
                    icon: '🎨'
                  },
                  {
                    category: 'Backend',
                    technologies: ['Node.js', 'Python', 'Java', 'Go'],
                    icon: '⚙️'
                  },
                  {
                    category: 'Database',
                    technologies: ['PostgreSQL', 'MongoDB', 'Redis'],
                    icon: '🗄️'
                  },
                  {
                    category: 'DevOps',
                    technologies: ['AWS', 'Docker', 'Kubernetes'],
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
          </div>
        </div>
      </section>

      {/* Featured Projects & Case Studies - Side by Side */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Featured Projects */}
            <div className="space-y-8">
              <h2 className="section-heading">Featured Projects</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Global Payment Platform",
                    description: "Built a scalable payment infrastructure processing $2B+ annually.",
                    tech: ["React", "Node.js", "PostgreSQL"],
                    category: "FinTech",
                    href: "/projects/payment-platform"
                  },
                  {
                    title: "AI-Powered Healthcare System",
                    description: "Developed an intelligent healthcare platform serving 1000+ facilities.",
                    tech: ["Python", "TensorFlow", "MongoDB"],
                    category: "Healthcare",
                    href: "/projects/healthcare-system"
                  }
                ].map((project, index) => (
                  <Link 
                    key={index}
                    href={project.href}
                    className="block glass-card p-6 hover:border-synvra-blue/30 transition-all duration-300 group"
                  >
                    <h3 className="text-xl font-bold text-synvra-white mb-2 group-hover:text-synvra-blue transition-colors">
                      {project.title}
                      <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </h3>
                    <p className="text-synvra-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-synvra-blue/10 text-synvra-gray-200 text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Case Studies */}
            <div className="space-y-8">
              <h2 className="section-heading">Case Studies</h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Enterprise E-commerce Platform',
                    client: 'Global Retail Corporation',
                    impact: ['500% increase in online sales', '99.99% uptime'],
                    href: '/case-studies/ecommerce'
                  },
                  {
                    title: 'Healthcare Management System',
                    client: 'National Healthcare Provider',
                    impact: ['30% improvement in patient care', '45% reduction in wait times'],
                    href: '/case-studies/healthcare'
                  }
                ].map((study, index) => (
                  <Link 
                    key={index}
                    href={study.href}
                    className="block glass-card p-6 hover:border-synvra-blue/30 transition-all duration-300 group"
                  >
                    <h3 className="text-xl font-bold text-synvra-white mb-2 group-hover:text-synvra-blue transition-colors">
                      {study.title}
                      <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </h3>
                    <p className="text-synvra-blue mb-4">{study.client}</p>
                    <ul className="space-y-2">
                      {study.impact.map((item, i) => (
                        <li key={i} className="flex items-center text-synvra-gray-200">
                          <div className="w-2 h-2 bg-synvra-blue rounded-full mr-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Tech News */}
      <section className="py-20 relative overflow-hidden bg-synvra-black/50">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-12">Latest Tech News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "AI Revolution in Software Development: The Rise of Code Generation",
                excerpt: "How advanced AI models are transforming the way developers write and maintain code, with a focus on increased productivity and reduced errors.",
                date: "March 18, 2024",
                time: "14:30 GMT",
                category: "Artificial Intelligence",
                readTime: "5 min read"
              },
              {
                title: "Web Development Trends 2024: The Impact of WebAssembly",
                excerpt: "Exploring how WebAssembly is enabling high-performance web applications and revolutionizing browser-based computing.",
                date: "March 15, 2024",
                time: "09:45 GMT",
                category: "Web Development",
                readTime: "4 min read"
              },
              {
                title: "The Future of Cloud Computing: Edge Computing Takes Center Stage",
                excerpt: "Analysis of how edge computing is reshaping cloud architecture and enabling real-time processing for IoT devices.",
                date: "March 12, 2024",
                time: "11:20 GMT",
                category: "Cloud Computing",
                readTime: "6 min read"
              },
              {
                title: "Cybersecurity in 2024: Zero Trust Architecture Adoption",
                excerpt: "Understanding the growing importance of Zero Trust security models in modern enterprise architecture.",
                date: "March 8, 2024",
                time: "16:15 GMT",
                category: "Cybersecurity",
                readTime: "7 min read"
              }
            ].map((post, index) => (
              <Link 
                key={index}
                href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className="glass-card p-6 hover:border-synvra-blue/30 transition-all duration-300 group"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <span className="text-sm text-synvra-blue">{post.category}</span>
                    <h3 className="text-xl font-bold text-synvra-white mt-2 group-hover:text-synvra-blue transition-colors">
                      {post.title}
                    </h3>
                  </div>
                  <p className="text-synvra-gray-300 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-synvra-gray-400">
                    <div>
                      {post.date} • {post.time}
                    </div>
                    <div>{post.readTime}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/blog" 
              className="button-secondary inline-flex items-center space-x-2 px-6 py-3"
            >
              <span>View All Articles</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
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
                <li><Link href="https://www.tiktok.com/@synvra?_t=ZT-8xO7M8KuWKs&_r=1" target="_blank" rel="noopener noreferrer" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">TikTok</Link></li>
                <li><Link href="https://www.facebook.com/share/1A6b2wrgDC/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">Facebook</Link></li>
                <li><Link href="https://www.instagram.com/synvra_?igsh=MXN2NnJ5aGt0N2VyeQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">Instagram</Link></li>
                <li><Link href="https://www.linkedin.com/company/synvra617/" target="_blank" rel="noopener noreferrer" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">LinkedIn</Link></li>
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
