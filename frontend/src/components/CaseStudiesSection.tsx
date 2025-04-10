'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { caseStudies } from '@/data/case-studies';
import Image from 'next/image';

export default function CaseStudiesSection() {
  const [activeStudy, setActiveStudy] = useState(caseStudies[0]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped leading organizations achieve digital excellence through innovative solutions and strategic implementation.
          </p>
        </motion.div>

        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Case Study Display */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8 bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="relative h-64 sm:h-80">
                <Image
                  src={activeStudy.imageUrl}
                  alt={activeStudy.title}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-semibold text-blue-400">{activeStudy.industry}</p>
                  <h3 className="mt-2 text-2xl font-bold">{activeStudy.title}</h3>
                  <p className="mt-2 text-gray-300">{activeStudy.client}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {activeStudy.results.map((result, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">{result.value}</p>
                      <p className="text-sm text-gray-600">{result.metric}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Challenge</h4>
                    <p className="mt-2 text-gray-600">{activeStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Solution</h4>
                    <p className="mt-2 text-gray-600">{activeStudy.solution}</p>
                  </div>
                </div>

                {activeStudy.testimonial && (
                  <blockquote className="mt-6 border-l-4 border-blue-500 pl-4 italic text-gray-600">
                    "{activeStudy.testimonial.quote}"
                    <footer className="mt-2 text-sm text-gray-500 not-italic">
                      <strong>{activeStudy.testimonial.author}</strong> - {activeStudy.testimonial.position}
                    </footer>
                  </blockquote>
                )}

                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-gray-900">Technologies Used</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {activeStudy.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Case Studies List */}
            <div className="lg:col-span-4 space-y-4">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`cursor-pointer p-4 rounded-lg transition-all duration-200 ${
                    activeStudy.id === study.id
                      ? 'bg-blue-50 border-2 border-blue-500'
                      : 'bg-white hover:bg-gray-50 border-2 border-transparent'
                  }`}
                  onClick={() => setActiveStudy(study)}
                >
                  <h3 className="font-semibold text-gray-900">{study.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{study.client}</p>
                  <p className="mt-2 text-xs text-gray-500">Duration: {study.duration}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
