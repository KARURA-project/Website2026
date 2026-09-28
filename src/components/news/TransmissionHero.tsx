import Image from 'next/image';
import { useLocale, useMessages, useTranslations } from 'next-intl';
import { Container, Eyebrow, Meta, formatDate } from '@/components/ui';
import type { Transmission } from '@/data/transmissions';

export default function TransmissionHero({ item }: { item: Transmission }) {
  const t = useTranslations('news');
  const locale = useLocale();
  const text = useMessages().news.articles[item.id];

  return (
    <section className="pt-32 pb-16 bg-canvas">
      <Container>
        <div className="grid lg:grid-cols-[1fr_420px] border border-ink/8">
          <div className="p-10 lg:p-14 flex flex-col justify-between min-h-[420px]">
            <div>
              <Eyebrow className="mb-6">{t('hero.eyebrow')}</Eyebrow>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-ink mb-8">
                {text.title}
              </h1>
              <p className="max-w-[720px] text-ink/65 text-sm md:text-base leading-relaxed">{text.description}</p>
            </div>

            <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-ink/8">
              <Meta label={t('published')} labelClass="mb-2" valueClass="text-xs text-ink/70">
                {formatDate(item.date, locale)}
              </Meta>
              <Meta label={t('meta.readTimeLabel')} labelClass="mb-2" valueClass="text-xs text-ink/70">
                {t('readTimeValue', { minutes: item.readMinutes })}
              </Meta>
              {item.campaign && (
                <Meta label={t('campaignLabel')} labelClass="mb-2" valueClass="text-xs text-ink/70">{item.campaign}</Meta>
              )}
            </div>
          </div>

          <div className="relative border-l border-ink/8 min-h-[420px]">
            <Image src={item.imageUrl} alt={text.imageAlt} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 420px" />
          </div>
        </div>
      </Container>
    </section>
  );
}
