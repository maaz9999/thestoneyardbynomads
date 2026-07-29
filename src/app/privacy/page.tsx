'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { RESORT_DETAILS } from '@/data/stoneyardData';

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-24 bg-stone-950 text-ivory">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
        <SectionHeading
          tagline="LEGAL & DISCLOSURES"
          title="PRIVACY POLICY"
          subtitle="How Stoneyard by Nomads handles guest information and communication."
        />

        <div className="space-y-8 font-sans text-xs sm:text-sm text-ivory/80 leading-relaxed border-t border-white/10 pt-8 font-light">
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-ivory uppercase tracking-wide">1. INFORMATION WE COLLECT</h2>
            <p>
              When you submit a reservation inquiry for Stoneyard by Nomads via our website or direct WhatsApp links, we collect personal information necessary to facilitate your inquiry. This includes your name, phone number, email address, arrival and departure dates, guest counts, and room preferences.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-ivory uppercase tracking-wide">2. HOW WE USE YOUR INFORMATION</h2>
            <p>
              Your personal information is used solely for checking room availability, providing rate quotes, managing your reservation inquiries, and delivering warm hospitality services during your stay in Naran. We do not sell, rent, or share guest data with third-party advertisers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-ivory uppercase tracking-wide">3. DIRECT COMMUNICATION</h2>
            <p>
              Initial reservation inquiries submitted through our website form open a structured messaging window with our official team on WhatsApp. By initiating communication, you consent to receive direct responses regarding your stay dates and property guidelines.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-ivory uppercase tracking-wide">4. CONTACT US</h2>
            <p>
              For questions regarding our privacy practices or to request removal of your contact details from our records, please reach out to us at:
            </p>
            <p className="text-bronze-light font-medium">
              {RESORT_DETAILS.email} • {RESORT_DETAILS.location}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
