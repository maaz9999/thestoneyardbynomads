'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, Compass, CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ParallaxImage from '@/components/ui/ParallaxImage';
import MagneticButton from '@/components/ui/MagneticButton';
import TopographicTransition from '@/components/ui/TopographicTransition';
import { EXPERIENCES_DATA } from '@/data/stoneyardData';

export default function ExperiencesPage() {
  return (
    <div className="pt-28 pb-24 space-y-24 bg-stone-950 text-ivory">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          tagline="IMMERSE IN NARAN"
          title="THE STONEYARD EXPERIENCES"
          subtitle="A cinematic scroll-based journey into slow mornings, starlit bonfire hearths, and glacial river landscapes."
        />

        {/* Highlight Naran River Video Reel */}
        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full max-w-5xl mx-auto overflow-hidden rounded border border-white/10 shadow-2xl mb-16">
          <video
            src="/videos/stoneyard/R2.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-sans text-ivory">
            <span className="uppercase tracking-widest text-bronze-light">Naran River & Trail Reel</span>
            <span className="text-stone-400">Kunhar River Glacial Waters</span>
          </div>
        </div>
      </div>

      {/* Cinematic Storytelling Sections */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-32">
        {EXPERIENCES_DATA.map((exp, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Image / Video Column */}
              <div className={`lg:col-span-7 ${isEven ? '' : 'lg:order-2'}`}>
                {exp.videoUrl ? (
                  <div className="relative aspect-[16/10] overflow-hidden rounded border border-white/10 shadow-2xl">
                    <video
                      src={exp.videoUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
                  </div>
                ) : (
                  <ParallaxImage
                    src={exp.image}
                    alt={exp.title}
                    aspectRatio={idx % 3 === 0 ? 'landscape' : 'portrait'}
                    className="shadow-2xl"
                  />
                )}
              </div>

              {/* Text Column */}
              <div className={`lg:col-span-5 space-y-6 ${isEven ? '' : 'lg:order-1'}`}>
                <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.3em] text-bronze-light">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>0{idx + 1} • {exp.category}</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-5xl text-ivory uppercase leading-tight">
                  {exp.title}
                </h2>

                <p className="font-sans text-xs uppercase tracking-widest text-bronze-light font-medium">
                  {exp.subtitle}
                </p>

                <p className="font-sans text-sm sm:text-base text-ivory/80 font-light leading-relaxed">
                  {exp.description}
                </p>

                {/* Experience Highlights list */}
                <div className="space-y-2 pt-4 border-t border-white/10">
                  {exp.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-sans text-ivory/70">
                      <CheckCircle2 className="w-3.5 h-3.5 text-bronze-light shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <TopographicTransition />

      {/* Experience Enquiry Callout */}
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <h2 className="font-serif text-3xl sm:text-4xl text-ivory uppercase">
          PLAN YOUR NARAN ITINERARY WITH US
        </h2>
        <p className="font-sans text-sm text-ivory/70 font-light max-w-xl mx-auto">
          Our team can arrange guided nature walks, fireside kehwa service, and personalized valley excursions.
        </p>
        <div className="pt-2 flex justify-center">
          <MagneticButton href="/contact">
            ENQUIRE ABOUT EXPERIENCES
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
