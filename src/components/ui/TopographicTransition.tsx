'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function TopographicTransition() {
  return (
    <div className="relative w-full py-12 overflow-hidden bg-stone-950 flex items-center justify-center">
      {/* Topographic Lines Animated SVG Container */}
      <div className="w-full max-w-7xl mx-auto px-6 opacity-30 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <motion.path
            d="M0 60 Q 300 0, 600 60 T 1200 60"
            stroke="#C09A5A"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M0 30 Q 300 90, 600 30 T 1200 30"
            stroke="#A8782C"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 2.4, ease: "easeInOut", delay: 0.2 }}
          />
          <motion.path
            d="M0 90 Q 300 30, 600 90 T 1200 90"
            stroke="#82796C"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 2.8, ease: "easeInOut", delay: 0.4 }}
          />
        </svg>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-bronze-light/50 to-transparent" />
        <div className="mx-4 text-[10px] font-sans uppercase tracking-[0.4em] text-bronze-light">
          STONEYARD
        </div>
        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-bronze-light/50 to-transparent" />
      </div>
    </div>
  );
}
