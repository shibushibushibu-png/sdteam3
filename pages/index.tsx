import React from 'react';
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>新事業チーム診断サービス - NEWh</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <div className="bg-gray-50 antialiased">
        {/* Logo */}
        <div style={{ position: 'absolute', top: '17px', left: '27px', zIndex: 50 }}>
          <Image src="/logo.png" alt="NEWhロゴ" width={345.6} height={200} priority />
        </div>

        {/* Hero Section */}
        <section className="hero-container relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Business team collaboration" 
              className="w-full h-full object-cover"
            />
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/75 to-indigo-900/70"></div>
          </div>

          {/* Hero Content */}
          <div className="hero-content max-w-6xl mx-auto px-4 py-24">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Side: Text */}
              <div className="text-center md:text-left">
                <div className="mb-8">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-loose animate-fade-in-up delay-200" style={{ lineHeight: 1.2 }}>
                    チームの<br />
                    新規事業構想力<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 italic">
                      見える化
                    </span><br />
                    しませんか？
                  </h1>
                </div>
                <p className="text-xl md:text-2l text-gray-200 max-w-4xl mx-auto font-light leading-loose opacity-90 animate-fade-in-up delay-400">
                  新事業開発に取り組むチームの能力を客観的に診断<br />具体的なアクションプランをご提案
                </p>
              </div>
              {/* Right Side: Image */}
              <div className="flex flex-col justify-center items-center h-full">
                <Image src="/analysis1.png" alt="新事業チーム診断イメージ" width={500} height={400} className="w-full max-w-lg h-auto animate-fade-in-up delay-400" />
              </div>
            </div>
            {/* Button */}
            <div className="flex justify-center mt-8">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdvJJ4jUS0E7-XDgcGHOIK-kD4Vzy9IDYhldFLtMMpclhcUSw/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-500 shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-2 glass-effect animate-fade-in-up delay-800"
                style={{ transform: 'scale(1.2)' }}
              >
                7分で完了！新事業チーム診断（無料）
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* 課題セクション（Introduction Section） */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-relaxed" style={{ lineHeight: 1.2 }}>
                新規事業開発で<br />こんな<em className="text-indigo-800 not-italic">課題</em>はありませんか？
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-8 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl border-l-4 border-indigo-800 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex justify-center mb-6">
                  <img src="/eye.svg" alt="見える化アイコン" className="w-12 h-12" style={{ color: '#3730a3' }} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">能力要件が不透明</h3>
                <p className="text-sm text-gray-700 leading-loose">新事業にどのような能力が必要か不透明</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl border-l-4 border-indigo-800 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex justify-center mb-6">
                  <img src="/scale.svg" alt="評価基準アイコン" className="w-12 h-12" style={{ color: '#3730a3' }} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">評価基準が不適切</h3>
                <p className="text-sm text-gray-700 leading-loose">能力評価基準が既存領域と同じで、適切なチームか不明</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl border-l-4 border-indigo-800 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex justify-center mb-6">
                  <img src="/exclamation-triangle.svg" alt="リソース不安アイコン" className="w-12 h-12" style={{ color: '#3730a3' }} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">リソース不安</h3>
                <p className="text-sm text-gray-700 leading-loose">社内リソースとスキルだけで走り切れるか不安</p>
              </div>
            </div>
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
                <p className="text-2xl md:text-3xl font-bold mb-2">
                  NEWhの新事業チーム診断が、
                </p>
                <p className="text-xl md:text-2xl font-light">
                  これらの課題を解決します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3ステップセクション */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-slate-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-relaxed" style={{ lineHeight: 1.2 }}>
                診断サービスの<br /><em className="text-indigo-800 not-italic">3ステップ</em>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-800 to-indigo-700 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg transform hover:rotate-12 transition-transform duration-300">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-relaxed">新規事業構想力を診断</h3>
                <p className="text-base text-gray-700 leading-loose">7分の簡単な質問に答えるだけで、<br />チームの現状を分析</p>
              </div>
              <div className="text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-800 to-indigo-700 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg transform hover:rotate-12 transition-transform duration-300">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-relaxed">診断結果をレポートで提供</h3>
                <p className="text-base text-gray-700 leading-loose">専用レーダーチャートと詳細分析を<br />メールで即時送信</p>
              </div>
              <div className="text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-800 to-indigo-700 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg transform hover:rotate-12 transition-transform duration-300">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-relaxed">ワークショップ研修をご提案</h3>
                <p className="text-base text-gray-700 leading-loose">結果に基づいた具体的な<br />アクションプランをご提案</p>
              </div>
            </div>
          </div>
        </section>

        {/* メリットセクション */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-relaxed" style={{ lineHeight: 1.2 }}>
                診断で得られる<br /><em className="text-indigo-800 not-italic">メリット</em>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center p-6 rounded-xl hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="#3730a3" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="10" width="2.5" height="7" rx="1"/><rect x="8.25" y="6" width="2.5" height="11" rx="1"/><rect x="13.5" y="2" width="2.5" height="15" rx="1"/></svg>
                  現状把握の客観化
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 text-center">ASIS能力を客観的に把握し、"強み"と"伸び代"を定量化</p>
                <img src="/analysis1.png" alt="現状把握の客観化 具体例" className="w-40 h-auto transition-transform duration-300 hover:scale-200 cursor-pointer mt-auto" />
              </div>
              <div className="flex flex-col items-center p-6 rounded-xl hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="9" stroke="#3730a3" strokeWidth="2"/><circle cx="10" cy="10" r="5" stroke="#3730a3" strokeWidth="2"/><path d="M15 5l-4.5 4.5" stroke="#3730a3" strokeWidth="2" strokeLinecap="round"/></svg>
                  戦略的アクションプラン
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 text-center">TOBEに向けた経営層が納得するアクションプランの整理</p>
                <img src="/analysis2.png" alt="戦略的アクションプラン 具体例" className="w-40 h-auto transition-transform duration-300 hover:scale-200 cursor-pointer mt-auto" />
              </div>
              <div className="flex flex-col items-center p-6 rounded-xl hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 13c0 2 1.5 4 4 4h6c2 0 3-2 3-3.5 0-1.5-1-2.5-2.5-2.5H13V7.5A1.5 1.5 0 0 0 11.5 6c-.8 0-1.5.7-1.5 1.5V13H8V9.5A1.5 1.5 0 0 0 6.5 8c-.8 0-1.5.7-1.5 1.5V13H3z" stroke="#3730a3" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  外部支援の検討
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 text-center">必要に応じた外部支援の検討が可能に</p>
                <img src="/analysis3.png" alt="外部支援の検討 具体例" className="w-40 h-auto transition-transform duration-300 hover:scale-200 cursor-pointer mt-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* お客様の声セクション */}
        <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-indigo-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-indigo-800 uppercase tracking-wider mb-4">実際の声</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-relaxed">
                お客様の<em className="text-indigo-800 not-italic">声</em>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-indigo-800 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <p className="text-base text-gray-700 mb-6 italic leading-loose">
                  "新事業に必要な能力が明確になり、チームの方向性が定まりました！"
                </p>
                <div className="text-sm text-indigo-800 font-semibold">- 製造業A社 新事業開発部長</div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-indigo-800 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <p className="text-base text-gray-700 mb-6 italic leading-loose">
                  "経営層と現場の認識齟齬が解消され、議論がスムーズになりました。"
                </p>
                <div className="text-sm text-indigo-800 font-semibold">- IT企業B社 事業企画マネージャー</div>
              </div>
            </div>
          </div>
        </section>

        {/* セカンドCTAセクション */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-sm font-semibold text-indigo-800 uppercase tracking-wider mb-6">今すぐ始める</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-relaxed" style={{ lineHeight: 1.2 }}>
              まずは<em className="text-indigo-800 not-italic">無料診断</em>で、<br />貴社チームの現在地を<br />把握しませんか？
            </h2>
            <p className="text-base text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              診断は約7分で完了し、結果はすぐにメールでお送りします。
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdvJJ4jUS0E7-XDgcGHOIK-kD4Vzy9IDYhldFLtMMpclhcUSw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              無料診断を始める
            </a>
          </div>
        </section>

        {/* 会社概要セクション */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-6">私たちについて</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-relaxed">
              <em className="text-indigo-400 not-italic">NEWh</em>について
            </h2>
            <p className="text-xl text-gray-200 mb-8 font-light leading-relaxed">
              300社以上の新規事業を支援してきた知見に基づいています。
            </p>
            <p className="text-base text-gray-400 max-w-3xl mx-auto leading-loose">
              株式会社NEWhは、企業の新規事業開発を専門的に支援し、<br />
              数多くの成功事例を生み出してきました。
            </p>
          </div>
        </section>

        {/* スタイル内のopacity: 0やtransform, スクロールアニメーション関連を削除 */}
        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          .delay-200 { animation-delay: 0.2s; }
          .delay-400 { animation-delay: 0.4s; }
          .delay-600 { animation-delay: 0.6s; }
          .delay-800 { animation-delay: 0.8s; }
          .hero-container {
            position: relative;
            overflow: hidden;
          }
          .hero-content {
            position: relative;
            z-index: 10;
          }
          .glass-effect {
            backdrop-filter: blur(10px);
            background: rgba(255, 255, 255, 0.1);
          }
        `}</style>
      </div>
    </>
  )
}
