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
    <section className="bg-canvas border-t border-ink/8 py-20">
      <Container>
        <div className="mb-12">
          <Reveal>
            <Eyebrow className="mb-4">{t('eyebrow')}</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">{t('heading')}</h2>
          </Reveal>
          <Reveal y={0} delay={0.2}>
            <p className="font-mono text-xs text-ink/60 mt-2 tracking-wider">{t('subtitle')}</p>
          </Reveal>
        </div>

        <Reveal delay={0.15} y={20} className="flex flex-wrap items-end">
          {fields.map((field, i) => (
            <div
              key={field.label}
              className={`flex flex-col items-start ${i < fields.length - 1 ? 'pr-6 mr-6 border-r border-ink/10' : ''}`}
            >
              <span className="font-mono font-bold tabular-nums leading-none text-ink text-[clamp(3rem,7vw,6.5rem)]">
                {field.value}
              </span>
              <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-ink/60 mt-1">{field.label}</span>
            </div>
          ))}
        </Reveal>

        <Reveal y={0} delay={0.3} className="mt-10 pt-8 border-t border-ink/8 flex flex-wrap gap-8 items-center">
          <Meta label={t('targetDateLabel')} labelClass="mb-1" valueClass="text-sm text-ink/60">
            {formatDate(TARGET_DATE, locale, 'long', TARGET.timeZone)}
          </Meta>
          <Meta label={t('venueLabel')} labelClass="mb-1" valueClass="text-sm text-ink/60">
            {t('venue')}
          </Meta>
          <Meta label={t('statusLabel')} labelClass="mb-1" valueClass="text-sm text-mars-red flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-mars-red animate-pulse inline-block" />
            {t('status')}
          </Meta>
        </Reveal>
      </Container>
    </section>
  );
}
