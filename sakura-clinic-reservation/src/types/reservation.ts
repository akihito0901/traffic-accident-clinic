// 予約システムの型定義

export interface MenuItem {
  id: string;
  name: string;
  duration: number; // 分
  price: number;
  description: string;
  category: 'general' | 'postnatal' | 'eye-care';
}

export interface TimeSlot {
  time: string; // "09:00"形式
  available: boolean;
}

export interface ReservationForm {
  // ステップ1: メニュー選択
  menuId: string;
  
  // ステップ2: 日時選択
  date: string; // "2025-06-28"形式
  time: string; // "09:00"形式
  
  // ステップ3: 患者情報
  name: string;
  email: string;
  phone: string;
  symptoms: string;
  isFirstTime: boolean;
}

export interface Reservation extends ReservationForm {
  id: string;
  createdAt: string;
  status: 'confirmed' | 'cancelled';
  endTime: string; // 終了時刻
}

export interface BusinessHours {
  start: string; // "09:00"
  end: string;   // "18:00"
  lunchStart: string; // "12:00"
  lunchEnd: string;   // "13:00"
  closedDays: number[]; // 0=日曜日, 1=月曜日...
}