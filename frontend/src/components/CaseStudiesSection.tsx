'use client';

import { motion } from 'framer-motion';
import { useState, Suspense } from 'react';
import { caseStudies } from '@/data/case-studies';
import Image from 'next/image';

function CaseStudyContent() {
  const [activeStudy, setActiveStudy] = useState(caseStudies[0]);

  return (
    <div className="mt-16 lg:mt-20">
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
          <div className="prose prose-lg max-w-none">
            <h4 className="text-lg font-semibold mt-6 mb-4">Challenge:</h4>
            <p>{activeStudy.challenge}</p>
            
            <h4 className="text-lg font-semibold mt-6 mb-4">Solution:</h4>
            <p>{activeStudy.solution}</p>
            
            <h4 className="text-lg font-semibold mt-6 mb-4">Key Results:</h4>
            <div className="grid grid-cols-2 gap-6 my-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-1">100x faster</div>
                <div className="text-gray-600">Data Processing Speed</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-1">Reduced by 80%</div>
                <div className="text-gray-600">Decision Making Time</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-1">$15M annually</div>
                <div className="text-gray-600">Cost Savings</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-1">99.99%</div>
                <div className="text-gray-600">System Accuracy</div>
              </div>
            </div>

            {activeStudy.testimonial && (
              <div className="mt-8 bg-gray-50 p-6 rounded-xl">
                <blockquote className="text-lg text-gray-700 italic mb-4">{activeStudy.testimonial.quote}</blockquote>
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {activeStudy.testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{activeStudy.testimonial.author}</div>
                    <div className="text-sm text-gray-600">{activeStudy.testimonial.position}</div>
                  </div>
                </div>
              </div>
            )}

            <h4 className="text-lg font-semibold mt-6 mb-4">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {activeStudy.technologies.map((tech, index) => (
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

      {/* Case Study List */}
      <div className="lg:col-span-4 space-y-4">
        {caseStudies.map((study, index) => (
          <motion.button
            key={study.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            onClick={() => setActiveStudy(study)}
            className={`w-full text-left p-6 rounded-xl transition-all duration-200 ${
              activeStudy.id === study.id
                ? 'bg-white shadow-xl scale-[1.02]'
                : 'bg-gray-100 hover:bg-white hover:shadow-lg'
            }`}
          >
            <p className="text-sm font-semibold text-blue-600">
              {study.industry}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-gray-900">
              {study.title}
            </h3>
            <p className="mt-1 text-gray-600">{study.client}</p>
            <p className="mt-2 text-sm text-gray-500">Duration: {study.duration}</p>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default function CaseStudiesSection() {
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
          <CaseStudyContent />
        </Suspense>
      </div>
    </section>
  );
}
