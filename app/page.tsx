import { Star, Users, Shield } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0B1220] to-[#0F2A5F] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Image src="/logo.png" alt="Protrue.co" width={200} height={80} className="h-20 w-auto" />
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Protrue.co
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Saniyeler içinde sektörünü seç, profilini oluştur, keşfedil. 
            19 ana sektörde 130+ kategori ile güvenilir profesyonellerle bağlantı kur.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-[#0B1220] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Hemen Başla
            </button>
            <button className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0B1220]">
              Sektörleri Keşfet
            </button>
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Neden Protrue.co?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Türkiye&apos;nin en güvenilir profesyonel hizmet platformunda yerini al
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                <Users className="w-10 h-10 text-[#1877F2]" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Geniş Ağ</h3>
              <p className="text-gray-600 leading-relaxed">
                19 farklı sektörde binlerce doğrulanmış profesyonel ile geniş hizmet ağı
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                <Shield className="w-10 h-10 text-green-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Güvenilir</h3>
              <p className="text-gray-600 leading-relaxed">
                Tüm hizmet sağlayıcıları titizlikle doğrulanır ve sürekli değerlendirilir
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                <Star className="w-10 h-10 text-orange-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Kaliteli</h3>
              <p className="text-gray-600 leading-relaxed">
                Şeffaf değerlendirme sistemi ile kanıtlanmış hizmet kalitesi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nasıl Çalışır?</h2>
            <p className="text-lg text-gray-600">Üç basit adımda profesyonel hizmetlere ulaşın</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#0B1220] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kaydol</h3>
              <p className="text-gray-600">Hızlı kayıt ile hesabınızı oluşturun</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[#0B1220] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Keşfet</h3>
              <p className="text-gray-600">Sektörünüzde uzman profesyonelleri bulun</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[#0B1220] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Bağlan</h3>
              <p className="text-gray-600">Güvenli platform üzerinden iletişime geçin</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0B1220] to-[#0F2A5F] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Hemen Başlayın</h2>
          <p className="text-xl mb-8 text-white/90">Profesyonel ağınızı büyütün veya ihtiyacınız olan uzmana ulaşın</p>
          <button className="bg-white text-[#0B1220] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 border-2 border-transparent hover:border-[#1877F2] transition-all">
            Ücretsiz Kayıt Ol
          </button>
        </div>
      </section>
    </div>
  );
}