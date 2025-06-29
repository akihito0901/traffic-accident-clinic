import { Reservation } from '@/types/reservation';
import { MENU_ITEMS } from './config';

export interface NotificationResult {
  success: boolean;
  email: boolean;
  calendar: boolean;
  line: boolean;
  errors: string[];
}

// 安全な通知システム（エラー時は予約作成を優先）
export async function sendAllNotifications(
  reservation: Reservation,
  providedLineUserId?: string
): Promise<NotificationResult> {
  const result: NotificationResult = {
    success: true, // 予約作成を優先するため常にtrue
    email: false,
    calendar: false,
    line: false,
    errors: []
  };

  console.log('🔔 通知システム実行中（セーフモード）...');
  console.log('📝 予約情報:', {
    id: reservation.id,
    name: reservation.name,
    date: reservation.date,
    time: reservation.time,
    menuId: reservation.menuId
  });

  // メニュー情報を取得
  const menu = MENU_ITEMS.find(m => m.id === reservation.menuId);
  const menuName = menu ? menu.name : '不明なメニュー';
  console.log('🍽️ メニュー名:', menuName);

  // Gmail通知を試行（エラーでも続行）
  try {
    console.log('📧 Gmail通知送信開始...');
    console.log('📧 ADMIN_EMAIL:', process.env.ADMIN_EMAIL);
    console.log('📧 GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID ? '設定済み' : '未設定');
    
    const { sendEmailNotifications } = await import('./gmail-notification');
    const emailResult = await sendEmailNotifications(reservation, menuName);
    result.email = emailResult;
    console.log('✅ Gmail通知結果:', emailResult);
  } catch (error) {
    console.error('❌ Gmail通知エラー詳細:', error);
    console.error('❌ エラースタック:', error instanceof Error ? error.stack : 'スタック情報なし');
    result.errors.push(`Gmail通知失敗: ${error instanceof Error ? error.message : String(error)}`);
  }

  // Googleカレンダー連携を試行（エラーでも続行）
  try {
    console.log('📅 Googleカレンダー登録開始...');
    console.log('📅 GOOGLE_CALENDAR_ID:', process.env.GOOGLE_CALENDAR_ID);
    console.log('📅 GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID ? '設定済み' : '未設定');
    
    const { createCalendarEvent } = await import('./calendar-integration');
    const calendarResult = await createCalendarEvent(reservation, menuName);
    result.calendar = calendarResult;
    console.log('✅ Googleカレンダー登録結果:', calendarResult);
  } catch (error) {
    console.error('❌ Googleカレンダーエラー詳細:', error);
    console.error('❌ エラースタック:', error instanceof Error ? error.stack : 'スタック情報なし');
    result.errors.push(`Googleカレンダー失敗: ${error instanceof Error ? error.message : String(error)}`);
  }

  // LINE通知を試行（エラーでも続行）
  try {
    console.log('📱 LINE通知送信開始...');
    console.log('📱 LINE_CHANNEL_ACCESS_TOKEN:', process.env.LINE_CHANNEL_ACCESS_TOKEN ? '設定済み' : '未設定');
    console.log('📱 providedLineUserId:', providedLineUserId);
    
    const { sendLineNotification } = await import('./line-notification');
    const { findUserByPhone } = await import('./line-user-storage');
    
    let lineUserId = providedLineUserId;
    if (!lineUserId) {
      console.log('📱 電話番号でLINE User ID検索中:', reservation.phone);
      lineUserId = await findUserByPhone(reservation.phone);
      console.log('📱 検索結果:', lineUserId);
    }

    if (lineUserId) {
      console.log('📱 LINE通知送信実行中:', lineUserId);
      const lineResult = await sendLineNotification(reservation, lineUserId, menuName);
      result.line = lineResult;
      console.log('✅ LINE通知結果:', lineResult);
    } else {
      console.log('ℹ️ LINE User ID不明のためLINE通知スキップ');
      result.errors.push('LINE User ID不明');
    }
  } catch (error) {
    console.error('❌ LINE通知エラー詳細:', error);
    console.error('❌ エラースタック:', error instanceof Error ? error.stack : 'スタック情報なし');
    result.errors.push(`LINE通知失敗: ${error instanceof Error ? error.message : String(error)}`);
  }

  console.log('🎯 通知結果:', result);
  
  // 予約作成は常に成功とする
  return result;
}