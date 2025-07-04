// シンプルなユーザー認証システム

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}

export interface LoginCredentials {
  email: string;
  phone: string;
}

// メモリ内ユーザーストレージ（実際のプロダクションではDBを使用）
let users: User[] = [];

// ユーザー登録/ログイン
export async function loginOrRegister(credentials: LoginCredentials, name?: string): Promise<User> {
  const { email, phone } = credentials;
  
  // 既存ユーザーを検索
  let user = users.find(u => u.email === email || u.phone === phone);
  
  if (!user) {
    // 新規ユーザー作成
    user = {
      id: generateUserId(),
      name: name || 'ゲスト',
      email,
      phone,
      createdAt: new Date().toISOString()
    };
    users.push(user);
    console.log('✅ 新規ユーザー登録:', user.email);
  } else {
    console.log('✅ 既存ユーザーログイン:', user.email);
  }
  
  return user;
}

// ユーザーID生成
function generateUserId(): string {
  return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// ユーザー取得
export async function getUser(userId: string): Promise<User | null> {
  return users.find(u => u.id === userId) || null;
}

// 全ユーザー取得（管理者用）
export async function getAllUsers(): Promise<User[]> {
  return users;
}