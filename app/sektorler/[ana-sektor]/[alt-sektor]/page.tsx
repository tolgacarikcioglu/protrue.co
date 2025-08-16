'use client';

import Link from 'next/link';
import { ChevronRight, ArrowLeft, Users, MapPin, Star } from 'lucide-react';
import { notFound } from 'next/navigation';

import { getSector, getSubSector, getCompanies } from '@/lib/data';
import CompanyCard from '@/components/CompanyCard';

export default function AltSektorPage({ 
  params 
}: { 
  params: { 'ana-sektor': string; 'alt-sektor': string } 
}) {
  const mainSectorKey = params['ana-sektor'];
  const subSectorKey = params['alt-sektor'];
  
  const mainSector = getSector(mainSectorKey);
  const subSector = getSubSector(mainSectorKey, subSectorKey);
  const companies = getCompanies(mainSectorKey, subSectorKey);

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
            <CompanyCard
              key={company.id}
              company={company}
              sectorId={mainSectorKey}
              subSectorId={subSectorKey}
            />
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