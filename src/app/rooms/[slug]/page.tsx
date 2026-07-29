'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Bed, Users, Eye, Maximize, Check, ArrowLeft, Calendar, MessageSquare } from 'lucide-react';
import { ROOMS_DATA, RESORT_DETAILS } from '@/data/stoneyardData';
import VerificationBadge from '@/components/ui/VerificationBadge';
import MagneticButton from '@/components/ui/MagneticButton';

export default function RoomDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const room = ROOMS_DATA.find((r) => r.slug === slug);

  const [activeImage, setActiveImage] = useState<string | null>(null);

  if (!room) {
    return (
      <div className="pt-36 pb-24 max-w-4xl mx-auto px-6 text-center space-y-6 text-ivory">
        <h1 className="font-serif text-4xl">Suite Not Found</h1>
        <p className="font-sans text-xs text-stone-400">The requested suite detail page could not be located.</p>
        <Link href="/rooms" className="inline-block text-bronze-light text-xs uppercase tracking-widest border-b border-bronze-light">
          Return to Rooms
        </Link>
      </div>
    );
  }

  const currentHeroImage = activeImage || room.featuredImage;

  const whatsappMessage = encodeURIComponent(
    `Hello Stoneyard by Nomads, I would like to inquire about availability and current rates for the ${room.name}.`
  );

  return (
    <div className="pt-28 pb-24 space-y-16 bg-stone-950 text-ivory">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        {/* Back Link */}
        <Link
          href="/rooms"
          className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-stone-400 hover:text-bronze-light transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Suites</span>
        </Link>

        {/* Room Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-2">
            <span className="text-xs font-sans uppercase tracking-[0.3em] text-bronze-light">
              STONEYARD SUITE
            </span>
            <motion.h1
              layoutId={`room-title-${room.id}`}
              className="font-serif text-4xl sm:text-6xl text-ivory uppercase tracking-tight"
            >
              {room.name}
            </motion.h1>
            <p className="font-sans text-sm text-ivory/80 font-light">{room.subtitle}</p>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <span className="text-[10px] font-sans uppercase tracking-widest text-stone-500">
              CURRENT RATES
            </span>
            <span className="font-serif text-2xl text-bronze-light italic">{room.priceText}</span>
          </div>
        </div>

        {/* Main Gallery Display */}
        <div className="space-y-4">
          <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full overflow-hidden rounded border border-white/10 shadow-2xl">
            <Image
              src={currentHeroImage}
              alt={room.name}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent pointer-events-none" />

            {room.clientVerificationNote && (
              <div className="absolute top-4 right-4">
                <VerificationBadge note={room.clientVerificationNote} />
              </div>
            )}
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-4">
            {room.gallery.map((imgSrc, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(imgSrc)}
                className={`relative aspect-[16/10] overflow-hidden rounded border transition-all ${
                  currentHeroImage === imgSrc ? 'border-bronze-light scale-[0.98]' : 'border-white/10 opacity-70 hover:opacity-100'
                }`}
              >
                <Image src={imgSrc} alt={`${room.name} gallery image ${idx + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Room Specs & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8">
          {/* Left Column: Description & Amenities */}
          <div className="lg:col-span-8 space-y-10">
            {/* Quick Specs Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-stone-900 border border-white/10 rounded">
              <div className="space-y-1">
                <span className="flex items-center gap-1.5 text-[10px] font-sans uppercase tracking-widest text-stone-400">
                  <Bed className="w-3.5 h-3.5 text-bronze-light" /> Bed Type
                </span>
                <p className="font-sans text-xs font-semibold text-ivory">{room.bedType}</p>
              </div>

              <div className="space-y-1">
                <span className="flex items-center gap-1.5 text-[10px] font-sans uppercase tracking-widest text-stone-400">
                  <Users className="w-3.5 h-3.5 text-bronze-light" /> Capacity
                </span>
                <p className="font-sans text-xs font-semibold text-ivory">{room.capacity}</p>
              </div>

              <div className="space-y-1">
                <span className="flex items-center gap-1.5 text-[10px] font-sans uppercase tracking-widest text-stone-400">
                  <Eye className="w-3.5 h-3.5 text-bronze-light" /> View
                </span>
                <p className="font-sans text-xs font-semibold text-ivory truncate">{room.view}</p>
              </div>

              <div className="space-y-1">
                <span className="flex items-center gap-1.5 text-[10px] font-sans uppercase tracking-widest text-stone-400">
                  <Maximize className="w-3.5 h-3.5 text-bronze-light" /> Size
                </span>
                <p className="font-sans text-xs font-semibold text-ivory">{room.size}</p>
              </div>
            </div>

            {/* Overview */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl uppercase tracking-wide text-ivory">OVERVIEW & AMBIENCE</h2>
              <p className="font-sans text-sm text-ivory/80 font-light leading-relaxed">
                {room.longDescription}
              </p>
            </div>

            {/* Amenities Grid */}
            <div className="space-y-6">
              <h2 className="font-serif text-2xl uppercase tracking-wide text-ivory">SUITE AMENITIES</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {room.amenities.map((amenity, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-stone-900/60 border border-white/5 rounded text-xs font-sans text-ivory/80">
                    <Check className="w-4 h-4 text-bronze-light shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verification Note Callout if applicable */}
            {room.clientVerificationNote && (
              <div className="p-4 bg-stone-900 border-l-2 border-bronze-light text-xs font-sans text-ivory/70 space-y-1">
                <span className="text-bronze-light uppercase font-semibold text-[10px] tracking-widest block">
                  NOTE ON UNCONFIRMED AMENITIES:
                </span>
                <p>{room.clientVerificationNote}</p>
              </div>
            )}
          </div>

          {/* Right Column: Enquiry Form Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 p-8 bg-stone-900 border border-white/10 rounded-sm space-y-6 shadow-2xl">
              <h3 className="font-serif text-2xl text-ivory uppercase tracking-wide">RESERVE THIS SUITE</h3>
              <p className="font-sans text-xs text-ivory/70 font-light leading-relaxed">
                Enquire directly with our team to verify seasonal dates, rates, and personalized arrangements.
              </p>

              <div className="space-y-4">
                <a
                  href={`https://wa.me/${RESORT_DETAILS.whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 bg-bronze-light text-stone-950 font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-bronze transition-colors shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>ENQUIRE ON WHATSAPP</span>
                </a>

                <Link
                  href={`/contact?room=${encodeURIComponent(room.name)}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 border border-white/20 text-ivory font-sans text-xs uppercase tracking-[0.2em] font-medium hover:border-bronze-light hover:text-bronze-light transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>USE BOOKING FORM</span>
                </Link>
              </div>

              <div className="pt-4 border-t border-white/10 text-[11px] font-sans text-stone-400 leading-relaxed text-center">
                “Your stay is confirmed only after the resort responds and verifies availability.”
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
