import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/photographyData';
import { playShutterSound, toggleSound, isSoundEnabled } from '../utils/soundEffects';
import {
  Camera,
  Volume2,
  VolumeX,
  Menu,
  X,
  MessageCircle,
  Sparkles,
  MapPin
} from 'lucide-react';

interface NavbarProps {
  onOpenCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCalculator }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundActive, setSoundActive] = useState(isSoundEnabled());

  const handleToggleSound = () => {
    const nextState = toggleSound();
    setSoundActive(nextState);
    if (nextState) {
      playShutterSound();
    }
  };

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Galeria 3D', href: '#galeria-3d' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Antes & Depois', href: '#antes-e-depois' },
    { label: 'Pacotes', href: '#pacotes' },
    { label: 'Google Maps', href: '#localizacao' },
    { label: 'Sobre Jean', href: '#sobre' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0c0c0e]/85 backdrop-blur-xl border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a
          href="#inicio"
          onClick={() => playShutterSound()}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 p-0.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0c0c0e] rounded-[14px] flex items-center justify-center text-amber-400">
              <Camera className="w-5 h-5" />
            </div>
          </div>
          <div>
            <span className="font-serif-luxury text-lg sm:text-xl font-bold tracking-wider text-zinc-100 block group-hover:text-amber-300 transition-colors">
              Jean Nascimento
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-zinc-400 block -mt-1 font-mono">
              Fotografia • Sinop - MT
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => playShutterSound()}
              className="text-xs font-medium text-zinc-300 hover:text-amber-400 transition-colors tracking-wide py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions (Sound toggle, Calculator CTA, WhatsApp CTA) */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Shutter Sound toggle */}
          <button
            id="btn-nav-toggle-sound"
            type="button"
            onClick={handleToggleSound}
            className={`p-2.5 rounded-xl border transition-colors ${
              soundActive
                ? 'bg-zinc-900 border-amber-500/40 text-amber-400 hover:bg-zinc-800'
                : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300'
            }`}
            title={soundActive ? 'Efeitos sonoros de câmera ativados (Clique para silenciar)' : 'Efeitos sonoros desativados (Clique para ativar som do obturador)'}
          >
            {soundActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Quick simulator button */}
          <button
            id="btn-nav-open-simulator"
            type="button"
            onClick={() => {
              playShutterSound();
              onOpenCalculator();
            }}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 transition-all hover:border-amber-500/40"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Simular Sessão</span>
          </button>

          {/* Direct WhatsApp CTA */}
          <a
            id="btn-nav-whatsapp"
            href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
              'Olá Jean Nascimento! Gostaria de tirar dúvidas sobre disponibilidade e agendar um ensaio fotográfico em Sinop.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playShutterSound()}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Agendar Ensaio</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            type="button"
            onClick={handleToggleSound}
            className="p-2 rounded-xl bg-zinc-900 text-amber-400 border border-zinc-800"
            title="Som do obturador"
          >
            {soundActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <button
            id="btn-mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-zinc-950 border-b border-zinc-800 px-6 py-5 space-y-4 animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  playShutterSound();
                  setMobileMenuOpen(false);
                }}
                className="text-sm font-medium text-zinc-300 hover:text-amber-400 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-zinc-800 space-y-2">
            <button
              type="button"
              onClick={() => {
                playShutterSound();
                setMobileMenuOpen(false);
                onOpenCalculator();
              }}
              className="w-full py-2.5 rounded-xl text-xs font-semibold bg-zinc-900 border border-zinc-800 text-zinc-200 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Simulador de Sessão</span>
            </button>

            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                'Olá Jean Nascimento! Quero agendar um ensaio fotográfico em Sinop.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-amber-500 text-zinc-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
