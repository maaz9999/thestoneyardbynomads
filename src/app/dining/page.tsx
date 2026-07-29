'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Coffee, Utensils, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ParallaxImage from '@/components/ui/ParallaxImage';
import MagneticButton from '@/components/ui/MagneticButton';
import TopographicTransition from '@/components/ui/TopographicTransition';
import { RESORT_DETAILS } from '@/data/stoneyardData';

export default function DiningPage() {
  const whatsappMenuUrl = `https://wa.me/${RESORT_DETAILS.whatsappNumber}?text=${encodeURIComponent(
    'Hello Stoneyard by Nomads, I would like to request the seasonal dining menu.'
  )}`;

  return (
    <div className="pt-28 pb-24 space-y-24 bg-stone-950 text-ivory">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          tagline="CULINARY SANCTUARY"
          title="THE DINING EXPERIENCE"
          subtitle="Nourishing, slow-cooked mountain cuisine, traditional green kehwa, and open balcony breakfasts facing Kaghan Valley peaks."
        />
      </div>

      {/* Hero Heading 1: SLOW BREAKFASTS. ENDLESS VIEWS. */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.3em] text-bronze-light">
            <Coffee className="w-3.5 h-3.5" />
            <span>MORNING RITUAL</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl text-ivory uppercase leading-[1.05]">
            SLOW BREAKFASTS. <br />
            <span className="italic text-bronze-light font-light">ENDLESS VIEWS.</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-ivory/80 font-light leading-relaxed">
            Mornings at Stoneyard begin with the aroma of freshly ground coffee, traditional green kehwa with cardamom, oven-baked flatbreads, local mountain honey, and seasonal jams. Served either in our dining lounge or delivered directly to your private balcony bench.
          </p>

          <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/10 text-xs font-sans">
            <div>
              <span className="text-bronze-light font-serif text-xl font-semibold">Artisanal Spread</span>
              <p className="text-stone-400 font-light text-[11px]">Fresh preserves & baked pastries</p>
            </div>
            <div>
              <span className="text-bronze-light font-serif text-xl font-semibold">Terrace Service</span>
              <p className="text-stone-400 font-light text-[11px]">Private balcony dining facing peaks</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <ParallaxImage
            src="/images/stoneyard/mountain-breakfast.webp"
            alt="Slow mountain breakfast spread"
            aspectRatio="landscape"
            className="shadow-2xl"
          />
        </div>
      </section>

      {/* Feature 2: Balcony Tea & Coffee */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1 relative">
          <ParallaxImage
            src="/images/stoneyard/private-balcony-tea.webp"
            alt="Private balcony tea service with mountain view"
            aspectRatio="portrait"
            className="shadow-2xl"
          />
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
          <span className="text-xs font-sans uppercase tracking-[0.3em] text-bronze-light">
            AFTERNOON RITUAL
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl text-ivory uppercase leading-tight">
            AFTERNOON TEA & <br />
            <span className="italic text-bronze-light font-light">VALLEY STILLNESS.</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-ivory/80 font-light leading-relaxed">
            As afternoon light softens over Jheel Road, enjoy fragrant mountain teas, local spiced chai, and light afternoon treats framed by northern pine ridges.
          </p>
        </div>
      </section>

      <TopographicTransition />

      {/* Hero Heading 2: WARM TABLES AFTER COLD MOUNTAIN DAYS. */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.3em] text-bronze-light">
            <Utensils className="w-3.5 h-3.5" />
            <span>EVENING HEARTH DINING</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl text-ivory uppercase leading-[1.05]">
            WARM TABLES AFTER <br />
            <span className="italic text-bronze-light font-light">COLD MOUNTAIN DAYS.</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-ivory/80 font-light leading-relaxed">
            When twilight brings crisp high-altitude temperatures, retreat into our warm dining room. Our chefs prepare wholesome, comforting evening meals featuring local herbs, slow-cooked meats, seasonal vegetables, and aromatic grains.
          </p>

          <div className="p-6 bg-stone-900 border border-white/10 rounded space-y-3 font-sans text-xs">
            <div className="flex items-center gap-2 text-bronze-light">
              <ShieldCheck className="w-4 h-4" />
              <span className="uppercase tracking-widest font-semibold">Seasonal Menu Verification</span>
            </div>
            <p className="text-ivory/70 leading-relaxed">
              In accordance with mountain fresh supply, our complete food menu is updated daily. Contact us to request current seasonal offerings.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <ParallaxImage
            src="/images/stoneyard/warm-dinner-setting.webp"
            alt="Warm indoor dinner setting after mountain day"
            aspectRatio="landscape"
            className="shadow-2xl"
          />
        </div>
      </section>

      {/* Request Menu CTA Box */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="p-10 bg-stone-900 border border-white/10 rounded text-center space-y-6">
          <h3 className="font-serif text-3xl text-ivory uppercase tracking-wide">
            REQUEST SEASONAL DINING MENU
          </h3>
          <p className="font-sans text-sm text-ivory/70 max-w-lg mx-auto font-light">
            Receive our latest dining menu, breakfast inclusions, and dietary preference options directly via WhatsApp or email.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={whatsappMenuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-bronze-light text-stone-950 font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-bronze transition-colors shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>REQUEST MENU ON WHATSAPP</span>
            </a>
            <MagneticButton href="/contact">
              SEND AN INQUIRY
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
