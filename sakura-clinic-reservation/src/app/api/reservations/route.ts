import { NextRequest, NextResponse } from 'next/server';
import { getAllReservations, createReservation, getReservationsByDate } from '@/lib/storage';
import { sendAllNotifications } from '@/lib/notification-system';
import { MENU_ITEMS } from '@/lib/config';

// 全予約取得
export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const date = url.searchParams.get('date');

    if (date) {
      // 特定日の予約取得
      const reservations = await getReservationsByDate(date);
      return NextResponse.json({ reservations });
    } else {
      // 全予約取得
      const reservations = await getAllReservations();
      return NextResponse.json({ reservations });
    }
  } catch (error) {
    console.error('予約取得エラー:', error);
    return NextResponse.json(
      { error: '予約の取得に失敗しました' },
      { status: 500 }
    );
  }
}

// 新規予約作成
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // バリデーション
    const requiredFields = ['menuId', 'date', 'time', 'name', 'email', 'phone'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `${field} は必須項目です` },
          { status: 400 }
        );
      }
    }

    // メニュー情報取得
    const menu = MENU_ITEMS.find(m => m.id === body.menuId);
    if (!menu) {
      return NextResponse.json(
        { error: '無効なメニューIDです' },
        { status: 400 }
      );
    }

    // 終了時刻計算
    const [hours, minutes] = body.time.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes + menu.duration;
    const endHours = Math.floor(totalMinutes / 60);
    const endMins = totalMinutes % 60;
    const endTime = `${endHours.toString().padStart(2, '0')}:${endMins.toString().padStart(2, '0')}`;

    // 予約作成
    const reservation = await createReservation({
      ...body,
      endTime,
      isFirstTime: body.isFirstTime || false
    });

    // 通知システム実行
    console.log('🔔 通知システムを実行中...');
    const notificationResult = await sendAllNotifications(reservation, body.lineUserId);
    
    if (!notificationResult.success) {
      console.warn('⚠️ 一部の通知が失敗しましたが、予約は正常に作成されました');
      console.warn('通知エラー:', notificationResult.errors);
    } else {
      console.log('✅ 全ての通知が正常に送信されました');
    }

    return NextResponse.json({
      reservation,
      notifications: notificationResult
    });

  } catch (error) {
    console.error('予約作成エラー:', error);
    return NextResponse.json(
      { error: '予約の作成に失敗しました' },
      { status: 500 }
    );
  }
}