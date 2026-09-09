import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Gallery3DCanvas } from './components/Gallery3DCanvas';
import { PortfolioGrid } from './components/PortfolioGrid';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { PackagesSection } from './components/PackagesSection';
import { AboutSection } from './components/AboutSection';
import { GoogleMapsSection } from './components/GoogleMapsSection';
import { Footer } from './components/Footer';
import { PhotoLightboxModal } from './components/PhotoLightboxModal';
import { SessionCalculatorModal } from './components/SessionCalculatorModal';
import { PHOTOS_DATA, BUSINESS_INFO } from './data/photographyData';
import { PhotoItem } from './types';
import { playShutterSound } from './utils/soundEffects';
import { MessageCircle, Sparkles, Box, Compass } from 'lucide-react';

export default function App() {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const handleOpenPhoto = (photo: PhotoItem) => {
    setSelectedPhoto(photo);
  };

  const handleClosePhoto = () => {
    setSelectedPhoto(null);
  };

  const handleNavigatePhoto = (photo: PhotoItem) => {
    setSelectedPhoto(photo);
  };

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-[#f4f4f5] selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Navbar */}
      <Navbar onOpenCalculator={() => setIsCalculatorOpen(true)} />

      {/* Hero Section */}
      <HeroSection
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onSelectPhoto={handleOpenPhoto}
      />

      {/* 3D Interactive Exhibition Section */}
      <section id="galeria-3d" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-amber-300 bg-amber-500/10 border border-amber-500/20 mb-2.5">
              <Box className="w-3.5 h-3.5 text-amber-400" />
              <span>Experiência WebGL 3D</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-zinc-100 tracking-tight">
              Galeria Espacial 3D Interativa
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
              Navegue pelo pavilhão cilíndrico virtual em 360°. Arraste com o mouse ou toque para rotacionar as fotografias selecionadas.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-zinc-400 bg-zinc-900/60 border border-zinc-800 px-3.5 py-2 rounded-2xl shrink-0 self-start sm:self-auto">
            <Compass className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '10s' }} />
            <span>Controles Interativos Tridimensionais</span>
          </div>
        </div>

        {/* 3D Canvas Container */}
        <Gallery3DCanvas
          photos={PHOTOS_DATA}
          onSelectPhoto={handleOpenPhoto}
        />
      </section>

      {/* Main Filterable Portfolio Grid */}
      <PortfolioGrid
        photos={PHOTOS_DATA}
        onSelectPhoto={handleOpenPhoto}
      />

      {/* Before & After Interactive Slider */}
      <BeforeAfterSection />

      {/* Packages & Investment Section */}
      <PackagesSection onOpenCalculator={() => setIsCalculatorOpen(true)} />

      {/* About Jean Nascimento */}
      <AboutSection />

      {/* Google Maps & Verified Location Section */}
      <GoogleMapsSection />

      {/* Footer */}
      <Footer />

      {/* Photo Lightbox Modal */}
      <PhotoLightboxModal
        photo={selectedPhoto}
        photos={PHOTOS_DATA}
        onClose={handleClosePhoto}
        onNavigate={handleNavigatePhoto}
      />

      {/* Session Investment Calculator Modal */}
      <SessionCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      {/* Floating Instant WhatsApp Button */}
      <a
        id="floating-whatsapp-btn"
        href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
          'Olá Jean Nascimento! Gostaria de informações para agendar um ensaio fotográfico em Sinop.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => playShutterSound()}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-2xl shadow-emerald-950/80 transition-all hover:scale-110 active:scale-95 group"
        title="Falar com Jean Nascimento no WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="hidden sm:inline font-semibold">Agendar no WhatsApp</span>
      </a>
    </div>
  );
}
