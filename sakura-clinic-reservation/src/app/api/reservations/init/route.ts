import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// 既存のデータファイルから初期データを読み込み
export async function GET() {
  try {
    const dataFile = path.join(process.cwd(), 'data', 'reservations.json');
    
    try {
      const data = await fs.readFile(dataFile, 'utf-8');
      const reservations = JSON.parse(data);
      return NextResponse.json({ reservations });
    } catch (fileError) {
      // ファイルが存在しない場合は空配列を返す
      return NextResponse.json({ reservations: [] });
    }
    
  } catch (error) {
    console.error('初期データ読み込みエラー:', error);
    return NextResponse.json({ reservations: [] });
  }
}