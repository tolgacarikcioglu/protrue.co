// Import types and data from comprehensive-data
import type {
  Sector,
  SubSector,  
  Company
} from './comprehensive-data';

import { 
  sectors,
  sectorData 
} from './comprehensive-data';

// Re-export types and data
export type { Sector, SubSector, Company };
export { sectors, sectorData };

// Helper functions
export function getSector(sectorId: string): Sector | null {
  return sectors.find(sector => sector.id === sectorId) || null;
}

export function getSubSector(sectorId: string, subSectorId: string): { name: string; description: string } | null {
  const data = getSectorData(sectorId);
  const subSector = data?.[subSectorId];
  return subSector ? { name: formatSubSectorName(subSectorId), description: subSector.description } : null;
}

export function getCompany(sectorId: string, subSectorId: string, companySlug: string): Company | null {
  const data = getSectorData(sectorId);
  const subSector = data?.[subSectorId];
  return subSector?.companies.find(company => company.slug === companySlug) || null;
}

export function getSectorData(sectorId: string) {
  return sectorData[sectorId] || null;
}

export function getAllSectors(): Sector[] {
  return sectors;
}

export function getSubSectors(sectorId: string): Array<{ id: string; name: string; description: string; companyCount: number }> {
  const data = sectorData[sectorId];
  if (!data) return [];
  
  return Object.keys(data).map(subSectorId => ({
    id: subSectorId,
    name: formatSubSectorName(subSectorId),
    description: data[subSectorId].description,
    companyCount: data[subSectorId].companies.length
  }));
}

export function getCompanies(sectorId: string, subSectorId: string): Company[] {
  const data = getSectorData(sectorId);
  return data?.[subSectorId]?.companies || [];
}

// Function to get all companies across all sectors (useful for admin)
export function getAllCompanies(): Company[] {
  const allCompanies: Company[] = [];
  Object.values(sectorData).forEach(sector => {
    Object.values(sector).forEach(subSector => {
      allCompanies.push(...subSector.companies);
    });
  });
  return allCompanies;
}

// Function to search companies by name or service
export function searchCompanies(query: string, sectorId?: string): Company[] {
  const searchQuery = query.toLowerCase();
  let companies: Company[] = [];
  
  if (sectorId && sectorData[sectorId]) {
    // Search within specific sector
    Object.values(sectorData[sectorId]).forEach(subSector => {
      companies.push(...subSector.companies);
    });
  } else {
    // Search across all sectors
    companies = getAllCompanies();
  }
  
  return companies.filter(company => 
    company.name.toLowerCase().includes(searchQuery) ||
    company.description.toLowerCase().includes(searchQuery) ||
    company.services.some(service => service.toLowerCase().includes(searchQuery))
  );
}

function formatSubSectorName(subSectorId: string): string {
  const nameMap: Record<string, string> = {
    // Teknoloji
    'yazilim-gelistirme': 'Yazılım Geliştirme',
    'mobil-uygulama': 'Mobil Uygulama',
    'yapay-zeka': 'Yapay Zeka & AI',
    'siber-guvenlik': 'Siber Güvenlik',
    'blockchain': 'Blockchain & Kripto',
    'oyun-gelistirme': 'Oyun Geliştirme',
    'veri-analizi': 'Veri Analizi & BI',
    'bulut-bilisim': 'Bulut Bilişim',
    
    // Dijital Pazarlama
    'seo-sem': 'SEO & SEM',
    'sosyal-medya': 'Sosyal Medya',
    'e-ticaret': 'E-Ticaret',
    'content-marketing': 'İçerik Pazarlama',
    'email-marketing': 'E-mail Marketing',
    'ppc-reklam': 'PPC Reklamcılık',
    
    // Sağlık
    'hastaneler': 'Hastaneler',
    'klinikler': 'Klinikler',
    'dis-klinikleri': 'Diş Klinikleri',
    'fizik-tedavi': 'Fizik Tedavi',
    'psikoloji': 'Psikoloji',
    'laboratuvar': 'Laboratuvar',
    'eczane': 'Eczane',
    
    // Estetik & Güzellik
    'kuafor-berber': 'Kuaför & Berber',
    'estetik-merkezi': 'Estetik Merkezi',
    'spa-wellness': 'Spa & Wellness',
    'guzellik-salonu': 'Güzellik Salonu',
    'lazer-epilasyon': 'Lazer Epilasyon',
    
    // Spor & Fitness
    'spor-salonu': 'Spor Salonu',
    'yoga-pilates': 'Yoga & Pilates',
    'kisisel-antrenor': 'Kişisel Antrenör',
    'dalis-yuzme': 'Dalış & Yüzme',
    'dovus-sanatları': 'Dövüş Sanatları',
    
    // Eğitim
    'okullar': 'Okullar',
    'universiteler': 'Üniversiteler',
    'dil-kurslari': 'Dil Kursları',
    'muzik-kursu': 'Müzik Kursu',
    'sanat-kursu': 'Sanat Kursu',
    'teknik-kurslar': 'Teknik Kurslar',
    'sinav-hazirlik': 'Sınav Hazırlık',
    
    // Kişisel Gelişim
    'life-coaching': 'Yaşam Koçluğu',
    'kariyer-danismanligi': 'Kariyer Danışmanlığı',
    
    // İnşaat
    'genel-insaat': 'Genel İnşaat',
    'tadilat-renovasyon': 'Tadilat & Renovasyon',
    
    // Gıda & İçecek
    'restoran-cafe': 'Restaurant & Cafe',
    'catering': 'Catering Hizmetleri',
    
    // Otomotiv
    'arac-satis': 'Araç Satış',
    'arac-servis': 'Araç Servis'
  };
  
  return nameMap[subSectorId] || subSectorId.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
}
