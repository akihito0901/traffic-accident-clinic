import { NextRequest, NextResponse } from 'next/server';
import { sendLineNotification } from '@/lib/line-notification';

// LINE通知テスト用API
export async function POST(request: NextRequest) {
  try {
    const { userId } = await request.json();
    
    if (!userId) {
      return NextResponse.json({
        success: false,
        error: 'User IDが必要です'
      }, { status: 400 });
    }

    // テスト用予約データ
    const testReservation = {
      id: 'TEST-' + Date.now(),
      menuId: 'first-free',
      date: '2025-06-30',
      time: '14:00',
      endTime: '15:00',
      name: 'テスト太郎',
      email: 'sakuranamiki.seikotsuin@gmail.com',
      phone: '090-1234-5678',
      symptoms: 'テスト用の症状です。肩こりと腰痛があります。',
      isFirstTime: true,
      createdAt: new Date().toISOString(),
      status: 'confirmed' as const
    };

    const menuName = '初回無料体験';
    
    console.log(`📱 LINE通知テスト送信中... User ID: ${userId}`);
    
    const result = await sendLineNotification(userId, testReservation, menuName);
    
    if (result) {
      return NextResponse.json({
        success: true,
        message: 'LINE通知テスト送信成功！',
        userId
      });
    } else {
      return NextResponse.json({
        success: false,
        error: 'LINE通知送信に失敗しました'
      }, { status: 500 });
    }

  } catch (error) {
    console.error('LINE通知テストエラー:', error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : '不明なエラー'
    }, { status: 500 });
  }
}