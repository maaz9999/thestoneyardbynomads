'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import RoomCard from '@/components/rooms/RoomCard';
import MagneticButton from '@/components/ui/MagneticButton';
import { ROOMS_DATA } from '@/data/stoneyardData';

export default function RoomsPage() {
  return (
    <div className="pt-28 pb-24 space-y-16 bg-stone-950 text-ivory">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          tagline="ACCOMMODATION"
          title="SUITES & MOUNTAIN RESIDENCES"
          subtitle="Designed with local slate stone, custom bronze accents, and floor-to-ceiling vistas overlooking Naran’s pine ridges."
        />

        {/* Video Ambiance Reel Section */}
        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full max-w-5xl mx-auto overflow-hidden rounded border border-white/10 shadow-2xl mb-16">
          <video
            src="/videos/stoneyard/R1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-sans text-ivory">
            <span className="uppercase tracking-widest text-bronze-light">Interior Ambiance Reel</span>
            <span className="text-stone-400">Stoneyard Suites</span>
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {ROOMS_DATA.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        {/* Rates Disclaimer & Direct Enquiry CTA */}
        <div className="mt-20 p-8 bg-stone-900 border border-white/10 rounded max-w-3xl mx-auto text-center space-y-4 font-sans">
          <span className="text-xs uppercase tracking-[0.3em] text-bronze-light font-medium">
            RESERVATION INFORMATION
          </span>
          <p className="text-sm text-ivory/80 font-light leading-relaxed">
            Room rates fluctuate based on seasonal mountain dates in Naran. All suites display <span className="text-bronze-light font-serif italic">“Contact for current rates”</span> to ensure accurate pricing and verified availability directly with our resort team.
          </p>
          <div className="pt-2 flex justify-center">
            <MagneticButton href="/contact">
              ENQUIRE FOR RATES & DATES
            </MagneticButton>
          </div>
        </div>
      </div>
    </div>
  );
}
