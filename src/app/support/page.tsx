import { useMessages, useTranslations } from 'next-intl';
import Image from 'next/image';
import { Container, Eyebrow, Reveal, SplitHero, indexLabel } from '@/components/ui';

const CONTACT_EMAIL = 'Karura.urc.us@gmail.com';

const currentSponsors = [
  {
    id: '1',
    name: 'OMAX corporation',
    logo: 'https://res.cloudinary.com/do43owox/image/upload/LOGO_OMAX_technology_RGB.jpg',
    url: 'https://www.omax.com/en/',           // ← replace with actual URL
  },
  {
    id: '2',
    name: 'FD AI Solutions',
    logo: 'https://res.cloudinary.com/do43owox/image/upload/f_auto/q_auto/fdaisolutions_logo.jpg',
    url: 'https://fdaisolutions.com/',
  },
    {
    id: '3',
    name: 'Send Cut Send',
    logo: 'https://res.cloudinary.com/do43owox/image/upload/f_auto/q_auto/images.jpg',
    url: 'https://sendcutsend.com/',        // ← replace with actual URL
  },
  {
    id: '4',
    name: 'Aegis Aerospace',
    logo: 'https://res.cloudinary.com/do43owox/image/upload/f_auto/q_auto/aegis_logo_web_aegis_logo_full_color_rgb_699px_300ppi.jpg',
    url: 'https://aegisaero.com/',
  },
  {
    id: '5',
    name: 'Gedore',
    logo: 'https://res.cloudinary.com/do43owox/image/upload/f_auto/q_auto/3dee5800ad8b306e101edfa2ba04a6d6.w1500.h1315.png',
    url: 'https://www.gedore.com/en-de/all-brands/',
  },
  {
    id: '6',
    name: 'Wonder Data Labs',
    logo: 'https://res.cloudinary.com/do43owox/image/upload/f_auto/q_auto/Site-INCIT-3.png',
    url: 'https://www.wonderdatalabs.com/',
  },
  {
    id: '7', 
    name: 'SOFAB tamu',
    logo: 'https://res.cloudinary.com/do43owox/image/upload/f_auto/q_auto/Screenshot_2026-11-03_164640.png',
    url: 'https://getinvolved.tamu.edu/org/sofab',
  },
  {
    id: '8',
    name: 'RedBull',
    logo: 'https://res.cloudinary.com/do43owox/image/upload/f_auto/q_auto/images.png',
    url: 'https://www.redbull.com/us-en/',
  },
  {
    id: '9',
    name: 'Halliburton Engineering Global Programs',
    logo: 'https://res.cloudinary.com/do43owox/image/upload/f_auto/q_auto/Screenshot_2026-11-03_164504.png',
    url: 'https://engineering.tamu.edu/academics/global/index.html',
  },
];

// Quote, role and result text: messages/*.json → support.testimonials.<key>
const testimonials = [
  { key: 'optosigma', company: 'OptoSigma' },
  { key: 'hiwin', company: 'Hiwin' },
  { key: 'kikusui', company: 'Kikusui' },
] as const;

