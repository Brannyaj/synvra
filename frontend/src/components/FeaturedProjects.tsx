'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const projects = [
  {
    id: 'trading',
    title: 'AI-Powered Trading Platform',
    description: 'Revolutionary trading platform using machine learning for predictive analytics and automated trading strategies.',
    image: '/images/projects/trading-platform.svg',
    path: '/projects/trading',
    stats: [
      { value: '50K+', label: 'Users' },
      { value: '$2B+', label: 'Transactions' },
      { value: '94%', label: 'Accuracy' }
    ],
    technologies: ['Python', 'TensorFlow', 'React', 'AWS']
  },
  {
    id: 'healthcare',
    title: 'Healthcare Analytics',
    description: 'Advanced healthcare analytics platform for predictive diagnosis and patient care optimization.',
    image: '/images/projects/healthcare.svg',
    path: '/projects/healthcare',
    stats: [
      { value: '100+', label: 'Hospitals' },
      { value: '1M+', label: 'Patients' },
      { value: '99.9%', label: 'Uptime' }
    ],
    technologies: ['Python', 'TensorFlow', 'React', 'GCP']
  },
  {
    id: 'quantum',
    title: 'Quantum Computing Research',
    description: 'Cutting-edge quantum computing research platform for complex simulations and optimization problems.',
    image: '/images/projects/quantum.svg',
    path: '/projects/quantum',
    stats: [
      { value: '100+', label: 'Research Papers' },
      { value: '50+', label: 'Patents' },
      { value: '10x', label: 'Performance' }
    ],
    technologies: ['Q#', 'Python', 'React', 'Azure Quantum']
  }
];

export default function FeaturedProjects() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const router = useRouter();

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400">
            Explore our most innovative and impactful solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Project Demo */}
          <motion.div 
            className="relative aspect-video rounded-2xl overflow-hidden bg-gray-800"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Technology Tags */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {activeProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm font-medium text-white bg-blue-600/80 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Project Stats */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-gray-900 to-transparent p-6">
              <div className="grid grid-cols-3 gap-4">
                {activeProject.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Project List */}
          <div className="space-y-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className={`block p-6 rounded-xl cursor-pointer transition-all duration-300 group ${
                  activeProject.id === project.id
                    ? 'bg-blue-600 transform scale-105'
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
                onClick={() => {
                  setActiveProject(project);
                  setTimeout(() => {
                    router.push(project.path);
                  }, 300);
                }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className={`text-sm ${
                      activeProject.id === project.id
                        ? 'text-blue-50'
                        : 'text-gray-400'
                    }`}>
                      {project.description}
                    </p>
                  </div>
                  <div className={`ml-4 transform transition-transform duration-300 ${
                    activeProject.id === project.id ? 'rotate-90' : 'group-hover:translate-x-2'
                  }`}>
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className={`mt-4 flex justify-end transition-opacity duration-300 ${
                  activeProject.id === project.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}>
                  <span className="text-sm font-medium text-white">
                    View Project Details →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}