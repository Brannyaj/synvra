import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto p-8 text-synvra-gray-200">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <h2 className="text-xl font-semibold mt-6 mb-2">Introduction</h2>
      <p>At Synvra, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you visit our website.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <p>We collect information using the following tools:</p>
      <ul className="list-disc ml-6">
        <li><strong>Google Analytics:</strong> We use Google Analytics to understand how visitors interact with our website. This includes:
          <ul className="list-disc ml-6">
            <li>Pages visited and time spent on each page</li>
            <li>Technical information (browser type, device type)</li>
            <li>Approximate geographic location</li>
            <li>Referral sources</li>
          </ul>
        </li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
      <ul className="list-disc ml-6">
        <li>Improve our website and services</li>
        <li>Analyze user behavior and preferences</li>
        <li>Optimize our content and user experience</li>
        <li>Monitor website performance</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">Cookies</h2>
      <p>Our website uses cookies and similar tracking technologies to enhance your browsing experience and collect usage data. These include:</p>
      <ul className="list-disc ml-6">
        <li><strong>Analytics Cookies:</strong> Used by Google Analytics to track user interactions and gather usage statistics</li>
        <li><strong>Functional Cookies:</strong> Used to remember your preferences and settings</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">Data Retention</h2>
      <p>Analytics data is retained for 26 months, after which it is automatically deleted. You can opt out of Google Analytics tracking by using the Google Analytics Opt-out Browser Add-on.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Your Rights</h2>
      <ul className="list-disc ml-6">
        <li>Access your personal data</li>
        <li>Request deletion of your data</li>
        <li>Object to our processing of your data</li>
        <li>Withdraw consent at any time</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Information</h2>
      <p>If you have any questions about our Privacy Policy, please contact us at <a href="mailto:support@synvra.com" className="text-synvra-blue underline">support@synvra.com</a>.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Updates to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. The latest version will always be available on this page.</p>
    </div>
  );
} 