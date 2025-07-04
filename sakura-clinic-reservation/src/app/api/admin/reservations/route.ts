import { NextRequest, NextResponse } from 'next/server';
import { getAllReservations, createReservation, cancelReservation } from '@/lib/storage';
import { getUser } from '@/lib/auth';

// 管理者認証チェック
async function checkAdminAuth(request: NextRequest): Promise<boolean> {
  // 簡単な実装：ヘッダーからユーザーIDを取得
  const userId = request.headers.get('X-User-ID');
  if (!userId) return false;
  
  const user = await getUser(userId);
  return user?.role === 'admin';
}

// 全予約取得（管理者用）
export async function GET(request: NextRequest) {
  try {
    if (!(await checkAdminAuth(request))) {
      return NextResponse.json(
        { error: '管理者権限が必要です' },
        { status: 403 }
      );
    }

    const url = new URL(request.url);
    const date = url.searchParams.get('date');

    let reservations;
    if (date) {
      // 特定日の予約
      const allReservations = await getAllReservations();
      reservations = allReservations.filter(r => r.date === date);
    } else {
      // 全予約
      reservations = await getAllReservations();
    }

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
    console.error('❌ 管理者予約取得エラー:', error);
    return NextResponse.json(
      { 
        error: '予約の取得に失敗しました',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}

// 管理者による予約作成（電話予約など）
export async function POST(request: NextRequest) {
  try {
    if (!(await checkAdminAuth(request))) {
      return NextResponse.json(
        { error: '管理者権限が必要です' },
        { status: 403 }
      );
    }

    const reservationData = await request.json();
    
    const reservation = await createReservation(reservationData);

    return NextResponse.json({
      success: true,
      reservation,
      message: '予約を作成しました'
    });

  } catch (error) {
    console.error('❌ 管理者予約作成エラー:', error);
    return NextResponse.json(
      { 
        error: '予約の作成に失敗しました',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}

// 管理者による予約キャンセル
export async function DELETE(request: NextRequest) {
  try {
    if (!(await checkAdminAuth(request))) {
      return NextResponse.json(
        { error: '管理者権限が必要です' },
        { status: 403 }
      );
    }

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
    console.error('❌ 管理者予約キャンセルエラー:', error);
    return NextResponse.json(
      { 
        error: '予約のキャンセルに失敗しました',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}