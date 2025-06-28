import { NextResponse } from 'next/server';
import { testNotificationSystem } from '@/lib/notification-system';

export async function POST() {
  try {
    console.log('📡 通知テストAPI呼び出し');
    
    // 通知システムテストを実行
    await testNotificationSystem();
    
    return NextResponse.json({
      success: true,
      message: '通知システムテストが完了しました。詳細はサーバーログを確認してください。'
    });
    
  } catch (error) {
    console.error('通知テストAPIエラー:', error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : '不明なエラーが発生しました'
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Notification Test API',
    usage: 'POST /api/test-notifications to run notification system test',
    note: 'Make sure to set up environment variables first'
  });
}