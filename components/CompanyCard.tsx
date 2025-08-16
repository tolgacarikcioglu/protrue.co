import Link from 'next/link';
import Image from 'next/image';
import { Star, MapPin, Shield, Leaf, Award } from 'lucide-react';
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
    if (company.isVerified) badges.push({ text: 'Doğrulanmış', color: 'bg-green-100 text-green-800', icon: Shield });
    if (company.isEco) badges.push({ text: 'Çevre Dostu', color: 'bg-emerald-100 text-emerald-800', icon: Leaf });
    if (company.isFeatured) badges.push({ text: 'Öne Çıkan', color: 'bg-purple-100 text-purple-800', icon: Award });
    return badges;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-grow">
          <div className="flex items-center mb-2">
            <h3 className="text-lg font-semibold text-gray-900 mr-2">{company.name}</h3>
            <div className="flex flex-wrap gap-1">
              {getBadges().slice(0, 2).map((badge, index) => {
                const IconComponent = badge.icon;
                return (
                  <div key={index} className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${badge.color}`}>
                    <IconComponent className="w-3 h-3" />
                    {badge.text}
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <MapPin className="w-4 h-4 mr-1" />
            {company.location}
          </div>
          
          <div className="flex items-center text-sm text-gray-600 mb-3">
            <div className="flex mr-2">{renderStars(company.rating)}</div>
            <span className="font-medium">{company.rating}</span>
            <span className="ml-1">({company.reviewCount} değerlendirme)</span>
          </div>
        </div>

        {company.gallery.photos.length > 0 && (
          <div className="flex-shrink-0 ml-4">
            <div className="relative w-16 h-16 rounded-lg overflow-hidden">
              <Image
                src={company.gallery.photos[0]}
                alt={`${company.name} logo`}
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
          </div>
        )}
      </div>

      <p className="text-gray-700 text-sm mb-4 leading-relaxed">
        {(company.summary || company.description).length > 120 
          ? `${(company.summary || company.description).substring(0, 120)}...`
          : company.summary || company.description
        }
      </p>

      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {company.services.slice(0, 3).map((service, index) => (
            <span
              key={index}
              className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded"
            >
              {service}
            </span>
          ))}
          {company.services.length > 3 && (
            <span className="text-gray-500 text-xs px-2 py-1">
              +{company.services.length - 3} daha
            </span>
          )}
        </div>
      </div>

      <Link 
        href={`/sektorler/${sectorId}/${subSectorId}/${company.id}`}
        className="block w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors text-sm font-medium text-center"
      >
        Firma Profilini Görüntüle
      </Link>
    </div>
  );
}