'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sun, Moon, ArrowRight, MapPin, ShieldCheck, Film } from 'lucide-react';
import Mountain3DHero from '@/components/hero/Mountain3DHero';
import SectionHeading from '@/components/ui/SectionHeading';
import RoomCard from '@/components/rooms/RoomCard';
import ParallaxImage from '@/components/ui/ParallaxImage';
import MagneticButton from '@/components/ui/MagneticButton';
import TopographicTransition from '@/components/ui/TopographicTransition';
import VideoReelCard from '@/components/ui/VideoReelCard';
import { ROOMS_DATA, EXPERIENCES_DATA, GALLERY_ITEMS, RESORT_DETAILS } from '@/data/stoneyardData';

export default function HomePage() {
  const [dayNightMode, setDayNightMode] = useState<'day' | 'night'>('night');

  const featuredRooms = ROOMS_DATA.slice(0, 3);
  const featuredExperiences = EXPERIENCES_DATA.slice(0, 3);
  const previewGallery = GALLERY_ITEMS.slice(0, 6);

  return (
    <div className="space-y-0 bg-stone-950">
      {/* 1. Immersive Blue-Hour Hero */}
      <Mountain3DHero />

      {/* 2. Sanctuary Narrative Intro */}
      <section id="explore" className="relative py-24 md:py-32 bg-stone-950 text-ivory overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative Text */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.3em] text-bronze-light">
                <span className="h-[1px] w-8 bg-bronze-light/50" />
                <span>SANCTUARY IN NARAN</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.1] text-ivory">
                AN ARCHITECTURAL RETREAT <br />
                <span className="italic text-bronze-light font-light">FRAMED BY STILLNESS.</span>
              </h2>

              <p className="font-sans text-sm sm:text-base text-ivory/80 font-light leading-relaxed">
                Situated on Jheel Road in Naran, Stoneyard by Nomads was crafted as an antidote to urban noise. Built with local dark slate, warm timber, and solid bronze fixtures, every corner encourages slow mornings, quiet reading, and unhurried observation of Naran’s changing mountain light.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10 text-xs font-sans">
                <div>
                  <span className="block text-bronze-light font-serif text-2xl font-semibold">Jheel Road</span>
                  <span className="text-stone-400 uppercase tracking-widest text-[10px]">Prime Quiet Location</span>
                </div>
                <div>
                  <span className="block text-bronze-light font-serif text-2xl font-semibold">Natural Slate & Wood</span>
                  <span className="text-stone-400 uppercase tracking-widest text-[10px]">Mountain Materials</span>
                </div>
              </div>

              <div className="pt-2">
                <MagneticButton href="/stay">
                  DISCOVER THE STORY
                </MagneticButton>
              </div>
            </div>

            {/* Right Editorial Image Frame */}
            <div className="lg:col-span-5 relative">
              <ParallaxImage
                src="/images/stoneyard/stoneyard-exterior-day.webp"
                alt="Stoneyard exterior day view"
                aspectRatio="portrait"
                className="w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. High-Impact Video Reels Section (R1.mp4 & R2.mp4) */}
      <section className="py-24 bg-stone-900 border-y border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            tagline="MOTION & AMBIENCE"
            title="CINEMATIC MOUNTAIN REELS"
            subtitle="Experience the quiet stillness of Stoneyard by Nomads and the roaring wilderness of Kaghan Valley through our video reels."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12">
            {/* Reel 1: Resort & Suite Ambience (R1.mp4) */}
            <VideoReelCard
              src="/videos/stoneyard/R1.mp4"
              title="Resort & Suite Ambience"
              subtitle="Interior Comforts & Mountain Views"
              aspectRatio="video"
            />

            {/* Reel 2: Kunar River & Mountain Valley (R2.mp4) */}
            <VideoReelCard
              src="/videos/stoneyard/R2.mp4"
              title="Kunhar River & High Peaks"
              subtitle="Glacial Trails & Pine Forests"
              aspectRatio="video"
            />
          </div>
        </div>
      </section>

      <TopographicTransition />

      {/* 4. Featured Rooms */}
      <section className="py-24 bg-stone-950 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            tagline="ACCOMMODATION"
            title="SUITES & MOUNTAIN RESIDENCES"
            subtitle="Thoughtfully appointed rooms featuring floor-to-ceiling framed vistas, natural stone bathrooms, and tactile artisan finishes."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/rooms"
              className="inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.25em] text-ivory hover:text-bronze-light transition-colors py-4 px-8 border border-white/20 hover:border-bronze-light"
            >
              <span>EXPLORE ALL SUITES</span>
              <ArrowRight className="w-4 h-4 text-bronze-light" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Day-to-Night Property Transition Interactive Section */}
      <section className="py-24 bg-stone-900/80 relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center space-y-4 mb-12">
            <span className="text-xs font-sans uppercase tracking-[0.3em] text-bronze-light">
              ATMOSPHERIC AMBIENCE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-ivory uppercase">
              DAY TO NIGHT AT STONEYARD
            </h2>
            <p className="font-sans text-sm text-ivory/70 max-w-xl mx-auto font-light">
              Toggle between crisp daylight architecture and blue-hour fireside serenity.
            </p>

            {/* Toggle Switch */}
            <div className="inline-flex items-center p-1 bg-stone-950 border border-white/10 rounded-full mt-4">
              <button
                onClick={() => setDayNightMode('day')}
                className={`flex items-center gap-2 px-6 py-2 rounded-full font-sans text-xs uppercase tracking-widest transition-all ${
                  dayNightMode === 'day'
                    ? 'bg-bronze-light text-stone-950 font-semibold shadow-lg'
                    : 'text-ivory/70 hover:text-ivory'
                }`}
              >
                <Sun className="w-3.5 h-3.5" /> Day Light
              </button>
              <button
                onClick={() => setDayNightMode('night')}
                className={`flex items-center gap-2 px-6 py-2 rounded-full font-sans text-xs uppercase tracking-widest transition-all ${
                  dayNightMode === 'night'
                    ? 'bg-bronze-light text-stone-950 font-semibold shadow-lg'
                    : 'text-ivory/70 hover:text-ivory'
                }`}
              >
                <Moon className="w-3.5 h-3.5" /> Blue Hour
              </button>
            </div>
          </div>

          {/* Interactive Image Frame */}
          <div className="relative aspect-[16/9] w-full max-w-5xl mx-auto overflow-hidden rounded border border-white/10 shadow-2xl">
            <Image
              src={
                dayNightMode === 'day'
                  ? '/images/stoneyard/stoneyard-exterior-day.webp'
                  : '/images/stoneyard/hero-stoneyard-blue-hour.webp'
              }
              alt="Day to Night transition view of Stoneyard"
              fill
              sizes="100vw"
              className="object-cover object-center transition-all duration-700 filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-sans text-ivory">
              <span className="uppercase tracking-widest text-bronze-light">
                {dayNightMode === 'day' ? 'Sunlit Granite & Pine View' : 'Starlit Blue Hour Lighting'}
              </span>
              <span className="text-stone-400">Jheel Road, Naran</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Booking CTA Section */}
      <section className="relative py-28 bg-stone-950 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/stoneyard/booking-escape-cta.webp"
            alt="Stoneyard Escape CTA Backdrop"
            fill
            className="object-cover object-center filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-stone-950" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
          <span className="text-xs font-sans uppercase tracking-[0.35em] text-bronze-light">
            YOUR MOUNTAIN RETREAT AWAITS
          </span>

          <h2 className="font-serif text-4xl sm:text-6xl text-ivory uppercase tracking-tight">
            BEGIN YOUR ESCAPE TO NARAN.
          </h2>

          <p className="font-sans text-sm sm:text-base text-ivory/80 font-light max-w-xl mx-auto leading-relaxed">
            Reserve your suite at Stoneyard by Nomads. Rates and availability confirmed directly upon inquiry.
          </p>

          <div className="pt-4 flex justify-center">
            <MagneticButton href="/contact">
              RESERVE VIA WHATSAPP / ENQUIRY
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
