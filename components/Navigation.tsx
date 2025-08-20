'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import type { User } from '@supabase/supabase-js';
import { useUser } from '@/hooks/useUser';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, userProfile, isAdmin, isModerator } = useUser();
  const supabase = createClient();


  return (
    <nav className="bg-[#0B1220] text-white p-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold hover:text-gray-200 transition-colors">
            Protrue.co
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <a href="/sektorler" className="hover:underline">Sektörler</a>
          <a href="/about" className="hover:underline">Hakkımızda</a>
          <a href="/pricing" className="hover:underline">Abonelik</a>
          {(isAdmin || isModerator) && (
            <Link href="/admin" className="bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded text-sm font-medium">
              Admin
            </Link>
          )}
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-sm">Merhaba, {user.email}</span>
              <button 
                onClick={async () => {
                  await supabase.auth.signOut();
                }}
                className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
              >
                Çıkış
              </button>
            </div>
          ) : (
            <Link href="/auth/signin" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
              Giriş Yap
            </Link>
          )}
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
            <a href="/pricing" className="block py-2 hover:text-gray-200">Abonelik</a>
            {user ? (
              <div className="border-t border-gray-700 pt-2 mt-2">
                <div className="text-sm text-gray-300 py-2">{user.email}</div>
                <button 
                  onClick={async () => {
                    await supabase.auth.signOut();
                  }}
                  className="block w-full text-left py-2 text-red-400 hover:text-red-300"
                >
                  Çıkış Yap
                </button>
              </div>
            ) : (
              <Link href="/auth/signin" className="block py-2 text-blue-400 hover:text-blue-300 border-t border-gray-700 pt-2 mt-2">
                Giriş Yap
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}