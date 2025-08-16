'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  ChevronRight, 
  ArrowLeft, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  MessageCircle,
  Camera,
  Play,
  ExternalLink,
  Shield,
  Leaf,
  Award,
  Edit,
  Share2
} from 'lucide-react';
import { notFound } from 'next/navigation';
import { useState } from 'react';

const companiesData: Record<string, Record<string, Array<{
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
    mapCoordinates?: { lat: number; lng: number };
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
}>>> = {
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
          address: 'Beşiktaş Mahallesi, Teknoloji Caddesi No:45, 34357 Beşiktaş/İstanbul',
          mapCoordinates: { lat: 41.0425, lng: 29.0045 }
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

interface CompanyPageProps {
  params: { 
    'ana-sektor': string; 
    'alt-sektor': string;
    'firma-slug': string;
  };
}

export default function CompanyPage({ params }: CompanyPageProps) {
  const [activeTab, setActiveTab] = useState<'gallery' | 'videos'>('gallery');
  const [isEditMode, setIsEditMode] = useState(false);
  
  const mainSectorKey = params['ana-sektor'];
  const subSectorKey = params['alt-sektor'];
  const companySlug = params['firma-slug'];
  
  const mainSector = sectorsData[mainSectorKey];
  const subSector = subSectorsData[mainSectorKey]?.[subSectorKey];
  const companies = companiesData[mainSectorKey]?.[subSectorKey] || [];
  const company = companies.find(c => c.id === companySlug);

  if (!mainSector || !subSector || !company) {
    notFound();
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : i < rating
            ? 'text-yellow-400 fill-current opacity-50'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const getBadges = () => {
    const badges = [];
    if (company.isVerified) badges.push({ text: 'Doğrulanmış', color: 'bg-green-100 text-green-800', icon: Shield });
    if (company.isEco) badges.push({ text: 'Çevre Dostu', color: 'bg-emerald-100 text-emerald-800', icon: Leaf });
    if (company.isFeatured) badges.push({ text: 'Öne Çıkan', color: 'bg-purple-100 text-purple-800', icon: Award });
    return badges;
  };

  const getVideoEmbedUrl = (url: string, platform: 'youtube' | 'vimeo') => {
    if (platform === 'youtube') {
      const videoId = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (platform === 'vimeo') {
      const videoId = url.split('/').pop();
      return `https://player.vimeo.com/video/${videoId}`;
    }
    return url;
  };

  const formatBusinessHours = () => {
    const days = [
      { key: 'monday', label: 'Pazartesi' },
      { key: 'tuesday', label: 'Salı' },
      { key: 'wednesday', label: 'Çarşamba' },
      { key: 'thursday', label: 'Perşembe' },
      { key: 'friday', label: 'Cuma' },
      { key: 'saturday', label: 'Cumartesi' },
      { key: 'sunday', label: 'Pazar' }
    ];

    return days.map(day => ({
      label: day.label,
      hours: company.businessHours?.[day.key as keyof typeof company.businessHours] || 'Kapalı'
    }));
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: company.name,
            description: company.description,
            url: company.contactInfo.website,
            telephone: company.contactInfo.phone,
            email: company.contactInfo.email,
            address: {
              '@type': 'PostalAddress',
              streetAddress: company.contactInfo.address,
              addressLocality: company.location.split(', ')[1],
              addressRegion: company.location.split(', ')[0],
              addressCountry: 'TR'
            },
            geo: company.contactInfo.mapCoordinates ? {
              '@type': 'GeoCoordinates',
              latitude: company.contactInfo.mapCoordinates.lat,
              longitude: company.contactInfo.mapCoordinates.lng
            } : undefined,
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: company.rating,
              reviewCount: company.reviewCount,
              bestRating: 5,
              worstRating: 1
            },
            foundingDate: company.yearEstablished?.toString(),
            numberOfEmployees: company.employeeCount,
            sameAs: Object.values(company.socialMedia).filter(Boolean).map(handle => 
              handle?.includes('http') ? handle : `https://facebook.com/${handle}`
            )
          })
        }}
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link href="/sektorler" className="hover:text-blue-600">
            Ana Sektörler
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href={`/sektorler/${mainSectorKey}`} className="hover:text-blue-600">
            {mainSector.name}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href={`/sektorler/${mainSectorKey}/${subSectorKey}`} className="hover:text-blue-600">
            {subSector.name}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">{company.name}</span>
        </nav>

        {/* Back Button */}
        <Link 
          href={`/sektorler/${mainSectorKey}/${subSectorKey}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {subSector.name} Firmalarına Dön
        </Link>

        {/* Company Header */}
        <div className="bg-white rounded-xl border shadow-sm p-8 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-3xl font-bold text-white">
                  {company.name.charAt(0)}
                </span>
              </div>
            </div>
            
            <div className="flex-grow">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold text-gray-900">{company.name}</h1>
                    {isEditMode && (
                      <button className="text-blue-600 hover:text-blue-700">
                        <Edit className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {getBadges().map((badge, index) => {
                      const IconComponent = badge.icon;
                      return (
                        <div key={index} className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${badge.color}`}>
                          <IconComponent className="w-3 h-3" />
                          {badge.text}
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {company.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="flex">{renderStars(company.rating)}</div>
                      <span className="ml-1 font-medium">{company.rating}</span>
                      <span>({company.reviewCount} değerlendirme)</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Share2 className="w-4 h-4" />
                    Paylaş
                  </button>
                  {isEditMode && (
                    <button
                      onClick={() => setIsEditMode(false)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Kaydet
                    </button>
                  )}
                  {!isEditMode && (
                    <button
                      onClick={() => setIsEditMode(true)}
                      className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
                    >
                      <Edit className="w-4 h-4" />
                      Düzenle
                    </button>
                  )}
                </div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                {company.summary}
              </p>

              <div className="flex flex-wrap gap-2">
                {company.services.map((service, index) => (
                  <span
                    key={index}
                    className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Company Description */}
            <div className="bg-white rounded-xl border shadow-sm p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Firma Hakkında</h2>
                {isEditMode && (
                  <button className="text-blue-600 hover:text-blue-700">
                    <Edit className="w-5 h-5" />
                  </button>
                )}
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {company.description}
                </p>
                
                {company.yearEstablished && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 p-6 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{new Date().getFullYear() - company.yearEstablished}</div>
                      <div className="text-sm text-gray-600">Yıl Tecrübe</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{company.employeeCount}</div>
                      <div className="text-sm text-gray-600">Çalışan</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{company.reviewCount}+</div>
                      <div className="text-sm text-gray-600">Mutlu Müşteri</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{company.services.length}</div>
                      <div className="text-sm text-gray-600">Hizmet Alanı</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Gallery & Videos */}
            <div className="bg-white rounded-xl border shadow-sm p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Galeri</h2>
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setActiveTab('gallery')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === 'gallery'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Camera className="w-4 h-4" />
                    Fotoğraflar ({company.gallery.photos.length})
                  </button>
                  <button
                    onClick={() => setActiveTab('videos')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === 'videos'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Play className="w-4 h-4" />
                    Videolar ({company.gallery.videos.length})
                  </button>
                </div>
              </div>

              {activeTab === 'gallery' && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {company.gallery.photos.map((photo, index) => (
                    <div key={index} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src={photo}
                        alt={`${company.name} fotoğraf ${index + 1}`}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'videos' && (
                <div className="space-y-6">
                  {company.gallery.videos.length > 0 ? (
                    company.gallery.videos.map((video, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">{video.title}</h3>
                        <div className="aspect-video bg-black rounded-lg overflow-hidden">
                          <iframe
                            src={getVideoEmbedUrl(video.url, video.platform)}
                            title={video.title}
                            className="w-full h-full"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12 text-gray-500">
                      <Play className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>Henüz video eklenmemiş</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Certifications */}
            {company.certifications && company.certifications.length > 0 && (
              <div className="bg-white rounded-xl border shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Sertifikalar ve Belgeler</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {company.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 border rounded-lg">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Award className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="font-medium text-gray-900">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-white rounded-xl border shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">İletişim Bilgileri</h3>
                {isEditMode && (
                  <button className="text-blue-600 hover:text-blue-700">
                    <Edit className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              <div className="space-y-4">
                {company.contactInfo.phone && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Telefon</div>
                      <a href={`tel:${company.contactInfo.phone}`} className="text-blue-600 hover:underline">
                        {company.contactInfo.phone}
                      </a>
                    </div>
                  </div>
                )}

                {company.contactInfo.whatsapp && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">WhatsApp</div>
                      <a 
                        href={`https://wa.me/${company.contactInfo.whatsapp.replace(/\s+/g, '').replace('+', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:underline"
                      >
                        {company.contactInfo.whatsapp}
                      </a>
                    </div>
                  </div>
                )}

                {company.contactInfo.email && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">E-posta</div>
                      <a href={`mailto:${company.contactInfo.email}`} className="text-blue-600 hover:underline">
                        {company.contactInfo.email}
                      </a>
                    </div>
                  </div>
                )}

                {company.contactInfo.website && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Web Sitesi</div>
                      <a 
                        href={company.contactInfo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center gap-1"
                      >
                        {company.contactInfo.website.replace('https://', '')}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-6 mt-6 border-t">
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Hemen İletişime Geç
                </button>
              </div>
            </div>

            {/* Social Media */}
            {Object.values(company.socialMedia).some(Boolean) && (
              <div className="bg-white rounded-xl border shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sosyal Medya</h3>
                <div className="space-y-3">
                  {company.socialMedia.facebook && (
                    <a
                      href={`https://facebook.com/${company.socialMedia.facebook}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <div className="w-8 h-8 bg-[#1877F2] rounded flex items-center justify-center">
                        <span className="text-white text-sm font-bold">f</span>
                      </div>
                      <span className="text-gray-900 font-medium">Facebook</span>
                      <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                    </a>
                  )}

                  {company.socialMedia.instagram && (
                    <a
                      href={`https://instagram.com/${company.socialMedia.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-pink-50 transition-colors"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center">
                        <span className="text-white text-sm font-bold">📷</span>
                      </div>
                      <span className="text-gray-900 font-medium">Instagram</span>
                      <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                    </a>
                  )}

                  {company.socialMedia.linkedin && (
                    <a
                      href={`https://linkedin.com/${company.socialMedia.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <div className="w-8 h-8 bg-[#0A66C2] rounded flex items-center justify-center">
                        <span className="text-white text-sm font-bold">in</span>
                      </div>
                      <span className="text-gray-900 font-medium">LinkedIn</span>
                      <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                    </a>
                  )}

                  {company.socialMedia.twitter && (
                    <a
                      href={`https://twitter.com/${company.socialMedia.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <div className="w-8 h-8 bg-[#1DA1F2] rounded flex items-center justify-center">
                        <span className="text-white text-sm font-bold">𝕏</span>
                      </div>
                      <span className="text-gray-900 font-medium">Twitter</span>
                      <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Business Hours */}
            {company.businessHours && (
              <div className="bg-white rounded-xl border shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Çalışma Saatleri</h3>
                <div className="space-y-2">
                  {formatBusinessHours().map((day, index) => (
                    <div key={index} className="flex justify-between items-center py-2">
                      <span className="text-gray-700 font-medium">{day.label}</span>
                      <span className={`text-sm font-medium ${
                        day.hours === 'Kapalı' ? 'text-red-600' : 'text-green-600'
                      }`}>
                        {day.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Google Maps */}
            {company.contactInfo.mapCoordinates && (
              <div className="bg-white rounded-xl border shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Konum</h3>
                <div className="space-y-4">
                  {company.contactInfo.address && (
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {company.contactInfo.address}
                    </p>
                  )}
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    <iframe
                      src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${company.contactInfo.mapCoordinates.lat},${company.contactInfo.mapCoordinates.lng}&zoom=15`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${company.name} konumu`}
                    />
                  </div>
                  <a
                    href={`https://www.google.com/maps?q=${company.contactInfo.mapCoordinates.lat},${company.contactInfo.mapCoordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    <MapPin className="w-4 h-4" />
                    Google Maps&apos;te Aç
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Edit Mode Disclaimer */}
        {isEditMode && (
          <div className="fixed bottom-6 right-6 bg-orange-600 text-white p-4 rounded-lg shadow-lg max-w-sm">
            <div className="flex items-start gap-3">
              <Edit className="w-5 h-5 mt-0.5" />
              <div>
                <div className="font-medium mb-1">Düzenleme Modu Aktif</div>
                <div className="text-sm opacity-90">
                  Bu bir demo özelliğidir. Gerçek bir düzenleme yapılmamaktadır.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}