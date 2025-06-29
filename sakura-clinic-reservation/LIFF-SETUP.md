# 🔗 LINE LIFF設定ガイド

## 1. LIFF アプリの作成

### LINE Developers Console
1. [LINE Developers Console](https://developers.line.biz/console/)にアクセス
2. 既存のChannelを選択（さくら整骨院予約システム）
3. **「LIFF」タブ**を選択

### LIFF アプリ追加
1. **「追加」ボタンをクリック**

2. **LIFF アプリ設定**
   ```
   LIFF app name: さくら整骨院予約システム
   Size: Full
   Endpoint URL: https://sakura-clinic-reservation-72k8rl6o3-akihito0901s-projects.vercel.app
   Scope: profile, openid
   Bot link feature: On (Aggressive)
   ```

3. **「追加」をクリック**

4. **LIFF ID をコピー**
   - 例: `2006362468-XXXXXXX`

## 2. 環境変数追加

### Vercelダッシュボードで環境変数追加
```
LIFF_ID=2006362468-XXXXXXX
NEXT_PUBLIC_LIFF_ID=2006362468-XXXXXXX
```

### ローカル開発用（.env.local）
```bash
# LIFF設定
LIFF_ID=2006362468-XXXXXXX
NEXT_PUBLIC_LIFF_ID=2006362468-XXXXXXX
```

## 3. LIFF対応コードの実装

### LIFFクライアント設定ファイル
`src/lib/liff.ts` - すでに実装済み

### メインページでLIFF初期化
- ユーザー情報取得
- LINE内での動作検知
- プロフィール情報自動入力

## 4. LINEリッチメニュー設定

### リッチメニュー作成
1. **LINE Official Account Manager**
2. **「リッチメニュー」→「作成」**

### メニュー設定
```
テンプレート: カスタム（1200x405）
アクション: ウェブページ
URL: https://sakura-clinic-reservation-72k8rl6o3-akihito0901s-projects.vercel.app
```

## 5. LINE Bot Menu設定

### メインメニューボタン
```
予約する → LIFF URL
問い合わせ → 電話（070-5530-6656）
アクセス → 地図URL
```

## 6. 動作確認

### LINE内で確認
1. **LINE公式アカウントを友だち追加**
2. **リッチメニューをタップ**
3. **LIFF アプリが起動**
4. **予約フォームが表示**

### 確認項目
- ✅ LIFF アプリ起動
- ✅ ユーザー情報自動取得
- ✅ 予約機能動作
- ✅ 通知送信

## 7. トラブルシューティング

### よくある問題

1. **LIFF IDが見つからない**
   - LINE Developers Consoleで確認
   - 環境変数の再設定

2. **ユーザー情報が取得できない**
   - Scopeの確認（profile, openid）
   - LIFF初期化の確認

3. **LINE内で表示されない**
   - Endpoint URLの確認
   - HTTPSかどうか確認

## 8. セキュリティ設定

### CORS設定
```javascript
// next.config.ts で設定済み
headers: [
  {
    source: '/(.*)',
    headers: [
      {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN'
      }
    ]
  }
]
```

## 🎯 完了後の状態

### ユーザー体験
1. LINE公式アカウントで「予約する」タップ
2. LIFF アプリで予約フォーム開く
3. LINE プロフィール情報が自動入力
4. 予約完了で LINE 通知

### 管理者体験
1. 予約受信でGmail通知
2. Googleカレンダー自動登録
3. LINE での予約確認通知
4. 管理画面で予約管理

## 🚀 次のステップ
- カスタムドメイン設定
- SSL証明書設定
- 本番運用開始