'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { useRouter } from 'next/navigation';
import { FaRocket, FaCheckCircle, FaClock, FaHandshake } from 'react-icons/fa';

const PROJECT_CATEGORIES = [
  'Web Development',
  'Mobile Development',
  'Blockchain & Crypto',
  'Cloud Solutions',
  'AI & Machine Learning',
  'Cybersecurity',
  'Enterprise Solutions',
  'UI/UX Design',
  'DevOps Services',
  'Quality Assurance'
] as const;

type ProjectCategory = typeof PROJECT_CATEGORIES[number];

const PROJECT_TYPES: Record<ProjectCategory, string[]> = {
  'Web Development': [
    'Custom Web Applications',
    'E-commerce Solutions',
    'Progressive Web Apps (PWA)',
    'Content Management Systems (CMS)',
    'Web Portal Development',
    'API Development & Integration',
    'Frontend Development',
    'Backend Development',
    'Full Stack Development'
  ],
  'Mobile Development': [
    'iOS App Development',
    'Android App Development',
    'Cross-platform Mobile Apps',
    'Mobile App UI/UX Design',
    'App Maintenance & Support',
    'Mobile App Testing',
    'React Native Development',
    'Flutter Development',
    'Mobile App Optimization'
  ],
  'Blockchain & Crypto': [
    'Smart Contract Development',
    'DeFi Applications',
    'NFT Marketplace Development',
    'Cryptocurrency Exchange Development',
    'Blockchain Integration',
    'Web3 Development',
    'Token Development',
    'Blockchain Consulting',
    'Crypto Wallet Development'
  ],
  'Cloud Solutions': [
    'Cloud Migration',
    'Cloud Infrastructure Setup',
    'Cloud Security Solutions',
    'DevOps Implementation',
    'Serverless Architecture',
    'Cloud Optimization',
    'AWS Solutions',
    'Azure Solutions',
    'Google Cloud Solutions'
  ],
  'AI & Machine Learning': [
    'AI Application Development',
    'Machine Learning Models',
    'Natural Language Processing',
    'Computer Vision Solutions',
    'Predictive Analytics',
    'AI Model Training & Deployment',
    'Deep Learning Solutions',
    'AI Chatbots',
    'Data Science Solutions'
  ],
  'Cybersecurity': [
    'Security Assessment',
    'Penetration Testing',
    'Security Monitoring',
    'Incident Response',
    'Compliance Implementation',
    'Security Training',
    'Network Security',
    'Application Security',
    'Cloud Security'
  ],
  'Enterprise Solutions': [
    'ERP Systems',
    'CRM Development',
    'Business Process Automation',
    'Enterprise Integration',
    'Data Analytics Solutions',
    'Legacy System Modernization',
    'Supply Chain Solutions',
    'Business Intelligence',
    'Digital Transformation'
  ],
  'UI/UX Design': [
    'User Interface Design',
    'User Experience Design',
    'Mobile App Design',
    'Web Design',
    'Design Systems',
    'Responsive Design',
    'Prototyping',
    'Wireframing',
    'Interactive Design'
  ],
  'DevOps Services': [
    'CI/CD Implementation',
    'Infrastructure as Code',
    'Container Orchestration',
    'Microservices Architecture',
    'Performance Optimization',
    'Monitoring & Logging',
    'DevSecOps Integration',
    'Automated Testing',
    'Configuration Management'
  ],
  'Quality Assurance': [
    'Manual Testing',
    'Automated Testing',
    'Performance Testing',
    'Security Testing',
    'Mobile App Testing',
    'API Testing',
    'Test Automation Framework',
    'Load Testing',
    'Integration Testing'
  ]
};

