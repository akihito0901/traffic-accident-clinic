# 桜並木駅前の整骨院 - 予約システム

完全自動化された予約管理システムです。LINE通知、Gmail通知、Googleカレンダー統合による包括的な予約管理を提供します。

## 🚀 主な機能

### 📱 4ステップ予約フォーム
- **メニュー選択**: 6つの施術プラン（初回無料〜眼精疲労ケア）
- **日時選択**: リアルタイム空き時間表示・重複予約完全防止
- **患者情報**: バリデーション付きフォーム
- **予約確認**: 詳細確認・一括送信

### 🔔 自動通知システム
- **📧 Gmail通知**: 管理者・患者向けメール自動送信
- **📅 Googleカレンダー**: 予約の自動登録・リマインダー設定
- **📱 LINE通知**: Flexメッセージによるリッチな通知

### ⏰ 営業時間対応
- **平日**: 10:00-20:00（昼休み 14:00-15:00）
- **土曜**: 10:00-13:00（昼休みなし）
- **定休日**: 日曜日・祝日

## 🛠️ セットアップ

### 1. 依存関係インストール
```bash
npm install
```

### 2. 環境変数設定
`.env.local`ファイルを作成：

```env
# LINE Messaging API
LINE_CHANNEL_ACCESS_TOKEN=your_line_channel_access_token_here
LINE_CHANNEL_SECRET=your_line_channel_secret_here

# Google API (Gmail & Calendar)
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here
GOOGLE_REFRESH_TOKEN=your_google_refresh_token_here
GOOGLE_CALENDAR_ID=primary

# 管理者設定
ADMIN_EMAIL=admin@sakura-clinic.com
CLINIC_PHONE=070-5530-6656
CLINIC_ADDRESS=〒812-0895 福岡県福岡市博多区竹丘町2-4-18
```

### 3. 開発サーバー起動
```bash
npm run dev
```

### 4. アクセス
- **予約フォーム**: http://localhost:3000
- **管理画面**: http://localhost:3000/admin
- **予約データ**: http://localhost:3000/admin/data

## 📖 API設定ガイド

詳細な設定手順は`SETUP.md`をご確認ください：

- [LINE Messaging API設定](https://developers.line.biz/ja/)
- [Google Cloud Console設定](https://console.cloud.google.com/)
- OAuth 2.0認証・リフレッシュトークン取得

## 🧪 テスト機能

### 通知システムテスト
```bash
# 管理画面からテスト実行
http://localhost:3000/admin

# またはAPI直接呼び出し
curl -X POST http://localhost:3000/api/test-notifications
```

### テスト予約作成
```bash
# テスト予約作成
curl -X POST http://localhost:3000/api/reservations/test

# 予約データ確認
curl http://localhost:3000/api/reservations/test
```

## 📊 システム構成

### フロントエンド
- **Next.js 15.3.4** + TypeScript
- **Tailwind CSS** - レスポンシブデザイン
- **React Hooks** - 状態管理

### バックエンド
- **Next.js API Routes** - RESTful API
- **ファイルベースDB** - JSON形式での永続化
- **サーバーサイド処理** - 通知・カレンダー統合

### 通知システム
- **LINE Messaging API** - Flexメッセージ
- **Gmail API** - HTML形式メール
- **Google Calendar API** - 自動予約登録

## 🔒 セキュリティ

- 環境変数による機密情報管理
- CSRFトークン対応
- 入力バリデーション
- SQLインジェクション対策

## 📁 プロジェクト構造

```
sakura-clinic-reservation/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # 予約フォーム
│   │   ├── admin/                   # 管理画面
│   │   └── api/                     # API Routes
│   ├── components/                  # UIコンポーネント
│   ├── lib/                         # ユーティリティ・通知システム
│   └── types/                       # TypeScript型定義
├── data/                            # ファイルベースDB
├── SETUP.md                         # 詳細設定ガイド
└── README.md                        # このファイル
```

## 🚀 本番環境デプロイ

### Vercel推奨
```bash
# Vercel CLI使用
npm i -g vercel
vercel

# 環境変数設定
vercel env add LINE_CHANNEL_ACCESS_TOKEN
vercel env add GOOGLE_CLIENT_ID
# ... その他の環境変数
```

### その他のプラットフォーム
- Heroku、Railway、Netlifyなど対応
- Node.js 18+環境が必要

## 🆘 サポート

### トラブルシューティング
1. **通知が送信されない** → 環境変数確認・API設定確認
2. **予約の重複** → 時間計算ロジック確認
3. **カレンダー登録失敗** → スコープ・権限確認

### ログ確認
開発環境では詳細ログがコンソールに出力されます：
```bash
npm run dev
# コンソールで通知送信結果を確認
```

### お問い合わせ
システムに関するご質問は、プロジェクト管理者までご連絡ください。

---

**🏥 桜並木駅前の整骨院 予約システム**  
交通事故治療専門 | 自己負担0円 | 夜20時まで営業