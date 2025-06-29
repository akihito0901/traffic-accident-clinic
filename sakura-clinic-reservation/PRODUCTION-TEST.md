# 🧪 プロダクション環境テストガイド

## 🚨 現在の状況

**URL**: https://sakura-clinic-reservation-6huuheliy-akihito0901s-projects.vercel.app

**問題**: Vercel認証制限により、パブリックアクセスができない状態

## 📋 修正手順

### 1. Vercelダッシュボードで設定変更

1. **Vercelダッシュボード**にアクセス
   ```
   https://vercel.com/akihito0901s-projects/sakura-clinic-reservation
   ```

2. **Settings → Protection**
   - 「Passwordless protection」をOFFに設定
   - 「Team level」をOFFに設定
   - **Public access**を有効化

3. **Settings → Environment Variables**
   - 環境変数が正しく設定されているか確認

### 2. LIFF ID設定が必要

LINE Developers Consoleで取得したLIFF IDを追加：
```
NEXT_PUBLIC_LIFF_ID=your_liff_id_here
```

## 🔧 テスト項目

### A. 基本アクセステスト
```bash
# メインページアクセス
curl -s "https://your-domain.vercel.app/" | grep -i "桜並木駅前の整骨院"

# API動作確認
curl -s "https://your-domain.vercel.app/api/reservations/test"
```

### B. ブラウザテスト

#### 1. メインページ
- ✅ ページ読み込み成功
- ✅ プログレスバー表示
- ✅ LIFF状態表示（ブラウザ動作中）

#### 2. 予約フォームテスト
- ✅ メニュー選択
- ✅ 日時選択
- ✅ 患者情報入力
- ✅ 予約確認・送信

#### 3. 管理機能テスト
```
https://your-domain.vercel.app/admin
```
- ✅ 予約一覧表示
- ✅ データ管理機能

### C. API エンドポイントテスト

```bash
# 予約システムテスト
curl -X POST "https://your-domain.vercel.app/api/reservations" \\
  -H "Content-Type: application/json" \\
  -d '{
    "menuId": "menu1",
    "date": "2025-07-01",
    "time": "10:00",
    "name": "テスト太郎",
    "email": "test@example.com",
    "phone": "090-1234-5678",
    "notes": "テスト予約"
  }'

# LINE APIテスト
curl "https://your-domain.vercel.app/api/line/test"
```

## 📱 LINE LIFF テスト

### 前提条件
1. LIFF アプリ作成完了
2. LIFF ID環境変数設定
3. LINE Bot Webhook設定

### テスト手順

#### 1. LINE内でのアクセス
```
LINE公式アカウント → リッチメニュー → 予約する
```

#### 2. 期待される動作
- ✅ LIFF アプリ起動
- ✅ 「📱 LINE内で動作中」表示
- ✅ プロフィール自動取得
- ✅ 名前自動入力

#### 3. 予約完了テスト
- ✅ LINE通知送信
- ✅ Gmail通知送信
- ✅ Googleカレンダー登録

## 🔍 エラー診断

### よくある問題と解決方法

#### 1. 認証エラー（現在の問題）
```
症状: Vercel認証画面が表示される
解決: Settings → Protection → Public accessを有効化
```

#### 2. LIFF初期化エラー
```
症状: LIFF IDが見つからない
解決: 環境変数 NEXT_PUBLIC_LIFF_ID を設定
```

#### 3. API エラー
```
症状: 500 Internal Server Error
解決: Vercel Function Logsでエラー詳細確認
```

### ログ確認方法
```bash
# Vercel CLI でログ確認
vercel logs https://your-domain.vercel.app
```

## ✅ テスト完了チェックリスト

### Phase 1: 基本動作
- [ ] メインページアクセス成功
- [ ] 4ステップ予約フォーム動作
- [ ] 管理画面アクセス成功

### Phase 2: API機能
- [ ] 予約API動作
- [ ] Gmail通知送信
- [ ] Googleカレンダー登録
- [ ] LINE通知送信

### Phase 3: LIFF統合
- [ ] LIFF アプリ起動
- [ ] LINE内動作確認
- [ ] プロフィール自動入力
- [ ] 完全な予約フロー

## 🎯 次のステップ

テスト完了後：
1. セキュリティ最終チェック
2. 本番環境設定最適化
3. モニタリング設定
4. 運用ドキュメント作成

## 📞 緊急時連絡先

### 技術的問題
- Vercel Status: https://vercel.com/status
- LINE Developers: https://developers.line.biz/

### 本番運用開始
すべてのテストが完了したら、さくら整骨院での本番運用を開始できます！