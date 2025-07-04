import { NextRequest, NextResponse } from 'next/server';
import { calculateAvailableSlots } from '@/lib/availability';

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const date = url.searchParams.get('date');
    const duration = parseInt(url.searchParams.get('duration') || '60');

    if (!date) {
      return NextResponse.json(
        { error: 'date parameter is required' },
        { status: 400 }
      );
    }

    const availableSlots = await calculateAvailableSlots(date, duration);
    
    return NextResponse.json({
      date,
      duration,
      slots: availableSlots,
      totalSlots: availableSlots.length,
      availableSlots: availableSlots.filter(s => s.available).length
    });

  } catch (error) {
    console.error('❌ 空き時間チェックエラー:', error);
    return NextResponse.json(
      { 
        error: '空き時間チェックに失敗しました',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}