import { Star, Users, Shield } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0B1220] to-[#0F2A5F] text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Protrue.co
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto px-4">
            Saniyeler içinde sektörünü seç, profilini oluştur, keşfedil. 
            19 ana sektörde 130+ kategori ile güvenilir profesyonellerle bağlantı kur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4 sm:gap-0 justify-center items-center">
            <Link href="/pricing" className="bg-white text-[#0B1220] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 inline-block">
              Hemen Başla
            </Link>
            <Link href="/sektorler" className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0B1220] inline-block">
              Sektörleri Keşfet
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-4 bg-gray-100 border-b">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-gray-700">
            <span className="font-medium">19 ana sektörde 130+ kategori</span>
            <span className="mx-3">•</span>
            <span>Kimlik doğrulaması</span>
            <span className="mx-3">•</span>
            <span>Müşteri değerlendirmeleri</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16 px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Neden Protrue.co?</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Türkiye&apos;nin en güvenilir profesyonel hizmet platformunda yerini al
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-4">
            <div className="text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                <Users className="w-10 h-10 text-[#1877F2]" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Geniş Ağ</h3>
              <p className="text-gray-600 leading-relaxed">
                19 farklı sektörde binlerce doğrulanmış profesyonel ile geniş hizmet ağı
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                <Shield className="w-10 h-10 text-green-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Güvenilir</h3>
              <p className="text-gray-600 leading-relaxed">
                Tüm hizmet sağlayıcıları titizlikle doğrulanır ve sürekli değerlendirilir
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                <Star className="w-10 h-10 text-orange-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Kaliteli</h3>
              <p className="text-gray-600 leading-relaxed">
                Şeffaf değerlendirme sistemi ile kanıtlanmış hizmet kalitesi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16 px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Nasıl Çalışır?</h2>
            <p className="text-base md:text-lg text-gray-600">Üç basit adımda profesyonel hizmetlere ulaşın</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto px-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#0B1220] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Kaydol</h3>
              <p className="text-gray-600">Hızlı kayıt ile hesabınızı oluşturun</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[#0B1220] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Keşfet</h3>
              <p className="text-gray-600">Sektörünüzde uzman profesyonelleri bulun</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[#0B1220] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Bağlan</h3>
              <p className="text-gray-600">Güvenli platform üzerinden iletişime geçin</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-[#0B1220] to-[#0F2A5F] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Hemen Başlayın</h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 px-4">Profesyonel ağınızı büyütün veya ihtiyacınız olan uzmana ulaşın</p>
          <Link href="/pricing" className="bg-white text-[#0B1220] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 border-2 border-transparent hover:border-[#1877F2] transition-all inline-block">
            Ücretsiz Kayıt Ol
          </Link>
        </div>
      </section>
    </div>
  );
}