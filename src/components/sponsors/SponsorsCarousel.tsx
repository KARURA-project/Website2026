import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowIcon, Container, Eyebrow } from '@/components/ui';

interface Sponsor {
  name: string;
  logo: string;
}

export default function SponsorsCarousel({ sponsors }: { sponsors: Sponsor[] }) {
  const t = useTranslations('home.sponsors');
  // Triple the list so the seamless loop works at any viewport width
  const track = [...sponsors, ...sponsors, ...sponsors];

  return (
    <section className="py-24 bg-canvas border-t border-ink/8">
      <Container className="mb-14 flex items-end justify-between gap-6">
        <div>
          <Eyebrow className="mb-4">{t('eyebrow')}</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">{t('heading')}</h2>
        </div>
        <Link
          href="/support"
          className="font-mono text-xs tracking-[0.15em] uppercase text-ink/60 hover:text-ink transition-colors flex items-center gap-2 pb-1"
        >
          {t('cta')}
          <ArrowIcon className="w-3.5 h-3.5" />
        </Link>
      </Container>

      {/* Pure-CSS marquee */}
      <div className="overflow-hidden motion-reduce:overflow-x-auto border-y border-ink/8">
        <div className="flex w-max animate-marquee">
          {track.map((sponsor, index) => (
            <div
              key={`${sponsor.name}-${index}`}
              className="flex-shrink-0 w-48 h-20 border-r border-ink/8 flex items-center justify-center px-8"
            >
              <div className="relative w-full h-10">
                <Image src={sponsor.logo} alt={sponsor.name} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
