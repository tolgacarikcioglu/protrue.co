import { Inter } from 'next/font/google';
import Navigation from '../components/Navigation';
import SessionProvider from '../components/SessionProvider';
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
        <SessionProvider>
          <Navigation />
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}