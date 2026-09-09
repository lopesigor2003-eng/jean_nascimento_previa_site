import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/photographyData';
import { playShutterSound } from '../utils/soundEffects';
import confetti from 'canvas-confetti';
import {
  X,
  Calculator,
  CheckCircle2,
  Calendar,
  MapPin,
  Sparkles,
  MessageCircle,
  HelpCircle,
  Clock
} from 'lucide-react';

interface SessionCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SessionCalculatorModal: React.FC<SessionCalculatorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [sessionType, setSessionType] = useState<'feminino' | 'casal' | 'evento' | 'corporativo'>('feminino');
  const [locationType, setLocationType] = useState<'estudio' | 'externa' | 'domicilio'>('externa');
  const [outfits, setOutfits] = useState<'2' | '3' | '4'>('2');
  const [hasMakeup, setHasMakeup] = useState(true);
  const [hasAlbum, setHasAlbum] = useState(false);
  const [hasReelsVideo, setHasReelsVideo] = useState(true);
  const [clientName, setClientName] = useState('');
  const [preferredMonth, setPreferredMonth] = useState('Próximos 15 a 30 dias');

  if (!isOpen) return null;

  // Calculate estimated investment
  const basePrices = {
    feminino: 690,
    casal: 890,
    evento: 1200,
    corporativo: 550,
  };

  const outfitCost = outfits === '3' ? 120 : outfits === '4' ? 240 : 0;
  const makeupCost = hasMakeup ? 190 : 0;
  const albumCost = hasAlbum ? 450 : 0;
  const reelsCost = hasReelsVideo ? 200 : 0;

  const totalEstimate =
    basePrices[sessionType] + outfitCost + makeupCost + albumCost + reelsCost;

  const sessionNames = {
    feminino: 'Ensaio Feminino & Empoderamento',
    casal: 'Ensaio Pré-Wedding / Casal',
    evento: 'Cobertura de Evento / Sunset',
    corporativo: 'Retrato Corporativo / Branding',
  };

  const locationNames = {
    estudio: 'Estúdio Jean Nascimento (Jardim Ibirapuera, Sinop - MT)',
    externa: 'Externa no Pôr do Sol (Sinop e região campestre de MT)',
    domicilio: 'Em Domicílio / Espaço Próprio',
  };

  const handleSendWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();
    playShutterSound();

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
      });
    } catch {
      // Fallback
    }

    const message = encodeURIComponent(
      `Olá Jean Nascimento! Fiz uma simulação de ensaio no seu site e gostaria de confirmar disponibilidade de data!\n\n` +
      `👤 Nome: ${clientName || 'Cliente'}\n` +
      `📸 Tipo de Sessão: ${sessionNames[sessionType]}\n` +
      `📍 Locação Escolhida: ${locationNames[locationType]}\n` +
      `👗 Trocas de Looks: ${outfits} looks\n` +
      `✨ Maquiagem & Produção: ${hasMakeup ? 'Sim (Inclusa)' : 'Vou por minha conta'}\n` +
      `📖 Álbum Fine Art: ${hasAlbum ? 'Sim (Desejo álbum impresso)' : 'Apenas digital'}\n` +
      `🎬 Teaser Reels/TikTok 4K: ${hasReelsVideo ? 'Sim (Quero o vídeo)' : 'Não'}\n` +
      `📅 Período Desejado: ${preferredMonth}\n` +
      `💰 Estimativa Calculada: A partir de R$ ${totalEstimate.toLocaleString('pt-BR')}\n\n` +
      `Como podemos agendar uma conversa rápida para fechar a data em Sinop?`
    );

    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div
      id="calculator-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-6 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        {/* Close Button */}
        <button
          id="btn-close-calculator"
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-amber-300 bg-amber-500/10 border border-amber-500/20 mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Simulador de Sessão Interativo</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-zinc-100">
            Personalize Seu Ensaio em Sinop
          </h2>
          <p className="text-sm text-zinc-400 mt-1">
            Escolha os detalhes e receba na hora uma estimativa transparente sem compromisso.
          </p>
        </div>

        <form onSubmit={handleSendWhatsapp} className="space-y-6">
          {/* Step 1: Session Type */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2.5">
              1. Qual o tipo de registro fotográfico?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {(
                [
                  { id: 'feminino', label: 'Feminino Autoral', hint: 'Autoestima & Revista' },
                  { id: 'casal', label: 'Casal / Noivos', hint: 'Pôr do sol romântico' },
                  { id: 'evento', label: 'Evento / Festa', hint: 'Sunsets & Celebrações' },
                  { id: 'corporativo', label: 'Corporativo', hint: 'Autoridade & Negócios' },
                ] as const
              ).map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    playShutterSound();
                    setSessionType(item.id);
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all ${
                    sessionType === item.id
                      ? 'bg-amber-500/15 border-amber-500 text-amber-200 shadow-md'
                      : 'bg-zinc-900 border-zinc-800/80 text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <span className="block text-xs font-bold text-zinc-100">{item.label}</span>
                  <span className="block text-[11px] text-zinc-500 mt-0.5">{item.hint}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Location */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2.5">
              2. Preferência de Locação em Sinop - MT
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {(
                [
                  { id: 'externa', label: 'Externa ao Pôr do Sol', sub: 'Campos, Lago & Chácaras MT' },
                  { id: 'estudio', label: 'Estúdio Climatizado', sub: 'Jardim Ibirapuera, Sinop' },
                  { id: 'domicilio', label: 'Local Próprio', sub: 'Residência, fazenda ou empresa' },
                ] as const
              ).map((loc) => (
                <button
                  key={loc.id}
                  type="button"
                  onClick={() => {
                    playShutterSound();
                    setLocationType(loc.id);
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all ${
                    locationType === loc.id
                      ? 'bg-amber-500/15 border-amber-500 text-amber-200'
                      : 'bg-zinc-900 border-zinc-800/80 text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <span className="block text-xs font-bold text-zinc-100">{loc.label}</span>
                  <span className="block text-[11px] text-zinc-500 mt-0.5">{loc.sub}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Outfits & Upgrades */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2.5">
                3. Quantidade de Looks
              </label>
              <div className="flex gap-2">
                {(['2', '3', '4'] as const).map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => {
                      playShutterSound();
                      setOutfits(num);
                    }}
                    className={`flex-1 py-2 rounded-xl text-xs font-semibold border transition-all ${
                      outfits === num
                        ? 'bg-amber-500 text-zinc-950 font-bold border-amber-400'
                        : 'bg-zinc-900 text-zinc-400 border-zinc-800'
                    }`}
                  >
                    {num} Looks
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2.5">
                4. Período Previsto
              </label>
              <select
                value={preferredMonth}
                onChange={(e) => setPreferredMonth(e.target.value)}
                className="w-full py-2.5 px-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 focus:outline-none focus:border-amber-500"
              >
                <option value="Próximos 15 a 30 dias">Próximos 15 a 30 dias</option>
                <option value="Próximo Mês">Próximo Mês</option>
                <option value="Data Especial / Aniversário">Data Especial / Aniversário</option>
                <option value="Ainda definindo">Apenas consultando valores</option>
              </select>
            </div>
          </div>

          {/* Add-ons Checkboxes */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2.5">
              5. Opcionais & Mimos Especiais
            </label>
            <div className="space-y-2">
              <label className="flex items-center justify-between p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 cursor-pointer hover:border-zinc-700">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={hasMakeup}
                    onChange={(e) => setHasMakeup(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-500 focus:ring-amber-500 bg-zinc-800 border-zinc-700"
                  />
                  <div>
                    <span className="text-xs font-semibold text-zinc-200 block">
                      Maquiagem & Penteado com Profissional Parceira
                    </span>
                    <span className="text-[11px] text-zinc-500">
                      Produção feita no próprio estúdio com retoque durante o ensaio
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-amber-400">+ R$ 190</span>
              </label>

              <label className="flex items-center justify-between p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 cursor-pointer hover:border-zinc-700">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={hasReelsVideo}
                    onChange={(e) => setHasReelsVideo(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-500 focus:ring-amber-500 bg-zinc-800 border-zinc-700"
                  />
                  <div>
                    <span className="text-xs font-semibold text-zinc-200 block">
                      Vídeo Teaser Vertical 4K para Redes Sociais
                    </span>
                    <span className="text-[11px] text-zinc-500">
                      Take cinematográfico com os melhores momentos da sessão
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-amber-400">+ R$ 200</span>
              </label>

              <label className="flex items-center justify-between p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 cursor-pointer hover:border-zinc-700">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={hasAlbum}
                    onChange={(e) => setHasAlbum(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-500 focus:ring-amber-500 bg-zinc-800 border-zinc-700"
                  />
                  <div>
                    <span className="text-xs font-semibold text-zinc-200 block">
                      Álbum Impresso Luxo Fine Art (20x20)
                    </span>
                    <span className="text-[11px] text-zinc-500">
                      Capa em linho e papel fotográfico de alta durabilidade
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-amber-400">+ R$ 450</span>
              </label>
            </div>
          </div>

          {/* Client name input */}
          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1">
              Seu Nome (opcional):
            </label>
            <input
              type="text"
              placeholder="Ex: Amanda Santos"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full py-2.5 px-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Estimate summary & CTA */}
          <div className="p-5 rounded-3xl bg-gradient-to-br from-amber-500/15 via-zinc-900 to-zinc-900 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-amber-300 uppercase tracking-wider font-semibold block">
                Investimento Estimado
              </span>
              <div className="flex items-baseline gap-1.5 mt-0.5">
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-serif-luxury">
                  R$ {totalEstimate.toLocaleString('pt-BR')}
                </span>
                <span className="text-xs text-zinc-400">em até 3x ou desconto à vista</span>
              </div>
            </div>

            <button
              id="btn-confirm-calculator-whatsapp"
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm shadow-xl shadow-emerald-950/60 transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enviar no WhatsApp de Jean</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
