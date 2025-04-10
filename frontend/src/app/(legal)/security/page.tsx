'use client';

import { Suspense } from 'react';

function SecurityContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Security Policy</h1>
        <p className="text-xl text-gray-600">
          Our commitment to protecting your data and privacy
        </p>
      </div>

      <div className="prose prose-blue max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600">
            At Synvra, we take security seriously. Our security policy outlines the measures we take to protect your data and ensure the safety of our services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Protection</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>All data is encrypted at rest and in transit</li>
            <li>Regular security audits and penetration testing</li>
            <li>Strict access controls and authentication measures</li>
            <li>Regular backups and disaster recovery procedures</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Control</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Multi-factor authentication (MFA) required for all accounts</li>
            <li>Role-based access control (RBAC)</li>
            <li>Regular access reviews and monitoring</li>
            <li>Secure password policies and management</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Incident Response</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>24/7 security monitoring and alerting</li>
            <li>Dedicated incident response team</li>
            <li>Regular incident response drills and training</li>
            <li>Transparent incident reporting and communication</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Compliance</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>SOC 2 Type II certified</li>
            <li>GDPR compliant</li>
            <li>Regular compliance audits</li>
            <li>Industry-standard security frameworks</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Reporting Security Issues</h2>
          <p className="text-gray-600 mb-4">
            If you discover a security vulnerability, please report it to our security team immediately at security@synvra.com.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  We offer a bug bounty program for responsible disclosure of security vulnerabilities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-12 text-center">
        <a
          href="/contact"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          Contact Security Team
        </a>
      </div>
    </div>
  );
}

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Suspense fallback={<div>Loading security policy...</div>}>
        <SecurityContent />
      </Suspense>
    </div>
  );
}
