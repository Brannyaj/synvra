'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Modern E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory management, AI-powered product recommendations, and seamless payment integration.',
    image: '/portfolio/ecommerce.jpg',
    category: 'web',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe API']
  },
  {
    id: 2,
    title: 'Secure Banking Application',
    description: 'A secure mobile banking solution with biometric authentication, real-time transactions, and comprehensive financial management tools.',
    image: '/portfolio/banking.jpg',
    category: 'mobile',
    tech: ['React Native', 'Node.js', 'MongoDB', 'OAuth 2.0']
  },
  {
    id: 3,
    title: 'AI Content Analysis Platform',
    description: 'Advanced AI platform for content analysis, featuring natural language processing, sentiment analysis, and automated content moderation.',
    image: '/portfolio/ai.jpg',
    category: 'ai',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'Docker']
  },
  {
    id: 4,
    title: 'Real Estate Management System',
    description: 'Comprehensive real estate platform with virtual property tours, automated valuation models, and integrated CRM system.',
    image: '/portfolio/realestate.jpg',
    category: 'web',
    tech: ['React', 'Express', 'PostgreSQL', 'ThreeJS']
  },
  {
    id: 5,
    title: 'Healthcare Analytics Dashboard',
    description: 'Advanced analytics platform for healthcare providers, featuring predictive diagnostics, patient monitoring, and resource optimization.',
    image: '/portfolio/healthcare.jpg',
    category: 'ai',
    tech: ['Python', 'React', 'AWS', 'TensorFlow']
  },
  {
    id: 6,
    title: 'Last-Mile Delivery Platform',
    description: 'Efficient delivery management system with real-time tracking, route optimization, and automated dispatch system.',
    image: '/portfolio/delivery.jpg',
    category: 'mobile',
    tech: ['Flutter', 'Firebase', 'Google Maps API', 'Node.js']
  }
];

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'web', name: 'Web Development' },
  { id: 'mobile', name: 'Mobile Apps' },
  { id: 'ai', name: 'AI & Machine Learning' },
];

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter(
    project => selectedCategory === 'all' || project.category === selectedCategory
  );

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Portfolio
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Explore our latest projects and see how we help businesses transform their digital presence.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedProject(project)}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer transform hover:scale-105 transition-transform duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: '240px'
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <p className="mt-2 text-gray-500">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
              >
                <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                  <div className="relative">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <div 
                      className="w-full h-64 bg-cover bg-center"
                      style={{ 
                        backgroundImage: `url(${selectedProject.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                    <div className="p-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>
                      <p className="text-lg text-gray-600 mb-6">{selectedProject.description}</p>
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-900">Technologies Used</h3>
                        <div className="flex flex-wrap gap-3">
                          {selectedProject.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
