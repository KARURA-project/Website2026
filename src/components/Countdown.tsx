"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// URC 2025 typically runs late May/early June in Utah. Set exact date when confirmed.
// Adjust this to the actual competition start datetime:
const URC_DATE = new Date('2027-05-28T08:00:00-07:00'); // MDT

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const now = Date.now();
  const diff = URC_DATE.getTime() - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0};
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number, digits = 2) {
  return String(n).padStart(digits, '0');
}

export default function TelemetryCountdown() {
  const [time, setTime] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // initialize once on mount and then start interval
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 50);
    return () => clearInterval(id);
  }, []);

  const fields: { label: string; value: string; large?: boolean }[] = [
    { label: 'DAYS', value: pad(time.days, 3), large: true },
    { label: 'HRS', value: pad(time.hours), large: true },
    { label: 'MIN', value: pad(time.minutes), large: true },
    { label: 'SEC', value: pad(time.seconds), large: true },
  ];

  return (
    <section className="bg-[#FAFAFA] border-t border-[#0A0A0A]/8 py-20">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

        {/* Header row — left-aligned, not centered */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-6 h-px bg-[#E63946]" />
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#0A0A0A]/40">
              Mission Clock
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A]"
          >
            Next Competition
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-mono text-xs text-[#0A0A0A]/40 mt-2 tracking-wider"
          >
            T-MINUS // URC 2027 — Hanksville, Utah
          </motion.p>
        </div>

        {/* Countdown readout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap items-end gap-0"
        >
          {fields.map((field, i) => (
            <div
              key={field.label}
              className={`flex flex-col items-start ${
                i < fields.length - 1 ? 'pr-6 mr-6 border-r border-[#0A0A0A]/10' : ''
              }`}
            >
              <span
                className={`font-mono font-bold tabular-nums leading-none text-[#0A0A0A] ${
                  field.large
                    ? 'text-[clamp(3rem,7vw,6.5rem)]'
                    : 'text-[clamp(1.6rem,3.5vw,3.5rem)] text-[#0A0A0A]/40'
                }`}
              >
                {mounted ? field.value : field.large ? '000' : '00'}
              </span>
              <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#0A0A0A]/30 mt-1">
                {field.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Footer metadata row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 pt-8 border-t border-[#0A0A0A]/8 flex flex-wrap gap-8 items-center"
        >
          <div>
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#0A0A0A]/30 block mb-1">
              Target Date
            </span>
            <span className="font-mono text-sm text-[#0A0A0A]/60">
              {URC_DATE.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
          <div>
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#0A0A0A]/30 block mb-1">
              Venue
            </span>
            <span className="font-mono text-sm text-[#0A0A0A]/60">Mars Desert Research Station, Utah</span>
          </div>
          <div>
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#0A0A0A]/30 block mb-1">
              Status
            </span>
            <span className="font-mono text-sm text-[#E63946] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E63946] animate-pulse inline-block" />
              Active Build
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}