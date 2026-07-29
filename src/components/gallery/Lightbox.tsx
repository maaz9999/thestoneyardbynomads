'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { GalleryItem } from '@/data/stoneyardData';

interface LightboxProps {
  items: GalleryItem[];
  selectedIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export default function Lightbox({
  items,
  selectedIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const currentItem = selectedIndex !== null ? items[selectedIndex] : null;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        const next = selectedIndex > 0 ? selectedIndex - 1 : items.length - 1;
        onNavigate(next);
      }
      if (e.key === 'ArrowRight') {
        const next = selectedIndex < items.length - 1 ? selectedIndex + 1 : 0;
        onNavigate(next);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, items, onClose, onNavigate]);

  if (selectedIndex === null || !currentItem) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/95 backdrop-blur-xl p-4 sm:p-8"
        onClick={onClose}
      >
        {/* Top bar controls */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10 text-ivory">
          <div className="flex items-center gap-3">
            <span className="font-serif text-lg tracking-widest text-bronze-light">
              {selectedIndex + 1} / {items.length}
            </span>
            <span className="h-4 w-[1px] bg-white/20" />
            <span className="font-sans text-xs uppercase tracking-widest text-ivory/80">
              {currentItem.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-3 text-ivory hover:text-bronze-light border border-white/20 rounded-full transition-colors bg-stone-900/60"
            aria-label="Close fullscreen lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Previous Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            const prev = selectedIndex > 0 ? selectedIndex - 1 : items.length - 1;
            onNavigate(prev);
          }}
          className="absolute left-4 sm:left-8 z-20 p-3 text-ivory hover:text-bronze-light border border-white/20 rounded-full transition-colors bg-stone-900/60"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            const next = selectedIndex < items.length - 1 ? selectedIndex + 1 : 0;
            onNavigate(next);
          }}
          className="absolute right-4 sm:right-8 z-20 p-3 text-ivory hover:text-bronze-light border border-white/20 rounded-full transition-colors bg-stone-900/60"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Media Container */}
        <div
          className="relative max-w-5xl max-h-[80vh] w-full h-full flex flex-col items-center justify-center z-10"
          onClick={(e) => e.stopPropagation()}
        >
          {currentItem.type === 'video' ? (
            <video
              src={currentItem.src}
              controls
              autoPlay
              playsInline
              className="max-w-full max-h-[70vh] object-contain rounded border border-white/10 shadow-2xl"
            />
          ) : (
            <div className="relative w-full h-[70vh] flex items-center justify-center">
              <Image
                src={currentItem.src}
                alt={currentItem.title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          )}

          {/* Caption text */}
          <div className="mt-6 text-center max-w-xl">
            <h3 className="font-serif text-xl text-ivory tracking-wide uppercase">
              {currentItem.title}
            </h3>
            <p className="font-sans text-xs text-ivory/70 mt-1 font-light">
              {currentItem.caption}
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
