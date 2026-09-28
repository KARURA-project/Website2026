"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useMessages, useTranslations } from 'next-intl';
import { Container, Eyebrow, Reveal } from '@/components/ui';
import { rovers } from '@/data/rovers';

export default function RoverHistory() {
  const t = useTranslations('home.history');
  const roverText = useMessages().rovers;

  return (
    <section className="py-24 lg:py-32 bg-canvas border-t border-ink/8">
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
            <p className="text-ink/50 text-sm leading-relaxed max-w-[560px]">{t('description')}</p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-3 border-t border-l border-ink/10">
          {rovers.map((rover, i) => (
            <Reveal key={rover.id} delay={i * 0.08} duration={0.5} className="border-b border-r border-ink/10 flex flex-col">
              <div className="relative w-full aspect-[4/3] bg-mist overflow-hidden">
                <Image src={rover.image} alt={rover.designation} fill className="object-cover object-center" />
              </div>

              <div className="p-8 lg:p-10 flex-1 flex flex-col">
                <div className="flex items-baseline justify-between gap-3 mb-4">
                  <span className="font-mono text-2xl font-bold text-ink leading-none">{rover.year}</span>
                  <span className={`font-mono text-[9px] tracking-[0.15em] uppercase ${rover.statusClass}`}>
                    {roverText.status[rover.status]}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-ink mb-2 leading-snug">{rover.designation}</h3>
                <p className="font-mono text-[10px] tracking-[0.05em] text-mars-red mb-4">{roverText[rover.id].achievement}</p>
                <p className="text-ink/50 text-sm leading-relaxed mb-6 flex-1">{roverText[rover.id].description}</p>

                <Link
                  href="/rover"
                  className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-ink/60 hover:text-ink transition-colors group mt-auto pt-5 border-t border-ink/8"
                >
                  <span className="w-5 h-px bg-current transition-all group-hover:w-8" />
                  {t('learnMore')}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
