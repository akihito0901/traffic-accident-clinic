import { BUSINESS_HOURS, SATURDAY_HOURS, TIME_SLOT_INTERVAL } from './config';
import { TimeSlot, Reservation } from '@/types/reservation';

// 時刻を分に変換 ("09:30" → 570)
export function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

// 分を時刻に変換 (570 → "09:30")
export function minutesToTime(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
}

// 営業日かどうかチェック
export function isBusinessDay(date: Date): boolean {
  const dayOfWeek = date.getDay();
  return !BUSINESS_HOURS.closedDays.includes(dayOfWeek);
}

// 指定日の全時間スロットを生成
export function generateTimeSlots(date: string): TimeSlot[] {
  const slots: TimeSlot[] = [];
  const targetDate = new Date(date);
  const dayOfWeek = targetDate.getDay(); // 0=日曜日, 6=土曜日
  
  // 土曜日の場合は特別営業時間を使用
  const isSaturday = dayOfWeek === 6;
  const hours = isSaturday ? SATURDAY_HOURS : BUSINESS_HOURS;
  
  const startMinutes = timeToMinutes(hours.start);
  const endMinutes = timeToMinutes(hours.end);
  const lunchStartMinutes = hours.lunchStart ? timeToMinutes(hours.lunchStart) : -1;
  const lunchEndMinutes = hours.lunchEnd ? timeToMinutes(hours.lunchEnd) : -1;
  
  for (let minutes = startMinutes; minutes < endMinutes; minutes += TIME_SLOT_INTERVAL) {
    const time = minutesToTime(minutes);
    
    // 昼休み時間は除外（土曜日は昼休みなし）
    if (!isSaturday && lunchStartMinutes !== -1 && minutes >= lunchStartMinutes && minutes < lunchEndMinutes) {
      continue;
    }
    
    slots.push({
      time,
      available: true // 初期値、後で既存予約をチェックして更新
    });
  }
  
  return slots;
}

// 既存予約と時間が重複するかチェック
export function isTimeConflict(
  newDate: string,
  newTime: string, 
  newDuration: number,
  existingReservations: Reservation[]
): boolean {
  const newStartMinutes = timeToMinutes(newTime);
  const newEndMinutes = newStartMinutes + newDuration;
  
  return existingReservations.some(reservation => {
    // 同じ日付の予約のみチェック
    if (reservation.date !== newDate) return false;
    
    const existingStartMinutes = timeToMinutes(reservation.time);
    const existingEndMinutes = timeToMinutes(reservation.endTime);
    
    // 時間重複チェック
    return (
      (newStartMinutes >= existingStartMinutes && newStartMinutes < existingEndMinutes) ||
      (newEndMinutes > existingStartMinutes && newEndMinutes <= existingEndMinutes) ||
      (newStartMinutes <= existingStartMinutes && newEndMinutes >= existingEndMinutes)
    );
  });
}

// 指定日の空き時間スロットを取得
export function getAvailableTimeSlots(
  date: string,
  duration: number,
  existingReservations: Reservation[]
): TimeSlot[] {
  const allSlots = generateTimeSlots(date);
  
  return allSlots.map(slot => ({
    ...slot,
    available: !isTimeConflict(date, slot.time, duration, existingReservations)
  })).filter(slot => {
    // 指定された所要時間で営業時間内に収まるかチェック
    const targetDate = new Date(date);
    const dayOfWeek = targetDate.getDay();
    const isSaturday = dayOfWeek === 6;
    const hours = isSaturday ? SATURDAY_HOURS : BUSINESS_HOURS;
    
    const startMinutes = timeToMinutes(slot.time);
    const endMinutes = startMinutes + duration;
    const businessEndMinutes = timeToMinutes(hours.end);
    
    return endMinutes <= businessEndMinutes;
  });
}

// 日付フォーマット用
export function formatDate(date: string): string {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const day = d.getDate().toString().padStart(2, '0');
  const dayNames = ['日', '月', '火', '水', '木', '金', '土'];
  const dayName = dayNames[d.getDay()];
  
  return `${year}年${month}月${day}日(${dayName})`;
}

// CSS class name utility
export function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}