'use client';

import { useState } from 'react';
import { ReservationForm, MenuItem } from '@/types/reservation';
import { formatDate } from '@/lib/utils';
// import { createReservation } from '@/lib/storage'; // APIルート使用に変更

interface ConfirmationStepProps {
  formData: ReservationForm;
  selectedMenu: MenuItem;
  onPrev: () => void;
  lineUserId?: string | null;
}

export default function ConfirmationStep({ 
  formData, 
  selectedMenu, 
  onPrev,
  lineUserId 
}: ConfirmationStepProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [reservationId, setReservationId] = useState('');

  // 終了時刻を計算
  const calculateEndTime = (startTime: string, duration: number): string => {
    const [hours, minutes] = startTime.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes + duration;
    const endHours = Math.floor(totalMinutes / 60);
    const endMins = totalMinutes % 60;
    return `${endHours.toString().padStart(2, '0')}:${endMins.toString().padStart(2, '0')}`;
  };

  const endTime = calculateEndTime(formData.time, selectedMenu.duration);

  const handleConfirm = async () => {
    setIsSubmitting(true);
    
    try {
      // APIルートで予約を作成
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          isFirstTime: formData.isFirstTime || false,
          lineUserId: lineUserId || undefined
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || '予約の作成に失敗しました');
      }

      const { reservation, notifications } = data;
      
      setReservationId(reservation.id);
      setIsCompleted(true);
      
      // 通知結果をログ出力
      console.log('🔔 通知システム結果:', notifications);
      if (!notifications.success) {
        console.warn('⚠️ 一部の通知が失敗しましたが、予約は正常に作成されました');
        console.warn('通知エラー:', notifications.errors);
      } else {
        console.log('✅ 全ての通知が正常に送信されました');
      }
      
    } catch (error) {
      console.error('予約作成エラー:', error);
      alert('予約の作成に失敗しました。もう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isCompleted) {
    return (
      <div className="text-center space-y-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <div className="text-4xl">✅</div>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold text-green-600 mb-2">
            予約完了！
          </h2>
          <p className="text-gray-600">
            ご予約が確定いたしました
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-left">
          <h3 className="font-bold text-green-800 mb-4">📋 予約詳細</h3>
          <div className="space-y-2 text-green-700">
            <p><span className="font-medium">予約ID:</span> {reservationId}</p>
            <p><span className="font-medium">患者名:</span> {formData.name}様</p>
            <p><span className="font-medium">日時:</span> {formatDate(formData.date)} {formData.time}〜{endTime}</p>
            <p><span className="font-medium">施術:</span> {selectedMenu.name} ({selectedMenu.duration}分)</p>
            <p><span className="font-medium">料金:</span> {selectedMenu.price === 0 ? '無料' : `¥${selectedMenu.price.toLocaleString()}`}</p>
            <p><span className="font-medium">電話番号:</span> {formData.phone}</p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-bold text-blue-800 mb-2">📞 お問い合わせ</h4>
          <p className="text-blue-700 text-sm">
            ご質問やご変更がございましたら、お気軽にお電話ください<br />
            <span className="font-bold text-lg">070-5530-6656</span>
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h4 className="font-bold text-yellow-800 mb-2">📍 アクセス</h4>
          <div className="text-yellow-700 text-sm">
            <p className="font-medium">桜並木駅前の整骨院</p>
            <p>〒812-0895 福岡県福岡市博多区竹丘町2-4-18</p>
            <p>桜並木駅徒歩1分 | 駐車場完備</p>
          </div>
        </div>

        <button
          onClick={() => window.location.reload()}
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-bold transition-colors"
        >
          新しい予約を作成
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          予約内容をご確認ください
        </h2>
        <p className="text-gray-600">
          内容に間違いがなければ「予約を確定する」ボタンを押してください
        </p>
      </div>

      {/* 予約詳細 */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">📋 予約詳細</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 施術情報 */}
          <div className="space-y-3">
            <div>
              <span className="text-sm text-gray-500">施術メニュー</span>
              <p className="font-bold text-gray-900">{selectedMenu.name}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">所要時間</span>
              <p className="font-bold text-gray-900">{selectedMenu.duration}分</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">料金</span>
              <p className="font-bold text-blue-600 text-lg">
                {selectedMenu.price === 0 ? '無料' : `¥${selectedMenu.price.toLocaleString()}`}
              </p>
            </div>
          </div>

          {/* 日時情報 */}
          <div className="space-y-3">
            <div>
              <span className="text-sm text-gray-500">予約日</span>
              <p className="font-bold text-gray-900">{formatDate(formData.date)}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">時間</span>
              <p className="font-bold text-gray-900">{formData.time} 〜 {endTime}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 患者情報 */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">👤 患者情報</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div>
              <span className="text-sm text-gray-500">お名前</span>
              <p className="font-bold text-gray-900">{formData.name}様</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">電話番号</span>
              <p className="font-bold text-gray-900">{formData.phone}</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div>
              <span className="text-sm text-gray-500">メールアドレス</span>
              <p className="font-bold text-gray-900">{formData.email}</p>
            </div>
            {formData.isFirstTime && (
              <div>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-bold">
                  初回利用
                </span>
              </div>
            )}
          </div>
        </div>

        {formData.symptoms && (
          <div className="mt-4">
            <span className="text-sm text-gray-500">症状・ご要望</span>
            <p className="text-gray-900 bg-white p-3 rounded border mt-1">
              {formData.symptoms}
            </p>
          </div>
        )}
      </div>

      {/* 注意事項 */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="font-bold text-yellow-800 mb-2">⚠️ ご注意</h4>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• 予約時間の5分前までにお越しください</li>
          <li>• キャンセルの場合は前日までにご連絡をお願いします</li>
          <li>• 保険証をお持ちの方はご持参ください</li>
          <li>• 動きやすい服装でお越しください</li>
        </ul>
      </div>

      {/* ナビゲーションボタン */}
      <div className="flex justify-between">
        <button
          onClick={onPrev}
          disabled={isSubmitting}
          className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
        >
          ← 戻る
        </button>
        
        <button
          onClick={handleConfirm}
          disabled={isSubmitting}
          className={`
            px-8 py-3 rounded-lg font-bold text-white transition-all duration-300
            ${isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-green-500 hover:bg-green-600 hover:shadow-lg transform hover:scale-105'
            }
          `}
        >
          {isSubmitting ? '予約中...' : '予約を確定する ✅'}
        </button>
      </div>
    </div>
  );
}