'use client';

import { languages } from '../i18n/settings';
import Link from 'next/link';

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  return (
    <div className="flex justify-center space-x-4">
      {languages.map((lang) => (
        <Link
          key={lang}
          href={`/${lang}`}
          className={`px-3 py-1 rounded ${
            currentLang === lang
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {lang.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
