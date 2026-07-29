'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import WeatherWidget from '@/components/ui/WeatherWidget';
import MobileMenu from './MobileMenu';

const navItems = [
  { name: 'Suites', href: '/rooms' },
  { name: 'Experiences', href: '/experiences' },
  { name: 'Dining', href: '/dining' },
  { name: 'Gallery', href: '/gallery' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-stone-950/85 backdrop-blur-md py-4 border-b border-white/5 shadow-2xl'
            : 'bg-gradient-to-b from-stone-950/80 via-stone-950/40 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Left Brand & Weather Widget */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex flex-col group">
              <span className="font-serif text-2xl sm:text-3xl tracking-widest text-ivory group-hover:text-bronze-light transition-colors duration-300">
                STONEYARD
              </span>
              <span className="font-sans text-[9px] tracking-[0.35em] text-bronze-light uppercase opacity-90 group-hover:opacity-100">
                BY NOMADS • NARAN
              </span>
            </Link>

            <WeatherWidget />
          </div>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-xs uppercase tracking-[0.18em] font-sans font-medium transition-colors duration-300 py-1 ${
                    isActive ? 'text-bronze-light' : 'text-ivory/80 hover:text-ivory'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-bronze-light shadow-[0_0_8px_#C09A5A]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Book CTA */}
          <div className="hidden lg:block">
            <MagneticButton href="/contact">
              BOOK YOUR ESCAPE
            </MagneticButton>
          </div>

          {/* Mobile Menu Trigger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-ivory hover:text-bronze-light border border-white/10 rounded-md transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu Drawer */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
