'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  tagline?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  tagline,
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {tagline && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-bronze-light font-sans mb-3 justify-center"
        >
          {centered && <span className="h-[1px] w-8 bg-bronze-light/40" />}
          <span>{tagline}</span>
          <span className="h-[1px] w-8 bg-bronze-light/40" />
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ivory uppercase tracking-tight leading-tight"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-sans text-sm sm:text-base text-ivory/70 max-w-2xl font-light mt-4 leading-relaxed mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
