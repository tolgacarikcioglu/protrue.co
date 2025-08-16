'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { getAllSectors } from '@/lib/data';

export default function SektorlerPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Sektörler</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Çok çeşitli sektörlerde güvenilir profesyonelleri keşfedin. 
          Her sektörde uzman hizmet sağlayıcıları ile bağlantı kurun.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {getAllSectors().map((sector) => (
          <Link 
            key={sector.id} 
            href={`/sektorler/${sector.id}`}
            className="group"
          >
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300 border group-hover:border-blue-200">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{sector.icon}</span>
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {sector.name}
                </h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {sector.description}
              </p>
              <div className="flex items-center text-blue-600 group-hover:text-blue-700 font-medium">
                <span>Keşfet</span>
                <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}