export type Track = {
  name: string;
  url: string;
  cover: string;
}

export interface Album {
  id: number;
  cover: string;
  title: string;
  artist: string;
  tracks: Track[];
}

export const albums: Album[] = [
  {
    id: 1,
    cover: 'assets/albums/Album.png',
    title: 'Good Feeling',
    artist: 'cesar-ai-dj',
    tracks: [
      { name: 'Astronaut Depths', url: '/assets/tracks/Astronaut On The Depths.mp3', cover: 'assets/albums/astro.png' },
      { name: 'Good Feeling', url: '/assets/tracks/Good Feeling.mp3', cover: 'assets/albums/good feeling.png' },
      { name: 'Night Seekers v1', url: '/assets/tracks/Night Seekers v1.mp3', cover: 'assets/albums/nightSeek1.png' },
      { name: 'Synced Rhythms v1', url: '/assets/tracks/Synced Rhythms v1.mp3', cover: 'assets/albums/synced1.png' },

    ]
  },
  {
    id: 2,
    cover: 'assets/albums/Album1.png',
    title: 'Synced Rhythms',
    artist: 'cesar-ai-dj',
    tracks: [
      { name: 'Love 4 U & Me', url: '/assets/tracks/love-4-u-&-me.mp3', cover: 'assets/albums/love-4-u-&-me.png' },
      { name: 'Night Seekers v2', url: '/assets/tracks/Night Seekers v2.mp3', cover: 'assets/albums/nightSee2.png' },
      { name: 'Synced Rhythms v2', url: '/assets/tracks/Synced Rhythms v2.mp3', cover: 'assets/albums/synced2.png' },
      { name: 'Synced Rhythms v3', url: '/assets/tracks/Synced Rhythms v3.mp3', cover: 'assets/albums/synced3.png' },
    ]
  },
  {
    id: 3,
    cover: 'assets/albums/puertorican-pulse.png',
    title: 'Puertorican Vibes',
    artist: 'Diego-DJ',
    tracks: [
      { name: 'Puertorican Pulse', url: 'assets/tracks/PuertoricanPulse.mp3', cover: 'assets/albums/puertorican-pulse-song.png' },
    ]
  },
  {
    id: 4,
    cover: 'assets/albums/lf new5.jpg',
    title: 'Fresh Music',
    artist: 'Luifer-Dj',
    tracks: [
      { name: 'Loofy - Last Night (Luifer Remix) ', url: 'assets/tracks/Loofy - Last Night (Luifer Dj Bootleg) 2024.wav', cover: 'assets/albums/lf new3.jpg' },
      { name: 'Fireboy DML, Peace Control - Peru (Luifer Dj Bootleg)', url: 'assets/tracks/Fireboy.wav', cover: 'assets/albums/lf new4.jpg' },
    ]
  }
];



// BOOKS

export type BookChapter = {
  name: string;
  src: string;
};

export type Book = {
  bookId: string;
  bookImagePath: string;
  bookAudioPathUrl: string;
  bookChaptersAndAudioPaths: BookChapter[];
  bookAudioSamplePath: string;
  bookTitle: string;
  bookDescription: string;
  bookPrice: number;
  bookPromotion: string;
};

export type BookStore = {
  books: Book[];
};


