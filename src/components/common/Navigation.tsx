'use client';
import './Navigation.css';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-slate-900">
          PhotoStudio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="ext-nav-bar">
            Home
          </Link>
          <Link href="/portfolio" className="ext-nav-bar">
            Portfolio
          </Link>
          <Link href="/about" className="ext-nav-bar">
            About
          </Link>
          <Link href="/testimonials" className="ext-nav-bar">
            Testimonials
          </Link>
          <Link href="/blog" className="ext-nav-bar">
            Blog
          </Link>
          <Link
            href="/booking"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t">
          <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
            Home
          </Link>
          <Link href="/portfolio" className="block px-4 py-2 hover:bg-gray-100">
            Portfolio
          </Link>
          <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
            About
          </Link>
          <Link href="/testimonials" className="block px-4 py-2 hover:bg-gray-100">
            Testimonials
          </Link>
          <Link href="/blog" className="block px-4 py-2 hover:bg-gray-100">
            Blog
          </Link>
          <Link href="/booking" className="block px-4 py-2 hover:bg-gray-100">
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}
