'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { RESORT_DETAILS } from '@/data/stoneyardData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-stone-950 text-ivory border-t border-white/10 overflow-hidden">
      {/* Background Subtle Mountain Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image
          src="/images/stoneyard/mountain-mist-background.webp"
          alt="Footer mountain backdrop"
          fill
          className="object-cover object-bottom filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/90 to-stone-950" />
      </div>

      {/* Top Decorative Mountain Line */}
      <div className="relative z-10 w-full flex justify-center py-6 border-b border-white/5">
        <div className="flex items-center gap-4 text-xs font-sans uppercase tracking-[0.3em] text-bronze-light">
          <span className="h-[1px] w-12 bg-bronze-light/30" />
          <span>STONEYARD BY NOMADS • NARAN</span>
          <span className="h-[1px] w-12 bg-bronze-light/30" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand & Philosophy Column */}
        <div className="space-y-6">
          <Link href="/" className="flex flex-col inline-block">
            <span className="font-serif text-3xl tracking-widest text-ivory">STONEYARD</span>
            <span className="font-sans text-[10px] tracking-[0.35em] text-bronze-light uppercase">
              BY NOMADS
            </span>
          </Link>
          <p className="font-sans text-xs text-ivory/70 leading-relaxed max-w-sm">
            A contemporary mountain retreat situated on Jheel Road in Naran. Created for quiet mornings, warm hearth evenings, and uninterrupted northern Pakistan landscapes.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href="#"
              className="p-2 border border-white/10 rounded-full hover:border-bronze-light hover:text-bronze-light transition-colors text-ivory/70"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 border border-white/10 rounded-full hover:border-bronze-light hover:text-bronze-light transition-colors text-ivory/70"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Explore Links */}
        <div>
          <h3 className="font-serif text-lg tracking-wider text-ivory mb-6 border-b border-white/10 pb-2 inline-block">
            EXPLORE
          </h3>
          <ul className="space-y-3 font-sans text-xs uppercase tracking-widest text-ivory/70">
            <li>
              <Link href="/" className="hover:text-bronze-light transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/stay" className="hover:text-bronze-light transition-colors">
                The Stay
              </Link>
            </li>
            <li>
              <Link href="/rooms" className="hover:text-bronze-light transition-colors">
                Rooms & Suites
              </Link>
            </li>
            <li>
              <Link href="/experiences" className="hover:text-bronze-light transition-colors">
                Experiences
              </Link>
            </li>
            <li>
              <Link href="/dining" className="hover:text-bronze-light transition-colors">
                Dining & Teas
              </Link>
            </li>
          </ul>
        </div>

        {/* Information & Legal */}
        <div>
          <h3 className="font-serif text-lg tracking-wider text-ivory mb-6 border-b border-white/10 pb-2 inline-block">
            INFORMATION
          </h3>
          <ul className="space-y-3 font-sans text-xs uppercase tracking-widest text-ivory/70">
            <li>
              <Link href="/gallery" className="hover:text-bronze-light transition-colors">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-bronze-light transition-colors">
                About Stoneyard
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-bronze-light transition-colors">
                Contact & Booking
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-bronze-light transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-bronze-light transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Location & Contact */}
        <div className="space-y-4">
          <h3 className="font-serif text-lg tracking-wider text-ivory mb-6 border-b border-white/10 pb-2 inline-block">
            LOCATION & CONTACT
          </h3>
          <div className="space-y-3 text-xs font-sans text-ivory/70 leading-relaxed">
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-bronze-light shrink-0 mt-0.5" />
              <span>{RESORT_DETAILS.location}</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-bronze-light shrink-0" />
              <span>{RESORT_DETAILS.phone}</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-bronze-light shrink-0" />
              <span>{RESORT_DETAILS.email}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10 py-6 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans text-stone-500 gap-4">
        <p>© 2026 Stoneyard by Nomads. All rights reserved. Jheel Road, Naran.</p>
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-ivory/60 hover:text-bronze-light transition-colors uppercase tracking-widest"
        >
          <span>Back to top</span>
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
