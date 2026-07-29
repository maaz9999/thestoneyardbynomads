'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import { RESORT_DETAILS } from '@/data/stoneyardData';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'The Stay', href: '/stay' },
  { name: 'Rooms', href: '/rooms' },
  { name: 'Experiences', href: '/experiences' },
  { name: 'Dining', href: '/dining' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-stone-950 text-ivory overflow-y-auto"
        >
          {/* Background Mountain Photo & Overlay */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <Image
              src="/images/stoneyard/hero-stoneyard-blue-hour.webp"
              alt="Stoneyard mountain backdrop"
              fill
              className="object-cover object-center filter grayscale contrast-125 brightness-75"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-950/80 to-stone-950" />
          </div>

          {/* Animated Bronze Contour SVG lines in background */}
          <div className="absolute inset-0 pointer-events-none opacity-15 overflow-hidden z-0">
            <svg className="w-full h-full" viewBox="0 0 800 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M-100,200 Q200,100 400,300 T900,200"
                stroke="#C09A5A"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.path
                d="M-100,500 Q300,400 500,600 T900,500"
                stroke="#C09A5A"
                strokeWidth="1.2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
              />
              <motion.path
                d="M-100,800 Q150,700 450,900 T900,800"
                stroke="#A8782C"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, ease: "easeInOut", delay: 0.4 }}
              />
            </svg>
          </div>

          {/* Top Header inside Mobile Menu */}
          <div className="relative z-10 flex items-center justify-between px-6 py-6 border-b border-white/10">
            <Link href="/" onClick={onClose} className="flex flex-col">
              <span className="font-serif text-xl tracking-widest text-ivory uppercase">STONEYARD</span>
              <span className="font-sans text-[10px] tracking-[0.3em] text-bronze-light uppercase">BY NOMADS</span>
            </Link>
            <button
              onClick={onClose}
              className="p-3 text-ivory hover:text-bronze-light transition-colors border border-white/10 rounded-full"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="relative z-10 flex-1 px-8 py-10 flex flex-col justify-center">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.06 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="font-serif text-3xl sm:text-4xl text-ivory hover:text-bronze-light transition-colors duration-300 tracking-wide inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>

          {/* Footer inside Mobile Menu */}
          <div className="relative z-10 px-8 py-8 border-t border-white/10 space-y-6">
            <div className="flex flex-col space-y-2 text-xs text-stone-500 font-sans">
              <p className="flex items-center gap-2 text-ivory/80">
                <MapPin className="w-4 h-4 text-bronze-light" />
                {RESORT_DETAILS.location}
              </p>
              <p className="flex items-center gap-2 text-ivory/80">
                <Phone className="w-4 h-4 text-bronze-light" />
                {RESORT_DETAILS.phone}
              </p>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex gap-4">
                <a href="#" className="p-2 text-ivory/70 hover:text-bronze-light transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 text-ivory/70 hover:text-bronze-light transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
              <MagneticButton href="/contact">
                BOOK YOUR ESCAPE
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
