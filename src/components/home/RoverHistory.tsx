"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useMessages, useTranslations } from 'next-intl';
import { Container, Eyebrow, Reveal } from '@/components/ui';
import { rovers, type Rover } from '@/data/rovers';

// Oldest -> newest for the scroll story, without touching the shared data file's order.
const chapters = [...rovers].sort((a, b) => a.year - b.year);

type ChapterText = { achievement: string; description: string };

export default function RoverHistory() {
  const t = useTranslations('home.history');
  const roverText = useMessages().rovers;
  const [active, setActive] = useState(0);
  const groupRef = useRef<HTMLDivElement>(null);
  // Only show the rail while a chapter is actually crossing the viewport centre, not for any overlap.
  const groupInView = useInView(groupRef, { margin: '-50% 0px -50% 0px' });

  return (
    <section className="bg-canvas border-t border-ink/8 pt-24 lg:pt-32">
      <Container>
        <div className="grid lg:grid-cols-[280px_1fr] gap-16 lg:gap-24 mb-14">
          <div>
            <Reveal duration={0.5}>
              <Eyebrow>{t('eyebrow')}</Eyebrow>
            </Reveal>
            <Reveal duration={0.5} delay={0.08}>
              <h2 className="font-display text-2xl font-bold text-ink leading-tight">{t('heading')}</h2>
            </Reveal>
          </div>
          <Reveal duration={0.5} delay={0.1} className="self-end">
            <p className="text-ink/60 text-sm leading-relaxed max-w-[560px]">{t('description')}</p>
          </Reveal>
        </div>
      </Container>

      {/* Purely decorative progress indicator, desktop only — never exposed to assistive tech. */}
      <div
        aria-hidden
        className={`hidden lg:flex fixed left-8 xl:left-12 top-1/2 -translate-y-1/2 z-20 flex-col gap-5 transition-opacity duration-300 ${
          groupInView ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {chapters.map((rover, i) => (
          <div key={rover.id} className="flex items-center gap-3">
            <span className={`w-6 h-px transition-colors ${i === active ? 'bg-mars-red' : 'bg-white/30'}`} />
            <span
              className={`font-mono text-[10px] tracking-[0.15em] uppercase transition-colors ${
                i === active ? 'text-white' : 'text-white/60'
              }`}
            >
              {rover.callsign}
            </span>
          </div>
        ))}
      </div>

      <div ref={groupRef}>
        {chapters.map((rover, i) => (
          <Chapter
            key={rover.id}
            rover={rover}
            index={i}
            text={roverText[rover.id]}
            statusText={roverText.status[rover.status]}
            learnMoreLabel={t('learnMore')}
            onActive={setActive}
          />
        ))}
      </div>
    </section>
  );
}

function Chapter({
  rover,
  index,
  text,
  statusText,
  learnMoreLabel,
  onActive,
}: {
  rover: Rover;
  index: number;
  text: ChapterText;
  statusText: string;
  learnMoreLabel: string;
  onActive: (index: number) => void;
}) {
  const ref = useRef<HTMLElement>(null);
  // A thin band at viewport center marks this chapter "active" for the rail.
  const centered = useInView(ref, { margin: '-50% 0px -50% 0px' });
  // Reduced motion is handled in CSS (motion-reduce:transform-none!), not JS: the server can't
  // know the preference, so a JS branch would mismatch on hydration.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const yearY = useTransform(scrollYProgress, [0, 1], ['30%', '-30%']);

  useEffect(() => {
    if (centered) onActive(index);
  }, [centered, index, onActive]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden flex items-end bg-ink border-b border-white/10 last:border-b-0">
      <motion.div
        aria-hidden
        className="absolute inset-0 motion-reduce:transform-none! motion-reduce:will-change-auto"
        style={{ y: bgY, willChange: 'transform' }}
      >
        <Image src={rover.image} alt="" fill sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
      </motion.div>

      <motion.span
        aria-hidden
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 motion-reduce:transform-none! motion-reduce:will-change-auto text-center font-mono font-bold text-white/10 leading-none select-none pointer-events-none text-[clamp(8rem,22vw,20rem)]"
        style={{ y: yearY, willChange: 'transform' }}
      >
        {rover.year}
      </motion.span>

      <div className="relative z-10 px-page pt-24 pb-20 lg:pb-28 w-full">
        <div className="max-w-xl lg:ml-40 xl:ml-48">
          <div className="flex items-baseline gap-4 mb-4">
            <span className="font-mono text-sm tracking-[0.2em] text-white/60 uppercase">{rover.callsign}</span>
            <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-white/60">{statusText}</span>
          </div>
          <h3 className="font-display text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">{rover.designation}</h3>
          <p className="font-mono text-[11px] tracking-[0.05em] text-mars-red-light mb-5">{text.achievement}</p>
          <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 max-w-md">{text.description}</p>
          <Link
            href="/rover"
            className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-white/60 hover:text-white transition-colors group"
          >
            <span className="w-5 h-px bg-current transition-all group-hover:w-8" />
            {learnMoreLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
