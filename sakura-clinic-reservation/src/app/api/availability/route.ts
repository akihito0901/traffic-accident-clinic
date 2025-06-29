import { NextRequest, NextResponse } from 'next/server';
import { calculateAvailableSlots, isTimeSlotAvailable } from '@/lib/availability-checker';

// 指定日・施術時間での空き時間スロット取得
export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const date = url.searchParams.get('date');
    const duration = url.searchParams.get('duration');
    const time = url.searchParams.get('time'); // 特定時間の可否チェック用
    
    if (!date) {
      return NextResponse.json(
        { error: 'date パラメータは必須です' },
        { status: 400 }
      );
    }
    
    if (!duration) {
      return NextResponse.json(
        { error: 'duration パラメータは必須です' },
        { status: 400 }
      );
    }
    
    const durationMinutes = parseInt(duration);
    if (isNaN(durationMinutes) || durationMinutes <= 0) {
      return NextResponse.json(
        { error: '有効な施術時間を指定してください' },
        { status: 400 }
      );
    }
    
    console.log(`🔍 空き時間チェック開始: ${date}, ${durationMinutes}分`);
    
    // 特定時間の可否チェック
    if (time) {
      const result = await isTimeSlotAvailable(date, time, durationMinutes);
      console.log(`⏰ ${time} の可否: ${result.available ? '✅ 可能' : '❌ 不可'} ${result.reason || ''}`);
      
      return NextResponse.json({
        date,
        time,
        duration: durationMinutes,
        available: result.available,
        reason: result.reason
      });
    }
    
    // 全スロットの空き時間を取得
    const availableSlots = await calculateAvailableSlots(date, durationMinutes);
    
    const availableCount = availableSlots.filter(s => s.available).length;
    console.log(`📊 ${date} の空き時間: ${availableCount}/${availableSlots.length} スロット`);
    
    return NextResponse.json({
      date,
      duration: durationMinutes,
      slots: availableSlots,
      summary: {
        total: availableSlots.length,
        available: availableCount,
        unavailable: availableSlots.length - availableCount
      }
    });
    
  } catch (error) {
    console.error('❌ 空き時間取得エラー:', error);
    return NextResponse.json(
      { 
        error: '空き時間の取得に失敗しました',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}