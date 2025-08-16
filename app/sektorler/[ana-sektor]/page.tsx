'use client';

import Link from 'next/link';
import { ChevronRight, ArrowLeft, Building2 } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getSector, getSubSectors, getCompanies } from '@/lib/data';

export default function AnaSektorPage({ params }: { params: { 'ana-sektor': string } }) {
  const sectorKey = params['ana-sektor'];
  const sector = getSector(sectorKey);
  const subSectors = getSubSectors(sectorKey);

  if (!sector) {
    notFound();
  }

  const subSectorList = Object.entries(subSectors).map(([id, subSector]) => ({
    id,
    name: subSector.name,
    description: subSector.description,
    companyCount: getCompanies(sectorKey, id).length
  }));

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
            {subSectorList.length} alt sektör • {subSectorList.reduce((sum, sub) => sum + sub.companyCount, 0)} firma
          </p>
        </div>
      </div>

      {/* Sub Sectors Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subSectorList.map((subSector) => (
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