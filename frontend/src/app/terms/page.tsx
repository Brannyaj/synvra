export default function Terms() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-white">Terms of Service</h1>
      
      <div className="space-y-8 text-gray-300">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">1. Agreement to Terms</h2>
          <p>
            By accessing and using Synvra's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">2. Services</h2>
          <p className="mb-4">
            Synvra provides software development and technology consulting services, including but not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Custom software development</li>
            <li>Web and mobile application development</li>
            <li>AI and machine learning solutions</li>
            <li>Cloud computing and DevOps services</li>
            <li>Technical consulting and support</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">3. Intellectual Property</h2>
          <p>
            All content, features, and functionality of our website, including but not limited to text, graphics, logos, and code, are owned by Synvra and are protected by international copyright, trademark, and other intellectual property laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">4. User Responsibilities</h2>
          <p className="mb-4">When using our services, you agree to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate and complete information</li>
            <li>Maintain the confidentiality of any login credentials</li>
            <li>Use our services in compliance with all applicable laws</li>
            <li>Not engage in any unauthorized use of our services</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">5. Privacy and Data Protection</h2>
          <p>
            Our collection and use of personal information is governed by our{' '}
            <a href="/privacy-policy" className="text-synvra-blue hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">6. Limitation of Liability</h2>
          <p>
            Synvra shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on this site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">8. Contact Information</h2>
          <p>
            For any questions about these Terms of Service, please contact us at{' '}
            <a href="mailto:support@synvra.com" className="text-synvra-blue hover:underline">
              support@synvra.com
            </a>
          </p>
        </section>

        <p className="text-sm text-gray-400 mt-12">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
} 