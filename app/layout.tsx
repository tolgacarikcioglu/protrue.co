import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Protrue.co - Çok Sektörlü İş Platformu',
  description: 'Saniyeler içinde sektörünü seç, profilini oluştur, keşfedil. Güvenilir profesyonellerle bağlantı kur.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
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
              <a href="/pricing" className="hover:underline">Fiyatlar</a>
            </div>
            <div className="md:hidden">
              <button className="text-white hover:text-gray-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}