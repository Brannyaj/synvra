'use client';

import { motion } from 'framer-motion';

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Studies</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped businesses transform and succeed
            </p>
          </div>

          {/* Featured Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="text-blue-600 font-semibold mb-4">Featured Case Study</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Global FinTech Platform Transformation
                </h2>
                <p className="text-gray-600 mb-6">
                  How we helped a leading fintech company modernize their infrastructure and improve performance by 300%
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">300% performance improvement</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">50% reduction in operational costs</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">99.99% system uptime achieved</span>
                  </div>
                </div>
                <a
                  href="/case-studies/fintech-transformation"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                >
                  Read Full Case Study
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
              <div className="bg-gray-900 p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-5xl font-bold mb-4">300%</div>
                  <div className="text-xl">Performance Improvement</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Healthcare AI Implementation",
                client: "Major Hospital Network",
                description: "Implementing AI-powered diagnostic tools resulting in 40% faster patient diagnosis",
                results: ["40% faster diagnosis", "90% accuracy rate", "$2M annual savings"],
                category: "Healthcare"
              },
              {
                title: "E-commerce Platform Scaling",
                client: "Global Retail Brand",
                description: "Scaling infrastructure to handle 10x traffic during peak seasons",
                results: ["10x traffic capacity", "0 downtime", "2s page load time"],
                category: "Retail"
              },
              {
                title: "Secure Banking Platform",
                client: "Digital Bank",
                description: "Building a secure, compliant digital banking platform",
                results: ["PCI DSS compliance", "Zero breaches", "1M+ users"],
                category: "Finance"
              },
              {
                title: "Supply Chain Optimization",
                client: "Logistics Company",
                description: "AI-powered supply chain optimization reducing costs",
                results: ["30% cost reduction", "50% faster delivery", "99% accuracy"],
                category: "Logistics"
              },
              {
                title: "Smart City Implementation",
                client: "Metropolitan Government",
                description: "IoT and AI solutions for smart city management",
                results: ["40% energy savings", "30% less traffic", "Real-time monitoring"],
                category: "Government"
              },
              {
                title: "EdTech Platform Development",
                client: "Education Provider",
                description: "Building a scalable online learning platform",
                results: ["1M+ students", "95% satisfaction", "24/7 availability"],
                category: "Education"
              }
            ].map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-semibold mb-2">{study.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{study.client}</p>
                  <p className="text-gray-600 mb-6">{study.description}</p>
                  <div className="space-y-2">
                    {study.results.map((result) => (
                      <div key={result} className="flex items-center text-sm">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-6 py-4 bg-gray-50">
                  <a
                    href={`/case-studies/${study.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-blue-600 font-semibold text-sm hover:text-blue-700"
                  >
                    Read More →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Industries Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Industries We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                "Healthcare",
                "Finance",
                "Retail",
                "Education",
                "Manufacturing",
                "Technology",
                "Government",
                "Logistics",
                "Energy",
                "Real Estate",
                "Media",
                "Non-Profit"
              ].map((industry, index) => (
                <motion.div
                  key={industry}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white p-4 rounded-lg shadow text-center"
                >
                  <span className="text-gray-900">{industry}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can help you achieve similar results
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Schedule a Consultation
              <svg className="ml-2 -mr-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
