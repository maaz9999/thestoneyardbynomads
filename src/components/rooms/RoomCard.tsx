'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, Bed, Eye, ArrowRight } from 'lucide-react';
import { Room } from '@/data/stoneyardData';
import VerificationBadge from '@/components/ui/VerificationBadge';

interface RoomCardProps {
  room: Room;
}

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <motion.div
      layoutId={`room-card-${room.id}`}
      className="group relative bg-stone-900 border border-white/10 overflow-hidden flex flex-col justify-between hover:border-bronze-light/50 transition-all duration-500 rounded-sm"
    >
      {/* Room Image Container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <motion.div layoutId={`room-image-${room.id}`} className="absolute inset-0">
          <Image
            src={room.featuredImage}
            alt={room.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />

        {/* Verification badge if applicable */}
        {room.clientVerificationNote && (
          <div className="absolute top-4 right-4 z-10">
            <VerificationBadge note={room.clientVerificationNote} />
          </div>
        )}
      </div>

      {/* Room Details Body */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-3">
          <motion.h3
            layoutId={`room-title-${room.id}`}
            className="font-serif text-2xl sm:text-3xl text-ivory group-hover:text-bronze-light transition-colors duration-300 uppercase tracking-wide"
          >
            {room.name}
          </motion.h3>
          <p className="font-sans text-xs text-bronze-light uppercase tracking-widest font-medium">
            {room.subtitle}
          </p>
          <p className="font-sans text-xs text-ivory/70 font-light leading-relaxed line-clamp-3">
            {room.description}
          </p>
        </div>

        {/* Feature Specs Pills */}
        <div className="grid grid-cols-3 gap-2 py-4 border-y border-white/10 text-xs font-sans text-ivory/80">
          <div className="flex flex-col items-start gap-1">
            <span className="flex items-center gap-1.5 text-[10px] uppercase text-stone-500 tracking-wider">
              <Bed className="w-3.5 h-3.5 text-bronze-light" /> Bed
            </span>
            <span className="font-medium text-ivory truncate w-full text-[11px]">{room.bedType}</span>
          </div>

          <div className="flex flex-col items-start gap-1">
            <span className="flex items-center gap-1.5 text-[10px] uppercase text-stone-500 tracking-wider">
              <Users className="w-3.5 h-3.5 text-bronze-light" /> Capacity
            </span>
            <span className="font-medium text-ivory truncate w-full text-[11px]">{room.capacity}</span>
          </div>

          <div className="flex flex-col items-start gap-1">
            <span className="flex items-center gap-1.5 text-[10px] uppercase text-stone-500 tracking-wider">
              <Eye className="w-3.5 h-3.5 text-bronze-light" /> View
            </span>
            <span className="font-medium text-ivory truncate w-full text-[11px]">{room.view}</span>
          </div>
        </div>

        {/* Price & Action */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex flex-col">
            <span className="text-[10px] font-sans uppercase tracking-widest text-stone-500">RATES</span>
            <span className="font-serif text-sm text-bronze-light tracking-wider italic">
              {room.priceText}
            </span>
          </div>

          <Link
            href={`/rooms/${room.slug}`}
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-ivory hover:text-bronze-light transition-colors group/link"
          >
            <span>VIEW SUITE</span>
            <ArrowRight className="w-4 h-4 text-bronze-light group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
