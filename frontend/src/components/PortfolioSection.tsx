'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { expandedPortfolio } from '@/data/expanded-portfolio';
import Image from 'next/image';

function PortfolioContent() {
  const [activeProject, setActiveProject] = useState(expandedPortfolio[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(expandedPortfolio.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPortfolioItems = expandedPortfolio.slice(startIndex, endIndex);

  return (
    <div className="mt-16 lg:mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Project Display */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-8 bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="relative h-64 sm:h-80">
            <Image
              src={activeProject.imageUrl}
              alt={activeProject.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-sm font-semibold text-blue-400">{activeProject.industry}</p>
              <h3 className="mt-2 text-2xl font-bold">{activeProject.title}</h3>
            </div>
          </div>

          <div className="p-6">
            <div className="prose prose-lg max-w-none">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Challenge:</h4>
                <p className="text-lg text-gray-800 leading-relaxed mb-8">{activeProject.challenge}</p>
                
                <h4 className="text-xl font-bold text-gray-900 mb-4">Solution:</h4>
                <p className="text-lg text-gray-800 leading-relaxed mb-8">{activeProject.solution}</p>
              </div>

              <h4 className="text-xl font-bold text-gray-900 mt-8 mb-6">Key Results:</h4>
              <div className="grid grid-cols-2 gap-6 my-8">
                {activeProject.results.map((result, index) => (
                  <div key={index} className="bg-blue-50 p-6 rounded-xl">
                    <div className="text-3xl font-bold text-blue-600 mb-1">{result.value}</div>
                    <div className="text-gray-600">{result.metric}</div>
                  </div>
                ))}
              </div>

              {activeProject.testimonial && (
                <div className="mt-8 bg-gray-50 p-6 rounded-xl">
                  <blockquote className="text-lg text-gray-700 italic mb-4">{activeProject.testimonial.quote}</blockquote>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {activeProject.testimonial.author.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{activeProject.testimonial.author}</div>
                      <div className="text-sm text-gray-600">{activeProject.testimonial.position}</div>
                    </div>
                  </div>
                </div>
              )}

              <h4 className="text-lg font-semibold mt-6 mb-4">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {activeProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project List */}
        <div className="lg:col-span-4">
          <div className="space-y-4 mb-8">
            {currentPortfolioItems.map((project, index) => (
              <motion.button
                key={project.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onClick={() => setActiveProject(project)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-200 ${
                  activeProject.id === project.id
                    ? 'bg-white shadow-xl scale-[1.02]'
                    : 'bg-gray-100 hover:bg-white hover:shadow-lg'
                }`}
              >
                <p className="text-sm font-semibold text-blue-600">
                  {project.industry}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">Duration: {project.duration}</p>
              </motion.button>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <span className="text-gray-600">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full">
            Success Stories
          </span>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Transforming Ideas into Reality
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped leading organizations achieve digital excellence through innovative solutions and strategic implementation.
          </p>
        </motion.div>

        <Suspense fallback={
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        }>
          <PortfolioContent />
        </Suspense>
      </div>
    </section>
  );
}
