'use client';

import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Footer() {
  const router = useRouter();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Synvra</h3>
            <p className="text-gray-400 mb-4">
              Empowering businesses with innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-blue-500">
                <FaFacebook size={24} />
              </Link>
              <Link href="https://twitter.com" className="hover:text-blue-400">
                <FaTwitter size={24} />
              </Link>
              <Link href="https://linkedin.com" className="hover:text-blue-600">
                <FaLinkedin size={24} />
              </Link>
              <Link href="https://github.com" className="hover:text-gray-400">
                <FaGithub size={24} />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/web-development" className="text-gray-400 hover:text-white">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-apps" className="text-gray-400 hover:text-white">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-solutions" className="text-gray-400 hover:text-white">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/cybersecurity" className="text-gray-400 hover:text-white">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/services/ai-ml" className="text-gray-400 hover:text-white">
                  AI & Machine Learning
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/company/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/company/careers" className="text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/company/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/company/press" className="text-gray-400 hover:text-white">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/company/case-studies" className="text-gray-400 hover:text-white">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources/documentation" className="text-gray-400 hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/resources/api-reference" className="text-gray-400 hover:text-white">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/resources/support-center" className="text-gray-400 hover:text-white">
                  Support Center
                </Link>
              </li>
              <li>
                <Link href="/resources/system-status" className="text-gray-400 hover:text-white">
                  System Status
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              &copy; {currentYear} Synvra. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white">
                Terms of Service
              </Link>
              <Link href="/security" className="text-gray-400 hover:text-white">
                Security
              </Link>
              <Link href="/compliance" className="text-gray-400 hover:text-white">
                Compliance
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
