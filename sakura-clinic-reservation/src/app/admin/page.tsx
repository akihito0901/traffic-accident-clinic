'use client';

import { useState } from 'react';

export default function AdminPage() {
  const [testResult, setTestResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [lineUserId, setLineUserId] = useState('');
  const [lineTestResult, setLineTestResult] = useState<any>(null);
  const [isLineLoading, setIsLineLoading] = useState(false);

  const runNotificationTest = async () => {
    setIsLoading(true);
    setTestResult(null);

    try {
      const response = await fetch('/api/test-notifications', {
        method: 'POST'
      });
      
      const data = await response.json();
      setTestResult(data);

    } catch (error) {
      setTestResult({
        success: false,
        error: error instanceof Error ? error.message : '不明なエラー'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const runLineTest = async () => {
    if (!lineUserId.trim()) {
      alert('LINE User IDを入力してください');
      return;
    }

    setIsLineLoading(true);
    setLineTestResult(null);

    try {
      const response = await fetch('/api/line/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: lineUserId.trim()
        })
      });
      
      const data = await response.json();
      setLineTestResult(data);

    } catch (error) {
      setLineTestResult({
        success: false,
        error: error instanceof Error ? error.message : '不明なエラー'
      });
    } finally {
      setIsLineLoading(false);
    }
  };

  const checkEnvironmentVariables = () => {
    const requiredEnvs = [
      'LINE_CHANNEL_ACCESS_TOKEN',
      'LINE_CHANNEL_SECRET', 
      'GOOGLE_CLIENT_ID',
      'GOOGLE_CLIENT_SECRET',
      'GOOGLE_REFRESH_TOKEN',
      'ADMIN_EMAIL'
    ];

    return requiredEnvs.map(env => ({
      name: env,
      set: !!process.env[env]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            🔧 予約システム管理画面
          </h1>

          {/* 環境変数チェック */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              📋 環境変数設定状況
            </h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-4">
                ⚠️ セキュリティ上、実際の値は表示されません。設定済みかどうかのみ確認できます。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'LINE_CHANNEL_ACCESS_TOKEN',
                  'LINE_CHANNEL_SECRET', 
                  'GOOGLE_CLIENT_ID',
                  'GOOGLE_CLIENT_SECRET',
                  'GOOGLE_REFRESH_TOKEN',
                  'ADMIN_EMAIL'
                ].map(env => (
                  <div key={env} className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${
                      process.env.NODE_ENV === 'development' ? 'bg-yellow-400' : 'bg-gray-400'
                    }`}></div>
                    <span className="text-sm font-mono">{env}</span>
                    <span className="text-xs text-gray-500">
                      (本番環境でのみ判定可能)
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 通知テスト */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              🧪 通知システムテスト
            </h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <p className="text-blue-800 text-sm">
                このテストでは以下の通知を送信します：<br />
                • 📧 Gmail（管理者・患者向けメール）<br />
                • 📅 Googleカレンダー（テスト予約の登録）<br />
                • 📱 LINE通知（User ID未設定のためスキップ）
              </p>
            </div>
            
            <button
              onClick={runNotificationTest}
              disabled={isLoading}
              className={`
                px-6 py-3 rounded-lg font-bold text-white transition-all duration-300
                ${isLoading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-500 hover:bg-blue-600 hover:shadow-lg'
                }
              `}
            >
              {isLoading ? '🔄 テスト実行中...' : '🚀 通知テスト実行'}
            </button>
          </div>

          {/* LINE通知テスト */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              📱 LINE通知テスト
            </h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
              <p className="text-yellow-800 text-sm mb-2">
                <strong>LINE User IDの取得方法：</strong>
              </p>
              <ol className="text-yellow-700 text-sm list-decimal list-inside space-y-1">
                <li>桜並木駅前の整骨院のLINE公式アカウントに「テスト」とメッセージを送信</li>
                <li>LINE Developers Console → Messaging API設定 → Webhook設定</li>
                <li>送信されたメッセージのログでUser IDを確認</li>
                <li>または以下で試行錯誤してテスト</li>
              </ol>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  LINE User ID
                </label>
                <input
                  type="text"
                  value={lineUserId}
                  onChange={(e) => setLineUserId(e.target.value)}
                  placeholder="Uxxxxxxxxxxxxx..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                onClick={runLineTest}
                disabled={isLineLoading || !lineUserId.trim()}
                className={`
                  px-6 py-3 rounded-lg font-bold text-white transition-all duration-300
                  ${isLineLoading || !lineUserId.trim()
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-green-500 hover:bg-green-600 hover:shadow-lg'
                  }
                `}
              >
                {isLineLoading ? '🔄 送信中...' : '📱 LINE通知テスト送信'}
              </button>
            </div>
          </div>

          {/* テスト結果 */}
          {testResult && (
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                📊 通知システムテスト結果
              </h2>
              <div className={`
                rounded-lg p-4 border
                ${testResult.success 
                  ? 'bg-green-50 border-green-200' 
                  : 'bg-red-50 border-red-200'
                }
              `}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-2xl">
                    {testResult.success ? '✅' : '❌'}
                  </div>
                  <span className={`font-bold ${
                    testResult.success ? 'text-green-800' : 'text-red-800'
                  }`}>
                    {testResult.success ? 'テスト成功' : 'テスト失敗'}
                  </span>
                </div>
                
                <pre className="text-sm overflow-x-auto bg-white p-3 rounded border">
                  {JSON.stringify(testResult, null, 2)}
                </pre>
              </div>
            </div>
          )}

          {/* LINE テスト結果 */}
          {lineTestResult && (
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                📱 LINE通知テスト結果
              </h2>
              <div className={`
                rounded-lg p-4 border
                ${lineTestResult.success 
                  ? 'bg-green-50 border-green-200' 
                  : 'bg-red-50 border-red-200'
                }
              `}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-2xl">
                    {lineTestResult.success ? '✅' : '❌'}
                  </div>
                  <span className={`font-bold ${
                    lineTestResult.success ? 'text-green-800' : 'text-red-800'
                  }`}>
                    {lineTestResult.success ? 'LINE送信成功' : 'LINE送信失敗'}
                  </span>
                </div>
                
                <pre className="text-sm overflow-x-auto bg-white p-3 rounded border">
                  {JSON.stringify(lineTestResult, null, 2)}
                </pre>
              </div>
            </div>
          )}

          {/* API設定ガイド */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              📖 API設定ガイド
            </h2>
            <div className="space-y-4">
              
              {/* LINE API */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-gray-900 mb-2">📱 LINE Messaging API</h3>
                <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                  <li><a href="https://developers.line.biz/ja/" target="_blank" className="text-blue-600 hover:underline">LINE Developers</a>でチャネル作成</li>
                  <li>Messaging APIチャネルを選択</li>
                  <li>Channel Access Token（長期）を発行</li>
                  <li>Channel Secretを取得</li>
                  <li>.env.localに設定</li>
                </ol>
              </div>

              {/* Google API */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-gray-900 mb-2">📧 Google API（Gmail・Calendar）</h3>
                <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                  <li><a href="https://console.cloud.google.com/" target="_blank" className="text-blue-600 hover:underline">Google Cloud Console</a>でプロジェクト作成</li>
                  <li>Gmail API・Google Calendar APIを有効化</li>
                  <li>OAuth 2.0認証情報作成</li>
                  <li>リフレッシュトークン取得</li>
                  <li>.env.localに設定</li>
                </ol>
              </div>
            </div>
          </div>

          {/* ドキュメントリンク */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              詳細な設定手順は<code className="bg-gray-200 px-2 py-1 rounded">SETUP.md</code>をご確認ください
            </p>
            <a 
              href="/api/test-notifications" 
              target="_blank"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm"
            >
              🔗 API直接アクセス（GET）
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}