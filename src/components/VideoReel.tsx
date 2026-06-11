"use client";

import { motion } from 'framer-motion';

export default function VideoReel() {
  // YouTube embed ID — replace with KARURA's actual competition highlight reel
  const YOUTUBE_ID = 'dQw4w9WgXcQ'; // placeholder — swap with real reel

  return (
    <section className="bg-[#0A0A0A] py-0">
      {/* Full-bleed video grid: large video left, stacked info cells right */}
      <div className="grid lg:grid-cols-[1fr_320px] min-h-[520px]">

        {/* Main video */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-black"
        >
          <iframe
            className="w-full h-full min-h-[320px] lg:min-h-[520px] block"
            src={`https://www.youtube.com/embed/${YOUTUBE_ID}?rel=0&modestbranding=1&color=white`}
            title="KARURA Competition Highlight Reel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          {/* Watermark label */}
          <div className="absolute top-4 left-4 pointer-events-none">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40">
              URC 2024 // Competition Reel
            </span>
          </div>
        </motion.div>

        {/* Right column — info telemetry cells */}
        <div className="flex flex-col border-l border-white/5">

          {/* Cell 1 — Competition context */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1 px-8 py-8 border-b border-white/5 flex flex-col justify-between"
          >
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30 mb-3 block">
              Competition
            </span>
            <div>
              <div className="font-display text-white font-bold text-xl leading-tight mb-2">
                University Rover Challenge
              </div>
              <div className="font-mono text-[#E63946] text-sm">Finals — 2024</div>
            </div>
            <p className="text-white/40 text-xs leading-relaxed mt-4">
              The world's premier robotics competition for university students — held annually in the Utah desert.
            </p>
          </motion.div>

          {/* Cell 2 — Location data */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 px-8 py-8 border-b border-white/5"
          >
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30 mb-3 block">
              Location
            </span>
            <div className="font-mono text-white text-sm">
              <div className="mb-1">Hanksville, Utah</div>
              <div className="text-white/40 text-xs">38.3714° N, 110.7183° W</div>
            </div>
          </motion.div>

          {/* Cell 3 — CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex-1 px-8 py-8 flex flex-col justify-end"
          >
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30 mb-4 block">
              Follow the Mission
            </span>
            <a
              href="https://youtube.com/@karuraproject"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors group"
            >
              <span className="w-6 h-px bg-white/30 group-hover:bg-white transition-colors" />
              YouTube Channel
              <svg className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}