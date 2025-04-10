'use client';

import { motion } from 'framer-motion';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: April 10, 2025
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              1. Agreement to Terms
            </h2>
            <p className="text-gray-600 mb-6">
              By accessing or using Synvra's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              2. Services
            </h2>
            <p className="text-gray-600 mb-4">
              Synvra provides the following services:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Software development and consulting</li>
              <li>Web and mobile application development</li>
              <li>Cloud solutions and infrastructure</li>
              <li>AI and machine learning services</li>
              <li>Cybersecurity solutions</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              3. Intellectual Property
            </h2>
            <p className="text-gray-600 mb-6">
              All content, features, and functionality of our services are owned by Synvra and are protected by international copyright, trademark, and other intellectual property laws.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              4. User Responsibilities
            </h2>
            <p className="text-gray-600 mb-4">
              You agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not interfere with the proper working of our services</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              5. Payment Terms
            </h2>
            <p className="text-gray-600 mb-6">
              Payment terms will be outlined in separate agreements specific to each project or service engagement.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-600 mb-6">
              Synvra shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              7. Changes to Terms
            </h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to modify these terms at any time. We will notify users of any material changes.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              8. Contact Information
            </h2>
            <p className="text-gray-600 mb-6">
              For questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="text-gray-600">
                Synvra Technologies<br />
                28 West 44th Street<br />
                New York, NY 10036<br />
                Email: legal@synvra.com<br />
                Phone: 202-573-8594
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
