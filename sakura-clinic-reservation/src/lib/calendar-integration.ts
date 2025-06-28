import { Reservation } from '@/types/reservation';
// import { formatDate } from './utils'; // 現在は使用していない

// Google Calendar APIアクセストークンを取得（Gmail APIと同じ関数を再利用）
async function getGoogleAccessToken(): Promise<string | null> {
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

// 日時をISO 8601形式に変換
function createDateTime(date: string, time: string): string {
  // date: "2025-06-28", time: "14:00"
  return `${date}T${time}:00+09:00`; // 日本時間（JST）
}

// Googleカレンダーイベントを作成
export async function createCalendarEvent(reservation: Reservation, menuName: string): Promise<boolean> {
  const accessToken = await getGoogleAccessToken();
  const calendarId = process.env.GOOGLE_CALENDAR_ID || 'primary';
  
  if (!accessToken) {
    console.error('Google Calendar アクセストークンの取得に失敗しました');
    return false;
  }

  try {
    const startDateTime = createDateTime(reservation.date, reservation.time);
    const endDateTime = createDateTime(reservation.date, reservation.endTime);

    const event = {
      summary: `【予約】${reservation.name}様 - ${menuName}`,
      description: createEventDescription(reservation, menuName),
      start: {
        dateTime: startDateTime,
        timeZone: 'Asia/Tokyo'
      },
      end: {
        dateTime: endDateTime,
        timeZone: 'Asia/Tokyo'
      },
      location: '桜並木駅前の整骨院\n〒812-0895 福岡県福岡市博多区竹丘町2-4-18',
      attendees: [
        {
          email: reservation.email,
          displayName: reservation.name
        }
      ],
      reminders: {
        useDefault: false,
        overrides: [
          {
            method: 'popup',
            minutes: 60 // 1時間前にリマインダー
          },
          {
            method: 'popup',
            minutes: 15 // 15分前にリマインダー
          }
        ]
      },
      colorId: '9', // 青色
      visibility: 'private'
    };

    const response = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error('Googleカレンダー作成エラー:', error);
      return false;
    }

    const result = await response.json();
    console.log('Googleカレンダーイベント作成成功:', result.id);
    return true;

  } catch (error) {
    console.error('Googleカレンダー作成エラー:', error);
    return false;
  }
}

// イベントの説明文を作成
function createEventDescription(reservation: Reservation, menuName: string): string {
  return `
【患者情報】
• 患者名: ${reservation.name}様
• 電話番号: ${reservation.phone}
• メールアドレス: ${reservation.email}
• 初回利用: ${reservation.isFirstTime ? 'はい' : 'いいえ'}

【施術内容】
• メニュー: ${menuName}
• 料金: ${getMenuPriceText(menuName)}

${reservation.symptoms ? `【症状・要望】
${reservation.symptoms}

` : ''}【予約管理】
• 予約ID: ${reservation.id}
• 予約作成: ${new Date(reservation.createdAt).toLocaleString('ja-JP')}

【連絡先】
桜並木駅前の整骨院
TEL: 070-5530-6656
〒812-0895 福岡県福岡市博多区竹丘町2-4-18
  `.trim();
}

// メニュー名から料金テキストを取得
function getMenuPriceText(menuName: string): string {
  if (menuName.includes('初回無料')) return '無料（初回限定）';
  if (menuName.includes('一般施術')) return '保険800円';
  if (menuName.includes('産後骨盤矯正')) return 'サブスク料金のみ';
  if (menuName.includes('眼精疲労ケア（初回）')) return '1,800円';
  if (menuName.includes('眼精疲労ケア（回数券）')) return '保険800円';
  if (menuName.includes('眼精疲労ケア（単発）')) return '2,300円';
  return '要確認';
}

// 指定された予約をカレンダーから削除
export async function deleteCalendarEvent(eventId: string): Promise<boolean> {
  const accessToken = await getGoogleAccessToken();
  const calendarId = process.env.GOOGLE_CALENDAR_ID || 'primary';
  
  if (!accessToken) {
    console.error('Google Calendar アクセストークンの取得に失敗しました');
    return false;
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events/${eventId}`,
      {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error('Googleカレンダー削除エラー:', error);
      return false;
    }

    console.log('Googleカレンダーイベント削除成功');
    return true;

  } catch (error) {
    console.error('Googleカレンダー削除エラー:', error);
    return false;
  }
}