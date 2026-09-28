"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Container, Eyebrow, Reveal } from '@/components/ui';
import { orgStats, type Stat } from '@/data/stats';

// Home only shows three of the shared stats
const HOME_STATS: Stat['key'][] = ['activeMembers', 'departments', 'countries'];

export default function TeamIntroduction() {
  const t = useTranslations('home.team');
  const tStats = useTranslations('stats');
  const stats = orgStats.filter((s) => HOME_STATS.includes(s.key));

  return (
    <section className="py-24 lg:py-32 bg-canvas border-t border-ink/8">
      <Container>
        <div className="mb-12 lg:mb-16">
          <Reveal duration={0.5}>
            <Eyebrow className="mb-5">{t('eyebrow')}</Eyebrow>
          </Reveal>
          <Reveal duration={0.5} delay={0.08}>
            <h2 className="font-display text-[clamp(2.4rem,5vw,4rem)] font-bold text-ink leading-[0.98] tracking-tight max-w-[720px]">
              {t('heading')}
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12 lg:mb-14">
          <Reveal duration={0.5}>
            <p className="font-display text-[1.1rem] font-semibold text-ink leading-snug mb-4">{t('lead')}</p>
            <p className="text-ink/60 text-sm leading-relaxed">{t('body1')}</p>
          </Reveal>
          <Reveal duration={0.5} delay={0.08}>
            <p className="text-ink/60 text-sm leading-relaxed mb-5">{t('body2')}</p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase text-ink/60 hover:text-ink transition-colors group"
            >
              <span className="w-5 h-px bg-current transition-all group-hover:w-8" />
              {t('cta')}
            </Link>
          </Reveal>
        </div>

        {/* Large image with a narrow stats rail */}
        <Reveal duration={0.5} delay={0.12} className="grid lg:grid-cols-[1fr_260px] border border-ink/10">
          <div className="relative h-[420px] sm:h-[520px] lg:h-[640px] border-b lg:border-b-0 lg:border-r border-ink/10">
            <Image src="/Images/Copy of IMG_9586.webp" alt={t('imageAlt')} fill className="object-cover object-center" />
          </div>

          <div className="grid grid-cols-3 lg:grid-cols-1 divide-x lg:divide-x-0 lg:divide-y divide-ink/10">
            {stats.map((s) => (
              <div key={s.key} className="px-6 py-6 lg:py-8 flex flex-col justify-center">
                <div className="font-mono text-2xl lg:text-3xl font-bold text-ink leading-none mb-1">{s.value}</div>
                <div className="font-display text-xs font-semibold text-ink/60 mb-0.5">{tStats(`${s.key}.label`)}</div>
                <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-ink/60">{tStats(`${s.key}.sub`)}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
