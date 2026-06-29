'use client';

import Image from 'next/image';
import Link from 'next/link';

interface Sponsor {
  id: string;
  name: string;
  logo: string;
}

export default function SponsorsCarousel({ sponsors }: { sponsors: Sponsor[] }) {
  // Triple the array so the seamless loop works at any viewport width
  const track = [...sponsors, ...sponsors, ...sponsors];

  return (
    <section className="py-24 bg-[#FAFAFA] border-t border-[#0A0A0A]/8">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28 mb-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-[#E63946]" />
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#0A0A0A]/40">
                Partners &amp; Sponsors
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A]">
              Our Sponsors
            </h2>
          </div>
          <Link
            href="/support"
            className="font-mono text-xs tracking-[0.15em] uppercase text-[#0A0A0A]/40 hover:text-[#0A0A0A] transition-colors flex items-center gap-2 pb-1"
          >
            Become a Sponsor
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Continuously rotating marquee — pure CSS, no JS, full color always */}
      <div className="overflow-hidden border-y border-[#0A0A0A]/8">
        <div
          className="flex w-max"
          style={{ animation: 'marquee 64s linear infinite' }}
        >
          {track.map((sponsor, index) => (
            <div
              key={`${sponsor.id}-${index}`}
              className="flex-shrink-0 w-48 h-20 border-r border-[#0A0A0A]/8 flex items-center justify-center px-8"
            >
              <div className="relative w-full h-10">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
