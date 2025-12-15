import React from 'react';
import { Star, ArrowRight, CheckCircle, Smartphone, Download, Trophy } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/sg foto 1.jpeg"
          alt="Sergi Constance"
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-20">

            {/* Left Column - Main Content */}
            <div className="text-center lg:text-left">

              {/* App Badge */}
              <div className="inline-flex items-center bg-gold/20 backdrop-blur-md border border-gold/40 rounded-full px-6 py-3 mb-6">
                <Smartphone className="w-5 h-5 text-gold mr-3" />
                <span className="text-gold font-bold text-sm tracking-wider">APP OFICIAL</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-6 leading-none text-white tracking-wider" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                <span className="block mb-2">BOOST</span>
                <span className="text-gold block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">by Sergi Constance</span>
              </h1>

              {/* Professional Subheadline */}
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                Transforma tu físico con los programas de entrenamiento y nutrición del{' '}
                <span className="text-gold font-semibold">IFBB Pro</span>
                {' '}que interpretó a Zeus
              </p>

              {/* Professional CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center bg-gold text-black px-10 py-5 rounded-2xl font-black text-xl hover:bg-yellow-400 transition-all duration-300 group shadow-2xl"
                >
                  <Download className="w-6 h-6 mr-3" />
                  <span>EMPEZAR AHORA</span>
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#features"
                  className="inline-flex items-center justify-center border-2 border-white/40 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 hover:border-white/60 transition-all duration-300 backdrop-blur-sm"
                >
                  Ver Características
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-400 justify-center lg:justify-start">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-gold mr-3" />
                  <span>100K+ Descargas</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-gold mr-3" />
                  <span>iOS & Android</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-gold mr-3" />
                  <span>7 Días Gratis</span>
                </div>
              </div>
            </div>

            {/* Right Column - App Preview */}
            <div className="text-center mt-8 lg:mt-0">
              <div className="relative w-full max-w-md mx-auto">
                {/* Mock Phone Frame */}
                <div className="relative mx-auto w-[280px] sm:w-[320px] h-[560px] sm:h-[640px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-8 border-gray-800">
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black rounded-[2.5rem] overflow-hidden relative">
                    {/* App Screenshot Placeholder */}
                    <img
                      src="/ShottingAtlas-137.jpg"
                      alt="Boost App"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Boost Logo Overlay */}
                    <div className="absolute bottom-8 left-0 right-0 text-center">
                      <div className="text-4xl font-black text-white mb-2">BOOST</div>
                      <div className="text-gold text-sm font-bold tracking-widest">SERGI CONSTANCE</div>
                    </div>
                  </div>

                  {/* Phone Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gray-900 rounded-b-3xl"></div>
                </div>

                {/* App Store Badges */}
                <div className="flex justify-center gap-4 mt-8">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 hover:bg-white/20 transition-all cursor-pointer">
                    <div className="flex items-center gap-2">
                      <Download className="w-5 h-5 text-white" />
                      <div className="text-left">
                        <div className="text-[10px] text-gray-400">Download on</div>
                        <div className="text-sm font-bold text-white">App Store</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 hover:bg-white/20 transition-all cursor-pointer">
                    <div className="flex items-center gap-2">
                      <Download className="w-5 h-5 text-white" />
                      <div className="text-left">
                        <div className="text-[10px] text-gray-400">Get it on</div>
                        <div className="text-sm font-bold text-white">Google Play</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats & Social Proof */}
          <div className="w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center transform hover:scale-105 transition-transform">
                <div className="text-4xl font-black text-gold mb-2">100K+</div>
                <div className="text-gray-300 font-medium text-sm">Usuarios Activos</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center transform hover:scale-105 transition-transform">
                <div className="text-4xl font-black text-gold mb-2">50+</div>
                <div className="text-gray-300 font-medium text-sm">Programas</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center transform hover:scale-105 transition-transform">
                <div className="text-4xl font-black text-gold mb-2">4.9</div>
                <div className="text-gray-300 font-medium text-sm">Rating</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center transform hover:scale-105 transition-transform">
                <div className="text-4xl font-black text-gold mb-2">24/7</div>
                <div className="text-gray-300 font-medium text-sm">Acceso Total</div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex justify-center">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 max-w-2xl w-full">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <div className="flex items-center">
                    <div className="flex -space-x-3 mr-4">
                      {[1,2,3,4,5].map((i) => (
                        <img
                          key={i}
                          src={`https://images.pexels.com/photos/${1000000 + i}/pexels-photo-${1000000 + i}.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop&crop=face`}
                          alt={`Usuario ${i}`}
                          className="w-12 h-12 rounded-full border-3 border-gray-900 object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      ))}
                    </div>
                    <div className="text-left">
                      <div className="flex items-center mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-gold fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-300 font-semibold">Miles de transformaciones</p>
                    </div>
                  </div>

                  <div className="h-12 w-px bg-white/20 hidden sm:block"></div>

                  <div className="flex items-center gap-3">
                    <Trophy className="w-8 h-8 text-gold" />
                    <div className="text-left">
                      <div className="text-white font-black text-lg">IFBB Pro</div>
                      <div className="text-gray-400 text-sm">Coach Certificado</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;