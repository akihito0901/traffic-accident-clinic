import { getReservationsByDate } from './storage';
import { BUSINESS_HOURS, SATURDAY_HOURS, TIME_SLOT_INTERVAL } from './config';

export interface AvailableSlot {
  time: string;
  available: boolean;
  reason?: string;
}

// 時間文字列をDateオブジェクトに変換
function parseTimeToDate(date: string, time: string): Date {
  const [hours, minutes] = time.split(':').map(Number);
  const dateObj = new Date(date);
  dateObj.setHours(hours, minutes, 0, 0);
  return dateObj;
}

// 時間の重複チェック
function hasTimeConflict(
  newStart: Date, 
  newEnd: Date, 
  existingStart: Date, 
  existingEnd: Date
): boolean {
  return newStart < existingEnd && newEnd > existingStart;
}

// 営業時間の取得
function getBusinessHours(date: string) {
  const dateObj = new Date(date);
  const dayOfWeek = dateObj.getDay();
  
  if (dayOfWeek === 6) {
    return SATURDAY_HOURS;
  }
  
  return BUSINESS_HOURS;
}

// 指定日の空き時間スロットを計算
export async function calculateAvailableSlots(
  date: string, 
  durationMinutes: number = 60
): Promise<AvailableSlot[]> {
  const slots: AvailableSlot[] = [];
  const businessHours = getBusinessHours(date);
  
  // 営業時間を設定
  const startTime = parseTimeToDate(date, businessHours.start);
  const endTime = parseTimeToDate(date, businessHours.end);
  
  // 昼休み時間を設定
  let lunchStart: Date | null = null;
  let lunchEnd: Date | null = null;
  
  if (businessHours.lunchStart && businessHours.lunchEnd) {
    lunchStart = parseTimeToDate(date, businessHours.lunchStart);
    lunchEnd = parseTimeToDate(date, businessHours.lunchEnd);
  }
  
  // 既存の予約を取得
  const existingReservations = await getReservationsByDate(date);
  
  // 15分間隔でスロットをチェック
  const currentSlot = new Date(startTime);
  
  while (currentSlot < endTime) {
    const slotEndTime = new Date(currentSlot.getTime() + durationMinutes * 60000);
    const timeStr = `${currentSlot.getHours().toString().padStart(2, '0')}:${currentSlot.getMinutes().toString().padStart(2, '0')}`;
    
    // 営業時間外チェック
    if (slotEndTime > endTime) {
      slots.push({
        time: timeStr,
        available: false,
        reason: '営業時間外'
      });
      break;
    }
    
    // 昼休み時間チェック
    let isDuringLunch = false;
    if (lunchStart && lunchEnd) {
      if (hasTimeConflict(currentSlot, slotEndTime, lunchStart, lunchEnd)) {
        isDuringLunch = true;
      }
    }
    
    // 既存予約との競合チェック
    let hasConflict = false;
    let conflictReason = '';
    
    for (const reservation of existingReservations) {
      const reservationStart = parseTimeToDate(date, reservation.time);
      const reservationEnd = parseTimeToDate(date, reservation.endTime);
      
      if (hasTimeConflict(currentSlot, slotEndTime, reservationStart, reservationEnd)) {
        hasConflict = true;
        conflictReason = `予約済み（${reservation.name}様）`;
        break;
      }
    }
    
    // スロット結果を決定
    if (isDuringLunch) {
      slots.push({
        time: timeStr,
        available: false,
        reason: '昼休み'
      });
    } else if (hasConflict) {
      slots.push({
        time: timeStr,
        available: false,
        reason: conflictReason
      });
    } else {
      slots.push({
        time: timeStr,
        available: true
      });
    }
    
    // 次のスロットへ
    currentSlot.setMinutes(currentSlot.getMinutes() + TIME_SLOT_INTERVAL);
  }
  
  return slots;
}

// 特定時間に予約可能かチェック
export async function isTimeSlotAvailable(
  date: string,
  time: string,
  durationMinutes: number = 60
): Promise<{ available: boolean; reason?: string }> {
  const slots = await calculateAvailableSlots(date, durationMinutes);
  const targetSlot = slots.find(s => s.time === time);
  
  if (!targetSlot) {
    return { available: false, reason: '無効な時間です' };
  }
  
  return {
    available: targetSlot.available,
    reason: targetSlot.reason
  };
}