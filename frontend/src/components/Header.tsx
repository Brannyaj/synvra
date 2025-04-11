'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    {
      name: 'Services',
      href: '/services',
      submenu: [
        { name: 'Web Development', href: '/services/web-development' },
        { name: 'Mobile Apps', href: '/services/mobile-apps' },
        { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'AI & ML', href: '/services/ai-ml' },
      ],
    },
    {
      name: 'Company',
      href: '/company',
      submenu: [
        { name: 'About', href: '/company/about' },
        { name: 'Careers', href: '/company/careers' },
        { name: 'Blog', href: '/company/blog' },
        { name: 'Press', href: '/company/press' },
        { name: 'Case Studies', href: '/company/case-studies' },
      ],
    },
    {
      name: 'Resources',
      href: '/resources',
      submenu: [
        { name: 'Documentation', href: '/resources/documentation' },
        { name: 'API Reference', href: '/resources/api-reference' },
        { name: 'Support Center', href: '/resources/support-center' },
        { name: 'System Status', href: '/resources/system-status' },
      ],
    },
  ];

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-gray-200 lg:border-none">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Synvra
            </Link>
            <div className="hidden ml-10 space-x-8 lg:flex">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={`text-base font-medium ${
                      pathname?.startsWith(item.href)
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className={`block px-4 py-2 text-sm ${
                            pathname === subitem.href
                              ? 'text-blue-600 bg-gray-50'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                          }`}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <Link
              href="/contact"
              className="inline-block bg-white py-2 px-4 border border-blue-600 rounded-md text-base font-medium text-blue-600 hover:bg-blue-50"
            >
              Contact
            </Link>
            <Link
              href="/quote"
              className="inline-block bg-blue-600 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-blue-700"
            >
              Get Quote
            </Link>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-base font-medium ${
                pathname?.startsWith(item.href)
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
