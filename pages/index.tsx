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

      <div className="min-h-screen bg-gray-50 antialiased">
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

        {/* Rest of the sections would continue here... */}
        {/* For brevity, I'm including the key sections */}

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
            opacity: 0;
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