export default function QuotePage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    projectCategory: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [messageLength, setMessageLength] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (messageLength < 100) {
      alert('Please provide a more detailed project description (minimum 100 characters)');
      return;
    }
    // Handle form submission
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Transform Your Vision into Reality
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with Synvra to bring your innovative ideas to life. Our expert team delivers cutting-edge solutions tailored to your unique needs.
            </p>
          </div>

          {/* Value Proposition Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <FaRocket className="text-blue-600 text-4xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation First</h3>
              <p className="text-gray-600">
                Stay ahead with cutting-edge technology solutions and industry best practices
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <FaCheckCircle className="text-blue-600 text-4xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Expertise</h3>
              <p className="text-gray-600">
                Benefit from our vast experience across multiple industries and technologies
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <FaClock className="text-blue-600 text-4xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Timely Delivery</h3>
              <p className="text-gray-600">
                Get your projects completed on schedule with our efficient development process
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <FaHandshake className="text-blue-600 text-4xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Dedicated Support</h3>
              <p className="text-gray-600">
                Receive personalized attention and ongoing support throughout your project
              </p>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Why Choose Synvra?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  🚀 Comprehensive Solutions
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Full-stack development expertise across multiple technologies
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Blockchain and cryptocurrency solutions
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    AI/ML integration capabilities
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Cloud-native architecture design
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  💪 Our Commitment
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Transparent communication throughout the project
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Scalable solutions that grow with your business
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Regular updates and progress tracking
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Post-deployment support and maintenance
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quote Form Section */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white shadow-xl rounded-lg p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Get Started Today</h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed proposal tailored to your needs.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6" data-netlify="true" name="quote-form" method="POST">
                <input type="hidden" name="form-name" value="quote-form" />
                
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="projectCategory" className="block text-sm font-medium text-gray-700">
                      Service Category *
                    </label>
                    <select
                      id="projectCategory"
                      name="projectCategory"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
                      value={formData.projectCategory}
                      onChange={(e) => {
                        const category = e.target.value;
                        setFormData({
                          ...formData,
                          projectCategory: category as ProjectCategory,
                          projectType: category ? PROJECT_TYPES[category as ProjectCategory][0] : ''
                        });
                      }}
                    >
                      <option value="">Select Service Category *</option>
                      {PROJECT_CATEGORIES.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700">
                      Specific Service *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      disabled={!formData.projectCategory}
                    >
                      <option value="">Select Specific Service *</option>
                      {formData.projectCategory && PROJECT_TYPES[formData.projectCategory as ProjectCategory].map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                      Budget Range *
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    >
                      <option value="">Select Budget Range *</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-250k">$100,000 - $250,000</option>
                      <option value="250k-500k">$250,000 - $500,000</option>
                      <option value="500k-1m">$500,000 - $1 million</option>
                      <option value="1m-5m">$1 million - $5 million</option>
                      <option value="5m-10m">$5 million - $10 million</option>
                      <option value="10m-50m">$10 million - $50 million</option>
                      <option value="50m-100m">$50 million - $100 million</option>
                      <option value="more-than-100m">More than $100 million</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700">
                      Project Timeline *
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    >
                      <option value="">Select Project Timeline *</option>
                      <option value="less-than-1-month">Less than 1 month</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-12-months">6-12 months</option>
                      <option value="more-than-12-months">More than 12 months</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Project Details * <span className="text-sm text-gray-500">(min 100 characters, max 50,000 characters)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    minLength={100}
                    maxLength={50000}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
                    placeholder="Please provide a detailed description of your project (minimum 100 characters). Include specific requirements, challenges, goals, and any relevant technical details..."
                    value={formData.message}
                    onChange={(e) => {
                      const newValue = e.target.value;
                      setFormData({ ...formData, message: newValue });
                      setMessageLength(newValue.length);
                      // Update character count display
                      const charCount = document.getElementById('charCount');
                      if (charCount) {
                        charCount.textContent = `${newValue.length} characters (minimum 100 required)`;
                      }
                    }}
                  />
                  <p id="charCount" className="mt-1 text-sm text-gray-500">0 characters (minimum 100 required)</p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">* Required fields</p>
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                  >
                    Request Quote
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
