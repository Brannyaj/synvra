'use client';

import { motion } from 'framer-motion';
import { useState, Suspense } from 'react';
import { caseStudies } from '@/data/case-studies';
import Image from 'next/image';

function CaseStudyContent() {
  const [activeStudy, setActiveStudy] = useState(caseStudies[0]);

  return (
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
            <div className="prose prose-lg max-w-none">
              <p>{activeStudy.description}</p>
              <h4 className="text-lg font-semibold mt-6 mb-4">Key Results:</h4>
              <ul>
                {activeStudy.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <a
                href={`/case-studies/${activeStudy.slug}`}
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                Read Full Case Study
                <svg
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Case Study List */}
        <div className="lg:col-span-4 space-y-6">
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
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CaseStudiesSection() {
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

        <Suspense fallback={<div>Loading case studies...</div>}>
          <CaseStudyContent />
        </Suspense>
      </div>
    </section>
  );
}
