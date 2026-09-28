'use client';

// Featured card + archive row, shared by /news and the home page's news section.

import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useMessages, useTranslations } from 'next-intl';
import { Meta, Reveal, formatDate } from '@/components/ui';
import type { Transmission } from '@/data/transmissions';

function Tags({ tags }: { tags: Record<string, string> }) {
  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(tags).map(([key, tag]) => (
        <span key={key} className="px-3 py-1.5 border border-ink/10 font-mono text-[10px] tracking-[0.15em] uppercase">
          {tag}
        </span>
      ))}
    </div>
  );
}

export function FeaturedTransmission({ item, badge }: { item: Transmission; badge?: string }) {
  const t = useTranslations('news');
  const locale = useLocale();
  const text = useMessages().news.articles[item.id];
  const href = `/news/${item.id}`;

  return (
    <Reveal y={24} className="grid lg:grid-cols-[1.4fr_0.9fr] border border-ink/10 items-stretch">
      <Link href={href} className="relative min-h-[400px] lg:min-h-[520px] overflow-hidden group">
        <Image src={item.imageUrl} alt={text.imageAlt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
        {badge && (
          <span className="absolute top-6 left-6 font-mono text-[9px] tracking-[0.2em] uppercase bg-ink/80 text-white/80 px-3 py-1.5 backdrop-blur-sm">
            {badge}
          </span>
        )}
      </Link>

      <div className="border-t lg:border-t-0 lg:border-l border-ink/10 p-8 lg:p-10 flex flex-col h-full">
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-10">
          <Meta label={t('meta.dateLabel')}>{formatDate(item.date, locale, 'short')}</Meta>
          <Meta label={t('meta.categoryLabel')}>{t(`categories.${item.category}`)}</Meta>
          <Meta label={t('meta.readTimeLabel')}>{t('readTimeValue', { minutes: item.readMinutes })}</Meta>
          <Meta label={t('meta.statusLabel')}>{t('meta.statusValue')}</Meta>
        </div>

        <h3 className="font-display text-3xl font-bold leading-tight mb-6">{text.title}</h3>
        <p className="text-sm leading-relaxed text-ink/60">{text.description}</p>

        <div className="mt-auto pt-10">
          <div className="mb-8">
            <Tags tags={text.tags} />
          </div>
          <Link
            href={href}
            className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase text-ink hover:text-mars-red transition-colors group"
          >
            <span className="w-6 h-px bg-current transition-all group-hover:w-10" />
            {t('readArticle')}
          </Link>
        </div>
      </div>
    </Reveal>
  );
}

export function TransmissionRow({ item, index }: { item: Transmission; index: number }) {
  const t = useTranslations('news');
  const locale = useLocale();
  const text = useMessages().news.articles[item.id];

  return (
    <Reveal y={24} delay={index * 0.06}>
      <Link href={`/news/${item.id}`} className="group block py-10">
        <div className="grid md:grid-cols-[140px_120px_1fr_auto] gap-6 items-start">
          <Meta label={t('meta.dateLabel')} labelClass="mb-2">{formatDate(item.date, locale, 'short')}</Meta>
          <Meta label={t('typeLabel')} labelClass="mb-2">{t(`categories.${item.category}`)}</Meta>

          <div>
            <h3 className="font-display text-xl font-bold leading-snug mb-3 group-hover:text-mars-red transition-colors">
              {text.title}
            </h3>
            <p className="text-sm leading-relaxed text-ink/60 mb-5">{text.description}</p>
            <Tags tags={text.tags} />
          </div>

          <div className="pt-1 inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.18em] uppercase text-ink group-hover:text-mars-red transition-colors">
            <span className="w-5 h-px bg-current transition-all duration-200 group-hover:w-8" />
            {t('open')}
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
