"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroWithRover() {
  return (
    <section className="relative min-h-screen bg-[#FAFAFA] overflow-hidden">
      <div className="relative z-10 min-h-screen grid lg:grid-cols-[1fr_45%] items-stretch">

        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 xl:px-28 pt-32 pb-20 lg:py-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-10"
          >
            <span className="w-8 h-px bg-[#E63946]" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#0A0A0A]/50">
              URC 2024 — Historic Milestone
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[clamp(2.8rem,6vw,5.5rem)] font-bold leading-[0.95] tracking-tight text-[#0A0A0A] mb-8"
          >
            In 2024,<br />
            we made<br />
            <span className="text-[#E63946]">history.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-display text-[clamp(1rem,2vw,1.4rem)] font-medium text-[#0A0A0A]/70 leading-snug max-w-[480px] mb-6"
          >
            First international team — and first Japanese team — to reach the URC Finals.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-[#0A0A0A]/50 text-base leading-relaxed max-w-[420px] mb-12"
          >
            KARURA unites students from Texas A&M University and leading universities across Japan,
            pushing the boundaries of Mars exploration technology together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0A0A0A] text-white text-sm font-medium tracking-wide hover:bg-[#E63946] transition-colors duration-300"
            >
              Our Story
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/support"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#0A0A0A]/20 text-[#0A0A0A] text-sm font-medium tracking-wide hover:border-[#0A0A0A] transition-colors duration-300"
            >
              Support Us
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative hidden lg:block"
        >
          <Image
            src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png"
            alt="KARURA Mars Rover — hardware detail"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FAFAFA] to-transparent pointer-events-none" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="bg-[#0A0A0A]/80 backdrop-blur-sm px-5 py-3 flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/60">
                KARURA — URC Finals 2024
              </span>
              <span className="font-mono text-[10px] text-[#E63946] tracking-wider">
                FINALIST
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="lg:hidden relative h-72 mx-8 mb-16">
        <Image
          src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png"
          alt="KARURA Mars Rover"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
