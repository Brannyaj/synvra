'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TechInfo {
  title: string;
  description: string;
  icon: React.ReactNode;
  details: {
    benefits: string[];
    useCase: string;
    stats: string;
  };
}

const technologies: TechInfo[] = [
  {
    title: "AI & Machine Learning",
    description: "Advanced algorithms that learn and adapt",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    details: {
      benefits: [
        "Predictive analytics for business insights",
        "Automated decision-making processes",
        "Pattern recognition and trend analysis",
        "Natural language processing capabilities"
      ],
      useCase: "Implemented by Fortune 500 companies for customer behavior prediction, resulting in 40% increased engagement",
      stats: "85% of enterprises report significant ROI within first year"
    }
  },
  {
    title: "Blockchain Technology",
    description: "Secure, transparent, and decentralized solutions",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    details: {
      benefits: [
        "Immutable and transparent record-keeping",
        "Smart contract automation",
        "Enhanced security protocols",
        "Decentralized data management"
      ],
      useCase: "Deployed in supply chain management, reducing verification time by 60%",
      stats: "70% reduction in data breaches for implemented systems"
    }
  },
  {
    title: "Cloud Native Architecture",
    description: "Scalable and resilient infrastructure",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    details: {
      benefits: [
        "Auto-scaling capabilities",
        "Microservices architecture",
        "Container orchestration",
        "Zero-downtime deployments"
      ],
      useCase: "Enabled 99.99% uptime for global e-commerce platforms",
      stats: "50% reduction in operational costs"
    }
  }
];

export default function NextGenTechnology() {
  const [selectedTech, setSelectedTech] = useState<TechInfo | null>(null);

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Next-Generation Technology
          </h2>
          <p className="text-xl text-gray-400">
            Powering digital transformation with cutting-edge solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedTech(tech)}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  selectedTech?.title === tech.title
                    ? 'bg-blue-600'
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${
                    selectedTech?.title === tech.title
                      ? 'bg-blue-500'
                      : 'bg-blue-600/10'
                  }`}>
                    {tech.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {tech.title}
                    </h3>
                    <p className="text-gray-300">{tech.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Details Panel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {selectedTech && (
                <motion.div
                  key={selectedTech.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-800 rounded-xl p-8 sticky top-8"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">
                    {selectedTech.title} Details
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-3">
                        Key Benefits
                      </h4>
                      <ul className="space-y-2">
                        {selectedTech.details.benefits.map((benefit, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center text-gray-300"
                          >
                            <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {benefit}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-3">
                        Success Story
                      </h4>
                      <p className="text-gray-300">
                        {selectedTech.details.useCase}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-3">
                        Impact
                      </h4>
                      <div className="bg-gray-700/50 rounded-lg p-4">
                        <p className="text-xl font-semibold text-white">
                          {selectedTech.details.stats}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
