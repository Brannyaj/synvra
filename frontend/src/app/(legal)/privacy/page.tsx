import Navigation from '@/components/Navigation';

// Moving this file to the legal directory structure
export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="bg-white rounded-xl shadow-sm p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-600 mb-4">
                At Synvra, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
                disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-900">Personal Information</h3>
                <p className="text-gray-600">We may collect personal information that you voluntarily provide to us when you:</p>
                <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
                  <li>Fill out our contact or quote request forms</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Request customer support</li>
                  <li>Register for our services</li>
                </ul>
                
                <h3 className="text-xl font-medium text-gray-900 mt-6">Usage Information</h3>
                <p className="text-gray-600">We may also collect information about how you use our website:</p>
                <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
                  <li>Log and usage data</li>
                  <li>Device information</li>
                  <li>Location information</li>
                  <li>Cookie data</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
                <li>Provide and maintain our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you marketing and promotional communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Protect against unauthorized access and legal liabilities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing</h2>
              <p className="text-gray-600 mb-4">
                We do not sell or rent your personal information to third parties. We may share your 
                information with trusted partners who assist us in operating our website and providing 
                our services, subject to confidentiality obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate technical and organizational security measures to protect your 
                personal information. However, no method of transmission over the Internet is 100% secure, 
                and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to our processing of your information</li>
                <li>Withdraw consent where applicable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookie Policy</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information.
                </p>
                
                <h3 className="text-xl font-medium text-gray-900">Types of Cookies We Use</h3>
                <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
                  <li>
                    <span className="font-medium">Essential Cookies:</span> Required for the website to function properly
                  </li>
                  <li>
                    <span className="font-medium">Analytical Cookies:</span> Help us understand how visitors interact with our website
                  </li>
                  <li>
                    <span className="font-medium">Functional Cookies:</span> Remember your preferences and settings
                  </li>
                  <li>
                    <span className="font-medium">Marketing Cookies:</span> Track your visits to our website and help us deliver relevant advertising
                  </li>
                </ul>

                <h3 className="text-xl font-medium text-gray-900 mt-6">Your Cookie Choices</h3>
                <p className="text-gray-600">
                  You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. 
                  You can do this through your browser settings. Since each browser is different, look at your browser's Help Menu to learn 
                  the correct way to modify your cookie settings.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p className="text-gray-600">
                    <span className="font-medium">Note:</span> If you turn cookies off, some features that make your site experience more efficient may not function properly.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4 text-gray-600">
                <p>Email: privacy@synvra.com</p>
                <p>Phone: (555) 123-4567</p>
                <p>Address: 123 Innovation Street, Tech Valley, CA 94025</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Updates to This Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. The updated version will be indicated by 
                an updated "Last Updated" date and the updated version will be effective as soon as it is accessible.
              </p>
              <p className="text-gray-500 mt-4">Last Updated: April 9, 2025</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
