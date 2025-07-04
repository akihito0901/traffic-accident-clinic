'use client';

import { useState, useEffect } from 'react';
import { ReservationForm } from '@/types/reservation';
import { MENU_ITEMS } from '@/lib/config';
import MenuSelection from '@/components/MenuSelection';
import DateTimeSelection from '@/components/DateTimeSelection';
import PatientInfoForm from '@/components/PatientInfoForm';
import ConfirmationStep from '@/components/ConfirmationStep';
import { User } from '@/lib/auth';

export default function ReservationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<ReservationForm>>({});
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [showLogin, setShowLogin] = useState(false);

  const updateFormData = (data: Partial<ReservationForm>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const selectedMenu = formData.menuId ? 
    MENU_ITEMS.find(menu => menu.id === formData.menuId) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900 text-center">
            桜並木駅前の整骨院 - 予約フォーム
          </h1>
          
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              {['メニュー選択', '日時選択', '患者情報', '予約確認'].map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                    ${index + 1 <= currentStep 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-200 text-gray-500'
                    }
                  `}>
                    {index + 1}
                  </div>
                  <span className={`ml-2 text-sm ${
                    index + 1 <= currentStep ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {step}
                  </span>
                  {index < 3 && (
                    <div className={`ml-4 w-8 h-0.5 ${
                      index + 1 < currentStep ? 'bg-blue-500' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {currentStep === 1 && (
            <MenuSelection 
              formData={formData}
              updateFormData={updateFormData}
              onNext={nextStep}
            />
          )}
          
          {currentStep === 2 && selectedMenu && (
            <DateTimeSelection
              formData={formData}
              updateFormData={updateFormData}
              onNext={nextStep}
              onPrev={prevStep}
              selectedMenu={selectedMenu}
            />
          )}
          
          {currentStep === 3 && (
            <PatientInfoForm
              formData={formData}
              updateFormData={updateFormData}
              onNext={nextStep}
              onPrev={prevStep}
            />
          )}
          
          {currentStep === 4 && selectedMenu && (
            <ConfirmationStep
              formData={formData as ReservationForm}
              selectedMenu={selectedMenu}
              onPrev={prevStep}
            />
          )}
        </div>
      </main>
    </div>
  );
}
