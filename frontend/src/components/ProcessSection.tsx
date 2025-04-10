'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const processes = [
  {
    id: 1,
    title: 'Discovery & Planning',
    description: 'We begin with a thorough analysis of your requirements, market research, and project planning to ensure perfect alignment with your business goals.',
    number: '01',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    details: [
      'Requirements gathering',
      'Market analysis',
      'Project scope definition',
      'Timeline planning'
    ]
  },
  {
    id: 2,
    title: 'Design & Architecture',
    description: 'Our team creates detailed technical specifications and system architecture, ensuring scalability, security, and optimal performance.',
    number: '02',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    details: [
      'System architecture design',
      'Database schema planning',
      'API specifications',
      'Security protocols'
    ]
  },
  {
    id: 3,
    title: 'Development & Testing',
    description: 'Using agile methodologies, we develop your solution with continuous testing and quality assurance at every step.',
    number: '03',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    details: [
      'Agile development sprints',
      'Continuous integration',
      'Automated testing',
      'Code quality reviews'
    ]
  },
  {
    id: 4,
    title: 'Deployment & Support',
    description: 'We ensure smooth deployment and provide ongoing support and maintenance to keep your solution running optimally.',
    number: '04',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    details: [
      'Production deployment',
      '24/7 monitoring',
      'Performance optimization',
      'Regular updates'
    ]
  }
];

export default function ProcessSection() {
  const [activeProcess, setActiveProcess] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Development Process
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-300">
            We follow a structured and transparent development process to ensure the successful delivery of your project.
          </p>
        </motion.div>

        <div className="mt-16 relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-blue-500/20 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            {processes.map((process, index) => (
              <motion.div
                key={process.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
                onMouseEnter={() => setActiveProcess(process.id)}
                onMouseLeave={() => setActiveProcess(null)}
              >
                <motion.div 
                  className={`relative p-8 rounded-xl transition-all duration-300 ${
                    activeProcess === process.id 
                      ? 'bg-blue-600 shadow-xl shadow-blue-500/25' 
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                  animate={{
                    scale: activeProcess === process.id ? 1.05 : 1,
                  }}
                >
                  <div className={`absolute -top-4 left-8 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${
                    activeProcess === process.id 
                      ? 'bg-white text-blue-600' 
                      : 'bg-blue-600 text-white'
                  }`}>
                    {process.number}
                  </div>
                  <div className={`mb-4 ${
                    activeProcess === process.id 
                      ? 'text-white' 
                      : 'text-blue-500'
                  }`}>
                    {process.icon}
                  </div>
                  <h3 className={`text-xl font-semibold mb-4 ${
                    activeProcess === process.id 
                      ? 'text-white' 
                      : 'text-gray-100'
                  }`}>
                    {process.title}
                  </h3>
                  <p className={
                    activeProcess === process.id 
                      ? 'text-blue-50' 
                      : 'text-gray-400'
                  }>
                    {process.description}
                  </p>
                  
                  {/* Details List */}
                  <motion.ul 
                    className="mt-6 space-y-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: activeProcess === process.id ? 1 : 0,
                      height: activeProcess === process.id ? 'auto' : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {process.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ 
                          opacity: activeProcess === process.id ? 1 : 0,
                          x: activeProcess === process.id ? 0 : -20
                        }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className={`flex items-center space-x-2 ${
                          activeProcess === process.id 
                            ? 'text-blue-50' 
                            : 'text-gray-400'
                        }`}
                      >
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                        </svg>
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
