import { NextResponse } from 'next/server';
import { createReservation, getAllReservations } from '@/lib/memory-storage';

// テスト用予約作成
export async function POST() {
  try {
    console.log('📝 テスト予約を作成中...');
    
    const testReservation = {
      menuId: 'first-free',
      date: '2025-06-30',
      time: '14:00',
      endTime: '15:00',
      name: 'テスト太郎',
      email: 'sakuranamiki.seikotsuin@gmail.com',
      phone: '090-1234-5678',
      symptoms: 'テスト用の症状です。肩こりと腰痛があります。',
      isFirstTime: true
    };

    const reservation = await createReservation(testReservation);
    
    console.log('✅ テスト予約作成成功:', reservation.id);
    
    return NextResponse.json({
      success: true,
      message: 'テスト予約が作成されました',
      reservation
    });

  } catch (error) {
    console.error('❌ テスト予約作成エラー:', error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : '不明なエラー'
    }, { status: 500 });
  }
}

// 全予約データ取得
export async function GET() {
  try {
    const reservations = await getAllReservations();
    
    return NextResponse.json({
      success: true,
      count: reservations.length,
      reservations
    });

  } catch (error) {
    console.error('❌ 予約データ取得エラー:', error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : '不明なエラー'
    }, { status: 500 });
  }
}