"use client";

import { useSyncExternalStore } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Container, Eyebrow, Meta, Reveal, formatDate } from '@/components/ui';

// TRC 2027 start. Update when the exact date is confirmed; change the offset and the zone together.
// ponytail: still US Mountain time from the URC version; Tottori would be '+09:00' / 'Asia/Tokyo'.
const TARGET = { iso: '2027-03-19T08:00:00-07:00', timeZone: 'America/Denver' };
const TARGET_DATE = new Date(TARGET.iso);

const secondsLeft = () => Math.max(0, Math.floor((TARGET_DATE.getTime() - Date.now()) / 1000));

function subscribe(onTick: () => void) {
  const id = setInterval(onTick, 1000);
  return () => clearInterval(id);
}

const pad = (n: number, digits = 2) => String(Math.floor(n)).padStart(digits, '0');

// Engineering-grid background: plain CSS lines, no image.
const GRID_BG = {
  backgroundImage:
    'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
  backgroundSize: '48px 48px',
};

/** Small L-shaped corner border, positioned by the `corner` utility classes. */
function CornerBracket({ corner }: { corner: string }) {
  return <span aria-hidden className={`absolute w-6 h-6 border-mars-red ${corner}`} />;
}

export default function Countdown() {
  const t = useTranslations('home.countdown');
  const locale = useLocale();
  // Server render shows zeros; the client takes over after hydration.
  const s = useSyncExternalStore(subscribe, secondsLeft, () => 0);
  const fields = [
    { label: t('days'), value: pad(s / 86400, 3) },
    { label: t('hours'), value: pad((s / 3600) % 24) },
    { label: t('minutes'), value: pad((s / 60) % 60) },
    { label: t('seconds'), value: pad(s % 60) },
  ];

  return (
    <section className="relative bg-ink border-t border-white/10 py-20 overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={GRID_BG} />

      <Container className="relative">
        <div className="mb-12">
          <Reveal>
            <Eyebrow className="mb-4" tone="text-white/60">{t('eyebrow')}</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">{t('heading')}</h2>
          </Reveal>
          <Reveal y={0} delay={0.2}>
            <p className="font-mono text-xs text-white/60 mt-2 tracking-wider">{t('subtitle')}</p>
          </Reveal>
        </div>

        <Reveal delay={0.15} y={20} className="relative inline-block p-4 sm:p-8">
          <CornerBracket corner="top-0 left-0 border-t border-l" />
          <CornerBracket corner="top-0 right-0 border-t border-r" />
          <CornerBracket corner="bottom-0 left-0 border-b border-l" />
          <CornerBracket corner="bottom-0 right-0 border-b border-r" />

          <div className="flex flex-wrap items-end gap-y-4">
            <span className="font-mono text-white/60 text-sm mb-2 mr-3">T–</span>
            {fields.map((field, i) => (
              <div
                key={field.label}
                className={`flex flex-col items-start ${i < fields.length - 1 ? 'pr-3 mr-3 sm:pr-6 sm:mr-6 border-r border-white/10' : ''}`}
              >
                <span className="font-mono font-bold tabular-nums leading-none text-white text-[clamp(2.5rem,7vw,6.5rem)]">
                  {field.value}
                </span>
                <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/60 mt-1">{field.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal y={0} delay={0.3} className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-8 items-center">
          <Meta label={t('targetDateLabel')} labelClass="mb-1" labelTone="text-white/60" valueClass="text-sm text-white/60">
            {formatDate(TARGET_DATE, locale, 'long', TARGET.timeZone)}
          </Meta>
          <Meta label={t('venueLabel')} labelClass="mb-1" labelTone="text-white/60" valueClass="text-sm text-white/60">
            {t('venue')}
          </Meta>
          <Meta label={t('statusLabel')} labelClass="mb-1" labelTone="text-white/60" valueClass="text-sm text-mars-red-light flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-mars-red animate-pulse inline-block" />
            {t('status')}
          </Meta>
        </Reveal>
      </Container>
    </section>
  );
}
