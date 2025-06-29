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

  // 日付選択時に空き時間を取得（Googleカレンダー統合版）
  useEffect(() => {
    if (selectedDate) {
      setLoading(true);
      
      // 新しいavailabilityAPIを使用
      const loadTimeSlots = async () => {
        try {
          console.log(`🔍 空き時間チェック: ${selectedDate}, ${selectedMenu.duration}分`);
          const response = await fetch(`/api/availability?date=${selectedDate}&duration=${selectedMenu.duration}`);
          const data = await response.json();
          
          if (response.ok) {
            // APIレスポンスをTimeSlot形式に変換
            const slots: TimeSlot[] = data.slots.map((slot: any) => ({
              time: slot.time,
              available: slot.available,
              reason: slot.reason
            }));
            
            setAvailableTimeSlots(slots);
            console.log(`✅ 空き時間取得成功: ${data.summary.available}/${data.summary.total} スロット`);
          } else {
            console.error('空き時間取得エラー:', data.error);
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
            <div>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {availableTimeSlots.map((slot) => (
                  <div key={slot.time} className="relative">
                    <button
                      onClick={() => handleTimeSelect(slot.time)}
                      disabled={!slot.available}
                      title={slot.available ? '' : slot.reason || '予約不可'}
                      className={`
                        w-full p-3 rounded-lg border-2 transition-all duration-300 font-medium relative
                        ${selectedTime === slot.time
                          ? 'border-blue-500 bg-blue-500 text-white'
                          : slot.available
                            ? 'border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-900'
                            : 'border-red-100 bg-red-50 text-red-400 cursor-not-allowed'
                        }
                      `}
                    >
                      {slot.time}
                      {!slot.available && (
                        <span className="absolute -top-1 -right-1 text-red-500 text-lg">
                          🚫
                        </span>
                      )}
                    </button>
                    {!slot.available && slot.reason && (
                      <div className="absolute top-full left-0 right-0 mt-1 p-1 bg-red-600 text-white text-xs rounded shadow-lg opacity-0 hover:opacity-100 transition-opacity z-10 pointer-events-none">
                        {slot.reason}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* 空き状況サマリー */}
              <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <span className="w-3 h-3 bg-blue-100 border-2 border-gray-200 rounded mr-2"></span>
                      空き: {availableTimeSlots.filter(s => s.available).length}件
                    </span>
                    <span className="flex items-center">
                      <span className="w-3 h-3 bg-red-50 border-2 border-red-100 rounded mr-2"></span>
                      予約済み: {availableTimeSlots.filter(s => !s.available).length}件
                    </span>
                  </div>
                  <span className="text-gray-600">
                    施術時間: {selectedMenu.duration}分
                  </span>
                </div>
              </div>
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