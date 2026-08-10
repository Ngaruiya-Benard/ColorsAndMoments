'use client';

import Image from 'next/image';
import { useState } from 'react';

const categories = ['All', 'Weddings', 'Portraits', 'Events', 'Commercial'];

const photos = [
  { id: 1,  src: '/images/photo-01.webp', alt: 'Wedding moment 1',    category: 'Weddings' },
  { id: 2,  src: '/images/photo-02.webp', alt: 'Wedding moment 2',    category: 'Weddings' },
  { id: 3,  src: '/images/photo-03.webp', alt: 'Wedding moment 3',    category: 'Weddings' },
  { id: 4,  src: '/images/photo-04.webp', alt: 'Wedding moment 4',    category: 'Weddings' },
  { id: 5,  src: '/images/photo-05.webp', alt: 'Wedding moment 5',    category: 'Weddings' },
  { id: 6,  src: '/images/photo-06.webp', alt: 'Portrait 1',          category: 'Portraits' },
  { id: 7,  src: '/images/photo-07.webp', alt: 'Portrait 2',          category: 'Portraits' },
  { id: 8,  src: '/images/photo-08.webp', alt: 'Portrait 3',          category: 'Portraits' },
  { id: 9,  src: '/images/photo-09.webp', alt: 'Portrait 4',          category: 'Portraits' },
  { id: 10, src: '/images/photo-10.webp', alt: 'Portrait 5',          category: 'Portraits' },
  { id: 11, src: '/images/photo-11.webp', alt: 'Event 1',             category: 'Events' },
  { id: 12, src: '/images/photo-12.webp', alt: 'Event 2',             category: 'Events' },
  { id: 13, src: '/images/photo-13.webp', alt: 'Event 3',             category: 'Events' },
  { id: 14, src: '/images/photo-14.webp', alt: 'Event 4',             category: 'Events' },
  { id: 15, src: '/images/photo-15.webp', alt: 'Event 5',             category: 'Events' },
  { id: 16, src: '/images/photo-16.webp', alt: 'Commercial shot 1',   category: 'Commercial' },
  { id: 17, src: '/images/photo-17.webp', alt: 'Commercial shot 2',   category: 'Commercial' },
  { id: 18, src: '/images/photo-18.webp', alt: 'Commercial shot 3',   category: 'Commercial' },
  { id: 19, src: '/images/photo-19.webp', alt: 'Commercial shot 4',   category: 'Commercial' },
  { id: 20, src: '/images/photo-20.webp', alt: 'Commercial shot 5',   category: 'Commercial' },
  { id: 21, src: '/images/gemini-01.webp', alt: 'Creative portrait 1', category: 'Portraits' },
  { id: 22, src: '/images/gemini-02.webp', alt: 'Creative portrait 2', category: 'Portraits' },
  { id: 23, src: '/images/gemini-03.webp', alt: 'Creative portrait 3', category: 'Portraits' },
  { id: 24, src: '/images/gemini-04.webp', alt: 'Creative portrait 4', category: 'Portraits' },
  { id: 25, src: '/images/gemini-05.webp', alt: 'Creative portrait 5', category: 'Portraits' },
  { id: 26, src: '/images/gemini-06.webp', alt: 'Wedding art 1',       category: 'Weddings' },
  { id: 27, src: '/images/gemini-07.webp', alt: 'Wedding art 2',       category: 'Weddings' },
  { id: 28, src: '/images/gemini-08.webp', alt: 'Wedding art 3',       category: 'Weddings' },
  { id: 29, src: '/images/gemini-09.webp', alt: 'Wedding art 4',       category: 'Weddings' },
  { id: 30, src: '/images/gemini-10.webp', alt: 'Wedding art 5',       category: 'Weddings' },
  { id: 31, src: '/images/gemini-11.webp', alt: 'Event art 1',         category: 'Events' },
  { id: 32, src: '/images/gemini-12.webp', alt: 'Event art 2',         category: 'Events' },
  { id: 33, src: '/images/gemini-13.webp', alt: 'Event art 3',         category: 'Events' },
  { id: 34, src: '/images/gemini-14.webp', alt: 'Event art 4',         category: 'Events' },
  { id: 35, src: '/images/gemini-15.webp', alt: 'Event art 5',         category: 'Events' },
  { id: 36, src: '/images/gemini-16.webp', alt: 'Commercial art 1',    category: 'Commercial' },
  { id: 37, src: '/images/gemini-17.webp', alt: 'Commercial art 2',    category: 'Commercial' },
  { id: 38, src: '/images/gemini-18.webp', alt: 'Commercial art 3',    category: 'Commercial' },
  { id: 39, src: '/images/gemini-19.webp', alt: 'Commercial art 4',    category: 'Commercial' },
  { id: 40, src: '/images/chatgpt-01.webp', alt: 'Featured shot',      category: 'Commercial' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? photos
    : photos.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-white py-20 px-4 md:px-8">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-4xl text-black font-bold mb-4">Our Portfolio</h1>
        <p className="text-gray-600 mb-12 text-lg">
          Explore our collection of beautiful moments we've captured
        </p>

        {/* Filter Buttons */}
        <div className="flex gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'border border-blue-300 bg-blue-50 text-blue-700 hover:bg-blue-100 hover:border-blue-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((photo) => (
            <div
              key={photo.id}
              className="aspect-square rounded-lg bg-gray-200 overflow-hidden hover:shadow-lg transition cursor-pointer relative"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
