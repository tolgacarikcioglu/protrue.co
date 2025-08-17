'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0B1220] text-white p-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold hover:text-gray-200 transition-colors">
            Protrue.co
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="/sektorler" className="hover:underline">Sektörler</a>
          <a href="/about" className="hover:underline">Hakkımızda</a>
          <a href="/pricing" className="hover:underline">Abonelik</a>
        </div>
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-gray-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-[#0B1220] border-t border-gray-700">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <a href="/sektorler" className="block py-2 hover:text-gray-200">Sektörler</a>
            <a href="/about" className="block py-2 hover:text-gray-200">Hakkımızda</a>
            <a href="/pricing" className="block py-2 hover:text-gray-200">Paketler</a>
          </div>
        </div>
      )}
    </nav>
  );
}