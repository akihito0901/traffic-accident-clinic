import { NextRequest, NextResponse } from 'next/server';
import { getReservationsByUser, cancelReservation } from '@/lib/storage';

// ユーザーの予約一覧取得
export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const email = url.searchParams.get('email');

    if (!email) {
      return NextResponse.json(
        { error: 'メールアドレスが必要です' },
        { status: 400 }
      );
    }

    const reservations = await getReservationsByUser(email);

    return NextResponse.json({
      success: true,
      reservations: reservations.map(r => ({
        id: r.id,
        date: r.date,
        time: r.time,
        endTime: r.endTime,
        menuId: r.menuId,
        name: r.name,
        phone: r.phone,
        email: r.email,
        symptoms: r.symptoms,
        isFirstTime: r.isFirstTime,
        status: r.status,
        createdAt: r.createdAt
      }))
    });

  } catch (error) {
    console.error('❌ 予約取得エラー:', error);
    return NextResponse.json(
      { 
        error: '予約の取得に失敗しました',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}

// 予約キャンセル
export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const reservationId = url.searchParams.get('id');

    if (!reservationId) {
      return NextResponse.json(
        { error: '予約IDが必要です' },
        { status: 400 }
      );
    }

    const success = await cancelReservation(reservationId);

    if (!success) {
      return NextResponse.json(
        { error: '予約が見つかりません' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: '予約をキャンセルしました'
    });

  } catch (error) {
    console.error('❌ 予約キャンセルエラー:', error);
    return NextResponse.json(
      { 
        error: '予約のキャンセルに失敗しました',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}