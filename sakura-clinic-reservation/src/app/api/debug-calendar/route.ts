import { NextRequest, NextResponse } from 'next/server';
import { getCalendarEvents } from '@/lib/calendar-integration';

// デバッグ用：Googleカレンダーの予定を直接確認
export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const date = url.searchParams.get('date') || new Date().toISOString().split('T')[0];
    
    console.log('🔍 カレンダーデバッグ開始:', date);
    console.log('🔑 環境変数チェック:');
    console.log('- GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID ? '設定済み' : '未設定');
    console.log('- GOOGLE_CLIENT_SECRET:', process.env.GOOGLE_CLIENT_SECRET ? '設定済み' : '未設定');
    console.log('- GOOGLE_REFRESH_TOKEN:', process.env.GOOGLE_REFRESH_TOKEN ? '設定済み' : '未設定');
    console.log('- GOOGLE_CALENDAR_ID:', process.env.GOOGLE_CALENDAR_ID || 'primary');
    
    const events = await getCalendarEvents(date);
    
    console.log('📅 取得した予定数:', events.length);
    events.forEach((event, index) => {
      console.log(`📅 予定${index + 1}:`, {
        title: event.summary,
        start: event.start,
        end: event.end,
        id: event.id
      });
    });
    
    return NextResponse.json({
      date,
      environmentCheck: {
        hasClientId: !!process.env.GOOGLE_CLIENT_ID,
        hasClientSecret: !!process.env.GOOGLE_CLIENT_SECRET,
        hasRefreshToken: !!process.env.GOOGLE_REFRESH_TOKEN,
        calendarId: process.env.GOOGLE_CALENDAR_ID || 'primary'
      },
      events: events.map(event => ({
        title: event.summary,
        start: event.start,
        end: event.end,
        startTime: event.startDateTime.toTimeString().substring(0, 5),
        endTime: event.endDateTime.toTimeString().substring(0, 5),
        duration: Math.round((event.endDateTime.getTime() - event.startDateTime.getTime()) / (1000 * 60)) + '分'
      })),
      totalEvents: events.length
    });
    
  } catch (error) {
    console.error('❌ カレンダーデバッグエラー:', error);
    return NextResponse.json(
      { 
        error: 'カレンダーデバッグ失敗',
        details: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}