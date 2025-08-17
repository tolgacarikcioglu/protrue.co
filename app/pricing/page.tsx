import { Check, Star } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Başlangıç',
    price: '₺99',
    period: '/ay',
    description: 'Küçük işletmeler ve freelancerlar için ideal',
    features: [
      'Temel profil oluşturma',
      '5 proje yayınlama hakkı',
      'Temel müşteri iletişimi',
      'Standart destek',
      'Temel analitik raporlar'
    ],
    highlighted: false,
    buttonText: 'Başlangıç Planı'
  },
  {
    name: 'Profesyonel',
    price: '₺299',
    period: '/ay',
    description: 'Büyüyen işletmeler için gelişmiş özellikler',
    features: [
      'Gelişmiş profil özelleştirme',
      'Sınırsız proje yayınlama',
      'Öncelikli müşteri iletişimi',
      'Detaylı analitik raporlar',
      '7/24 öncelikli destek',
      'Sosyal medya entegrasyonu',
      'İleri düzey filtreleme'
    ],
    highlighted: true,
    buttonText: 'En Popüler'
  },
  {
    name: 'Kurumsal',
    price: '₺599',
    period: '/ay',
    description: 'Büyük şirketler için tam çözüm paketi',
    features: [
      'Kurumsal profil yönetimi',
      'API erişimi',
      'Özel müşteri temsilcisi',
      'Detaylı performans analitiği',
      'Beyaz etiket çözümler',
      'Özel entegrasyon desteği',
      'SLA garantisi',
      'Eğitim ve danışmanlık'
    ],
    highlighted: false,
    buttonText: 'Kurumsal Plan'
  }
];

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-2xl md:text-4xl font-bold mb-6">Abonelik Planları</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
          İhtiyacınıza uygun abonelik planını seçin ve profesyonel hizmet dünyasında yerinizi alın.
          Tüm planlarda 14 gün ücretsiz deneme imkanı.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 px-4">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl p-8 ${
              plan.highlighted
                ? 'bg-blue-600 text-white ring-4 ring-blue-200 relative'
                : 'bg-white border border-gray-200'
            }`}
          >
            {plan.highlighted && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  En Popüler
                </span>
              </div>
            )}

            <div className="mb-8">
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <div className="flex items-baseline mb-4">
                <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                </span>
                <span className={`text-lg ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.period}
                </span>
              </div>
              <p className={`text-sm ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <Check className={`w-5 h-5 mr-3 mt-0.5 ${plan.highlighted ? 'text-blue-200' : 'text-green-500'}`} />
                  <span className={`text-sm ${plan.highlighted ? 'text-blue-50' : 'text-gray-700'}`}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                plan.highlighted
                  ? 'bg-white text-blue-600 hover:bg-blue-50'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="text-center bg-gray-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-4">Sorularınız mı var?</h2>
        <p className="text-gray-600 mb-6">
          Hangi planın sizin için uygun olduğundan emin değil misiniz? 
          Uzman ekibimiz size en uygun çözümü bulmanızda yardımcı olacak.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Ücretsiz Danışmanlık
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
            Plan Karşılaştırması
          </button>
        </div>
      </div>
    </div>
  );
}