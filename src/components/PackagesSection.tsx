import React from 'react';
import { PACKAGES_DATA, BUSINESS_INFO } from '../data/photographyData';
import { playShutterSound } from '../utils/soundEffects';
import { Check, Sparkles, ArrowRight, MessageCircle, Heart, Star } from 'lucide-react';

interface PackagesSectionProps {
  onOpenCalculator: () => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onOpenCalculator }) => {
  return (
    <section id="pacotes" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-amber-300 bg-amber-500/10 border border-amber-500/20 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Experiências & Sessões</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-serif-luxury text-zinc-100 tracking-tight">
          Investimento Para a Sua História
        </h2>
        <p className="text-zinc-400 mt-3 text-sm sm:text-base">
          Ensaios cuidadosamente elaborados com direção acolhedora, sem pressa e com entrega de arquivos em altíssima definição.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PACKAGES_DATA.map((pkg) => {
          const isPopular = pkg.popular;
          return (
            <div
              key={pkg.id}
              className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                isPopular
                  ? 'bg-gradient-to-b from-amber-950/40 via-zinc-900 to-zinc-950 border-2 border-amber-500/60 shadow-2xl shadow-amber-500/10 scale-105'
                  : 'bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700'
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 text-[11px] font-extrabold uppercase tracking-wider shadow-lg">
                  {pkg.badge}
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold font-serif-luxury text-white mb-1">
                  {pkg.name}
                </h3>
                <p className="text-xs text-zinc-400 mb-4 min-h-[36px]">
                  {pkg.tagline}
                </p>

                {/* Price block */}
                <div className="py-4 my-2 border-y border-zinc-800/80">
                  <span className="text-[11px] text-zinc-500 uppercase tracking-wider block">
                    Investimento
                  </span>
                  <div className="text-2xl font-bold text-amber-300 font-serif-luxury mt-0.5">
                    {pkg.estimatedPrice}
                  </div>
                  <span className="text-xs text-zinc-400 block mt-1">
                    ⏱️ {pkg.duration}
                  </span>
                </div>

                {/* Deliverables List */}
                <div className="space-y-2.5 my-5">
                  <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block">
                    O que está incluso:
                  </span>
                  {pkg.deliverables.map((deliv, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-zinc-950/70 p-3 rounded-xl border border-zinc-800/60 text-[11px] text-zinc-400 mb-6">
                  <span className="font-semibold text-zinc-300 block mb-0.5">Ideal para:</span>
                  {pkg.idealFor}
                </div>
              </div>

              {/* Action Button */}
              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    playShutterSound();
                    onOpenCalculator();
                  }}
                  className={`w-full py-3 rounded-2xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    isPopular
                      ? 'bg-amber-500 hover:bg-amber-400 text-zinc-950 shadow-lg shadow-amber-500/20'
                      : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                  }`}
                >
                  <span>Personalizar Pacote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                    `Olá Jean! Tenho interesse no pacote "${pkg.name}". Como funciona o agendamento em Sinop?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-2xl text-[11px] font-medium text-emerald-400 hover:text-emerald-300 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Tirar Dúvidas no WhatsApp</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Simulator CTA Banner */}
      <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-zinc-900 to-zinc-900 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-lg sm:text-xl font-bold font-serif-luxury text-white">
            Quer montar um ensaio com locação e itens sob medida?
          </h4>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Utilize nosso simulador dinâmico de orçamento para calcular looks, maquiagem e álbuns impressos.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            playShutterSound();
            onOpenCalculator();
          }}
          className="shrink-0 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold text-xs sm:text-sm shadow-xl shadow-amber-500/20 transition-all hover:scale-105 active:scale-95"
        >
          Abrir Simulador Dinâmico
        </button>
      </div>
    </section>
  );
};
