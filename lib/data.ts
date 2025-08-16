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

export const sectorsData: Record<string, Sector> = {
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

export const subSectorsData: Record<string, Record<string, SubSector>> = {
  'teknoloji': {
    'yazilim-gelistirme': { name: 'Yazılım Geliştirme', description: 'Web, mobil ve masaüstü uygulamalar' },
    'siber-guvenlik': { name: 'Siber Güvenlik', description: 'Ağ güvenliği ve veri koruma' },
    'veri-analizi': { name: 'Veri Analizi', description: 'İş zekası ve büyük veri çözümleri' },
    'donanim': { name: 'Donanım', description: 'Bilgisayar ve elektronik donanım' },
    'bulut-hizmetleri': { name: 'Bulut Hizmetleri', description: 'Cloud computing ve hosting' }
  },
  'saglik': {
    'ozel-hastaneler': { name: 'Özel Hastaneler', description: 'Özel sağlık kuruluşları' },
    'kliniker': { name: 'Klinikler', description: 'Uzman doktor klinikleri' },
    'dis-hekimligi': { name: 'Diş Hekimliği', description: 'Ağız ve diş sağlığı' },
    'veteriner': { name: 'Veteriner', description: 'Hayvan sağlığı ve bakımı' },
    'eczaneler': { name: 'Eczaneler', description: 'İlaç ve sağlık ürünleri' }
  },
  'egitim': {
    'ozel-okullar': { name: 'Özel Okullar', description: 'İlk, orta ve lise eğitimi' },
    'universite': { name: 'Üniversite', description: 'Yükseköğretim kurumları' },
    'kurslar': { name: 'Kurslar', description: 'Meslek ve hobi kursları' },
    'yabanci-dil': { name: 'Yabancı Dil', description: 'Dil eğitimi ve çeviri' },
    'online-egitim': { name: 'Online Eğitim', description: 'Uzaktan eğitim platformları' }
  },
  'finans': {
    'bankalar': { name: 'Bankalar', description: 'Geleneksel ve dijital bankacılık' },
    'sigorta': { name: 'Sigorta', description: 'Hayat, kasko ve dask sigortaları' },
    'yatirim': { name: 'Yatırım', description: 'Portföy yönetimi ve danışmanlığı' },
    'kripto': { name: 'Kripto Para', description: 'Dijital varlık ticareti' },
    'muhasebe': { name: 'Muhasebe', description: 'Mali müşavirlik ve muhasebe' }
  },
  'hukuk': {
    'avukatlik': { name: 'Avukatlık', description: 'Hukuki danışmanlık ve dava takibi' },
    'noter': { name: 'Noter', description: 'Noter ve tasdik işlemleri' },
    'icra': { name: 'İcra', description: 'İcra ve iflas takibi' },
    'vergi-hukuku': { name: 'Vergi Hukuku', description: 'Vergi danışmanlığı ve uyuşmazlık' },
    'sirket-hukuku': { name: 'Şirket Hukuku', description: 'Kurumsal hukuk ve ticaret' }
  },
  'insaat': {
    'konut': { name: 'Konut İnşaatı', description: 'Ev ve apartman projeleri' },
    'ticari': { name: 'Ticari İnşaat', description: 'Ofis ve alışveriş merkezleri' },
    'altyapi': { name: 'Altyapı', description: 'Yol, köprü ve tünel projeleri' },
    'dekorasyon': { name: 'Dekorasyon', description: 'İç mimarlık ve tadilat' },
    'peyzaj': { name: 'Peyzaj', description: 'Bahçe düzenleme ve çevre tasarımı' }
  },
  'turizm': {
    'oteller': { name: 'Oteller', description: 'Konaklama ve otel işletmeciliği' },
    'tur-operatorleri': { name: 'Tur Operatörleri', description: 'Paket tur ve geziler' },
    'rehberlik': { name: 'Rehberlik', description: 'Turist rehberliği ve escort' },
    'rent-a-car': { name: 'Rent A Car', description: 'Araç kiralama hizmetleri' },
    'ulasim': { name: 'Ulaşım', description: 'Transfer ve toplu taşıma' }
  },
  'gida': {
    'restoranlar': { name: 'Restoranlar', description: 'Yemek ve içecek hizmetleri' },
    'catering': { name: 'Catering', description: 'Toplu yemek ve organizasyon' },
    'uretim': { name: 'Üretim', description: 'Gıda imalatı ve işleme' },
    'organik': { name: 'Organik Ürünler', description: 'Doğal ve organik gıda' },
    'kahve': { name: 'Kahve & Çay', description: 'Kahvehane ve çay evi işletmeciliği' }
  },
  'tekstil': {
    'moda': { name: 'Moda', description: 'Giyim tasarımı ve üretimi' },
    'dokuma': { name: 'Dokuma', description: 'Kumaş üretimi ve işleme' },
    'konfeksiyon': { name: 'Konfeksiyon', description: 'Hazır giyim üretimi' },
    'ayakkabi': { name: 'Ayakkabı', description: 'Ayakkabı tasarımı ve üretimi' },
    'aksesuar': { name: 'Aksesuar', description: 'Çanta, kemer ve süs eşyaları' }
  }
};

export const companiesData: Record<string, Record<string, Company[]>> = {
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
            },
            {
              title: 'Proje Geliştirme Süreci',
              url: 'https://vimeo.com/123456789',
              thumbnail: '/api/placeholder/400/225',
              platform: 'vimeo'
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
      },
      {
        id: 'devstudio',
        name: 'DevStudio',
        description: 'E-ticaret ve kurumsal yazılım çözümleri sunan köklü yazılım firması. Müşterilerimizin dijital dönüşüm yolculuğunda güvenilir partneri olarak hizmet veriyoruz.',
        summary: 'E-ticaret ve kurumsal yazılım alanında uzman DevStudio, işletmenizi dijital dünyaya taşıyor.',
        location: 'Ankara, Çankaya',
        rating: 4.6,
        reviewCount: 89,
        services: ['E-commerce', 'CRM Systems', 'API Development', 'System Integration'],
        isVerified: true,
        isEco: true,
        isFeatured: false,
        contactInfo: {
          phone: '+90 312 555 0456',
          email: 'iletisim@devstudio.com.tr',
          website: 'https://devstudio.com.tr',
          address: 'Çankaya Mahallesi, İnovasyon Bulvarı No:23, 06690 Çankaya/Ankara'
        },
        socialMedia: {
          linkedin: 'company/devstudio-ankara',
          instagram: 'devstudio_ankara'
        },
        gallery: {
          photos: [
            '/api/placeholder/600/400',
            '/api/placeholder/600/400',
            '/api/placeholder/600/400'
          ],
          videos: []
        }
      }
    ],
    'siber-guvenlik': [
      {
        id: 'securenet',
        name: 'SecureNet Güvenlik',
        description: 'Kapsamlı siber güvenlik danışmanlığı ve çözümleri sunan lider firma. Kurumsal güvenlik açıklarını tespit edip, güvenli dijital ortamlar oluşturuyoruz.',
        summary: 'Siber tehditlere karşı kurumunuzu koruyacak kapsamlı güvenlik çözümleri.',
        location: 'İstanbul, Maslak',
        rating: 4.9,
        reviewCount: 156,
        services: ['Penetration Testing', 'Security Audit', 'Compliance', 'SOC Services'],
        isVerified: true,
        isEco: false,
        isFeatured: true,
        contactInfo: {
          phone: '+90 212 555 0789',
          whatsapp: '+90 535 555 0789',
          email: 'info@securenet.com.tr',
          website: 'https://securenet.com.tr',
          address: 'Maslak Mahallesi, Güvenlik Plaza No:12, 34485 Sarıyer/İstanbul'
        },
        socialMedia: {
          linkedin: 'company/securenet-turkey',
          twitter: 'securenet_tr'
        },
        gallery: {
          photos: [
            '/api/placeholder/600/400',
            '/api/placeholder/600/400'
          ],
          videos: []
        },
        yearEstablished: 2018,
        employeeCount: '10-25',
        certifications: ['ISO 27001', 'CISA', 'CISSP']
      }
    ]
  },
  'hukuk': {
    'avukatlik': [
      {
        id: 'adalethukuk',
        name: 'Adalet Hukuk Bürosu',
        description: 'Tüm hukuk alanlarında uzman avukatlarımızla, müvekkillerimize en kaliteli hukuki hizmetleri sunmaktayız. 25 yıllık tecrübemizle yanınızdayız.',
        summary: 'Deneyimli avukat kadromuzla, hukuki sorunlarınıza profesyonel çözümler üretiyoruz.',
        location: 'İstanbul, Beyoğlu',
        rating: 4.7,
        reviewCount: 203,
        services: ['Ticaret Hukuku', 'İş Hukuku', 'Aile Hukuku', 'Ceza Hukuku', 'İcra İflas'],
        isVerified: true,
        isEco: false,
        isFeatured: true,
        contactInfo: {
          phone: '+90 212 555 0321',
          whatsapp: '+90 533 555 0321',
          email: 'info@adalethukuk.com.tr',
          website: 'https://adalethukuk.com.tr',
          address: 'Beyoğlu Mahallesi, Adalet Caddesi No:67, 34430 Beyoğlu/İstanbul'
        },
        socialMedia: {
          linkedin: 'company/adalet-hukuk',
          facebook: 'adalethukukburosu'
        },
        gallery: {
          photos: [
            '/api/placeholder/600/400',
            '/api/placeholder/600/400',
            '/api/placeholder/600/400',
            '/api/placeholder/600/400'
          ],
          videos: []
        },
        businessHours: {
          monday: '08:30 - 17:30',
          tuesday: '08:30 - 17:30',
          wednesday: '08:30 - 17:30',
          thursday: '08:30 - 17:30',
          friday: '08:30 - 17:30',
          saturday: '09:00 - 13:00',
          sunday: 'Kapalı'
        },
        yearEstablished: 1999,
        employeeCount: '15-30',
        certifications: ['İstanbul Barosu Üyeliği', 'Türkiye Barolar Birliği']
      }
    ],
    'noter': [
      {
        id: 'bestenoter',
        name: 'Beste Noter Kancılığı',
        description: 'Tüm noter işlemlerinizi hızlı ve güvenilir şekilde gerçekleştiriyoruz. Tapu, sözleşme, vekaletname ve tüm resmi belge işlemleriniz için yanınızdayız.',
        summary: 'Hızlı ve güvenilir noter hizmetleri ile tüm resmi işlemlerinizi kolaylaştırıyoruz.',
        location: 'Ankara, Kızılay',
        rating: 4.5,
        reviewCount: 89,
        services: ['Tapu İşlemleri', 'Sözleşme Düzenleme', 'Vekaletname', 'Miras İşlemleri', 'Şirket Kuruluşu'],
        isVerified: true,
        isEco: false,
        isFeatured: false,
        contactInfo: {
          phone: '+90 312 555 0654',
          email: 'info@bestenoter.com.tr',
          website: 'https://bestenoter.com.tr',
          address: 'Kızılay Mahallesi, Noter Sokak No:15, 06420 Çankaya/Ankara'
        },
        socialMedia: {
          facebook: 'bestenoterkanciligi'
        },
        gallery: {
          photos: [
            '/api/placeholder/600/400',
            '/api/placeholder/600/400'
          ],
          videos: []
        },
        businessHours: {
          monday: '08:30 - 17:00',
          tuesday: '08:30 - 17:00',
          wednesday: '08:30 - 17:00',
          thursday: '08:30 - 17:00',
          friday: '08:30 - 17:00',
          saturday: 'Kapalı',
          sunday: 'Kapalı'
        },
        yearEstablished: 2008,
        employeeCount: '5-10',
        certifications: ['Adalet Bakanlığı Onaylı']
      }
    ]
  },
  'saglik': {
    'ozel-hastaneler': [
      {
        id: 'medicalplus',
        name: 'Medical Plus Hastanesi',
        description: 'Son teknoloji medikal cihazlarla donatılmış özel hastanemizde, uzman doktorlarımız ile 7/24 sağlık hizmeti sunuyoruz.',
        summary: 'Modern tıbbın tüm imkanlarıyla, hasta odaklı kaliteli sağlık hizmetleri.',
        location: 'İstanbul, Kadıköy',
        rating: 4.6,
        reviewCount: 312,
        services: ['Genel Cerrahi', 'Kadın Doğum', 'Kardiyoloji', 'Nöroloji', 'Acil Servis'],
        isVerified: true,
        isEco: true,
        isFeatured: true,
        contactInfo: {
          phone: '+90 216 555 0987',
          whatsapp: '+90 536 555 0987',
          email: 'info@medicalplus.com.tr',
          website: 'https://medicalplus.com.tr',
          address: 'Kadıköy Mahallesi, Sağlık Caddesi No:78, 34710 Kadıköy/İstanbul'
        },
        socialMedia: {
          facebook: 'medicalplushastahanesi',
          instagram: 'medicalplus_official',
          linkedin: 'company/medical-plus'
        },
        gallery: {
          photos: [
            '/api/placeholder/600/400',
            '/api/placeholder/600/400',
            '/api/placeholder/600/400',
            '/api/placeholder/600/400',
            '/api/placeholder/600/400'
          ],
          videos: [
            {
              title: 'Hastane Tanıtım',
              url: 'https://youtube.com/watch?v=example1',
              thumbnail: '/api/placeholder/400/225',
              platform: 'youtube'
            }
          ]
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
        yearEstablished: 2012,
        employeeCount: '100-250',
        certifications: ['JCI Akreditasyonu', 'ISO 9001', 'Sağlık Bakanlığı Onayı']
      }
    ],
    'dis-hekimligi': [
      {
        id: 'smiledent',
        name: 'SmileDent Diş Kliniği',
        description: 'Estetik diş hekimliği alanında uzman ekibimizle, gülüşünüzü güzelleştirmek için en son teknoloji ile hizmet veriyoruz.',
        summary: 'Estetik ve tedavi edici diş hekimliği hizmetleri ile mükemmel gülüşler.',
        location: 'İzmir, Alsancak',
        rating: 4.8,
        reviewCount: 145,
        services: ['İmplant', 'Ortodonti', 'Bleaching', 'Kanal Tedavisi', 'Estetik Dolgu'],
        isVerified: true,
        isEco: false,
        isFeatured: false,
        contactInfo: {
          phone: '+90 232 555 0456',
          whatsapp: '+90 534 555 0456',
          email: 'info@smiledent.com.tr',
          website: 'https://smiledent.com.tr',
          address: 'Alsancak Mahallesi, Diş Sokak No:29, 35220 Konak/İzmir'
        },
        socialMedia: {
          instagram: 'smiledent_izmir',
          facebook: 'smiledentdiskliniği'
        },
        gallery: {
          photos: [
            '/api/placeholder/600/400',
            '/api/placeholder/600/400',
            '/api/placeholder/600/400'
          ],
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
        yearEstablished: 2016,
        employeeCount: '5-15',
        certifications: ['İzmir Diş Hekimleri Odası', 'Estetik Diş Hekimliği Sertifikası']
      }
    ]
  },
  'egitim': {
    'ozel-okullar': [
      {
        id: 'gelecekokul',
        name: 'Gelecek Özel Okulu',
        description: 'Modern eğitim yaklaşımları ve teknoloji destekli öğretim yöntemleri ile öğrencilerimizi geleceğe hazırlıyoruz.',
        summary: 'Çağdaş eğitim anlayışı ile öğrencilerin potansiyelini ortaya çıkarıyoruz.',
        location: 'Antalya, Lara',
        rating: 4.4,
        reviewCount: 78,
        services: ['Anaokulu', 'İlkokul', 'Ortaokul', 'Lise', 'Yaz Okulu'],
        isVerified: true,
        isEco: true,
        isFeatured: false,
        contactInfo: {
          phone: '+90 242 555 0789',
          email: 'info@gelecekokul.edu.tr',
          website: 'https://gelecekokul.edu.tr',
          address: 'Lara Mahallesi, Eğitim Bulvarı No:156, 07230 Muratpaşa/Antalya'
        },
        socialMedia: {
          facebook: 'gelecekegitimokulları',
          instagram: 'gelecekokul_official'
        },
        gallery: {
          photos: [
            '/api/placeholder/600/400',
            '/api/placeholder/600/400',
            '/api/placeholder/600/400',
            '/api/placeholder/600/400'
          ],
          videos: [
            {
              title: 'Okul Tanıtımı',
              url: 'https://youtube.com/watch?v=education1',
              thumbnail: '/api/placeholder/400/225',
              platform: 'youtube'
            }
          ]
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
        yearEstablished: 2005,
        employeeCount: '50-100',
        certifications: ['MEB Onayı', 'Cambridge Sertifika Merkezi']
      }
    ]
  },
  'finans': {
    'muhasebe': [
      {
        id: 'profimalimali',
        name: 'Profi Mali Müşavirlik',
        description: 'Muhasebe, vergi danışmanlığı ve mali müşavirlik hizmetlerinde 20 yıllık deneyimimizle işletmenizin mali işlerini güvenle yönetiyoruz.',
        summary: 'Muhasebe ve vergi danışmanlığında güvenilir çözümler.',
        location: 'Bursa, Osmangazi',
        rating: 4.3,
        reviewCount: 67,
        services: ['Muhasebe', 'Vergi Danışmanlığı', 'SGK İşlemleri', 'Bordro', 'Mali Rapor'],
        isVerified: true,
        isEco: false,
        isFeatured: false,
        contactInfo: {
          phone: '+90 224 555 0123',
          email: 'info@profimali.com.tr',
          website: 'https://profimali.com.tr',
          address: 'Osmangazi Mahallesi, Mali Caddesi No:34, 16040 Osmangazi/Bursa'
        },
        socialMedia: {
          linkedin: 'company/profi-mali'
        },
        gallery: {
          photos: [
            '/api/placeholder/600/400',
            '/api/placeholder/600/400'
          ],
          videos: []
        },
        businessHours: {
          monday: '08:00 - 18:00',
          tuesday: '08:00 - 18:00',
          wednesday: '08:00 - 18:00',
          thursday: '08:00 - 18:00',
          friday: '08:00 - 18:00',
          saturday: 'Kapalı',
          sunday: 'Kapalı'
        },
        yearEstablished: 2004,
        employeeCount: '10-25',
        certifications: ['TÜRMOB Üyeliği', 'YMM Lisansı']
      }
    ]
  },
  'insaat': {
    'konut': [
      {
        id: 'megayapi',
        name: 'Mega Yapı İnşaat',
        description: 'Kaliteli konut projeleri ile hayallerinizdeki evi gerçeğe dönüştürüyoruz. Modern mimari ve sürdürülebilir yapı teknolojileri kullanıyoruz.',
        summary: 'Kaliteli konut projeleri ile güvenli yaşam alanları inşa ediyoruz.',
        location: 'İstanbul, Ümraniye',
        rating: 4.2,
        reviewCount: 95,
        services: ['Villa İnşaatı', 'Apartman', 'Tadilat', 'Proje Yönetimi', 'İç Mimarlık'],
        isVerified: true,
        isEco: true,
        isFeatured: false,
        contactInfo: {
          phone: '+90 216 555 0987',
          whatsapp: '+90 537 555 0987',
          email: 'info@megayapi.com.tr',
          website: 'https://megayapi.com.tr',
          address: 'Ümraniye Mahallesi, İnşaat Bulvarı No:89, 34760 Ümraniye/İstanbul'
        },
        socialMedia: {
          instagram: 'megayapi_insaat',
          facebook: 'megayapiinsaat'
        },
        gallery: {
          photos: [
            '/api/placeholder/600/400',
            '/api/placeholder/600/400',
            '/api/placeholder/600/400',
            '/api/placeholder/600/400',
            '/api/placeholder/600/400'
          ],
          videos: [
            {
              title: 'Proje Tanıtımı',
              url: 'https://youtube.com/watch?v=construction1',
              thumbnail: '/api/placeholder/400/225',
              platform: 'youtube'
            }
          ]
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
        yearEstablished: 2001,
        employeeCount: '75-150',
        certifications: ['İnşaat Müteahhitler Birliği', 'TSE ISO 9001']
      }
    ]
  },
  'turizm': {
    'oteller': [
      {
        id: 'grandhotel',
        name: 'Grand Hotel Antalya',
        description: 'Akdeniz kıyısında eşsiz manzaralar eşliğinde unutulmaz bir tatil deneyimi sunuyoruz. Lüks konaklama ve olağanüstü hizmet kalitesi.',
        summary: 'Akdeniz\'in en güzel koyunda lüks konaklama deneyimi.',
        location: 'Antalya, Kemer',
        rating: 4.7,
        reviewCount: 523,
        services: ['Konaklama', 'Spa & Wellness', 'Restoran', 'Etkinlik Salonları', 'Havuz'],
        isVerified: true,
        isEco: true,
        isFeatured: true,
        contactInfo: {
          phone: '+90 242 555 0456',
          whatsapp: '+90 538 555 0456',
          email: 'info@grandhotel.com.tr',
          website: 'https://grandhotel.com.tr',
          address: 'Kemer Mahallesi, Sahil Yolu No:234, 07980 Kemer/Antalya'
        },
        socialMedia: {
          instagram: 'grandhotel_antalya',
          facebook: 'grandhotelantalya',
          youtube: 'grandhotelantalya'
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
              title: 'Otel Tanıtımı',
              url: 'https://youtube.com/watch?v=hotel1',
              thumbnail: '/api/placeholder/400/225',
              platform: 'youtube'
            }
          ]
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
        yearEstablished: 1998,
        employeeCount: '200-500',
        certifications: ['5 Yıldız Belgesi', 'ISO 22000', 'Yeşil Anahtar']
      }
    ]
  },
  'gida': {
    'restoranlar': [
      {
        id: 'lezzetevi',
        name: 'Lezzet Evi Restaurant',
        description: 'Geleneksel Türk mutfağının en seçkin lezzetlerini modern sunum teknikleri ile harmanlayarak, unutulmaz yemek deneyimleri sunuyoruz.',
        summary: 'Geleneksel lezzetler, modern sunum - Türk mutfağının en iyisi.',
        location: 'İstanbul, Sultanahmet',
        rating: 4.5,
        reviewCount: 287,
        services: ['Türk Mutfağı', 'Kebap Çeşitleri', 'Meze', 'Catering', 'Organizasyon'],
        isVerified: true,
        isEco: false,
        isFeatured: false,
        contactInfo: {
          phone: '+90 212 555 0654',
          email: 'info@lezzetevi.com.tr',
          website: 'https://lezzetevi.com.tr',
          address: 'Sultanahmet Mahallesi, Lezzet Sokak No:45, 34122 Fatih/İstanbul'
        },
        socialMedia: {
          instagram: 'lezzetevi_restaurant',
          facebook: 'lezzetevirestaurant'
        },
        gallery: {
          photos: [
            '/api/placeholder/600/400',
            '/api/placeholder/600/400',
            '/api/placeholder/600/400'
          ],
          videos: []
        },
        businessHours: {
          monday: '11:00 - 24:00',
          tuesday: '11:00 - 24:00',
          wednesday: '11:00 - 24:00',
          thursday: '11:00 - 24:00',
          friday: '11:00 - 01:00',
          saturday: '11:00 - 01:00',
          sunday: '11:00 - 24:00'
        },
        yearEstablished: 2010,
        employeeCount: '25-50',
        certifications: ['Gıda Güvenliği Sertifikası', 'HACCP']
      }
    ]
  },
  'tekstil': {
    'moda': [
      {
        id: 'modacenter',
        name: 'Moda Center Tekstil',
        description: 'Kadın, erkek ve çocuk giyim kategorilerinde kaliteli ve şık tasarımlar sunuyoruz. Hem toptan hem perakende satış yapıyoruz.',
        summary: 'Kaliteli kumaş ve şık tasarımlarla modanın öncüsü.',
        location: 'İstanbul, Fatih',
        rating: 4.1,
        reviewCount: 156,
        services: ['Kadın Giyim', 'Erkek Giyim', 'Çocuk Giyim', 'Toptan Satış', 'Özel Tasarım'],
        isVerified: true,
        isEco: false,
        isFeatured: false,
        contactInfo: {
          phone: '+90 212 555 0321',
          whatsapp: '+90 532 555 0321',
          email: 'info@modacenter.com.tr',
          website: 'https://modacenter.com.tr',
          address: 'Fatih Mahallesi, Tekstil Sokak No:123, 34134 Fatih/İstanbul'
        },
        socialMedia: {
          instagram: 'modacenter_tekstil',
          facebook: 'modacentertekstil'
        },
        gallery: {
          photos: [
            '/api/placeholder/600/400',
            '/api/placeholder/600/400',
            '/api/placeholder/600/400'
          ],
          videos: []
        },
        businessHours: {
          monday: '09:00 - 19:00',
          tuesday: '09:00 - 19:00',
          wednesday: '09:00 - 19:00',
          thursday: '09:00 - 19:00',
          friday: '09:00 - 19:00',
          saturday: '09:00 - 18:00',
          sunday: 'Kapalı'
        },
        yearEstablished: 2007,
        employeeCount: '30-75',
        certifications: ['Oeko-Tex Standard', 'İstanbul Tekstil Odası']
      }
    ]
  }
};

export function getCompany(sectorId: string, subSectorId: string, companyId: string): Company | undefined {
  return companiesData[sectorId]?.[subSectorId]?.find(company => company.id === companyId);
}

export function getCompanies(sectorId: string, subSectorId: string): Company[] {
  return companiesData[sectorId]?.[subSectorId] || [];
}

export function getSector(sectorId: string): Sector | undefined {
  return sectorsData[sectorId];
}

export function getSubSector(sectorId: string, subSectorId: string): SubSector | undefined {
  return subSectorsData[sectorId]?.[subSectorId];
}

export function getAllSectors(): Sector[] {
  return Object.values(sectorsData);
}

export function getSubSectors(sectorId: string): Record<string, SubSector> {
  return subSectorsData[sectorId] || {};
}