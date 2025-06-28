import { NextRequest, NextResponse } from 'next/server';

// LINE User情報取得API
export async function POST(request: NextRequest) {
  try {
    const { username } = await request.json();
    
    if (!username) {
      return NextResponse.json({
        success: false,
        error: 'ユーザー名が必要です'
      }, { status: 400 });
    }

    const accessToken = process.env.LINE_CHANNEL_ACCESS_TOKEN;
    
    if (!accessToken) {
      return NextResponse.json({
        success: false,
        error: 'LINE_CHANNEL_ACCESS_TOKEN が設定されていません'
      }, { status: 500 });
    }

    // 残念ながら、LINE APIではユーザー名から直接User IDを取得することはできません
    // User IDはメッセージやイベントでのみ取得可能です
    
    return NextResponse.json({
      success: false,
      error: 'LINE APIの制限により、ユーザー名からUser IDを直接取得することはできません',
      info: 'User IDはお客様がBotにメッセージを送信した際にのみ取得できます',
      suggestion: 'LINE公式アカウントに「テスト」とメッセージを送信してください'
    });

  } catch (error) {
    console.error('LINE User情報取得エラー:', error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : '不明なエラー'
    }, { status: 500 });
  }
}