import React from 'react';
import { BUSINESS_INFO } from '../data/photographyData';
import { playShutterSound } from '../utils/soundEffects';
import { Camera, MapPin, Phone, Instagram, ExternalLink, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    playShutterSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-900">
          {/* Col 1: Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 p-2 flex items-center justify-center text-amber-400">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif-luxury text-lg font-bold text-white block">
                  Jean Nascimento
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 block -mt-0.5">
                  Fotografia • Sinop - MT
                </span>
              </div>
            </div>

            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              {BUSINESS_INFO.aboutShort}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playShutterSound()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-amber-300 border border-zinc-800 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Ver no Google Maps</span>
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playShutterSound()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-amber-300 border border-zinc-800 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>{BUSINESS_INFO.instagram}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="hover:text-amber-400 transition-colors">Início</a>
              </li>
              <li>
                <a href="#galeria-3d" className="hover:text-amber-400 transition-colors">Galeria 3D Interativa</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-amber-400 transition-colors">Portfólio de Trabalhos</a>
              </li>
              <li>
                <a href="#antes-e-depois" className="hover:text-amber-400 transition-colors">Antes e Depois</a>
              </li>
              <li>
                <a href="#pacotes" className="hover:text-amber-400 transition-colors">Pacotes e Valores</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Categorias */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200">
              Especialidades
            </h4>
            <ul className="space-y-2">
              <li>
                <span className="text-zinc-300">Ensaios Femininos Autorais</span>
              </li>
              <li>
                <span className="text-zinc-300">Retratos & Autoestima</span>
              </li>
              <li>
                <span className="text-zinc-300">Casamentos & Pré-Wedding</span>
              </li>
              <li>
                <span className="text-zinc-300">Sunsets & Eventos Sociais</span>
              </li>
              <li>
                <span className="text-zinc-300">Coberturas Esportivas Sinop</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Atendimento & Horários */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200">
              Localização & Horário
            </h4>
            <p className="text-zinc-400 leading-relaxed">
              {BUSINESS_INFO.neighborhood}
              <br />
              {BUSINESS_INFO.city} - {BUSINESS_INFO.state}
            </p>
            <p className="text-zinc-400 text-[11px] leading-snug">
              {BUSINESS_INFO.workingHours}
            </p>
            <div className="pt-1">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-[11px] text-center sm:text-left">
            © {new Date().getFullYear()} Jean Nascimento Fotografia. Todos os direitos reservados. Sinop - Mato Grosso.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-zinc-500 flex items-center gap-1">
              Fotografia feita com <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> no Mato Grosso
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              title="Voltar ao topo"
              className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
