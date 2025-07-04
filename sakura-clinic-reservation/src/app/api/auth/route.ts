import { NextRequest, NextResponse } from 'next/server';
import { loginOrRegister, LoginCredentials } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, phone, name } = body;

    if (!email || !phone) {
      return NextResponse.json(
        { error: 'メールアドレスと電話番号は必須です' },
        { status: 400 }
      );
    }

    const credentials: LoginCredentials = { email, phone };
    const user = await loginOrRegister(credentials, name);

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone
      }
    });

  } catch (error) {
    console.error('❌ 認証エラー:', error);
    return NextResponse.json(
      { 
        error: '認証に失敗しました',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}