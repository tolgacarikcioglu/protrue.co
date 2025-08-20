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
  slug: string;
}

// Çok kapsamlı sektör listesi
export const sectors: Sector[] = [
  // Teknoloji & Dijital
  {
    id: 'teknoloji',
    name: 'Teknoloji & Yazılım',
    icon: '💻',
    description: 'Yazılım, AI, blockchain, siber güvenlik ve teknoloji hizmetleri'
  },
  {
    id: 'dijital-pazarlama',
    name: 'Dijital Pazarlama & E-Ticaret',
    icon: '📱',
    description: 'SEO, sosyal medya, e-ticaret, influencer marketing'
  },
  
  // Sağlık & Wellness
  {
    id: 'saglik',
    name: 'Sağlık & Tıp',
    icon: '🏥',
    description: 'Hastaneler, klinikler, tıbbi cihazlar ve sağlık hizmetleri'
  },
  {
    id: 'estetik-guzellik',
    name: 'Estetik & Güzellik',
    icon: '💅',
    description: 'Kuaför, berber, estetik, spa, wellness ve güzellik hizmetleri'
  },
  {
    id: 'spor-fitness',
    name: 'Spor & Fitness',
    icon: '💪',
    description: 'Spor salonları, fitness, yoga, pilates, kişisel antrenman'
  },
  
  // Eğitim & Kişisel Gelişim
  {
    id: 'egitim',
    name: 'Eğitim & Öğretim',
    icon: '🎓',
    description: 'Okullar, üniversiteler, kurslar ve eğitim hizmetleri'
  },
  {
    id: 'kisisel-gelisim',
    name: 'Kişisel Gelişim & Koçluk',
    icon: '🧠',
    description: 'Life coaching, kariyer danışmanlığı, motivasyon'
  },
  
  // İnşaat & Yapı
  {
    id: 'insaat',
    name: 'İnşaat & Yapı',
    icon: '🏗️',
    description: 'İnşaat, tadilat, mimarlık, iç mimarlık ve yapı malzemeleri'
  },
  {
    id: 'peyzaj-bahce',
    name: 'Peyzaj & Bahçe',
    icon: '🌱',
    description: 'Peyzaj tasarımı, bahçıvanlık, çiçekçilik'
  },
  
  // Otomotiv & Ulaşım
  {
    id: 'otomotiv',
    name: 'Otomotiv',
    icon: '🚗',
    description: 'Araç satış, servis, yedek parça, modifikasyon'
  },
  {
    id: 'ulasim-lojistik',
    name: 'Ulaşım & Lojistik',
    icon: '🚚',
    description: 'Kargo, nakliyat, depolama, ulaşım hizmetleri'
  },
  
  // Gıda & İçecek
  {
    id: 'gida-icecek',
    name: 'Gıda & İçecek',
    icon: '🍽️',
    description: 'Restoran, cafe, bar, catering, gıda üretimi'
  },
  
  // Turizm & Eğlence
  {
    id: 'turizm',
    name: 'Turizm & Otelcilik',
    icon: '✈️',
    description: 'Oteller, seyahat acenteleri, tur organizasyonları'
  },
  {
    id: 'eglence-kultur',
    name: 'Eğlence & Kültür',
    icon: '🎭',
    description: 'Sinema, tiyatro, müzik, sanat, etkinlik organizasyonu'
  },
  
  // Finans & Sigorta
  {
    id: 'finans',
    name: 'Finans & Bankacılık',
    icon: '💰',
    description: 'Bankalar, yatırım, kredi, finansal danışmanlık'
  },
  {
    id: 'sigorta',
    name: 'Sigorta',
    icon: '🛡️',
    description: 'Hayat, sağlık, araç, konut sigortaları'
  },
  
  // Emlak & Gayrimenkul
  {
    id: 'gayrimenkul',
    name: 'Emlak & Gayrimenkul',
    icon: '🏘️',
    description: 'Satış, kiralama, yatırım, emlak danışmanlığı'
  },
  
  // Hukuk & Danışmanlık
  {
    id: 'hukuk',
    name: 'Hukuk & Danışmanlık',
    icon: '⚖️',
    description: 'Avukatlık, hukuki danışmanlık, noter hizmetleri'
  },
  {
    id: 'muhasebe-vergi',
    name: 'Muhasebe & Vergi',
    icon: '📊',
    description: 'Muhasebe, vergi danışmanlığı, mali müşavirlik'
  },
  
  // Kreatif & Tasarım
  {
    id: 'tasarim-sanat',
    name: 'Tasarım & Sanat',
    icon: '🎨',
    description: 'Grafik tasarım, web tasarım, sanat, fotoğrafçılık'
  },
  {
    id: 'reklam-medya',
    name: 'Reklam & Medya',
    icon: '📢',
    description: 'Reklam ajansları, PR, medya production, basın'
  },
  
  // Perakende & Ticaret
  {
    id: 'perakende',
    name: 'Perakende & Ticaret',
    icon: '🛒',
    description: 'Mağazacılık, toptan satış, franchise'
  },
  {
    id: 'moda-tekstil',
    name: 'Moda & Tekstil',
    icon: '👗',
    description: 'Giyim, ayakkabı, aksesuar, tekstil üretimi'
  },
  
  // Ev & Yaşam
  {
    id: 'ev-yasam',
    name: 'Ev & Yaşam',
    icon: '🏠',
    description: 'Mobilya, dekorasyon, ev eşyaları, temizlik'
  },
  {
    id: 'pet-hayvan',
    name: 'Pet & Hayvan Bakımı',
    icon: '🐕',
    description: 'Veteriner, pet shop, hayvan bakım hizmetleri'
  },
  
  // Üretim & Sanayi
  {
    id: 'uretim-sanayi',
    name: 'Üretim & Sanayi',
    icon: '🏭',
    description: 'Fabrikalar, üretim tesisleri, makine sanayi'
  },
  
  // Güvenlik & Temizlik
  {
    id: 'guvenlik-temizlik',
    name: 'Güvenlik & Temizlik',
    icon: '🔒',
    description: 'Güvenlik hizmetleri, temizlik firmaları, facility management'
  },
  
  // Teknisyen & Tamir
  {
    id: 'teknisyen-tamir',
    name: 'Teknisyen & Tamir',
    icon: '🔧',
    description: 'Elektrikçi, tesisatçi, klima, elektronik tamir'
  },
  
  // Tarım & Gıda Üretimi
  {
    id: 'tarim-gida',
    name: 'Tarım & Gıda Üretimi',
    icon: '🌾',
    description: 'Tarım, hayvancılık, gıda işleme, organik ürünler'
  }
];

