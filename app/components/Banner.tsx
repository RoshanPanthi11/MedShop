'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import React from 'react';

interface BannerItem {
  id: number;
  imageUrl: string;
}

const banners: BannerItem[] = [
  { id: 1, imageUrl: '/images/banner1.jpeg' },
  { id: 2, imageUrl: '/images/banner2.jpeg' },
  { id: 3, imageUrl: '/images/banner3.jpeg' },
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mx-auto overflow-hidden h-64 sm:h-80 md:h-[26rem] rounded-2xl shadow-xl">
      <div
        className="flex transition-transform duration-[1200ms] ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="relative min-w-full h-full"
          >
            <Image
              src={banner.imageUrl}
              alt={`Banner ${banner.id}`}
              fill
              className="object-cover transition-opacity duration-1000"
              priority
            />

            {/* Optional soft gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/10 z-10"></div>
          </div>
        ))}
      </div>

      {/* Dots indicator (optional & clean) */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
