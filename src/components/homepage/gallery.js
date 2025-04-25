import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Static imports for your assets (keep original formats)
import rwanda1 from '../../assets/rwanda1.png';
import rwanda11 from '../../assets/Rwanda11.jpg';
import rwanda12 from '../../assets/Rwanda12.jpg';
import rwanda13 from '../../assets/Rwanda13.jpg';
import rwanda14 from '../../assets/Rwanda14.jpg';

const images = [rwanda1, rwanda11, rwanda12, rwanda13, rwanda14];

export default function PhotoGallery() {
  const [index, setIndex] = useState(0);

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % images.length);

  return (
    // Outer wrapper allows overflow for arrows, with vertical spacing
    <div className="relative mx-auto w-11/12 max-w-6xl h-[700px] overflow-visible my-20">
      {/* Gallery Container */}
      <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl">
        {/* Decorative Sprinkles */}
        <div
          className="absolute top-4 left-8 w-6 h-6 bg-yellow-400 rounded-full animate-ping"
          style={{ animationDuration: '2s' }}
        />
        <div
          className="absolute bottom-8 right-10 w-8 h-8 bg-pink-500 rounded-full animate-spin"
          style={{ animationDuration: '6s' }}
        />

        {/* Slides */}
        <AnimatePresence initial={false}>
          <motion.img
            key={index}
            src={images[index]}
            alt={`Slide ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover object-center"
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`block w-3 h-3 rounded-full cursor-pointer transition-all ${
                i === index ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows (positioned outside image) */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -left-20 transform -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full hover:bg-black/70"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-green-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -right-20 transform -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full hover:bg-black/70"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-green-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}