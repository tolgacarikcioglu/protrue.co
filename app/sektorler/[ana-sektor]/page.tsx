'use client';

import Link from 'next/link';
import { ChevronRight, ArrowLeft, Building2 } from 'lucide-react';
import { notFound } from 'next/navigation';

const sectorsData: Record<string, {
  name: string;
  icon: string;
  subSectors: Array<{
    id: string;
    name: string;
    description: string;
    companyCount: number;
  }>;
}> = {
  'teknoloji': {
    name: 'Teknoloji',
    icon: '💻',
    subSectors: [
      { id: 'yazilim-gelistirme', name: 'Yazılım Geliştirme', description: 'Web, mobil ve masaüstü uygulamalar', companyCount: 145 },
      { id: 'siber-guvenlik', name: 'Siber Güvenlik', description: 'Ağ güvenliği ve veri koruma', companyCount: 67 },
      { id: 'veri-analizi', name: 'Veri Analizi', description: 'İş zekası ve büyük veri çözümleri', companyCount: 89 },
      { id: 'bulut-hizmetleri', name: 'Bulut Hizmetleri', description: 'AWS, Azure ve Google Cloud', companyCount: 34 },
      { id: 'yapay-zeka', name: 'Yapay Zeka', description: 'Makine öğrenmesi ve AI çözümleri', companyCount: 23 }
    ]
  },
  'saglik': {
    name: 'Sağlık',
    icon: '🏥',
    subSectors: [
      { id: 'hastane-yonetimi', name: 'Hastane Yönetimi', description: 'Sağlık kurumu yönetimi', companyCount: 78 },
      { id: 'eczane-hizmetleri', name: 'Eczane Hizmetleri', description: 'İlaç dağıtımı ve farmasötik', companyCount: 156 },
      { id: 'laboratuvar', name: 'Laboratuvar', description: 'Tıbbi testler ve analizler', companyCount: 92 },
      { id: 'tibbi-cihaz', name: 'Tıbbi Cihaz', description: 'Medikal ekipman ve teknoloji', companyCount: 45 }
    ]
  },
  'egitim': {
    name: 'Eğitim',
    icon: '🎓',
    subSectors: [
      { id: 'universite', name: 'Üniversite', description: 'Yükseköğretim kurumları', companyCount: 29 },
      { id: 'ozel-ders', name: 'Özel Ders', description: 'Bireysel öğretim hizmetleri', companyCount: 234 },
      { id: 'online-egitim', name: 'Online Eğitim', description: 'Dijital öğrenme platformları', companyCount: 67 },
      { id: 'dil-egitimi', name: 'Dil Eğitimi', description: 'Yabancı dil öğretimi', companyCount: 123 }
    ]
  }
};

export default function AnaSektorPage({ params }: { params: { 'ana-sektor': string } }) {
  const sectorKey = params['ana-sektor'];
  const sector = sectorsData[sectorKey];

  if (!sector) {
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
        <span className="text-gray-900">{sector.name}</span>
      </nav>

      {/* Back Button */}
      <Link 
        href="/sektorler"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Ana Sektörlere Dön
      </Link>

      {/* Sector Header */}
      <div className="flex items-center mb-8">
        <span className="text-6xl mr-6">{sector.icon}</span>
        <div>
          <h1 className="text-4xl font-bold text-gray-900">{sector.name}</h1>
          <p className="text-xl text-gray-600 mt-2">
            {sector.subSectors.length} alt sektör • {sector.subSectors.reduce((sum, sub) => sum + sub.companyCount, 0)} firma
          </p>
        </div>
      </div>

      {/* Sub Sectors Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sector.subSectors.map((subSector) => (
          <Link
            key={subSector.id}
            href={`/sektorler/${sectorKey}/${subSector.id}`}
            className="group"
          >
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 border group-hover:border-blue-200">
              <div className="flex items-center mb-4">
                <Building2 className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {subSector.name}
                </h3>
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {subSector.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {subSector.companyCount} firma
                </span>
                <div className="flex items-center text-blue-600 group-hover:text-blue-700">
                  <span className="text-sm font-medium">Firmaları Gör</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}