import React, { useState, useRef } from 'react';
import { BEFORE_AFTER_DATA } from '../data/photographyData';
import { playShutterSound } from '../utils/soundEffects';
import { Sparkles, Sliders, CheckCircle2, Wand2 } from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(52); // percentage 0 to 100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const currentItem = BEFORE_AFTER_DATA[activeItemIndex];

  const handlePointerDown = () => {
    isDraggingRef.current = true;
  };

  const handlePointerMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDraggingRef.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const offset = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (offset / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <section id="antes-e-depois" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-amber-300 bg-amber-500/10 border border-amber-500/20 mb-3">
            <Sliders className="w-3.5 h-3.5" />
            <span>Tratamento Fine Art & Colorimetria</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-zinc-100 tracking-tight">
            Antes e Depois: A Alquimia da Luz
          </h2>
          <p className="text-zinc-400 mt-2 max-w-2xl text-sm sm:text-base">
            Arraste a linha divisória para comparar o arquivo RAW capturado na câmera e o resultado final com a colorimetria autoral exclusiva de Jean Nascimento.
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-2 bg-zinc-900/80 p-1.5 rounded-2xl border border-zinc-800 self-start md:self-auto">
          {BEFORE_AFTER_DATA.map((item, idx) => (
            <button
              key={item.id}
              id={`btn-ba-tab-${idx}`}
              type="button"
              onClick={() => {
                playShutterSound();
                setActiveItemIndex(idx);
                setSliderPos(50);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeItemIndex === idx
                  ? 'bg-amber-500 text-zinc-950 shadow-md'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Interactive Comparison Slider Container */}
        <div className="lg:col-span-8">
          <div
            ref={containerRef}
            id="ba-slider-container"
            onMouseDown={handlePointerDown}
            onMouseMove={handlePointerMove}
            onMouseUp={handlePointerUp}
            onTouchStart={handlePointerDown}
            onTouchMove={handlePointerMove}
            onTouchEnd={handlePointerUp}
            className="relative h-[380px] sm:h-[480px] md:h-[560px] rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 select-none cursor-ew-resize bg-zinc-900"
          >
            {/* After Image (Full background) */}
            <img
              src={currentItem.afterImage}
              alt="Final Fine Art"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute top-5 right-5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-amber-500/30 text-[11px] font-semibold tracking-wider uppercase text-amber-300 pointer-events-none">
              Final Fine Art
            </div>

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
            >
              <img
                src={currentItem.beforeImage}
                alt="Arquivo RAW original"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: 'saturate(0.52) contrast(0.82) brightness(0.93)' }}
              />
              <div className="absolute top-5 left-5 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-[11px] font-semibold tracking-wider uppercase text-zinc-300">
                RAW Sem Edição
              </div>
            </div>

            {/* Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)] pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-amber-500 text-zinc-950 font-bold flex items-center justify-center shadow-2xl border-2 border-white">
                <Sliders className="w-4 h-4" />
              </div>
            </div>

            {/* Helper tip at bottom */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md px-4 py-1 rounded-full text-zinc-300 text-xs pointer-events-none border border-white/10">
              ⟵ Arraste para comparar ⟶
            </div>
          </div>
        </div>

        {/* Breakdown Card */}
        <div className="lg:col-span-4 bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-6 sm:p-7 space-y-5">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Wand2 className="w-4 h-4" />
            <span>Processo Criativo</span>
          </div>

          <h3 className="text-xl font-bold font-serif-luxury text-zinc-100">
            {currentItem.title}
          </h3>

          <p className="text-sm text-zinc-300 leading-relaxed">
            {currentItem.description}
          </p>

          <div className="pt-3 border-t border-zinc-800/80">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-3">
              Destaques do Tratamento:
            </span>
            <ul className="space-y-2.5">
              {currentItem.retouchHighlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
            <p className="text-xs text-amber-200">
              Cada imagem entregue passa por curadoria criteriosa e tratamento artesanal individual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
