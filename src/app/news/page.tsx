'use client';

import { useState } from 'react';
import { useMessages, useTranslations } from 'next-intl';
import { Container, Eyebrow, RailList, Reveal } from '@/components/ui';
import { FeaturedTransmission, TransmissionRow } from '@/components/news/TransmissionCards';
import { transmissions, type Transmission } from '@/data/transmissions';

const categories: ('All' | Transmission['category'])[] = ['All', 'Achievement', 'Competition', 'Update', 'Team', 'Sponsor'];

export default function NewsPage() {
  const t = useTranslations('news');
  // Timeline keys are 'y2026' etc.; the box shows the last two digits.
  const timeline = Object.entries(useMessages().news.timeline.items).map(([key, item]) => ({
    marker: key.slice(-2),
    ...item,
  }));
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All');

  const filtered = activeCategory === 'All' ? transmissions : transmissions.filter((n) => n.category === activeCategory);
  const [featured, ...rest] = filtered;

  return (
    <>
      <section className="pt-36 pb-20 border-b border-ink/8">
        <Container>
          <Reveal onMount y={24}>
            <Eyebrow className="mb-6" rule="bg-ink">{t('hero.eyebrow')}</Eyebrow>
          </Reveal>
          <Reveal onMount y={28} delay={0.08}>
            <h1 className="font-display text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.92] tracking-tight text-ink">
              {t('hero.titleLine1')}
              <br />
              {t('hero.titleLine2')}
            </h1>
          </Reveal>
          <Reveal onMount y={18} delay={0.16}>
            <h2 className="font-display text-3xl font-bold mb-6 mt-8">{t('hero.subtitle')}</h2>
            <p className="max-w-[520px] mt-4 text-sm leading-relaxed text-ink/60">{t('hero.description')}</p>
          </Reveal>
        </Container>
      </section>

      {/* Category filter */}
      <section className="sticky top-16 z-20 bg-canvas/95 backdrop-blur-md border-b border-ink/8">
        <Container className="py-6 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-3 border font-mono text-[10px] tracking-[0.18em] uppercase transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-ink text-white border-ink'
                  : 'border-ink/10 text-ink/60 hover:border-ink hover:text-ink'
              }`}
            >
              {t(`categories.${cat}`)}
            </button>
          ))}
        </Container>
      </section>

      {featured && (
        <section className="py-24">
          <Container>
            <Eyebrow className="mb-5" rule="bg-ink">{t('featured.eyebrow')}</Eyebrow>
            <h2 className="font-display text-3xl font-bold mb-10">{t('featured.heading')}</h2>
            <FeaturedTransmission item={featured} />
          </Container>
        </section>
      )}

      <section className="pb-24">
        <Container className="grid lg:grid-cols-[1.4fr_0.6fr] gap-20">
          <div>
            <Eyebrow className="mb-5" rule="bg-ink">{t('archive.eyebrow')}</Eyebrow>
            <h2 className="font-display text-3xl font-bold mb-10">{t('archive.heading')}</h2>
            <div className="border-y border-ink/10 divide-y divide-ink/10">
              {rest.map((item, i) => (
                <TransmissionRow key={item.id} item={item} index={i} />
              ))}
            </div>
          </div>

          <aside>
            <div className="lg:sticky lg:top-28">
              <Eyebrow className="mb-5" rule="bg-ink">{t('timeline.eyebrow')}</Eyebrow>
              <h2 className="font-display text-3xl font-bold mb-10">{t('timeline.heading')}</h2>
              <RailList items={timeline} />
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
