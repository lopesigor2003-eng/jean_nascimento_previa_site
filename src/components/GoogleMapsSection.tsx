import React from 'react';
import { BUSINESS_INFO, TESTIMONIALS_DATA } from '../data/photographyData';
import { playShutterSound } from '../utils/soundEffects';
import {
  MapPin,
  Star,
  ExternalLink,
  Clock,
  Phone,
  ShieldCheck,
  Navigation,
  MessageCircle,
  Camera
} from 'lucide-react';

export const GoogleMapsSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-amber-300 bg-amber-500/10 border border-amber-500/20 mb-3">
          <MapPin className="w-3.5 h-3.5" />
          <span>Localização & Presença no Google</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-zinc-100 tracking-tight">
          Estúdio & Atendimento em Sinop - MT
        </h2>
        <p className="text-zinc-400 mt-2 text-sm sm:text-base">
          Localizado no Jardim Ibirapuera em Sinop. Atendimento com hora marcada para garantir total privacidade e exclusividade durante o seu ensaio.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Business Google Card & Info */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          {/* Verified Google Maps Box */}
          <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-7 shadow-2xl relative overflow-hidden">
            {/* Ambient subtle glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-semibold mb-1 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Perfil Verificado no Google Maps
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-zinc-100">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Fotógrafo em Sinop, Mato Grosso
                </p>
              </div>

              {/* Google 5.0 Star badge */}
              <div className="flex flex-col items-center bg-zinc-950 p-3 rounded-2xl border border-zinc-800 text-center shrink-0">
                <span className="text-xl font-extrabold text-amber-400">5.0</span>
                <div className="flex text-amber-400 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[10px] text-zinc-500 mt-1">48 avaliações</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
              "Especialista em fotografia feminina e celebrações familiares. Atendimento impecável e estúdio acolhedor no Mato Grosso."
            </p>

            {/* Address & Info list */}
            <div className="space-y-3.5 text-xs text-zinc-300 border-t border-zinc-800/80 pt-5 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-zinc-200 block">Endereço:</span>
                  <span>{BUSINESS_INFO.neighborhood}, {BUSINESS_INFO.city} - {BUSINESS_INFO.state}, Brasil</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-zinc-200 block">Horário de Atendimento:</span>
                  <span>{BUSINESS_INFO.workingHours}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-zinc-200 block">WhatsApp / Contato:</span>
                  <span>{BUSINESS_INFO.phone}</span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                id="btn-open-google-maps"
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playShutterSound()}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold border border-zinc-700 transition-all hover:scale-[1.02]"
              >
                <Navigation className="w-3.5 h-3.5 text-amber-400" />
                <span>Abrir no Google Maps</span>
                <ExternalLink className="w-3 h-3 text-zinc-400" />
              </a>

              <a
                id="btn-whatsapp-maps-section"
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                  'Olá Jean! Encontrei você pelo Google Maps e gostaria de saber sobre horários para ensaio fotográfico em Sinop.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Review Snippet */}
          <div className="bg-zinc-950/80 border border-zinc-800/80 rounded-2xl p-4 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
              <Camera className="w-5 h-5" />
            </div>
            <div className="text-xs">
              <span className="text-zinc-200 font-semibold block">Agendamento Exclusivo:</span>
              <span className="text-zinc-400">
                Garantimos o estúdio 100% reservado para você durante sua sessão, com camarim e troca de roupas com total conforto.
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Google Maps Interactive Embed & Street Preview */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="relative w-full h-[400px] sm:h-[480px] lg:h-full min-h-[380px] rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900">
            {/* Embedded Google Map iframe pointing directly to the Sinop coordinates */}
            <iframe
              id="google-maps-embed-frame"
              title="Google Maps Location - Jean Nascimento Fotografia"
              src={`https://maps.google.com/maps?q=${BUSINESS_INFO.coordinates.lat},${BUSINESS_INFO.coordinates.lng}&hl=pt-BR&z=16&output=embed`}
              className="w-full h-full border-0 grayscale contrast-125 invert brightness-90 hover:grayscale-0 hover:invert-0 transition-all duration-500"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Overlay card in map corner */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm bg-zinc-950/90 backdrop-blur-md border border-zinc-800 p-3.5 rounded-2xl shadow-xl flex items-center gap-3 pointer-events-none">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping shrink-0" />
              <div className="text-xs">
                <span className="text-zinc-200 font-bold block">Sinop - Mato Grosso</span>
                <span className="text-zinc-400 text-[11px]">Jardim Ibirapuera • Ensaios externos e estúdio</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Grid below maps */}
      <div className="mt-16">
        <h3 className="text-xl font-bold font-serif-luxury text-zinc-200 mb-6 text-center">
          O que dizem os clientes no Google
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-5 flex flex-col justify-between hover:border-zinc-700 transition-colors"
            >
              <div>
                <div className="flex text-amber-400 mb-2">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-zinc-300 italic leading-relaxed mb-4">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-zinc-800">
                <img
                  src={t.avatar}
                  alt={t.clientName}
                  className="w-8 h-8 rounded-full object-cover border border-amber-500/30"
                />
                <div>
                  <span className="text-xs font-semibold text-zinc-200 block">{t.clientName}</span>
                  <span className="text-[10px] text-zinc-500">{t.roleOrEvent}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
