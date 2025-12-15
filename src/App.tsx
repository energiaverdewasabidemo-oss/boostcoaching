import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AppFeatures from './components/AppFeatures';
import Programs from './components/Programs';
import Testimonials from './components/Testimonials';
import Authority from './components/Authority';
import InternationalCovers from './components/InternationalCovers';
import Memberships from './components/Memberships';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import Chatbot from './components/Chatbot';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './pages/Checkout';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import PoliticaCookies from './pages/PoliticaCookies';
import TerminosCondiciones from './pages/TerminosCondiciones';
import PoliticaReembolso from './pages/PoliticaReembolso';
import { useScrollAnimation } from './hooks/useScrollAnimation';

function HomePage() {
  useScrollAnimation();

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <AppFeatures />
        <Programs />
        <Testimonials />
        <Authority />
        <InternationalCovers />
        <Memberships />
        <FAQ />
      </main>
      <Footer />
      <CookieConsent />
      <Chatbot />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/politica-cookies" element={<PoliticaCookies />} />
          <Route path="/terminos-condiciones" element={<TerminosCondiciones />} />
          <Route path="/politica-reembolso" element={<PoliticaReembolso />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;