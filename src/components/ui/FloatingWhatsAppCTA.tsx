'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { RESORT_DETAILS } from '@/data/stoneyardData';

export default function FloatingWhatsAppCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappMessage = encodeURIComponent(
    `Hello Stoneyard by Nomads, I am visiting your website and would like to inquire about room availability & rates.`
  );
  const whatsappUrl = `https://wa.me/${(RESORT_DETAILS.whatsappNumber || '').replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-stone-900/90 hover:bg-stone-900 border border-bronze-light/40 text-ivory shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-bronze-light"
          >
            <div className="relative flex items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-bronze-light/30 animate-ping opacity-75" />
              <MessageCircle className="w-4 h-4 text-bronze-light relative z-10" />
            </div>
            <span className="font-sans text-xs uppercase tracking-wider font-medium text-ivory/90 group-hover:text-ivory">
              QUICK INQUIRY
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
