import { Reservation } from '@/types/reservation';

// メモリ内予約ストレージ（Vercel対応）
let reservations: Reservation[] = [];

// 初期データの読み込み（既存のデータファイルから）
let isInitialized = false;

async function initializeFromFile() {
  if (isInitialized) return;
  
  try {
    // 既存のデータファイルがあれば読み込み
    const response = await fetch('/api/reservations/init');
    if (response.ok) {
      const data = await response.json();
      reservations = data.reservations || [];
    }
  } catch (error) {
    console.log('初期データなし、空の配列で開始');
    reservations = [];
  }
  
  isInitialized = true;
}

// 全予約を取得
export async function getAllReservations(): Promise<Reservation[]> {
  await initializeFromFile();
  return [...reservations];
}

// 新しい予約を追加
export async function createReservation(reservation: Omit<Reservation, 'id' | 'createdAt'>): Promise<Reservation> {
  await initializeFromFile();
  
  const newReservation: Reservation = {
    ...reservation,
    id: `RES-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString(),
    status: 'confirmed'
  };
  
  reservations.push(newReservation);
  
  // 外部ストレージに保存（オプション）
  try {
    await saveToExternalStorage(reservations);
  } catch (error) {
    console.warn('外部ストレージへの保存に失敗:', error);
  }
  
  return newReservation;
}

// 指定日の予約を取得
export async function getReservationsByDate(date: string): Promise<Reservation[]> {
  const allReservations = await getAllReservations();
  return allReservations.filter(reservation => 
    reservation.date === date && reservation.status === 'confirmed'
  );
}

// 予約ID検索
export async function getReservationById(id: string): Promise<Reservation | null> {
  const allReservations = await getAllReservations();
  return allReservations.find(reservation => reservation.id === id) || null;
}

// 外部ストレージに保存（GitHub Gist APIを使用）
async function saveToExternalStorage(data: Reservation[]) {
  // 本番では GitHub Gist、Supabase、Firebase等を使用
  console.log('予約データ保存:', data.length, '件');
}