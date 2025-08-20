'use client';

import { useState } from 'react';
import { X, Upload, Building, Phone, Mail, FileText, AlertCircle } from 'lucide-react';

interface OwnershipRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  companyName: string;
  companyId: string;
  userId: string;
}

export default function OwnershipRequestModal({
  isOpen,
  onClose,
  companyName,
  companyId,
  userId
}: OwnershipRequestModalProps) {
  const [formData, setFormData] = useState({
    businessRegistration: '',
    taxNumber: '',
    contactPhone: '',
    contactEmail: '',
    message: '',
    documents: [] as File[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData(prev => ({
      ...prev,
      documents: [...prev.documents, ...files].slice(0, 3) // Max 3 files
    }));
  };

  const removeDocument = (index: number) => {
    setFormData(prev => ({
      ...prev,
      documents: prev.documents.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Create FormData for file upload
      const submitData = new FormData();
      submitData.append('companyId', companyId);
      submitData.append('userId', userId);
      submitData.append('businessRegistration', formData.businessRegistration);
      submitData.append('taxNumber', formData.taxNumber);
      submitData.append('contactPhone', formData.contactPhone);
      submitData.append('contactEmail', formData.contactEmail);
      submitData.append('message', formData.message);
      
      formData.documents.forEach((file, index) => {
        submitData.append(`document_${index}`, file);
      });

      const response = await fetch('/api/ownership-request', {
        method: 'POST',
        body: submitData
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage('Talebiniz başarıyla gönderildi! Moderatörlerimiz en kısa sürede değerlendirecek.');
        setTimeout(() => {
          onClose();
          setFormData({
            businessRegistration: '',
            taxNumber: '',
            contactPhone: '',
            contactEmail: '',
            message: '',
            documents: []
          });
          setSubmitMessage('');
        }, 2000);
      } else {
        setSubmitMessage(result.error || 'Bir hata oluştu. Lütfen tekrar deneyin.');
      }
    } catch (error) {
      setSubmitMessage('Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Building className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Firma Sahipliği Talebi</h2>
              <p className="text-sm text-gray-600">{companyName}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitMessage && (
            <div className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
              submitMessage.includes('başarıyla') 
                ? 'bg-green-50 text-green-700 border border-green-200' 
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}>
              <AlertCircle className="w-5 h-5 mt-0.5" />
              <p className="text-sm">{submitMessage}</p>
            </div>
          )}

          <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
              <div className="text-sm text-blue-700">
                <p className="font-medium mb-1">Önemli Bilgiler:</p>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Bu talep, firmanın yasal sahibi olduğunuzu doğrulama sürecidir</li>
                  <li>Ticaret sicil belgesi, vergi levhası gibi resmi belgeler gereklidir</li>
                  <li>Talepler 2-3 iş günü içinde değerlendirilir</li>
                  <li>Onaylanan sahipler firmalarını düzenleyebilir</li>
                </ul>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Business Registration */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ticaret Sicil Numarası *
              </label>
              <input
                type="text"
                name="businessRegistration"
                value={formData.businessRegistration}
                onChange={handleInputChange}
                required
                placeholder="örn: İstanbul-123456"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Tax Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vergi Numarası *
              </label>
              <input
                type="text"
                name="taxNumber"
                value={formData.taxNumber}
                onChange={handleInputChange}
                required
                placeholder="10 haneli vergi numaranız"
                maxLength={10}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Contact Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  İletişim Telefonu *
                </label>
                <input
                  type="tel"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleInputChange}
                  required
                  placeholder="+90 5xx xxx xx xx"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Contact Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  İletişim E-posta *
                </label>
                <input
                  type="email"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                  required
                  placeholder="ornek@firma.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ek Mesaj
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                placeholder="Ek bilgiler veya açıklamalar..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Document Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Belgeler (İsteğe Bağlı)
              </label>
              <div className="space-y-3">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="document-upload"
                  />
                  <label
                    htmlFor="document-upload"
                    className="cursor-pointer flex flex-col items-center gap-2"
                  >
                    <Upload className="w-8 h-8 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      Belgeleri seçin veya sürükleyin
                    </span>
                    <span className="text-xs text-gray-500">
                      PDF, JPG, PNG formatları desteklenir (Max 3 dosya)
                    </span>
                  </label>
                </div>

                {/* Uploaded Documents */}
                {formData.documents.length > 0 && (
                  <div className="space-y-2">
                    {formData.documents.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-700 truncate">{file.name}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeDocument(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                İptal
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Talep Gönder'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}