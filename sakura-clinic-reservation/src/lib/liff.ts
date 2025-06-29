import liff from '@line/liff';

const LIFF_ID = process.env.NEXT_PUBLIC_LIFF_ID || '2007660798-prebW7D7';

// LIFF初期化
export async function initializeLiff(): Promise<boolean> {
  try {
    await liff.init({ liffId: LIFF_ID });
    console.log('✅ LIFF初期化成功');
    return true;
  } catch (error) {
    console.error('❌ LIFF初期化エラー:', error);
    return false;
  }
}

// LINE User ID取得
export async function getLineUserId(): Promise<string | null> {
  try {
    if (!liff.isLoggedIn()) {
      liff.login();
      return null;
    }

    const profile = await liff.getProfile();
    console.log('📱 LINE User ID取得成功:', profile.userId);
    return profile.userId;
  } catch (error) {
    console.error('❌ LINE User ID取得エラー:', error);
    return null;
  }
}

// LINEプロフィール取得
export async function getLineProfile() {
  try {
    if (!liff.isLoggedIn()) {
      return null;
    }

    const profile = await liff.getProfile();
    return {
      userId: profile.userId,
      displayName: profile.displayName,
      pictureUrl: profile.pictureUrl,
      statusMessage: profile.statusMessage
    };
  } catch (error) {
    console.error('❌ LINEプロフィール取得エラー:', error);
    return null;
  }
}

// LIFF環境判定
export function isInLiff(): boolean {
  return liff.isInClient();
}

// LIFFアプリを閉じる
export function closeLiff(): void {
  if (liff.isInClient()) {
    liff.closeWindow();
  }
}