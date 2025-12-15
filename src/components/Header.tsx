import React, { useState, useEffect } from 'react';
import { Dumbbell } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-lg border-b border-gold/30'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="bg-gold p-2 rounded-lg group-hover:bg-gold-light transition-colors">
              <Dumbbell className="w-6 h-6 text-black" />
            </div>
            <div>
              <div className="text-2xl font-black text-white tracking-wider" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                BOOST
              </div>
              <div className="text-xs text-gold font-bold tracking-widest">
                SERGI CONSTANCE
              </div>
            </div>
          </a>

          {/* CTA */}
          <a
            href="#pricing"
            className="bg-gold hover:bg-gold-light text-black font-black px-6 py-3 rounded-xl text-sm tracking-wider transition-all duration-300 shadow-lg"
          >
            <span className="hidden sm:inline">EMPEZAR AHORA</span>
            <span className="sm:hidden">EMPEZAR</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
