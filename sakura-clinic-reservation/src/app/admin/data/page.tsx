'use client';

import { useState, useEffect } from 'react';
import { formatDate } from '@/lib/utils';

interface Reservation {
  id: string;
  menuId: string;
  date: string;
  time: string;
  endTime: string;
  name: string;
  email: string;
  phone: string;
  symptoms: string;
  isFirstTime: boolean;
  createdAt: string;
  status: string;
}

export default function AdminDataPage() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadReservations = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/reservations');
      const data = await response.json();

      if (data.reservations) {
        setReservations(data.reservations || []);
      } else {
        setError(data.error || '予約データの取得に失敗しました');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : '不明なエラー');
    } finally {
      setIsLoading(false);
    }
  };

  const createTestReservation = async () => {
    try {
      // 明日の10:00にテスト予約を作成
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const testDate = tomorrow.toISOString().split('T')[0];
      
      const testReservation = {
        menuId: 'first-free',
        date: testDate,
        time: '10:00',
        name: 'テスト 太郎',
        email: 'test@example.com',
        phone: '080-1234-5678',
        symptoms: 'システムテスト用の予約です',
        isFirstTime: true
      };

      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(testReservation)
      });
      
      const data = await response.json();
      
      if (data.reservation) {
        alert('✅ テスト予約が作成されました！\n予約ID: ' + data.reservation.id);
        loadReservations(); // リロード
      } else {
        alert('❌ テスト予約の作成に失敗しました: ' + data.error);
      }
    } catch (err) {
      alert('❌ エラー: ' + (err instanceof Error ? err.message : '不明なエラー'));
    }
  };

  useEffect(() => {
    loadReservations();
  }, []);

  const getMenuName = (menuId: string) => {
    const menuNames: Record<string, string> = {
      'first-free': '初回無料体験',
      'general-regular': '一般施術（2回目以降）',
      'postnatal-regular': '産後骨盤矯正（2回目以降）',
      'eye-care-first': '眼精疲労ケア（初回）',
      'eye-care-coupon': '眼精疲労ケア（回数券）',
      'eye-care-single': '眼精疲労ケア（単発）'
    };
    return menuNames[menuId] || menuId;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">🔄</div>
          <p className="text-gray-600">データを読み込み中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              📊 予約データ管理
            </h1>
            <div className="flex gap-4">
              <button
                onClick={loadReservations}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                🔄 更新
              </button>
              <button
                onClick={createTestReservation}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                ➕ テスト予約作成
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-red-800">❌ エラー: {error}</p>
            </div>
          )}

          <div className="mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800">
                📈 予約件数: <span className="font-bold">{reservations.length}件</span>
              </p>
            </div>
          </div>

          {reservations.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📝</div>
              <p className="text-gray-600 text-lg">まだ予約がありません</p>
              <p className="text-gray-500 text-sm mt-2">
                テスト予約を作成するか、実際に予約フォームから予約してみてください
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-bold text-gray-900">予約ID</th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-bold text-gray-900">患者名</th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-bold text-gray-900">日時</th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-bold text-gray-900">メニュー</th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-bold text-gray-900">連絡先</th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-bold text-gray-900">初回</th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-bold text-gray-900">作成日時</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.map((reservation) => (
                    <tr key={reservation.id} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 text-sm">
                        <code className="bg-gray-100 px-2 py-1 rounded text-xs">
                          {reservation.id}
                        </code>
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-sm font-medium">
                        {reservation.name}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-sm">
                        <div>{formatDate(reservation.date)}</div>
                        <div className="text-blue-600 font-medium">
                          {reservation.time} - {reservation.endTime}
                        </div>
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-sm">
                        {getMenuName(reservation.menuId)}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-sm">
                        <div>{reservation.phone}</div>
                        <div className="text-gray-600 text-xs">{reservation.email}</div>
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-sm">
                        {reservation.isFirstTime ? (
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-bold">
                            初回
                          </span>
                        ) : (
                          <span className="text-gray-500 text-xs">リピート</span>
                        )}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                        {new Date(reservation.createdAt).toLocaleString('ja-JP')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {reservations.length > 0 && (
            <div className="mt-6 text-center">
              <p className="text-gray-500 text-sm">
                💾 データは <code>data/reservations.json</code> に保存されています
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}