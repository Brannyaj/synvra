'use client';

import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: April 10, 2025
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-600 mb-6">
              At Synvra, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              2. Information We Collect
            </h2>
            <p className="text-gray-600 mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Name and contact information</li>
              <li>Company details</li>
              <li>Project requirements</li>
              <li>Communication preferences</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Provide and improve our services</li>
              <li>Communicate with you about our services</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Analyze and improve our website performance</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              4. Information Sharing
            </h2>
            <p className="text-gray-600 mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              5. Security
            </h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate technical and organizational measures to maintain the security of your personal information.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              6. Your Rights
            </h2>
            <p className="text-gray-600 mb-6">
              You have the right to access, correct, or delete your personal information. Contact us at privacy@synvra.com to exercise these rights.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              7. Contact Us
            </h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="text-gray-600">
                Synvra Technologies<br />
                28 West 44th Street<br />
                New York, NY 10036<br />
                Email: privacy@synvra.com<br />
                Phone: 202-573-8594
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
