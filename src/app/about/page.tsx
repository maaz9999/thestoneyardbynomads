'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Sparkles, Feather } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ParallaxImage from '@/components/ui/ParallaxImage';
import MagneticButton from '@/components/ui/MagneticButton';
import TopographicTransition from '@/components/ui/TopographicTransition';

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24 space-y-24 bg-stone-950 text-ivory">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          tagline="OUR STORY"
          title="ABOUT STONEYARD BY NOMADS"
          subtitle="A sanctuary crafted to quiet urban noise, create room to breathe, and foster meaningful connection with family and friends."
        />

        <div className="relative aspect-[21/9] w-full overflow-hidden rounded border border-white/10 shadow-2xl">
          <Image
            src="/images/stoneyard/mountain-mist-background.webp"
            alt="Swirling mountain mist over Naran pine valley"
            fill
            priority
            className="object-cover object-center filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-center sm:text-left">
            <span className="text-xs font-sans uppercase tracking-[0.3em] text-bronze-light block mb-1">
              BRAND PHILOSOPHY
            </span>
            <p className="font-serif text-3xl sm:text-4xl text-ivory">
              “Room to breathe. Time to slow down.”
            </p>
          </div>
        </div>
      </div>

      {/* Core Narrative */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.3em] text-bronze-light">
            <Feather className="w-3.5 h-3.5" />
            <span>THE NOMADS ETHOS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-ivory uppercase leading-tight">
            ESCAPING CITY NOISE. <br />
            <span className="italic text-bronze-light font-light">CREATING ROOM TO BREATHE.</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-ivory/80 font-light leading-relaxed">
            Stoneyard by Nomads was conceived as an intentional retreat from the overwhelming speed of modern city life. Set against Naran’s dramatic high-altitude ridges on Jheel Road, our resort brings together modern architectural precision with raw granite and warm timber.
          </p>

          <p className="font-sans text-sm sm:text-base text-ivory/80 font-light leading-relaxed">
            Whether gathered around an open fireside hearth or sitting silently by a window bench as evening fog descends over the valley, Stoneyard provides the space for authentic rest and genuine presence with those who matter most.
          </p>

          {/* Editable Brand Story Placeholder Box */}
          <div className="p-6 bg-stone-900 border border-white/10 rounded space-y-2 font-sans text-xs">
            <div className="flex items-center gap-2 text-bronze-light font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Authentic Brand Heritage Note</span>
            </div>
            <p className="text-stone-400 font-light leading-relaxed">
              [Editable Story Placeholder: Official founding details, family heritage, and architectural inspirations are maintained with client verification to preserve total brand authenticity.]
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          <ParallaxImage
            src="/images/stoneyard/nomads-emblem-mountain-art.webp"
            alt="Nomads emblem mountain art"
            aspectRatio="portrait"
          />
          <ParallaxImage
            src="/images/stoneyard/stone-black-bronze-textures.webp"
            alt="Stone black and bronze materials"
            aspectRatio="portrait"
          />
        </div>
      </section>

      <TopographicTransition />

      {/* Pillars of Stoneyard */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        <SectionHeading
          tagline="RETREAT PILLARS"
          title="THE FOUR CORNERSTONES"
          subtitle="Principles guiding every detail at Stoneyard by Nomads."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-8 bg-stone-900 border border-white/10 rounded space-y-4">
            <span className="font-serif text-3xl text-bronze-light">01</span>
            <h3 className="font-serif text-xl text-ivory uppercase">Quiet Luxury</h3>
            <p className="font-sans text-xs text-ivory/70 font-light leading-relaxed">
              Unpretentious refinement, tactile natural materials, and quiet acoustics throughout our suites.
            </p>
          </div>

          <div className="p-8 bg-stone-900 border border-white/10 rounded space-y-4">
            <span className="font-serif text-3xl text-bronze-light">02</span>
            <h3 className="font-serif text-xl text-ivory uppercase">Mountain Stillness</h3>
            <p className="font-sans text-xs text-ivory/70 font-light leading-relaxed">
              Framed architectural vistas that highlight Naran’s shifting morning light and blue-hour evenings.
            </p>
          </div>

          <div className="p-8 bg-stone-900 border border-white/10 rounded space-y-4">
            <span className="font-serif text-3xl text-bronze-light">03</span>
            <h3 className="font-serif text-xl text-ivory uppercase">Warm Hospitality</h3>
            <p className="font-sans text-xs text-ivory/70 font-light leading-relaxed">
              Thoughtful, non-intrusive service centered around warm tea rituals and guest comfort.
            </p>
          </div>

          <div className="p-8 bg-stone-900 border border-white/10 rounded space-y-4">
            <span className="font-serif text-3xl text-bronze-light">04</span>
            <h3 className="font-serif text-xl text-ivory uppercase">Meaningful Rest</h3>
            <p className="font-sans text-xs text-ivory/70 font-light leading-relaxed">
              Creating space to disconnect from screen noise and reconnect with family and nature.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <h2 className="font-serif text-3xl sm:text-4xl text-ivory uppercase">
          EXPERIENCE STONEYARD FIRSTHAND
        </h2>
        <p className="font-sans text-sm text-ivory/70 font-light max-w-xl mx-auto">
          Plan your escape to Naran and experience mountain hospitality on Jheel Road.
        </p>
        <div className="pt-2 flex justify-center">
          <MagneticButton href="/contact">
            BOOK YOUR STAY
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
