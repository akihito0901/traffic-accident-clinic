import { promises as fs } from 'fs';
import path from 'path';

interface LineUser {
  userId: string;
  lastMessageAt: string;
  messageCount: number;
  phone?: string; // 予約時に電話番号を紐付け
  name?: string;  // 予約時に名前を紐付け
}

const USERS_FILE = path.join(process.cwd(), 'data', 'line-users.json');

// User ID保存
export async function saveLineUser(userId: string): Promise<void> {
  try {
    let users: LineUser[] = [];
    
    try {
      const data = await fs.readFile(USERS_FILE, 'utf-8');
      users = JSON.parse(data);
    } catch {
      // ファイルが存在しない場合は空配列
    }

    // 既存ユーザーを更新または新規追加
    const existingUserIndex = users.findIndex(u => u.userId === userId);
    
    if (existingUserIndex >= 0) {
      users[existingUserIndex].lastMessageAt = new Date().toISOString();
      users[existingUserIndex].messageCount += 1;
    } else {
      users.push({
        userId,
        lastMessageAt: new Date().toISOString(),
        messageCount: 1
      });
    }

    await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
    console.log(`✅ LINE User ID保存: ${userId}`);

  } catch (error) {
    console.error('LINE User ID保存エラー:', error);
  }
}

// 最新のUser ID取得（最後にメッセージを送った人）
export async function getLatestLineUser(): Promise<string | null> {
  try {
    const data = await fs.readFile(USERS_FILE, 'utf-8');
    const users: LineUser[] = JSON.parse(data);
    
    if (users.length === 0) return null;
    
    // 最新のメッセージ送信者を取得
    const latestUser = users.sort((a, b) => 
      new Date(b.lastMessageAt).getTime() - new Date(a.lastMessageAt).getTime()
    )[0];
    
    return latestUser.userId;

  } catch (error) {
    console.error('最新LINE User ID取得エラー:', error);
    return null;
  }
}

// 電話番号でUser ID検索
export async function findUserByPhone(phone: string): Promise<string | null> {
  try {
    const data = await fs.readFile(USERS_FILE, 'utf-8');
    const users: LineUser[] = JSON.parse(data);
    
    const user = users.find(u => u.phone === phone);
    return user ? user.userId : null;

  } catch (error) {
    console.error('電話番号でのUser ID検索エラー:', error);
    return null;
  }
}

// 予約時に電話番号と名前を紐付け
export async function linkUserToReservation(userId: string, phone: string, name: string): Promise<void> {
  try {
    const data = await fs.readFile(USERS_FILE, 'utf-8');
    const users: LineUser[] = JSON.parse(data);
    
    const userIndex = users.findIndex(u => u.userId === userId);
    if (userIndex >= 0) {
      users[userIndex].phone = phone;
      users[userIndex].name = name;
      
      await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
      console.log(`✅ User ID ${userId} に電話番号 ${phone} を紐付け`);
    }

  } catch (error) {
    console.error('ユーザー情報紐付けエラー:', error);
  }
}

// 全User ID取得
export async function getAllLineUsers(): Promise<LineUser[]> {
  try {
    const data = await fs.readFile(USERS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}