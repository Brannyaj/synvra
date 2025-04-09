'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface Service {
  title: string;
  description: string;
  detailedInfo: {
    overview: string;
    benefits: string[];
    technologies: string[];
    process: string[];
    deliverables: string[];
  };
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service;
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  if (!service) return null;

  const handleClose = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-4 sm:inset-auto sm:top-[10%] sm:left-[50%] sm:transform sm:-translate-x-1/2 bg-white rounded-xl shadow-2xl z-50 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <XMarkIcon className="w-6 h-6 text-gray-500" />
            </button>

            <div className="p-6 sm:p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
              <p className="text-lg text-gray-600 mb-8">{service.description}</p>

              {/* Overview */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview</h3>
                <p className="text-gray-600">{service.detailedInfo.overview}</p>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.detailedInfo.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies We Use</h3>
                <div className="flex flex-wrap gap-2">
                  {service.detailedInfo.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Process</h3>
                <div className="space-y-4">
                  {service.detailedInfo.process.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                        {index + 1}
                      </div>
                      <p className="ml-4 text-gray-600">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What You Get</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.detailedInfo.deliverables.map((deliverable, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-8 flex justify-end gap-4">
                <button
                  onClick={handleClose}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
                <Link
                  href={`/quote?service=${encodeURIComponent(service.title)}`}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={handleClose}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
