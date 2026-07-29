import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
import StructuredData from '@/components/seo/StructuredData';

const serifFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Stoneyard by Nomads | Boutique Mountain Resort in Naran, Pakistan',
    template: '%s | Stoneyard by Nomads',
  },
  description: 'A contemporary luxury mountain retreat on Jheel Road, Naran, Khyber Pakhtunkhwa. Created for quiet mornings, warm evenings, and uninterrupted northern views.',
  keywords: [
    'Resort in Naran',
    'Mountain resort in Naran',
    'Stoneyard by Nomads',
    'Accommodation on Jheel Road Naran',
    'Mountain-view rooms Naran',
    'Family stay in Naran',
    'Khyber Pakhtunkhwa boutique hotel',
    'Luxury hotel Naran Pakistan',
  ],
  authors: [{ name: 'Stoneyard by Nomads' }],
  creator: 'Stoneyard by Nomads',
  metadataBase: new URL('https://stoneyardbynomads.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stoneyardbynomads.com',
    title: 'Stoneyard by Nomads | Boutique Mountain Resort in Naran',
    description: 'A contemporary luxury mountain retreat on Jheel Road, Naran, Khyber Pakhtunkhwa, Pakistan.',
    siteName: 'Stoneyard by Nomads',
    images: [
      {
        url: '/images/stoneyard/hero-stoneyard-blue-hour.webp',
        width: 1200,
        height: 630,
        alt: 'Stoneyard by Nomads Blue Hour Horizon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stoneyard by Nomads | Boutique Mountain Resort in Naran',
    description: 'Contemporary mountain luxury on Jheel Road, Naran, Pakistan.',
    images: ['/images/stoneyard/hero-stoneyard-blue-hour.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import FloatingWhatsAppCTA from '@/components/ui/FloatingWhatsAppCTA';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${serifFont.variable} ${sansFont.variable} scroll-smooth`}>
      <head>
        <StructuredData />
      </head>
      <body suppressHydrationWarning className="bg-stone-950 text-ivory antialiased selection:bg-bronze selection:text-stone-950 min-h-screen flex flex-col justify-between">
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow overflow-x-hidden">{children}</main>
        <Footer />
        <FloatingWhatsAppCTA />
      </body>
    </html>
  );
}