// Çok detaylı alt sektörler ve örnek firmalar
const sectorData: Record<string, Record<string, { description: string; companies: Company[] }>> = {
  teknoloji: {
    'yazilim-gelistirme': {
      description: 'Web, mobil ve kurumsal yazılım geliştirme',
      companies: [
        {
          id: 'tech-001',
          name: 'InnovateSoft Technology',
          slug: 'innovatesoft',
          description: 'InnovateSoft, 2015 yılında kurulan ve dijital dönüşüm alanında lider bir yazılım geliştirme şirketidir. Yapay zeka destekli çözümler, blockchain teknolojileri ve IoT sistemleri geliştirmektedir. Fortune 500 şirketlerine hizmet veren, 50+ ülkede projeler yürüten global bir teknoloji partneridir.',
          summary: 'Next-gen teknolojilerle geleceği şekillendiriyoruz. AI, blockchain ve IoT alanlarında uzman ekibimizle, işletmenizin dijital dönüşümüne öncülük ediyoruz.',
          location: 'İstanbul, Türkiye',
          rating: 4.9,
          reviewCount: 847,
          services: ['Web Geliştirme', 'Mobil Uygulama', 'AI & Machine Learning', 'Blockchain', 'IoT Çözümleri', 'Cloud Computing', 'DevOps', 'Siber Güvenlik'],
          isVerified: true,
          isEco: true,
          isFeatured: true,
          contactInfo: {
            phone: '+90 212 555 0123',
            whatsapp: '+90 532 555 0123',
            email: 'hello@innovatesoft.com',
            website: 'https://www.innovatesoft.com',
            address: 'Maslak Mahallesi, Teknoloji Caddesi No:123, Sarıyer/İstanbul'
          },
          socialMedia: {
            linkedin: 'company/innovatesoft',
            twitter: 'innovatesoft_tr',
            instagram: 'innovatesoft.official',
            youtube: 'innovatesoft'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: [
              {
                title: 'Şirket Tanıtım Videosu',
                url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                thumbnail: '/api/placeholder/600/400',
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
          employeeCount: '100-250',
          certifications: ['ISO 27001', 'ISO 9001', 'Google Cloud Partner', 'AWS Advanced Partner']
        }
      ]
    },
    'mobil-uygulama': {
      description: 'iOS, Android ve cross-platform mobil uygulama geliştirme',
      companies: [
        {
          id: 'tech-002',
          name: 'MobileFirst Studios',
          slug: 'mobilefirst-studios',
          description: 'MobileFirst Studios, 2018 yılında kurulan ve mobil uygulama geliştirme konusunda uzmanlaşmış bir dijital ajansıdır. iOS, Android ve React Native teknolojileri ile kurumsal mobil çözümler üretmekte, UI/UX tasarımından backend geliştirmeye kadar tam çözüm sunmaktadır. 100+ başarılı proje ile sektörde güvenilir bir partner konumundadır.',
          summary: 'Mobil dünyada fark yaratan uygulamalar geliştiriyoruz. Native ve cross-platform teknolojilerle, kullanıcı deneyimini ön planda tutan çözümler üretiyoruz.',
          location: 'Ankara, Türkiye',
          rating: 4.7,
          reviewCount: 456,
          services: ['iOS Geliştirme', 'Android Geliştirme', 'React Native', 'Flutter', 'UI/UX Tasarım', 'Backend API', 'App Store Optimizasyon', 'Mobil Test'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 312 456 7890',
            whatsapp: '+90 532 456 7890',
            email: 'hello@mobilefirststudios.com',
            website: 'https://www.mobilefirststudios.com',
            address: 'Çankaya Mahallesi, Teknoloji Sokağı No:45, Çankaya/Ankara'
          },
          socialMedia: {
            linkedin: 'company/mobilefirst-studios',
            twitter: 'mobilefirst_tr',
            instagram: 'mobilefirststudios',
            facebook: 'mobilefirststudios',
            youtube: 'mobilefirststudios'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: [
              {
                title: 'Mobil Uygulama Geliştirme Süreci',
                url: 'https://www.youtube.com/watch?v=example',
                thumbnail: '/api/placeholder/600/400',
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
          yearEstablished: 2018,
          employeeCount: '25-50',
          certifications: ['Google Play Partner', 'Apple Developer Enterprise', 'ISO 9001']
        }
      ]
    },
    'yapay-zeka': {
      description: 'AI, machine learning, deep learning ve veri bilimi',
      companies: [
        {
          id: 'tech-003',
          name: 'AI Research Labs',
          slug: 'ai-research-labs',
          description: 'AI Research Labs, 2020 yılında kurulan ve yapay zeka çözümleri geliştiren ileri teknoloji şirketidir. Makine öğrenmesi, doğal dil işleme, bilgisayarlı görü ve tahmine dayalı analitik alanlarında uzmanlaşmış olup, finans, sağlık, e-ticaret ve üretim sektörlerine AI çözümleri sunmaktadır.',
          summary: 'Yapay zeka ile geleceği bugünden inşa ediyoruz. Özel AI modelleri ve akıllı otomasyon çözümleriyle işletmenizi bir adım öne taşıyoruz.',
          location: 'İzmir, Türkiye',
          rating: 4.8,
          reviewCount: 234,
          services: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Predictive Analytics', 'AI Consulting', 'Model Training', 'Data Science'],
          isVerified: true,
          isEco: true,
          isFeatured: true,
          contactInfo: {
            phone: '+90 232 345 6789',
            whatsapp: '+90 532 345 6789',
            email: 'info@airesearchlabs.com',
            website: 'https://www.airesearchlabs.com',
            address: 'Bornova Teknoloji Merkezi, AI Bulvarı No:22, Bornova/İzmir'
          },
          socialMedia: {
            linkedin: 'company/ai-research-labs',
            twitter: 'airesearchlabs',
            instagram: 'ai.research.labs',
            facebook: 'airesearchlabs',
            youtube: 'airesearchlabs'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: [
              {
                title: 'AI Projelerimiz ve Başarı Hikayelerimiz',
                url: 'https://www.youtube.com/watch?v=example2',
                thumbnail: '/api/placeholder/600/400',
                platform: 'youtube'
              }
            ]
          },
          businessHours: {
            monday: '08:30 - 17:30',
            tuesday: '08:30 - 17:30',
            wednesday: '08:30 - 17:30',
            thursday: '08:30 - 17:30',
            friday: '08:30 - 17:30',
            saturday: 'Kapalı',
            sunday: 'Kapalı'
          },
          yearEstablished: 2020,
          employeeCount: '15-25',
          certifications: ['TensorFlow Certified', 'AWS Machine Learning', 'Microsoft AI Partner']
        }
      ]
    },
    'siber-guvenlik': {
      description: 'Bilgi güvenliği, penetrasyon testi, güvenlik danışmanlığı',
      companies: [
        {
          id: 'sec-001',
          name: 'CyberSecure Solutions',
          slug: 'cybersecure-solutions',
          description: 'CyberSecure Solutions, 2019 yılından beri siber güvenlik alanında faaliyet gösteren uzman bir firmadır. Penetrasyon testleri, güvenlik açığı analizleri, ISO 27001 danışmanlığı ve siber güvenlik eğitimleri sunmaktadır.',
          summary: 'Dijital varlıklarınızı güvence altına alın. Uzman ekibimizle siber tehditlere karşı proaktif koruma sağlıyoruz.',
          location: 'İstanbul, Türkiye',
          rating: 4.9,
          reviewCount: 156,
          services: ['Penetrasyon Testi', 'Güvenlik Açığı Analizi', 'ISO 27001', 'KVKK Uyumluluk', 'Siber Güvenlik Eğitimi', 'SOC Hizmetleri'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 212 444 5678',
            whatsapp: '+90 532 444 5678',
            email: 'info@cybersecure.com.tr',
            website: 'https://www.cybersecure.com.tr',
            address: 'Levent Mahallesi, Güvenlik Sokağı No:42, Beşiktaş/İstanbul'
          },
          socialMedia: {
            linkedin: 'company/cybersecure-solutions',
            twitter: 'cybersecure_tr',
            instagram: 'cybersecure.solutions',
            facebook: 'cybersecuresolutions',
            youtube: 'cybersecuresolutions'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
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
          yearEstablished: 2019,
          employeeCount: '10-25',
          certifications: ['ISO 27001 Lead Auditor', 'CEH', 'CISSP']
        }
      ]
    },
    'blockchain': {
      description: 'Kripto teknolojiler, smart contracts, DeFi çözümleri',
      companies: [
        {
          id: 'blockchain-001',
          name: 'BlockTech Turkey',
          slug: 'blocktech-turkey',
          description: 'BlockTech Turkey, blockchain teknolojileri ve kripto para alanında Türkiye nin öncü firmalarından biridir. Smart contract geliştirme, NFT projeleri, DeFi uygulamaları ve blockchain danışmanlığı konularında hizmet vermektedir.',
          summary: 'Blockchain ile geleceği inşa ediyoruz. Web3, DeFi ve NFT projelerinizi gerçeğe dönüştürün.',
          location: 'İstanbul, Türkiye',
          rating: 4.7,
          reviewCount: 89,
          services: ['Smart Contract', 'DeFi Geliştirme', 'NFT Projeleri', 'Blockchain Danışmanlık', 'Web3 Geliştirme', 'Tokenomics'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 212 333 4567',
            whatsapp: '+90 532 333 4567',
            email: 'hello@blocktech.com.tr',
            website: 'https://www.blocktech.com.tr',
            address: 'Maslak Mahallesi, Blockchain Sokağı No:18, Sarıyer/İstanbul'
          },
          socialMedia: {
            linkedin: 'company/blocktech-turkey',
            twitter: 'blocktech_tr',
            instagram: 'blocktech.turkey',
            facebook: 'blocktechturkey',
            youtube: 'blocktechturkey'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '10:00 - 19:00',
            tuesday: '10:00 - 19:00',
            wednesday: '10:00 - 19:00',
            thursday: '10:00 - 19:00',
            friday: '10:00 - 19:00',
            saturday: 'Kapalı',
            sunday: 'Kapalı'
          },
          yearEstablished: 2021,
          employeeCount: '5-10',
          certifications: ['Ethereum Developer', 'Solidity Expert']
        }
      ]
    },
    'oyun-gelistirme': {
      description: 'Mobil, PC, konsol oyun geliştirme ve yayıncılık',
      companies: [
        {
          id: 'game-001',
          name: 'GameCraft Studios',
          slug: 'gamecraft-studios',
          description: 'GameCraft Studios, 2018 yılında kurulan ve mobil oyun geliştirme alanında uzmanlaşmış bir stüdyodur. Unity ve Unreal Engine teknolojileri ile iOS, Android ve PC platformları için eğlenceli ve bağımlılık yaratan oyunlar geliştirmektedir.',
          summary: 'Hayal gücünüzü oyuna dönüştürüyoruz. Yaratıcı ekibimizle eğlenceli oyun deneyimleri yaratıyoruz.',
          location: 'İstanbul, Türkiye',
          rating: 4.8,
          reviewCount: 156,
          services: ['Mobil Oyun', 'PC Oyunları', 'Unity Geliştirme', 'Unreal Engine', 'Game Design', 'UI/UX Tasarım', 'Yayıncılık', 'Oyun Testi'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 212 456 7890',
            whatsapp: '+90 532 456 7890',
            email: 'hello@gamecraftstudios.com',
            website: 'https://www.gamecraftstudios.com',
            address: 'Şişli Mahallesi, Oyun Geliştirme Sokağı No:42, Şişli/İstanbul'
          },
          socialMedia: {
            linkedin: 'company/gamecraft-studios',
            twitter: 'gamecraftstudios',
            instagram: 'gamecraft.studios',
            facebook: 'gamecraftstudios',
            youtube: 'gamecraftstudios'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
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
          yearEstablished: 2018,
          employeeCount: '15-25',
          certifications: ['Unity Certified', 'Google Play Developer', 'Apple Developer']
        }
      ]
    },
    'veri-analizi': {
      description: 'Big data, business intelligence, veri madenciliği',
      companies: [
        {
          id: 'data-001',
          name: 'DataInsight Analytics',
          slug: 'datainsight-analytics',
          description: 'DataInsight Analytics, 2019 yılında kurulan ve veri analizi ile business intelligence çözümleri sunan ileri teknoloji şirketidir. Büyük veri işleme, makine öğrenmesi ve tahmine dayalı analitik alanlarında uzmanlaşmıştır.',
          summary: 'Verinizi değere dönüştürün. İleri analitik çözümlerle iş zekası keşfedin.',
          location: 'Ankara, Türkiye',
          rating: 4.9,
          reviewCount: 89,
          services: ['Big Data', 'Business Intelligence', 'Veri Madenciliği', 'Dashboard', 'Predictive Analytics', 'Data Warehouse', 'ETL Süreçleri', 'Veri Görselleştirme'],
          isVerified: true,
          isEco: true,
          isFeatured: true,
          contactInfo: {
            phone: '+90 312 345 6789',
            whatsapp: '+90 532 345 6789',
            email: 'info@datainsight.com.tr',
            website: 'https://www.datainsight.com.tr',
            address: 'Çankaya Mahallesi, Veri Caddesi No:56, Çankaya/Ankara'
          },
          socialMedia: {
            linkedin: 'company/datainsight-analytics',
            twitter: 'datainsighttr',
            instagram: 'datainsight.analytics',
            facebook: 'datainsightanalytics',
            youtube: 'datainsightanalytics'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
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
          yearEstablished: 2019,
          employeeCount: '10-25',
          certifications: ['Microsoft Certified', 'Tableau Partner', 'AWS Data Analytics']
        }
      ]
    },
    'bulut-bilisim': {
      description: 'Cloud computing, AWS, Azure, Google Cloud hizmetleri',
      companies: [
        {
          id: 'cloud-001',
          name: 'CloudPro Solutions',
          slug: 'cloudpro-solutions',
          description: 'CloudPro Solutions, 2020 yılında kurulan ve bulut bilişim çözümleri sunan uzman bir teknoloji şirketidir. AWS, Azure, Google Cloud platformlarında migrасyon, yönetim ve optimizasyon hizmetleri vermektedir.',
          summary: 'Buluta geçiş yolculuğunuzda güvenilir partneriniz. Enterprise düzeyinde bulut çözümleri.',
          location: 'İzmir, Türkiye',
          rating: 4.8,
          reviewCount: 134,
          services: ['AWS Hizmetleri', 'Microsoft Azure', 'Google Cloud', 'Bulut Migrasyonu', 'DevOps', 'Kubernetes', 'Docker', 'Bulut Güvenlik'],
          isVerified: true,
          isEco: true,
          isFeatured: true,
          contactInfo: {
            phone: '+90 232 567 8901',
            whatsapp: '+90 532 567 8901',
            email: 'info@cloudpro.com.tr',
            website: 'https://www.cloudpro.com.tr',
            address: 'Bornova Teknoparkı, Bulut Sokağı No:34, Bornova/İzmir'
          },
          socialMedia: {
            linkedin: 'company/cloudpro-solutions',
            twitter: 'cloudproso',
            instagram: 'cloudpro.solutions',
            facebook: 'cloudprosolutions',
            youtube: 'cloudprosolutions'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '08:30 - 17:30',
            tuesday: '08:30 - 17:30',
            wednesday: '08:30 - 17:30',
            thursday: '08:30 - 17:30',
            friday: '08:30 - 17:30',
            saturday: 'Kapalı',
            sunday: 'Kapalı'
          },
          yearEstablished: 2020,
          employeeCount: '15-25',
          certifications: ['AWS Solution Architect', 'Microsoft Azure Expert', 'Google Cloud Professional']
        }
      ]
    }
  },
  'dijital-pazarlama': {
    'seo-sem': {
      description: 'Arama motoru optimizasyonu ve reklamları',
      companies: [
        {
          id: 'digital-001',
          name: 'SEO Masters Agency',
          slug: 'seo-masters',
          description: 'SEO Masters Agency, 2016 yılından beri dijital pazarlama alanında faaliyet gösteren, arama motoru optimizasyonu ve Google Ads yönetimi konusunda uzman bir ajansıdır. 500+ projeye imza atan deneyimli ekibiyle, organik trafik artışı ve dönüşüm odaklı kampanyalar yürütmektedir.',
          summary: 'Arama motorlarında görünürlüğünüzü artırıyor, hedef kitlenizi sitenize çekiyoruz. SEO ve SEM stratejileriyle satışlarınızı büyütün.',
          location: 'İstanbul, Türkiye',
          rating: 4.6,
          reviewCount: 789,
          services: ['SEO Optimizasyonu', 'Google Ads', 'Local SEO', 'E-ticaret SEO', 'Content Marketing', 'Link Building', 'Technical SEO', 'Analytics & Reporting'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 212 987 6543',
            whatsapp: '+90 532 987 6543',
            email: 'info@seomasters.com.tr',
            website: 'https://www.seomasters.com.tr',
            address: 'Levent Mahallesi, Dijital Cadde No:88, Beşiktaş/İstanbul'
          },
          socialMedia: {
            linkedin: 'company/seo-masters-agency',
            twitter: 'seomastersagency',
            instagram: 'seomasters.agency',
            facebook: 'seomastersagency',
            youtube: 'seomastersagency'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: [
              {
                title: 'SEO Başarı Hikayeleri',
                url: 'https://www.youtube.com/watch?v=example3',
                thumbnail: '/api/placeholder/600/400',
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
            saturday: '10:00 - 15:00',
            sunday: 'Kapalı'
          },
          yearEstablished: 2016,
          employeeCount: '10-25',
          certifications: ['Google Ads Certified', 'Google Analytics Certified', 'Bing Ads Certified']
        }
      ]
    },
    'sosyal-medya': {
      description: 'Sosyal medya yönetimi, influencer marketing',
      companies: [
        {
          id: 'social-001',
          name: 'Social Media Pro',
          slug: 'social-media-pro',
          description: 'Social Media Pro, 2018 yılından beri sosyal medya yönetimi ve dijital pazarlama alanında hizmet veren kreatif bir ajansıdır. İçerik üretimi, topluluk yönetimi, influencer kampanyaları ve sosyal medya reklamları konularında uzmanlaşmıştır.',
          summary: 'Sosyal medyada markanızın sesini yükseltin. Yaratıcı içerikler ve etkili stratejilerle hedef kitlenize ulaşın.',
          location: 'İstanbul, Türkiye',
          rating: 4.8,
          reviewCount: 342,
          services: ['Sosyal Medya Yönetimi', 'İçerik Üretimi', 'Influencer Marketing', 'Community Management', 'Social Ads', 'Video Prodüksiyon'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 212 555 7890',
            whatsapp: '+90 532 555 7890',
            email: 'hello@socialmediapro.com.tr',
            website: 'https://www.socialmediapro.com.tr',
            address: 'Kadıköy Mahallesi, Sosyal Medya Caddesi No:24, Kadıköy/İstanbul'
          },
          socialMedia: {
            linkedin: 'company/social-media-pro',
            twitter: 'socialmediapro_tr',
            instagram: 'socialmediapro.tr',
            facebook: 'socialmediaprotr',
            youtube: 'socialmediapro'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: [
              {
                title: 'Sosyal Medya Kampanyaları',
                url: 'https://www.youtube.com/watch?v=example',
                thumbnail: '/api/placeholder/600/400',
                platform: 'youtube'
              }
            ]
          },
          businessHours: {
            monday: '09:30 - 18:30',
            tuesday: '09:30 - 18:30',
            wednesday: '09:30 - 18:30',
            thursday: '09:30 - 18:30',
            friday: '09:30 - 18:30',
            saturday: '10:00 - 16:00',
            sunday: 'Kapalı'
          },
          yearEstablished: 2018,
          employeeCount: '15-25',
          certifications: ['Facebook Blueprint', 'Google Ads', 'Hootsuite Certified']
        }
      ]
    },
    'e-ticaret': {
      description: 'Online mağaza kurulumu, pazaryeri yönetimi',
      companies: [
        {
          id: 'ecommerce-001',
          name: 'ShopBuilder E-ticaret',
          slug: 'shopbuilder-eticaret',
          description: 'ShopBuilder E-ticaret, 2017 yılından beri online mağaza kurulumu ve e-ticaret çözümleri sunan uzman bir ajansıdır. Shopify, WooCommerce, Magento platformlarında profesyonel e-ticaret siteleri geliştirmekte, pazaryeri entegrasyonları ve dijital pazarlama destekleri sağlamaktadır.',
          summary: 'Online satış dünyasında yerinizi alın. Profesyonel e-ticaret çözümleriyle dijital dönüşümünüzü tamamlayın.',
          location: 'İstanbul, Türkiye',
          rating: 4.7,
          reviewCount: 423,
          services: ['Online Mağaza', 'Shopify', 'WooCommerce', 'Magento', 'Pazaryeri Entegrasyonu', 'Ödeme Sistemleri', 'Kargo Entegrasyonu', 'E-ticaret Danışmanlığı'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 212 678 9012',
            whatsapp: '+90 532 678 9012',
            email: 'info@shopbuilder.com.tr',
            website: 'https://www.shopbuilder.com.tr',
            address: 'Levent Mahallesi, E-ticaret Caddesi No:89, Beşiktaş/İstanbul'
          },
          socialMedia: {
            linkedin: 'company/shopbuilder-eticaret',
            twitter: 'shopbuildertr',
            instagram: 'shopbuilder.eticaret',
            facebook: 'shopbuildereticaret',
            youtube: 'shopbuildereticaret'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '09:00 - 18:00',
            tuesday: '09:00 - 18:00',
            wednesday: '09:00 - 18:00',
            thursday: '09:00 - 18:00',
            friday: '09:00 - 18:00',
            saturday: '10:00 - 16:00',
            sunday: 'Kapalı'
          },
          yearEstablished: 2017,
          employeeCount: '25-50',
          certifications: ['Shopify Partner', 'WooCommerce Expert', 'Google Ads Certified']
        }
      ]
    },
    'content-marketing': {
      description: 'İçerik pazarlama, blog yazarlığı, video üretimi',
      companies: [
        {
          id: 'content-001',
          name: 'ContentHub Creative',
          slug: 'contenthub-creative',
          description: 'ContentHub Creative, 2018 yılında kurulan ve içerik pazarlama alanında uzmanlaşmış yaratıcı bir ajansıdır. Blog yazıları, video içerikleri, podcast’ler ve infografikler ile markalara etkili içerik stratejileri sunmaktadır.',
          summary: 'İçeriklerinizle fark yaratın. Yaratıcı içerik çözümleriyle markanızın sesini güçlendirin.',
          location: 'İstanbul, Türkiye',
          rating: 4.8,
          reviewCount: 267,
          services: ['Blog Yazarlığı', 'Video İçerik', 'Podcast Üretimi', 'Infografik', 'SEO İçerik', 'Sosyal Medya İçeriği', 'E-book', 'İçerik Stratejisi'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 212 789 0123',
            whatsapp: '+90 532 789 0123',
            email: 'hello@contenthub.com.tr',
            website: 'https://www.contenthub.com.tr',
            address: 'Beyoğlu Mahallesi, İçerik Sokağı No:45, Beyoğlu/İstanbul'
          },
          socialMedia: {
            linkedin: 'company/contenthub-creative',
            twitter: 'contenthubcr',
            instagram: 'contenthub.creative',
            facebook: 'contenthubcreative',
            youtube: 'contenthubcreative'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: [{
              title: 'İçerik Pazarlama Stratejileri',
              url: 'https://www.youtube.com/watch?v=example',
              thumbnail: '/api/placeholder/600/400',
              platform: 'youtube'
            }]
          },
          businessHours: {
            monday: '09:30 - 18:30',
            tuesday: '09:30 - 18:30',
            wednesday: '09:30 - 18:30',
            thursday: '09:30 - 18:30',
            friday: '09:30 - 18:30',
            saturday: 'Kapalı',
            sunday: 'Kapalı'
          },
          yearEstablished: 2018,
          employeeCount: '15-25',
          certifications: ['Google Analytics Certified', 'HubSpot Content Marketing', 'Facebook Blueprint']
        }
      ]
    },
    'email-marketing': {
      description: 'E-posta kampanyaları, automation, CRM',
      companies: [
        {
          id: 'email-001',
          name: 'MailCraft Pro',
          slug: 'mailcraft-pro',
          description: 'MailCraft Pro, 2019 yılında kurulan ve e-posta pazarlama çözümleri sunan uzman bir ajansıdır. Newsletter tasarımı, otomasyon kampanyaları, CRM entegrasyonları ve e-posta deliverability optimizasyonu alanlarında hizmet vermektedir.',
          summary: 'E-posta ile bağı güçlendirin. Profesyonel e-posta kampanyalarıyla müşterilerinizle daha yakın iletişim kurun.',
          location: 'Ankara, Türkiye',
          rating: 4.6,
          reviewCount: 189,
          services: ['Newsletter Tasarım', 'E-posta Otomasyonu', 'CRM Entegrasyonu', 'A/B Testing', 'Deliverability', 'Segmentasyon', 'Analytics', 'Template Tasarım'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 312 890 1234',
            whatsapp: '+90 532 890 1234',
            email: 'info@mailcraft.com.tr',
            website: 'https://www.mailcraft.com.tr',
            address: 'Kızılay Mahallesi, E-posta Caddesi No:67, Çankaya/Ankara'
          },
          socialMedia: {
            linkedin: 'company/mailcraft-pro',
            twitter: 'mailcraftpro',
            instagram: 'mailcraft.pro',
            facebook: 'mailcraftpro',
            youtube: 'mailcraftpro'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '09:00 - 17:30',
            tuesday: '09:00 - 17:30',
            wednesday: '09:00 - 17:30',
            thursday: '09:00 - 17:30',
            friday: '09:00 - 17:30',
            saturday: 'Kapalı',
            sunday: 'Kapalı'
          },
          yearEstablished: 2019,
          employeeCount: '10-25',
          certifications: ['Mailchimp Partner', 'HubSpot Certified', 'Klaviyo Partner']
        }
      ]
    },
    'ppc-reklam': {
      description: 'Google Ads, Facebook Ads, programmatic advertising',
      companies: [
        {
          id: 'ppc-001',
          name: 'AdMax Digital Agency',
          slug: 'admax-digital',
          description: 'AdMax Digital Agency, 2016 yılından beri PPC reklamcılık ve programmatic advertising alanında faaliyet gösteren uzman bir dijital ajansıdır. Google Ads, Facebook Ads, LinkedIn Ads ve diğer platformlarda ROI odaklı kampanyalar yürütmektedir.',
          summary: 'Reklam bütçenizi en verimli şekilde kullanın. Data-driven yaklaşımla yüksek dönüşüm oranları elde edin.',
          location: 'İstanbul, Türkiye',
          rating: 4.9,
          reviewCount: 356,
          services: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'YouTube Ads', 'Display Advertising', 'Retargeting', 'Landing Page', 'Conversion Optimization'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 212 901 2345',
            whatsapp: '+90 532 901 2345',
            email: 'info@admax.com.tr',
            website: 'https://www.admax.com.tr',
            address: 'Maslak Mahallesi, Reklam Bulvarı No:123, Sarıyer/İstanbul'
          },
          socialMedia: {
            linkedin: 'company/admax-digital',
            twitter: 'admaxdigital',
            instagram: 'admax.digital',
            facebook: 'admaxdigital',
            youtube: 'admaxdigital'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: [{
              title: 'PPC Reklam Stratejileri',
              url: 'https://www.youtube.com/watch?v=example',
              thumbnail: '/api/placeholder/600/400',
              platform: 'youtube'
            }]
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
          yearEstablished: 2016,
          employeeCount: '25-50',
          certifications: ['Google Ads Expert', 'Facebook Marketing Partner', 'Microsoft Advertising Certified']
        }
      ]
    }
  },
  saglik: {
    'hastaneler': {
      description: 'Özel ve devlet hastaneleri, tıp merkezleri',
      companies: [
        {
          id: 'hosp-001',
          name: 'Anadolu Medical Center',
          slug: 'anadolu-medical',
          description: 'Anadolu Medical Center, 2005 yılında kurulan, JCI akreditasyonlu, uluslararası standartlarda sağlık hizmeti sunan bir özel hastanedir. 200+ uzman doktor, son teknoloji tıbbi cihazlar ve hasta odaklı hizmet anlayışı ile Türkiye nin önde gelen sağlık kuruluşlarından biridir.',
          summary: 'Sağlığınız için dünya standartlarında hizmet. JCI akreditasyonlu hastanemizde, deneyimli doktor kadromuz ve ileri teknoloji ile yanınızdayız.',
          location: 'İstanbul, Türkiye',
          rating: 4.8,
          reviewCount: 2456,
          services: ['Kardiyoloji', 'Onkoloji', 'Nöroloji', 'Ortopedi', 'Göz Hastalıkları', 'Kadın Doğum', 'Çocuk Sağlığı', 'Genel Cerrahi', 'Check-up'],
          isVerified: true,
          isEco: true,
          isFeatured: true,
          contactInfo: {
            phone: '+90 262 678 5000',
            whatsapp: '+90 532 678 5000',
            email: 'bilgi@anadolumedical.com',
            website: 'https://www.anadolumedical.com',
            address: 'Anadolu Caddesi No:1, Gebze/Kocaeli'
          },
          socialMedia: {
            facebook: 'anadolumedicalcenter',
            instagram: 'anadolu.medical',
            linkedin: 'company/anadolu-medical-center',
            youtube: 'anadolumedical'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '24 Saat',
            tuesday: '24 Saat',
            wednesday: '24 Saat',
            thursday: '24 Saat',
            friday: '24 Saat',
            saturday: '24 Saat',
            sunday: '24 Saat'
          },
          yearEstablished: 2005,
          employeeCount: '1000+',
          certifications: ['JCI Akreditasyonu', 'ISO 9001', 'ISO 14001', 'ISO 45001']
        }
      ]
    },
    'klinikler': {
      description: 'Uzman doktor klinikleri ve polklinikler',
      companies: [
        {
          id: 'clinic-001',
          name: 'Sağlık Plus Tıp Merkezi',
          slug: 'saglik-plus-tip-merkezi',
          description: 'Sağlık Plus Tıp Merkezi, 2015 yılında kurulan modern bir polikliniktir. Kardiyoloji, endokrinoloji, nöroloji, göz hastalıkları ve genel dahiliye alanlarında uzman doktorları ile hizmet vermektedir. Son teknoloji tıbbi cihazları ve hasta odaklı yaklaşımı ile güvenilir sağlık hizmeti sunmaktadır.',
          summary: 'Sağlığınız bizim önceliğimiz. Uzman doktor kadromuz ve modern ekipmanlarımızla yanınızdayız.',
          location: 'Ankara, Türkiye',
          rating: 4.7,
          reviewCount: 892,
          services: ['Kardiyoloji', 'Endokrinoloji', 'Nöroloji', 'Göz Hastalıkları', 'Genel Dahiliye', 'EKG', 'Ultrasonografi', 'Check-up'],
          isVerified: true,
          isEco: true,
          isFeatured: true,
          contactInfo: {
            phone: '+90 312 444 7777',
            whatsapp: '+90 532 444 7777',
            email: 'bilgi@saglikplus.com.tr',
            website: 'https://www.saglikplus.com.tr',
            address: 'Çankaya Mahallesi, Sağlık Sokağı No:56, Çankaya/Ankara'
          },
          socialMedia: {
            linkedin: 'company/saglik-plus',
            twitter: 'saglikplus',
            instagram: 'saglik.plus.tip',
            facebook: 'saglikplustip',
            youtube: 'saglikplus'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '08:00 - 19:00',
            tuesday: '08:00 - 19:00',
            wednesday: '08:00 - 19:00',
            thursday: '08:00 - 19:00',
            friday: '08:00 - 19:00',
            saturday: '08:00 - 17:00',
            sunday: '09:00 - 15:00'
          },
          yearEstablished: 2015,
          employeeCount: '25-50',
          certifications: ['Sağlık Bakanlığı Onaylı', 'ISO 9001', 'JCI Standartları']
        }
      ]
    },
    'dis-klinikleri': {
      description: 'Ağız ve diş sağlığı klinikleri',
      companies: [
        {
          id: 'dental-001',
          name: 'Smile Dental Clinic',
          slug: 'smile-dental-clinic',
          description: 'Smile Dental Clinic, 2014 yılından beri ağız ve diş sağlığı alanında hizmet veren modern bir dental kliniğidir. İmplant, ortodonti, estetik diş hekimliği ve genel ağız bakımı konularında uzman doktorları ile kaliteli hizmet sunmaktadır.',
          summary: 'Gülümsenizi güvenceye alın. Modern teknoloji ve uzman doktorlarımızla sağlıklı dişlere kavuşun.',
          location: 'İstanbul, Türkiye',
          rating: 4.8,
          reviewCount: 567,
          services: ['Diş İmplantı', 'Ortodonti', 'Estetik Diş Hekimliği', 'Kağıt Beyazlatma', 'Periodontoloji', 'Çocuk Diş Hekimliği', 'Protez', 'Kanal Tedavisi'],
          isVerified: true,
          isEco: true,
          isFeatured: true,
          contactInfo: {
            phone: '+90 212 234 5678',
            whatsapp: '+90 532 234 5678',
            email: 'bilgi@smiledentalclinic.com',
            website: 'https://www.smiledentalclinic.com',
            address: 'Nişantaşı Mahallesi, Sağlık Sokağı No:34, Şişli/İstanbul'
          },
          socialMedia: {
            linkedin: 'company/smile-dental-clinic',
            twitter: 'smiledentaltr',
            instagram: 'smile.dental.clinic',
            facebook: 'smiledentalclinic',
            youtube: 'smiledentalclinic'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '09:00 - 19:00',
            tuesday: '09:00 - 19:00',
            wednesday: '09:00 - 19:00',
            thursday: '09:00 - 19:00',
            friday: '09:00 - 19:00',
            saturday: '09:00 - 17:00',
            sunday: 'Kapalı'
          },
          yearEstablished: 2014,
          employeeCount: '15-25',
          certifications: ['Türkiye Diş Hekimleri Birliği', 'İmplant Sertifikası', 'Estetik Diş Hekimliği']
        }
      ]
    },
    'fizik-tedavi': {
      description: 'Fizik tedavi ve rehabilitasyon merkezleri',
      companies: [
        {
          id: 'physio-001',
          name: 'RehabMed Fizik Tedavi Merkezi',
          slug: 'rehabmed-fizik-tedavi',
          description: 'RehabMed Fizik Tedavi Merkezi, 2016 yılında kurulan ve fizik tedavi ile rehabilitasyon hizmetleri sunan modern bir sağlık merkezidir. Ortopedik rehabilitasyon, nörolojik rehabilitasyon, spor yaralanmaları ve ağrı yönetimi alanlarında uzmanlaşmıştır.',
          summary: 'Hareket özgürlüğünüzü geri kazanın. Uzman fizyoterapistlerimiz ve modern ekipmanlarımızla iyileşme süreci hızlanır.',
          location: 'Ankara, Türkiye',
          rating: 4.7,
          reviewCount: 345,
          services: ['Ortopedik Rehabilitasyon', 'Nörolojik Rehabilitasyon', 'Spor Fizyoterapisi', 'Manuel Terapi', 'Ağrı Yönetimi', 'Ev Fizik Tedavisi', 'Pilates Rehabilitasyon', 'Hydroterapi'],
          isVerified: true,
          isEco: true,
          isFeatured: true,
          contactInfo: {
            phone: '+90 312 345 6789',
            whatsapp: '+90 532 345 6789',
            email: 'bilgi@rehabmed.com.tr',
            website: 'https://www.rehabmed.com.tr',
            address: 'Çankaya Mahallesi, Rehabilitasyon Caddesi No:78, Çankaya/Ankara'
          },
          socialMedia: {
            linkedin: 'company/rehabmed-fizik-tedavi',
            twitter: 'rehabmedtr',
            instagram: 'rehabmed.fizyoterapi',
            facebook: 'rehabmedfiziktedavi',
            youtube: 'rehabmed'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '08:00 - 19:00',
            tuesday: '08:00 - 19:00',
            wednesday: '08:00 - 19:00',
            thursday: '08:00 - 19:00',
            friday: '08:00 - 19:00',
            saturday: '08:00 - 16:00',
            sunday: 'Kapalı'
          },
          yearEstablished: 2016,
          employeeCount: '25-50',
          certifications: ['Sağlık Bakanlığı Lisanslı', 'Fizyoterapi Derneği Üyesi', 'Manuel Terapi Sertifikası']
        }
      ]
    },
    'psikoloji': {
      description: 'Psikoloji ve psikiyatri klinikleri',
      companies: [
        {
          id: 'psych-001',
          name: 'MindCare Psikoloji Merkezi',
          slug: 'mindcare-psikoloji',
          description: 'MindCare Psikoloji Merkezi, 2015 yılından beri ruh sağlığı alanında hizmet veren uzman bir merkezdir. Bireysel terapi, çift terapisi, aile danışmanlığı ve çocuk psikolojisi konularında deneyimli psikolog ve psikiyatristleri ile hizmet sunmaktadır.',
          summary: 'Ruh sağlığınız için doğru adres. Uzman psikolog ve psikiyatristlerimizle yaşam kalitenizi artırın.',
          location: 'İstanbul, Türkiye',
          rating: 4.9,
          reviewCount: 289,
          services: ['Bireysel Terapi', 'Çift Terapisi', 'Aile Danışmanlığı', 'Çocuk Psikolojisi', 'Anksiyete Tedavisi', 'Depresyon Tedavisi', 'Travma Terapisi', 'Online Terapi'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 212 456 7890',
            whatsapp: '+90 532 456 7890',
            email: 'bilgi@mindcare.com.tr',
            website: 'https://www.mindcare.com.tr',
            address: 'Bebek Mahallesi, Psikoloji Sokağı No:56, Beşiktaş/İstanbul'
          },
          socialMedia: {
            linkedin: 'company/mindcare-psikoloji',
            twitter: 'mindcaretr',
            instagram: 'mindcare.psikoloji',
            facebook: 'mindcarepsikoloji',
            youtube: 'mindcarepsikoloji'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '09:00 - 20:00',
            tuesday: '09:00 - 20:00',
            wednesday: '09:00 - 20:00',
            thursday: '09:00 - 20:00',
            friday: '09:00 - 20:00',
            saturday: '10:00 - 18:00',
            sunday: '10:00 - 16:00'
          },
          yearEstablished: 2015,
          employeeCount: '15-25',
          certifications: ['Türkiye Psikologlar Derneği', 'Aile Danışmanlığı Sertifikası', 'Travma Terapi Uzmanı']
        }
      ]
    },
    'laboratuvar': {
      description: 'Tıbbi laboratuvar ve tahlil hizmetleri',
      companies: [
        {
          id: 'lab-001',
          name: 'MedLab Tanı Merkezi',
          slug: 'medlab-tani-merkezi',
          description: 'MedLab Tanı Merkezi, 2012 yılından beri tıbbi laboratuvar hizmetleri sunan güvenilir bir sağlık kuruluşudur. Biyokimya, hematoloji, mikrobiyoloji, hormon testleri ve özel tanı testleri konularında hızlı ve doğru sonuçlar sunmaktadır.',
          summary: 'Sağlığınızı takip etmenin en doğru yolu. Güvenilir tahlil sonuçlarıyla sağlığınızı kontrol altında tutun.',
          location: 'İzmir, Türkiye',
          rating: 4.6,
          reviewCount: 678,
          services: ['Biyokimya Testleri', 'Hematoloji', 'Mikrobiyoloji', 'Hormon Testleri', 'Tiroid Testleri', 'Genetik Testler', 'Check-up Paketleri', 'Ev Numune Alma'],
          isVerified: true,
          isEco: true,
          isFeatured: true,
          contactInfo: {
            phone: '+90 232 567 8901',
            whatsapp: '+90 532 567 8901',
            email: 'bilgi@medlab.com.tr',
            website: 'https://www.medlab.com.tr',
            address: 'Konak Mahallesi, Laboratuvar Caddesi No:123, Konak/İzmir'
          },
          socialMedia: {
            linkedin: 'company/medlab-tani',
            twitter: 'medlabtr',
            instagram: 'medlab.tani',
            facebook: 'medlabtani',
            youtube: 'medlabtani'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '07:00 - 19:00',
            tuesday: '07:00 - 19:00',
            wednesday: '07:00 - 19:00',
            thursday: '07:00 - 19:00',
            friday: '07:00 - 19:00',
            saturday: '07:00 - 17:00',
            sunday: '08:00 - 15:00'
          },
          yearEstablished: 2012,
          employeeCount: '50-100',
          certifications: ['TS EN ISO 15189', 'Sağlık Bakanlığı Lisanslı', 'TURKAK Akreditasyon']
        }
      ]
    },
    'eczane': {
      description: 'Eczaneler ve ilaç satış noktaları',
      companies: [
        {
          id: 'pharmacy-001',
          name: 'Sifa Eczanesi',
          slug: 'sifa-eczanesi',
          description: 'Şifa Eczanesi, 1995 yılından beri hizmet veren köklü bir eczanedir. Reçeteli ve reçetesiz ilaçlar, sağlık ürünleri, medikal cihazlar ve eczacılık danışmanlığı hizmetleri sunmaktadır. 7/24 nöbetçi eczane hizmeti de bulunmaktadır.',
          summary: 'Sağlığınız için güvenilir adres. Uzman eczacımız eşliğinde kaliteli sağlık ürünleri.',
          location: 'Bursa, Türkiye',
          rating: 4.7,
          reviewCount: 234,
          services: ['Reçeteli İlaçlar', 'OTC Ürünler', 'Medikal Cihazlar', 'Eczacılık Danışmanlığı', 'Kan Şekeri Ölçümü', 'Tansiyon Ölçümü', 'Nöbetçi Hizmet', 'Online Sipariş'],
          isVerified: true,
          isEco: true,
          isFeatured: true,
          contactInfo: {
            phone: '+90 224 678 9012',
            whatsapp: '+90 532 678 9012',
            email: 'bilgi@sifaeczanesi.com',
            website: 'https://www.sifaeczanesi.com',
            address: 'Osmangazi Mahallesi, Sağlık Sokağı No:45, Osmangazi/Bursa'
          },
          socialMedia: {
            linkedin: 'company/sifa-eczanesi',
            twitter: 'sifaeczanesi',
            instagram: 'sifa.eczanesi',
            facebook: 'sifaeczanesi',
            youtube: 'sifaeczanesi'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '08:30 - 19:30',
            tuesday: '08:30 - 19:30',
            wednesday: '08:30 - 19:30',
            thursday: '08:30 - 19:30',
            friday: '08:30 - 19:30',
            saturday: '09:00 - 18:00',
            sunday: 'Nöbetçi Saatler'
          },
          yearEstablished: 1995,
          employeeCount: '5-10',
          certifications: ['Eczacılar Birliği Üyesi', 'ISO 9001', 'GDP Sertifikası']
        }
      ]
    }
  },
  'estetik-guzellik': {
    'kuafor-berber': {
      description: 'Kuaför, berber, saç bakım hizmetleri',
      companies: [
        {
          id: 'beauty-001',
          name: 'Elegant Hair Studio',
          slug: 'elegant-hair-studio',
          description: 'Elegant Hair Studio, 2012 yılında kurulan ve premium saç bakım hizmetleri sunan lüks bir güzellik merkezidir. Uzman kuaför ve berber ekibiyle, kesim, boyama, bakım, saç kaynak ve özel gün saç tasarımları konularında hizmet vermektedir. Organik ürünler ve son teknoloji ekipmanlar kullanarak müşteri memnuniyetini ön planda tutmaktadır.',
          summary: 'Saçlarınızın en güzel halini keşfedin. Uzman ekibimiz ve premium ürünlerimizle, size özel saç tasarımları yaratıyoruz.',
          location: 'Ankara, Türkiye',
          rating: 4.9,
          reviewCount: 1234,
          services: ['Saç Kesimi', 'Saç Boyama', 'Saç Bakımı', 'Saç Kaynak', 'Keratin', 'Gelin Saçı', 'Erkek Berberi', 'Saç Analizi'],
          isVerified: true,
          isEco: true,
          isFeatured: true,
          contactInfo: {
            phone: '+90 312 456 7890',
            whatsapp: '+90 532 456 7890',
            email: 'info@eleganthairstudio.com',
            website: 'https://www.eleganthairstudio.com',
            address: 'Kızılay Mahallesi, Güzellik Sokağı No:15, Çankaya/Ankara'
          },
          socialMedia: {
            linkedin: 'company/elegant-hair-studio',
            twitter: 'eleganthairstudio',
            instagram: 'elegant.hair.studio',
            facebook: 'eleganthairstudio',
            youtube: 'eleganthairstudio'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: [
              {
                title: 'Saç Değişim Hikayeleri',
                url: 'https://www.youtube.com/watch?v=example4',
                thumbnail: '/api/placeholder/600/400',
                platform: 'youtube'
              }
            ]
          },
          businessHours: {
            monday: '09:00 - 19:00',
            tuesday: '09:00 - 19:00',
            wednesday: '09:00 - 19:00',
            thursday: '09:00 - 19:00',
            friday: '09:00 - 19:00',
            saturday: '09:00 - 18:00',
            sunday: '10:00 - 17:00'
          },
          yearEstablished: 2012,
          employeeCount: '15-25',
          certifications: ['Loreal Professional Partner', 'Wella Professional', 'Organik Sertifikası']
        }
      ]
    },
    'estetik-merkezi': {
      description: 'Estetik operasyonlar, botox, dolgu işlemleri',
      companies: [
        {
          id: 'aesthetic-001',
          name: 'Estetik Beauty Center',
          slug: 'estetik-beauty-center',
          description: 'Estetik Beauty Center, 2017 yılında kurulan ve estetik tıp alanında uzmanlaşmış modern bir merkezdir. Botox, dolgu, lazer uygulamaları, cilt bakımı ve minimal invaziv estetik işlemler konularında deneyimli uzman doktorları ile hizmet vermektedir.',
          summary: 'Güzelliğinizi profesyonel ellerde keşfedin. Modern teknoloji ve uzman doktor kadromuzla estetik hedeflerinize ulaşın.',
          location: 'İstanbul, Türkiye',
          rating: 4.9,
          reviewCount: 567,
          services: ['Botox', 'Dolgu İşlemleri', 'Lazer Epilasyon', 'Cilt Bakımı', 'PRP', 'Mezaterapi', 'Thread Lift', 'Kimyasal Peeling'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 212 777 8888',
            whatsapp: '+90 532 777 8888',
            email: 'bilgi@estetikbeauty.com',
            website: 'https://www.estetikbeauty.com',
            address: 'Nişantaşı Mahallesi, Güzellik Sokağı No:33, Şişli/İstanbul'
          },
          socialMedia: {
            linkedin: 'company/estetik-beauty',
            twitter: 'estetikbeauty',
            instagram: 'estetik.beauty.center',
            facebook: 'estetikbeautycenter',
            youtube: 'estetikbeauty'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '10:00 - 19:00',
            tuesday: '10:00 - 19:00',
            wednesday: '10:00 - 19:00',
            thursday: '10:00 - 19:00',
            friday: '10:00 - 19:00',
            saturday: '10:00 - 18:00',
            sunday: 'Kapalı'
          },
          yearEstablished: 2017,
          employeeCount: '10-25',
          certifications: ['Sağlık Bakanlığı Onaylı', 'Estetik Tıp Derneği Üyesi']
        }
      ]
    },
    'spa-wellness': {
      description: 'Spa, masaj, wellness ve rahatlama merkezleri',
      companies: [
        {
          id: 'spa-001',
          name: 'Zen Spa & Wellness Center',
          slug: 'zen-spa-wellness',
          description: 'Zen Spa & Wellness Center, 2013 yılından beri premium spa ve wellness hizmetleri sunan lüks bir merkezdir. Aromaterapi masajları, sıcak taş terapisi, cilt bakımı ve detox programları ile fiziksel ve zihinsel rahatlamayı sağlamaktadır.',
          summary: 'Ruhunuzu ve bedeninizi yenileyin. Lüks spa deneyimimizle stres ve yorgunluğunuzdan arının.',
          location: 'Antalya, Türkiye',
          rating: 4.9,
          reviewCount: 445,
          services: ['Aromaterapi Masaj', 'Sıcak Taş Masajı', 'Cilt Bakımı', 'Detox Program', 'Hamam', 'Sauna', 'Çift Masajı', 'Anti-aging Bakım'],
          isVerified: true,
          isEco: true,
          isFeatured: true,
          contactInfo: {
            phone: '+90 242 789 0123',
            whatsapp: '+90 532 789 0123',
            email: 'rezervasyon@zenspa.com.tr',
            website: 'https://www.zenspa.com.tr',
            address: 'Lara Sahili, Wellness Bulvarı No:89, Muratpaşa/Antalya'
          },
          socialMedia: {
            linkedin: 'company/zen-spa-wellness',
            twitter: 'zenspawellness',
            instagram: 'zen.spa.wellness',
            facebook: 'zenspawellness',
            youtube: 'zenspawellness'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '10:00 - 22:00',
            tuesday: '10:00 - 22:00',
            wednesday: '10:00 - 22:00',
            thursday: '10:00 - 22:00',
            friday: '10:00 - 22:00',
            saturday: '09:00 - 23:00',
            sunday: '09:00 - 23:00'
          },
          yearEstablished: 2013,
          employeeCount: '25-50',
          certifications: ['Spa Derneği Üyesi', 'Organik Sertifika', 'Turizm Belgeli']
        }
      ]
    },
    'guzellik-salonu': {
      description: 'Cilt bakımı, makyaj, nail art hizmetleri',
      companies: [
        {
          id: 'beauty-salon-001',
          name: 'Bella Beauty Salon',
          slug: 'bella-beauty-salon',
          description: 'Bella Beauty Salon, 2011 yılından beri kadınların güzelliklerini ortaya çıkaran profesyonel bir güzellik salonudur. Cilt bakımı, makyaj, kaş şekillendirme, nail art ve özel gün hazırlığı konularında uzmanlaşmıştır.',
          summary: 'Güzellinizin parçası olun. Profesyonel ekibimizle kendinizi özel hissedin.',
          location: 'İstanbul, Türkiye',
          rating: 4.8,
          reviewCount: 389,
          services: ['Cilt Bakımı', 'Profesyonel Makyaj', 'Kaş Tasarım', 'Nail Art', 'Jel Tırnak', 'Kirpik Extension', 'Gelin Makyajı', 'Facial'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 212 890 1234',
            whatsapp: '+90 532 890 1234',
            email: 'randevu@bellabeauty.com.tr',
            website: 'https://www.bellabeauty.com.tr',
            address: 'Bağdat Caddesi, Güzellik Sokağı No:167, Kadıköy/İstanbul'
          },
          socialMedia: {
            linkedin: 'company/bella-beauty-salon',
            twitter: 'bellabeautytr',
            instagram: 'bella.beauty.salon',
            facebook: 'bellabeautysalon',
            youtube: 'bellabeautysalon'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '10:00 - 19:00',
            tuesday: '10:00 - 19:00',
            wednesday: '10:00 - 19:00',
            thursday: '10:00 - 19:00',
            friday: '10:00 - 19:00',
            saturday: '10:00 - 18:00',
            sunday: '11:00 - 17:00'
          },
          yearEstablished: 2011,
          employeeCount: '10-25',
          certifications: ['Güzellik Uzmanlığı Sertifikası', 'Makyaj Sanatçısı Belgesi']
        }
      ]
    },
    'lazer-epilasyon': {
      description: 'Lazer epilasyon ve cilt bakım merkezleri',
      companies: [
        {
          id: 'laser-001',
          name: 'LaserCare Estetik Merkezi',
          slug: 'lasercare-estetik',
          description: 'LaserCare Estetik Merkezi, 2018 yılında kurulan ve lazer teknolojileri ile cilt bakım hizmetleri sunan modern bir merkezdir. Lazer epilasyon, cilt yenileme, leke tedavisi ve anti-aging uygulamalarda son teknoloji cihazlar kullanmaktadır.',
          summary: 'Lazer teknolojisiyle cildinizi yenileyin. Güvenli ve etkili lazer uygulamalarıyla istediğiniz sonucu elde edin.',
          location: 'İzmir, Türkiye',
          rating: 4.7,
          reviewCount: 287,
          services: ['Lazer Epilasyon', 'Cilt Yenileme', 'Leke Tedavisi', 'Kırışıklık Tedavisi', 'Akne Tedavisi', 'Skar Tedavisi', 'IPL', 'Radyofrekans'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 232 901 2345',
            whatsapp: '+90 532 901 2345',
            email: 'bilgi@lasercare.com.tr',
            website: 'https://www.lasercare.com.tr',
            address: 'Alsancak Mahallesi, Lazer Caddesi No:78, Konak/İzmir'
          },
          socialMedia: {
            linkedin: 'company/lasercare-estetik',
            twitter: 'lasercaretr',
            instagram: 'lasercare.estetik',
            facebook: 'lasercareestetik',
            youtube: 'lasercareestetik'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '09:00 - 19:00',
            tuesday: '09:00 - 19:00',
            wednesday: '09:00 - 19:00',
            thursday: '09:00 - 19:00',
            friday: '09:00 - 19:00',
            saturday: '09:00 - 17:00',
            sunday: 'Kapalı'
          },
          yearEstablished: 2018,
          employeeCount: '5-10',
          certifications: ['Sağlık Bakanlığı Onaylı', 'Lazer Güvenlik Sertifikası', 'Cilt Bakım Uzmanlığı']
        }
      ]
    }
  },
  'spor-fitness': {
    'spor-salonu': {
      description: 'Fitness salonları, gym, spor merkezleri',
      companies: [
        {
          id: 'fitness-001',
          name: 'PowerGym Fitness Center',
          slug: 'powergym-fitness',
          description: 'PowerGym Fitness Center, 2010 yılında kurulan ve modern fitness ekipmanları ile donatılmış kapsamlı bir spor merkezidir. 2000m² kapalı alanda, kardio, ağırlık antrenmanı, grup dersleri, yüzme havuzu ve spa hizmetleri sunmaktadır. Lisanslı antrenörler eşliğinde kişisel antrenman programları ve beslenme danışmanlığı da vermektedir.',
          summary: 'Fit yaşamın merkezi! Modern ekipmanlar, profesyonel antrenörler ve motivasyon dolu ortamıyla sağlıklı yaşam hedefinize ulaşın.',
          location: 'Bursa, Türkiye',
          rating: 4.7,
          reviewCount: 967,
          services: ['Fitness', 'Kardio', 'Ağırlık Antrenmanı', 'Grup Dersleri', 'Kişisel Antrenman', 'Yüzme Havuzu', 'Spa & Sauna', 'Beslenme Danışmanlığı'],
          isVerified: true,
          isEco: true,
          isFeatured: true,
          contactInfo: {
            phone: '+90 224 123 4567',
            whatsapp: '+90 532 123 4567',
            email: 'info@powergymfitness.com',
            website: 'https://www.powergymfitness.com',
            address: 'Osmangazi Mahallesi, Spor Caddesi No:200, Osmangazi/Bursa'
          },
          socialMedia: {
            linkedin: 'company/powergym-fitness',
            twitter: 'powergymfitness',
            instagram: 'powergym.fitness',
            facebook: 'powergymfitness',
            youtube: 'powergymfitness'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: [
              {
                title: 'PowerGym Tanıtım',
                url: 'https://www.youtube.com/watch?v=example5',
                thumbnail: '/api/placeholder/600/400',
                platform: 'youtube'
              },
              {
                title: 'Antrenman Programları',
                url: 'https://www.youtube.com/watch?v=example6',
                thumbnail: '/api/placeholder/600/400',
                platform: 'youtube'
              }
            ]
          },
          businessHours: {
            monday: '06:00 - 23:00',
            tuesday: '06:00 - 23:00',
            wednesday: '06:00 - 23:00',
            thursday: '06:00 - 23:00',
            friday: '06:00 - 23:00',
            saturday: '07:00 - 22:00',
            sunday: '08:00 - 21:00'
          },
          yearEstablished: 2010,
          employeeCount: '25-50',
          certifications: ['Spor Bakanlığı Onaylı', 'ACSM Certified', 'First Aid Certified']
        }
      ]
    },
    'yoga-pilates': {
      description: 'Yoga, pilates, meditasyon stüdyoları',
      companies: [
        {
          id: 'yoga-001',
          name: 'Zen Yoga & Pilates Studio',
          slug: 'zen-yoga-pilates',
          description: 'Zen Yoga & Pilates Studio, 2016 yılında kurulan huzurlu ve modern bir stüdyodur. Yoga, pilates, meditasyon ve nefes çalışmaları ile beden ve ruh sağlığınızı destekleyen bir yaşam tarzı sunar. Deneyimli eğitmenler eşliğinde bireysel ve grup dersleri düzenlenmektedir.',
          summary: 'İç huzurunuzu keşfedin, bedeninizi güçlendirin. Yoga ve pilates ile dengeli yaşamın kapılarını açın.',
          location: 'İstanbul, Türkiye',
          rating: 4.8,
          reviewCount: 234,
          services: ['Hatha Yoga', 'Vinyasa Yoga', 'Pilates Mat', 'Reformer Pilates', 'Meditasyon', 'Nefes Çalışması', 'Hamile Yogası', 'Çocuk Yogası'],
          isVerified: true,
          isEco: true,
          isFeatured: true,
          contactInfo: {
            phone: '+90 212 888 9999',
            whatsapp: '+90 532 888 9999',
            email: 'info@zenyogastudio.com',
            website: 'https://www.zenyogastudio.com',
            address: 'Bebek Mahallesi, Huzur Sokağı No:12, Beşiktaş/İstanbul'
          },
          socialMedia: {
            linkedin: 'company/zen-yoga-studio',
            twitter: 'zenyogastudio',
            instagram: 'zen.yoga.pilates',
            facebook: 'zenyogapilates',
            youtube: 'zenyogastudio'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '07:00 - 21:00',
            tuesday: '07:00 - 21:00',
            wednesday: '07:00 - 21:00',
            thursday: '07:00 - 21:00',
            friday: '07:00 - 21:00',
            saturday: '08:00 - 18:00',
            sunday: '09:00 - 17:00'
          },
          yearEstablished: 2016,
          employeeCount: '5-10',
          certifications: ['Yoga Alliance RYT-200', 'Pilates Method Alliance']
        }
      ]
    },
    'kisisel-antrenor': {
      description: 'Personal trainer, özel antrenörlük hizmetleri',
      companies: [
        {
          id: 'pt-001',
          name: 'FitCoach Personal Training',
          slug: 'fitcoach-personal-training',
          description: 'FitCoach Personal Training, 2016 yılında kurulan ve kişisel antrenmanlık hizmetleri sunan bir platformdur. Lisanslı ve deneyimli antrenmenleri ile kilo verme, kas geliştirme, fonksiyonel antrenman ve özel beslenme programları sunmaktadır.',
          summary: 'Hedeflerinize ulaşmak için size özel program! Deneyimli antrenmenlerin eşliğinde fit yaşamınıza başlayın.',
          location: 'İstanbul, Türkiye',
          rating: 4.8,
          reviewCount: 267,
          services: ['Kişisel Antrenman', 'Kilo Verme Programı', 'Kas Geliştirme', 'Fonksiyonel Antrenman', 'Beslenme Danışmanlığı', 'Ev Antrenmanı', 'Online Koçluk'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 212 777 7777',
            whatsapp: '+90 532 777 7777',
            email: 'info@fitcoachpt.com',
            website: 'https://www.fitcoachpt.com',
            address: 'Acabağa Mahallesi, Spor Sokağı No:34, Beşiktaş/İstanbul'
          },
          socialMedia: {
            linkedin: 'company/fitcoach-pt',
            twitter: 'fitcoachpt',
            instagram: 'fitcoach.personaltraining',
            facebook: 'fitcoachpersonaltraining',
            youtube: 'fitcoachpt'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '06:00 - 22:00',
            tuesday: '06:00 - 22:00',
            wednesday: '06:00 - 22:00',
            thursday: '06:00 - 22:00',
            friday: '06:00 - 22:00',
            saturday: '07:00 - 20:00',
            sunday: '08:00 - 18:00'
          },
          yearEstablished: 2016,
          employeeCount: '10-25',
          certifications: ['ACSM Certified', 'NASM Personal Trainer', 'Beslenme Uzmanı Sertifikası']
        }
      ]
    },
    'dalis-yuzme': {
      description: 'Dalış okulu, yüzme kursu, su sporları',
      companies: [
        {
          id: 'diving-001',
          name: 'Blue Ocean Diving School',
          slug: 'blue-ocean-diving',
          description: 'Blue Ocean Diving School, 2015 yılında kurulan ve su sporları eğitimi veren uzman bir okuldur. PADI sertifikalı dalış eğitmenleri ile başlangıç seviyesinden ileri seviyeye kadar dalış kursları, yüzme dersleri ve su sporları eğitimleri vermektedir.',
          summary: 'Suya olan tutkunuzu keşfedin! Profesyonel eğitmenlerimizle güvenli ve eğlenceli dalış deneyimi yaşayın.',
          location: 'Antalya, Türkiye',
          rating: 4.9,
          reviewCount: 178,
          services: ['PADI Open Water', 'Advanced Dalış', 'Yüzme Kursu', 'Snorkeling', 'Freediving', 'Teknik Dalış', 'Çocuk Yüzme', 'Su Güvenliği'],
          isVerified: true,
          isEco: true,
          isFeatured: true,
          contactInfo: {
            phone: '+90 242 888 9999',
            whatsapp: '+90 532 888 9999',
            email: 'info@blueoceandiving.com',
            website: 'https://www.blueoceandiving.com',
            address: 'Konyaaltı Sahili, Dalış Caddesi No:45, Konyaaltı/Antalya'
          },
          socialMedia: {
            linkedin: 'company/blue-ocean-diving',
            twitter: 'blueoceandiving',
            instagram: 'blue.ocean.diving',
            facebook: 'blueoceandiving',
            youtube: 'blueoceandiving'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '08:00 - 19:00',
            tuesday: '08:00 - 19:00',
            wednesday: '08:00 - 19:00',
            thursday: '08:00 - 19:00',
            friday: '08:00 - 19:00',
            saturday: '08:00 - 20:00',
            sunday: '08:00 - 20:00'
          },
          yearEstablished: 2015,
          employeeCount: '5-10',
          certifications: ['PADI 5 Star Center', 'Su Güvenliği Sertifikası']
        }
      ]
    },
    'dovus-sanatları': {
      description: 'Karate, taekwondo, kickbox, MMA salonları',
      companies: [
        {
          id: 'martial-001',
          name: 'Dragon Martial Arts Academy',
          slug: 'dragon-martial-arts',
          description: 'Dragon Martial Arts Academy, 2013 yılında kurulan ve dövüş sanatları eğitimi veren profesyonel bir akademidir. Karate, Taekwondo, Kickbox, MMA ve krav maga alanlarında deneyimli antrenörler eşliğinde eğitimler verilmektedir.',
          summary: 'Disiplin, saygı ve güçle dolu bir yolculuk. Profesyonel antrenörlerimizle dövüş sanatlarında ustalaşın.',
          location: 'İstanbul, Türkiye',
          rating: 4.7,
          reviewCount: 189,
          services: ['Karate', 'Taekwondo', 'Kickbox', 'MMA', 'Krav Maga', 'Çocuk Karate', 'Kadın Savunması', 'Fitness'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 212 987 6543',
            whatsapp: '+90 532 987 6543',
            email: 'info@dragonmartialarts.com',
            website: 'https://www.dragonmartialarts.com',
            address: 'Kadıköy Mahallesi, Dövüş Caddesi No:78, Kadıköy/İstanbul'
          },
          socialMedia: {
            linkedin: 'company/dragon-martial-arts',
            twitter: 'dragonmartial',
            instagram: 'dragon.martial.arts',
            facebook: 'dragonmartialarts',
            youtube: 'dragonmartialarts'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '16:00 - 21:00',
            tuesday: '16:00 - 21:00',
            wednesday: '16:00 - 21:00',
            thursday: '16:00 - 21:00',
            friday: '16:00 - 21:00',
            saturday: '09:00 - 18:00',
            sunday: '09:00 - 15:00'
          },
          yearEstablished: 2013,
          employeeCount: '5-10',
          certifications: ['Karate Federasyonu Onaylı', 'Taekwondo Federasyonu', 'MMA Instructor']
        }
      ]
    }
  },
  egitim: {
    'okullar': {
      description: 'Anaokulu, ilkokul, ortaokul, lise',
      companies: [
        {
          id: 'school-001',
          name: 'Gelecek Nesil Koleji',
          slug: 'gelecek-nesil-koleji',
          description: 'Gelecek Nesil Koleji, 2010 yılında kurulan ve anaokulu, ilkokul, ortaokul ve lise kademlerinde eğitim veren özel bir eğitim kurumudur. Modern eğitim yöntemleri, teknoloji destekli öğretim ve çok dilli eğitim programları ile öğrencilerini geleceğe hazırlamaktadır.',
          summary: 'Çocuklarınızın geleceğini şekillendiriyoruz. Kaliteli eğitim ve kişisel gelişim programlarıyla her öğrenci özeldir.',
          location: 'Ankara, Türkiye',
          rating: 4.7,
          reviewCount: 189,
          services: ['Anaokulu', 'İlkokul', 'Ortaokul', 'Lise', 'İngilizce Program', 'STEM Eğitimi', 'Sanat Atölyeleri', 'Spor Kulüpleri'],
          isVerified: true,
          isEco: true,
          isFeatured: true,
          contactInfo: {
            phone: '+90 312 555 1234',
            whatsapp: '+90 532 555 1234',
            email: 'bilgi@geleceknesilkoleji.edu.tr',
            website: 'https://www.geleceknesilkoleji.edu.tr',
            address: 'Yenimahalle, Eğitim Bulvarı No:87, Yenimahalle/Ankara'
          },
          socialMedia: {
            linkedin: 'company/gelecek-nesil-koleji',
            twitter: 'geleceknesil_edu',
            instagram: 'geleceknesil.koleji',
            facebook: 'geleceknesilkoleji',
            youtube: 'geleceknesilkoleji'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '07:30 - 17:00',
            tuesday: '07:30 - 17:00',
            wednesday: '07:30 - 17:00',
            thursday: '07:30 - 17:00',
            friday: '07:30 - 17:00',
            saturday: 'Kapalı',
            sunday: 'Kapalı'
          },
          yearEstablished: 2010,
          employeeCount: '50-100',
          certifications: ['MEB Onaylı', 'Cambridge Authorized', 'ISO 9001']
        }
      ]
    },
    'universiteler': {
      description: 'Üniversiteler ve yüksekokullar',
      companies: [
        {
          id: 'university-001',
          name: 'Gelecek Üniversitesi',
          slug: 'gelecek-universitesi',
          description: 'Gelecek Üniversitesi, 2008 yılında kurulan ve modern eğitim yaklaşımlarıyla öne çıkan bir vakıf üniversitesidir. Mühendislik, İşletme, Hukuk, Tıp ve Sosyal Bilimler fakülteleriyle kaliteli yükseköğretim hizmetleri sunmaktadır.',
          summary: 'Geleceğin liderlerini yetiştiriyoruz. Kaliteli eğitim ve araştırma imkanlarıyla akademik mükemmelliği hedefliyoruz.',
          location: 'İstanbul, Türkiye',
          rating: 4.6,
          reviewCount: 567,
          services: ['Lisans Eğitimi', 'Yüksek Lisans', 'Doktora', 'Uzaktan Eğitim', 'Araştırma Projeleri', 'Erasmus Programı', 'Staj Programı', 'Yabancı Dil Eğitimi'],
          isVerified: true,
          isEco: true,
          isFeatured: true,
          contactInfo: {
            phone: '+90 212 345 6789',
            whatsapp: '+90 532 345 6789',
            email: 'bilgi@gelecek.edu.tr',
            website: 'https://www.gelecek.edu.tr',
            address: 'Sarıyer Kampüsü, Eğitim Bulvarı No:1, Sarıyer/İstanbul'
          },
          socialMedia: {
            linkedin: 'school/gelecek-universitesi',
            twitter: 'gelecekuniv',
            instagram: 'gelecek.universitesi',
            facebook: 'gelecekuni',
            youtube: 'gelecekuni'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: [{
              title: 'Üniversite Tanıtım Filmi',
              url: 'https://www.youtube.com/watch?v=example',
              thumbnail: '/api/placeholder/600/400',
              platform: 'youtube'
            }]
          },
          businessHours: {
            monday: '08:00 - 18:00',
            tuesday: '08:00 - 18:00',
            wednesday: '08:00 - 18:00',
            thursday: '08:00 - 18:00',
            friday: '08:00 - 18:00',
            saturday: 'Etkinlik Günleri',
            sunday: 'Etkinlik Günleri'
          },
          yearEstablished: 2008,
          employeeCount: '500+',
          certifications: ['YÖK Onaylı', 'ABET Akreditasyonu', 'Erasmus Charter']
        }
      ]
    },
    'dil-kurslari': {
      description: 'İngilizce, Almanca, Fransızca dil eğitimleri',
      companies: [
        {
          id: 'language-001',
          name: 'Global Language Academy',
          slug: 'global-language-academy',
          description: 'Global Language Academy, 2011 yılında kurulan ve çok dilli eğitim veren uzman bir akademidir. İngilizce, Almanca, Fransızca, İspanyolca ve Türkçe eğitimleri ile bireysel ve kurumsal dil kursları sunmaktadır. Online ve yüz yüze eğitim seçenekleri ile esnek öğrenme imkanı sağlamaktadır.',
          summary: 'Dünyaya açılın, yeni dillerle yeni fırsatları keşfedin. Deneyimli eğitmenlerimizle hızlı ve etkili dil öğrenimi.',
          location: 'İstanbul, Türkiye',
          rating: 4.8,
          reviewCount: 456,
          services: ['İngilizce Kursu', 'Almanca Kursu', 'Fransızca Kursu', 'İspanyolca', 'Türkçe Kursu', 'Business English', 'IELTS Hazırlık', 'Online Dersler'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 212 333 4444',
            whatsapp: '+90 532 333 4444',
            email: 'info@globallanguage.com.tr',
            website: 'https://www.globallanguage.com.tr',
            address: 'Taksim Mahallesi, Dil Eğitimi Sokağı No:23, Beyoğlu/İstanbul'
          },
          socialMedia: {
            linkedin: 'company/global-language-academy',
            twitter: 'globallanguagetr',
            instagram: 'global.language.academy',
            facebook: 'globallanguageacademy',
            youtube: 'globallanguageacademy'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '08:30 - 21:00',
            tuesday: '08:30 - 21:00',
            wednesday: '08:30 - 21:00',
            thursday: '08:30 - 21:00',
            friday: '08:30 - 21:00',
            saturday: '09:00 - 18:00',
            sunday: '10:00 - 16:00'
          },
          yearEstablished: 2011,
          employeeCount: '25-50',
          certifications: ['Cambridge Authorized', 'IELTS Test Center', 'Erasmus+ Partner']
        }
      ]
    },
    'muzik-kursu': {
      description: 'Piyano, gitar, keman, ses eğitimi',
      companies: [
        {
          id: 'music-001',
          name: 'Harmony Müzik Akademisi',
          slug: 'harmony-muzik-akademisi',
          description: 'Harmony Müzik Akademisi, 2013 yılında kurulan ve müzik eğitimi alanında uzmanlaşmış bir akademidir. Piyano, gitar, keman, flüt, davul, ses eğitimi ve müzik teorisi konularında bireysel ve grup dersleri vermektedir.',
          summary: 'Müzikle yaşamınızı zenginleştirin. Profesyonel müzisyen eğitmenlerimizle müzik yolculuğunuza başlayın.',
          location: 'Ankara, Türkiye',
          rating: 4.8,
          reviewCount: 234,
          services: ['Piyano Dersi', 'Gitar Eğitimi', 'Keman Kursu', 'Ses Eğitimi', 'Davul Dersi', 'Flüt Eğitimi', 'Müzik Teorisi', 'Konser Hazırlığı'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 312 456 7890',
            whatsapp: '+90 532 456 7890',
            email: 'bilgi@harmonymuzik.com',
            website: 'https://www.harmonymuzik.com',
            address: 'Kızılay Mahallesi, Müzik Sokağı No:34, Çankaya/Ankara'
          },
          socialMedia: {
            linkedin: 'company/harmony-muzik',
            twitter: 'harmonymuzik',
            instagram: 'harmony.muzik.akademisi',
            facebook: 'harmonymuzik',
            youtube: 'harmonymuzik'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '14:00 - 21:00',
            tuesday: '14:00 - 21:00',
            wednesday: '14:00 - 21:00',
            thursday: '14:00 - 21:00',
            friday: '14:00 - 21:00',
            saturday: '09:00 - 18:00',
            sunday: '09:00 - 16:00'
          },
          yearEstablished: 2013,
          employeeCount: '10-25',
          certifications: ['Müzik Eğitmenliği Sertifikası', 'Konservatuar Diploması']
        }
      ]
    },
    'sanat-kursu': {
      description: 'Resim, heykel, seramik sanat eğitimleri',
      companies: [
        {
          id: 'art-001',
          name: 'Palette Sanat Atölyesi',
          slug: 'palette-sanat-atolyesi',
          description: 'Palette Sanat Atölyesi, 2014 yılında kurulan ve görsel sanatlar eğitimi veren yaratıcı bir atölyedir. Yağlıboya, sulu boya, akrilik, heykel, seramik ve karma teknik konularında hem yetişkinlere hem de çocuklara eğitim vermektedir.',
          summary: 'Sanatsal yanınızı keşedin. Yaratıcı atölyemizde sanatın büyülü dünyasına adım atın.',
          location: 'İzmir, Türkiye',
          rating: 4.7,
          reviewCount: 178,
          services: ['Yağlıboya', 'Sulu Boya', 'Akrilik', 'Heykel', 'Seramik', 'Çocuk Sanat Kursu', 'Portre Çizimi', 'Karma Teknik'],
          isVerified: true,
          isEco: true,
          isFeatured: true,
          contactInfo: {
            phone: '+90 232 567 8901',
            whatsapp: '+90 532 567 8901',
            email: 'bilgi@palettesanat.com',
            website: 'https://www.palettesanat.com',
            address: 'Alsancak Mahallesi, Sanat Sokağı No:56, Konak/İzmir'
          },
          socialMedia: {
            linkedin: 'company/palette-sanat',
            twitter: 'palettesanat',
            instagram: 'palette.sanat.atolyesi',
            facebook: 'palettesanat',
            youtube: 'palettesanat'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '10:00 - 20:00',
            tuesday: '10:00 - 20:00',
            wednesday: '10:00 - 20:00',
            thursday: '10:00 - 20:00',
            friday: '10:00 - 20:00',
            saturday: '10:00 - 18:00',
            sunday: '13:00 - 17:00'
          },
          yearEstablished: 2014,
          employeeCount: '5-10',
          certifications: ['Güzel Sanatlar Fakültesi Diploması', 'Sanat Eğitimi Sertifikası']
        }
      ]
    },
    'teknik-kurslar': {
      description: 'Meslek kursları, sertifika programları',
      companies: [
        {
          id: 'tech-course-001',
          name: 'TekniPro Eğitim Merkezi',
          slug: 'teknipro-egitim',
          description: 'TekniPro Eğitim Merkezi, 2017 yılında kurulan ve teknik meslek kursları sunan uzman bir eğitim kurumudur. Elektrik, tesisatcılık, klima-soğutma, kaynakcılık ve otomasyon sistemleri alanlarında sertifika programları düzenlenmektedir.',
          summary: 'Mesleki becerilerinizi geliştirin. Uzman eğitmenlerimizle teknik alanlarda kendi kendinize yeterli hale gelin.',
          location: 'Bursa, Türkiye',
          rating: 4.6,
          reviewCount: 289,
          services: ['Elektrik Kursu', 'Tesisatcılık', 'Klima Soğutma', 'Kaynakcılık', 'Otomasyon', 'CNC Eğitimi', '3D Modeling', 'Iş Güvenliği'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 224 678 9012',
            whatsapp: '+90 532 678 9012',
            email: 'bilgi@teknipro.com.tr',
            website: 'https://www.teknipro.com.tr',
            address: 'Osmangazi Mahallesi, Teknik Caddesi No:78, Osmangazi/Bursa'
          },
          socialMedia: {
            linkedin: 'company/teknipro-egitim',
            twitter: 'tekniproegitim',
            instagram: 'teknipro.egitim',
            facebook: 'tekniproegitim',
            youtube: 'tekniproegitim'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '09:00 - 17:00',
            tuesday: '09:00 - 17:00',
            wednesday: '09:00 - 17:00',
            thursday: '09:00 - 17:00',
            friday: '09:00 - 17:00',
            saturday: '09:00 - 15:00',
            sunday: 'Kapalı'
          },
          yearEstablished: 2017,
          employeeCount: '15-25',
          certifications: ['MEB Onaylı', 'Meslek Standardı Belgesi', 'IşKUR Onayları']
        }
      ]
    },
    'sinav-hazirlik': {
      description: 'YKS, ALES, KPSS, DGS hazırlık kursları',
      companies: [
        {
          id: 'exam-prep-001',
          name: 'Başarı Dershanesi',
          slug: 'basari-dershanesi',
          description: 'Başarı Dershanesi, 2006 yılından beri çeşitli sınavlara hazırlık kursları veren köklü bir eğitim kurumudur. YKS, ALES, KPSS, DGS, YDS ve diğer merkezi sınavlarda yüksek başarı oranlarına sahiptir.',
          summary: 'Hedefinize ulaşmanın yolu bizden geçer. Deneyimli öğretmenlerimizle sınav başarınızı garanti ediyoruz.',
          location: 'Ankara, Türkiye',
          rating: 4.7,
          reviewCount: 456,
          services: ['YKS Hazırlık', 'ALES Kursu', 'KPSS Eğitimi', 'DGS Hazırlık', 'YDS Kursu', 'ÖYS', 'MSU', 'Bireysel Ders'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 312 789 0123',
            whatsapp: '+90 532 789 0123',
            email: 'bilgi@basaridershanesi.com',
            website: 'https://www.basaridershanesi.com',
            address: 'Kızılay Mahallesi, Başarı Caddesi No:123, Çankaya/Ankara'
          },
          socialMedia: {
            linkedin: 'company/basari-dershanesi',
            twitter: 'basaridershanesi',
            instagram: 'basari.dershanesi',
            facebook: 'basaridershanesi',
            youtube: 'basaridershanesi'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '08:00 - 22:00',
            tuesday: '08:00 - 22:00',
            wednesday: '08:00 - 22:00',
            thursday: '08:00 - 22:00',
            friday: '08:00 - 22:00',
            saturday: '08:00 - 20:00',
            sunday: '10:00 - 18:00'
          },
          yearEstablished: 2006,
          employeeCount: '50-100',
          certifications: ['MEB Onaylı', 'Eğitim Kurumu Belgesi']
        }
      ]
    }
  },
  'kisisel-gelisim': {
    'life-coaching': {
      description: 'Yaşam koçluğu ve kişisel gelişim danışmanlığı',
      companies: [
        {
          id: 'coaching-001',
          name: 'Life Coach Akademi',
          slug: 'life-coach-akademi',
          description: 'Life Coach Akademi, 2017 yılında kurulan ve kişisel gelişim alanında uzmanlaşmış bir danışmanlık merkezidir. Sertifikalı yaşam koçları eşliğinde, bireysel ve kurumsal koçluk hizmetleri, motivasyon seminerleri ve kişisel gelişim eğitimleri sunmaktadır.',
          summary: 'Potansiyelinizi keşfedin, hedeflerinize ulaşın. Profesyonel yaşam koçlarımızla birlikte dönüşüm yolculuğunuza başlayın.',
          location: 'İstanbul, Türkiye',
          rating: 4.8,
          reviewCount: 456,
          services: ['Yaşam Koçluğu', 'Kariyer Danışmanlığı', 'Motivasyon Semineri', 'Kişisel Gelişim', 'Stres Yönetimi', 'Zaman Yönetimi', 'İletişim Becerileri', 'Online Koçluk'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 212 345 6789',
            whatsapp: '+90 532 345 6789',
            email: 'info@lifecoachakademi.com',
            website: 'https://www.lifecoachakademi.com',
            address: 'Şişli Mahallesi, Gelişim Sokağı No:12, Şişli/İstanbul'
          },
          socialMedia: {
            linkedin: 'company/life-coach-akademi',
            twitter: 'lifecoachakademi',
            instagram: 'lifecoach.akademi',
            facebook: 'lifecoachakademi',
            youtube: 'lifecoachakademi'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '09:00 - 18:00',
            tuesday: '09:00 - 18:00',
            wednesday: '09:00 - 18:00',
            thursday: '09:00 - 18:00',
            friday: '09:00 - 18:00',
            saturday: '10:00 - 16:00',
            sunday: 'Kapalı'
          },
          yearEstablished: 2017,
          employeeCount: '5-10',
          certifications: ['ICF Certified', 'NLP Practitioner', 'Life Coach Sertifikası']
        }
      ]
    },
    'kariyer-danismanligi': {
      description: 'Kariyer planlama ve iş danışmanlığı hizmetleri',
      companies: [
        {
          id: 'career-001',
          name: 'CareerBoost Danışmanlık',
          slug: 'careerboost-danismanlik',
          description: 'CareerBoost Danışmanlık, 2016 yılında kurulan ve kariyer gelişimi alanında uzmanlaşmış profesyonel bir danışmanlık şirketidir. İş arama süreçleri, CV hazırlama, mülakat teknikleri, kariyer planlama ve iş değişikliği konularında destek sağlamaktadır.',
          summary: 'Kariyerinizde sıçrama yapın. Uzman kariyer danışmanlarımızla profesyonel hedefinize ulaşın.',
          location: 'İstanbul, Türkiye',
          rating: 4.8,
          reviewCount: 234,
          services: ['Kariyer Planlama', 'CV Hazırlama', 'Mülakat Koçluğu', 'İş Arama Stratejisi', 'LinkedIn Optimizasyonu', 'Kari dyer Değişikliği', 'Yetenek Değerlendirmesi', 'Performans Koçluğu'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 212 567 8901',
            whatsapp: '+90 532 567 8901',
            email: 'info@careerboost.com.tr',
            website: 'https://www.careerboost.com.tr',
            address: 'Levent Mahallesi, Kariyer Caddesi No:45, Beşiktaş/İstanbul'
          },
          socialMedia: {
            linkedin: 'company/careerboost-danismanlik',
            twitter: 'careerboosttr',
            instagram: 'careerboost.danismanlik',
            facebook: 'careerboostdanismanlik',
            youtube: 'careerboostdanismanlik'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '09:00 - 18:00',
            tuesday: '09:00 - 18:00',
            wednesday: '09:00 - 18:00',
            thursday: '09:00 - 18:00',
            friday: '09:00 - 18:00',
            saturday: '10:00 - 16:00',
            sunday: 'Kapalı'
          },
          yearEstablished: 2016,
          employeeCount: '10-25',
          certifications: ['Kariyer Danışmanlığı Sertifikası', 'ICF Koçluk Sertifikası', 'SHRM Üyesi']
        }
      ]
    }
  },
  insaat: {
    'genel-insaat': {
      description: 'Konut, işyeri ve altyapı inşaatları',
      companies: [
        {
          id: 'construction-001',
          name: 'Mega İnşaat & Yapı',
          slug: 'mega-insaat',
          description: 'Mega İnşaat & Yapı, 2005 yılından beri faaliyet gösteren köklü bir inşaat firmasıdır. Konut projeleri, ticari binalar, fabrika yapıları ve altyapı çalışmaları konularında geniş deneyime sahiptir. Kalite, güvenlik ve zamanında teslimat prensipiyle çalışan firma, modern yapı teknolojilerini kullanmaktadır.',
          summary: 'Güvenilir temeller, kalıcı yapılar. Deneyimli ekibimiz ve modern teknolojimizle hayalinizdeki projeyi gerçeğe dönüştürüyoruz.',
          location: 'Antalya, Türkiye',
          rating: 4.6,
          reviewCount: 234,
          services: ['Konut İnşaatı', 'Ticari Bina', 'Fabrika Yapısı', 'Altyapı', 'Tadilat', 'Proje Yönetimi', 'Mimari Danışmanlık', 'İç Mekan Tasarım'],
          isVerified: true,
          isEco: true,
          isFeatured: true,
          contactInfo: {
            phone: '+90 242 567 8901',
            whatsapp: '+90 532 567 8901',
            email: 'info@megainsaat.com.tr',
            website: 'https://www.megainsaat.com.tr',
            address: 'Muratpaşa Mahallesi, İnşaat Caddesi No:78, Muratpaşa/Antalya'
          },
          socialMedia: {
            linkedin: 'company/mega-insaat',
            twitter: 'megainsaat',
            instagram: 'mega.insaat',
            facebook: 'megainsaat',
            youtube: 'megainsaat'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: [
              {
                title: 'Projelerimiz',
                url: 'https://www.youtube.com/watch?v=example7',
                thumbnail: '/api/placeholder/600/400',
                platform: 'youtube'
              }
            ]
          },
          businessHours: {
            monday: '08:00 - 17:00',
            tuesday: '08:00 - 17:00',
            wednesday: '08:00 - 17:00',
            thursday: '08:00 - 17:00',
            friday: '08:00 - 17:00',
            saturday: 'Kapalı',
            sunday: 'Kapalı'
          },
          yearEstablished: 2005,
          employeeCount: '100-250',
          certifications: ['ISO 9001', 'ISO 14001', 'OHSAS 18001', 'Yapı Denetim Yetkilisi']
        }
      ]
    },
    'tadilat-renovasyon': {
      description: 'Ev ve işyeri tadilat, renovasyon hizmetleri',
      companies: [
        {
          id: 'renovation-001',
          name: 'Yenilik Tadilat & Dekorasyon',
          slug: 'yenilik-tadilat',
          description: 'Yenilik Tadilat & Dekorasyon, 2012 yılından beri ev ve işyeri tadilat hizmetleri sunan deneyimli bir firmadır. Banyo-mutfak yenileme, boyama, döşeme, elektrik-tesisat işleri ve komple renovasyon projeleri gerçekleştirmektedir.',
          summary: 'Yaşam alanlarınızı yeniden tasarlayın. Kaliteli işçilik ve uygun fiyatlarla hayalinizdeki mekana kavuşun.',
          location: 'İzmir, Türkiye',
          rating: 4.6,
          reviewCount: 178,
          services: ['Banyo Tadilat', 'Mutfak Yenileme', 'Boyama', 'Döşeme', 'Elektrik İşleri', 'Tesisat', 'Komple Tadilat', 'Dekorasyon'],
          isVerified: true,
          isEco: true,
          isFeatured: true,
          contactInfo: {
            phone: '+90 232 666 7777',
            whatsapp: '+90 532 666 7777',
            email: 'info@yeniliktadilat.com',
            website: 'https://www.yeniliktadilat.com',
            address: 'Karşıyaka Mahallesi, Tadilat Caddesi No:45, Karşıyaka/İzmir'
          },
          socialMedia: {
            linkedin: 'company/yenilik-tadilat',
            twitter: 'yeniliktadilat',
            instagram: 'yenilik.tadilat',
            facebook: 'yeniliktadilat',
            youtube: 'yeniliktadilat'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '08:00 - 17:30',
            tuesday: '08:00 - 17:30',
            wednesday: '08:00 - 17:30',
            thursday: '08:00 - 17:30',
            friday: '08:00 - 17:30',
            saturday: '09:00 - 15:00',
            sunday: 'Kapalı'
          },
          yearEstablished: 2012,
          employeeCount: '15-25',
          certifications: ['TSE Belgeli', 'İnşaat Yüklenici Belgesi']
        }
      ]
    }
  },
  'gida-icecek': {
    'restoran-cafe': {
      description: 'Restaurant, cafe, bistro işletmeleri',
      companies: [
        {
          id: 'restaurant-001',
          name: 'Lezzet Durağı Restaurant',
          slug: 'lezzet-duragi',
          description: 'Lezzet Durağı Restaurant, 2008 yılından beri geleneksel Türk mutfağının en seçkin lezzetlerini modern sunumlarla buluşturan köklü bir lokantadır. Deneyimli şef kadrosu, taze malzemeler ve sıcak atmosferiyle unutulmaz yemek deneyimleri sunmaktadır.',
          summary: 'Geleneksel lezzetler, modern sunum. Ailenizle ve sevdiklerinizle unutulmaz yemek anları yaşayın.',
          location: 'Gaziantep, Türkiye',
          rating: 4.7,
          reviewCount: 1567,
          services: ['Türk Mutfağı', 'Kebap Çeşitleri', 'Mezeler', 'Tatlılar', 'Kahvaltı', 'Aile Menüleri', 'Catering', 'Özel Etkinlik'],
          isVerified: true,
          isEco: true,
          isFeatured: true,
          contactInfo: {
            phone: '+90 342 234 5678',
            whatsapp: '+90 532 234 5678',
            email: 'info@lezzetduragi.com',
            website: 'https://www.lezzetduragi.com',
            address: 'Şahinbey Mahallesi, Lezzet Sokağı No:25, Şahinbey/Gaziantep'
          },
          socialMedia: {
            linkedin: 'company/lezzet-duragi',
            twitter: 'lezzetduragi',
            instagram: 'lezzet.duragi.restaurant',
            facebook: 'lezzetduragirestaurant',
            youtube: 'lezzetduragi'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '11:00 - 23:00',
            tuesday: '11:00 - 23:00',
            wednesday: '11:00 - 23:00',
            thursday: '11:00 - 23:00',
            friday: '11:00 - 24:00',
            saturday: '11:00 - 24:00',
            sunday: '11:00 - 23:00'
          },
          yearEstablished: 2008,
          employeeCount: '25-50',
          certifications: ['Gıda Güvenlik Sertifikası', 'Helal Sertifikası', 'Turizm Belgesi']
        }
      ]
    },
    'catering': {
      description: 'Toplu yemek hizmetleri ve organizasyon catering',
      companies: [
        {
          id: 'catering-001',
          name: 'Royal Catering Services',
          slug: 'royal-catering',
          description: 'Royal Catering Services, 2014 yılından beri toplu yemek hizmetleri ve organizasyon catering alanında faaliyet gösteren profesyonel bir şirketdir. Düğün, kurumsal etkinlik, toplantı, körporate catering ve toplu beslenme hizmetleri sunmaktadır.',
          summary: 'Lezzet ve kalitenin buluştuğu nokta. Özel anlarınız için mükemmel catering hizmetleri.',
          location: 'İstanbul, Türkiye',
          rating: 4.7,
          reviewCount: 456,
          services: ['Düğün Catering', 'Kurumsal Catering', 'Kokteyl İkramları', 'Toplu Beslenme', 'Açık Büfe', 'Canlı Mutfak', 'Servis Ekibi', 'Ekipman Kiralama'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 212 678 9012',
            whatsapp: '+90 532 678 9012',
            email: 'rezervasyon@royalcatering.com.tr',
            website: 'https://www.royalcatering.com.tr',
            address: 'Silivri Yolu, Catering Merkezi No:234, Avcılar/İstanbul'
          },
          socialMedia: {
            linkedin: 'company/royal-catering',
            twitter: 'royalcatering',
            instagram: 'royal.catering.services',
            facebook: 'royalcateringservices',
            youtube: 'royalcatering'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '08:00 - 20:00',
            tuesday: '08:00 - 20:00',
            wednesday: '08:00 - 20:00',
            thursday: '08:00 - 20:00',
            friday: '08:00 - 20:00',
            saturday: '07:00 - 24:00',
            sunday: '07:00 - 24:00'
          },
          yearEstablished: 2014,
          employeeCount: '50-100',
          certifications: ['Gıda Güvenliği Sertifikası', 'HACCP', 'ISO 22000']
        }
      ]
    }
  },
  otomotiv: {
    'arac-satis': {
      description: 'Yeni ve ikinci el araç satışı',
      companies: [
        {
          id: 'auto-001',
          name: 'Premium Auto Gallery',
          slug: 'premium-auto-gallery',
          description: 'Premium Auto Gallery, 2014 yılından beri lüks ve premium araç satışı yapan güvenilir bir galeridiar. Yeni ve ikinci el araçlar, finansman çözümleri ve satış sonrası destek hizmetleri sunmaktadır.',
          summary: 'Hayalinizdeki araça ulaşmanın en kolay yolu. Geniş araç portföyü ve avantajlı finansman seçenekleri.',
          location: 'İstanbul, Türkiye',
          rating: 4.6,
          reviewCount: 289,
          services: ['Yeni Araç Satış', 'İkinci El Araç', 'Finansman', 'Sigorta', 'Araç Değer Tespiti', 'Takas', 'Garanti', 'Bakım Hizmetleri'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 212 555 0123',
            whatsapp: '+90 532 555 0123',
            email: 'info@premiumautogallery.com',
            website: 'https://www.premiumautogallery.com',
            address: 'Maslak Mahallesi, Otomobil Sokağı No:67, Sarıyer/İstanbul'
          },
          socialMedia: {
            linkedin: 'company/premium-auto-gallery',
            twitter: 'premiumautogallery',
            instagram: 'premium.auto.gallery',
            facebook: 'premiumautogallery',
            youtube: 'premiumautogallery'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '09:00 - 19:00',
            tuesday: '09:00 - 19:00',
            wednesday: '09:00 - 19:00',
            thursday: '09:00 - 19:00',
            friday: '09:00 - 19:00',
            saturday: '09:00 - 18:00',
            sunday: '10:00 - 17:00'
          },
          yearEstablished: 2014,
          employeeCount: '15-25',
          certifications: ['Yetkili Bayi', 'TOBB Üyesi']
        }
      ]
    },
    'arac-servis': {
      description: 'Otomobil bakım, onarım ve servis hizmetleri',
      companies: [
        {
          id: 'service-001',
          name: 'Master Car Service',
          slug: 'master-car-service',
          description: 'Master Car Service, 2009 yılından beri tüm marka araçlar için bakım, onarım ve servis hizmetleri sunan deneyimli bir oto servisidir. Uzman teknisyenleri ve modern ekipmanları ile güvenilir hizmet vermektedir.',
          summary: 'Aracınızın sağlığı bizim önceliğimiz. Profesyonel bakım ve onarım hizmetleriyle yanınızdayız.',
          location: 'Ankara, Türkiye',
          rating: 4.7,
          reviewCount: 567,
          services: ['Motor Bakımı', 'Fren Sistemi', 'Klima Servisi', 'Lastik Değişimi', 'Elektrik Arızaları', 'Şanzıman Bakımı', 'Egzoz Sistemı', 'Periyodik Bakım'],
          isVerified: true,
          isEco: true,
          isFeatured: true,
          contactInfo: {
            phone: '+90 312 777 8888',
            whatsapp: '+90 532 777 8888',
            email: 'info@mastercarservice.com',
            website: 'https://www.mastercarservice.com',
            address: 'Kızılay Mahallesi, Oto Sanayi Sitesi No:12, Çankaya/Ankara'
          },
          socialMedia: {
            linkedin: 'company/master-car-service',
            twitter: 'mastercarservice',
            instagram: 'master.car.service',
            facebook: 'mastercarservice',
            youtube: 'mastercarservice'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '08:00 - 18:00',
            tuesday: '08:00 - 18:00',
            wednesday: '08:00 - 18:00',
            thursday: '08:00 - 18:00',
            friday: '08:00 - 18:00',
            saturday: '08:00 - 17:00',
            sunday: 'Kapalı'
          },
          yearEstablished: 2009,
          employeeCount: '10-25',
          certifications: ['Mesleki Yeterlilik Belgesi', 'ISO 9001']
        }
      ]
    }
  },
  'peyzaj-bahce': {
    'peyzaj-tasarim': {
      description: 'Peyzaj mimarisi, bahçe tasarımı ve düzenleme',
      companies: [
        {
          id: 'landscape-001',
          name: 'Green Garden Design',
          slug: 'green-garden-design',
          description: 'Green Garden Design, 2011 yılından beri peyzaj mimarisi ve bahçe tasarımı alanında faaliyet gösteren uzman bir firmadır. Villa bahçeleri, kurumsal peyzaj projeleri, çatı bahçeleri ve iç mekan bitkilendirme konularında hizmet vermektedir.',
          summary: 'Doğayla uyumlu yaşam alanları yaratıyoruz. Uzman peyzaj mimarlarımızla hayalinizdeki bahçeye kavuşun.',
          location: 'İstanbul, Türkiye',
          rating: 4.8,
          reviewCount: 234,
          services: ['Peyzaj Tasarımı', 'Bahçe Düzenleme', 'Sulama Sistemleri', 'Çatı Bahçesi', 'Havuz Peyzajı', 'Bitkilendirme', 'Işıklandırma', 'Bakım Hizmetleri'],
          isVerified: true,
          isEco: true,
          isFeatured: true,
          contactInfo: {
            phone: '+90 212 456 7890',
            whatsapp: '+90 532 456 7890',
            email: 'info@greengarden.com.tr',
            website: 'https://www.greengarden.com.tr',
            address: 'Beykoz Mahallesi, Peyzaj Caddesi No:45, Beykoz/İstanbul'
          },
          socialMedia: {
            linkedin: 'company/green-garden-design',
            twitter: 'greengardentr',
            instagram: 'green.garden.design',
            facebook: 'greengardendesign',
            youtube: 'greengardendesign'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '08:00 - 17:00',
            tuesday: '08:00 - 17:00',
            wednesday: '08:00 - 17:00',
            thursday: '08:00 - 17:00',
            friday: '08:00 - 17:00',
            saturday: '08:00 - 15:00',
            sunday: 'Kapalı'
          },
          yearEstablished: 2011,
          employeeCount: '15-25',
          certifications: ['Peyzaj Mimarları Odası Üyesi', 'Organik Tarım Sertifikası']
        }
      ]
    },
    'bahcivanlik': {
      description: 'Bahçe bakımı, budama, gübreleme hizmetleri',
      companies: [
        {
          id: 'garden-001',
          name: 'Bahçıvan Plus Bakım Hizmetleri',
          slug: 'bahcivan-plus',
          description: 'Bahçıvan Plus, 2014 yılından beri profesyonel bahçe bakım hizmetleri sunan deneyimli bir firmadır. Ağaç budama, çim bakımı, gübreleme, ilaçlama ve mevsimlik bitki değişimi konularında uzmanlaşmıştır.',
          summary: 'Bahçeniz her mevsim yeşil kalsın. Profesyonel bahçıvanlık hizmetlerimizle doğal güzellik.',
          location: 'Ankara, Türkiye',
          rating: 4.6,
          reviewCount: 189,
          services: ['Çim Bakımı', 'Ağaç Budama', 'Gübreleme', 'İlaçlama', 'Mevsimlik Ekim', 'Sulama Bakımı', 'Hastalık Tedavisi', 'Peyzaj Bakımı'],
          isVerified: true,
          isEco: true,
          isFeatured: true,
          contactInfo: {
            phone: '+90 312 567 8901',
            whatsapp: '+90 532 567 8901',
            email: 'bilgi@bahcivanplus.com',
            website: 'https://www.bahcivanplus.com',
            address: 'Çankaya Mahallesi, Bahçıvanlık Sokağı No:67, Çankaya/Ankara'
          },
          socialMedia: {
            linkedin: 'company/bahcivan-plus',
            twitter: 'bahcivanplus',
            instagram: 'bahcivan.plus',
            facebook: 'bahcivanplus',
            youtube: 'bahcivanplus'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '07:00 - 17:00',
            tuesday: '07:00 - 17:00',
            wednesday: '07:00 - 17:00',
            thursday: '07:00 - 17:00',
            friday: '07:00 - 17:00',
            saturday: '07:00 - 15:00',
            sunday: 'Acil Durumlar'
          },
          yearEstablished: 2014,
          employeeCount: '10-25',
          certifications: ['Bitki Koruma Sertifikası', 'Organik Tarım Belgesi']
        }
      ]
    },
    'cicekcilik': {
      description: 'Çiçek satışı, düğün çiçeği, organizasyon çiçekleri',
      companies: [
        {
          id: 'flower-001',
          name: 'Bloom Çiçekçilik',
          slug: 'bloom-cicekcilik',
          description: 'Bloom Çiçekçilik, 2009 yılından beri taze çiçek satışı ve çiçek düzenleme hizmetleri sunan köklü bir çiçekçidir. Düğün çiçekleri, organizasyon çiçekleri, cenaze çelenkleri ve günlük çiçek ihtiyaçlarınızda hizmet vermektedir.',
          summary: 'Hayatın her anında çiçeklerle yanınızdayız. Taze çiçekler ve özel düzenlemelerle duygularınızı ifade edin.',
          location: 'İzmir, Türkiye',
          rating: 4.7,
          reviewCount: 345,
          services: ['Gül Buketi', 'Düğün Çiçeği', 'Organizasyon Çiçeği', 'Cenaze Çelengi', 'Doğum Günü Çiçeği', 'Sevgililer Günü', 'İç Mekan Bitkileri', 'Çiçek Bakımı'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 232 678 9012',
            whatsapp: '+90 532 678 9012',
            email: 'siparis@bloomcicek.com',
            website: 'https://www.bloomcicek.com',
            address: 'Konak Mahallesi, Çiçek Pazarı No:23, Konak/İzmir'
          },
          socialMedia: {
            linkedin: 'company/bloom-cicekcilik',
            twitter: 'bloomcicekcilik',
            instagram: 'bloom.cicekcilik',
            facebook: 'bloomcicekcilik',
            youtube: 'bloomcicekcilik'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '08:00 - 20:00',
            tuesday: '08:00 - 20:00',
            wednesday: '08:00 - 20:00',
            thursday: '08:00 - 20:00',
            friday: '08:00 - 20:00',
            saturday: '08:00 - 19:00',
            sunday: '09:00 - 18:00'
          },
          yearEstablished: 2009,
          employeeCount: '5-10',
          certifications: ['Çiçekçilik Meslek Sertifikası', 'Floriculture Certificate']
        }
      ]
    }
  },
  'finans': {
    'bankalar': {
      description: 'Mevduat bankaları, yatırım bankaları, özel bankacılık',
      companies: [
        {
          id: 'bank-001',
          name: 'Türkiye Finans Bankası',
          slug: 'turkiye-finans-bankasi',
          description: 'Türkiye Finans Bankası, 1983 yılından beri faaliyet gösteren köklü bir özel bankaadır. Bireysel bankacılık, kurumsal bankacılık, yatırım danışmanlığı ve dijital bankacılık hizmetleri sunmaktadır.',
          summary: 'Güvenilir bankacılık çözümleriyle finansal hedeflerinize ulaşın. Modern banking teknolojileri ile hizmetinizdeyiz.',
          location: 'İstanbul, Türkiye',
          rating: 4.5,
          reviewCount: 1234,
          services: ['Bireysel Bankacılık', 'Kurumsal Bankacılık', 'Yatırım Danışmanlığı', 'Kredi Kartları', 'Konut Kredisi', 'İhtiyaç Kredisi', 'Dijital Bankacılık', 'Döviz İşlemleri'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 212 345 0000',
            whatsapp: '+90 532 345 0000',
            email: 'info@turkiyefinans.com.tr',
            website: 'https://www.turkiyefinans.com.tr',
            address: 'Levent Plaza, Finansal Merkez No:1, Beşiktaş/İstanbul'
          },
          socialMedia: {
            linkedin: 'company/turkiye-finans-bankasi',
            twitter: 'turkiyefinans',
            instagram: 'turkiyefinans',
            facebook: 'turkiyefinans',
            youtube: 'turkiyefinans'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '09:00 - 17:00',
            tuesday: '09:00 - 17:00',
            wednesday: '09:00 - 17:00',
            thursday: '09:00 - 17:00',
            friday: '09:00 - 17:00',
            saturday: 'ATM Hizmeti',
            sunday: 'ATM Hizmeti'
          },
          yearEstablished: 1983,
          employeeCount: '1000+',
          certifications: ['BDDK Lisansı', 'ISO 27001', 'PCI DSS']
        }
      ]
    },
    'yatirim-danismanligi': {
      description: 'Yatırım danışmanlığı, portföy yönetimi, varlık yönetimi',
      companies: [
        {
          id: 'investment-001',
          name: 'Capital Investment Advisory',
          slug: 'capital-investment-advisory',
          description: 'Capital Investment Advisory, 2008 yılında kurulan ve yatırım danışmanlığı alanında uzmanlaşmış bir finansal hizmetler şirketidir. Portföy yönetimi, risk analizi ve yatırım stratejileri konularında hizmet vermektedir.',
          summary: 'Yatırımlarınızı profesyonel ellerde güvenceye alın. Uzman ekibimizle finansal geleceğinizi planlayın.',
          location: 'İstanbul, Türkiye',
          rating: 4.7,
          reviewCount: 456,
          services: ['Portföy Yönetimi', 'Risk Analizi', 'Yatırım Stratejisi', 'Emeklilik Planlaması', 'Vergi Planlaması', 'Finansal Planlama', 'Sermaye Piyasası', 'Alternatif Yatırımlar'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 212 567 8900',
            whatsapp: '+90 532 567 8900',
            email: 'info@capitalinvestment.com.tr',
            website: 'https://www.capitalinvestment.com.tr',
            address: 'Maslak Mahallesi, Yatırım Sokağı No:34, Sarıyer/İstanbul'
          },
          socialMedia: {
            linkedin: 'company/capital-investment',
            twitter: 'capitalinvest',
            instagram: 'capital.investment',
            facebook: 'capitalinvestment',
            youtube: 'capitalinvestment'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
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
          yearEstablished: 2008,
          employeeCount: '25-50',
          certifications: ['SPK Lisansı', 'CFA Institute', 'Yatırım Danışmanlığı Lisansı']
        }
      ]
    },
    'kredi-finans': {
      description: 'Kredi aracıları, finansman şirketleri, factoring',
      companies: [
        {
          id: 'credit-001',
          name: 'Express Kredi ve Finans',
          slug: 'express-kredi-finans',
          description: 'Express Kredi ve Finans, 2012 yılından beri bireysel ve kurumsal krediler konusunda aracılık hizmetleri sunan bir finansal hizmetler şirketidir. Hızlı kredi onayları ve uygun faiz oranları ile müşterilerine hizmet vermektedir.',
          summary: 'Finansal ihtiyaçlarınız için hızlı ve güvenilir çözümler. En uygun kredi seçenekleri bizde.',
          location: 'Ankara, Türkiye',
          rating: 4.4,
          reviewCount: 289,
          services: ['İhtiyaç Kredisi', 'Konut Kredisi', 'Taşıt Kredisi', 'Ticari Kredi', 'KOBİ Kredisi', 'Factoring', 'Leasing', 'Kredi Kartı'],
          isVerified: true,
          isEco: false,
          isFeatured: false,
          contactInfo: {
            phone: '+90 312 456 7890',
            whatsapp: '+90 532 456 7890',
            email: 'bilgi@expresskredi.com.tr',
            website: 'https://www.expresskredi.com.tr',
            address: 'Kızılay Mahallesi, Kredi Caddesi No:78, Çankaya/Ankara'
          },
          socialMedia: {
            linkedin: 'company/express-kredi',
            twitter: 'expresskredi',
            instagram: 'express.kredi',
            facebook: 'expresskredi',
            youtube: 'expresskredi'
          },
          gallery: {
            photos: ['/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '09:00 - 18:00',
            tuesday: '09:00 - 18:00',
            wednesday: '09:00 - 18:00',
            thursday: '09:00 - 18:00',
            friday: '09:00 - 18:00',
            saturday: '10:00 - 16:00',
            sunday: 'Kapalı'
          },
          yearEstablished: 2012,
          employeeCount: '15-25',
          certifications: ['BDDK Aracı Kurumu', 'Kredi Aracılığı Belgesi']
        }
      ]
    }
  },
  'gayrimenkul': {
    'emlak-danismanligi': {
      description: 'Emlak alım-satım, kiralama, değerleme hizmetleri',
      companies: [
        {
          id: 'real-estate-001',
          name: 'Premium Emlak Danışmanlık',
          slug: 'premium-emlak-danismanlik',
          description: 'Premium Emlak Danışmanlık, 2010 yılından beri emlak sektöründe faaliyet gösteren güvenilir bir danışmanlık firmasıdır. Konut, iş yeri, arsa alım-satımı ve kiralama işlemlerinde uzmanlaşmıştır.',
          summary: 'Hayalinizdeki eve kavuşmanın en kolay yolu. Profesyonel emlak danışmanlığı ile güvenli alışveriş.',
          location: 'İstanbul, Türkiye',
          rating: 4.6,
          reviewCount: 567,
          services: ['Konut Satışı', 'İş Yeri Satışı', 'Kiralama', 'Emlak Değerleme', 'Yatırım Danışmanlığı', 'Mortgage Aracılığı', 'Hukuki Destek', 'Emlak Yönetimi'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 212 789 0123',
            whatsapp: '+90 532 789 0123',
            email: 'info@premiumemlak.com.tr',
            website: 'https://www.premiumemlak.com.tr',
            address: 'Etiler Mahallesi, Emlak Plaza No:56, Beşiktaş/İstanbul'
          },
          socialMedia: {
            linkedin: 'company/premium-emlak',
            twitter: 'premiumemlak',
            instagram: 'premium.emlak',
            facebook: 'premiumemlak',
            youtube: 'premiumemlak'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '09:00 - 19:00',
            tuesday: '09:00 - 19:00',
            wednesday: '09:00 - 19:00',
            thursday: '09:00 - 19:00',
            friday: '09:00 - 19:00',
            saturday: '10:00 - 18:00',
            sunday: '10:00 - 17:00'
          },
          yearEstablished: 2010,
          employeeCount: '50-100',
          certifications: ['Emlak Eksperliği Sertifikası', 'Gayrimenkul Değerleme Lisansı']
        }
      ]
    },
    'insaat-gelistirme': {
      description: 'İnşaat geliştirme, proje yönetimi, müteahhitlik',
      companies: [
        {
          id: 'construction-dev-001',
          name: 'Skyline İnşaat ve Geliştirme',
          slug: 'skyline-insaat-gelistirme',
          description: 'Skyline İnşaat ve Geliştirme, 2005 yılından beri konut ve ticari proje geliştirme alanında faaliyet gösteren köklü bir inşaat firmasıdır. Modern mimari tasarım ve kaliteli işçilik anlayışıyla projeler gerçekleştirmektedir.',
          summary: 'Modern yaşamın adresi. Kaliteli inşaat projeleri ve sürdürülebilir geliştirme yaklaşımı.',
          location: 'Ankara, Türkiye',
          rating: 4.5,
          reviewCount: 234,
          services: ['Konut Projeleri', 'Ticari Projeler', 'Proje Yönetimi', 'Müteahhitlik', 'Mimari Tasarım', 'İç Mimari', 'Tadilat', 'Danışmanlık'],
          isVerified: true,
          isEco: true,
          isFeatured: true,
          contactInfo: {
            phone: '+90 312 890 1234',
            whatsapp: '+90 532 890 1234',
            email: 'info@skylineinsaat.com.tr',
            website: 'https://www.skylineinsaat.com.tr',
            address: 'Söğütözü Mahallesi, İnşaat Caddesi No:123, Çankaya/Ankara'
          },
          socialMedia: {
            linkedin: 'company/skyline-insaat',
            twitter: 'skylineinsaat',
            instagram: 'skyline.insaat',
            facebook: 'skylineinsaat',
            youtube: 'skylineinsaat'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '08:00 - 18:00',
            tuesday: '08:00 - 18:00',
            wednesday: '08:00 - 18:00',
            thursday: '08:00 - 18:00',
            friday: '08:00 - 18:00',
            saturday: '09:00 - 17:00',
            sunday: 'Kapalı'
          },
          yearEstablished: 2005,
          employeeCount: '100-250',
          certifications: ['İnşaat Mühendisleri Odası', 'Mimarlar Odası', 'ISO 9001']
        }
      ]
    }
  },
  'hukuk': {
    'hukuk-burosu': {
      description: 'Avukatlık büroları, hukuki danışmanlık hizmetleri',
      companies: [
        {
          id: 'law-001',
          name: 'Adalete Hukuk Bürosu',
          slug: 'adalete-hukuk-burosu',
          description: 'Adalete Hukuk Bürosu, 2007 yılından beri hukuki danışmanlık ve avukatlık hizmetleri sunan deneyimli bir hukuk firmasıdır. Medeni hukuk, ticaret hukuku, ceza hukuku ve iş hukuku alanlarında uzmanlaşmıştır.',
          summary: 'Hukuki haklarınızı koruyun. Deneyimli avukat kadromuzla adaletin yanınızdayız.',
          location: 'İstanbul, Türkiye',
          rating: 4.8,
          reviewCount: 342,
          services: ['Medeni Hukuk', 'Ticaret Hukuku', 'Ceza Hukuku', 'İş Hukuku', 'Aile Hukuku', 'İcra Hukuku', 'Emlak Hukuku', 'Hukuki Danışmanlık'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 212 456 7890',
            whatsapp: '+90 532 456 7890',
            email: 'info@adaletehukuk.com.tr',
            website: 'https://www.adaletehukuk.com.tr',
            address: 'Beşiktaş Mahallesi, Adalet Sokağı No:45, Beşiktaş/İstanbul'
          },
          socialMedia: {
            linkedin: 'company/adalete-hukuk',
            twitter: 'adaletehukuk',
            instagram: 'adalete.hukuk',
            facebook: 'adaletehukuk',
            youtube: 'adaletehukuk'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '09:00 - 18:00',
            tuesday: '09:00 - 18:00',
            wednesday: '09:00 - 18:00',
            thursday: '09:00 - 18:00',
            friday: '09:00 - 18:00',
            saturday: '10:00 - 16:00',
            sunday: 'Kapalı'
          },
          yearEstablished: 2007,
          employeeCount: '15-25',
          certifications: ['İstanbul Barosu Üyesi', 'Hukuk Fakültesi Mezunu']
        }
      ]
    }
  },
  'turizm': {
    'otel-konaklama': {
      description: 'Oteller, pensiyonlar, apart daireler, tatil köyleri',
      companies: [
        {
          id: 'hotel-001',
          name: 'Grand Palace Hotel & Spa',
          slug: 'grand-palace-hotel-spa',
          description: 'Grand Palace Hotel & Spa, 2001 yılından beri misafirlerine 5 yıldızlı lüks konaklama hizmeti sunan premium bir oteldir. Spa, wellness, iş toplantıları ve özel etkinlikler için ideal bir destinasyondur.',
          summary: 'Lüksün ve konforun buluştuğu nokta. Unutulmaz konaklama deneyimi için doğru adres.',
          location: 'Antalya, Türkiye',
          rating: 4.9,
          reviewCount: 1456,
          services: ['Lüks Konaklama', 'Spa & Wellness', 'Restaurantlar', 'Toplantı Salonları', 'Havuz', 'Fitness Center', 'Concierge', 'Transfer Hizmeti'],
          isVerified: true,
          isEco: true,
          isFeatured: true,
          contactInfo: {
            phone: '+90 242 123 4567',
            whatsapp: '+90 532 123 4567',
            email: 'rezervasyon@grandpalace.com.tr',
            website: 'https://www.grandpalace.com.tr',
            address: 'Lara Sahili, Luxury Hotels Bulvarı No:1, Muratpaşa/Antalya'
          },
          socialMedia: {
            linkedin: 'company/grand-palace-hotel',
            twitter: 'grandpalacehotel',
            instagram: 'grand.palace.hotel',
            facebook: 'grandpalacehotel',
            youtube: 'grandpalacehotel'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '24 Saat',
            tuesday: '24 Saat',
            wednesday: '24 Saat',
            thursday: '24 Saat',
            friday: '24 Saat',
            saturday: '24 Saat',
            sunday: '24 Saat'
          },
          yearEstablished: 2001,
          employeeCount: '250+',
          certifications: ['Turizm Belgeli', 'Çevre Dostu Otel', 'ISO 14001']
        }
      ]
    },
    'seyahat-acentesi': {
      description: 'Tur operatörleri, seyahat acenteleri, rehberlik hizmetleri',
      companies: [
        {
          id: 'travel-001',
          name: 'Discover Turkey Travel',
          slug: 'discover-turkey-travel',
          description: 'Discover Turkey Travel, 2010 yılından beri yerel ve uluslararası turlar düzenleyen profesyonel bir seyahat acentesidir. Kültür turları, doğa yürüyüşleri, özel tur organizasyonları ve vize hizmetleri sunmaktadır.',
          summary: 'Dünyayı keşfetmenin en güzel yolu. Unutulmaz seyahat deneyimleri için güvenilir partneriniz.',
          location: 'İstanbul, Türkiye',
          rating: 4.7,
          reviewCount: 678,
          services: ['Yurt İçi Turlar', 'Yurt Dışı Turlar', 'Otel Rezervasyonu', 'Uçak Bileti', 'Vize İşlemleri', 'Rehberlik', 'Transfer', 'Sigorta'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 212 345 6789',
            whatsapp: '+90 532 345 6789',
            email: 'info@discoverturkey.com.tr',
            website: 'https://www.discoverturkey.com.tr',
            address: 'Taksim Mahallesi, Seyahat Caddesi No:89, Beyoğlu/İstanbul'
          },
          socialMedia: {
            linkedin: 'company/discover-turkey-travel',
            twitter: 'discoverturkeytr',
            instagram: 'discover.turkey.travel',
            facebook: 'discovertrkeytravel',
            youtube: 'discoverturkeytravel'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '09:00 - 19:00',
            tuesday: '09:00 - 19:00',
            wednesday: '09:00 - 19:00',
            thursday: '09:00 - 19:00',
            friday: '09:00 - 19:00',
            saturday: '10:00 - 18:00',
            sunday: '11:00 - 17:00'
          },
          yearEstablished: 2010,
          employeeCount: '25-50',
          certifications: ['TÜRSAB Üyesi', 'IATA Üyesi', 'Turizm Acentesi Belgesi']
        }
      ]
    }
  },
  'muhasebe-vergi': {
    'muhasebe-burosu': {
      description: 'Muhasebe büroları, mali müşavirlik, vergi danışmanlığı',
      companies: [
        {
          id: 'accounting-001',
          name: 'Güven Muhasebe ve Mali Müşavirlik',
          slug: 'guven-muhasebe-mali-musavirlik',
          description: 'Güven Muhasebe, 1998 yılından beri muhasebe ve mali müşavirlik hizmetleri sunan köklü bir firmadır. KOBİ\'ler ve şahıs şirketleri için kapsamlı mali hizmetler sunmaktadır.',
          summary: 'Mali işlerinizi güvenle bırakın. 25+ yıllık tecrübemizle işinizi büyütün.',
          location: 'İstanbul, Türkiye',
          rating: 4.7,
          reviewCount: 234,
          services: ['Defter Tutma', 'Vergi Beyannameleri', 'SGK İşlemleri', 'Bordro', 'Mali Müşavirlik', 'Vergi Planlaması', 'Şirket Kuruluşu', 'Denetim'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 212 345 6789',
            whatsapp: '+90 532 345 6789',
            email: 'info@guvenmuhasebe.com.tr',
            website: 'https://www.guvenmuhasebe.com.tr',
            address: 'Şişli Mahallesi, Muhasebe Sokağı No:12, Şişli/İstanbul'
          },
          socialMedia: {
            linkedin: 'company/guven-muhasebe',
            twitter: 'guvenmuhasebe',
            instagram: 'guven.muhasebe',
            facebook: 'guvenmuhasebe'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
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
          yearEstablished: 1998,
          employeeCount: '15-25',
          certifications: ['TÜRMOB Üyesi', 'Mali Müşavir Ruhsatı']
        }
      ]
    }
  },
  'guvenlik-temizlik': {
    'guvenlik-hizmetleri': {
      description: 'Özel güvenlik, güvenlik kameraları, alarm sistemleri',
      companies: [
        {
          id: 'security-001',
          name: 'Secure Pro Güvenlik Hizmetleri',
          slug: 'secure-pro-guvenlik',
          description: 'Secure Pro, 2005 yılından beri özel güvenlik ve teknoloji çözümleri sunan lider bir firmadır. Kamera sistemleri, alarm teknolojileri ve personel güvenlik hizmetlerinde uzmanlaşmıştır.',
          summary: 'Güvenliğiniz bizim önceliğimiz. Modern teknoloji ile 7/24 koruma.',
          location: 'Ankara, Türkiye',
          rating: 4.6,
          reviewCount: 189,
          services: ['Özel Güvenlik', 'CCTV Sistemleri', 'Alarm Sistemleri', 'Kapıcı Hizmeti', 'Etkinlik Güvenliği', 'VIP Koruma', 'Güvenlik Danışmanlığı', 'Acil Müdahale'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 312 456 7890',
            whatsapp: '+90 532 456 7890',
            email: 'info@securepro.com.tr',
            website: 'https://www.securepro.com.tr',
            address: 'Çankaya Mahallesi, Güvenlik Caddesi No:45, Çankaya/Ankara'
          },
          socialMedia: {
            linkedin: 'company/secure-pro',
            twitter: 'secureprotr',
            instagram: 'secure.pro',
            facebook: 'securepro'
          },
          gallery: {
            photos: ['/api/placeholder/600/400', '/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '24 Saat',
            tuesday: '24 Saat', 
            wednesday: '24 Saat',
            thursday: '24 Saat',
            friday: '24 Saat',
            saturday: '24 Saat',
            sunday: '24 Saat'
          },
          yearEstablished: 2005,
          employeeCount: '100-250',
          certifications: ['EGM Özel Güvenlik Lisansı', 'ISO 27001']
        }
      ]
    },
    'temizlik-hizmetleri': {
      description: 'Ev temizliği, ofis temizliği, endüstriyel temizlik',
      companies: [
        {
          id: 'cleaning-001',
          name: 'CleanMax Temizlik Hizmetleri',
          slug: 'cleanmax-temizlik',
          description: 'CleanMax, 2010 yılından beri ev, ofis ve endüstriyel temizlik hizmetleri sunan profesyonel bir firmadır. Çevre dostu ürünler ve deneyimli ekibi ile kaliteli hizmet vermektedir.',
          summary: 'Temizlik işlerinizi profesyonellere bırakın. Hijyen ve kalite garantisi.',
          location: 'İzmir, Türkiye',
          rating: 4.5,
          reviewCount: 345,
          services: ['Ev Temizliği', 'Ofis Temizliği', 'Cam Temizliği', 'Halı Yıkama', 'Derin Temizlik', 'Dezenfeksiyon', 'Bahçe Bakımı', 'Temizlik Malzemesi'],
          isVerified: true,
          isEco: true,
          isFeatured: false,
          contactInfo: {
            phone: '+90 232 567 8901',
            whatsapp: '+90 532 567 8901',
            email: 'info@cleanmax.com.tr',
            website: 'https://www.cleanmax.com.tr',
            address: 'Bornova Mahallesi, Temizlik Sokağı No:67, Bornova/İzmir'
          },
          socialMedia: {
            linkedin: 'company/cleanmax',
            twitter: 'cleanmaxtr',
            instagram: 'cleanmax.temizlik',
            facebook: 'cleanmax'
          },
          gallery: {
            photos: ['/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '08:00 - 18:00',
            tuesday: '08:00 - 18:00',
            wednesday: '08:00 - 18:00', 
            thursday: '08:00 - 18:00',
            friday: '08:00 - 18:00',
            saturday: '09:00 - 17:00',
            sunday: 'Kapalı'
          },
          yearEstablished: 2010,
          employeeCount: '50-100',
          certifications: ['Temizlik Hizmetleri Belgesi', 'Çevre Dostu Sertifika']
        }
      ]
    }
  },
  'perakende': {
    'market-gida': {
      description: 'Süpermarketler, gıda mağazaları, bakkallar',
      companies: [
        {
          id: 'market-001',
          name: 'Fresh Market',
          slug: 'fresh-market',
          description: 'Fresh Market, 2010 yılından beri taze ve kaliteli gıda ürünleri sunan bir süpermarket zinciridir.',
          summary: 'Taze ürünlerle sağlıklı yaşam. Ailenizin ihtiyacı olan her şey tek çatı altında.',
          location: 'İstanbul, Türkiye',
          rating: 4.3,
          reviewCount: 567,
          services: ['Süpermarket', 'Taze Meyve-Sebze', 'Et-Tavuk', 'Şarküteri', 'Fırın', 'Ev Teslim', 'Online Alışveriş', '24 Saat Hizmet'],
          isVerified: true,
          isEco: false,
          isFeatured: false,
          contactInfo: {
            phone: '+90 212 123 4567',
            whatsapp: '+90 532 123 4567',
            email: 'info@freshmarket.com.tr',
            website: 'https://www.freshmarket.com.tr',
            address: 'Mecidiyeköy Mahallesi, Market Caddesi No:12, Şişli/İstanbul'
          },
          socialMedia: {
            instagram: 'fresh.market',
            facebook: 'freshmarket'
          },
          gallery: {
            photos: ['/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '07:00 - 23:00',
            tuesday: '07:00 - 23:00',
            wednesday: '07:00 - 23:00',
            thursday: '07:00 - 23:00',
            friday: '07:00 - 23:00',
            saturday: '07:00 - 23:00',
            sunday: '08:00 - 22:00'
          },
          yearEstablished: 2010,
          employeeCount: '100-250',
          certifications: ['Gıda Güvenliği', 'ISO 22000']
        }
      ]
    }
  },
  'sigorta': {
    'sigorta-acentesi': {
      description: 'Sigorta acenteleri, kasko, hayat sigortası, sağlık sigortası',
      companies: [
        {
          id: 'insurance-001',
          name: 'Güven Sigorta Acentesi',
          slug: 'guven-sigorta-acentesi',
          description: 'Güven Sigorta, 2008 yılından beri tüm sigorta türlerinde hizmet veren deneyimli bir acentedir.',
          summary: 'Geleceğinizi güvenceye alın. Her türlü sigorta ihtiyacınız için tek adres.',
          location: 'Ankara, Türkiye',
          rating: 4.6,
          reviewCount: 234,
          services: ['Kasko', 'Trafik Sigortası', 'Hayat Sigortası', 'Sağlık Sigortası', 'Konut Sigortası', 'İşyeri Sigortası', 'Seyahat Sigortası', 'Hasar Takip'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 312 234 5678',
            whatsapp: '+90 532 234 5678',
            email: 'info@guvensigorta.com.tr',
            website: 'https://www.guvensigorta.com.tr',
            address: 'Kızılay Mahallesi, Sigorta Sokağı No:34, Çankaya/Ankara'
          },
          socialMedia: {
            linkedin: 'company/guven-sigorta',
            facebook: 'guvensigorta'
          },
          gallery: {
            photos: ['/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '09:00 - 18:00',
            tuesday: '09:00 - 18:00',
            wednesday: '09:00 - 18:00',
            thursday: '09:00 - 18:00',
            friday: '09:00 - 18:00',
            saturday: '10:00 - 16:00',
            sunday: 'Kapalı'
          },
          yearEstablished: 2008,
          employeeCount: '15-25',
          certifications: ['Sigorta Acenteliği Belgesi']
        }
      ]
    }
  },
  'teknisyen-tamir': {
    'elektronik-tamir': {
      description: 'Telefon tamiri, bilgisayar tamiri, beyaz eşya servisi',
      companies: [
        {
          id: 'repair-001',
          name: 'TeknoFix Tamir Servisi',
          slug: 'teknofix-tamir',
          description: 'TeknoFix, 2015 yılından beri elektronik cihaz tamiri konusunda uzman bir servis merkezidir.',
          summary: 'Cihazlarınız güvenli ellerde. Hızlı ve kaliteli tamir hizmeti.',
          location: 'İzmir, Türkiye',
          rating: 4.5,
          reviewCount: 345,
          services: ['Telefon Tamiri', 'Bilgisayar Tamiri', 'Tablet Tamiri', 'Beyaz Eşya Servisi', 'TV Tamiri', 'Konsol Tamiri', 'Veri Kurtarma', 'Garanti Hizmeti'],
          isVerified: true,
          isEco: false,
          isFeatured: false,
          contactInfo: {
            phone: '+90 232 345 6789',
            whatsapp: '+90 532 345 6789',
            email: 'info@teknofix.com.tr',
            website: 'https://www.teknofix.com.tr',
            address: 'Alsancak Mahallesi, Tamir Sokağı No:23, Konak/İzmir'
          },
          socialMedia: {
            instagram: 'tekno.fix',
            facebook: 'teknofix'
          },
          gallery: {
            photos: ['/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '09:00 - 19:00',
            tuesday: '09:00 - 19:00',
            wednesday: '09:00 - 19:00',
            thursday: '09:00 - 19:00',
            friday: '09:00 - 19:00',
            saturday: '10:00 - 18:00',
            sunday: 'Kapalı'
          },
          yearEstablished: 2015,
          employeeCount: '10-25',
          certifications: ['Teknik Servis Belgesi']
        }
      ]
    }
  },
  'pet-hayvan': {
    'veteriner-klinik': {
      description: 'Veteriner klinikleri, pet shop, hayvan bakım hizmetleri',
      companies: [
        {
          id: 'vet-001',
          name: 'Happy Pets Veteriner Kliniği',
          slug: 'happy-pets-veteriner',
          description: 'Happy Pets, 2012 yılından beri evcil hayvanların sağlığı için hizmet veren modern bir veteriner kliniğidir.',
          summary: 'Dostlarınızın sağlığı bizim önceliğimiz. Sevgi dolu bakım garantisi.',
          location: 'İstanbul, Türkiye',
          rating: 4.8,
          reviewCount: 456,
          services: ['Veteriner Muayene', 'Aşılama', 'Cerrahi', 'Diş Bakımı', 'Pet Shop', 'Grooming', 'Pet Hotel', '7/24 Acil Servis'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 212 456 7890',
            whatsapp: '+90 532 456 7890',
            email: 'info@happypets.com.tr',
            website: 'https://www.happypets.com.tr',
            address: 'Etiler Mahallesi, Pet Sokağı No:45, Beşiktaş/İstanbul'
          },
          socialMedia: {
            instagram: 'happy.pets.vet',
            facebook: 'happypetsvet'
          },
          gallery: {
            photos: ['/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '09:00 - 19:00',
            tuesday: '09:00 - 19:00',
            wednesday: '09:00 - 19:00',
            thursday: '09:00 - 19:00',
            friday: '09:00 - 19:00',
            saturday: '10:00 - 18:00',
            sunday: '10:00 - 16:00'
          },
          yearEstablished: 2012,
          employeeCount: '15-25',
          certifications: ['Veteriner Hekim Odası']
        }
      ]
    }
  },
  'ev-yasam': {
    'ev-dekorasyon': {
      description: 'Ev dekorasyonu, mobilya, ev tekstili',
      companies: [
        {
          id: 'deco-001',
          name: 'Style Home Dekorasyon',
          slug: 'style-home-dekorasyon',
          description: 'Style Home, 2014 yılından beri ev dekorasyonu ve mobilya alanında hizmet veren bir firmadır.',
          summary: 'Evinizi hayalinizdeki gibi dekore edin. Şık ve fonksiyonel çözümler.',
          location: 'Bursa, Türkiye',
          rating: 4.4,
          reviewCount: 189,
          services: ['İç Dekorasyon', 'Mobilya', 'Perde', 'Halı', 'Aydınlatma', 'Duvar Kağıdı', 'Dekoratif Aksesuar', 'Proje Hizmeti'],
          isVerified: true,
          isEco: false,
          isFeatured: false,
          contactInfo: {
            phone: '+90 224 567 8901',
            whatsapp: '+90 532 567 8901',
            email: 'info@stylehome.com.tr',
            website: 'https://www.stylehome.com.tr',
            address: 'Osmangazi Mahallesi, Dekorasyon Caddesi No:67, Osmangazi/Bursa'
          },
          socialMedia: {
            instagram: 'style.home.deko',
            facebook: 'stylehome'
          },
          gallery: {
            photos: ['/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '10:00 - 19:00',
            tuesday: '10:00 - 19:00',
            wednesday: '10:00 - 19:00',
            thursday: '10:00 - 19:00',
            friday: '10:00 - 19:00',
            saturday: '10:00 - 18:00',
            sunday: '12:00 - 17:00'
          },
          yearEstablished: 2014,
          employeeCount: '25-50',
          certifications: ['İç Mimar Odası']
        }
      ]
    }
  },
  'ulasim-lojistik': {
    'nakliye-tasima': {
      description: 'Nakliye, taşımacılık, kargo hizmetleri',
      companies: [
        {
          id: 'logistics-001',
          name: 'Express Lojistik',
          slug: 'express-lojistik',
          description: 'Express Lojistik, 2009 yılından beri nakliye ve lojistik hizmetleri sunan güvenilir bir firmadır.',
          summary: 'Eşyalarınız güvenli ellerde. Hızlı ve ekonomik taşımacılık.',
          location: 'İstanbul, Türkiye',
          rating: 4.5,
          reviewCount: 278,
          services: ['Ev Taşıma', 'Ofis Taşıma', 'Kargo', 'Depolama', 'Sigortalı Taşıma', 'Paketleme', 'Montaj-Demontaj', 'Şehirlerarası Taşıma'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 212 678 9012',
            whatsapp: '+90 532 678 9012',
            email: 'info@expresslojistik.com.tr',
            website: 'https://www.expresslojistik.com.tr',
            address: 'Pendik Mahallesi, Lojistik Caddesi No:89, Pendik/İstanbul'
          },
          socialMedia: {
            instagram: 'express.lojistik',
            facebook: 'expresslojistik'
          },
          gallery: {
            photos: ['/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '08:00 - 18:00',
            tuesday: '08:00 - 18:00',
            wednesday: '08:00 - 18:00',
            thursday: '08:00 - 18:00',
            friday: '08:00 - 18:00',
            saturday: '09:00 - 17:00',
            sunday: 'Acil Hizmet'
          },
          yearEstablished: 2009,
          employeeCount: '50-100',
          certifications: ['Taşıyıcı Belgesi', 'ISO 9001']
        }
      ]
    }
  },
  'moda-tekstil': {
    'giyim-magaza': {
      description: 'Giyim mağazaları, butik, moda tasarım',
      companies: [
        {
          id: 'fashion-001',
          name: 'Trendy Fashion Boutique',
          slug: 'trendy-fashion-boutique',
          description: 'Trendy Fashion, 2016 yılından beri modern ve şık giyim ürünleri sunan bir butiktir.',
          summary: 'Stilinizi yansıtın. En son moda trendleri ve kaliteli kumaşlar.',
          location: 'İzmir, Türkiye',
          rating: 4.3,
          reviewCount: 167,
          services: ['Kadın Giyim', 'Erkek Giyim', 'Aksesuar', 'Ayakkabı', 'Çanta', 'Özel Tasarım', 'Stil Danışmanlığı', 'Online Alışveriş'],
          isVerified: true,
          isEco: false,
          isFeatured: false,
          contactInfo: {
            phone: '+90 232 789 0123',
            whatsapp: '+90 532 789 0123',
            email: 'info@trendyfashion.com.tr',
            website: 'https://www.trendyfashion.com.tr',
            address: 'Alsancak Mahallesi, Moda Sokağı No:34, Konak/İzmir'
          },
          socialMedia: {
            instagram: 'trendy.fashion.boutique',
            facebook: 'trendyfashion'
          },
          gallery: {
            photos: ['/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '10:00 - 20:00',
            tuesday: '10:00 - 20:00',
            wednesday: '10:00 - 20:00',
            thursday: '10:00 - 20:00',
            friday: '10:00 - 20:00',
            saturday: '10:00 - 21:00',
            sunday: '12:00 - 19:00'
          },
          yearEstablished: 2016,
          employeeCount: '5-15',
          certifications: ['Tekstil Kalite Belgesi']
        }
      ]
    }
  },
  'reklam-medya': {
    'reklam-ajansi': {
      description: 'Reklam ajansları, medya planlama, yaratıcı hizmetler',
      companies: [
        {
          id: 'ad-001',
          name: 'Creative Ad Agency',
          slug: 'creative-ad-agency',
          description: 'Creative Ad Agency, 2011 yılından beri yaratıcı reklam çözümleri sunan bir ajansıdır.',
          summary: 'Markanızı öne çıkarın. Yaratıcı fikirlerle etkili reklam kampanyaları.',
          location: 'İstanbul, Türkiye',
          rating: 4.7,
          reviewCount: 123,
          services: ['Reklam Kampanyası', 'Logo Tasarım', 'Web Tasarım', 'Sosyal Medya Yönetimi', 'Medya Planlama', 'Fotoğraf Çekimi', 'Video Prodüksiyon', 'Marka Danışmanlığı'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 212 890 1234',
            whatsapp: '+90 532 890 1234',
            email: 'info@creativead.com.tr',
            website: 'https://www.creativead.com.tr',
            address: 'Kadıköy Mahallesi, Yaratıcılık Sokağı No:12, Kadıköy/İstanbul'
          },
          socialMedia: {
            instagram: 'creative.ad.agency',
            facebook: 'creativead',
            linkedin: 'company/creative-ad'
          },
          gallery: {
            photos: ['/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '09:00 - 18:00',
            tuesday: '09:00 - 18:00',
            wednesday: '09:00 - 18:00',
            thursday: '09:00 - 18:00',
            friday: '09:00 - 18:00',
            saturday: 'Proje Bazlı',
            sunday: 'Kapalı'
          },
          yearEstablished: 2011,
          employeeCount: '15-25',
          certifications: ['Reklam Ajansı Belgesi']
        }
      ]
    }
  },
  'eglence-kultur': {
    'etkinlik-organizasyon': {
      description: 'Düğün organizasyonu, etkinlik yönetimi, sahne tasarımı',
      companies: [
        {
          id: 'event-001',
          name: 'Dream Events Organizasyon',
          slug: 'dream-events-organizasyon',
          description: 'Dream Events, 2013 yılından beri unutulmaz etkinlikler organize eden profesyonel bir firmadır.',
          summary: 'Özel günlerinizi unutulmaz kılın. Profesyonel organizasyonla mükemmel etkinlikler.',
          location: 'Antalya, Türkiye',
          rating: 4.8,
          reviewCount: 234,
          services: ['Düğün Organizasyonu', 'Doğum Günü', 'Kurumsal Etkinlik', 'Sahne Tasarımı', 'DJ Hizmeti', 'Fotoğraf-Video', 'Catering', 'Dekorasyon'],
          isVerified: true,
          isEco: false,
          isFeatured: true,
          contactInfo: {
            phone: '+90 242 345 6789',
            whatsapp: '+90 532 345 6789',
            email: 'info@dreamevents.com.tr',
            website: 'https://www.dreamevents.com.tr',
            address: 'Lara Mahallesi, Etkinlik Caddesi No:56, Muratpaşa/Antalya'
          },
          socialMedia: {
            instagram: 'dream.events.org',
            facebook: 'dreamevents'
          },
          gallery: {
            photos: ['/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '10:00 - 19:00',
            tuesday: '10:00 - 19:00',
            wednesday: '10:00 - 19:00',
            thursday: '10:00 - 19:00',
            friday: '10:00 - 19:00',
            saturday: '10:00 - 20:00',
            sunday: '12:00 - 18:00'
          },
          yearEstablished: 2013,
          employeeCount: '25-50',
          certifications: ['Etkinlik Yönetimi Sertifikası']
        }
      ]
    }
  },
  'tasarim-sanat': {
    'grafik-tasarim': {
      description: 'Grafik tasarım, web tasarım, logo tasarım hizmetleri',
      companies: [
        {
          id: 'design-001',
          name: 'Pixel Perfect Design Studio',
          slug: 'pixel-perfect-design',
          description: 'Pixel Perfect, 2017 yılından beri yaratıcı tasarım hizmetleri sunan bir stüdyodur.',
          summary: 'Tasarımda mükemmellik. Yaratıcı çözümlerle markanızı güçlendirin.',
          location: 'İstanbul, Türkiye',
          rating: 4.6,
          reviewCount: 89,
          services: ['Logo Tasarım', 'Web Tasarım', 'Katalog Tasarım', 'Ambalaj Tasarım', 'İllüstrasyon', 'Marka Kimliği', 'Sosyal Medya Tasarım', 'Print Tasarım'],
          isVerified: true,
          isEco: false,
          isFeatured: false,
          contactInfo: {
            phone: '+90 212 567 8901',
            whatsapp: '+90 532 567 8901',
            email: 'info@pixelperfect.com.tr',
            website: 'https://www.pixelperfect.com.tr',
            address: 'Beyoğlu Mahallesi, Tasarım Sokağı No:78, Beyoğlu/İstanbul'
          },
          socialMedia: {
            instagram: 'pixel.perfect.design',
            facebook: 'pixelperfect'
          },
          gallery: {
            photos: ['/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '09:00 - 18:00',
            tuesday: '09:00 - 18:00',
            wednesday: '09:00 - 18:00',
            thursday: '09:00 - 18:00',
            friday: '09:00 - 18:00',
            saturday: 'Proje Bazlı',
            sunday: 'Kapalı'
          },
          yearEstablished: 2017,
          employeeCount: '10-15',
          certifications: ['Grafik Tasarım Sertifikası']
        }
      ]
    }
  },
  'tarim-gida': {
    'organik-urun': {
      description: 'Organik tarım ürünleri, doğal gıda üretimi',
      companies: [
        {
          id: 'organic-001',
          name: 'Doğal Ürünler Çiftliği',
          slug: 'dogal-urunler-ciftligi',
          description: 'Doğal Ürünler Çiftliği, 2005 yılından beri organik tarım ve doğal gıda üretimi yapan bir çiftliktir.',
          summary: 'Doğadan sofranıza. %100 organik ve doğal ürünler.',
          location: 'Muğla, Türkiye',
          rating: 4.7,
          reviewCount: 145,
          services: ['Organik Sebze', 'Organik Meyve', 'Doğal Bal', 'Organik Yumurta', 'Zeytinyağı', 'Kuruyemiş', 'Organik Et', 'Ev Teslim'],
          isVerified: true,
          isEco: true,
          isFeatured: true,
          contactInfo: {
            phone: '+90 252 456 7890',
            whatsapp: '+90 532 456 7890',
            email: 'info@dogalurunler.com.tr',
            website: 'https://www.dogalurunler.com.tr',
            address: 'Yatağan Mahallesi, Çiftlik Yolu No:12, Yatağan/Muğla'
          },
          socialMedia: {
            instagram: 'dogal.urunler.ciftlik',
            facebook: 'dogalurunler'
          },
          gallery: {
            photos: ['/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '08:00 - 17:00',
            tuesday: '08:00 - 17:00',
            wednesday: '08:00 - 17:00',
            thursday: '08:00 - 17:00',
            friday: '08:00 - 17:00',
            saturday: '08:00 - 16:00',
            sunday: 'Kapalı'
          },
          yearEstablished: 2005,
          employeeCount: '15-25',
          certifications: ['Organik Tarım Sertifikası', 'Gıda Güvenliği']
        }
      ]
    }
  },
  'uretim-sanayi': {
    'metal-isci': {
      description: 'Metal işçiliği, kaynak, sac işleri, endüstriyel üretim',
      companies: [
        {
          id: 'metal-001',
          name: 'ProMetal Sanayi',
          slug: 'prometal-sanayi',
          description: 'ProMetal Sanayi, 2003 yılından beri metal işçiliği ve endüstriyel üretim alanında faaliyet gösteren bir firmadır.',
          summary: 'Kaliteli metal işçiliği. Endüstriyel çözümleriniz için güvenilir partner.',
          location: 'Kocaeli, Türkiye',
          rating: 4.5,
          reviewCount: 78,
          services: ['Kaynak İşleri', 'Sac Büküm', 'CNC Torna', 'Kalıp İmalatı', 'Metal Profil', 'Endüstriyel Üretim', 'Proje Geliştirme', 'Kalite Kontrol'],
          isVerified: true,
          isEco: false,
          isFeatured: false,
          contactInfo: {
            phone: '+90 262 678 9012',
            whatsapp: '+90 532 678 9012',
            email: 'info@prometal.com.tr',
            website: 'https://www.prometal.com.tr',
            address: 'Gebze OSB, Metal Sanayi Caddesi No:234, Gebze/Kocaeli'
          },
          socialMedia: {
            linkedin: 'company/prometal-sanayi',
            facebook: 'prometal'
          },
          gallery: {
            photos: ['/api/placeholder/600/400'],
            videos: []
          },
          businessHours: {
            monday: '08:00 - 17:00',
            tuesday: '08:00 - 17:00',
            wednesday: '08:00 - 17:00',
            thursday: '08:00 - 17:00',
            friday: '08:00 - 17:00',
            saturday: 'Kapalı',
            sunday: 'Kapalı'
          },
          yearEstablished: 2003,
          employeeCount: '50-100',
          certifications: ['ISO 9001', 'CE Belgesi', 'TSE']
        }
      ]
    }
  }
};

export { sectorData };

// Helper functions (aynı kalıyor)
export function getSector(sectorId: string): Sector | null {
  return sectors.find(sector => sector.id === sectorId) || null;
}

export function getSubSector(sectorId: string, subSectorId: string): { name: string; description: string } | null {
  const sectorData = getSectorData(sectorId);
  const subSector = sectorData?.[subSectorId];
  return subSector ? { name: formatSubSectorName(subSectorId), description: subSector.description } : null;
}

export function getCompany(sectorId: string, subSectorId: string, companySlug: string): Company | null {
  const sectorData = getSectorData(sectorId);
  const subSector = sectorData?.[subSectorId];
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
  const sectorData = getSectorData(sectorId);
  return sectorData?.[subSectorId]?.companies || [];
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
    
    // Peyzaj & Bahçe
    'peyzaj-tasarim': 'Peyzaj Tasarımı',
    'bahcivanlik': 'Bahçıvanlık',
    'cicekcilik': 'Çiçekçilik',
    
    // Finans
    'bankalar': 'Bankalar',
    'yatirim-danismanligi': 'Yatırım Danışmanlığı',
    'kredi-finans': 'Kredi & Finans',
    
    // Emlak
    'emlak-danismanligi': 'Emlak Danışmanlığı',
    'insaat-gelistirme': 'İnşaat Geliştirme',
    
    // Hukuk
    'hukuk-burosu': 'Hukuk Bürosu',
    
    // Turizm
    'otel-konaklama': 'Otel & Konaklama',
    'seyahat-acentesi': 'Seyahat Acentesi',
    
    // Muhasebe & Vergi
    'muhasebe-burosu': 'Muhasebe Bürosu',
    
    // Güvenlik & Temizlik
    'guvenlik-hizmetleri': 'Güvenlik Hizmetleri',
    'temizlik-hizmetleri': 'Temizlik Hizmetleri',
    
    // Perakende
    'market-gida': 'Market & Gıda',
    
    // Sigorta
    'sigorta-acentesi': 'Sigorta Acentesi',
    
    // Teknisyen & Tamir
    'elektronik-tamir': 'Elektronik Tamir',
    
    // Pet & Hayvan
    'veteriner-klinik': 'Veteriner Kliniği',
    
    // Ev & Yaşam
    'ev-dekorasyon': 'Ev Dekorasyonu',
    
    // Ulaşım & Lojistik
    'nakliye-tasima': 'Nakliye & Taşıma',
    
    // Moda & Tekstil
    'giyim-magaza': 'Giyim Mağazası',
    
    // Reklam & Medya
    'reklam-ajansi': 'Reklam Ajansı',
    
    // Eğlence & Kültür
    'etkinlik-organizasyon': 'Etkinlik Organizasyonu',
    
    // Tasarım & Sanat
    'grafik-tasarim': 'Grafik Tasarım',
    
    // Tarım & Gıda
    'organik-urun': 'Organik Ürünler',
    
    // Üretim & Sanayi
    'metal-isci': 'Metal İşçiliği',
    
    // Gıda & İçecek
    'restoran-cafe': 'Restaurant & Cafe',
    'catering': 'Catering Hizmetleri',
    
    // Otomotiv
    'arac-satis': 'Araç Satış',
    'arac-servis': 'Araç Servis'
  };
  
  return nameMap[subSectorId] || subSectorId.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
}