import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-xl font-bold text-gray-900">
                🏥 桜並木駅前の整骨院
              </Link>
              <div className="flex space-x-4">
                <Link 
                  href="/admin" 
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  🔧 システム管理
                </Link>
                <Link 
                  href="/admin/data" 
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  📊 予約データ
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="/" 
                className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
              >
                📝 予約フォームへ
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>
    </div>
  );
}