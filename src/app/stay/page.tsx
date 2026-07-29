'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Compass, ShieldCheck } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ParallaxImage from '@/components/ui/ParallaxImage';
import MagneticButton from '@/components/ui/MagneticButton';
import TopographicTransition from '@/components/ui/TopographicTransition';

export default function StayPage() {
  return (
    <div className="pt-28 pb-24 space-y-24 bg-stone-950 text-ivory">
      {/* Editorial Header Hero */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          tagline="THE PHILOSOPHY"
          title="THE STAY AT STONEYARD"
          subtitle="An editorial narrative of mountain stillness, contemporary slate architecture, and warm hospitality in Naran."
        />

        <div className="relative aspect-[21/9] w-full overflow-hidden rounded border border-white/10 shadow-2xl">
          <Image
            src="/images/stoneyard/stoneyard-exterior-day.webp"
            alt="Stoneyard contemporary mountain architecture day view"
            fill
            priority
            className="object-cover object-center filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
            <div className="space-y-1">
              <span className="text-xs font-sans uppercase tracking-[0.3em] text-bronze-light">LOCATION</span>
              <p className="font-serif text-2xl text-ivory">Jheel Road, Naran Valley</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: The Quiet Location & Architecture */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-sans uppercase tracking-[0.3em] text-bronze-light">
            01 • LOCATION & DESIGN
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-ivory uppercase leading-tight">
            CONTEMPORARY MOUNTAIN <br />
            <span className="italic text-bronze-light font-light">ARCHITECTURE.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-ivory/80 font-light leading-relaxed">
            Positioned along Jheel Road, Stoneyard by Nomads harmonizes modern geometric forms with local natural granite and dark cedar timber. The design minimizes artificial noise and maximizes natural light, creating an environment where the valley’s stillness becomes part of the interior space.
          </p>

          <div className="p-6 bg-stone-900 border border-white/10 space-y-3 font-sans text-xs">
            <div className="flex items-center gap-2 text-bronze-light">
              <ShieldCheck className="w-4 h-4" />
              <span className="uppercase tracking-widest font-semibold">Architectural Philosophy</span>
            </div>
            <p className="text-ivory/70 leading-relaxed">
              Every stone, shadow, and timber beam was chosen to respect Naran’s rugged high-altitude ecosystem while offering uncompromised modern warmth.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <ParallaxImage
            src="/images/stoneyard/arrival-at-stoneyard.webp"
            alt="Arrival experience at Stoneyard by Nomads"
            aspectRatio="portrait"
          />
        </div>
      </section>

      <TopographicTransition />

      {/* Section 2: Relaxed Daily Rhythm & Warm Interiors */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1 relative">
          <ParallaxImage
            src="/images/stoneyard/quiet-reading-mountain-view.webp"
            alt="Quiet reading with mountain view"
            aspectRatio="landscape"
          />
          <div className="hidden sm:block absolute -bottom-8 -right-8 w-2/3 border-4 border-stone-950 shadow-2xl">
            <ParallaxImage
              src="/images/stoneyard/stone-black-bronze-textures.webp"
              alt="Stone black and bronze material textures"
              aspectRatio="square"
            />
          </div>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
          <span className="text-xs font-sans uppercase tracking-[0.3em] text-bronze-light">
            02 • INTERIOR AMBIENCE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-ivory uppercase leading-tight">
            WARM INTERIORS & <br />
            <span className="italic text-bronze-light font-light">TACTILE TEXTURES.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-ivory/80 font-light leading-relaxed">
            Inside Stoneyard, dark charcoal surfaces are complemented by warm bronze highlights, handcrafted wool textiles, and deep wood tones. Built-in window seats allow guests to linger over books, conversation, or steaming tea as cloud mist drifts down the valley.
          </p>
        </div>
      </section>

      {/* Section 3: Courtyard & Outdoor Spaces */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-sans uppercase tracking-[0.3em] text-bronze-light">
            03 • OUTDOOR COURTYARDS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-ivory uppercase leading-tight">
            GARDEN PATHWAYS & <br />
            <span className="italic text-bronze-light font-light">TWILIGHT HEARTHS.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-ivory/80 font-light leading-relaxed">
            Our stone courtyard and garden terraces connect the retreat directly to the surrounding pine mountain slopes. At sunset, the space lights up with warm ambient lanterns and open stone hearth fires for evening gatherings.
          </p>

          <div className="pt-4">
            <MagneticButton href="/contact">
              ENQUIRE ABOUT YOUR STAY
            </MagneticButton>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <ParallaxImage
            src="/images/stoneyard/courtyard-evening.webp"
            alt="Courtyard at evening with warm fire pit"
            aspectRatio="portrait"
          />
        </div>
      </section>
    </div>
  );
}
