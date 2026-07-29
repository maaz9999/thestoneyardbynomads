'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ParallaxImageProps {
  src: string;
  alt: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'wide' | 'tall';
  className?: string;
  priority?: boolean;
}

export default function ParallaxImage({
  src,
  alt,
  aspectRatio = 'landscape',
  className = '',
  priority = false,
}: ParallaxImageProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const aspectClasses = {
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[16/10]',
    wide: 'aspect-[21/9]',
    tall: 'aspect-[9/16]',
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) / (width / 2);
    const y = (e.clientY - (top + height / 2)) / (height / 2);
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden group rounded-sm border border-white/10 bg-stone-900 ${aspectClasses[aspectRatio]} ${className}`}
    >
      {/* Background layer image with scale & parallax shift */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{
          scale: 1.06,
          x: mousePos.x * 6,
          y: mousePos.y * 6,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 20 }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-110 transition-transform duration-1000 ease-out"
        />
      </motion.div>

      {/* Subtle overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />

      {/* Light sheen effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </motion.div>
  );
}
