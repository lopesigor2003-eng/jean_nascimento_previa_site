import React, { useEffect, useState } from 'react';
import { PhotoItem } from '../types';
import { BUSINESS_INFO } from '../data/photographyData';
import { playShutterSound } from '../utils/soundEffects';
import {
  X,
  Camera,
  Aperture,
  Clock,
  Zap,
  MapPin,
  Heart,
  ChevronLeft,
  ChevronRight,
  Share2,
  Check,
  MessageCircle,
  Eye,
  Sparkles,
  ExternalLink,
  Play
} from 'lucide-react';

interface PhotoLightboxModalProps {
  photo: PhotoItem | null;
  photos: PhotoItem[];
  onClose: () => void;
  onNavigate: (photo: PhotoItem) => void;
}

export const PhotoLightboxModal: React.FC<PhotoLightboxModalProps> = ({
  photo,
  photos,
  onClose,
  onNavigate,
}) => {
  const [likes, setLikes] = useState<number>(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (photo) {
      setLikes(photo.likes);
      setHasLiked(false);
      setIsZoomed(false);
    }
  }, [photo]);

  // Keyboard controls
  useEffect(() => {
    if (!photo) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo, photos]);

  if (!photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);
  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % photos.length;
    playShutterSound();
    onNavigate(photos[nextIndex]);
  };
  const goToPrev = () => {
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    playShutterSound();
    onNavigate(photos[prevIndex]);
  };

  const handleLike = () => {
    if (!hasLiked) {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
      playShutterSound();
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `Olá Jean Nascimento! Vi a foto "${photo.title}" (${photo.categoryLabel}) no seu site e me apaixonei por esse estilo de luz e direção. Gostaria de saber valores e disponibilidade para um ensaio nesse padrão!`
  );
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div
      id="photo-lightbox-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-2 sm:p-4 md:p-6 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Close button */}
      <button
        id="btn-close-lightbox"
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/60 text-zinc-300 hover:text-white transition-all shadow-xl"
        title="Fechar (Esc)"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Navigation Arrows */}
      <button
        id="btn-lightbox-prev"
        type="button"
        onClick={goToPrev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-zinc-900/80 hover:bg-amber-600 hover:text-zinc-950 border border-zinc-700/60 text-zinc-300 transition-all shadow-xl"
        title="Foto anterior (Seta esquerda)"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        id="btn-lightbox-next"
        type="button"
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-zinc-900/80 hover:bg-amber-600 hover:text-zinc-950 border border-zinc-700/60 text-zinc-300 transition-all shadow-xl"
        title="Próxima foto (Seta direita)"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Modal Container */}
      <div
        id="lightbox-content-card"
        className="relative w-full max-w-6xl max-h-[92vh] bg-zinc-950 border border-zinc-800/80 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
      >
        {/* Left / Center: Image Area */}
        <div className="relative flex-1 bg-black/60 flex items-center justify-center overflow-hidden min-h-[340px] sm:min-h-[420px] lg:min-h-[580px]">
          <img
            id="lightbox-main-img"
            src={photo.imageUrl}
            alt={photo.title}
            onClick={() => setIsZoomed(!isZoomed)}
            className={`max-h-[82vh] w-auto object-contain transition-transform duration-300 cursor-zoom-in ${
              isZoomed ? 'scale-125 cursor-zoom-out' : 'hover:scale-[1.01]'
            }`}
          />

          {/* Video Play Overlay if video */}
          {photo.isVideo && (
            <a
              href={photo.googleMapsUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/25 transition-colors group cursor-pointer"
            >
              <div className="p-5 rounded-full bg-amber-500/95 text-zinc-950 shadow-2xl scale-100 group-hover:scale-110 transition-transform flex items-center gap-2 border-2 border-white/80">
                <Play className="w-8 h-8 fill-zinc-950 ml-1" />
              </div>
              <div className="absolute bottom-16 bg-black/75 backdrop-blur-md px-4 py-1.5 rounded-full border border-amber-500/40 text-amber-300 text-xs font-semibold">
                ▶ Assistir vídeo completo no Google Maps
              </div>
            </a>
          )}

          {/* Watermark / Signature */}
          <div className="absolute bottom-4 left-4 pointer-events-none bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 text-[11px] tracking-widest text-zinc-400 uppercase font-serif-luxury">
            Jean Nascimento © Sinop - MT
          </div>
        </div>

        {/* Right Sidebar: EXIF, Story & Action */}
        <div className="w-full lg:w-[380px] xl:w-[420px] p-5 sm:p-6 lg:p-7 flex flex-col justify-between overflow-y-auto bg-zinc-950/95 border-t lg:border-t-0 lg:border-l border-zinc-800/80 space-y-6">
          <div>
            {/* Category & Location */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/15 text-amber-300 border border-amber-500/30">
                {photo.categoryLabel}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                {photo.location}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-bold font-serif-luxury text-zinc-100 mb-2 leading-tight">
              {photo.title}
            </h2>

            {/* Story */}
            <p className="text-sm text-zinc-300 leading-relaxed mb-4">
              {photo.story}
            </p>

            {/* Mood tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {photo.mood.map((m, idx) => (
                <span
                  key={idx}
                  className="text-[11px] px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-400 border border-zinc-800"
                >
                  #{m}
                </span>
              ))}
            </div>

            {/* Technical EXIF Metadata Box */}
            <div className="bg-zinc-900/90 rounded-2xl p-4 border border-zinc-800/80 mb-6">
              <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-amber-400/90">
                <Camera className="w-4 h-4" />
                <span>Dados Técnicos da Tomada (EXIF)</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-zinc-500 block text-[10px] uppercase">Câmera</span>
                  <span className="text-zinc-200 font-medium">{photo.exif.camera}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[10px] uppercase">Lente</span>
                  <span className="text-zinc-200 font-medium">{photo.exif.lens}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Aperture className="w-3.5 h-3.5 text-amber-400" />
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase">Abertura</span>
                    <span className="text-zinc-200 font-semibold">{photo.exif.aperture}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase">Obturador</span>
                    <span className="text-zinc-200 font-semibold">{photo.exif.shutter}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase">ISO</span>
                    <span className="text-zinc-200 font-semibold">{photo.exif.iso}</span>
                  </div>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[10px] uppercase">Dist. Focal</span>
                  <span className="text-zinc-200 font-medium">{photo.exif.focalLength}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Actions & WhatsApp CTA */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between gap-3">
              <button
                id="btn-like-photo"
                type="button"
                onClick={handleLike}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium border transition-colors ${
                  hasLiked
                    ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                    : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:text-white hover:border-zinc-700'
                }`}
              >
                <Heart
                  className={`w-4 h-4 ${
                    hasLiked ? 'fill-rose-500 text-rose-500' : 'text-zinc-400'
                  }`}
                />
                <span>{likes} curtidas</span>
              </button>

              <button
                id="btn-share-photo"
                type="button"
                onClick={handleShare}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-zinc-900 text-zinc-300 border border-zinc-800 hover:text-white transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Link copiado!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Compartilhar</span>
                  </>
                )}
              </button>
            </div>

            {photo.googleMapsUrl && (
              <a
                id="btn-view-on-google-maps"
                href={photo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-amber-300 hover:text-amber-200 text-xs font-semibold border border-amber-500/30 transition-colors"
              >
                {photo.isVideo ? (
                  <Play className="w-3.5 h-3.5 fill-amber-400" />
                ) : (
                  <ExternalLink className="w-3.5 h-3.5" />
                )}
                <span>
                  {photo.isVideo
                    ? 'Assistir Vídeo no Google Maps'
                    : 'Ver Registro no Google Maps da Empresa'}
                </span>
              </a>
            )}

            <a
              id="btn-whatsapp-this-style"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold text-sm shadow-lg shadow-emerald-950/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Quero fotos com este estilo</span>
            </a>

            <p className="text-[11px] text-center text-zinc-500">
              Atendimento direto com Jean Nascimento • Sinop - MT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
