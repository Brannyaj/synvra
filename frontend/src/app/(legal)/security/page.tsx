'use client';

import { motion } from 'framer-motion';

export default function Security() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Security</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to protecting your data and maintaining trust
            </p>
          </div>

          {/* Security Overview */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
            <div className="p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Security Overview</h2>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  At Synvra, security is not just a feature - it's a fundamental part of our infrastructure and operations. 
                  We employ industry-leading security measures and best practices to ensure your data remains protected.
                </p>
                <p>
                  Our security program is built on multiple layers of controls, continuous monitoring, and regular 
                  third-party audits to maintain the highest standards of security and compliance.
                </p>
              </div>
            </div>
          </div>

          {/* Security Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Data Encryption",
                description: "All data is encrypted at rest and in transit using industry-standard encryption protocols",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                )
              },
              {
                title: "Access Control",
                description: "Role-based access control and multi-factor authentication for all accounts",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "24/7 Monitoring",
                description: "Continuous security monitoring and automated threat detection",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "Compliance",
                description: "Adherence to global security standards and regulations",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Backup & Recovery",
                description: "Regular backups and disaster recovery procedures",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                )
              },
              {
                title: "Penetration Testing",
                description: "Regular security assessments and vulnerability testing",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Compliance & Certifications */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Compliance & Certifications</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "ISO 27001",
                "SOC 2 Type II",
                "GDPR",
                "HIPAA",
                "PCI DSS",
                "CCPA",
                "NIST",
                "FedRAMP"
              ].map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-center justify-center p-4 bg-gray-50 rounded-lg"
                >
                  <span className="text-gray-900 font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Security Practices */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Physical Security</h3>
              <ul className="space-y-3">
                {[
                  "24/7 security personnel",
                  "Biometric access controls",
                  "Video surveillance",
                  "Environmental controls",
                  "Redundant power systems"
                ].map((item) => (
                  <li key={item} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Network Security</h3>
              <ul className="space-y-3">
                {[
                  "DDoS protection",
                  "Firewall protection",
                  "Intrusion detection",
                  "Regular security audits",
                  "Vulnerability scanning"
                ].map((item) => (
                  <li key={item} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Security Contacts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Security Contacts</h2>
            <p className="text-gray-600 mb-8">
              For security concerns or to report vulnerabilities, please contact our security team
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="mailto:security@synvra.com"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Contact Security Team
              </a>
              <a
                href="/security/report-vulnerability"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Report Vulnerability
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
