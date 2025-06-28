import { Reservation } from '@/types/reservation';
import { promises as fs } from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const RESERVATIONS_FILE = path.join(DATA_DIR, 'reservations.json');

// データディレクトリとファイルの初期化
async function ensureDataFiles(): Promise<void> {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
  
  try {
    await fs.access(RESERVATIONS_FILE);
  } catch {
    await fs.writeFile(RESERVATIONS_FILE, JSON.stringify([], null, 2));
  }
}

// 全予約を取得
export async function getAllReservations(): Promise<Reservation[]> {
  await ensureDataFiles();
  
  try {
    const data = await fs.readFile(RESERVATIONS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('予約データの読み込みエラー:', error);
    return [];
  }
}

// 新しい予約を追加
export async function createReservation(reservation: Omit<Reservation, 'id' | 'createdAt'>): Promise<Reservation> {
  await ensureDataFiles();
  
  const reservations = await getAllReservations();
  
  const newReservation: Reservation = {
    ...reservation,
    id: `RES-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString(),
    status: 'confirmed'
  };
  
  reservations.push(newReservation);
  
  await fs.writeFile(RESERVATIONS_FILE, JSON.stringify(reservations, null, 2));
  
  return newReservation;
}

// 指定日の予約を取得
export async function getReservationsByDate(date: string): Promise<Reservation[]> {
  const allReservations = await getAllReservations();
  return allReservations.filter(reservation => 
    reservation.date === date && reservation.status === 'confirmed'
  );
}

// 予約ID検索
export async function getReservationById(id: string): Promise<Reservation | null> {
  const allReservations = await getAllReservations();
  return allReservations.find(reservation => reservation.id === id) || null;
}