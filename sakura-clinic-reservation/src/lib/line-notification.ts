import { Reservation } from '@/types/reservation';
import { formatDate } from './utils';

// LINE Messaging APIのFlexメッセージを作成
export function createReservationFlexMessage(reservation: Reservation, menuName: string) {
  return {
    type: "flex",
    altText: "🎉 予約完了通知",
    contents: {
      type: "bubble",
      size: "kilo",
      header: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: "🎉 予約完了！",
            weight: "bold",
            size: "xl",
            color: "#ffffff"
          }
        ],
        backgroundColor: "#27AE60",
        paddingAll: "20px"
      },
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "text",
                text: "予約詳細",
                weight: "bold",
                size: "md",
                color: "#333333"
              }
            ],
            margin: "lg"
          },
          {
            type: "separator",
            margin: "md"
          },
          {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "box",
                layout: "baseline",
                contents: [
                  {
                    type: "text",
                    text: "📅 日時",
                    size: "sm",
                    color: "#666666",
                    flex: 2
                  },
                  {
                    type: "text",
                    text: `${formatDate(reservation.date)} ${reservation.time}-${reservation.endTime}`,
                    size: "sm",
                    color: "#333333",
                    weight: "bold",
                    flex: 5,
                    wrap: true
                  }
                ],
                spacing: "sm"
              },
              {
                type: "box",
                layout: "baseline",
                contents: [
                  {
                    type: "text",
                    text: "👨‍⚕️ 施術",
                    size: "sm",
                    color: "#666666",
                    flex: 2
                  },
                  {
                    type: "text",
                    text: menuName,
                    size: "sm",
                    color: "#333333",
                    weight: "bold",
                    flex: 5,
                    wrap: true
                  }
                ],
                spacing: "sm"
              },
              {
                type: "box",
                layout: "baseline",
                contents: [
                  {
                    type: "text",
                    text: "💰 料金",
                    size: "sm",
                    color: "#666666",
                    flex: 2
                  },
                  {
                    type: "text",
                    text: getMenuPrice(menuName),
                    size: "sm",
                    color: "#27AE60",
                    weight: "bold",
                    flex: 5
                  }
                ],
                spacing: "sm"
              },
              {
                type: "box",
                layout: "baseline",
                contents: [
                  {
                    type: "text",
                    text: "📞 連絡先",
                    size: "sm",
                    color: "#666666",
                    flex: 2
                  },
                  {
                    type: "text",
                    text: process.env.CLINIC_PHONE || "070-5530-6656",
                    size: "sm",
                    color: "#3498DB",
                    weight: "bold",
                    flex: 5
                  }
                ],
                spacing: "sm"
              }
            ],
            spacing: "md",
            margin: "lg"
          }
        ]
      },
      footer: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "button",
            action: {
              type: "uri",
              label: "院の場所を確認",
              uri: "https://maps.google.com/?q=桜並木駅前の整骨院+福岡市博多区竹丘町2-4-18"
            },
            style: "primary",
            color: "#3498DB"
          },
          {
            type: "text",
            text: "ご来院をお待ちしております！",
            size: "sm",
            color: "#666666",
            align: "center",
            margin: "md"
          }
        ]
      }
    }
  };
}

// メニュー名から料金テキストを取得
function getMenuPrice(menuName: string): string {
  if (menuName.includes('初回無料')) return '無料';
  if (menuName.includes('一般施術')) return '保険800円';
  if (menuName.includes('産後骨盤矯正')) return 'サブスク料金のみ';
  if (menuName.includes('眼精疲労ケア（初回）')) return '1,800円';
  if (menuName.includes('眼精疲労ケア（回数券）')) return '保険800円';
  if (menuName.includes('眼精疲労ケア（単発）')) return '2,300円';
  return '要確認';
}

// LINE通知を送信
export async function sendLineNotification(userId: string, reservation: Reservation, menuName: string) {
  const accessToken = process.env.LINE_CHANNEL_ACCESS_TOKEN;
  
  if (!accessToken) {
    console.error('LINE_CHANNEL_ACCESS_TOKEN が設定されていません');
    return false;
  }

  try {
    const message = createReservationFlexMessage(reservation, menuName);
    
    const response = await fetch('https://api.line.me/v2/bot/message/push', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify({
        to: userId,
        messages: [message]
      })
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('LINE通知送信エラー:', error);
      return false;
    }

    console.log('LINE通知送信成功');
    return true;

  } catch (error) {
    console.error('LINE通知送信エラー:', error);
    return false;
  }
}

// Webhook用のLINE署名検証
export async function verifyLineSignature(body: string, signature: string): Promise<boolean> {
  const channelSecret = process.env.LINE_CHANNEL_SECRET;
  
  if (!channelSecret || !signature) {
    return false;
  }

  const crypto = await import('crypto');
  const expectedSignature = crypto
    .createHmac('sha256', channelSecret)
    .update(body)
    .digest('base64');

  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(`sha256=${expectedSignature}`)
  );
}