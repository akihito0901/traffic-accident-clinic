import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '交通事故治療・むちうち治療｜自己負担0円｜桜並木駅前の整骨院｜福岡市博多区',
  description: '交通事故による怪我・むちうちの治療費は自己負担0円！福岡市博多区の桜並木駅前の整骨院では、交通事故専門治療を行っています。夜21時まで営業、土日祝も対応。まずはお電話ください。',
  keywords: '交通事故治療,むちうち治療,自己負担0円,整骨院,福岡市博多区,桜並木駅前,夜間対応,土日祝営業',
  openGraph: {
    title: '交通事故治療・むちうち治療｜自己負担0円｜桜並木駅前の整骨院',
    description: '交通事故による怪我・むちうちの治療費は自己負担0円！福岡市博多区の桜並木駅前の整骨院では、交通事故専門治療を行っています。',
    type: 'website',
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-red-800"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full opacity-60 float"></div>
          <div className="absolute top-32 right-20 w-3 h-3 bg-white rounded-full opacity-40 float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-20 w-2 h-2 bg-yellow-300 rounded-full opacity-50 float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-10 w-5 h-5 bg-white rounded-full opacity-30 float" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          {/* Emergency Badge */}
          <div className="mb-8 slide-in-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-3 rounded-full font-bold text-sm sm:text-base shadow-lg animate-pulse">
              <span className="w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
              緊急対応可能・24時間受付
            </div>
          </div>
          
          {/* Main Title */}
          <div className="mb-8 slide-in-up" style={{animationDelay: '0.2s'}}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight">
              <span className="block">交通事故治療</span>
              <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black">
                自己負担0円
              </span>
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className="mb-10 slide-in-up" style={{animationDelay: '0.4s'}}>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-100 leading-relaxed">
              むちうち・打撲・捻挫など<br className="block sm:hidden" />
              <span className="text-yellow-300 font-bold">すべて治療費無料</span>
            </p>
          </div>
          
          {/* Phone Card */}
          <div className="mb-10 slide-in-up" style={{animationDelay: '0.6s'}}>
            <div className="glass max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/20 hover-lift">
              <div className="text-center mb-4">
                <p className="text-xl sm:text-2xl font-bold text-white">まずはお電話ください</p>
              </div>
              <a href="tel:070-5530-6656" className="block text-3xl sm:text-4xl md:text-5xl font-black text-yellow-400 hover:text-yellow-300 transition-all duration-300 transform hover:scale-105">
                070-5530-6656
              </a>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 slide-in-up" style={{animationDelay: '0.8s'}}>
            <a href="tel:070-5530-6656" className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-5 py-3 rounded-full font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center">
              <span className="relative z-10">電話で相談</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            <a href="https://lin.ee/your-line-id" className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-3 rounded-full font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center cursor-pointer">
              <span className="relative z-10">LINE予約</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </a>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgent Message */}
      <section className="relative py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-white text-2xl font-bold">!</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-red-600">交通事故に遭われた方へ</h2>
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-white text-2xl font-bold">!</span>
              </div>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl border border-yellow-500/30 max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl text-gray-800 font-medium">
                <span className="text-2xl sm:text-3xl font-black text-red-600">痛みがなくても必ず検査を！</span><br />
                <span className="text-yellow-700 font-bold">早期治療で後遺症を防ぎましょう。</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">選ばれる理由</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 slide-in-up">
              当院の交通事故治療が
              <span className="block text-red-600">選ばれる理由</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl hover-lift border border-gray-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white text-2xl font-bold">0¥</span>
                </div>
                <h3 className="text-xl font-black mb-4 text-gray-900 text-center">自己負担0円</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  自賠責保険適用により、窓口での負担金は一切かかりません。安心して治療に専念できます。
                </p>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl hover-lift border border-gray-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white text-2xl">🌙</span>
                </div>
                <h3 className="text-xl font-black mb-4 text-gray-900 text-center">夜21時まで営業</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  お仕事帰りでも通院可能。平日21時、土曜14時まで営業で、あなたの都合に合わせて通院できます。
                </p>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl hover-lift border border-gray-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white text-2xl">⚕️</span>
                </div>
                <h3 className="text-xl font-black mb-4 text-gray-900 text-center">専門治療</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  交通事故治療の専門知識と豊富な経験で、むちうちや腰痛などの症状を根本から改善します。
                </p>
              </div>
            </div>
            
            {/* Feature 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl hover-lift border border-gray-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-black mb-4 text-gray-900 text-center">即日対応</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  事故当日でも対応可能。早期治療開始で後遺症を防ぎ、早期回復を目指します。
                </p>
              </div>
            </div>
            
            {/* Feature 5 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl hover-lift border border-gray-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white text-2xl">📋</span>
                </div>
                <h3 className="text-xl font-black mb-4 text-gray-900 text-center">書類サポート</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  保険会社との手続きや診断書作成など、複雑な書類手続きを全面的にサポートします。
                </p>
              </div>
            </div>
            
            {/* Feature 6 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl hover-lift border border-gray-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white text-2xl">🚗</span>
                </div>
                <h3 className="text-xl font-black mb-4 text-gray-900 text-center">駅前立地</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  桜並木駅前の好立地で通院便利。お車でお越しの方には駐車場もご用意しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worries */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">よくあるお悩み</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4">
              こんなお悩みありませんか？
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Worries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Insurance Worries */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
              <div className="relative bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl border border-red-200 shadow-lg hover-lift h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">📜</span>
                  </div>
                  <h3 className="text-xl font-black text-red-700">保険・手続き</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><span className="text-red-500 mr-2 mt-1 font-bold">✓</span>保険会社とのやりとり</li>
                  <li className="flex items-start"><span className="text-red-500 mr-2 mt-1 font-bold">✓</span>治療費は本当に0円？</li>
                  <li className="flex items-start"><span className="text-red-500 mr-2 mt-1 font-bold">✓</span>診断書や書類作成</li>
                  <li className="flex items-start"><span className="text-red-500 mr-2 mt-1 font-bold">✓</span>示談交渉の不安</li>
                </ul>
              </div>
            </div>
            
            {/* Treatment Worries */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 shadow-lg hover-lift h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">⚕️</span>
                  </div>
                  <h3 className="text-xl font-black text-blue-700">治療・回復</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><span className="text-blue-500 mr-2 mt-1 font-bold">✓</span>痛みがなくても治療すべき？</li>
                  <li className="flex items-start"><span className="text-blue-500 mr-2 mt-1 font-bold">✓</span>どこの病院に行けばいい？</li>
                  <li className="flex items-start"><span className="text-blue-500 mr-2 mt-1 font-bold">✓</span>仕事しながら通院できる？</li>
                  <li className="flex items-start"><span className="text-blue-500 mr-2 mt-1 font-bold">✓</span>後遺症が残らないか心配</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Solution CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-8 rounded-2xl shadow-xl text-white mb-6">
              <h3 className="text-2xl font-black mb-3">こんな悩み、全部解決します！</h3>
              <p className="text-green-100 leading-relaxed">
                保険手続きから治療まで、すべてをサポート。
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:070-5530-6656" className="bg-gradient-to-r from-red-500 to-red-600 text-white px-5 py-3 rounded-full font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center">
                電話で相談
              </a>
              <a href="https://lin.ee/your-line-id" className="bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-3 rounded-full font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center">
                LINE予約
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Flow */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">簡単4ステップ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
              治療の流れ
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          {/* Flow Steps - Streamlined Design */}
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="group relative">
              <div className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift border border-gray-100">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl font-black">1</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-black text-gray-900 mb-2">お電話でご相談</h3>
                  <p className="text-gray-600 leading-relaxed">まずはお電話ください。事故の状況をお聞きし、今後の流れをご説明します。</p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Arrow */}
            <div className="flex justify-center">
              <div className="text-gray-400 text-2xl">↓</div>
            </div>
            
            {/* Step 2 */}
            <div className="group relative">
              <div className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift border border-gray-100">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl font-black">2</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-black text-gray-900 mb-2">来院・検査</h3>
                  <p className="text-gray-600 leading-relaxed">詳しい症状の確認と検査を行い、最適な治療計画を立てます。</p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Arrow */}
            <div className="flex justify-center">
              <div className="text-gray-400 text-2xl">↓</div>
            </div>
            
            {/* Step 3 */}
            <div className="group relative">
              <div className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift border border-gray-100">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl font-black">3</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-black text-gray-900 mb-2">治療開始</h3>
                  <p className="text-gray-600 leading-relaxed">患者様の症状に合わせたオーダーメイド治療を開始します。</p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Arrow */}
            <div className="flex justify-center">
              <div className="text-gray-400 text-2xl">↓</div>
            </div>
            
            {/* Step 4 */}
            <div className="group relative">
              <div className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift border border-gray-100">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl font-black">4</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-black text-gray-900 mb-2">完全回復</h3>
                  <p className="text-gray-600 leading-relaxed">症状の改善を確認しながら、完全回復まで責任を持ってサポートします。</p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA at the end of flow */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a href="tel:070-5530-6656" className="bg-gradient-to-r from-red-500 to-red-600 text-white px-5 py-3 rounded-full font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center">
              電話で相談
            </a>
            <a href="https://lin.ee/your-line-id" className="bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-3 rounded-full font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center">
              LINE予約
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">院内紹介</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
              当院の様子
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-600 mx-auto rounded-full"></div>
          </div>
          
          {/* Gallery Grid - Modern Design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Gallery Item 1 */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl shadow-xl hover-lift text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                    <div className="w-8 h-8 bg-white rounded-lg"></div>
                  </div>
                  <h3 className="text-xl font-black mb-3">整骨院外観</h3>
                  <p className="text-blue-100 leading-relaxed">
                    桜並木駅徒歩3分のアクセス良好な立地。駐車場も完備しています。
                  </p>
                </div>
              </div>
            </div>
            
            {/* Gallery Item 2 */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-2xl shadow-xl hover-lift text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                    <div className="w-8 h-8 bg-white rounded-lg"></div>
                  </div>
                  <h3 className="text-xl font-black mb-3">清潔な施術室</h3>
                  <p className="text-green-100 leading-relaxed">
                    清潔で落ち着いた環境で、リラックスして治療を受けていただけます。
                  </p>
                </div>
              </div>
            </div>
            
            {/* Gallery Item 3 */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-8 rounded-2xl shadow-xl hover-lift text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                    <div className="w-8 h-8 bg-white rounded-lg"></div>
                  </div>
                  <h3 className="text-xl font-black mb-3">プロの施術</h3>
                  <p className="text-purple-100 leading-relaxed">
                    今坂院長をはじめ、経験豊富なスタッフが一人一人に合わせた治療を提供します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">実際のお客様の声</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Googleでの口コミが好評！
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              <span className="text-lg font-bold text-gray-700">4.9 / 5.0</span>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg transform scale-110"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-lg hover-lift border border-yellow-200 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">A</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">佐藤さん</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  交通事故でむちうちになり、今坂院長にお世話になりました。以前から腰痛でも治療していただいていたので、安心して通院できました。保険手続きも全部やってくださり、本当に助かりました！
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">G</span>
                    </span>
                    Googleレビュー
                  </div>
                </div>
              </div>
            </div>
            
            {/* Review 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg transform scale-110"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-lg hover-lift border border-green-200 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">M</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">田中さん</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  事故当日に飛び込みで伺いましたが、今坂院長が親身に診てくださいました。治療費が0円で本当に助かりました。夜遅くまでやっているので仕事帰りでも通えて、おすすめです！
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">G</span>
                    </span>
                    Googleレビュー
                  </div>
                </div>
              </div>
            </div>
            
            {/* Review 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg transform scale-110"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-lg hover-lift border border-purple-200 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">Y</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">山田さん</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  今坂院長には以前から肩こりの治療でお世話になっていたので、交通事故の際も安心してお願いできました。手続きがわからなくて不安でしたが、全てサポートしてくださって、本当に感謝しています。
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">G</span>
                    </span>
                    Googleレビュー
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Trust Badge */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 bg-white p-6 rounded-2xl shadow-lg border border-yellow-200">
              <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <div>
                <h3 className="text-xl font-black text-gray-900 mb-1">地域ナンバー1の信頼と実績</h3>
                <p className="text-gray-600">多くの患者様から高評価をいただいています</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Results & Support */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-gray-600 to-gray-800 text-white px-4 py-2 rounded-full text-sm font-bold">実績と信頼</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
              治療実績・安心サポート
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto rounded-full"></div>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover-lift border border-gray-100">
                <div className="text-4xl font-black text-red-600 mb-2">500+</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">年間治療実績</h3>
                <p className="text-gray-600 text-sm leading-relaxed">多くの交通事故患者様に信頼いただいています</p>
              </div>
            </div>
            
            {/* Stat 2 */}
            <div className="text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover-lift border border-gray-100">
                <div className="text-4xl font-black text-blue-600 mb-2">100%</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">保険対応</h3>
                <p className="text-gray-600 text-sm leading-relaxed">保険手続きから書類作成まで全てサポート</p>
              </div>
            </div>
            
            {/* Stat 3 */}
            <div className="text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover-lift border border-gray-100">
                <div className="text-4xl font-black text-green-600 mb-2">95%</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">完全回復率</h3>
                <p className="text-gray-600 text-sm leading-relaxed">早期治療で後遺症を防ぎ完全回復を実現</p>
              </div>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-red-500 to-red-600 p-8 rounded-2xl shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-4">专門的な治療</h3>
                <p className="text-red-100 leading-relaxed mb-4">
                  交通事故治療の豊富な経験を持つ今坂院長が、一人一人の症状に合わせた最適な治療を提供します。
                </p>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-4">安心のサポート</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  事故当日から完全回復まで、保険手続きや治療計画など、すべての面で患者様をサポートします。
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:070-5530-6656" className="bg-gradient-to-r from-red-500 to-red-600 text-white px-5 py-3 rounded-full font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center">
                電話で相談
              </a>
              <a href="https://lin.ee/your-line-id" className="bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-3 rounded-full font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center">
                LINE予約
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-300 rounded-full opacity-20 blur-2xl"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold">お気軽にご連絡ください</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
              桜並木駅前の整骨院
            </h2>
            <p className="text-xl sm:text-2xl text-amber-700 font-medium">交通事故治療も対応</p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Access Information */}
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-amber-200">
                <h3 className="text-2xl font-black mb-6 text-gray-900 flex items-center gap-3">
                  <span className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center text-white text-sm">📍</span>
                  アクセス情報
                </h3>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-xl">📍</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">住所</p>
                      <p className="text-gray-700 leading-relaxed">
                        〒812-0895<br />
                        福岡県福岡市博多区竹丘町2-4-18
                      </p>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 text-xl">📞</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">電話番号</p>
                      <a href="tel:070-5530-6656" className="text-2xl font-black text-red-600 hover:text-red-700 transition-colors">
                        070-5530-6656
                      </a>
                    </div>
                  </div>
                  
                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 text-xl">🕒</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">営業時間</p>
                      <div className="text-gray-700 leading-relaxed">
                        <p>平日：9:00〜21:00</p>
                        <p>土曜：9:00〜14:00</p>
                        <p className="text-red-600 font-bold">日祝：休診</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Access */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-600 text-xl">🚗</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">アクセス</p>
                      <div className="text-gray-700 leading-relaxed">
                        <p>桜並木駅徒歩3分</p>
                        <p>駐車場完備</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact CTA */}
            <div className="space-y-6">
              {/* Urgent Message */}
              <div className="bg-gradient-to-r from-red-600 to-red-700 p-8 rounded-2xl shadow-xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
                    <p className="text-lg font-bold">交通事故に遭われた方は</p>
                  </div>
                  <p className="text-2xl sm:text-3xl font-black mb-4">
                    24時間以内にご連絡を！
                  </p>
                  <p className="text-red-100 leading-relaxed">
                    早期治療開始で後遺症を防ぎ、完全回復を目指しましょう
                  </p>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:070-5530-6656" className="group relative bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-5 py-3 rounded-full font-black shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 overflow-hidden text-center">
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <span className="relative z-10">電話する</span>
                  </a>
                  <a href="https://lin.ee/your-line-id" className="group relative bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-3 rounded-full font-black shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 overflow-hidden text-center">
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    <span className="relative z-10">LINE予約</span>
                  </a>
                </div>
                <p className="text-amber-700 text-center font-medium">
                  お電話・LINEでのご相談は無料です
                </p>
              </div>
              
              {/* Additional Info */}
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-amber-200">
                <div className="text-center">
                  <h4 className="font-black text-gray-900 mb-3">こんなご相談お受けします</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">保険手続き</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">治療相談</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">症状確認</span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">書類作成</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
          <div className="absolute top-20 right-20 w-16 h-16 border border-white rounded-full"></div>
          <div className="absolute bottom-10 left-1/4 w-12 h-12 border border-white rounded-full"></div>
          <div className="absolute bottom-20 right-1/3 w-24 h-24 border border-white rounded-full"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center">
            {/* Logo/Title */}
            <h3 className="text-2xl sm:text-3xl font-black mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              桜並木駅前の整骨院
            </h3>
            
            {/* Quick Contact */}
            <div className="mb-6">
              <a href="tel:070-5530-6656" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors font-bold text-lg">
                <span>📞</span>
                070-5530-6656
              </a>
            </div>
            
            {/* Address */}
            <p className="text-gray-300 mb-6 leading-relaxed">
              福岡県福岡市博多区竹丘町2-4-18<br />
              桜並木駅徒歩3分 | 駐車場完備
            </p>
            
            {/* Services */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">交通事故治療</span>
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">むちうち治療</span>
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">自己負担0円</span>
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">夜21時まで</span>
            </div>
            
            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6"></div>
            
            {/* Copyright */}
            <div className="text-center text-gray-400 text-sm">
              <p className="mb-2">
                © 2025 桜並木駅前の整骨院. All rights reserved.
              </p>
              <p className="text-xs">
                交通事故治療・むちうち治療・整骨院 | 福岡市博多区
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
