'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mesajınız alındı! En kısa sürede size dönüş yapacağız.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Hakkımızda</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Protrue.co, profesyonel hizmet sağlayıcıları ile müşterileri buluşturan güvenilir bir platformdur.
        </p>
      </div>

      {/* About Content */}
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">Misyonumuz</h2>
          <p className="text-gray-700 mb-6">
            Türkiye&apos;de profesyonel hizmet sektörünü dijitalleştirerek, kaliteli hizmet sağlayıcıları ile
            müşterileri güvenli ve şeffaf bir platformda buluşturmak. Her sektörde güvenilir, doğrulanmış
            profesyonellere saniyeler içinde ulaşabilmeyi mümkün kılıyoruz.
          </p>
          
          <h3 className="text-2xl font-semibold mb-4">Değerlerimiz</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
              <span><strong>Güven:</strong> Tüm profesyoneller titizlikle doğrulanır</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
              <span><strong>Şeffaflık:</strong> Açık fiyatlandırma ve değerlendirme sistemi</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
              <span><strong>Kalite:</strong> Sürekli iyileştirme ve müşteri memnuniyeti</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Vizyonumuz</h2>
          <p className="text-gray-700 mb-6">
            Türkiye&apos;nin en büyük ve güvenilir profesyonel hizmet platformu olmak. Her sektörde
            standartları yükselterek, hem hizmet sağlayıcıların hem de müşterilerin deneyimini
            sürekli iyileştirmek.
          </p>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Sayılarla Protrue.co</h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Sektör</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">1000+</div>
                <div className="text-sm text-gray-600">Profesyonel</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">5000+</div>
                <div className="text-sm text-gray-600">Memnun Müşteri</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-600">Memnuniyet Oranı</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">İletişim</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-blue-600 mr-3" />
              <span>info@protrue.co</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-blue-600 mr-3" />
              <span>+90 (212) 555-0123</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-blue-600 mr-3" />
              <span>İstanbul, Türkiye</span>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Çalışma Saatleri</h3>
            <div className="text-gray-700">
              <p>Pazartesi - Cuma: 09:00 - 18:00</p>
              <p>Cumartesi: 10:00 - 16:00</p>
              <p>Pazar: Kapalı</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Bize Ulaşın</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Ad Soyad
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                E-posta
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Mesaj
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <Send className="w-4 h-4 mr-2" />
              Mesaj Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}