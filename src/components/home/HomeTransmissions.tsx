'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowIcon, Container, Eyebrow, Reveal } from '@/components/ui';
import { FeaturedTransmission, TransmissionRow } from '@/components/news/TransmissionCards';
import type { Transmission } from '@/data/transmissions';

export default function HomeTransmissions({ transmissions }: { transmissions: Transmission[] }) {
  const t = useTranslations('home.news');
  const [featured, ...rest] = transmissions;
  if (!featured) return null;

  return (
    <section className="bg-canvas border-t border-ink/8 py-24">
      <Container>
        <div className="mb-14 flex items-end justify-between gap-6 flex-wrap">
          <div>
            <Reveal y={12}>
              <Eyebrow className="mb-4" rule="bg-ink">{t('eyebrow')}</Eyebrow>
            </Reveal>
            <Reveal y={12} delay={0.06}>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight">
                {t('headingLine1')}<br className="hidden md:block" /> {t('headingLine2')}
              </h2>
            </Reveal>
          </div>
          <Link
            href="/news"
            className="font-mono text-xs tracking-[0.15em] uppercase text-ink/45 hover:text-ink transition-colors flex items-center gap-2 pb-1"
          >
            {t('fullArchive')}
            <ArrowIcon className="w-3.5 h-3.5" />
          </Link>
        </div>

        <FeaturedTransmission item={featured} badge={t('latestBadge')} />

        {rest.length > 0 && (
          <div className="border-x border-b border-ink/10 divide-y divide-ink/10 px-8 lg:px-10">
            {rest.slice(0, 3).map((item, i) => (
              <TransmissionRow key={item.id} item={item} index={i} />
            ))}
            <div className="py-6 flex items-center justify-between">
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink/25">
                {t('archiveCount', { count: transmissions.length })}
              </span>
              <Link
                href="/news"
                className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] uppercase text-ink/40 hover:text-ink transition-colors"
              >
                {t('viewArchive')}
                <ArrowIcon className="w-3 h-3" />
              </Link>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
