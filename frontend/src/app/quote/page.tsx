'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { useRouter } from 'next/navigation';

const PROJECT_TYPES = {
  'Web Development': [
    'Custom Web Applications',
    'E-commerce Solutions',
    'Progressive Web Apps (PWA)',
    'Content Management Systems (CMS)',
    'Web Portal Development',
    'API Development & Integration'
  ],
  'Mobile Development': [
    'iOS App Development',
    'Android App Development',
    'Cross-platform Mobile Apps',
    'Mobile App UI/UX Design',
    'App Maintenance & Support',
    'Mobile App Testing'
  ],
  'Cloud Solutions': [
    'Cloud Migration',
    'Cloud Infrastructure Setup',
    'Cloud Security Solutions',
    'DevOps Implementation',
    'Serverless Architecture',
    'Cloud Optimization'
  ],
  'AI & Machine Learning': [
    'AI Application Development',
    'Machine Learning Models',
    'Natural Language Processing',
    'Computer Vision Solutions',
    'Predictive Analytics',
    'AI Model Training & Deployment'
  ],
  'Cybersecurity': [
    'Security Assessment',
    'Penetration Testing',
    'Security Monitoring',
    'Incident Response',
    'Compliance Implementation',
    'Security Training'
  ],
  'Enterprise Solutions': [
    'ERP Systems',
    'CRM Development',
    'Business Process Automation',
    'Enterprise Integration',
    'Data Analytics Solutions',
    'Legacy System Modernization'
  ]
};

export default function QuotePage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    projectCategory: Object.keys(PROJECT_TYPES)[0],
    projectType: PROJECT_TYPES[Object.keys(PROJECT_TYPES)[0]][0],
    budget: 'not-specified',
    timeline: 'flexible',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get a Quote</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tell us about your project and we'll get back to you within 24 hours with a detailed proposal.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow-xl rounded-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Get a Quote</h1>
              <p className="text-lg text-gray-600">
                Tell us about your project and we'll get back to you within 24 hours with a detailed proposal.
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
                        projectCategory: category,
                        projectType: PROJECT_TYPES[category][0]
                      });
                    }}
                  >
                    {Object.keys(PROJECT_TYPES).map((category) => (
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
                  >
                    {PROJECT_TYPES[formData.projectCategory].map((type) => (
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
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  >
                    <option value="not-specified">Not Specified</option>
                    <option value="less-than-10k">Less than $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="more-than-100k">More than $100,000</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700">
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  >
                    <option value="flexible">Flexible</option>
                    <option value="less-than-1-month">Less than 1 month</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="more-than-6-months">More than 6 months</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
                  placeholder="Please describe your project, including any specific requirements or challenges..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
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
    </main>
  );
}
