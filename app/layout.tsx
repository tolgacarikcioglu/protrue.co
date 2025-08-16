import { Inter } from 'next/font/google';
import Image from 'next/image';
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
        <nav className="bg-slate-900 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <Image src="/logo.svg" alt="Protrue.co" width={180} height={40} className="h-8" />
            </div>
            <div className="space-x-4">
              <a href="/" className="hover:underline">Ana Sayfa</a>
              <a href="/sektorler" className="hover:underline">Sektörler</a>
              <a href="/about" className="hover:underline">Hakkımızda</a>
              <a href="/pricing" className="hover:underline">Fiyatlar</a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}