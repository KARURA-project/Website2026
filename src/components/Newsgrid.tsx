"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { NewsItem } from './NewsCard';

interface NewsGridProps {
  newsItems: NewsItem[];
}

const categoryLabel: Record<string, string> = {
  Competition: 'COMPETITION',
  Team: 'TEAM',
  Achievement: 'ACHIEVEMENT',
  Update: 'UPDATE',
  Sponsor: 'SPONSOR',
};

export default function NewsGrid({ newsItems }: NewsGridProps) {
  const [featured, ...rest] = newsItems;

  return (
    <section className="bg-[#FAFAFA] py-24">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

        {/* Header — left-aligned editorial style */}
        <div className="mb-16 flex items-end justify-between gap-6 flex-wrap">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-6 h-px bg-[#E63946]" />
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#0A0A0A]/40">
                Latest Updates
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="font-display text-4xl md:text-5xl font-bold text-[#0A0A0A] leading-tight"
            >
              Activity &<br className="hidden md:block" /> Press
            </motion.h2>
          </div>
          <Link
            href="/news"
            className="font-mono text-xs tracking-[0.15em] uppercase text-[#0A0A0A]/50 hover:text-[#0A0A0A] transition-colors flex items-center gap-2 pb-1"
          >
            All News
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Asymmetric 70/30 feature split */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-[1fr_340px] gap-0 mb-0 border border-[#0A0A0A]/8"
          >
            {/* Large featured image */}
            <Link href={featured.link || '#'} className="block group relative overflow-hidden h-[360px] lg:h-[480px] bg-[#0A0A0A]">
              <Image
                src={featured.imageUrl}
                alt={featured.imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
              />
              {/* Category pill */}
              {featured.category && (
                <div className="absolute top-6 left-6">
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase bg-[#E63946] text-white px-3 py-1.5">
                    {categoryLabel[featured.category] ?? featured.category}
                  </span>
                </div>
              )}
            </Link>

            {/* Right panel — text content */}
            <div className="flex flex-col justify-between border-l border-[#0A0A0A]/8 p-8 lg:p-10">
              <div>
                <time className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#0A0A0A]/30 block mb-6">
                  {new Date(featured.date).toLocaleDateString('en-US', {
                    year: 'numeric', month: '2-digit', day: '2-digit',
                  })}
                </time>
                <h3 className="font-display text-2xl font-bold text-[#0A0A0A] leading-snug mb-5">
                  {featured.title}
                </h3>
                <p className="text-[#0A0A0A]/55 text-sm leading-relaxed">
                  {featured.description}
                </p>
              </div>
              <Link
                href={featured.link || '#'}
                className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase text-[#0A0A0A] hover:text-[#E63946] transition-colors mt-8 group"
              >
                <span className="w-5 h-px bg-current transition-all group-hover:w-8" />
                Read More
              </Link>
            </div>
          </motion.div>
        )}

        {/* Secondary cards — horizontal list, no uniform grid */}
        <div className="grid md:grid-cols-3 border-l border-b border-r border-[#0A0A0A]/8 divide-x divide-[#0A0A0A]/8">
          {rest.slice(0, 3).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
            >
              <Link href={item.link || '#'} className="group block h-full">
                {/* No duplicate rover image — use colored category block as fallback */}
                <div className="relative h-44 overflow-hidden bg-[#0A0A0A]">
                  <Image
                    src={item.imageUrl}
                    alt={item.imageAlt}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  {item.category && (
                    <div className="absolute top-4 left-4">
                      <span className="font-mono text-[9px] tracking-[0.15em] uppercase bg-[#0A0A0A]/70 text-white/70 px-2.5 py-1 backdrop-blur-sm">
                        {categoryLabel[item.category] ?? item.category}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6 lg:p-7">
                  <time className="font-mono text-[10px] tracking-[0.1em] text-[#0A0A0A]/30 block mb-3">
                    {new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric', month: '2-digit', day: '2-digit',
                    })}
                  </time>
                  <h3 className="font-display text-base font-bold text-[#0A0A0A] leading-snug mb-2 group-hover:text-[#E63946] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#0A0A0A]/45 text-xs leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}