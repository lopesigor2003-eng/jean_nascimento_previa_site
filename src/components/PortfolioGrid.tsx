import React, { useState, useMemo } from 'react';
import { PhotoItem, PhotoCategory } from '../types';
import { playShutterSound } from '../utils/soundEffects';
import {
  Grid,
  Columns,
  Sparkles,
  MapPin,
  Camera,
  Heart,
  Search,
  Filter,
  ArrowUpRight,
  Maximize2,
  Play,
  Video
} from 'lucide-react';

interface PortfolioGridProps {
  photos: PhotoItem[];
  onSelectPhoto: (photo: PhotoItem) => void;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ photos, onSelectPhoto }) => {
  const [activeCategory, setActiveCategory] = useState<PhotoCategory>('todos');
  const [layoutMode, setLayoutMode] = useState<'editorial' | 'grid'>('editorial');
  const [searchQuery, setSearchQuery] = useState('');
  const [likedPhotos, setLikedPhotos] = useState<Record<string, number>>({});

  const categories: { id: PhotoCategory; label: string }[] = [
    { id: 'todos', label: 'Todos os Trabalhos' },
    { id: 'casamento', label: 'Casamentos' },
    { id: 'individual', label: 'Ensaios Individuais' },
    { id: 'casal', label: 'Casal & Pré-Wedding' },
    { id: 'natureza', label: 'Natureza & Pôr do Sol' },
    { id: 'video', label: 'Vídeos & Cinema' },
  ];

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) => {
      const matchesCat = activeCategory === 'todos' || photo.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        photo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        photo.story.toLowerCase().includes(searchQuery.toLowerCase()) ||
        photo.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        photo.mood.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesSearch;
    });
  }, [photos, activeCategory, searchQuery]);

  const handleLike = (e: React.MouseEvent, photo: PhotoItem) => {
    e.stopPropagation();
    playShutterSound();
    setLikedPhotos((prev) => ({
      ...prev,
      [photo.id]: (prev[photo.id] || photo.likes) + 1,
    }));
  };

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header section */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-amber-300 bg-amber-500/10 border border-amber-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Portfólio Selecionado & Autoral</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif-luxury text-zinc-100 tracking-tight">
            Galeria de Ensaios & Histórias
          </h2>
          <p className="text-zinc-400 mt-2 max-w-2xl text-sm sm:text-base">
            Cada clique é uma celebração da espontaneidade e luz real. Clique em qualquer foto para visualizar em alta resolução com ficha técnica EXIF.
          </p>
        </div>

        {/* Search input & Layout switcher */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              id="input-portfolio-search"
              type="text"
              placeholder="Buscar por estilo, pôr do sol..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs sm:text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-amber-500/50"
            />
          </div>

          <div className="flex items-center bg-zinc-900/80 p-1 rounded-2xl border border-zinc-800">
            <button
              id="btn-layout-editorial"
              type="button"
              onClick={() => {
                playShutterSound();
                setLayoutMode('editorial');
              }}
              title="Visual Editorial Dinâmico"
              className={`p-2 rounded-xl text-xs transition-colors ${
                layoutMode === 'editorial'
                  ? 'bg-amber-500 text-zinc-950 font-bold shadow'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Columns className="w-4 h-4" />
            </button>
            <button
              id="btn-layout-grid"
              type="button"
              onClick={() => {
                playShutterSound();
                setLayoutMode('grid');
              }}
              title="Grade Regular"
              className={`p-2 rounded-xl text-xs transition-colors ${
                layoutMode === 'grid'
                  ? 'bg-amber-500 text-zinc-950 font-bold shadow'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Pills Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
        {categories.map((cat) => {
          const count =
            cat.id === 'todos'
              ? photos.length
              : photos.filter((p) => p.category === cat.id).length;

          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              id={`btn-cat-${cat.id}`}
              type="button"
              onClick={() => {
                playShutterSound();
                setActiveCategory(cat.id);
              }}
              className={`whitespace-nowrap px-4 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all border ${
                isActive
                  ? 'bg-amber-500 text-zinc-950 border-amber-400 shadow-lg shadow-amber-500/20'
                  : 'bg-zinc-900/90 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-200'
              }`}
            >
              {cat.label} <span className="opacity-70 ml-1">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Photos Grid Display */}
      {filteredPhotos.length === 0 ? (
        <div className="py-20 text-center bg-zinc-950/60 rounded-3xl border border-zinc-800 p-8">
          <Filter className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-zinc-300">Nenhum ensaio encontrado</h3>
          <p className="text-sm text-zinc-500 mt-1">Tente pesquisar por outros termos ou selecionar outra categoria.</p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory('todos');
              setSearchQuery('');
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-amber-500/20 text-amber-300 text-xs font-semibold hover:bg-amber-500/30"
          >
            Limpar Filtros
          </button>
        </div>
      ) : (
        <div
          className={
            layoutMode === 'editorial'
              ? 'columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6'
              : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
          }
        >
          {filteredPhotos.map((photo, index) => {
            const likesCount = likedPhotos[photo.id] || photo.likes;

            return (
              <div
                key={photo.id}
                id={`photo-card-${photo.id}`}
                onClick={() => {
                  playShutterSound();
                  onSelectPhoto(photo);
                }}
                className="group relative break-inside-avoid rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800/80 shadow-xl hover:border-amber-500/50 transition-all duration-300 cursor-pointer transform-gpu hover:-translate-y-1.5"
              >
                {/* Photo Image */}
                <div className="relative overflow-hidden aspect-[4/5] w-full bg-zinc-950">
                  <img
                    src={photo.thumbnailUrl}
                    alt={photo.title}
                    loading={index < 4 ? 'eager' : 'lazy'}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Dark gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Top Badge: Category & Location */}
                  <div className="absolute top-4 inset-x-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-black/60 backdrop-blur-md text-amber-300 border border-amber-500/30">
                      {photo.categoryLabel}
                    </span>

                    <button
                      id={`btn-card-like-${photo.id}`}
                      type="button"
                      onClick={(e) => handleLike(e, photo)}
                      className="pointer-events-auto p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white/80 hover:text-rose-400 hover:scale-110 transition-transform"
                      title="Curtir foto"
                    >
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Center Action (Play for Video, Maximize for Photo) */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${
                    photo.isVideo ? 'opacity-90 group-hover:opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}>
                    {photo.isVideo ? (
                      <div className="p-4 rounded-full bg-amber-500/90 text-zinc-950 font-bold shadow-2xl scale-95 group-hover:scale-110 transition-transform duration-300 flex items-center gap-2 border-2 border-white/50">
                        <Play className="w-5 h-5 fill-zinc-950" />
                        <span className="text-xs font-bold uppercase tracking-wider pr-1">Assistir Teaser</span>
                      </div>
                    ) : (
                      <div className="p-3.5 rounded-full bg-amber-500 text-zinc-950 font-bold shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-300 flex items-center gap-2">
                        <Maximize2 className="w-5 h-5" />
                        <span className="text-xs font-bold uppercase tracking-wider pr-1">Ver em Alta</span>
                      </div>
                    )}
                  </div>

                  {/* Bottom Content Info */}
                  <div className="absolute bottom-0 inset-x-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-1.5 text-xs text-amber-400/90 mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{photo.location}</span>
                    </div>

                    <h3 className="text-lg font-bold font-serif-luxury text-white mb-1.5 leading-snug">
                      {photo.title}
                    </h3>

                    {/* Camera spec pill */}
                    <div className="flex items-center justify-between text-xs text-zinc-400 pt-2 border-t border-white/10">
                      <span className="flex items-center gap-1">
                        <Camera className="w-3.5 h-3.5 text-amber-400" />
                        {photo.exif.lens.split(' ')[1] || 'Prime'} • {photo.exif.aperture}
                      </span>
                      <span className="flex items-center gap-1 text-zinc-300 font-medium">
                        <Heart className="w-3.5 h-3.5 fill-rose-500/60 text-rose-500" />
                        {likesCount}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
