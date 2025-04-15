export default function CookiePolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-white">Cookie Policy</h1>
      
      <div className="space-y-8 text-gray-300">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">What Are Cookies</h2>
          <p>
            Cookies are small text files that are stored on your computer or mobile device when you visit our website. 
            They help us provide you with a better website experience by enabling us to monitor which pages you find useful and which you do not.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">How We Use Cookies</h2>
          <p className="mb-4">We use cookies for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Analytics Cookies:</strong> We use Google Analytics to understand how visitors interact with our website. 
              This helps us improve our website and services.
            </li>
            <li>
              <strong>Functional Cookies:</strong> These cookies remember your preferences and settings to enhance your experience.
            </li>
            <li>
              <strong>Performance Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting 
              and reporting information anonymously.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">Google Analytics</h2>
          <p className="mb-4">
            We use Google Analytics to analyze the use of our website. Google Analytics gathers information about website use by means of cookies. 
            The information gathered relating to our website is used to create reports about the use of our website.
          </p>
          <p>
            Google's privacy policy is available at:{' '}
            <a 
              href="https://policies.google.com/privacy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-synvra-blue hover:underline"
            >
              https://policies.google.com/privacy
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">Managing Cookies</h2>
          <p className="mb-4">
            Most web browsers allow you to manage cookies through their settings preferences. However, if you limit the ability of websites to set cookies, 
            you may worsen your overall user experience since it will no longer be personalized to you.
          </p>
          <p>
            To opt out of being tracked by Google Analytics across all websites, visit:{' '}
            <a 
              href="https://tools.google.com/dlpage/gaoptout" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-synvra-blue hover:underline"
            >
              https://tools.google.com/dlpage/gaoptout
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">Cookie Types We Use</h2>
          <div className="space-y-4">
            <div className="glass-card p-4">
              <h3 className="font-semibold text-white mb-2">Essential Cookies</h3>
              <p>Required for the website to function properly. These cannot be disabled.</p>
            </div>
            <div className="glass-card p-4">
              <h3 className="font-semibold text-white mb-2">Analytics Cookies</h3>
              <p>Help us understand how visitors interact with our website (Google Analytics).</p>
            </div>
            <div className="glass-card p-4">
              <h3 className="font-semibold text-white mb-2">Preference Cookies</h3>
              <p>Remember your settings and preferences for future visits.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
          <p>
            If you have any questions about our Cookie Policy, please contact us at{' '}
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