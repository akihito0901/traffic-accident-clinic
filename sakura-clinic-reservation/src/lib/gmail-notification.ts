import { Reservation } from '@/types/reservation';
import { formatDate } from './utils';

// Gmail APIアクセストークンを取得
async function getGmailAccessToken(): Promise<string | null> {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    console.error('Google API認証情報が不足しています');
    return null;
  }

  try {
    const response = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshToken,
        grant_type: 'refresh_token'
      })
    });

    const data = await response.json();
    return data.access_token;

  } catch (error) {
    console.error('アクセストークン取得エラー:', error);
    return null;
  }
}

// 管理者向けメール作成
export function createAdminEmailContent(reservation: Reservation, menuName: string) {
  const subject = `【新規予約】桜並木駅前の整骨院 - ${reservation.name}様`;
  
  const body = `
新しい予約が入りました。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
【予約詳細】
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

患者名: ${reservation.name}様
電話番号: ${reservation.phone}
メールアドレス: ${reservation.email}
日時: ${formatDate(reservation.date)} ${reservation.time}〜${reservation.endTime}
施術メニュー: ${menuName}
料金: ${getMenuPriceText(menuName)}
初回利用: ${reservation.isFirstTime ? 'はい' : 'いいえ'}

${reservation.symptoms ? `症状・要望:
${reservation.symptoms}
` : ''}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
【管理情報】
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

予約ID: ${reservation.id}
予約作成日時: ${new Date(reservation.createdAt).toLocaleString('ja-JP')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

このメールは予約システムから自動送信されています。
  `;

  return { subject, body };
}

// 患者向け確認メール作成
export function createPatientEmailContent(reservation: Reservation, menuName: string) {
  const subject = `【予約確認】桜並木駅前の整骨院 - ご予約ありがとうございます`;
  
  const body = `
${reservation.name}様

この度は桜並木駅前の整骨院をご利用いただき、ありがとうございます。
ご予約を確認いたしましたので、詳細をお知らせいたします。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
【ご予約内容】
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

予約ID: ${reservation.id}
患者名: ${reservation.name}様
日時: ${formatDate(reservation.date)} ${reservation.time}〜${reservation.endTime}
施術メニュー: ${menuName}
料金: ${getMenuPriceText(menuName)}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
【ご来院にあたって】
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• 予約時間の5分前までにお越しください
• 保険証をお持ちの方はご持参ください
• 動きやすい服装でお越しください
• キャンセルの場合は前日までにご連絡をお願いします

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
【アクセス】
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

桜並木駅前の整骨院
〒812-0895 福岡県福岡市博多区竹丘町2-4-18
TEL: 070-5530-6656

桜並木駅徒歩1分 | 駐車場完備
Google Maps: https://maps.google.com/?q=桜並木駅前の整骨院+福岡市博多区竹丘町2-4-18

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ご質問やご不明な点がございましたら、お気軽にお電話ください。
皆様のご来院を心よりお待ちしております。

桜並木駅前の整骨院
070-5530-6656
  `;

  return { subject, body };
}

// メニュー名から料金テキストを取得
function getMenuPriceText(menuName: string): string {
  if (menuName.includes('初回無料')) return '無料（初回限定）';
  if (menuName.includes('一般施術')) return '保険800円';
  if (menuName.includes('産後骨盤矯正')) return 'サブスク料金のみ';
  if (menuName.includes('眼精疲労ケア（初回）')) return '1,800円（眼精疲労1,000円 + 保険800円）';
  if (menuName.includes('眼精疲労ケア（回数券）')) return '保険800円のみ';
  if (menuName.includes('眼精疲労ケア（単発）')) return '2,300円（保険800円 + 単発1,500円）';
  return '要確認';
}

// Gmail API経由でメール送信
export async function sendGmailNotification(
  to: string, 
  subject: string, 
  body: string, 
  isAdminEmail: boolean = false
): Promise<boolean> {
  const accessToken = await getGmailAccessToken();
  
  if (!accessToken) {
    console.error('Gmail アクセストークンの取得に失敗しました');
    return false;
  }

  try {
    // メッセージを作成
    const message = [
      `To: ${to}`,
      `Subject: =?UTF-8?B?${Buffer.from(subject).toString('base64')}?=`,
      'Content-Type: text/plain; charset=UTF-8',
      'Content-Transfer-Encoding: 8bit',
      '',
      body
    ].join('\n');

    // Base64エンコード
    const encodedMessage = Buffer.from(message).toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    const response = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        raw: encodedMessage
      })
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Gmail送信エラー:', error);
      return false;
    }

    console.log(`Gmail送信成功: ${isAdminEmail ? '管理者' : '患者'}向けメール`);
    return true;

  } catch (error) {
    console.error('Gmail送信エラー:', error);
    return false;
  }
}

// 管理者と患者の両方にメール送信
export async function sendEmailNotifications(reservation: Reservation, menuName: string): Promise<boolean> {
  const adminEmail = process.env.ADMIN_EMAIL;
  
  if (!adminEmail) {
    console.error('ADMIN_EMAIL が設定されていません');
    return false;
  }

  try {
    // 管理者向けメール
    const adminContent = createAdminEmailContent(reservation, menuName);
    const adminResult = await sendGmailNotification(
      adminEmail, 
      adminContent.subject, 
      adminContent.body, 
      true
    );

    // 患者向けメール
    const patientContent = createPatientEmailContent(reservation, menuName);
    const patientResult = await sendGmailNotification(
      reservation.email, 
      patientContent.subject, 
      patientContent.body, 
      false
    );

    return adminResult && patientResult;

  } catch (error) {
    console.error('メール通知送信エラー:', error);
    return false;
  }
}