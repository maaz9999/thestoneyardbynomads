'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, MessageSquare, AlertCircle, CheckCircle, ChevronDown, HelpCircle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { RESORT_DETAILS, ROOMS_DATA } from '@/data/stoneyardData';

const FAQS = [
  {
    q: 'What is the best season to visit Stoneyard by Nomads in Naran?',
    a: 'Naran Valley is most accessible from May through November when high-altitude mountain passes are clear and temperatures range from crisp alpine mornings to sunny afternoons. Autumn (September–October) offers spectacular golden pine foliage.',
  },
  {
    q: 'How do room reservations and rate confirmations work?',
    a: 'Due to seasonal high-altitude demand, all rates and dates are verified directly by our resort team upon submitting a WhatsApp inquiry. Your stay is confirmed only after our reservations desk responds with availability.',
  },
  {
    q: 'What amenities and heating are provided in the suites?',
    a: 'Every suite features custom artisan furniture, continuous hot water, heavy plush bedding, and winter heating elements suited for cold mountain evenings. Generator backup ensures seamless power during valley outages.',
  },
  {
    q: 'How far is the resort from Lake Saiful Muluk and main Naran Bazaar?',
    a: 'Stoneyard by Nomads is situated on Jheel Road, providing a serene retreat away from main bazaar traffic while placing you directly on the route toward Lake Saiful Muluk (approx. 25–30 minutes drive via local 4x4 vehicles).',
  },
];

