'use client';

import { useState } from 'react';
import { signIn, getSession } from 'next-auth/react';
import Link from 'next/link';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const result = await signIn('email', {
        email,
        redirect: false,
      });

      if (result?.error) {
        setMessage('Giriş yaparken bir hata oluştu.');
      } else {
        setMessage('E-posta adresinize giriş bağlantısı gönderildi!');
      }
    } catch (error) {
      setMessage('Beklenmeyen bir hata oluştu.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/" className="flex justify-center">
          <h2 className="text-3xl font-bold text-[#0B1220]">Protrue.co</h2>
        </Link>
        <h2 className="mt-6 text-center text-2xl md:text-3xl font-bold text-gray-900">
          Hesabınıza giriş yapın
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          veya{' '}
          <Link href="/pricing" className="font-medium text-[#0B1220] hover:underline">
            abonelik planlarını inceleyin
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-posta adresi
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-[#0B1220] focus:border-[#0B1220] sm:text-sm"
                  placeholder="ornek@email.com"
                />
              </div>
            </div>

            {message && (
              <div className={`text-sm p-3 rounded-md ${
                message.includes('gönderildi') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
              }`}>
                {message}
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0B1220] hover:bg-[#0F2A5F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B1220] disabled:opacity-50"
              >
                {isLoading ? 'Gönderiliyor...' : 'E-posta ile giriş yap'}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="text-center text-sm text-gray-600">
              E-posta adresinize güvenli giriş bağlantısı göndereceğiz.
              Şifre gerekmez!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}