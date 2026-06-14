// src/components/home/HomeTransmissions.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Transmission } from '@/data/transmissions';

interface HomeTransmissionsProps {
  transmissions: Transmission[];
}

export default function HomeTransmissions({ transmissions }: HomeTransmissionsProps) {
  const [featured, ...rest] = transmissions;

  if (!featured) return null;

  return (
    <section className="bg-[#FAFAFA] border-t border-[#0A0A0A]/8 py-24">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

        {/* ── Section header ── */}
        <div className="mb-14 flex items-end justify-between gap-6 flex-wrap">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-6 h-px bg-[#0A0A0A]" />
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/40">
                Mission Archive
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
              className="font-display text-4xl md:text-5xl font-bold text-[#0A0A0A] leading-tight"
            >
              News &<br className="hidden md:block" /> Transmissions
            </motion.h2>
          </div>
          <Link
            href="/news"
            className="font-mono text-xs tracking-[0.15em] uppercase text-[#0A0A0A]/45 hover:text-[#0A0A0A] transition-colors flex items-center gap-2 pb-1"
          >
            Full Archive
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* ── Featured Mission Log — mirrors news page layout exactly ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-[1.4fr_0.9fr] border border-[#0A0A0A]/10 items-stretch mb-0"
        >
          {/* IMAGE */}
          <Link
            href={featured.link || '/news'}
            className="relative min-h-[400px] lg:min-h-[480px] overflow-hidden group block"
          >
            <Image
              src={featured.imageUrl}
              alt={featured.imageAlt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
            {/* Featured label */}
            <div className="absolute top-6 left-6">
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase bg-[#0A0A0A]/80 text-white/80 px-3 py-1.5 backdrop-blur-sm">
                Latest Transmission
              </span>
            </div>
          </Link>

          {/* META PANEL */}
          <div className="border-t lg:border-t-0 lg:border-l border-[#0A0A0A]/10 p-8 lg:p-10 flex flex-col h-full">

            {/* Telemetry metadata grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-5 mb-8">
              <div>
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#0A0A0A]/30 mb-1.5">Date</div>
                <div className="font-mono text-xs text-[#0A0A0A]">
                  {new Date(featured.date).toLocaleDateString('en-US', {
                    year: 'numeric', month: '2-digit', day: '2-digit',
                  })}
                </div>
              </div>
              <div>
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#0A0A0A]/30 mb-1.5">Category</div>
                <div className="font-mono text-xs text-[#0A0A0A]">{featured.category ?? '—'}</div>
              </div>
              <div>
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#0A0A0A]/30 mb-1.5">Read Time</div>
                <div className="font-mono text-xs text-[#0A0A0A]">{featured.readTime ?? '5 MIN'}</div>
              </div>
              <div>
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#0A0A0A]/30 mb-1.5">Status</div>
                <div className="font-mono text-xs text-[#0A0A0A]">ARCHIVED</div>
              </div>
            </div>

            {/* Title + description */}
            <h3 className="font-display text-2xl lg:text-3xl font-bold leading-tight text-[#0A0A0A] mb-4">
              {featured.title}
            </h3>
            <p className="text-sm leading-relaxed text-[#0A0A0A]/55 flex-1">
              {featured.description}
            </p>

            {/* Footer: tags + CTA */}
            <div className="mt-auto pt-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 border border-[#0A0A0A]/10 font-mono text-[9px] tracking-[0.15em] uppercase text-[#0A0A0A]/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={featured.link || '/news'}
                className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase text-[#0A0A0A] hover:text-[#E63946] transition-colors group"
              >
                <span className="w-6 h-px bg-current transition-all group-hover:w-10" />
                Read Article
              </Link>
            </div>
          </div>
        </motion.div>

        {/* ── Archive rows — matches news page archive list style exactly ── */}
        {rest.length > 0 && (
          <div className="border-x border-b border-[#0A0A0A]/10 divide-y divide-[#0A0A0A]/10">
            {rest.slice(0, 3).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <Link
                  href={article.link || '/news'}
                  className="group block py-8 px-8 lg:px-10"
                >
                  <div className="grid md:grid-cols-[140px_120px_1fr_auto] gap-6 items-start">

                    {/* DATE */}
                    <div>
                      <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#0A0A0A]/30 mb-1.5">
                        Date
                      </div>
                      <div className="font-mono text-xs text-[#0A0A0A]">
                        {new Date(article.date).toLocaleDateString('en-US', {
                          year: 'numeric', month: '2-digit', day: '2-digit',
                        })}
                      </div>
                    </div>

                    {/* CATEGORY */}
                    <div>
                      <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#0A0A0A]/30 mb-1.5">
                        Category
                      </div>
                      <div className="font-mono text-xs text-[#0A0A0A]">
                        {article.category ?? '—'}
                      </div>
                    </div>

                    {/* TITLE + DESCRIPTION */}
                    <div>
                      <h4 className="font-display text-base font-bold text-[#0A0A0A] leading-snug mb-1.5 group-hover:text-[#E63946] transition-colors">
                        {article.title}
                      </h4>
                      <p className="text-[#0A0A0A]/45 text-xs leading-relaxed line-clamp-1 hidden md:block">
                        {article.description}
                      </p>
                    </div>

                    {/* READ TIME + ARROW */}
                    <div className="flex items-start gap-4 justify-end">
                      <div className="text-right hidden lg:block">
                        <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#0A0A0A]/30 mb-1.5">
                          Read
                        </div>
                        <div className="font-mono text-xs text-[#0A0A0A]">
                          {article.readTime ?? '4 MIN'}
                        </div>
                      </div>
                      <svg
                        className="w-4 h-4 text-[#0A0A0A]/20 group-hover:text-[#E63946] transition-colors mt-0.5 shrink-0"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* Footer row: total count + archive link */}
            <div className="py-6 px-8 lg:px-10 flex items-center justify-between">
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#0A0A0A]/25">
                {rest.length + 1} transmissions in archive
              </span>
              <Link
                href="/news"
                className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] uppercase text-[#0A0A0A]/40 hover:text-[#0A0A0A] transition-colors"
              >
                View Full Archive
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
