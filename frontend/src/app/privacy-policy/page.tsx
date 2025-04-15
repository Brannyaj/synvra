export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-white">Privacy Policy</h1>
      
      <div className="space-y-8 text-gray-300">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">Introduction</h2>
          <p>
            At Synvra, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you visit our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">Information We Collect</h2>
          <p className="mb-4">We collect information using the following tools:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Google Analytics:</strong> We use Google Analytics to understand how visitors interact with our website. This includes:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Pages visited and time spent on each page</li>
                <li>Technical information (browser type, device type)</li>
                <li>Approximate geographic location</li>
                <li>Referral sources</li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">How We Use Your Information</h2>
          <p className="mb-4">We use the collected information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Improve our website and services</li>
            <li>Analyze user behavior and preferences</li>
            <li>Optimize our content and user experience</li>
            <li>Monitor website performance</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">Cookies</h2>
          <p className="mb-4">
            Our website uses cookies and similar tracking technologies to enhance your browsing experience and collect usage data. These include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Analytics Cookies:</strong> Used by Google Analytics to track user interactions and gather usage statistics
            </li>
            <li>
              <strong>Functional Cookies:</strong> Used to remember your preferences and settings
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">Data Retention</h2>
          <p>
            Analytics data is retained for 26 months, after which it is automatically deleted. You can opt out of Google Analytics tracking by using the Google Analytics Opt-out Browser Add-on.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">Your Rights</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal data</li>
            <li>Request deletion of your data</li>
            <li>Object to our processing of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">Contact Information</h2>
          <p>
            If you have any questions about our Privacy Policy, please contact us at{' '}
            <a href="mailto:support@synvra.com" className="text-synvra-blue hover:underline">
              support@synvra.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The latest version will always be available on this page.
          </p>
        </section>

        <p className="text-sm text-gray-400 mt-12">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
} 