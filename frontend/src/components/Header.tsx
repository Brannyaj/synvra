'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

interface HeaderProps {
  lng: string;
}

export default function Header({ lng }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation('common');

  return (
    <header className="bg-gray-900 text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${lng}`} className="text-2xl font-bold text-blue-500">
            Synvra
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href={`/${lng}`} className="text-gray-300 hover:text-white transition-colors">
              {t('header.home')}
            </Link>
            <Link href={`/${lng}/services`} className="text-gray-300 hover:text-white transition-colors">
              {t('header.services')}
            </Link>
            <Link href={`/${lng}/about`} className="text-gray-300 hover:text-white transition-colors">
              {t('header.about')}
            </Link>
            <Link href={`/${lng}/contact`} className="text-gray-300 hover:text-white transition-colors">
              {t('header.contact')}
            </Link>
            <Link href={`/${lng}/login`} className="text-gray-300 hover:text-white transition-colors">
              {t('header.login')}
            </Link>
            <Link 
              href={`/${lng}/signup`}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              {t('header.signup')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-800 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link href={`/${lng}`} className="text-gray-300 hover:text-white transition-colors">
                {t('header.home')}
              </Link>
              <Link href={`/${lng}/services`} className="text-gray-300 hover:text-white transition-colors">
                {t('header.services')}
              </Link>
              <Link href={`/${lng}/about`} className="text-gray-300 hover:text-white transition-colors">
                {t('header.about')}
              </Link>
              <Link href={`/${lng}/contact`} className="text-gray-300 hover:text-white transition-colors">
                {t('header.contact')}
              </Link>
              <Link href={`/${lng}/login`} className="text-gray-300 hover:text-white transition-colors">
                {t('header.login')}
              </Link>
              <Link 
                href={`/${lng}/signup`}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors inline-block text-center"
              >
                {t('header.signup')}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
