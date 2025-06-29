import { NextRequest, NextResponse } from 'next/server';

// 簡単なテストAPI
export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const date = url.searchParams.get('date') || new Date().toISOString().split('T')[0];
    
    // まず環境変数をチェック
    const envCheck = {
      hasClientId: !!process.env.GOOGLE_CLIENT_ID,
      hasClientSecret: !!process.env.GOOGLE_CLIENT_SECRET,
      hasRefreshToken: !!process.env.GOOGLE_REFRESH_TOKEN,
      calendarId: process.env.GOOGLE_CALENDAR_ID || 'primary'
    };
    
    return NextResponse.json({
      message: 'テストAPI動作中',
      date,
      environmentCheck: envCheck
    });
    
  } catch (error) {
    return NextResponse.json(
      { 
        error: 'テストAPI失敗',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}