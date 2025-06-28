import { Reservation } from '@/types/reservation';
import { MENU_ITEMS } from './config';
import { sendEmailNotifications } from './gmail-notification';
import { createCalendarEvent } from './calendar-integration';
import { sendLineNotification } from './line-notification';
import { findUserByPhone } from './line-user-storage';

export interface NotificationResult {
  success: boolean;
  email: boolean;
  calendar: boolean;
  line: boolean;
  errors: string[];
}

// 全通知システムを統合実行
export async function sendAllNotifications(
  reservation: Reservation,
  lineUserId?: string
): Promise<NotificationResult> {
  const result: NotificationResult = {
    success: false,
    email: false,
    calendar: false,
    line: false,
    errors: []
  };

  // メニュー情報を取得
  const menu = MENU_ITEMS.find(m => m.id === reservation.menuId);
  const menuName = menu ? menu.name : '不明なメニュー';

  try {
    // 1. Gmail通知送信
    console.log('📧 Gmail通知を送信中...');
    try {
      result.email = await sendEmailNotifications(reservation, menuName);
      if (result.email) {
        console.log('✅ Gmail通知送信成功');
      } else {
        result.errors.push('Gmail通知の送信に失敗しました');
      }
    } catch (error) {
      result.errors.push(`Gmail通知エラー: ${error}`);
      console.error('Gmail通知エラー:', error);
    }

    // 2. Googleカレンダー登録
    console.log('📅 Googleカレンダーに登録中...');
    try {
      result.calendar = await createCalendarEvent(reservation, menuName);
      if (result.calendar) {
        console.log('✅ Googleカレンダー登録成功');
      } else {
        result.errors.push('Googleカレンダーの登録に失敗しました');
      }
    } catch (error) {
      result.errors.push(`Googleカレンダーエラー: ${error}`);
      console.error('Googleカレンダーエラー:', error);
    }

    // 3. LINE通知送信（電話番号で自動検索）
    console.log('📱 LINE通知を確認中...');
    try {
      const foundUserId = await findUserByPhone(reservation.phone);
      
      if (foundUserId) {
        console.log(`✅ 電話番号 ${reservation.phone} に対応するUser ID発見: ${foundUserId}`);
        result.line = await sendLineNotification(foundUserId, reservation, menuName);
        
        if (result.line) {
          console.log('✅ LINE通知送信成功');
        } else {
          result.errors.push('LINE通知の送信に失敗しました');
        }
      } else {
        console.log(`ℹ️ 電話番号 ${reservation.phone} に対応するLINE User IDが見つかりません`);
        result.errors.push('該当する電話番号のLINE User IDが見つかりませんでした');
      }
    } catch (error) {
      result.errors.push(`LINE通知エラー: ${error}`);
      console.error('LINE通知エラー:', error);
    }

    // 成功判定（メールまたはカレンダーのいずれかが成功すれば全体成功とする）
    result.success = result.email || result.calendar;

    // 結果サマリーをログ出力
    console.log('📊 通知結果サマリー:');
    console.log(`  📧 Gmail: ${result.email ? '成功' : '失敗'}`);
    console.log(`  📅 Calendar: ${result.calendar ? '成功' : '失敗'}`);
    console.log(`  📱 LINE: ${result.line ? '成功' : 'スキップ'}`);
    console.log(`  🔄 全体: ${result.success ? '成功' : '失敗'}`);

    if (result.errors.length > 0) {
      console.log('⚠️ エラー詳細:');
      result.errors.forEach(error => console.log(`  - ${error}`));
    }

    return result;

  } catch (error) {
    result.errors.push(`予期しないエラー: ${error}`);
    console.error('通知システム全体エラー:', error);
    return result;
  }
}

// 通知テスト用の関数
export async function testNotificationSystem(): Promise<void> {
  console.log('🧪 通知システムテストを開始...');
  
  const testReservation: Reservation = {
    id: 'TEST-' + Date.now(),
    menuId: 'first-free',
    date: '2025-06-28',
    time: '14:00',
    endTime: '15:00',
    name: 'テスト 太郎',
    email: 'sakuranamiki.seikotsuin@gmail.com',
    phone: '090-1234-5678',
    symptoms: 'テスト用の症状です',
    isFirstTime: true,
    createdAt: new Date().toISOString(),
    status: 'confirmed'
  };

  const result = await sendAllNotifications(testReservation);
  
  console.log('🧪 テスト結果:', result);
  
  if (result.success) {
    console.log('✅ 通知システムテスト成功！');
  } else {
    console.log('❌ 通知システムテスト失敗');
    console.log('エラー:', result.errors);
  }
}