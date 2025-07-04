'use client';

export default function AdminPage() {



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
              📋 システム状況
            </h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 font-bold mb-2">
                ✅ Web完結型予約システム
              </p>
              <p className="text-green-700 text-sm">
                このシステムは外部API連携なしでWeb上で完結します。予約データはローカルファイルに保存されます。
              </p>
            </div>
          </div>






          {/* データ管理 */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              📊 予約データ管理
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a 
                href="/admin/data" 
                className="bg-blue-50 border border-blue-200 rounded-lg p-4 hover:bg-blue-100 transition-colors"
              >
                <h3 className="font-bold text-blue-800 mb-2">📋 予約データ閲覧</h3>
                <p className="text-blue-700 text-sm">
                  保存された予約データを確認・管理できます
                </p>
              </a>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-gray-800 mb-2">💾 データ保存先</h3>
                <p className="text-gray-700 text-sm">
                  <code className="bg-gray-200 px-1 rounded">data/reservations.json</code><br/>
                  ローカルファイルシステムに保存
                </p>
              </div>
            </div>
          </div>

          {/* システム情報 */}
          <div className="text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <h3 className="font-bold text-blue-800 mb-2">🎉 Web完結型システムの利点</h3>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• 外部API設定不要で即座に利用開始</li>
                <li>• 複雑な認証設定が不要</li>
                <li>• システムがシンプルで保守しやすい</li>
                <li>• データはローカルで安全に管理</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}