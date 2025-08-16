'use client';

import Link from 'next/link';
import { ChevronRight, ArrowLeft, Users, MapPin, Star } from 'lucide-react';
import { notFound } from 'next/navigation';

const companiesData: Record<string, Record<string, Array<{
  id: string;
  name: string;
  description: string;
  location: string;
  rating: number;
  reviewCount: number;
  services: string[];
  isVerified: boolean;
}>>> = {
  'teknoloji': {
    'yazilim-gelistirme': [
      {
        id: 'techcorp',
        name: 'TechCorp Yazılım',
        description: 'Modern web ve mobil uygulamalar geliştiren deneyimli ekip',
        location: 'İstanbul, Beşiktaş',
        rating: 4.8,
        reviewCount: 127,
        services: ['Web Development', 'Mobile Apps', 'UI/UX Design'],
        isVerified: true
      },
      {
        id: 'devstudio',
        name: 'DevStudio',
        description: 'E-ticaret ve kurumsal yazılım çözümleri',
        location: 'Ankara, Çankaya',
        rating: 4.6,
        reviewCount: 89,
        services: ['E-commerce', 'CRM Systems', 'API Development'],
        isVerified: true
      }
    ],
    'siber-guvenlik': [
      {
        id: 'securenet',
        name: 'SecureNet Güvenlik',
        description: 'Kapsamlı siber güvenlik danışmanlığı ve çözümleri',
        location: 'İstanbul, Maslak',
        rating: 4.9,
        reviewCount: 156,
        services: ['Penetration Testing', 'Security Audit', 'Compliance'],
        isVerified: true
      }
    ]
  }
};

const sectorsData: Record<string, { name: string; icon: string }> = {
  'teknoloji': { name: 'Teknoloji', icon: '💻' },
  'saglik': { name: 'Sağlık', icon: '🏥' },
  'egitim': { name: 'Eğitim', icon: '🎓' }
};

const subSectorsData: Record<string, Record<string, { name: string; description: string }>> = {
  'teknoloji': {
    'yazilim-gelistirme': { name: 'Yazılım Geliştirme', description: 'Web, mobil ve masaüstü uygulamalar' },
    'siber-guvenlik': { name: 'Siber Güvenlik', description: 'Ağ güvenliği ve veri koruma' },
    'veri-analizi': { name: 'Veri Analizi', description: 'İş zekası ve büyük veri çözümleri' }
  }
};

export default function AltSektorPage({ 
  params 
}: { 
  params: { 'ana-sektor': string; 'alt-sektor': string } 
}) {
  const mainSectorKey = params['ana-sektor'];
  const subSectorKey = params['alt-sektor'];
  
  const mainSector = sectorsData[mainSectorKey];
  const subSector = subSectorsData[mainSectorKey]?.[subSectorKey];
  const companies = companiesData[mainSectorKey]?.[subSectorKey] || [];

  if (!mainSector || !subSector) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
        <Link href="/sektorler" className="hover:text-blue-600">
          Ana Sektörler
        </Link>
        <ChevronRight className="w-4 h-4" />
        <Link href={`/sektorler/${mainSectorKey}`} className="hover:text-blue-600">
          {mainSector.name}
        </Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900">{subSector.name}</span>
      </nav>

      {/* Back Button */}
      <Link 
        href={`/sektorler/${mainSectorKey}`}
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        {mainSector.name} Alt Sektörlerine Dön
      </Link>

      {/* Sub Sector Header */}
      <div className="bg-white rounded-xl border p-8 mb-8">
        <div className="flex items-center mb-4">
          <span className="text-5xl mr-6">{mainSector.icon}</span>
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{subSector.name}</h1>
            <p className="text-xl text-gray-600 mt-2">{subSector.description}</p>
          </div>
        </div>
        <div className="flex items-center text-gray-700">
          <Users className="w-5 h-5 mr-2" />
          <span>{companies.length} firma bu alanda hizmet veriyor</span>
        </div>
      </div>

      {/* Companies List */}
      {companies.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <div
              key={company.id}
              className="bg-white rounded-lg shadow-md p-6 border hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{company.name}</h3>
                    {company.isVerified && (
                      <div className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        ✓ Doğrulanmış
                      </div>
                    )}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {company.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Star className="w-4 h-4 mr-1 text-yellow-500" />
                    {company.rating} ({company.reviewCount} değerlendirme)
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                {company.description}
              </p>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {company.services.slice(0, 3).map((service, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors text-sm font-medium">
                İletişime Geç
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">📋</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Henüz firma eklenmemiş
          </h3>
          <p className="text-gray-600 mb-6">
            Bu alt sektörde henüz kayıtlı firma bulunmuyor. İlk siz olun!
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Firmanızı Ekleyin
          </button>
        </div>
      )}
    </div>
  );
}