import { MenuItem, BusinessHours } from '@/types/reservation';

// 営業時間設定
export const BUSINESS_HOURS: BusinessHours = {
  start: "10:00",
  end: "20:00",
  lunchStart: "14:00", 
  lunchEnd: "15:00",
  closedDays: [0] // 日曜日・祝日休み
};

// 土曜日の特別営業時間
export const SATURDAY_HOURS = {
  start: "10:00",
  end: "13:00",
  lunchStart: "", // 土曜日は昼休みなし
  lunchEnd: ""
};

// 施術メニュー
export const MENU_ITEMS: MenuItem[] = [
  {
    id: "first-free",
    name: "初回無料体験",
    duration: 60,
    price: 0,
    description: "一般施術・産後骨盤矯正対応（60分・完全無料）",
    category: "general"
  },
  {
    id: "general-regular",
    name: "一般施術（2回目以降）",
    duration: 15,
    price: 800,
    description: "15分・保険800円",
    category: "general"
  },
  {
    id: "postnatal-regular", 
    name: "産後骨盤矯正（2回目以降）",
    duration: 60,
    price: 0, // サブスク料金のみ
    description: "60分・サブスク料金のみ",
    category: "postnatal"
  },
  {
    id: "eye-care-first",
    name: "眼精疲労ケア（初回）",
    duration: 30,
    price: 1800, // 眼精疲労1,000円 + 保険800円
    description: "30分・眼精疲労1,000円 + 保険800円",
    category: "eye-care"
  },
  {
    id: "eye-care-coupon",
    name: "眼精疲労ケア（回数券）",
    duration: 30,
    price: 800, // 保険800円のみ
    description: "30分・保険800円のみ",
    category: "eye-care"
  },
  {
    id: "eye-care-single",
    name: "眼精疲労ケア（単発）",
    duration: 30,
    price: 2300, // 保険800円 + 単発1,500円
    description: "30分・保険800円 + 単発1,500円",
    category: "eye-care"
  }
];

// 予約可能な期間（今日から2週間先まで）
export const RESERVATION_DAYS_AHEAD = 14;

// 15分刻みの時間スロット
export const TIME_SLOT_INTERVAL = 15; // 分