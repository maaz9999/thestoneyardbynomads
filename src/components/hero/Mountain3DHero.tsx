'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';

// Pure Three.js Canvas component with SSR disabled for clean client rendering
const Mountain3DHeroCanvas = dynamic(
  () => import('./Mountain3DHeroCanvas'),
  { ssr: false }
);

export default function Mountain3DHero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = -(e.clientY / innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-stone-950 text-ivory">
      {/* Central Background Real Photograph */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-700 ease-out scale-105"
        style={{
          transform: mounted && !isMobile
            ? `translate3d(${mousePos.x * -12}px, ${mousePos.y * -8}px, 0) scale(1.05)`
            : 'scale(1.05)',
        }}
      >
        <Image
          src="/images/stoneyard/hero-stoneyard-blue-hour.webp"
          alt="Stoneyard by Nomads Blue Hour Mountain Resort"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-90 contrast-110"
        />
        {/* Layered mountain mist & dark vignette overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-stone-950/50 to-stone-950/90" />
      </div>

      {/* Pure Three.js 3D Particle Canvas overlay (Desktop & client mounted only) */}
      {mounted && !isMobile && (
        <Mountain3DHeroCanvas mousePos={mousePos} />
      )}

      {/* Static Fallback contour overlay for mobile / initial loading */}
      {(!mounted || isMobile) && (
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-transparent to-stone-950 pointer-events-none" />
      )}

      {/* Hero Content Overlay */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center pt-20">
        {/* Subtitle / Location pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-bronze-light/30 bg-stone-900/60 backdrop-blur-md mb-8"
        >
          <MapPin className="w-3.5 h-3.5 text-bronze-light" />
          <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-ivory/90">
            JHEEL ROAD • NARAN, PAKISTAN
          </span>
        </motion.div>

        {/* Hero Heading: WHERE THE MOUNTAINS SLOW TIME. */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-ivory leading-[1.05] uppercase max-w-4xl"
        >
          WHERE THE MOUNTAINS <br className="hidden sm:inline" />
          <span className="italic font-light text-bronze-light text-shadow-glow">SLOW TIME.</span>
        </motion.h1>

        {/* Hero Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-sans text-sm sm:text-base md:text-lg text-ivory/80 max-w-2xl font-light mt-6 leading-relaxed"
        >
          A contemporary mountain retreat in Naran, created for quiet mornings, warm evenings and uninterrupted views.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-5"
        >
          <MagneticButton href="/contact">
            BOOK YOUR ESCAPE
          </MagneticButton>
          <a
            href="#explore"
            className="font-sans text-xs uppercase tracking-[0.2em] text-ivory/70 hover:text-bronze-light transition-colors py-3 px-6 border-b border-white/20 hover:border-bronze-light"
          >
            EXPLORE RESORT
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-ivory/60"
      >
        <span className="font-sans text-[9px] uppercase tracking-[0.3em]">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-bronze-light" />
        </motion.div>
      </motion.div>
    </section>
  );
}
