'use client';

import { useState } from 'react';

export default function GoogleSetupPage() {
  const [clientId, setClientId] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const generateAuthUrl = () => {
    if (!clientId) {
      alert('Client IDを入力してください');
      return;
    }

    const baseUrl = 'https://accounts.google.com/o/oauth2/auth';
    const params = new URLSearchParams({
      client_id: clientId,
      redirect_uri: 'http://localhost:3000/auth/callback',
      scope: 'https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/calendar',
      access_type: 'offline',
      response_type: 'code',
      prompt: 'consent'
    });

    const authUrl = `${baseUrl}?${params.toString()}`;
    window.open(authUrl, '_blank');
  };

  const getRefreshToken = async () => {
    if (!clientId || !clientSecret || !authCode) {
      alert('全ての値を入力してください');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          client_id: clientId,
          client_secret: clientSecret,
          code: authCode,
          grant_type: 'authorization_code',
          redirect_uri: 'http://localhost:3000/auth/callback'
        })
      });

      const data = await response.json();

      if (data.refresh_token) {
        setRefreshToken(data.refresh_token);
        alert('✅ リフレッシュトークン取得成功！');
      } else {
        alert('❌ エラー: ' + JSON.stringify(data));
      }

    } catch (error) {
      alert('❌ エラー: ' + error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            🔧 Google API設定ツール
          </h1>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Step 1: Google Cloud Console設定
              </h2>
              <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-4">
                <p className="text-blue-800 text-sm">
                  まず<a href="https://console.cloud.google.com/" target="_blank" className="underline font-bold">Google Cloud Console</a>で以下を実行:
                </p>
                <ol className="text-blue-700 text-sm mt-2 list-decimal list-inside space-y-1">
                  <li>プロジェクト作成（sakura-clinic-reservation）</li>
                  <li>Gmail API有効化</li>
                  <li>Google Calendar API有効化</li>
                  <li>OAuth 2.0クライアントID作成</li>
                </ol>
              </div>
            </div>

            {/* Step 2 */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Step 2: 認証情報入力
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Client ID
                  </label>
                  <input
                    type="text"
                    value={clientId}
                    onChange={(e) => setClientId(e.target.value)}
                    placeholder="123456789-abcdefg.apps.googleusercontent.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Client Secret
                  </label>
                  <input
                    type="text"
                    value={clientSecret}
                    onChange={(e) => setClientSecret(e.target.value)}
                    placeholder="GOCSPX-xxxxxxxxxx"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <button
                  onClick={generateAuthUrl}
                  disabled={!clientId}
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-300 transition-colors"
                >
                  🔗 認証URLを開く
                </button>
              </div>
            </div>

            {/* Step 3 */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Step 3: 認証コード入力
              </h2>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mb-4">
                <p className="text-yellow-800 text-sm">
                  認証後、リダイレクトURLから<code>code=</code>パラメータの値をコピーして貼り付けてください
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    認証コード
                  </label>
                  <input
                    type="text"
                    value={authCode}
                    onChange={(e) => setAuthCode(e.target.value)}
                    placeholder="4/0AdEu5..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <button
                  onClick={getRefreshToken}
                  disabled={!clientId || !clientSecret || !authCode || isLoading}
                  className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 disabled:bg-gray-300 transition-colors"
                >
                  {isLoading ? '🔄 取得中...' : '🔑 リフレッシュトークン取得'}
                </button>
              </div>
            </div>

            {/* Step 4 - Result */}
            {refreshToken && (
              <div className="border border-green-200 rounded-lg p-6 bg-green-50">
                <h2 className="text-xl font-bold text-green-800 mb-4">
                  ✅ Step 4: 設定完了
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-green-700 mb-2">
                      リフレッシュトークン
                    </label>
                    <textarea
                      value={refreshToken}
                      readOnly
                      rows={3}
                      className="w-full px-4 py-2 border border-green-300 rounded-lg bg-white font-mono text-sm"
                    />
                  </div>

                  <div className="bg-white border border-green-300 rounded p-4">
                    <h3 className="font-bold text-green-800 mb-2">📋 .env.localファイルに追加:</h3>
                    <pre className="text-sm text-green-700 whitespace-pre-wrap">
{`GOOGLE_CLIENT_ID=${clientId}
GOOGLE_CLIENT_SECRET=${clientSecret}
GOOGLE_REFRESH_TOKEN=${refreshToken}
GOOGLE_CALENDAR_ID=primary
ADMIN_EMAIL=your-email@gmail.com`}
                    </pre>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 text-center">
            <a 
              href="/admin" 
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm"
            >
              ← 管理画面に戻る
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}