'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import TransmissionHero from '@/components/news/TransmissionHero';
import TransmissionArchive from '@/components/news/TransmissionArchive';
import transmissions from '@/data/transmissions';

const categories = [
  'All',
  'Achievement',
  'Competition',
  'Update',
  'Team',
  'Sponsor',
];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('All');


const filtered =
  activeCategory === 'All'
    ? transmissions
    : transmissions.filter(
        n => n.category === activeCategory
      );  const [featured, ...rest] = filtered;

  return (
    <main className="bg-[#FAFAFA] min-h-screen">
      <Header />

      {/* HERO */}
      <section className="pt-36 pb-20 border-b border-[#0A0A0A]/8">

        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-6 h-px bg-[#0A0A0A]" />

            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/40">
              Mission Archive
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="font-display text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.92] tracking-tight text-[#0A0A0A]"
          >
            NEWS &
            <br />
            TRANSMISSIONS
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="font-display text-3xl font-bold mb-6 mt-8"
          >
            Latest Transmission
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="max-w-[520px] mt-4 text-sm leading-relaxed text-[#0A0A0A]/50"
          >
            Engineering milestones, competition campaigns, sponsor announcements, and operational updates documenting KARURA's journey across Japan and Texas.
          </motion.p>

        </div>

      </section>

      {/* FILTER BAR */}
      <section className="sticky top-16 z-20 bg-[#FAFAFA]/95 backdrop-blur-md border-b border-[#0A0A0A]/8">

        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28 py-6">

          <div className="flex flex-wrap gap-3">

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-3 border font-mono text-[10px] tracking-[0.18em] uppercase transition-all duration-200
                ${
                  activeCategory === cat
                    ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
                    : 'border-[#0A0A0A]/10 text-[#0A0A0A]/45 hover:border-[#0A0A0A] hover:text-[#0A0A0A]'
                }`}
              >
                {cat}
              </button>
            ))}

          </div>

        </div>

      </section>

      {/* FEATURED MISSION LOG */}
      {featured && (

        <section className="py-24">

          <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-[#0A0A0A]" />

              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/40">
                Featured Mission Log
              </span>
            </div>

            <h2 className="font-display text-3xl font-bold mb-10">
              Latest Transmission
            </h2>

            <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-[1.4fr_0.9fr] border border-[#0A0A0A]/10 items-stretch"
          >

            {/* IMAGE */}
            <Link
              href={featured.link || '#'}
              className="relative min-h-[520px] overflow-hidden group"
            >
              <Image
                src={featured.imageUrl}
                alt={featured.imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
            </Link>

            {/* META */}
            <div className="border-l border-[#0A0A0A]/10 p-8 lg:p-10 flex flex-col h-full">

              <div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-10">

                  <div>
                    <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#0A0A0A]/35 mb-2">
                      Date
                    </div>

                    <div className="font-mono text-xs">
                      {new Date(featured.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                      })}
                    </div>
                  </div>

                  <div>
                    <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#0A0A0A]/35 mb-2">
                      Category
                    </div>

                    <div className="font-mono text-xs">
                      {featured.category}
                    </div>
                  </div>

                  <div>
                    <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#0A0A0A]/35 mb-2">
                      Read Time
                    </div>

                    <div className="font-mono text-xs">
                      {featured.readTime ?? '5 MIN'}
                    </div>
                  </div>

                  <div>
                    <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#0A0A0A]/35 mb-2">
                      Status
                    </div>

                    <div className="font-mono text-xs">
                      ARCHIVED
                    </div>
                  </div>

                </div>

                <h3 className="font-display text-3xl font-bold leading-tight mb-6">
                  {featured.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#0A0A0A]/55">
                  {featured.description}
                </p>

              </div>

              <div className="mt-auto pt-10">

                <div className="flex flex-wrap gap-2 mb-8">

                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-2 border border-[#0A0A0A]/10 font-mono text-[10px] tracking-[0.15em] uppercase"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

                <Link
                  href={featured.link || '#'}
                  className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase text-[#0A0A0A] hover:text-[#E63946] transition-colors group"
                >
                  <span className="w-6 h-px bg-current transition-all group-hover:w-10" />

                  Read Article
                </Link>

              </div>

            </div>

          </motion.div>

          </div>

        </section>
      )}
            {/* ARCHIVE + TIMELINE */}
      <section className="pb-24">

        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

          <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-20">

            {/* ARCHIVE */}
            <div>

              <div className="flex items-center gap-3 mb-5">
                <span className="w-6 h-px bg-[#0A0A0A]" />

                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/40">
                  Recent Transmissions
                </span>
              </div>

              <h2 className="font-display text-3xl font-bold mb-10">
                Mission Archive
              </h2>

              <div className="border-y border-[#0A0A0A]/10 divide-y divide-[#0A0A0A]/10">

                {rest.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                  >
                    <Link
                      href={article.link || '#'}
                      className="group block py-10"
                    >

                      <div className="grid md:grid-cols-[140px_120px_1fr_auto] gap-6 items-start">

                        {/* DATE */}
                        <div>

                          <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#0A0A0A]/30 mb-2">
                            Date
                          </div>

                          <div className="font-mono text-xs">
                            {new Date(article.date).toLocaleDateString(
                              'en-US',
                              {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                              }
                            )}
                          </div>

                        </div>

                        {/* CATEGORY */}
                        <div>

                          <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#0A0A0A]/30 mb-2">
                            Type
                          </div>

                          <div className="font-mono text-xs">
                            {article.category}
                          </div>

                        </div>

                        {/* CONTENT */}
                        <div>

                          <h3 className="font-display text-xl font-bold leading-snug mb-3 group-hover:text-[#E63946] transition-colors">
                            {article.title}
                          </h3>

                          <p className="text-sm leading-relaxed text-[#0A0A0A]/50 mb-5">
                            {article.description}
                          </p>

                          <div className="flex flex-wrap gap-2">

                            {article.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1.5 border border-[#0A0A0A]/10 font-mono text-[10px] tracking-[0.15em] uppercase"
                              >
                                {tag}
                              </span>
                            ))}

                          </div>

                        </div>

                        {/* CTA */}
                        <div className="pt-1">

                          <div className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.18em] uppercase text-[#0A0A0A] group-hover:text-[#E63946] transition-colors">

                            <span className="w-5 h-px bg-current transition-all duration-200 group-hover:w-8" />

                            Open

                          </div>

                        </div>

                      </div>

                    </Link>
                  </motion.div>
                ))}

              </div>

            </div>

            {/* TIMELINE */}
            <aside>

              <div className="lg:sticky lg:top-28">

                <div className="flex items-center gap-3 mb-5">
                  <span className="w-6 h-px bg-[#0A0A0A]" />

                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/40">
                    Program Timeline
                  </span>
                </div>

                <h2 className="font-display text-3xl font-bold mb-10">
                  Campaign Status
                </h2>

                <div className="relative">

                  <div className="absolute left-[18px] top-0 bottom-0 w-px bg-[#0A0A0A]/10" />

                  <div className="space-y-10">

                    {[
                      {
                        year: '2026',
                        title: 'ACTIVE DEVELOPMENT',
                        body:
                          'Subsystem integration, recruitment expansion, and URC preparation.',
                      },
                      {
                        year: '2025',
                        title: 'SYSTEM ACCEPTANCE',
                        body:
                          'Hardware validation, autonomy refinement, and field testing.',
                      },
                      {
                        year: '2024',
                        title: 'URC FINALS',
                        body:
                          'Historic finals appearance as the first Japanese team.',
                      },
                      {
                        year: '2023',
                        title: 'QUALIFIERS',
                        body:
                          'Foundation established through iterative design cycles.',
                      },
                    ].map((entry) => (
                      <div
                        key={entry.year}
                        className="relative pl-16"
                      >

                        <div className="absolute left-0 top-0 w-9 h-9 border border-[#0A0A0A] bg-[#FAFAFA] flex items-center justify-center font-mono text-[10px] tracking-[0.15em]">
                          {entry.year.slice(-2)}
                        </div>

                        <div>

                          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#0A0A0A]/35 mb-2">
                            {entry.title}
                          </div>

                          <p className="text-sm leading-relaxed text-[#0A0A0A]/50">
                            {entry.body}
                          </p>

                        </div>

                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </aside>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}