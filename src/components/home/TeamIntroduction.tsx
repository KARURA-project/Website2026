"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { orgStats } from '@/data/stats';

// Home page only surfaces the three most relevant stats out of the shared set
const HOME_STAT_LABELS = ['Active Members', 'Departments', 'Countries'];

export default function TeamIntroduction() {
  const stats = orgStats.filter((s) => HOME_STAT_LABELS.includes(s.label));

  return (
    <section className="py-24 lg:py-32 bg-[#FAFAFA] border-t border-[#0A0A0A]/8">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

        {/* Header — full width, large, stands on its own above the content */}
        <div className="mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="w-6 h-px bg-[#E63946]" />
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/40">
              Who We Are
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="font-display text-[clamp(2.4rem,5vw,4rem)] font-bold text-[#0A0A0A] leading-[0.98] tracking-tight max-w-[720px]"
          >
            A Cross-Pacific Engineering Team
          </motion.h2>
        </div>

        {/* Body text row */}
        <div className="grid md:grid-cols-2 gap-12 mb-12 lg:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-display text-[1.1rem] font-semibold text-[#0A0A0A] leading-snug mb-4">
              KARURA unites passionate students from Texas A&amp;M University and leading universities across Japan.
            </p>
            <p className="text-[#0A0A0A]/55 text-sm leading-relaxed">
              Together, we're pushing the boundaries of Mars exploration technology — building, testing, and competing with hardware that performs under real pressure.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <p className="text-[#0A0A0A]/55 text-sm leading-relaxed mb-5">
              Our team brings together mechanical engineering, electrical systems, software development, scientific research, and business operations — all working toward a common goal.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors group"
            >
              <span className="w-5 h-px bg-current transition-all group-hover:w-8" />
              Meet Our Team
            </Link>
          </motion.div>
        </div>

        {/* Image + stats — image now dominant, fills the rectangle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="grid lg:grid-cols-[1fr_260px] border border-[#0A0A0A]/10"
        >
          {/* Image panel — large, fills available space */}
          <div className="relative h-[420px] sm:h-[520px] lg:h-[640px] border-b lg:border-b-0 lg:border-r border-[#0A0A0A]/10">
            <Image
              src="/Images/Copy of IMG_9586.webp"
              alt="KARURA Team"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Stats — compressed into a narrower rail so the image takes the space */}
          <div className="grid grid-cols-3 lg:grid-cols-1 divide-x lg:divide-x-0 lg:divide-y divide-[#0A0A0A]/10">
            {stats.map((s) => (
              <div key={s.label} className="px-6 py-6 lg:py-8 flex flex-col justify-center">
                <div className="font-mono text-2xl lg:text-3xl font-bold text-[#0A0A0A] leading-none mb-1">
                  {s.value}
                </div>
                <div className="font-display text-xs font-semibold text-[#0A0A0A]/60 mb-0.5">
                  {s.label}
                </div>
                <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-[#0A0A0A]/25">
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}