'use client';

import { motion } from 'framer-motion';

export default function Compliance() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Compliance</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to meeting global regulatory requirements and industry standards
            </p>
          </div>

          {/* Compliance Overview */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
            <div className="p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Compliance Overview</h2>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  Synvra maintains a comprehensive compliance program that adheres to international standards
                  and regulations. We regularly undergo independent audits and assessments to ensure our
                  services meet or exceed compliance requirements.
                </p>
                <p>
                  Our dedicated compliance team works continuously to maintain certifications and implement
                  controls that protect our customers' data and privacy across all jurisdictions.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Certifications & Standards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "ISO 27001",
                  description: "Information security management system (ISMS) certification",
                  status: "Active",
                  lastAudit: "March 2025"
                },
                {
                  name: "SOC 2 Type II",
                  description: "Security, availability, and confidentiality controls",
                  status: "Active",
                  lastAudit: "February 2025"
                },
                {
                  name: "PCI DSS",
                  description: "Payment Card Industry Data Security Standard",
                  status: "Active",
                  lastAudit: "January 2025"
                },
                {
                  name: "HIPAA",
                  description: "Healthcare data protection and privacy",
                  status: "Active",
                  lastAudit: "March 2025"
                },
                {
                  name: "FedRAMP",
                  description: "Federal Risk and Authorization Management Program",
                  status: "Active",
                  lastAudit: "December 2024"
                },
                {
                  name: "GDPR",
                  description: "European Union data protection and privacy",
                  status: "Compliant",
                  lastAudit: "March 2025"
                }
              ].map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{cert.name}</h3>
                    <span className="px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
                      {cert.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{cert.description}</p>
                  <div className="text-sm text-gray-500">
                    Last Audit: {cert.lastAudit}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Regulatory Compliance */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Regulatory Compliance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  region: "European Union",
                  regulations: ["GDPR", "ePrivacy Directive", "NIS Directive"],
                  icon: "🇪🇺"
                },
                {
                  region: "United States",
                  regulations: ["CCPA", "HIPAA", "SOX", "GLBA"],
                  icon: "🇺🇸"
                },
                {
                  region: "Asia Pacific",
                  regulations: ["PDPA", "APPI", "PIPL"],
                  icon: "🌏"
                },
                {
                  region: "Global",
                  regulations: ["ISO Standards", "PCI DSS", "NIST Framework"],
                  icon: "🌍"
                }
              ].map((region, index) => (
                <motion.div
                  key={region.region}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-gray-50 rounded-xl"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{region.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900">{region.region}</h3>
                  </div>
                  <ul className="space-y-2">
                    {region.regulations.map((reg) => (
                      <li key={reg} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {reg}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Compliance Process */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Compliance Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "Assessment",
                  description: "Regular evaluation of compliance requirements and controls",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  )
                },
                {
                  step: "Implementation",
                  description: "Deployment of necessary controls and safeguards",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  )
                },
                {
                  step: "Monitoring",
                  description: "Continuous oversight of compliance controls",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )
                },
                {
                  step: "Reporting",
                  description: "Regular compliance reporting and certification maintenance",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )
                }
              ].map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg text-center"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mx-auto mb-4">
                    {process.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.step}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Compliance Inquiries</h2>
            <p className="text-gray-600 mb-8">
              For detailed compliance information or to request compliance documentation
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="mailto:compliance@synvra.com"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Contact Compliance Team
              </a>
              <a
                href="/compliance/documentation"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                View Documentation
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
