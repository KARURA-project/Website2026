import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Sponsor {
  id?: string;
  name: string;
  logo?: string; // some callers use `logo`
  logoSrc?: string; // others use `logoSrc`
  websiteUrl?: string;
}

interface SponsorMarqueeProps {
  sponsors?: Sponsor[];
}

// Carousel implementation (keeps default export name so imports remain unchanged)
export default function SponsorMarquee({ sponsors = [] }: SponsorMarqueeProps) {
  if (!sponsors || sponsors.length === 0) return null;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardWidth, setCardWidth] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const normalized = sponsors.map((s, i) => ({
    id: s.id ?? `${i}`,
    name: s.name,
    logo: s.logo ?? s.logoSrc ?? '',
    websiteUrl: s.websiteUrl ?? '/support',
  }));

  const extendedSponsors = [...normalized, ...normalized];
  const sponsorsPerView = 6;

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        const totalWidth = trackRef.current.scrollWidth;
        setCardWidth(totalWidth / extendedSponsors.length);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [extendedSponsors.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1 >= normalized.length ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, normalized.length]);

  return (
    <section className="py-32 bg-white border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Our Sponsors</h2>
          <div className="w-16 h-1 bg-mars-red mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            Thank you to our valued partners who make our mission possible.
          </p>
        </div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <motion.div
            ref={trackRef}
            className="flex gap-8"
            animate={{ x: cardWidth ? -(currentIndex * cardWidth) : 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            {extendedSponsors.map((sponsor, index) => (
              <div
                key={`${sponsor.id}-${index}`}
                className="flex-shrink-0"
                style={{ width: `calc((100% - ${(sponsorsPerView - 1) * 2}rem) / ${sponsorsPerView})` }}
              >
                <div className="relative h-32 bg-gray-50 border border-gray-200 rounded-lg p-6 flex items-center justify-center hover:border-mars-red transition-colors duration-300">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {normalized.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-mars-red w-8' : 'bg-gray-300 hover:bg-gray-400 w-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Link
            href="/support"
            className="inline-flex items-center px-10 py-4 border-2 border-charcoal text-charcoal font-medium hover:border-mars-red hover:text-mars-red transition-colors duration-300"
          >
            View All Sponsors
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
