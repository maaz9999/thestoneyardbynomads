'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Maximize2 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Lightbox from '@/components/gallery/Lightbox';
import { GALLERY_ITEMS, GalleryItem } from '@/data/stoneyardData';

const categories = ['All', 'Property', 'Rooms', 'Dining', 'Experiences', 'Naran', 'Evenings'] as const;

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'All') return true;
    return item.category.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <div className="pt-28 pb-24 space-y-12 bg-stone-950 text-ivory">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10">
        <SectionHeading
          tagline="PHOTOGRAPHIC DIARY"
          title="THE STONEYARD GALLERY"
          subtitle="Explore authentic photography and video reels of Stoneyard by Nomads, showcasing our slate architecture, warm suites, dining, and Naran river landscapes."
        />

        {/* Filter Buttons Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-4 border-y border-white/10">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full font-sans text-xs uppercase tracking-[0.2em] transition-all duration-300 ${
                  isActive
                    ? 'bg-bronze-light text-stone-950 font-semibold shadow-lg'
                    : 'bg-stone-900/80 text-ivory/70 border border-white/10 hover:border-bronze-light/50 hover:text-ivory'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Mixed-Ratio Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, idx) => {
              const aspectClasses = {
                square: 'aspect-square',
                portrait: 'aspect-[3/4]',
                landscape: 'aspect-[16/10]',
                wide: 'aspect-[21/9]',
              };

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setLightboxIndex(idx)}
                  className={`group relative overflow-hidden rounded border border-white/10 bg-stone-900 cursor-pointer ${aspectClasses[item.aspectRatio]}`}
                >
                  {item.type === 'video' ? (
                    <div className="relative w-full h-full">
                      <video
                        src={item.src}
                        muted
                        playsInline
                        loop
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-stone-950/40 flex items-center justify-center">
                        <div className="p-4 rounded-full bg-bronze-light/90 text-stone-950 shadow-xl group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 fill-current" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}

                  {/* Gradient Overlay & Caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                    <div className="flex justify-end">
                      <span className="p-2 rounded-full bg-stone-900/80 border border-white/20 text-ivory">
                        <Maximize2 className="w-4 h-4" />
                      </span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-sans uppercase tracking-widest text-bronze-light">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-lg text-ivory uppercase tracking-wide">
                        {item.title}
                      </h3>
                      <p className="font-sans text-[11px] text-ivory/70 line-clamp-2">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <Lightbox
        items={filteredItems}
        selectedIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />
    </div>
  );
}
