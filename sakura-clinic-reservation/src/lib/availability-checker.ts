import { getCalendarEvents } from './calendar-integration';
import { getAllReservations } from './memory-storage';
import { BUSINESS_HOURS, SATURDAY_HOURS, TIME_SLOT_INTERVAL } from './config';
import { Reservation } from '@/types/reservation';

export interface AvailableSlot {
  time: string;
  available: boolean;
  reason?: string; // 予約不可の理由
}

export interface TimeConflict {
  start: Date;
  end: Date;
  type: 'calendar' | 'reservation';
  summary: string;
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
  
  // 土曜日（6）は特別営業時間
  if (dayOfWeek === 6) {
    return SATURDAY_HOURS;
  }
  
  return BUSINESS_HOURS;
}

// 指定日の全ての競合を取得
async function getTimeConflicts(date: string): Promise<TimeConflict[]> {
  const conflicts: TimeConflict[] = [];
  
  try {
    // Googleカレンダーから既存予定を取得
    const calendarEvents = await getCalendarEvents(date);
    for (const event of calendarEvents) {
      conflicts.push({
        start: event.startDateTime,
        end: event.endDateTime,
        type: 'calendar',
        summary: event.summary
      });
    }
    
    // メモリから既存予約を取得
    const allReservations = await getAllReservations();
    const dayReservations = allReservations.filter(r => r.date === date);
    
    for (const reservation of dayReservations) {
      const startTime = parseTimeToDate(date, reservation.time);
      const endTime = parseTimeToDate(date, reservation.endTime);
      
      conflicts.push({
        start: startTime,
        end: endTime,
        type: 'reservation',
        summary: `【予約】${reservation.name}様`
      });
    }
  } catch (error) {
    console.error('競合取得エラー:', error);
  }
  
  return conflicts;
}

// 指定日・メニューの空き時間スロットを計算
export async function calculateAvailableSlots(
  date: string, 
  durationMinutes: number
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
  
  // 既存の競合を取得
  const conflicts = await getTimeConflicts(date);
  
  console.log(`📅 ${date} - 営業時間: ${businessHours.start}〜${businessHours.end}`);
  console.log(`⏰ 施術時間: ${durationMinutes}分`);
  console.log(`🚫 競合数: ${conflicts.length}件`);
  
  // 15分間隔でスロットをチェック
  const currentSlot = new Date(startTime);
  
  while (currentSlot < endTime) {
    const slotEndTime = new Date(currentSlot.getTime() + durationMinutes * 60000);
    
    // 営業時間外チェック
    if (slotEndTime > endTime) {
      const timeStr = currentSlot.toTimeString().substring(0, 5);
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
    
    // 既存予定との競合チェック
    let hasConflict = false;
    let conflictReason = '';
    
    for (const conflict of conflicts) {
      if (hasTimeConflict(currentSlot, slotEndTime, conflict.start, conflict.end)) {
        hasConflict = true;
        conflictReason = `${conflict.type === 'calendar' ? 'カレンダー予定' : '既存予約'}と重複`;
        break;
      }
    }
    
    // スロット結果を決定
    const timeStr = currentSlot.toTimeString().substring(0, 5);
    
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
  
  const availableCount = slots.filter(s => s.available).length;
  console.log(`✅ 利用可能スロット: ${availableCount}/${slots.length}`);
  
  return slots;
}

// 特定時間に予約可能かチェック
export async function isTimeSlotAvailable(
  date: string,
  time: string,
  durationMinutes: number
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