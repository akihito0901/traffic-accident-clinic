import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '【自己負担0円】交通事故治療・むちうち治療｜桜並木駅前の整骨院｜福岡市博多区',
  description: '交通事故によるむちうち・打撲・捻挫の治療費は自己負担0円！福岡市博多区の桜並木駅前の整骨院。10年の臨床経験、夜20時まで営業、土曜も対応。保険手続きもお任せください。070-5530-6656',
  keywords: '交通事故治療,むちうち治療,自己負担0円,整骨院,福岡市博多区,桜並木駅前,後遺症,保険手続き,夜間営業,土曜診療,今坂院長',
  authors: [{ name: '桜並木駅前の整骨院' }],
  creator: '桜並木駅前の整骨院',
  publisher: '桜並木駅前の整骨院',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sakuranamiki1.com'),
  alternates: {
    canonical: 'https://sakuranamiki1.com',
  },
  openGraph: {
    title: '【自己負担0円】交通事故治療・むちうち治療｜桜並木駅前の整骨院',
    description: '交通事故によるむちうち・打撲・捻挫の治療費は自己負担0円！福岡市博多区の桜並木駅前の整骨院。10年の臨床経験で安心の治療をご提供します。',
    type: 'website',
    url: 'https://sakuranamiki1.com',
    siteName: '桜並木駅前の整骨院',
    locale: 'ja_JP',
    images: [
      {
        url: '/images/hero-background.jpg',
        width: 1200,
        height: 630,
        alt: '桜並木駅前の整骨院 - 交通事故治療専門',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '【自己負担0円】交通事故治療・むちうち治療｜桜並木駅前の整骨院',
    description: '交通事故によるむちうち・打撲・捻挫の治療費は自己負担0円！福岡市博多区の桜並木駅前の整骨院。',
    images: ['/images/hero-background.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": "https://sakuranamiki1.com/#organization",
        "name": "桜並木駅前の整骨院",
        "alternateName": "さくらなみき駅前の整骨院",
        "url": "https://sakuranamiki1.com",
        "telephone": "070-5530-6656",
        "email": "info@sakuranamiki1.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "竹丘町2-4-18",
          "addressLocality": "博多区",
          "addressRegion": "福岡市",
          "postalCode": "812-0895",
          "addressCountry": "JP"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 33.6046,
          "longitude": 130.4183
        },
        "openingHours": [
          "Mo-Fr 09:00-20:00",
          "Sa 09:00-14:00"
        ],
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ],
        "medicalSpecialty": [
          "交通事故治療",
          "むちうち治療",
          "整骨院",
          "柔道整復"
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "福岡市博多区"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "治療サービス",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "name": "交通事故治療",
                "description": "自己負担0円での交通事故による怪我の治療"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "MedicalProcedure",
                "name": "むちうち治療",
                "description": "交通事故によるむちうち症状の専門治療"
              }
            }
          ]
        },
        "founder": {
          "@type": "Person",
          "name": "今坂院長",
          "jobTitle": "院長"
        },
        "sameAs": [
          "https://lin.ee/Y6Hzw7E"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://sakuranamiki1.com/#website",
        "url": "https://sakuranamiki1.com",
        "name": "桜並木駅前の整骨院",
        "description": "福岡市博多区の交通事故治療専門整骨院",
        "inLanguage": "ja",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://sakuranamiki1.com/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://sakuranamiki1.com/#localbusiness",
        "name": "桜並木駅前の整骨院",
        "image": "https://sakuranamiki1.com/images/gallery-exterior.jpg",
        "telephone": "070-5530-6656",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "竹丘町2-4-18",
          "addressLocality": "博多区", 
          "addressRegion": "福岡市",
          "postalCode": "812-0895",
          "addressCountry": "JP"
        },
        "priceRange": "自己負担0円",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "20:00"
          },
          {
            "@type": "OpeningHoursSpecification", 
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "14:00"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "50",
          "bestRating": "5",
          "worstRating": "1"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero Section - Mobile Optimized */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-8" aria-label="メインヒーローセクション">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-background.jpg"
            alt="福岡市博多区の桜並木駅前の整骨院での交通事故治療イメージ"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
          />
        </div>
        {/* Red Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/85 via-red-700/85 to-red-800/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          {/* Emergency Badge */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              緊急対応可能・24時間受付
            </div>
          </div>
          
          {/* Clinic Name - LARGE with Rainbow */}
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                桜並木駅前の整骨院
              </span>
            </h1>
            <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <p className="text-white/90 font-medium text-xs sm:text-sm">福岡市博多区・桜並木駅徒歩1分</p>
            </div>
          </div>
          
          {/* Main Title - iPhone Optimized */}
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
              <span className="block text-white">交通事故治療</span>
              <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
                自己負担0円
              </span>
            </h2>
          </div>
          
          {/* Subtitle */}
          <div className="mb-10">
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-100 leading-relaxed">
              むちうち・打撲・捻挫など<br className="block sm:hidden" />
              <span className="text-yellow-300 font-bold">すべて治療費無料</span>
            </p>
          </div>
          
          {/* Phone Card */}
          <div className="mb-8">
            <div className="max-w-2xl mx-auto">
              <div className="p-4 sm:p-6 rounded-2xl bg-black/60 backdrop-blur-sm shadow-2xl">
                <div className="text-center mb-2">
                  <p className="text-base sm:text-lg font-medium text-white/90">まずはお電話ください</p>
                </div>
                <a href="tel:070-5530-6656" className="block text-2xl sm:text-3xl md:text-4xl font-black text-yellow-400 hover:text-yellow-300 transition-all duration-500 hover:scale-105">
                  070-5530-6656
                </a>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="mb-8">
            <div className="flex flex-row gap-4 justify-center px-4 max-w-2xl mx-auto">
              <a href="tel:070-5530-6656" className="relative overflow-hidden bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-black px-6 py-4 rounded-full font-black text-base shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl text-center group flex-1">
                <span className="relative z-10">電話で相談</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </a>
              <a href="https://lin.ee/Y6Hzw7E" className="relative overflow-hidden bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 text-white px-6 py-4 rounded-full font-black text-base shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl text-center group flex-1">
                <span className="relative z-10">LINE予約</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Urgent Message */}
      <section className="relative py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-white text-lg font-bold">!</span>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-black text-red-600">交通事故に遭われた方へ</h2>
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-white text-lg font-bold">!</span>
              </div>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-yellow-500/30 max-w-3xl mx-auto">
              <p className="text-sm sm:text-base md:text-lg text-gray-800 font-medium">
                <span className="text-base sm:text-lg md:text-xl font-black text-red-600">痛みがなくても必ず検査を！</span><br />
                <span className="text-yellow-700 font-bold">早期治療で後遺症を防ぎましょう。</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Ultimate Cool Design */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
        {/* Dynamic Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500/10 via-transparent to-yellow-500/10"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 grid-rows-8 h-full">
            {Array.from({length: 96}).map((_, i) => (
              <div key={i} className="border border-white/10"></div>
            ))}
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Epic Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>
              <span className="text-red-400 text-sm font-bold tracking-wider uppercase">Why Choose Us</span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent via-red-400 to-transparent"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">選ばれる</span>
              <span className="bg-gradient-to-r from-red-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">理由</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse" style={{animationDelay: `${i * 0.2}s`}}></div>
                ))}
              </div>
              <span className="text-gray-300 font-bold">リピート率 90%以上</span>
            </div>
          </div>
          
          {/* Ultimate Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 - お金 (完全自己負担0円) */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl transform scale-110"></div>
              <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 h-full hover:border-green-500/50 transition-all duration-700 group-hover:transform group-hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-green-500/50 transition-all duration-700">
                      <Image
                        src="/images/お金.png"
                        alt="完全自己負担0円"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-xs font-bold">0¥</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-black mb-4 text-white">完全自己負担0円</h3>
                  <p className="text-gray-300 leading-relaxed text-sm mb-6">
                    自賠責保険適用により治療費は完全無料。窓口負担なしで安心して治療に専念できます。
                  </p>
                  <div className="mt-auto">
                    <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold border border-green-500/30">保険適用</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Feature 2 - 夜20時まで */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl transform scale-110"></div>
              <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 h-full hover:border-blue-500/50 transition-all duration-700 group-hover:transform group-hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-blue-500/50 transition-all duration-700">
                      <Image
                        src="/images/夜20時まで.png"
                        alt="夜20時まで対応"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-xs font-bold">20h</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-black mb-4 text-white">夜20時まで対応</h3>
                  <p className="text-gray-300 leading-relaxed text-sm mb-6">
                    お仕事帰りでも安心。平日20時、土曜14時まで営業で忙しいあなたをサポートします。
                  </p>
                  <div className="mt-auto">
                    <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-bold border border-blue-500/30">夜間対応</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Feature 3 - 事故専門 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl transform scale-110"></div>
              <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 h-full hover:border-purple-500/50 transition-all duration-700 group-hover:transform group-hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-purple-500/50 transition-all duration-700">
                      <Image
                        src="/images/事故専門.png"
                        alt="交通事故専門治療"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-xs font-bold">専</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-black mb-4 text-white">交通事故専門治療</h3>
                  <p className="text-gray-300 leading-relaxed text-sm mb-6">
                    むちうち・腰痛治療の豊富な経験。症状の根本原因から改善する専門的アプローチ。
                  </p>
                  <div className="mt-auto">
                    <span className="inline-block bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs font-bold border border-purple-500/30">専門技術</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Feature 4 - 事故当日 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl transform scale-110"></div>
              <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 h-full hover:border-red-500/50 transition-all duration-700 group-hover:transform group-hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-red-500/50 transition-all duration-700">
                      <Image
                        src="/images/事故当日.png"
                        alt="事故当日から対応"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-xs font-bold">即</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-black mb-4 text-white">事故当日から対応</h3>
                  <p className="text-gray-300 leading-relaxed text-sm mb-6">
                    緊急対応可能。事故直後の早期治療開始で後遺症を防ぎ、スピーディーな回復を実現。
                  </p>
                  <div className="mt-auto">
                    <span className="inline-block bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs font-bold border border-red-500/30">緊急対応</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Feature 5 - 書類 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl transform scale-110"></div>
              <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 h-full hover:border-amber-500/50 transition-all duration-700 group-hover:transform group-hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-amber-500/50 transition-all duration-700">
                      <Image
                        src="/images/書類.png"
                        alt="書類手続き代行"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-xs font-bold">書</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-black mb-4 text-white">書類手続き代行</h3>
                  <p className="text-gray-300 leading-relaxed text-sm mb-6">
                    保険会社とのやりとりから診断書作成まで。複雑な手続きを専門スタッフが代行。
                  </p>
                  <div className="mt-auto">
                    <span className="inline-block bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-xs font-bold border border-amber-500/30">代行サービス</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Feature 6 - 駅チカ */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl transform scale-110"></div>
              <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 h-full hover:border-cyan-500/50 transition-all duration-700 group-hover:transform group-hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-700">
                      <Image
                        src="/images/駅チカ.png"
                        alt="駅前徒歩1分"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-xs font-bold">1m</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-black mb-4 text-white">駅前徒歩1分</h3>
                  <p className="text-gray-300 leading-relaxed text-sm mb-6">
                    桜並木駅前の抜群立地。電車でもお車でもアクセス良好で通院がとても便利です。
                  </p>
                  <div className="mt-auto">
                    <span className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-bold border border-cyan-500/30">好立地</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Epic Trust Badge */}
          <div className="text-center mt-20">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-yellow-500/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                      地域で選ばれる
                      <span className="bg-gradient-to-r from-red-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">信頼の治療院</span>
                    </h3>
                    <p className="text-gray-300">多くの交通事故患者様から信頼をいただいています</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worries */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4 premium-border">
              <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full text-sm font-bold luxury-shadow">よくあるお悩み</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4 luxury-text">
              こんなお悩みありませんか？
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 mx-auto rounded-full luxury-shadow"></div>
          </div>
          
          {/* Worries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Insurance Worries with Real Image */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg transform scale-110"></div>
              <div className="relative bg-white p-8 rounded-2xl luxury-shadow hover-lift border border-gray-100 h-full card-3d cursor-glow">
                {/* Image Section */}
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/保険手続き.jpg"
                    alt="交通事故の保険手続きで悩む人 - 福岡市博多区の整骨院がサポート"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={80}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-black text-white mb-1">保険・手続きの悩み</h3>
                    <p className="text-white/90 text-sm">複雑な手続きも全てサポート</p>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">!</span>
                    </div>
                    <p className="text-red-700 font-medium">保険会社とのやりとりが不安</p>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">?</span>
                    </div>
                    <p className="text-red-700 font-medium">治療費は本当に0円？</p>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">📋</span>
                    </div>
                    <p className="text-red-700 font-medium">診断書や書類作成が面倒</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Treatment Worries with Real Image */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg transform scale-110"></div>
              <div className="relative bg-white p-8 rounded-2xl luxury-shadow hover-lift border border-gray-100 h-full card-3d cursor-glow">
                {/* Image Section */}
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/後遺症.jpg"
                    alt="交通事故による首の痛みと後遺症の不安 - 桃並木駅前の整骨院で専門治療"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={80}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-black text-white mb-1">治療・後遺症の不安</h3>
                    <p className="text-white/90 text-sm">専門的な治療で完全回復へ</p>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">⚠</span>
                    </div>
                    <p className="text-blue-700 font-medium">痛みがなくても治療すべき？</p>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">🏥</span>
                    </div>
                    <p className="text-blue-700 font-medium">どこの病院に行けばいい？</p>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">💔</span>
                    </div>
                    <p className="text-blue-700 font-medium">後遺症が残らないか心配</p>
                  </div>
                </div>
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
              <a href="https://lin.ee/Y6Hzw7E" className="bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-3 rounded-full font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center">
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
          
          {/* Flow Steps - Mobile Optimized */}
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="group relative">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg mb-4">
                    <span className="text-white text-xl font-black">1</span>
                  </div>
                  <div className="w-20 h-20 rounded-xl overflow-hidden shadow-lg mb-4">
                    <Image
                      src="/images/step1-phone.jpg"
                      alt="電話で相談"
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg font-black text-gray-900 mb-2">お電話でご相談</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">まずはお電話ください。事故の状況をお聞きし、今後の流れをご説明します。</p>
                </div>
              </div>
            </div>
            
            {/* Arrow */}
            <div className="flex justify-center">
              <div className="text-gray-400 text-2xl">↓</div>
            </div>
            
            {/* Step 2 */}
            <div className="group relative">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg mb-4">
                    <span className="text-white text-xl font-black">2</span>
                  </div>
                  <div className="w-20 h-20 rounded-xl overflow-hidden shadow-lg mb-4">
                    <Image
                      src="/images/step2-visit.jpg"
                      alt="来院・検査"
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg font-black text-gray-900 mb-2">来院・検査</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">詳しい症状の確認と検査を行い、最適な治療計画を立てます。</p>
                </div>
              </div>
            </div>
            
            {/* Arrow */}
            <div className="flex justify-center">
              <div className="text-gray-400 text-2xl">↓</div>
            </div>
            
            {/* Step 3 */}
            <div className="group relative">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg mb-4">
                    <span className="text-white text-xl font-black">3</span>
                  </div>
                  <div className="w-20 h-20 rounded-xl overflow-hidden shadow-lg mb-4">
                    <Image
                      src="/images/step3-treatment.jpg"
                      alt="治療開始"
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg font-black text-gray-900 mb-2">治療開始</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">患者様の症状に合わせたオーダーメイド治療を開始します。</p>
                </div>
              </div>
            </div>
            
            {/* Arrow */}
            <div className="flex justify-center">
              <div className="text-gray-400 text-2xl">↓</div>
            </div>
            
            {/* Step 4 */}
            <div className="group relative">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg mb-4">
                    <span className="text-white text-xl font-black">4</span>
                  </div>
                  <div className="w-20 h-20 rounded-xl overflow-hidden shadow-lg mb-4">
                    <Image
                      src="/images/step4-recovery.jpg"
                      alt="完全回復"
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg font-black text-gray-900 mb-2">完全回復</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">症状の改善を確認しながら、完全回復まで責任を持ってサポートします。</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA at the end of flow */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a href="tel:070-5530-6656" className="bg-gradient-to-r from-red-500 to-red-600 text-white px-5 py-3 rounded-full font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center">
              電話で相談
            </a>
            <a href="https://lin.ee/Y6Hzw7E" className="bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-3 rounded-full font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center">
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
          
          {/* Gallery Grid - Real Photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Gallery Item 1 - Exterior */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg transform scale-110"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden hover-lift border border-gray-100">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/images/gallery-exterior.jpg"
                    alt="整骨院外観"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-black text-white mb-2">整骨院外観</h3>
                    <p className="text-white/90 text-sm">桜並木駅徒歩1分のアクセス良好な立地</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Gallery Item 2 - Interior */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg transform scale-110"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden hover-lift border border-gray-100">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/images/gallery-interior.jpg"
                    alt="院内の様子"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-black text-white mb-2">清潔な施術室</h3>
                    <p className="text-white/90 text-sm">清潔で落ち着いた環境でリラックスして治療</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Gallery Item 3 - Treatment */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg transform scale-110"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden hover-lift border border-gray-100">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/images/gallery-treatment.jpg"
                    alt="施術風景"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-black text-white mb-2">プロの施術</h3>
                    <p className="text-white/90 text-sm">今坂院長による熟練した手技での治療</p>
                  </div>
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
              <span className="text-lg font-bold text-gray-700">5.0 / 5.0</span>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 - Hideki K. */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg transform scale-110"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-lg hover-lift border border-yellow-200 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">H</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Hideki K.</h4>
                    <p className="text-xs text-gray-500">ローカルガイド • 29件のクチコミ</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  これまで、3つの整体院を廻り施術していただきましたが、桜並木駅前整骨院は頸椎から右腕、右手の縺れを施術していただき、少しずつ良い方向へ変化して行ってるようです！こんな凄腕をお持ちの先生は見たことがありません。是非、お薦めの整骨院です。
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">G</span>
                      </span>
                      Googleレビュー
                    </div>
                    <span className="text-xs text-gray-400">1週間前</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Review 2 - なべゆか */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg transform scale-110"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-lg hover-lift border border-green-200 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">N</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">なべゆか</h4>
                    <p className="text-xs text-gray-500">6件のクチコミ</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  今まで整骨院には行ったことはありましたがひとつのところに通ったことはありませんでした。オープン記念で無料体験ができるとSNSで拝見して施術していただきました。あまりのうまさに即通うことを決めました(笑)人柄も良く、丁寧に施術してくださるので寝てしまうくらい気持ちいいです。
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">G</span>
                      </span>
                      Googleレビュー
                    </div>
                    <span className="text-xs text-gray-400">1週間前</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Review 3 - ami */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg transform scale-110"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-lg hover-lift border border-purple-200 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">A</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">ami</h4>
                    <p className="text-xs text-gray-500">10件のクチコミ • 11枚の写真</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  デスクワークの為、肩凝り・首の痛みに悩んでおり、伺いました。丁寧なカウンセリングと施術をして頂き、施術後は肩・首の痛みはもちろん、巻き肩でも悩んでいたのに、すっと姿勢が正されて自分でも驚きました！立地も桜並木駅前で駐車場もあり、仕事終わりでも通いやすいと思ったのも決め手でした。
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">G</span>
                      </span>
                      Googleレビュー
                    </div>
                    <span className="text-xs text-gray-400">3週間前</span>
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
                <div className="text-4xl font-black text-red-600 mb-2">10年</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">臨床経験</h3>
                <p className="text-gray-600 text-sm leading-relaxed">豊富な経験と専門知識で安心の治療を提供</p>
              </div>
            </div>
            
            {/* Stat 2 */}
            <div className="text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover-lift border border-gray-100">
                <div className="text-4xl font-black text-blue-600 mb-2">90%+</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">リピート率</h3>
                <p className="text-gray-600 text-sm leading-relaxed">患者様の90%以上が継続して通院いただいています</p>
              </div>
            </div>
            
            {/* Stat 3 */}
            <div className="text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover-lift border border-gray-100">
                <div className="text-4xl font-black text-green-600 mb-2">100%</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">保険対応</h3>
                <p className="text-gray-600 text-sm leading-relaxed">保険手続きから書類作成まで全てサポート</p>
              </div>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-red-500 to-red-600 p-8 rounded-2xl shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-4">専門的な治療</h3>
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
              <a href="https://lin.ee/Y6Hzw7E" className="bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-3 rounded-full font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center">
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
                        <p>平日：9:00〜20:00</p>
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
                        <p>桜並木駅徒歩1分</p>
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
                  <a href="https://lin.ee/Y6Hzw7E" className="group relative bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-3 rounded-full font-black shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 overflow-hidden text-center">
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
      <footer className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Luxury Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-2xl"></div>
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-gradient-to-r from-green-400 to-teal-500 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-pink-400 to-red-500 rounded-full blur-3xl"></div>
        </div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 grid-rows-8 h-full">
            {Array.from({length: 96}).map((_, i) => (
              <div key={i} className="border border-white/10"></div>
            ))}
          </div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center">
            {/* Logo/Title */}
            <div className="mb-6 premium-border inline-block">
              <a href="https://sakuranamiki1.com/" className="block hover:scale-105 transition-transform duration-300">
                <h3 className="text-3xl sm:text-4xl font-black py-4 px-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent luxury-shadow">
                  桜並木駅前の整骨院
                </h3>
              </a>
            </div>
            
            {/* Quick Contact */}
            <div className="mb-6">
              <a href="tel:070-5530-6656" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors font-bold text-lg">
                <span>📞</span>
                070-5530-6656
              </a>
            </div>
            
            {/* Address */}
            <p className="text-gray-300 mb-4 leading-relaxed">
              福岡県福岡市博多区竹丘町2-4-18<br />
              桜並木駅徒歩1分 | 駐車場完備
            </p>
            
            {/* Website Link */}
            <div className="mb-6">
              <a href="https://sakuranamiki1.com/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium">
                <span>🌐</span>
                公式ホームページ
              </a>
            </div>
            
            {/* Services */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <span className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full text-sm font-bold luxury-shadow hover:scale-105 transition-transform duration-300">交通事故治療</span>
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-bold luxury-shadow hover:scale-105 transition-transform duration-300">むちうち治療</span>
              <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-full text-sm font-bold luxury-shadow hover:scale-105 transition-transform duration-300">自己負担0円</span>
              <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-full text-sm font-bold luxury-shadow hover:scale-105 transition-transform duration-300">夜20時まで</span>
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
