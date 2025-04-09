import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import TechStackSection from '@/components/TechStackSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16"> {/* Add padding-top to account for fixed navigation */}
        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Case Studies Section */}
        <CaseStudiesSection />

        {/* Tech Stack Section */}
        <TechStackSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">About Us</h3>
                <p className="text-gray-400">
                  We are passionate about creating innovative digital solutions that help businesses thrive in the modern world.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact</h3>
                <p className="text-gray-400">Email: contact@synvra.com</p>
                <p className="text-gray-400">Phone: (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Location</h3>
                <p className="text-gray-400">
                  123 Innovation Street<br />
                  Tech Valley, CA 94025<br />
                  United States
                </p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Synvra. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
