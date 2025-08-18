export interface Sector {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface SubSector {
  name: string;
  description: string;
}

export interface Company {
  id: string;
  name: string;
  description: string;
  summary: string;
  location: string;
  rating: number;
  reviewCount: number;
  services: string[];
  isVerified: boolean;
  isEco: boolean;
  isFeatured: boolean;
  contactInfo: {
    phone?: string;
    whatsapp?: string;
    email?: string;
    website?: string;
    address?: string;
  };
  socialMedia: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    youtube?: string;
  };
  gallery: {
    photos: string[];
    videos: Array<{
      title: string;
      url: string;
      thumbnail: string;
      platform: 'youtube' | 'vimeo';
    }>;
  };
  businessHours?: {
    monday?: string;
    tuesday?: string;
    wednesday?: string;
    thursday?: string;
    friday?: string;
    saturday?: string;
    sunday?: string;
  };
  yearEstablished?: number;
  employeeCount?: string;
  certifications?: string[];
}

const sectorsData: Record<string, Sector> = {
  'teknoloji': { id: 'teknoloji', name: 'Teknoloji', icon: '💻', description: 'Yazılım, donanım ve dijital çözümler' },
  'saglik': { id: 'saglik', name: 'Sağlık', icon: '🏥', description: 'Tıbbi hizmetler ve sağlık teknolojileri' },
  'egitim': { id: 'egitim', name: 'Eğitim', icon: '🎓', description: 'Eğitim kurumları ve öğretim hizmetleri' },
  'finans': { id: 'finans', name: 'Finans', icon: '💰', description: 'Bankacılık, sigortacılık ve yatırım' },
  'hukuk': { id: 'hukuk', name: 'Hukuk', icon: '⚖️', description: 'Hukuki danışmanlık ve avukatlık hizmetleri' },
  'insaat': { id: 'insaat', name: 'İnşaat', icon: '🏗️', description: 'Yapı, altyapı ve mimarlık projeleri' },
  'turizm': { id: 'turizm', name: 'Turizm', icon: '✈️', description: 'Seyahat, konaklama ve rehberlik' },
  'gida': { id: 'gida', name: 'Gıda', icon: '🍽️', description: 'Gıda üretimi, restoran ve catering' },
  'tekstil': { id: 'tekstil', name: 'Tekstil', icon: '👔', description: 'Moda, dokuma ve konfeksiyon' }
};

const subSectorsData: Record<string, Record<string, SubSector>> = {
  'teknoloji': {
    'yazilim-gelistirme': { name: 'Yazılım Geliştirme', description: 'Web, mobil ve masaüstü uygulamalar' },
    'siber-guvenlik': { name: 'Siber Güvenlik', description: 'Ağ güvenliği ve veri koruma' },
    'veri-analizi': { name: 'Veri Analizi', description: 'İş zekası ve büyük veri çözümleri' },
    'donanim': { name: 'Donanım', description: 'Bilgisayar ve elektronik donanım' },
    'bulut-hizmetleri': { name: 'Bulut Hizmetleri', description: 'Cloud computing ve hosting' }
  }
};

const companiesData: Record<string, Record<string, Company[]>> = {
  'teknoloji': {
    'yazilim-gelistirme': [
      {
        id: 'techcorp',
        name: 'TechCorp Yazılım',
        description: 'Modern web ve mobil uygulamalar geliştiren deneyimli ekip. 2015 yılından beri sektörde hizmet veren TechCorp, müşteri odaklı yaklaşımı ve yenilikçi çözümleri ile öne çıkmaktadır.',
        summary: 'Türkiye\'nin öncü yazılım geliştirme şirketlerinden biri olan TechCorp, dijital dönüşüm sürecinizde yanınızda.',
        location: 'İstanbul, Beşiktaş',
        rating: 4.8,
        reviewCount: 127,
        services: ['Web Development', 'Mobile Apps', 'UI/UX Design', 'Cloud Solutions', 'DevOps'],
        isVerified: true,
        isEco: false,
        isFeatured: true,
        contactInfo: {
          phone: '+90 212 555 0123',
          whatsapp: '+90 532 555 0123',
          email: 'info@techcorp.com.tr',
          website: 'https://techcorp.com.tr',
          address: 'Beşiktaş Mahallesi, Teknoloji Caddesi No:45, 34357 Beşiktaş/İstanbul'
        },
        socialMedia: {
          facebook: 'techcorpyazilim',
          instagram: 'techcorp_official',
          linkedin: 'company/techcorp-yazilim',
          twitter: 'techcorp_tr'
        },
        gallery: {
          photos: [
            '/api/placeholder/600/400',
            '/api/placeholder/600/400',
            '/api/placeholder/600/400',
            '/api/placeholder/600/400',
            '/api/placeholder/600/400',
            '/api/placeholder/600/400'
          ],
          videos: [
            {
              title: 'TechCorp Tanıtım Videosu',
              url: 'https://youtube.com/watch?v=dQw4w9WgXcQ',
              thumbnail: '/api/placeholder/400/225',
              platform: 'youtube'
            }
          ]
        },
        businessHours: {
          monday: '09:00 - 18:00',
          tuesday: '09:00 - 18:00',
          wednesday: '09:00 - 18:00',
          thursday: '09:00 - 18:00',
          friday: '09:00 - 18:00',
          saturday: 'Kapalı',
          sunday: 'Kapalı'
        },
        yearEstablished: 2015,
        employeeCount: '25-50',
        certifications: ['ISO 27001', 'ISO 9001', 'Microsoft Partner']
      }
    ]
  }
};

export function getAllSectors(): Sector[] {
  return Object.values(sectorsData);
}

export function getSector(id: string): Sector | undefined {
  return sectorsData[id];
}

export function getSubSectors(sectorId: string): Record<string, SubSector> {
  return subSectorsData[sectorId] || {};
}

export function getCompanies(sectorId: string, subSectorId: string): Company[] {
  return companiesData[sectorId]?.[subSectorId] || [];
}

export function getCompany(sectorId: string, subSectorId: string, companyId: string): Company | undefined {
  const companies = getCompanies(sectorId, subSectorId);
  return companies.find(company => company.id === companyId);
}

export function getSubSector(sectorId: string, subSectorId: string): SubSector | undefined {
  return subSectorsData[sectorId]?.[subSectorId];
}