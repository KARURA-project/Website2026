import React from 'react';

interface Sponsor {
  name: string;
  logoSrc: string;
  websiteUrl: string;
}

interface SponsorMarqueeProps {
  title?: string;
  sponsors?: Sponsor[];
}

/**
 * SponsorMarquee matrix for uniform corporate and institutional support placements.
 */
export default function SponsorMarquee({ 
  title = "Our Supporters", 
  sponsors = [] 
}: SponsorMarqueeProps) {
  if (!sponsors || sponsors.length === 0) return null;

  return (
    <section className="w-full py-12 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-sm font-semibold tracking-widest text-slate-gray uppercase mb-8">
          {title}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {sponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-mars-red hover:bg-white transition-all duration-200 group filter grayscale hover:grayscale-0"
            >
              <img
                src={sponsor.logoSrc}
                alt={sponsor.name}
                className="max-h-12 max-w-full object-contain transform group-hover:scale-105 transition-transform"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}