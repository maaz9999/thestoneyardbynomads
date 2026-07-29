import React from 'react';

export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: 'Stoneyard by Nomads',
    description: 'A contemporary luxury mountain retreat on Jheel Road, Naran, Khyber Pakhtunkhwa, Pakistan.',
    url: 'https://stoneyardbynomads.com',
    image: 'https://stoneyardbynomads.com/images/stoneyard/hero-stoneyard-blue-hour.webp',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jheel Road',
      addressLocality: 'Naran',
      addressRegion: 'Khyber Pakhtunkhwa',
      addressCountry: 'PK'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 34.9089,
      longitude: 73.6534
    },
    telephone: '+923000000000',
    priceRange: 'Contact for rates',
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Mountain View Suites',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Outdoor Fire Pits & Courtyard',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Private Balcony Tea Service',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Artisan Dining',
        value: true
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
