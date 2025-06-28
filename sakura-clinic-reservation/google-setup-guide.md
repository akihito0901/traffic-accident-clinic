# Google API設定ガイド（詳細手順）

## Step 1: Google Cloud Consoleでプロジェクト作成

1. **Google Cloud Consoleにアクセス**
   - https://console.cloud.google.com/
   - Googleアカウントでログイン

2. **新しいプロジェクト作成**
   - 左上の「プロジェクトを選択」→「新しいプロジェクト」
   - プロジェクト名: `sakura-clinic-reservation`
   - 組織: なし（個人の場合）
   - 「作成」をクリック

## Step 2: API有効化

3. **Gmail API有効化**
   - 左メニュー「APIとサービス」→「ライブラリ」
   - 検索で「Gmail API」を入力
   - Gmail API をクリック→「有効にする」

4. **Google Calendar API有効化**
   - 検索で「Google Calendar API」を入力
   - Google Calendar API をクリック→「有効にする」

## Step 3: OAuth 2.0認証情報作成

5. **認証情報作成**
   - 左メニュー「APIとサービス」→「認証情報」
   - 「+認証情報を作成」→「OAuth 2.0 クライアントID」

6. **同意画面設定（初回のみ）**
   - ユーザータイプ: 「外部」を選択
   - アプリ名: `桜並木駅前の整骨院予約システム`
   - ユーザーサポートメール: あなたのGmailアドレス
   - デベロッパーの連絡先情報: 同じメールアドレス
   - 「保存して次へ」

7. **スコープ設定**
   - 「スコープを追加または削除」をクリック
   - 以下のスコープを追加:
     ```
     https://www.googleapis.com/auth/gmail.send
     https://www.googleapis.com/auth/calendar
     ```
   - 「保存して次へ」

8. **OAuth 2.0クライアントID作成**
   - アプリケーションタイプ: 「ウェブアプリケーション」
   - 名前: `sakura-clinic-reservation-client`
   - 承認済みリダイレクトURI: `http://localhost:3000/auth/callback`
   - 「作成」をクリック

9. **認証情報をコピー**
   - クライアントID: `YOUR_CLIENT_ID`
   - クライアントシークレット: `YOUR_CLIENT_SECRET`
   - **これらをメモ帳に保存してください！**

## Step 4: リフレッシュトークン取得

10. **認証URL作成**
    以下のURLをブラウザで開く（CLIENT_IDを置き換えてください）:
    ```
    https://accounts.google.com/o/oauth2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=http://localhost:3000/auth/callback&scope=https://www.googleapis.com/auth/gmail.send%20https://www.googleapis.com/auth/calendar&access_type=offline&response_type=code&prompt=consent
    ```

11. **Googleアカウントで承認**
    - アカウントを選択
    - 「続行」をクリック
    - 権限を許可
    - リダイレクトURLからcodeパラメータをコピー

12. **リフレッシュトークン取得**
    以下のコマンドを実行（値を置き換えてください）:
    ```bash
    curl -X POST https://oauth2.googleapis.com/token \
      -d "client_id=YOUR_CLIENT_ID" \
      -d "client_secret=YOUR_CLIENT_SECRET" \
      -d "code=YOUR_AUTHORIZATION_CODE" \
      -d "grant_type=authorization_code" \
      -d "redirect_uri=http://localhost:3000/auth/callback"
    ```

13. **レスポンスからrefresh_tokenをコピー**
    ```json
    {
      "access_token": "...",
      "refresh_token": "YOUR_REFRESH_TOKEN",  ← これをコピー
      "scope": "...",
      "token_type": "Bearer"
    }
    ```

## 取得した値を.env.localに設定

```env
GOOGLE_CLIENT_ID=YOUR_CLIENT_ID
GOOGLE_CLIENT_SECRET=YOUR_CLIENT_SECRET  
GOOGLE_REFRESH_TOKEN=YOUR_REFRESH_TOKEN
GOOGLE_CALENDAR_ID=primary
ADMIN_EMAIL=your-email@gmail.com
```

この手順が完了したら、次はLINE APIの設定に進みます。