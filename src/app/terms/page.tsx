'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { RESORT_DETAILS } from '@/data/stoneyardData';

export default function TermsPage() {
  return (
    <div className="pt-28 pb-24 bg-stone-950 text-ivory">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
        <SectionHeading
          tagline="GUEST GUIDELINES"
          title="TERMS OF SERVICE"
          subtitle="Terms governing reservation inquiries, stay confirmation, and resort policies."
        />

        <div className="space-y-8 font-sans text-xs sm:text-sm text-ivory/80 leading-relaxed border-t border-white/10 pt-8 font-light">
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-ivory uppercase tracking-wide">1. RESERVATION CONFIRMATION REQUIREMENT</h2>
            <p className="p-4 bg-stone-900 border-l-2 border-bronze-light text-bronze-light font-medium italic">
              “Your stay is confirmed only after the resort responds and verifies availability.”
            </p>
            <p>
              Inquiry submissions on this website do not constitute a guaranteed online booking or instant reservation. All stays are subject to direct verification by Stoneyard by Nomads based on seasonal mountain dates, weather access in Naran, and suite availability.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-ivory uppercase tracking-wide">2. PRICING & SEASONAL RATES</h2>
            <p>
              Room rates in Naran vary based on seasonal mountain accessibility and local peak tourism dates. Prices are quoted as “Contact for current rates” and confirmed directly during reservation inquiries.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-ivory uppercase tracking-wide">3. PROPERTY CONDUCT & NATURAL ENVIRONMENT</h2>
            <p>
              Stoneyard by Nomads is designed as a peaceful, quiet luxury mountain sanctuary. Guests are expected to respect quiet hours, natural stone courtyard amenities, surrounding pine flora, and community safety guidelines on Jheel Road.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-ivory uppercase tracking-wide">4. GOVERNING LOCATION</h2>
            <p>
              These terms are governed by property operational guidelines at Jheel Road, Naran, Khyber Pakhtunkhwa, Pakistan.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
