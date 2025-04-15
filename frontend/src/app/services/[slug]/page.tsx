'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useQuoteForm } from '../../../components/QuoteFormProvider';

const serviceData = {
  'enterprise-solutions': {
    title: 'Enterprise Solutions',
    icon: '🏢',
    description: 'Custom ERP, CRM, and business process automation systems tailored to your workflow.',
    features: ['Business Process Automation', 'Data Analytics', 'Enterprise Integration'],
    details: {
      overview: 'Our enterprise solutions are designed to streamline your business operations, improve efficiency, and drive growth through digital transformation.',
      benefits: [
        'Increased operational efficiency',
        'Reduced costs and improved ROI',
        'Enhanced data-driven decision making',
        'Seamless system integration',
        'Scalable and future-proof architecture'
      ],
      technologies: [
        'SAP',
        'Oracle',
        'Microsoft Dynamics',
        'Salesforce',
        'Custom Solutions'
      ],
      methodology: [
        'Requirements Analysis',
        'System Design',
        'Implementation',
        'Testing & QA',
        'Deployment & Support'
      ]
    }
  },
  'ai-machine-learning': {
    title: 'AI & Machine Learning',
    icon: '🤖',
    description: 'Intelligent solutions powered by advanced AI algorithms and machine learning models.',
    features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision'],
    details: {
      overview: 'Leverage the power of artificial intelligence and machine learning to unlock insights, automate processes, and create intelligent applications.',
      benefits: [
        'Automated decision making',
        'Predictive insights',
        'Enhanced customer experience',
        'Process optimization',
        'Competitive advantage'
      ],
      technologies: [
        'TensorFlow',
        'PyTorch',
        'OpenAI',
        'Computer Vision',
        'NLP'
      ],
      methodology: [
        'Data Collection',
        'Model Development',
        'Training & Validation',
        'Deployment',
        'Monitoring & Optimization'
      ]
    }
  },
  // Add similar data structures for other services
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const [scrolled, setScrolled] = useState(false);
  const { setShowQuoteForm } = useQuoteForm();
  const service = serviceData[params.slug as keyof typeof serviceData];

  const handleStartProject = () => {
    console.log('Opening quote form for service:', service.title);
    setShowQuoteForm(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen bg-synvra-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-synvra-white mb-4">Service Not Found</h1>
          <Link href="/" className="text-synvra-blue hover:text-synvra-white transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-synvra-black">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 nav-blur' : 'py-6'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-gradient">Synvra</span>
            </Link>
            <Link 
              href="/#services" 
              className="text-synvra-gray-200 hover:text-synvra-white transition-colors"
            >
              Back to Services
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">{service.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-synvra-white">{service.title}</h1>
            <p className="text-xl text-synvra-gray-300 max-w-3xl mx-auto">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-synvra-white mb-6">Overview</h2>
                <p className="text-synvra-gray-300">{service.details.overview}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-synvra-white mb-6">Key Benefits</h2>
                <ul className="space-y-4">
                  {service.details.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-synvra-gray-200">
                      <div className="w-2 h-2 bg-synvra-blue rounded-full mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-synvra-white mb-6">Technologies</h2>
                <div className="flex flex-wrap gap-3">
                  {service.details.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 rounded-full bg-synvra-blue/10 text-synvra-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-synvra-white mb-6">Our Approach</h2>
                <div className="space-y-4">
                  {service.details.methodology.map((step, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-synvra-blue/20 flex items-center justify-center text-synvra-white mr-4">
                        {index + 1}
                      </div>
                      <span className="text-synvra-gray-200">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-synvra-blue/10 to-synvra-white/5" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-synvra-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-synvra-gray-200">
            Let's discuss how our {service.title.toLowerCase()} can help you achieve your goals.
          </p>
          <button 
            onClick={handleStartProject}
            className="button-primary inline-block px-8 py-3 text-lg font-medium hover:bg-synvra-blue/90 active:bg-synvra-blue/80 cursor-pointer"
            type="button"
          >
            Start Your Project
          </button>
        </div>
      </section>
    </main>
  );
} 