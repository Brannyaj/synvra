'use client';

import { motion } from 'framer-motion';

const processes = [
  {
    id: 1,
    title: 'Discovery & Planning',
    description: 'We begin with a thorough analysis of your requirements, market research, and project planning to ensure perfect alignment with your business goals.',
    number: '01'
  },
  {
    id: 2,
    title: 'Design & Architecture',
    description: 'Our team creates detailed technical specifications and system architecture, ensuring scalability, security, and optimal performance.',
    number: '02'
  },
  {
    id: 3,
    title: 'Development & Testing',
    description: 'Using agile methodologies, we develop your solution with continuous testing and quality assurance at every step.',
    number: '03'
  },
  {
    id: 4,
    title: 'Deployment & Support',
    description: 'We ensure smooth deployment and provide ongoing support and maintenance to keep your solution running optimally.',
    number: '04'
  }
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Development Process
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            We follow a structured and transparent development process to ensure the successful delivery of your project.
          </p>
        </motion.div>

        <div className="mt-16 relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gray-200 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            {processes.map((process, index) => (
              <motion.div
                key={process.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="relative bg-white p-8 rounded-xl shadow-lg z-10">
                  <div className="absolute -top-4 left-8 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {process.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-4">
                    {process.title}
                  </h3>
                  <p className="text-gray-500">
                    {process.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
