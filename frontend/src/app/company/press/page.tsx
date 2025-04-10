'use client';

import { motion } from 'framer-motion';

export default function Press() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Press & Media</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Latest news, announcements, and media resources
            </p>
          </div>

          {/* Latest Press Release */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16"
          >
            <div className="p-8 lg:p-12">
              <div className="text-blue-600 font-semibold mb-4">Latest Press Release</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Synvra Announces Revolutionary AI-Powered Development Platform
              </h2>
              <p className="text-gray-600 mb-6">
                Leading tech company unveils new platform that promises to transform software development with advanced AI capabilities
              </p>
              <div className="flex items-center mb-8">
                <div>
                  <p className="text-sm text-gray-500">April 10, 2025</p>
                  <p className="text-sm text-gray-500">San Francisco, CA</p>
                </div>
              </div>
              <a
                href="/press/synvra-ai-platform-announcement"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
              >
                Read Full Release
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Press Releases Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Press Releases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Synvra Expands Global Operations",
                  excerpt: "Company announces new offices in Europe and Asia to better serve international clients",
                  date: "April 5, 2025",
                  location: "London, UK"
                },
                {
                  title: "Q1 2025 Financial Results",
                  excerpt: "Record-breaking quarter with 200% year-over-year growth in enterprise customers",
                  date: "April 1, 2025",
                  location: "San Francisco, CA"
                },
                {
                  title: "New Strategic Partnership",
                  excerpt: "Synvra partners with leading cloud provider to enhance service offerings",
                  date: "March 28, 2025",
                  location: "Seattle, WA"
                },
                {
                  title: "Innovation Award Winner",
                  excerpt: "Synvra recognized for breakthrough achievements in AI development",
                  date: "March 15, 2025",
                  location: "New York, NY"
                },
                {
                  title: "Sustainability Initiative",
                  excerpt: "Company commits to carbon-neutral operations by 2026",
                  date: "March 10, 2025",
                  location: "San Francisco, CA"
                },
                {
                  title: "Tech Education Program",
                  excerpt: "Launch of new program to support next generation of developers",
                  date: "March 1, 2025",
                  location: "Boston, MA"
                }
              ].map((release, index) => (
                <motion.div
                  key={release.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{release.title}</h3>
                    <p className="text-gray-600 mb-4">{release.excerpt}</p>
                    <div className="text-sm text-gray-500 mb-4">
                      <p>{release.date}</p>
                      <p>{release.location}</p>
                    </div>
                    <a
                      href={`/press/${release.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-blue-600 font-semibold text-sm hover:text-blue-700"
                    >
                      Read More →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Media Resources */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Media Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Brand Assets</h3>
                <p className="text-gray-600 mb-6">
                  Download our logo, brand guidelines, and other visual assets
                </p>
                <a
                  href="/media-kit.zip"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                >
                  Download Media Kit
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Media Contact</h3>
                <div className="space-y-4">
                  <p className="text-gray-600">For press inquiries, please contact:</p>
                  <div>
                    <p className="font-medium text-gray-900">Sarah Johnson</p>
                    <p className="text-gray-600">Head of Communications</p>
                    <p className="text-gray-600">press@synvra.com</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* In the News */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">In the News</h2>
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  source: "TechCrunch",
                  title: "Synvra's AI Platform Could Revolutionize Software Development",
                  date: "April 8, 2025",
                  url: "https://techcrunch.com"
                },
                {
                  source: "Forbes",
                  title: "The Rise of Synvra: Silicon Valley's Latest Unicorn",
                  date: "April 3, 2025",
                  url: "https://forbes.com"
                },
                {
                  source: "Bloomberg",
                  title: "Synvra Secures $200M Series C Funding",
                  date: "March 25, 2025",
                  url: "https://bloomberg.com"
                }
              ].map((article, index) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-blue-600 font-semibold mb-2">{article.source}</p>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{article.title}</h3>
                      <p className="text-sm text-gray-500">{article.date}</p>
                    </div>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Follow Us</h2>
            <div className="flex justify-center space-x-6">
              {[
                {
                  name: "Twitter",
                  url: "https://twitter.com/synvra",
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  )
                },
                {
                  name: "LinkedIn",
                  url: "https://linkedin.com/company/synvra",
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  )
                }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
