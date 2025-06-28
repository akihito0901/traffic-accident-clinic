import { NextRequest, NextResponse } from 'next/server';
import { verifyLineSignature } from '@/lib/line-notification';
import { saveLineUser } from '@/lib/line-user-storage';

// LINE Webhook エンドポイント
export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('x-line-signature') || '';

    // 署名検証
    const isValidSignature = await verifyLineSignature(body, signature);
    if (!isValidSignature) {
      console.error('LINE Webhook: 無効な署名');
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    const data = JSON.parse(body);
    
    // メッセージイベントの処理
    if (data.events) {
      for (const event of data.events) {
        if (event.type === 'message') {
          const userId = event.source.userId;
          const messageText = event.message.text || '';
          
          console.log('📱 LINE メッセージ受信:');
          console.log(`  User ID: ${userId}`);
          console.log(`  メッセージ: ${messageText}`);
          
          // User IDを自動保存
          await saveLineUser(userId);
          
          console.log('💾 User ID保存完了');
        }
        
        // 友達追加イベントも処理
        if (event.type === 'follow') {
          const userId = event.source.userId;
          console.log('👋 新しい友達追加:', userId);
          await saveLineUser(userId);
        }
      }
    }

    return NextResponse.json({ status: 'ok' });

  } catch (error) {
    console.error('LINE Webhook エラー:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}

// GET request handling for verification
export async function GET() {
  return NextResponse.json({ message: 'LINE Webhook endpoint is ready' });
}