export const books: BookStore = {
  books: [ {
    bookId: "1",
    bookImagePath: "assets/images/book1.jpg",
    bookAudioPathUrl: "assets/audio/book1-full.mp3",
    bookChaptersAndAudioPaths: [
      { name: "Chapter Intro", "src": "assets/sound/wav/intro.wav" },
      { name: "Chapter 1: Basic Real Estate Concepts (20 questions)", "src": "assets/sound/wav/real-state-book/01-Audio.wav" },
      { name: "Chapter 2: Property Ownership and Transfer (20 questions)", "src": "assets/sound/wav/real-state-book/02-Audio.wav" },
      { name: "Chapter 3: Agency Relationships (20 questions)", "src": "assets/sound/wav/real-state-book/03-Audio.wav" },
      { name: "Chapter 4: Real Estate Financing (20 questions)", "src": "assets/sound/wav/real-state-book/04-Audio.wav" },
      { name: "Chapter 5: Real Estate Appraisal (20 questions)", "src": "assets/sound/wav/real-state-book/05-Audio.wav" },
      { name: "Chapter 6: Real Estate Contracts (20 questions)", "src": "assets/sound/wav/real-state-book/06-Audio.wav" },
      { name: "Short Answer/Case Study Questions (50 questions)", "src": "assets/sound/wav/real-state-book/07-Audio.wav" },
      { name: "TRUE AND FALSE (150 Questions)", "src": "assets/sound/wav/real-state-book/08-Audio.wav" }
    ],
    bookAudioSamplePath: "assets/tracks/🚀Astronaut On The Depths.mp3",
    bookTitle: "Real Estate Mastery",
    bookDescription: "A comprehensive guide to mastering real estate principles and passing your exams with confidence.",
    bookPrice: 49.99,
    bookPromotion: "10% off for a limited time"
  },
  {
    bookId: "2",
    bookImagePath: "assets/images/book2.jpg",
    bookAudioPathUrl: "assets/audio/book2-full.mp3",
    bookChaptersAndAudioPaths: [
      { name: "Chapter Intro", "src": "assets/sound/wav/intro.wav" },
      { name: "Chapter 1: Advanced Real Estate Strategies", "src": "assets/sound/wav/real-state-book/01-Audio.wav" },
      { name: "Chapter 2: Investing in Real Estate", "src": "assets/sound/wav/real-state-book/02-Audio.wav" },
      { name: "Chapter 3: Property Management Essentials", "src": "assets/sound/wav/real-state-book/03-Audio.wav" },
      { name: "Chapter 4: Real Estate Marketing Techniques", "src": "assets/sound/wav/real-state-book/04-Audio.wav" }
    ],
    bookAudioSamplePath: "assets/tracks/🚀Astronaut On The Depths.mp3",
    bookTitle: "Advanced Real Estate Strategies",
    bookDescription: "Take your real estate knowledge to the next level with advanced strategies and techniques.",
    bookPrice: 59.99,
    bookPromotion: "15% off for early buyers"
  },
  {
    bookId: "3",
    bookImagePath: "assets/images/book3.jpg",
    bookAudioPathUrl: "assets/audio/book3-full.mp3",
    bookChaptersAndAudioPaths: [
      { name: "Chapter Intro", "src": "assets/sound/wav/intro.wav" },
      { name: "Chapter 1: Real Estate Finance", "src": "assets/sound/wav/real-state-book/01-Audio.wav" },
      { name: "Chapter 2: Legal Aspects of Real Estate", "src": "assets/sound/wav/real-state-book/02-Audio.wav" },
      { name: "Chapter 3: Appraisal Techniques", "src": "assets/sound/wav/real-state-book/03-Audio.wav" },
      { name: "Chapter 4: Commercial Real Estate", "src": "assets/sound/wav/real-state-book/04-Audio.wav" }
    ],
    bookAudioSamplePath: "assets/tracks/🚀Astronaut On The Depths.mp3",
    bookTitle: "Real Estate Finance & Law",
    bookDescription: "Understanding the financial and legal aspects of real estate is crucial for success in the industry.",
    bookPrice: 39.99,
    bookPromotion: "Free chapter with purchase"
  },
  {
    bookId: "4",
    bookImagePath: "assets/images/book4.jpg",
    bookAudioPathUrl: "assets/audio/book4-full.mp3",
    bookChaptersAndAudioPaths: [
      { name: "Chapter Intro", "src": "assets/sound/wav/intro.wav" },
      { name: "Chapter 1: Introduction to Property Management", "src": "assets/sound/wav/real-state-book/01-Audio.wav" },
      { name: "Chapter 2: Leasing and Tenant Management", "src": "assets/sound/wav/real-state-book/02-Audio.wav" },
      { name: "Chapter 3: Property Maintenance", "src": "assets/sound/wav/real-state-book/03-Audio.wav" },
      { name: "Chapter 4: Financial Management for Property Managers", "src": "assets/sound/wav/real-state-book/04-Audio.wav" }
    ],
    bookAudioSamplePath: "assets/tracks/🚀Astronaut On The Depths.mp3",
    bookTitle: "Property Management Essentials",
    bookDescription: "Master the art of property management with this detailed guide covering all essential aspects.",
    bookPrice: 44.99,
    bookPromotion: "Buy 2, get 1 free"
  },
  {
    bookId: "5",
    bookImagePath: "assets/images/book5.jpg",
    bookAudioPathUrl: "assets/audio/book5-full.mp3",
    bookChaptersAndAudioPaths: [
      { name: "Chapter Intro", "src": "assets/sound/wav/intro.wav" },
      { name: "Chapter 1: Real Estate Marketing", "src": "assets/sound/wav/real-state-book/01-Audio.wav" },
      { name: "Chapter 2: Social Media for Real Estate", "src": "assets/sound/wav/real-state-book/02-Audio.wav" },
      { name: "Chapter 3: Branding and Advertising", "src": "assets/sound/wav/real-state-book/03-Audio.wav" },
      { name: "Chapter 4: Lead Generation Techniques", "src": "assets/sound/wav/real-state-book/04-Audio.wav" }
    ],
    bookAudioSamplePath: "assets/tracks/🚀Astronaut On The Depths.mp3",
    bookTitle: "Real Estate Marketing Mastery",
    bookDescription: "Learn how to effectively market real estate and generate high-quality leads with modern techniques.",
    bookPrice: 54.99,
    bookPromotion: "Limited time offer: 20% off"
  },
  {
    bookId: "6",
    bookImagePath: "assets/images/book6.jpg",
    bookAudioPathUrl: "assets/audio/book6-full.mp3",
    bookChaptersAndAudioPaths: [
      { name: "Chapter Intro", "src": "assets/sound/wav/intro.wav" },
      { name: "Chapter 1: Investing in Rental Properties", "src": "assets/sound/wav/real-state-book/01-Audio.wav" },
      { name: "Chapter 2: Analyzing Real Estate Deals", "src": "assets/sound/wav/real-state-book/02-Audio.wav" },
      { name: "Chapter 3: Managing Rental Properties", "src": "assets/sound/wav/real-state-book/03-Audio.wav" },
      { name: "Chapter 4: Financing Rental Investments", "src": "assets/sound/wav/real-state-book/04-Audio.wav" }
    ],
    bookAudioSamplePath: "assets/tracks/🚀Astronaut On The Depths.mp3",
    bookTitle: "Rental Property Investing",
    bookDescription: "A complete guide to successfully investing in rental properties and building long-term wealth.",
    bookPrice: 64.99,
    bookPromotion: "Get a free consultation with purchase"
  }
]
};