export default function SupportPage() {
  const t = useTranslations('support');
  const messages = useMessages();

  const m = messages.support.metrics;
  const impactMetrics = [
    { value: m.hardwareFunded.value, label: m.hardwareFunded.label, sub: m.hardwareFunded.sub },
    { value: String(currentSponsors.length), label: m.activeSponsors.label, sub: m.activeSponsors.sub },
    { value: m.finalists.value, label: m.finalists.label, sub: m.finalists.sub },
    { value: m.nextCompetition.value, label: m.nextCompetition.label, sub: m.nextCompetition.sub },
  ];

  const scopeItems = (['hardware', 'materials', 'mentorship', 'branding', 'talent'] as const).map((k) => t(`contact.scopeItems.${k}`));
  const benefits = (['realWorld', 'pipeline', 'brand'] as const).map((k) => ({
    title: t(`benefits.${k}.title`),
    body: t(`benefits.${k}.body`),
  }));

  return (
    <div className="text-ink">
      <SplitHero
        className="min-h-[80vh] lg:grid-cols-[1fr_52%]"
        image="/Images/IMG_9088.webp"
        alt={t('hero.imageAlt')}
        imageBg="bg-mist"
        fade="w-24"
        badge={
          <>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/60">{t('hero.badge')}</span>
            <span className="font-mono text-[10px] text-mars-red tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-mars-red animate-pulse inline-block" />
              {t('hero.live')}
            </span>
          </>
        }
      >
        <Reveal onMount y={20} duration={0.5}>
          <Eyebrow className="mb-6">{t('hero.eyebrow')}</Eyebrow>
        </Reveal>
        <Reveal onMount y={28} duration={0.7} delay={0.08}>
          <h1 className="font-display text-[clamp(2.8rem,5.5vw,5rem)] font-bold leading-[0.93] tracking-tight text-ink mb-6">
            {t('hero.titleLine1')}<br />
            <span className="text-mars-red">{t('hero.titleAccent')}</span>
          </h1>
        </Reveal>
        <Reveal onMount duration={0.6} delay={0.2}>
          <p className="text-ink/60 text-base leading-relaxed max-w-[480px] mb-10">{t('hero.description')}</p>
        </Reveal>
        <Reveal onMount duration={0.6} delay={0.3} className="flex flex-wrap gap-8 border-t border-ink/10 pt-8">
          {impactMetrics.map((m) => (
            <div key={m.label}>
              <div className="font-mono text-2xl font-bold text-ink leading-none mb-1">{m.value}</div>
              <div className="font-display text-xs font-semibold text-ink/60 mb-0.5">{m.label}</div>
              <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-ink/60">{m.sub}</div>
            </div>
          ))}
        </Reveal>
      </SplitHero>

      {/* Direct contact */}
      <section className="border-y border-ink/8 bg-ink">
        <Container className="grid lg:grid-cols-[1fr_1fr] divide-y lg:divide-y-0 lg:divide-x divide-white/8">
          <div className="py-12 lg:pr-16">
            <Eyebrow className="mb-5" tone="text-white/60">{t('contact.directContact')}</Eyebrow>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-[440px]">{t('contact.reply')}</p>
            <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-white/60 mb-2">{t('contact.businessLeadLabel')}</div>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-display text-lg font-bold text-white hover:text-mars-red transition-colors duration-200"
            >
              {CONTACT_EMAIL}
            </a>
            <div className="font-mono text-[9px] text-white/60 mt-1">{t('contact.businessLeadValue')}</div>
          </div>

          <div className="py-12 lg:pl-16 flex flex-col justify-center">
            <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-white/60 mb-6">{t('contact.scopeLabel')}</div>
            <div className="space-y-3">
              {scopeItems.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-3 h-px bg-mars-red flex-shrink-0" />
                  <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-white/60">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Current sponsors — to add one, append to currentSponsors above */}
      <section className="border-b border-ink/8 py-24">
        <Container>
          <div className="max-w-[900px] mx-auto flex flex-col items-center text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="w-8 h-px bg-mars-red" />
              <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink/60">{t('sponsors.heading')}</span>
              <span className="w-8 h-px bg-mars-red" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink leading-tight mb-4">{t('sponsors.title')}</h2>
            <p className="text-ink/60 text-sm md:text-base leading-relaxed max-w-[420px] mx-auto">{t('sponsors.description')}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 pl-px pt-px">
            {currentSponsors.map((sponsor, i) => (
              <Reveal
                key={sponsor.id}
                y={0}
                delay={i * 0.04}
                className="group relative bg-white border border-ink/8 -ml-px -mt-px hover:bg-canvas hover:z-10 transition-colors duration-200"
              >
                <a
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={sponsor.name}
                  className="flex items-center justify-center px-10 py-12 min-h-[140px] md:min-h-[160px]"
                >
                  <div className="relative w-full h-16 md:h-20">
                    <Image src={sponsor.logo} alt={sponsor.name} fill className="object-contain transition-opacity duration-200 group-hover:opacity-80" />
                  </div>
                </a>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-mars-red scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why sponsor */}
      <section className="border-b border-ink/8 py-24">
        <Container>
          <div className="grid lg:grid-cols-[280px_1fr] gap-16 lg:gap-24 mb-16">
            <div>
              <Eyebrow tone="text-ink/60">{t('whySponsor.eyebrow')}</Eyebrow>
              <h2 className="font-display text-2xl font-bold text-ink leading-tight">
                {t('whySponsor.titleLine1')}<br />{t('whySponsor.titleLine2')}
              </h2>
            </div>
            <p className="text-ink/60 text-sm leading-relaxed self-end max-w-[580px]">{t('whySponsor.description')}</p>
          </div>

          <div className="grid md:grid-cols-3 border-t border-l border-ink/8">
            {benefits.map((item, i) => (
              <Reveal key={i} delay={i * 0.08} className="border-b border-r border-ink/8 p-8 lg:p-10">
                <div className="font-mono text-[8px] tracking-[0.2em] uppercase text-ink/60 mb-6">{indexLabel(i)}</div>
                <h3 className="font-display text-lg font-bold text-ink mb-4 leading-snug">{item.title}</h3>
                <p className="text-ink/60 text-sm leading-relaxed">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Sponsor testimonials */}
      <section className="border-b border-ink/8 py-24 bg-white">
        <Container>
          <Eyebrow className="mb-14" tone="text-ink/60">{t('impact.heading')}</Eyebrow>

          <div className="grid md:grid-cols-3 border-t border-l border-ink/8">
            {testimonials.map(({ key, company }, i) => {
              const quote = messages.support.testimonials[key];
              return (
                <Reveal key={key} delay={i * 0.1} className="border-b border-r border-ink/8 p-8 lg:p-10 flex flex-col">
                  <div className="font-mono text-5xl text-ink/8 leading-none mb-4 select-none">&ldquo;</div>
                  <p className="text-ink/70 text-sm leading-relaxed mb-8 flex-1 italic">{quote.quote}</p>
                  <div className="bg-canvas border border-ink/8 p-4 mb-6">
                    <div className="font-mono text-[8px] tracking-[0.18em] uppercase text-ink/60 mb-1">{t('fieldResult')}</div>
                    <p className="font-display text-xs font-semibold text-ink/70 leading-snug">{quote.result}</p>
                  </div>
                  <div>
                    <div className="font-display text-sm font-bold text-ink">{company}</div>
                    <div className="font-mono text-[9px] tracking-[0.12em] uppercase text-ink/60 mt-0.5">{quote.role}</div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}
