import React from 'react';
import { BUSINESS_INFO, GEAR_DATA } from '../data/photographyData';
import { playShutterSound } from '../utils/soundEffects';
import { Camera, Sparkles, HeartHandshake, Eye, Award, CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Artistic Visual / Photographer Portrait Representation */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl bg-zinc-950 aspect-[4/5] max-w-md mx-auto">
            <img
              src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlqwdvkVT-zsF6dBRs5vS5nbE6FEhpfrLr7b2-ijIyy09NMRVTFQMk2rZ4t6jn9YZGA7rhCLynJKk_vGdB44GUF589YDIdl_PzCGaLi2t8c2HjvuuGykCy7v-zd4SSQoBRCTlfjXA=w1200"
              alt="Jean Nascimento Fotografia em Sinop - MT"
              className="w-full h-full object-cover grayscale contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

            {/* Floating Tag */}
            <div className="absolute bottom-6 left-6 right-6 bg-zinc-900/90 backdrop-blur-md border border-zinc-800 p-4 rounded-2xl">
              <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider block">
                Jean Nascimento
              </span>
              <p className="text-xs text-zinc-300 font-medium">
                Fotógrafo Especialista em Ensaios Femininos & Eventos em Sinop - MT
              </p>
            </div>
          </div>

          {/* Decorative Camera Specs Badge */}
          <div className="absolute -top-4 -left-4 hidden sm:flex items-center gap-2 bg-zinc-900/95 border border-amber-500/40 px-3.5 py-2 rounded-2xl shadow-xl">
            <Camera className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-bold text-zinc-200">Sony Alpha G-Master 4K/8K</span>
          </div>
        </div>

        {/* Right: Narrative & Methodology */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-amber-300 bg-amber-500/10 border border-amber-500/20">
            <Eye className="w-3.5 h-3.5" />
            <span>O Olhar Por Trás da Lente</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-serif-luxury text-zinc-100 tracking-tight leading-tight">
            "A fotografia não é sobre poses perfeitas; é sobre verdade, luz e emoção."
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Com base em Sinop - Mato Grosso, construí minha trajetória focado em retratar a beleza genuína de pessoas reais. Sei que se colocar diante de uma câmera profissional pode gerar insegurança — por isso, criei um método de direção afetiva e descontraída.
          </p>

          <p className="text-zinc-400 text-sm leading-relaxed">
            Mais de 90% das mulheres que fotografo nunca tinham feito um ensaio antes. No meu estúdio ou sob a luz dourada do cerrado mato-grossense, você é ouvida, acolhida e guiada em cada respiração. O resultado são imagens que revelam sua força, delicadeza e poder.
          </p>

          {/* 3 Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-zinc-900/60 border border-zinc-800 p-4 rounded-2xl">
              <HeartHandshake className="w-5 h-5 text-amber-400 mb-2" />
              <h4 className="text-xs font-bold text-zinc-100 uppercase tracking-wider mb-1">
                Direção Leve
              </h4>
              <p className="text-[11px] text-zinc-400 leading-snug">
                Você nunca fica perdida sem saber o que fazer com as mãos ou olhar.
              </p>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 p-4 rounded-2xl">
              <Sparkles className="w-5 h-5 text-amber-400 mb-2" />
              <h4 className="text-xs font-bold text-zinc-100 uppercase tracking-wider mb-1">
                Luz de Cinema
              </h4>
              <p className="text-[11px] text-zinc-400 leading-snug">
                Iluminação com modificadores suaves que valorizam sua fisionomia.
              </p>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 p-4 rounded-2xl">
              <Award className="w-5 h-5 text-amber-400 mb-2" />
              <h4 className="text-xs font-bold text-zinc-100 uppercase tracking-wider mb-1">
                Entrega Impecável
              </h4>
              <p className="text-[11px] text-zinc-400 leading-snug">
                Tratamento manual fino foto a foto e galeria privativa online.
              </p>
            </div>
          </div>

          {/* Gear specs footer preview */}
          <div className="pt-4 border-t border-zinc-800/80">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-2">
              Equipamento & Tecnologia Utilizados:
            </span>
            <div className="flex flex-wrap gap-2">
              {GEAR_DATA.map((gear, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-zinc-900 text-zinc-300 px-3 py-1.5 rounded-xl border border-zinc-800 flex items-center gap-1.5"
                >
                  <CheckCircle className="w-3 h-3 text-amber-400" />
                  {gear.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
