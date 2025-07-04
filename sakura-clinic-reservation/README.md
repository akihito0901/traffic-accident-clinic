# 桜並木駅前の整骨院 - Web完結型予約システム

シンプルで使いやすいWeb完結型の予約管理システムです。外部API設定不要で即座に利用開始できます。

## 🚀 主な機能

### 📱 4ステップ予約フォーム
- **メニュー選択**: 6つの施術プラン（初回無料〜眼精疲労ケア）
- **日時選択**: リアルタイム空き時間表示・重複予約完全防止
- **患者情報**: バリデーション付きフォーム
- **予約確認**: 詳細確認・予約完了

### 💾 シンプルなデータ管理
- **ローカルファイル**: `data/reservations.json`で予約データ管理
- **管理画面**: 予約データの閲覧・管理
- **テスト機能**: ワンクリックでテスト予約作成

### ⏰ 営業時間対応
- **平日**: 10:00-20:00（昼休み 14:00-15:00）
- **土曜**: 10:00-13:00（昼休みなし）
- **定休日**: 日曜日・祝日

## 🛠️ セットアップ

### 1. 依存関係インストール
```bash
npm install
```

### 2. 開発サーバー起動
```bash
npm run dev
```

### 3. アクセス
- **予約フォーム**: http://localhost:3000
- **管理画面**: http://localhost:3000/admin
- **予約データ**: http://localhost:3000/admin/data

## 🌟 Web完結型の利点

### ✅ 即座に利用開始
- 外部API設定不要
- 複雑な認証設定なし
- インストール後すぐに動作

### ✅ シンプルな管理
- ファイルベースのデータ管理
- 直感的な管理画面
- メンテナンスが簡単

### ✅ 安全性
- データは完全にローカル管理
- 外部サービス依存なし
- プライバシー保護

## 📊 システム構成

### フロントエンド
- **Next.js 15.3.4** + TypeScript
- **Tailwind CSS** - レスポンシブデザイン
- **React Hooks** - 状態管理

### バックエンド
- **Next.js API Routes** - RESTful API
- **ファイルベースDB** - JSON形式での永続化
- **サーバーサイド処理** - 予約管理

## 🧪 テスト機能

### 管理画面でテスト
1. http://localhost:3000/admin にアクセス
2. 「テスト予約作成」ボタンでサンプル予約作成
3. 予約データ確認で結果を確認

### API直接テスト
```bash
# テスト予約作成
curl -X POST http://localhost:3000/api/reservations \
  -H "Content-Type: application/json" \
  -d '{
    "menuId": "first-free",
    "date": "2025-07-05",
    "time": "10:00",
    "name": "テスト 太郎",
    "email": "test@example.com",
    "phone": "080-1234-5678",
    "symptoms": "テスト予約",
    "isFirstTime": true
  }'

# 予約データ確認
curl http://localhost:3000/api/reservations
```

## 📁 プロジェクト構造

```
sakura-clinic-reservation/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # 予約フォーム
│   │   ├── admin/                   # 管理画面
│   │   └── api/                     # API Routes
│   ├── components/                  # UIコンポーネント
│   ├── lib/                         # ユーティリティ・設定
│   └── types/                       # TypeScript型定義
├── data/                            # ファイルベースDB
└── README.md                        # このファイル
```

## 🚀 本番環境デプロイ

### Vercel推奨（最も簡単）
```bash
# Vercel CLI使用
npm i -g vercel
vercel

# または GitHubと連携して自動デプロイ
```

### その他のプラットフォーム
- Heroku、Railway、Netlifyなど対応
- Node.js 18+環境が必要

## 📋 データ管理

### 予約データの場所
- **ファイル**: `data/reservations.json`
- **形式**: JSON形式
- **バックアップ**: 定期的にファイルをコピーして保存推奨

### データ移行
```bash
# 既存データのバックアップ
cp data/reservations.json data/reservations.backup.json

# 新しい環境にデータ移行
cp reservations.backup.json /new/project/data/reservations.json
```

## 🆘 トラブルシューティング

### よくある問題
1. **予約が保存されない** → `data/`ディレクトリの書き込み権限を確認
2. **日時選択でエラー** → 営業時間設定を確認
3. **ビルドエラー** → `npm install`で依存関係を再インストール

### ログ確認
開発環境では詳細ログがコンソールに出力されます：
```bash
npm run dev
# コンソールで予約作成結果を確認
```

## 🔄 以前のバージョンからの移行

この版では以下の変更があります：
- LINE連携機能を削除
- Googleカレンダー連携を削除
- 外部API依存を完全に排除
- シンプルなWeb完結型に変更

---

**🏥 桜並木駅前の整骨院 Web完結型予約システム**  
交通事故治療専門 | 自己負担0円 | 夜20時まで営業