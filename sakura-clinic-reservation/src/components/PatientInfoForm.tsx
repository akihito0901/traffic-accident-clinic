'use client';

import { useState } from 'react';
import { ReservationForm } from '@/types/reservation';

interface PatientInfoFormProps {
  formData: Partial<ReservationForm>;
  updateFormData: (data: Partial<ReservationForm>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function PatientInfoForm({ 
  formData, 
  updateFormData, 
  onNext, 
  onPrev 
}: PatientInfoFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return value.trim() ? '' : '患者名を入力してください';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value) ? '' : '正しいメールアドレスを入力してください';
      case 'phone':
        const phoneRegex = /^[0-9-]+$/;
        return phoneRegex.test(value) && value.length >= 10 ? '' : '正しい電話番号を入力してください';
      default:
        return '';
    }
  };

  const handleInputChange = (name: string, value: string) => {
    updateFormData({ [name]: value });
    
    // リアルタイムバリデーション
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = () => {
    const newErrors: Record<string, string> = {};
    
    // 全フィールドのバリデーション
    const requiredFields = ['name', 'email', 'phone'];
    requiredFields.forEach(field => {
      const value = formData[field as keyof ReservationForm] as string || '';
      const error = validateField(field, value);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);

    // エラーがなければ次へ
    if (Object.keys(newErrors).length === 0) {
      onNext();
    }
  };

  const isFormValid = () => {
    return formData.name && 
           formData.email && 
           formData.phone &&
           Object.keys(errors).every(key => !errors[key]);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          患者情報を入力してください
        </h2>
        <p className="text-gray-600">
          予約確認のためご連絡先をお教えください
        </p>
      </div>

      <div className="space-y-6">
        {/* 患者名 */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            お名前 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.name || ''}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="山田 太郎"
            className={`
              w-full px-4 py-3 border-2 rounded-lg transition-all duration-300
              ${errors.name 
                ? 'border-red-300 focus:border-red-500' 
                : 'border-gray-200 focus:border-blue-500'
              }
              focus:outline-none focus:ring-2 focus:ring-blue-200
            `}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* メールアドレス */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            メールアドレス <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={formData.email || ''}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="yamada@example.com"
            className={`
              w-full px-4 py-3 border-2 rounded-lg transition-all duration-300
              ${errors.email 
                ? 'border-red-300 focus:border-red-500' 
                : 'border-gray-200 focus:border-blue-500'
              }
              focus:outline-none focus:ring-2 focus:ring-blue-200
            `}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
          <p className="text-gray-500 text-sm mt-1">
            予約確認メールをお送りします
          </p>
        </div>

        {/* 電話番号 */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            電話番号 <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={formData.phone || ''}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            placeholder="090-1234-5678"
            className={`
              w-full px-4 py-3 border-2 rounded-lg transition-all duration-300
              ${errors.phone 
                ? 'border-red-300 focus:border-red-500' 
                : 'border-gray-200 focus:border-blue-500'
              }
              focus:outline-none focus:ring-2 focus:ring-blue-200
            `}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
          <p className="text-gray-500 text-sm mt-1">
            緊急時のご連絡に使用します
          </p>
        </div>

        {/* 症状・要望 */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            症状・ご要望 <span className="text-gray-500">(任意)</span>
          </label>
          <textarea
            value={formData.symptoms || ''}
            onChange={(e) => handleInputChange('symptoms', e.target.value)}
            placeholder="肩こり、腰痛などの症状や、ご要望をお聞かせください..."
            rows={4}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300"
          />
          <p className="text-gray-500 text-sm mt-1">
            事前に症状をお教えいただくと、より適切な施術をご提供できます
          </p>
        </div>

        {/* 初回かどうか */}
        <div>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.isFirstTime || false}
              onChange={(e) => handleInputChange('isFirstTime', e.target.checked.toString())}
              className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <span className="text-gray-700">
              当院は初めてのご利用です
            </span>
          </label>
        </div>
      </div>

      {/* プライバシーポリシー */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h4 className="font-bold text-gray-800 mb-2">🔒 個人情報の取り扱い</h4>
        <p className="text-sm text-gray-600 leading-relaxed">
          入力いただいた個人情報は、予約管理・治療目的のみに使用し、
          第三者に提供することはありません。当院のプライバシーポリシーに従って適切に管理いたします。
        </p>
      </div>

      {/* ナビゲーションボタン */}
      <div className="flex justify-between">
        <button
          onClick={onPrev}
          className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          ← 戻る
        </button>
        
        <button
          onClick={handleSubmit}
          disabled={!isFormValid()}
          className={`
            px-8 py-3 rounded-lg font-bold text-white transition-all duration-300
            ${isFormValid()
              ? 'bg-blue-500 hover:bg-blue-600 hover:shadow-lg transform hover:scale-105'
              : 'bg-gray-300 cursor-not-allowed'
            }
          `}
        >
          次へ進む →
        </button>
      </div>
    </div>
  );
}