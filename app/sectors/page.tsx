'use client';

import { useState } from 'react';
import { ChevronRight, Building2, Users } from 'lucide-react';

const sectorsData = [
  {
    id: 'teknoloji',
    name: 'Teknoloji',
    icon: '💻',
    subSectors: [
      { id: 'yazilim', name: 'Yazılım Geliştirme', companies: ['TechCorp', 'DevStudio', 'CodeWorks'] },
      { id: 'siber-guvenlik', name: 'Siber Güvenlik', companies: ['SecureNet', 'CyberShield'] },
      { id: 'veri-analizi', name: 'Veri Analizi', companies: ['DataPro', 'Analytics Plus'] }
    ]
  },
  {
    id: 'saglik',
    name: 'Sağlık',
    icon: '🏥',
    subSectors: [
      { id: 'hastane', name: 'Hastane Yönetimi', companies: ['MedCenter', 'HealthCare Pro'] },
      { id: 'eczane', name: 'Eczane Hizmetleri', companies: ['PharmaCare', 'MediSupply'] },
      { id: 'laboratuvar', name: 'Laboratuvar', companies: ['LabTech', 'BioAnalysis'] }
    ]
  },
  {
    id: 'egitim',
    name: 'Eğitim',
    icon: '🎓',
    subSectors: [
      { id: 'universite', name: 'Üniversite', companies: ['EduCorp', 'AcademicPro'] },
      { id: 'ozel-ders', name: 'Özel Ders', companies: ['TutorPlus', 'StudyMate'] },
      { id: 'online-egitim', name: 'Online Eğitim', companies: ['eLearning Pro', 'WebAcademy'] }
    ]
  }
];

export default function SectorsPage() {
  const [selectedSector, setSelectedSector] = useState<string | null>(null);
  const [selectedSubSector, setSelectedSubSector] = useState<string | null>(null);

  const currentSector = sectorsData.find(s => s.id === selectedSector);
  const currentSubSector = currentSector?.subSectors.find(ss => ss.id === selectedSubSector);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Sektörler</h1>
        
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <button 
            onClick={() => { setSelectedSector(null); setSelectedSubSector(null); }}
            className="hover:text-blue-600"
          >
            Ana Sektörler
          </button>
          {selectedSector && (
            <>
              <ChevronRight className="w-4 h-4" />
              <button 
                onClick={() => setSelectedSubSector(null)}
                className="hover:text-blue-600"
              >
                {currentSector?.name}
              </button>
            </>
          )}
          {selectedSubSector && (
            <>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900">{currentSubSector?.name}</span>
            </>
          )}
        </nav>
      </div>

      {/* Main Sectors View */}
      {!selectedSector && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectorsData.map((sector) => (
            <div
              key={sector.id}
              onClick={() => setSelectedSector(sector.id)}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer border"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{sector.icon}</span>
                <h2 className="text-xl font-semibold">{sector.name}</h2>
              </div>
              <p className="text-gray-600 mb-4">{sector.subSectors.length} alt sektör</p>
              <div className="flex items-center text-blue-600 hover:text-blue-700">
                <span className="text-sm">Keşfet</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Sub Sectors View */}
      {selectedSector && !selectedSubSector && (
        <div>
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">{currentSector?.icon}</span>
            <h2 className="text-3xl font-bold">{currentSector?.name}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentSector?.subSectors.map((subSector) => (
              <div
                key={subSector.id}
                onClick={() => setSelectedSubSector(subSector.id)}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer border"
              >
                <div className="flex items-center mb-4">
                  <Building2 className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold">{subSector.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{subSector.companies.length} firma</p>
                <div className="flex items-center text-blue-600 hover:text-blue-700">
                  <span className="text-sm">Firmaları Gör</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Companies View */}
      {selectedSubSector && (
        <div>
          <div className="flex items-center mb-6">
            <Building2 className="w-8 h-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold">{currentSubSector?.name}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentSubSector?.companies.map((company, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 border"
              >
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-gray-600 mr-3" />
                  <h3 className="text-lg font-semibold">{company}</h3>
                </div>
                <p className="text-gray-600 mb-4">Profesyonel hizmet sağlayıcısı</p>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                  İletişime Geç
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}