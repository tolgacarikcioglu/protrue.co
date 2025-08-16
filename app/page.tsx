import { Star, Users, Shield } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Protrue.co
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Saniyeler içinde sektörünü seç, profilini oluştur, keşfedil. 
            19 ana sektörde 130+ kategori ile güvenilir profesyonellerle bağlantı kur.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-slate-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Hemen Başla
            </button>
            <button className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-800">
              Sektörleri Keşfet
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Neden Protrue.co?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Geniş Ağ</h3>
              <p className="text-gray-600">19 sektörde binlerce doğrulanmış profesyonel</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Güvenilir</h3>
              <p className="text-gray-600">Tüm profesyoneller kimlik doğrulamasından geçer</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Kaliteli</h3>
              <p className="text-gray-600">Müşteri değerlendirmeleri ile kalite garantisi</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Hemen Başlayın</h2>
          <p className="text-xl mb-8">Profesyonel ağınızı büyütün veya ihtiyacınız olan uzmana ulaşın</p>
          <button className="bg-white text-slate-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Ücretsiz Kayıt Ol
          </button>
        </div>
      </section>
    </div>
  );
}