export interface Room {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  longDescription: string;
  bedType: string;
  view: string;
  capacity: string;
  size: string;
  priceText: string;
  featuredImage: string;
  gallery: string[];
  amenities: string[];
  clientVerificationNote?: string;
}

export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  videoUrl?: string;
  category: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'property' | 'rooms' | 'dining' | 'experiences' | 'naran' | 'evenings';
  src: string;
  type: 'image' | 'video';
  aspectRatio: 'square' | 'portrait' | 'landscape' | 'wide';
  caption: string;
}

export const ROOMS_DATA: Room[] = [
  {
    id: 'mountain-view-suite',
    slug: 'deluxe-mountain-view-suite',
    name: 'Deluxe Mountain View Suite',
    subtitle: 'Panoramic mountain horizons & warm architectural stone',
    description: 'Expansive mountain view suite featuring handcrafted dark wood accents, natural stone textures, and floor-to-ceiling framed glass overlooking Naran’s pine-covered slopes.',
    longDescription: 'Designed around mountain stillness, the Deluxe Mountain View Suite pairs natural local stone with tactile bronze elements and deep charcoal wood. Wake up to crisp mountain air and unobstructed views of Kaghan Valley peaks.',
    bedType: 'Custom King Bed',
    view: 'Jheel Road & Kaghan Valley Peaks',
    capacity: '2 Adults, 1 Child',
    size: '480 sq. ft.',
    priceText: 'Contact for current rates',
    featuredImage: '/images/stoneyard/mountain-view-bedroom.webp',
    gallery: [
      '/images/stoneyard/mountain-view-bedroom.webp',
      '/images/stoneyard/bedroom-evening-ambience.webp',
      '/images/stoneyard/stoneyard-bathroom.webp',
      '/images/stoneyard/interior-detail-nomads.webp',
    ],
    amenities: [
      'Panoramic Mountain View',
      'Handcrafted Wood Furniture',
      'En-Suite Stone Bathroom',
      'Bespoke Artisan Linens',
      'Private Sitting Area',
      'High-Speed Wi-Fi',
      'Tea & Coffee Brew Station'
    ],
    clientVerificationNote: 'Requires client verification for extra bedding requests and exact room dimensions.'
  },
  {
    id: 'evening-ambience-suite',
    slug: 'evening-ambience-suite',
    name: 'Evening Ambience Suite',
    subtitle: 'Warm recessed lighting & tranquil blue-hour atmosphere',
    description: 'Crafted for slow evenings and quiet mountain rest, with subtle ambient lighting, textured bronze details, and private outdoor balcony access.',
    longDescription: 'When twilight falls over Naran, the Evening Ambience Suite creates a sanctuary of warm light and dark stone textures. Features cozy seating, plush bedding, and an elegant bathroom finished in natural slate.',
    bedType: 'Custom Plush King Bed',
    view: 'Courtyard & Mountain Twilight View',
    capacity: '2-3 Guests',
    size: '520 sq. ft.',
    priceText: 'Contact for current rates',
    featuredImage: '/images/stoneyard/bedroom-evening-ambience.webp',
    gallery: [
      '/images/stoneyard/bedroom-evening-ambience.webp',
      '/images/stoneyard/mountain-window-lounge.webp',
      '/images/stoneyard/stoneyard-bathroom.webp',
      '/images/stoneyard/courtyard-evening.webp',
    ],
    amenities: [
      'Private Balcony Access',
      'Ambient Recessed Mood Lighting',
      'Luxury Rain Shower',
      'Nomads Artisan Bath Amenities',
      'In-Room Reading Nook',
      'Personal Safe & Refreshments'
    ],
    clientVerificationNote: 'Requires client verification for private balcony heating and max occupancy limits.'
  },
  {
    id: 'mountain-window-lounge',
    slug: 'mountain-window-lounge-suite',
    name: 'Mountain Window Lounge Suite',
    subtitle: 'Signature window bench framed by mountain wilderness',
    description: 'Includes a signature cushioned window lounger positioned directly against framed glass overlooking pine forests and high peaks.',
    longDescription: 'The Mountain Window Lounge Suite celebrates slow mornings with hot tea by the window wall. The open layout seamlessly connects a custom lounge space with natural wooden tones and dark stone accents.',
    bedType: 'King Bed with Organic Cotton',
    view: 'Pine Forest & Valley Stream',
    capacity: '2 Adults',
    size: '450 sq. ft.',
    priceText: 'Contact for current rates',
    featuredImage: '/images/stoneyard/mountain-window-lounge.webp',
    gallery: [
      '/images/stoneyard/mountain-window-lounge.webp',
      '/images/stoneyard/interior-detail-nomads.webp',
      '/images/stoneyard/private-balcony-tea.webp',
      '/images/stoneyard/stoneyard-bathroom.webp',
    ],
    amenities: [
      'Signature Window Lounge Seat',
      'Custom Bronze Lighting Fixtures',
      'Floor-to-Ceiling Windows',
      'Walk-in Stone Shower',
      'Work Desk with View'
    ],
    clientVerificationNote: 'Requires client verification for mini-bar inclusion and desk connectivity setup.'
  },
  {
    id: 'nomads-penthouse-residence',
    slug: 'nomads-penthouse-residence',
    name: 'Nomads Penthouse Residence',
    subtitle: 'The ultimate sanctuary with 360° valley & river views',
    description: 'The flagship residence of Stoneyard by Nomads. Dual master bedrooms, private stone terrace, custom bronze fixtures, and expansive living quarters.',
    longDescription: 'For families and group retreats seeking spatial luxury in Naran. The Nomads Penthouse combines two full suites connected by a private fire lounge and outdoor observation terrace.',
    bedType: '2 Master King Beds',
    view: '360° Naran Valley & Kunhar River View',
    capacity: '4-6 Guests',
    size: '950 sq. ft.',
    priceText: 'Contact for current rates',
    featuredImage: '/images/stoneyard/interior-detail-nomads.webp',
    gallery: [
      '/images/stoneyard/interior-detail-nomads.webp',
      '/images/stoneyard/mountain-view-bedroom.webp',
      '/images/stoneyard/mountain-window-lounge.webp',
      '/images/stoneyard/courtyard-evening.webp',
    ],
    amenities: [
      'Dual Master Suites',
      'Private Observation Terrace',
      'Living & Dining Lounge',
      'Bespoke Bronze & Wood Finishes',
      'Dedicated Butler Service Option',
      'Luxury Double Vanity Bathroom'
    ],
    clientVerificationNote: 'Requires client verification for dedicated butler service options & private dining availability.'
  }
];

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: 'mountain-mornings',
    title: 'Mountain Mornings',
    subtitle: 'Crisp air, mist-covered pine slopes, and quiet sunlight',
    description: 'Start your day as morning mist drifts across the Naran valley. Enjoy freshly brewed coffee on your private terrace while the first light hits the granite peaks.',
    image: '/images/stoneyard/mountain-mist-background.webp',
    category: 'Rest & Serenity',
    highlights: ['First light valley views', 'Artisanal morning tea/coffee', 'Quiet terrace reflection']
  },
  {
    id: 'tea-with-a-view',
    title: 'Tea with a View',
    subtitle: 'Traditional kehwa and herbal brews looking over the valley',
    description: 'Relax with handcrafted green kehwa, cardamom tea, and light pastries served outdoors on warm stone balconies framed by the Kaghan mountain range.',
    image: '/images/stoneyard/private-balcony-tea.webp',
    category: 'Culinary Moments',
    highlights: ['Traditional mountain kehwa', 'Open-air balcony setting', 'Uninterrupted natural backdrops']
  },
  {
    id: 'garden-courtyard-walks',
    title: 'Garden & Courtyard Strolls',
    subtitle: 'Stone-paved pathways and natural flora',
    description: 'Wander through Stoneyard’s private stone courtyard and terraced gardens, designed to harmonally integrate contemporary slate architecture with local pine trees.',
    image: '/images/stoneyard/courtyard-evening.webp',
    category: 'Architecture & Nature',
    highlights: ['Terraced slate pathways', 'Native pine & flora', 'Ambient twilight lighting']
  },
  {
    id: 'bonfire-evenings',
    title: 'Bonfire Evenings',
    subtitle: 'Gathering under starry northern Pakistani skies',
    description: 'As temperature drops during blue hour, gather around our outdoor stone fire pits for warm conversations, starlit skies, and hot beverages.',
    image: '/images/stoneyard/bonfire-evening.webp',
    category: 'Evening Rituals',
    highlights: ['Outdoor stone fire pits', 'Starlit mountain nightscapes', 'Warm fleece blankets & hot brews']
  },
  {
    id: 'naran-river-exploration',
    title: 'Naran River & Valley Exploration',
    subtitle: 'Glacial streams, crystal waters, and majestic gorge trails',
    description: 'Take guided or self-guided walks along the riverbanks of Naran, breathing in glacial air while listening to the rushing mountain waters.',
    image: '/images/stoneyard/naran-river-experience.webp',
    videoUrl: '/videos/stoneyard/R2.mp4',
    category: 'Outdoor Adventures',
    highlights: ['Glacial stream walks', 'Photographic river spots', 'Guided nature trail recommendations']
  },
  {
    id: 'hiking-nature-walks',
    title: 'Hiking & Mountain Trails',
    subtitle: 'Immerse yourself in high altitude pine wilderness',
    description: 'Discover nearby trekking paths leading up pine-covered ridges, offering panoramic vantage points over Jheel Road and the surrounding valleys.',
    image: '/images/stoneyard/mountain-walk-naran.webp',
    category: 'Outdoor Adventures',
    highlights: ['Pine forest trails', 'Panoramic valley viewpoints', 'Fresh mountain trail routes']
  },
  {
    id: 'quiet-reading-rest',
    title: 'Quiet Reading & Rest',
    subtitle: 'Unplugged stillness by floor-to-ceiling mountain windows',
    description: 'Find a comfortable corner in our lounge or in-room window seat with a curated selection of literature, surrounded by soft textiles and mountain stillness.',
    image: '/images/stoneyard/quiet-reading-mountain-view.webp',
    category: 'Rest & Serenity',
    highlights: ['Curated library books', 'Cushioned mountain window seats', 'Quiet non-intrusive ambiance']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Stoneyard Blue Hour',
    category: 'Property',
    src: '/images/stoneyard/hero-stoneyard-blue-hour.webp',
    type: 'image',
    aspectRatio: 'wide',
    caption: 'Stoneyard by Nomads illuminated during blue hour on Jheel Road, Naran.'
  },
  {
    id: 'g2',
    title: 'Exterior Architecture Day',
    category: 'Property',
    src: '/images/stoneyard/stoneyard-exterior-day.webp',
    type: 'image',
    aspectRatio: 'landscape',
    caption: 'Contemporary slate stone architecture against crisp Naran mountain backdrops.'
  },
  {
    id: 'g3',
    title: 'Resort Arrival Experience',
    category: 'Property',
    src: '/images/stoneyard/arrival-at-stoneyard.webp',
    type: 'image',
    aspectRatio: 'portrait',
    caption: 'Welcoming guests to quiet luxury and mountain serenity.'
  },
  {
    id: 'g4',
    title: 'Courtyard at Evening',
    category: 'Evenings',
    src: '/images/stoneyard/courtyard-evening.webp',
    type: 'image',
    aspectRatio: 'square',
    caption: 'Warm courtyard ambient lighting as twilight settles over the mountains.'
  },
  {
    id: 'g5',
    title: 'Mountain View Bedroom',
    category: 'Rooms',
    src: '/images/stoneyard/mountain-view-bedroom.webp',
    type: 'image',
    aspectRatio: 'landscape',
    caption: 'Spacious suite bedroom featuring natural wood textures and panoramic views.'
  },
  {
    id: 'g6',
    title: 'Bedroom Evening Ambience',
    category: 'Rooms',
    src: '/images/stoneyard/bedroom-evening-ambience.webp',
    type: 'image',
    aspectRatio: 'landscape',
    caption: 'Soft ambient illumination for restful mountain nights.'
  },
  {
    id: 'g7',
    title: 'Window Lounge Cushion Seat',
    category: 'Rooms',
    src: '/images/stoneyard/mountain-window-lounge.webp',
    type: 'image',
    aspectRatio: 'portrait',
    caption: 'Signature in-room window seat for morning tea and reading.'
  },
  {
    id: 'g8',
    title: 'Artisan Interior Detail',
    category: 'Rooms',
    src: '/images/stoneyard/interior-detail-nomads.webp',
    type: 'image',
    aspectRatio: 'square',
    caption: 'Bespoke Nomads bronze emblem and handcrafted stone details.'
  },
  {
    id: 'g9',
    title: 'Natural Slate Bathroom',
    category: 'Rooms',
    src: '/images/stoneyard/stoneyard-bathroom.webp',
    type: 'image',
    aspectRatio: 'portrait',
    caption: 'Luxury en-suite stone bathroom with rain shower.'
  },
  {
    id: 'g10',
    title: 'Mountain Morning Breakfast',
    category: 'Dining',
    src: '/images/stoneyard/mountain-breakfast.webp',
    type: 'image',
    aspectRatio: 'landscape',
    caption: 'Slow breakfast spread featuring fresh local preserves, pastries, and kehwa.'
  },
  {
    id: 'g11',
    title: 'Balcony Tea Ritual',
    category: 'Dining',
    src: '/images/stoneyard/private-balcony-tea.webp',
    type: 'image',
    aspectRatio: 'portrait',
    caption: 'Afternoon tea served on private balcony with sweeping valley views.'
  },
  {
    id: 'g12',
    title: 'Warm Dinner Setting',
    category: 'Dining',
    src: '/images/stoneyard/warm-dinner-setting.webp',
    type: 'image',
    aspectRatio: 'landscape',
    caption: 'Cozy indoor dining table after cold mountain exploration days.'
  },
  {
    id: 'g13',
    title: 'Starlit Bonfire Night',
    category: 'Evenings',
    src: '/images/stoneyard/bonfire-evening.webp',
    type: 'image',
    aspectRatio: 'wide',
    caption: 'Gathering around the stone fire pit under northern Pakistani stars.'
  },
  {
    id: 'g14',
    title: 'Naran River Landscape',
    category: 'Naran',
    src: '/images/stoneyard/naran-river-experience.webp',
    type: 'image',
    aspectRatio: 'landscape',
    caption: 'Rushing glacial river waters along Naran valley trails.'
  },
  {
    id: 'g15',
    title: 'Mountain Walk in Naran',
    category: 'Naran',
    src: '/images/stoneyard/mountain-walk-naran.webp',
    type: 'image',
    aspectRatio: 'portrait',
    caption: 'Pine-scented mountain hiking paths near Jheel Road.'
  },
  {
    id: 'g16',
    title: 'Quiet Reading Moment',
    category: 'Experiences',
    src: '/images/stoneyard/quiet-reading-mountain-view.webp',
    type: 'image',
    aspectRatio: 'landscape',
    caption: 'Unplugged peaceful reading with unobstructed mountain vistas.'
  },
  {
    id: 'g17',
    title: 'Stone & Bronze Textures',
    category: 'Property',
    src: '/images/stoneyard/stone-black-bronze-textures.webp',
    type: 'image',
    aspectRatio: 'square',
    caption: 'Tactile material contrast of local granite, dark wood, and muted bronze.'
  },
  {
    id: 'g18',
    title: 'Nomads Mountain Art Emblem',
    category: 'Property',
    src: '/images/stoneyard/nomads-emblem-mountain-art.webp',
    type: 'image',
    aspectRatio: 'portrait',
    caption: 'Curated mountain art emblem reflecting Nomads architectural philosophy.'
  },
  {
    id: 'g19',
    title: 'Atmospheric Mountain Mist',
    category: 'Naran',
    src: '/images/stoneyard/mountain-mist-background.webp',
    type: 'image',
    aspectRatio: 'wide',
    caption: 'Morning mist swirling through pine ridges surrounding Stoneyard.'
  },
  {
    id: 'g20',
    title: 'Booking Escape Vista',
    category: 'Property',
    src: '/images/stoneyard/booking-escape-cta.webp',
    type: 'image',
    aspectRatio: 'wide',
    caption: 'Inviting mountain escape horizon looking over Jheel Road.'
  },
  {
    id: 'g21',
    title: 'Resort Walkthrough Reel',
    category: 'Property',
    src: '/videos/stoneyard/R1.mp4',
    type: 'video',
    aspectRatio: 'portrait',
    caption: 'Short cinematic property walkthrough showcasing interiors and twilight ambience.'
  },
  {
    id: 'g22',
    title: 'Naran River Reel',
    category: 'Naran',
    src: '/videos/stoneyard/R2.mp4',
    type: 'video',
    aspectRatio: 'portrait',
    caption: 'Glacial stream flow and natural valley sights around Naran.'
  }
];

export const RESORT_DETAILS = {
  name: 'Stoneyard by Nomads',
  tagline: 'WHERE THE MOUNTAINS SLOW TIME.',
  heroCopy: 'A contemporary mountain retreat in Naran, created for quiet mornings, warm evenings and uninterrupted views.',
  location: 'Jheel Road, Naran, Khyber Pakhtunkhwa, Pakistan',
  phone: '+92 300 0000000', // Placeholder contact format
  whatsappNumber: '923000000000', // Clean formatted for wa.me
  email: 'reservations@stoneyardbynomads.com',
  coordinates: {
    lat: 34.9089,
    lng: 73.6534
  }
};
