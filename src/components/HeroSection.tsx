import React, { useState } from 'react';
import { BUSINESS_INFO, PHOTOS_DATA } from '../data/photographyData';
import { playShutterSound } from '../utils/soundEffects';
import {
  Camera,
  Star,
  Sparkles,
  ArrowRight,
  MessageCircle,
  MapPin,
  Play,
  Aperture,
  Sliders
} from 'lucide-react';
import { PhotoItem } from '../types';

interface HeroSectionProps {
  onOpenCalculator: () => void;
  onSelectPhoto: (photo: PhotoItem) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCalculator, onSelectPhoto }) => {
  const [flashActive, setFlashActive] = useState(false);
  const featuredPhoto = PHOTOS_DATA[0];

  const handleCameraSnap = () => {
    playShutterSound();
    setFlashActive(true);
    setTimeout(() => setFlashActive(false), 120);
  };

  return (
    <section id="inicio" className="relative pt-8 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Camera Flash Overlay effect */}
      {flashActive && (
        <div className="fixed inset-0 z-50 bg-white/70 pointer-events-none transition-opacity duration-100" />
      )}

      {/* Ambient background glows */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-48 -left-32 w-80 h-80 bg-amber-500/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Top Micro-Banner: Google Maps 5.0 Verified */}
      <div className="flex justify-center mb-6">
        <a
          href={BUSINESS_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playShutterSound()}
          className="group inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/90 hover:bg-zinc-850 border border-amber-500/30 text-xs text-zinc-300 shadow-lg shadow-amber-950/20 transition-all hover:border-amber-500/60"
        >
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-amber-400" />
            ))}
          </div>
          <span className="font-semibold text-amber-200">5.0 Estrelas no Google Maps</span>
          <span className="text-zinc-500">•</span>
          <span className="text-zinc-400 group-hover:text-zinc-200 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-amber-500" />
            Sinop - MT
          </span>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-amber-300 bg-amber-500/10 border border-amber-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fotografia Autoral & Ensaios Femininos</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-serif-luxury text-zinc-100 tracking-tight leading-[1.08]">
            Sua essência retratada com{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600">
              luz, alma & arte.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
            Especialista em ensaios femininos acolhedores, casamentos inesquecíveis e coberturas sociais em Sinop - MT. Uma experiência única de valorização e autoestima, com direção descomplicada para você se sentir deslumbrante.
          </p>

          {/* Interactive CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
            <a
              id="btn-hero-explore-3d"
              href="#galeria-3d"
              onClick={() => playShutterSound()}
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold text-sm tracking-wide shadow-xl shadow-amber-500/25 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5"
            >
              <Aperture className="w-4 h-4" />
              <span>Explorar Portfólio 3D</span>
            </a>

            <button
              id="btn-hero-simulate"
              type="button"
              onClick={() => {
                playShutterSound();
                onOpenCalculator();
              }}
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 hover:border-amber-500/40 font-semibold text-sm transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <Sliders className="w-4 h-4 text-amber-400" />
              <span>Simular Meu Ensaio</span>
            </button>

            {/* Tactile Snapshot Trigger */}
            <button
              id="btn-hero-trigger-snap"
              type="button"
              onClick={handleCameraSnap}
              title="Disparar obturador e sentir o clique"
              className="hidden sm:flex p-4 rounded-2xl bg-zinc-900/80 hover:bg-amber-500/20 border border-zinc-800 hover:border-amber-500/40 text-amber-400 transition-all hover:scale-110 active:scale-90"
            >
              <Camera className="w-5 h-5" />
            </button>
          </div>

          {/* Social Proof / Stats Strip */}
          <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
            <div>
              <span className="block text-2xl font-extrabold text-white font-serif-luxury">
                5.0 ★
              </span>
              <span className="block text-xs text-zinc-400 mt-0.5">
                Avaliação Máxima Google
              </span>
            </div>
            <div>
              <span className="block text-2xl font-extrabold text-white font-serif-luxury">
                +800
              </span>
              <span className="block text-xs text-zinc-400 mt-0.5">
                Mulheres & Histórias
              </span>
            </div>
            <div>
              <span className="block text-2xl font-extrabold text-white font-serif-luxury">
                100%
              </span>
              <span className="block text-xs text-zinc-400 mt-0.5">
                Direção Acolhedora
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Interactive 3D Card Stack */}
        <div className="lg:col-span-5 relative perspective-1000">
          <div
            id="hero-featured-card"
            onClick={() => {
              playShutterSound();
              onSelectPhoto(featuredPhoto);
            }}
            className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-amber-500/40 shadow-2xl shadow-amber-950/40 cursor-pointer transform-gpu hover:rotate-1 hover:scale-[1.02] transition-all duration-500"
          >
            {/* Main Featured Photo Image */}
            <div className="aspect-[3/4] relative overflow-hidden bg-zinc-950">
              <img
                src={featuredPhoto.imageUrl}
                alt={featuredPhoto.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-black/20 to-transparent opacity-80" />

              {/* Interactive Camera Shutter Badge */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-amber-500/30 px-3 py-1.5 rounded-full text-xs font-semibold text-amber-300 flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5" />
                <span>{featuredPhoto.exif.camera} • {featuredPhoto.exif.aperture}</span>
              </div>

              {/* Card Footer Content */}
              <div className="absolute bottom-5 inset-x-5 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-zinc-950">
                    Destaque
                  </span>
                  <span className="text-xs text-zinc-300">
                    Estúdio & Externa Sinop - MT
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-white">
                  {featuredPhoto.title}
                </h3>

                <p className="text-xs text-zinc-300 line-clamp-2">
                  {featuredPhoto.story}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs text-amber-400 font-semibold">
                  <span>Clique para ampliar com ficha técnica</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Floating Mini Card */}
          <div className="absolute -bottom-6 -left-6 hidden sm:block bg-zinc-950/95 border border-zinc-800 p-4 rounded-2xl shadow-2xl backdrop-blur-md max-w-[220px]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0">
                <img
                  src={PHOTOS_DATA[1].thumbnailUrl}
                  alt="Ensaio Externo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-xs">
                <span className="text-amber-400 font-bold block">Golden Hour MT</span>
                <span className="text-zinc-400 text-[11px]">Pôr do Sol de Sinop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
