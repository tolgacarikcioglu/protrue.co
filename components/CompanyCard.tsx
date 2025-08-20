import Link from 'next/link';
import Image from 'next/image';
import { Star, MapPin, Shield, Leaf, Award, Phone, Globe, Users, Clock } from 'lucide-react';
import { type Company } from '@/lib/data';

interface CompanyCardProps {
  company: Company;
  sectorId: string;
  subSectorId: string;
}

export default function CompanyCard({ company, sectorId, subSectorId }: CompanyCardProps) {
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
    if (company.isVerified) badges.push({ text: 'Doğrulanmış', color: 'bg-green-100 text-green-800 border-green-200', icon: Shield });
    if (company.isEco) badges.push({ text: 'Çevre Dostu', color: 'bg-emerald-100 text-emerald-800 border-emerald-200', icon: Leaf });
    if (company.isFeatured) badges.push({ text: 'Öne Çıkan', color: 'bg-purple-100 text-purple-800 border-purple-200', icon: Award });
    return badges;
  };

  const getEstablishmentInfo = () => {
    if (company.yearEstablished) {
      const years = new Date().getFullYear() - company.yearEstablished;
      return `${years} yıl tecrübe`;
    }
    return null;
  };

  return (
    <div className="group bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 overflow-hidden">
      {/* Header with company logo and badges */}
      <div className="relative">
        {company.isFeatured && (
          <div className="absolute top-0 right-0 z-10">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
              ÖNE ÇIKAN
            </div>
          </div>
        )}
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-grow">
              <div className="flex items-start mb-3">
                <div className="flex-shrink-0 mr-4">
                  {company.gallery.photos.length > 0 ? (
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-md">
                      <Image
                        src={company.gallery.photos[0]}
                        alt={`${company.name} logo`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="64px"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                      <span className="text-white text-xl font-bold">
                        {company.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {company.name}
                  </h3>
                  
                  <div className="flex flex-wrap gap-1 mb-2">
                    {getBadges().slice(0, 2).map((badge, index) => {
                      const IconComponent = badge.icon;
                      return (
                        <div key={index} className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${badge.color}`}>
                          <IconComponent className="w-3 h-3" />
                          {badge.text}
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-1 text-gray-400" />
                    {company.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rating and info */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="flex mr-2">{renderStars(company.rating)}</div>
              <span className="font-semibold text-gray-900">{company.rating}</span>
              <span className="text-gray-600 text-sm ml-1">({company.reviewCount})</span>
            </div>
            
            {getEstablishmentInfo() && (
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-1" />
                {getEstablishmentInfo()}
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-3">
            {(company.summary || company.description).length > 140 
              ? `${(company.summary || company.description).substring(0, 140)}...`
              : company.summary || company.description
            }
          </p>

          {/* Services */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {company.services.slice(0, 4).map((service, index) => (
                <span
                  key={index}
                  className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full font-medium border border-blue-100"
                >
                  {service}
                </span>
              ))}
              {company.services.length > 4 && (
                <span className="text-gray-500 text-xs px-3 py-1 font-medium">
                  +{company.services.length - 4} daha
                </span>
              )}
            </div>
          </div>

          {/* Quick info */}
          <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
            {company.contactInfo.phone && (
              <div className="flex items-center text-xs text-gray-600">
                <Phone className="w-4 h-4 mr-1" />
                <span>Telefon mevcut</span>
              </div>
            )}
            {company.contactInfo.website && (
              <div className="flex items-center text-xs text-gray-600">
                <Globe className="w-4 h-4 mr-1" />
                <span>Web sitesi var</span>
              </div>
            )}
            {company.employeeCount && (
              <div className="flex items-center text-xs text-gray-600">
                <Users className="w-4 h-4 mr-1" />
                <span>{company.employeeCount} kişi</span>
              </div>
            )}
            {company.certifications && company.certifications.length > 0 && (
              <div className="flex items-center text-xs text-gray-600">
                <Award className="w-4 h-4 mr-1" />
                <span>{company.certifications.length} sertifika</span>
              </div>
            )}
          </div>

          {/* CTA Button */}
          <Link 
            href={`/sektorler/${sectorId}/${subSectorId}/${company.slug}`}
            className="group/button block w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-4 rounded-lg transition-all duration-300 text-sm font-semibold text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <span className="flex items-center justify-center">
              Firma Detaylarını İncele
              <svg className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}