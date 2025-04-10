'use client';

import PageWrapper from '@/components/PageWrapper';
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navigation from '@/components/Navigation';

export default function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'design', name: 'Design' },
    { id: 'product', name: 'Product' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'sales', name: 'Sales' },
  ];

  const positions = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'engineering',
      location: 'New York, NY (Hybrid)',
      type: 'Full-time',
      description: 'Join our engineering team to build innovative solutions using modern technologies.',
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'design',
      location: 'Remote (US)',
      type: 'Full-time',
      description: 'Create beautiful and intuitive user interfaces for our products and clients.',
    },
    {
      id: 3,
      title: 'Product Manager',
      department: 'product',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Lead product strategy and development for our enterprise solutions.',
    },
    {
      id: 4,
      title: 'Marketing Manager',
      department: 'marketing',
      location: 'Remote (US)',
      type: 'Full-time',
      description: 'Drive our marketing strategy and brand growth.',
    },
    {
      id: 5,
      title: 'Solutions Architect',
      department: 'engineering',
      location: 'New York, NY (Hybrid)',
      type: 'Full-time',
      description: 'Design and implement scalable architecture solutions for enterprise clients.',
    },
  ];

  const filteredPositions = selectedDepartment === 'all'
    ? positions
    : positions.filter(position => position.department === selectedDepartment);

  return (
    <PageWrapper>
      <Suspense fallback={<div>Loading careers page...</div>}>
        <main className="min-h-screen bg-gray-50">
          <Navigation />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Help us build the future of technology. We're always looking for talented individuals to join our team.
                </p>
              </div>

              {/* Why Join Us */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    title: "Innovation First",
                    description: "Work with cutting-edge technologies and shape the future of software development.",
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )
                  },
                  {
                    title: "Growth & Learning",
                    description: "Continuous learning opportunities and career development programs.",
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    )
                  },
                  {
                    title: "Great Benefits",
                    description: "Competitive salary, health insurance, flexible work hours, and more.",
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-lg"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Open Positions */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Open Positions</h2>
                
                {/* Department Filter */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {departments.map((dept) => (
                    <button
                      key={dept.id}
                      onClick={() => setSelectedDepartment(dept.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedDepartment === dept.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {dept.name}
                    </button>
                  ))}
                </div>

                {/* Positions List */}
                <div className="space-y-6">
                  {filteredPositions.map((position, index) => (
                    <motion.div
                      key={position.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white p-6 rounded-xl shadow-lg"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{position.title}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {position.location}
                            </span>
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {position.type}
                            </span>
                          </div>
                        </div>
                        <a
                          href={`/careers/${position.id}`}
                          className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                        >
                          View Position
                          <svg className="ml-2 -mr-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </a>
                      </div>
                      <p className="mt-4 text-gray-600">{position.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center bg-gray-900 text-white rounded-xl p-12"
              >
                <h2 className="text-3xl font-bold mb-4">Don't See the Right Position?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
                </p>
                <a
                  href="mailto:careers@synvra.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-colors"
                >
                  Contact Our Recruiting Team
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </main>
      </Suspense>
    </PageWrapper>
  );
}
