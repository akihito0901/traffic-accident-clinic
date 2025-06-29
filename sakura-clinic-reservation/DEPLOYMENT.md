# 🚀 Vercel デプロイガイド

## 1. Vercelアカウント準備

### Vercelアカウント作成
1. [Vercel](https://vercel.com)にアクセス
2. GitHubアカウントでサインアップ
3. プロジェクトのGitHubリポジトリを確認

## 2. デプロイ手順

### A. GitHub連携でのデプロイ（推奨）

1. **Vercelダッシュボードで「New Project」**
   ```
   https://vercel.com/new
   ```

2. **GitHubリポジトリを選択**
   - `sakura-clinic-reservation` を選択
   - Import Project

3. **プロジェクト設定**
   ```
   Project Name: sakura-clinic-reservation
   Framework Preset: Next.js
   Root Directory: /
   ```

### B. Vercel CLIでのデプロイ

```bash
# Vercel CLIインストール
npm i -g vercel

# プロジェクトディレクトリで実行
cd /home/sanji/projects/traffic-accident-clinic/sakura-clinic-reservation
vercel

# 初回デプロイ設定
? Set up and deploy? [Y/n] y
? Which scope? Your Name
? Link to existing project? [y/N] n
? What's your project's name? sakura-clinic-reservation
? In which directory is your code located? ./
```

## 3. 環境変数設定

### Vercelダッシュボードで環境変数設定

1. **Settings → Environment Variables**

2. **必須環境変数を追加**
   ```
   LINE_CHANNEL_ACCESS_TOKEN = [YOUR_TOKEN]
   LINE_CHANNEL_SECRET = [YOUR_SECRET]
   GOOGLE_CLIENT_ID = [YOUR_CLIENT_ID]
   GOOGLE_CLIENT_SECRET = [YOUR_CLIENT_SECRET]
   GOOGLE_REFRESH_TOKEN = [YOUR_REFRESH_TOKEN]
   ADMIN_EMAIL = sakuranamiki.seikotsuin@gmail.com
   CLINIC_PHONE = 070-5530-6656
   CLINIC_ADDRESS = "〒812-0895 福岡県福岡市博多区竹丘町2-4-18"
   GOOGLE_CALENDAR_ID = primary
   ```

3. **本番環境用追加設定**
   ```
   NODE_ENV = production
   LIFF_ID = [LIFF_APP_IDを後で設定]
   ```

## 4. ドメイン設定

### カスタムドメイン（オプション）
1. **Settings → Domains**
2. 独自ドメインを追加
3. DNS設定を更新

### デフォルトドメイン
```
https://sakura-clinic-reservation.vercel.app
```

## 5. デプロイ後の確認

### 基本動作確認
- ✅ トップページアクセス
- ✅ 予約フォーム動作
- ✅ API エンドポイント
- ✅ 管理画面アクセス

### API テスト
```bash
# 予約システムテスト
curl https://sakura-clinic-reservation.vercel.app/api/reservations/test

# LINE Webhook テスト
curl https://sakura-clinic-reservation.vercel.app/api/line/test
```

## 6. LINE Bot設定更新

### Webhook URL更新
```
https://sakura-clinic-reservation.vercel.app/api/line/webhook
```

### LIFF URL設定
```
https://sakura-clinic-reservation.vercel.app
```

## 7. トラブルシューティング

### よくある問題と解決方法

1. **環境変数が読み込まれない**
   - Vercelダッシュボードで環境変数を再確認
   - デプロイを再実行

2. **API エラー**
   - Function logs を確認
   - エラーログを分析

3. **ビルドエラー**
   - package.json の依存関係を確認
   - TypeScript エラーを修正

### ログ確認方法
```bash
# Vercel CLI でログ確認
vercel logs [deployment-url]
```

## 8. 自動デプロイ設定

### GitHub連携で自動デプロイ
- mainブランチへのpushで自動デプロイ
- Pull Request時のプレビューデプロイ

## 🎉 デプロイ完了！

本番環境URL：`https://sakura-clinic-reservation.vercel.app`

次のステップ：LINE LIFF設定