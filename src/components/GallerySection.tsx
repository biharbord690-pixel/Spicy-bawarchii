import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, X, ZoomIn, ChevronLeft, ChevronRight, Image } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Signature', 'Culinary Art', 'Ambience'];

  // Filter images
  const filteredItems = GALLERY_ITEMS.filter((item) => {
    return activeFilter === 'All' || item.category === activeFilter;
  });

  const openLightbox = (id: string) => {
    const idx = GALLERY_ITEMS.findIndex((item) => item.id === id);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : GALLERY_ITEMS.length - 1));
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev < GALLERY_ITEMS.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <div className="w-full bg-luxury-black min-h-screen pt-28 pb-32 px-4 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Title Header */}
      <div className="text-center mb-10 max-w-3xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-[0.4em] text-luxury-orange font-bold">The Visual Chronicles</span>
        <h1 className="font-serif text-4xl sm:text-6xl text-white tracking-wide mt-2 mb-4 leading-tight">
          Spicy Bawarchi Grand Gallery
        </h1>
        <p className="font-serif italic text-base text-luxury-gold/80 max-w-lg mx-auto">
          Take a visual tour through our grand dining lounges, custom events tables, and meticulously prepared culinary highlights.
        </p>
      </div>

      {/* Gallery Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10 border-b border-white/5 pb-8">
        {categories.map((cat) => {
          const isActive = activeFilter === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-[10px] uppercase tracking-[0.18em] font-mono font-semibold transition-all duration-500 whitespace-nowrap cursor-pointer border ${
                isActive
                  ? 'text-white bg-gradient-to-r from-luxury-orange to-red-600 border-luxury-orange shadow-[0_5px_15px_rgba(255,107,0,0.3)] scale-102 font-bold'
                  : 'text-white/60 hover:text-white bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/15'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid of gallery assets */}
      <div id="gallery-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={item.id}
              onClick={() => openLightbox(item.id)}
              className="group cursor-pointer relative aspect-4/3 rounded-2xl overflow-hidden border border-white/5 bg-neutral-900 shadow-lg hover:shadow-luxury-orange/10 transition-all duration-500"
            >
              {/* Image asset */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Dynamic hover glassmorphism cover card */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-end">
                <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-luxury-orange mb-1.5 block">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg tracking-wide text-white font-medium flex items-center gap-2">
                    {item.title}
                    <ZoomIn size={14} className="text-[#FFC857]" />
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* LUXURY SCENIC LIGHTBOX OVERLAY */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div
            id="gallery-lightbox"
            onClick={closeLightbox}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md"
          >
            {/* Top Close indicator */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-white/70 hover:text-white cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Left Nav trigger */}
            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 text-white/70 hover:text-white cursor-pointer hover:bg-white/10 transition-all"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Lightbox content container */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[70vh] w-full flex flex-col items-center"
            >
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                src={GALLERY_ITEMS[lightboxIndex].image}
                alt={GALLERY_ITEMS[lightboxIndex].title}
                className="max-h-[70vh] max-w-full object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
              />

              {/* Bottom dynamic details plate */}
              <div className="mt-4 text-center">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-luxury-orange block">
                  {GALLERY_ITEMS[lightboxIndex].category}
                </span>
                <h3 className="font-serif text-xl text-white tracking-wide mt-1.5">
                  {GALLERY_ITEMS[lightboxIndex].title}
                </h3>
              </div>
            </div>

            {/* Right Nav trigger */}
            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 text-white/70 hover:text-white cursor-pointer hover:bg-white/10 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
