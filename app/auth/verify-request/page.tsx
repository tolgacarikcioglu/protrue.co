import Link from 'next/link';

export default function VerifyRequest() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/" className="flex justify-center">
          <h2 className="text-3xl font-bold text-[#0B1220]">Protrue.co</h2>
        </Link>
        <div className="mt-6 text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            E-postanızı kontrol edin
          </h2>
          <p className="text-gray-600 mb-8 px-4">
            Giriş bağlantısını e-posta adresinize gönderdik. 
            E-postanızdaki bağlantıya tıklayarak hesabınıza giriş yapabilirsiniz.
          </p>
          <div className="space-y-4">
            <Link 
              href="/auth/signin" 
              className="block text-[#0B1220] hover:underline font-medium"
            >
              Farklı e-posta ile dene
            </Link>
            <Link 
              href="/" 
              className="block text-gray-500 hover:text-gray-700"
            >
              Ana sayfaya dön
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}