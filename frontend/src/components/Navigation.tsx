'use client';

import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full p-4">
      <div className="flex justify-between items-center">
        {/* Hamburger Menu */}
        <button className="text-white">
          <div className="space-y-2">
            <div className="w-8 h-0.5 bg-white"></div>
            <div className="w-8 h-0.5 bg-white"></div>
            <div className="w-8 h-0.5 bg-white"></div>
          </div>
        </button>
      </div>
    </nav>
  );
}