function ContactFormInner() {
  const searchParams = useSearchParams();
  const defaultRoom = searchParams.get('room') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    adults: '2',
    children: '0',
    preferredRoom: defaultRoom || ROOMS_DATA[0].name,
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    if (defaultRoom) {
      setFormData((prev) => ({ ...prev, preferredRoom: defaultRoom }));
    }
  }, [defaultRoom]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.email.trim()) errs.email = 'Valid email is required';
    if (!formData.checkIn) errs.checkIn = 'Check-in date required';
    if (!formData.checkOut) errs.checkOut = 'Check-out date required';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setSubmitted(true);

    // Build structured WhatsApp message
    const waText = `*NEW RESERVATION ENQUIRY - STONEYARD BY NOMADS*
----------------------------------------
*Name:* ${formData.fullName}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Preferred Suite:* ${formData.preferredRoom}
*Dates:* ${formData.checkIn} to ${formData.checkOut}
*Guests:* ${formData.adults} Adults, ${formData.children} Children
*Message:* ${formData.message || 'No additional notes'}
----------------------------------------
_Enquiry sent from stoneyardbynomads.com_`;

    const waUrl = `https://wa.me/${RESORT_DETAILS.whatsappNumber}?text=${encodeURIComponent(waText)}`;
    
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 500);
  };

  return (
    <div className="pt-28 pb-24 space-y-24 bg-stone-950 text-ivory">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        <SectionHeading
          tagline="RESERVATIONS & INQUIRIES"
          title="CONTACT STONEYARD"
          subtitle="Enquire about availability, current seasonal rates, or special mountain retreat arrangements on Jheel Road, Naran."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Details & Map Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-stone-900 border border-white/10 rounded space-y-6">
              <h3 className="font-serif text-2xl text-ivory uppercase tracking-wide">
                RESORT CONTACT
              </h3>

              <div className="space-y-4 font-sans text-xs text-ivory/80 leading-relaxed">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-bronze-light shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-ivory block uppercase tracking-wider text-[10px]">
                      LOCATION
                    </span>
                    <p>{RESORT_DETAILS.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-bronze-light shrink-0" />
                  <div>
                    <span className="font-semibold text-ivory block uppercase tracking-wider text-[10px]">
                      DIRECT PHONE / WHATSAPP
                    </span>
                    <p>{RESORT_DETAILS.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-bronze-light shrink-0" />
                  <div>
                    <span className="font-semibold text-ivory block uppercase tracking-wider text-[10px]">
                      EMAIL INQUIRIES
                    </span>
                    <p>{RESORT_DETAILS.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Verification Disclaimer Box */}
            <div className="p-6 bg-stone-900/90 border border-bronze-light/40 rounded space-y-3 font-sans text-xs">
              <div className="flex items-center gap-2 text-bronze-light font-semibold uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>BOOKING POLICY DISCLAIMER</span>
              </div>
              <p className="text-ivory/80 italic font-serif text-sm leading-relaxed">
                “Your stay is confirmed only after the resort responds and verifies availability.”
              </p>
              <p className="text-stone-400 text-[11px] font-light leading-normal">
                Submitting this inquiry generates a structured WhatsApp message to our reservations team. No instant charges or unverified bookings are processed online.
              </p>
            </div>
          </div>

          {/* Right Column: Reservation Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 bg-stone-900 border border-white/10 rounded shadow-2xl space-y-6">
              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl text-ivory uppercase tracking-wide">
                  ENQUIRE FOR AVAILABILITY
                </h3>
                <p className="font-sans text-xs text-ivory/70 font-light">
                  Fill in your preferred dates and details below to initiate direct WhatsApp communication.
                </p>
              </div>

              {submitted && (
                <div className="p-4 bg-bronze-light/20 border border-bronze-light rounded flex items-start gap-3 text-xs font-sans text-ivory">
                  <CheckCircle className="w-5 h-5 text-bronze-light shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold uppercase tracking-wider text-bronze-light">ENQUIRY PREPARED</p>
                    <p className="text-ivory/80">Opening WhatsApp with your formatted inquiry details...</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 font-sans text-xs">
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="uppercase tracking-widest text-stone-400 text-[10px]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Tariq Khan"
                      className={`w-full px-4 py-3 bg-stone-950 border ${
                        errors.fullName ? 'border-red-500' : 'border-white/10 focus:border-bronze-light'
                      } text-ivory rounded outline-none transition-colors`}
                    />
                    {errors.fullName && <span className="text-red-400 text-[10px]">{errors.fullName}</span>}
                  </div>

                  <div className="space-y-2">
                    <label className="uppercase tracking-widest text-stone-400 text-[10px]">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+92 300 0000000"
                      className={`w-full px-4 py-3 bg-stone-950 border ${
                        errors.phone ? 'border-red-500' : 'border-white/10 focus:border-bronze-light'
                      } text-ivory rounded outline-none transition-colors`}
                    />
                    {errors.phone && <span className="text-red-400 text-[10px]">{errors.phone}</span>}
                  </div>
                </div>

                {/* Email & Preferred Room */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="uppercase tracking-widest text-stone-400 text-[10px]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@domain.com"
                      className={`w-full px-4 py-3 bg-stone-950 border ${
                        errors.email ? 'border-red-500' : 'border-white/10 focus:border-bronze-light'
                      } text-ivory rounded outline-none transition-colors`}
                    />
                    {errors.email && <span className="text-red-400 text-[10px]">{errors.email}</span>}
                  </div>

                  <div className="space-y-2">
                    <label className="uppercase tracking-widest text-stone-400 text-[10px]">
                      Preferred Suite
                    </label>
                    <select
                      name="preferredRoom"
                      value={formData.preferredRoom}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-stone-950 border border-white/10 focus:border-bronze-light text-ivory rounded outline-none transition-colors"
                    >
                      {ROOMS_DATA.map((r) => (
                        <option key={r.id} value={r.name} className="bg-stone-950">
                          {r.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Check In & Check Out */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="uppercase tracking-widest text-stone-400 text-[10px]">
                      Check-In Date *
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-stone-950 border ${
                        errors.checkIn ? 'border-red-500' : 'border-white/10 focus:border-bronze-light'
                      } text-ivory rounded outline-none transition-colors`}
                    />
                    {errors.checkIn && <span className="text-red-400 text-[10px]">{errors.checkIn}</span>}
                  </div>

                  <div className="space-y-2">
                    <label className="uppercase tracking-widest text-stone-400 text-[10px]">
                      Check-Out Date *
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-stone-950 border ${
                        errors.checkOut ? 'border-red-500' : 'border-white/10 focus:border-bronze-light'
                      } text-ivory rounded outline-none transition-colors`}
                    />
                    {errors.checkOut && <span className="text-red-400 text-[10px]">{errors.checkOut}</span>}
                  </div>
                </div>

                {/* Adults & Children */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="uppercase tracking-widest text-stone-400 text-[10px]">
                      Adults
                    </label>
                    <select
                      name="adults"
                      value={formData.adults}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-stone-950 border border-white/10 focus:border-bronze-light text-ivory rounded outline-none"
                    >
                      <option value="1" className="bg-stone-950">1 Adult</option>
                      <option value="2" className="bg-stone-950">2 Adults</option>
                      <option value="3" className="bg-stone-950">3 Adults</option>
                      <option value="4" className="bg-stone-950">4+ Adults</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="uppercase tracking-widest text-stone-400 text-[10px]">
                      Children
                    </label>
                    <select
                      name="children"
                      value={formData.children}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-stone-950 border border-white/10 focus:border-bronze-light text-ivory rounded outline-none"
                    >
                      <option value="0" className="bg-stone-950">0 Children</option>
                      <option value="1" className="bg-stone-950">1 Child</option>
                      <option value="2" className="bg-stone-950">2 Children</option>
                      <option value="3" className="bg-stone-950">3+ Children</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="uppercase tracking-widest text-stone-400 text-[10px]">
                    Special Requests or Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mention arrival times, dietary preferences, or balcony requirements..."
                    className="w-full px-4 py-3 bg-stone-950 border border-white/10 focus:border-bronze-light text-ivory rounded outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-8 bg-bronze-light text-stone-950 font-sans text-xs uppercase tracking-[0.25em] font-semibold hover:bg-bronze transition-colors flex items-center justify-center gap-3 shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>SUBMIT ENQUIRY VIA WHATSAPP</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions Section */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 border-t border-white/10 pt-20 space-y-12">
        <SectionHeading
          tagline="FREQUENTLY ASKED"
          title="GUEST INFORMATION & FAQS"
          subtitle="Essential details regarding mountain travel, weather seasons, and resort services."
        />

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-stone-900 border border-white/10 rounded overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif text-lg text-ivory uppercase tracking-wide hover:text-bronze-light transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-bronze-light transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 font-sans text-xs text-ivory/80 font-light leading-relaxed border-t border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="pt-36 text-center text-ivory font-sans text-xs">Loading contact form...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}
