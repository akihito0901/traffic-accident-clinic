'use client';

import { useState, useEffect } from 'react';
import { ReservationForm, MenuItem, TimeSlot } from '@/types/reservation';
import { RESERVATION_DAYS_AHEAD } from '@/lib/config';
import { isBusinessDay, getAvailableTimeSlots, formatDate } from '@/lib/utils';
// import { getReservationsByDate } from '@/lib/storage'; // APIルート使用に変更

interface DateTimeSelectionProps {
  formData: Partial<ReservationForm>;
  updateFormData: (data: Partial<ReservationForm>) => void;
  onNext: () => void;
  onPrev: () => void;
  selectedMenu: MenuItem;
}

export default function DateTimeSelection({ 
  formData, 
  updateFormData, 
  onNext, 
  onPrev, 
  selectedMenu 
}: DateTimeSelectionProps) {
  const [selectedDate, setSelectedDate] = useState(formData.date || '');
  const [selectedTime, setSelectedTime] = useState(formData.time || '');
  const [availableTimeSlots, setAvailableTimeSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState(false);

  // 予約可能な日付を生成
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i <= RESERVATION_DAYS_AHEAD; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // 営業日のみ追加
      if (isBusinessDay(date)) {
        const dateString = date.toISOString().split('T')[0];
        dates.push({
          date: dateString,
          formatted: formatDate(dateString),
          isToday: i === 0
        });
      }
    }
    
    return dates;
  };

  const availableDates = generateAvailableDates();

  // 日付選択時に空き時間を取得
  useEffect(() => {
    if (selectedDate) {
      setLoading(true);
      
      // APIルートから既存予約を取得
      const loadTimeSlots = async () => {
        try {
          const response = await fetch(`/api/reservations?date=${selectedDate}`);
          const data = await response.json();
          
          if (response.ok) {
            const existingReservations = data.reservations || [];
            const slots = getAvailableTimeSlots(selectedDate, selectedMenu.duration, existingReservations);
            setAvailableTimeSlots(slots);
          } else {
            console.error('予約データ取得エラー:', data.error);
            setAvailableTimeSlots([]);
          }
        } catch (error) {
          console.error('時間スロット取得エラー:', error);
          setAvailableTimeSlots([]);
        } finally {
          setLoading(false);
        }
      };
      
      loadTimeSlots();
    }
  }, [selectedDate, selectedMenu.duration]);

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setSelectedTime(''); // 時間選択をリセット
    updateFormData({ date, time: '' });
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    updateFormData({ time });
  };

  const handleNext = () => {
    if (selectedDate && selectedTime) {
      onNext();
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          日時を選択してください
        </h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <p className="text-blue-800 font-medium">
            選択中: {selectedMenu.name} ({selectedMenu.duration}分)
          </p>
        </div>
      </div>

      {/* 日付選択 */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">📅 日付を選択</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {availableDates.map(({ date, formatted, isToday }) => (
            <button
              key={date}
              onClick={() => handleDateSelect(date)}
              className={`
                p-3 rounded-lg border-2 transition-all duration-300 text-left
                ${selectedDate === date
                  ? 'border-blue-500 bg-blue-100 text-blue-800'
                  : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                }
              `}
            >
              <div className="text-sm font-bold">
                {formatted}
              </div>
              {isToday && (
                <div className="text-xs text-blue-600 font-medium mt-1">
                  本日
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 時間選択 */}
      {selectedDate && (
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            ⏰ 時間を選択
            {loading && <span className="text-sm text-gray-500 ml-2">読み込み中...</span>}
          </h3>
          
          {!loading && availableTimeSlots.length === 0 && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
              <p className="text-gray-600">
                選択された日付に空きがありません。<br />
                他の日付をお選びください。
              </p>
            </div>
          )}
          
          {!loading && availableTimeSlots.length > 0 && (
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {availableTimeSlots.map((slot) => (
                <button
                  key={slot.time}
                  onClick={() => handleTimeSelect(slot.time)}
                  disabled={!slot.available}
                  className={`
                    p-3 rounded-lg border-2 transition-all duration-300 font-medium
                    ${selectedTime === slot.time
                      ? 'border-blue-500 bg-blue-500 text-white'
                      : slot.available
                        ? 'border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-900'
                        : 'border-gray-100 bg-gray-100 text-gray-400 cursor-not-allowed'
                    }
                  `}
                >
                  {slot.time}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 選択内容確認 */}
      {selectedDate && selectedTime && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-bold text-green-800 mb-2">✅ 選択内容</h4>
          <div className="text-green-700">
            <p><span className="font-medium">日時:</span> {formatDate(selectedDate)} {selectedTime}〜</p>
            <p><span className="font-medium">所要時間:</span> {selectedMenu.duration}分</p>
          </div>
        </div>
      )}

      {/* ナビゲーションボタン */}
      <div className="flex justify-between">
        <button
          onClick={onPrev}
          className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          ← 戻る
        </button>
        
        <button
          onClick={handleNext}
          disabled={!selectedDate || !selectedTime}
          className={`
            px-8 py-3 rounded-lg font-bold text-white transition-all duration-300
            ${selectedDate && selectedTime
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