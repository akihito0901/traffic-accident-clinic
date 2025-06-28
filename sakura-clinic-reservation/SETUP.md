# 桜並木駅前の整骨院 - 予約システム設定ガイド

## 📋 概要
このシステムは予約完了時に以下の通知を自動送信します：
- 📧 **Gmail通知**: 管理者・患者向けメール
- 📅 **Googleカレンダー**: 自動予約登録
- 📱 **LINE通知**: 患者向けFlexメッセージ（要設定）

## 🔧 必要な設定

### 1. LINE Messaging API設定

1. **LINE Developersコンソール**にアクセス
   - https://developers.line.biz/ja/

2. **新しいプロバイダー・チャネル作成**
   - プロバイダー名: 桜並木駅前の整骨院
   - チャネル名: 予約通知システム
   - チャネルタイプ: Messaging API

3. **必要な情報を取得**
   ```
   Channel Access Token (長期)
   Channel Secret
   ```

4. **環境変数に設定**
   ```env
   LINE_CHANNEL_ACCESS_TOKEN=your_channel_access_token_here
   LINE_CHANNEL_SECRET=your_channel_secret_here
   ```

### 2. Google API設定

#### 2.1 Google Cloud Console設定

1. **Google Cloud Console**にアクセス
   - https://console.cloud.google.com/

2. **新しいプロジェクト作成**
   - プロジェクト名: sakura-clinic-reservation

3. **API有効化**
   - Gmail API
   - Google Calendar API

4. **OAuth 2.0認証情報作成**
   - 認証情報 > OAuth 2.0 クライアントID
   - アプリケーションタイプ: Webアプリケーション
   - 承認済みリダイレクトURI: http://localhost:3000

#### 2.2 リフレッシュトークン取得

以下のURLにアクセスしてコードを取得：
```
https://accounts.google.com/o/oauth2/auth?
client_id=YOUR_CLIENT_ID&
redirect_uri=http://localhost:3000&
scope=https://www.googleapis.com/auth/gmail.send%20https://www.googleapis.com/auth/calendar&
access_type=offline&
response_type=code
```

取得したコードでリフレッシュトークンを取得：
```bash
curl -X POST https://oauth2.googleapis.com/token \
  -d client_id=YOUR_CLIENT_ID \
  -d client_secret=YOUR_CLIENT_SECRET \
  -d code=YOUR_AUTHORIZATION_CODE \
  -d grant_type=authorization_code \
  -d redirect_uri=http://localhost:3000
```

#### 2.3 環境変数設定

```env
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here
GOOGLE_REFRESH_TOKEN=your_google_refresh_token_here
GOOGLE_CALENDAR_ID=primary
ADMIN_EMAIL=admin@sakura-clinic.com
```

### 3. 院の情報設定

```env
CLINIC_PHONE=070-5530-6656
CLINIC_ADDRESS=〒812-0895 福岡県福岡市博多区竹丘町2-4-18
```

## 🚀 セットアップ手順

### 1. 依存関係インストール
```bash
npm install
```

### 2. 環境変数ファイル作成
`.env.local`ファイルに上記の設定を記述

### 3. 開発サーバー起動
```bash
npm run dev
```

### 4. 通知システムテスト
```bash
# ブラウザで以下にアクセス
http://localhost:3000/api/test-notifications
```

または

```bash
curl -X POST http://localhost:3000/api/test-notifications
```

## 📱 LINEリッチメニュー設定

### 1. リッチメニュー作成
LINE Official Account Managerで以下を設定：
- サイズ: 2500x1686px
- タップ領域: 予約ボタン
- アクション: https://your-domain.com （予約フォームURL）

### 2. 友だち追加リンク取得
LINE Official Account ManagerでQRコードまたは友だち追加リンクを取得

## 🔧 トラブルシューティング

### Gmail API エラー
```
Error: insufficient authentication scopes
```
→ OAuth 2.0スコープにGmail APIが含まれているか確認

### Google Calendar API エラー
```
Error: Calendar not found
```
→ `GOOGLE_CALENDAR_ID`を'primary'に設定

### LINE API エラー
```
Error: Invalid channel access token
```
→ Channel Access Tokenが正しく設定されているか確認

## 📊 システム監視

### ログ確認
開発環境では以下でログ確認：
```bash
npm run dev
# コンソールに通知送信結果が表示されます
```

### 予約データ確認
```bash
# data/reservations.json ファイルで予約データ確認
cat data/reservations.json
```

## 🔄 本番環境デプロイ

### Vercel推奨設定
```bash
# Vercel環境変数設定
vercel env add LINE_CHANNEL_ACCESS_TOKEN
vercel env add LINE_CHANNEL_SECRET
vercel env add GOOGLE_CLIENT_ID
vercel env add GOOGLE_CLIENT_SECRET
vercel env add GOOGLE_REFRESH_TOKEN
vercel env add ADMIN_EMAIL
vercel env add GOOGLE_CALENDAR_ID
```

## 📞 サポート

設定でご不明な点がございましたら、システム管理者までお問い合わせください。