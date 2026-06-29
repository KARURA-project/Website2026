"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { rovers } from '@/data/rovers';

export default function RoverHistory() {
  return (
    <section className="py-24 lg:py-32 bg-[#FAFAFA] border-t border-[#0A0A0A]/8">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

        <div className="grid lg:grid-cols-[280px_1fr] gap-16 lg:gap-24 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-3"
            >
              <span className="w-6 h-px bg-[#E63946]" />
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/40">
                Program History
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="font-display text-2xl font-bold text-[#0A0A0A] leading-tight"
            >
              Our Journey
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#0A0A0A]/50 text-sm leading-relaxed self-end max-w-[560px]"
          >
            Three years of innovation, dedication, and groundbreaking achievements in Mars rover development.
          </motion.p>
        </div>

        {/* Ruled-cell generation grid — matches /rover generation timeline */}
        <div className="grid lg:grid-cols-3 border-t border-l border-[#0A0A0A]/10">
          {rovers.map((rover: (typeof rovers)[number], i: number) => (
            <motion.div
              key={rover.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="border-b border-r border-[#0A0A0A]/10 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] bg-[#F0F0F0] overflow-hidden">
                <Image
                  src={rover.image}
                  alt={rover.designation}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Info */}
              <div className="p-8 lg:p-10 flex-1 flex flex-col">
                <div className="flex items-baseline justify-between gap-3 mb-4">
                  <span className="font-mono text-2xl font-bold text-[#0A0A0A] leading-none">
                    {rover.year}
                  </span>
                  <span className={`font-mono text-[9px] tracking-[0.15em] uppercase ${rover.statusClass}`}>
                    {rover.status}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-[#0A0A0A] mb-2 leading-snug">
                  {rover.designation}
                </h3>
                <p className="font-mono text-[10px] tracking-[0.05em] text-[#E63946] mb-4">
                  {rover.achievement}
                </p>
                <p className="text-[#0A0A0A]/50 text-sm leading-relaxed mb-6 flex-1">
                  {rover.description}
                </p>

                <Link
                  href="/rover"
                  className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors group mt-auto pt-5 border-t border-[#0A0A0A]/8"
                >
                  <span className="w-5 h-px bg-current transition-all group-hover:w-8" />
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}