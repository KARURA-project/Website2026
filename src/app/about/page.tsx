import { useMessages, useTranslations } from 'next-intl';
import Link from 'next/link';
import { Container, Eyebrow, Reveal, SplitHero, indexLabel } from '@/components/ui';
import { ROVER_IMAGE_URL } from '@/data/assets';
import { departments } from '@/data/departments';
import { orgStats, statValue } from '@/data/stats';

// University names stay in their official English form in both languages.

const universities: { name: string; city: string; country: 'US' | 'JP' }[] = [
  // US first
  { name: 'Texas A&M University', city: 'College Station, TX', country: 'US' },
  { name: 'University of Texas at Austin', city: 'Austin, TX', country: 'US' },
  { name: 'Georgia Institute of Technology', city: 'Atlanta, GA', country: 'US' },
  { name: 'Mount Holyoke College', city: 'South Hadley, MA', country: 'US' },
  // Japan
  { name: 'University of Tokyo', city: 'Tokyo', country: 'JP' },
  { name: 'Waseda University', city: 'Tokyo', country: 'JP' },
  { name: 'Tohoku University', city: 'Sendai', country: 'JP' },
  { name: 'Hiroshima University', city: 'Hiroshima', country: 'JP' },
  { name: 'Tokyo University of Science', city: 'Tokyo', country: 'JP' },
  { name: 'Osaka University', city: 'Osaka', country: 'JP' },
  { name: 'Kyoto University', city: 'Kyoto', country: 'JP' },
  { name: 'Keio University', city: 'Tokyo', country: 'JP' },
  { name: 'Nagoya University', city: 'Nagoya', country: 'JP' },
  { name: 'Kyushu University', city: 'Fukuoka', country: 'JP' },
  { name: 'Ritsumeikan University', city: 'Kyoto', country: 'JP' },
  { name: 'Hosei University', city: 'Tokyo', country: 'JP' },
  { name: 'Tokyo Metropolitan University', city: 'Tokyo', country: 'JP' },
  { name: 'Shinshu University', city: 'Nagano', country: 'JP' },
  { name: 'Okayama University', city: 'Okayama', country: 'JP' },
  { name: 'Nihon University', city: 'Tokyo', country: 'JP' },
  { name: 'Shibaura Institute of Technology', city: 'Tokyo', country: 'JP' },
  { name: 'Chuo University', city: 'Tokyo', country: 'JP' },
  { name: 'Takushoku University', city: 'Tokyo', country: 'JP' },
  { name: 'Kokugakuin University', city: 'Tokyo', country: 'JP' },
  { name: 'Juntendo University', city: 'Tokyo', country: 'JP' },
  { name: 'Musashino Art University', city: 'Tokyo', country: 'JP' },
  { name: 'University of Nagano', city: 'Nagano', country: 'JP' },
  { name: 'Tokyo University of Agriculture and Technology', city: 'Tokyo', country: 'JP' },
  { name: 'Nat. Inst. of Technology (KOSEN), Toyama College', city: 'Toyama', country: 'JP' },
  // Secondary / high school
  { name: 'Aomori Kenoh-hoshi High School', city: 'Aomori', country: 'JP' },
  { name: 'Yokohama Science Frontier High School', city: 'Yokohama', country: 'JP' },
  { name: 'Metropolitan Musashi High School', city: 'Tokyo', country: 'JP' },
];

const countryCount = (country: 'US' | 'JP') => universities.filter((u) => u.country === country).length;

export default function AboutPage() {
  const t = useTranslations('about');
  const tStats = useTranslations('stats');
  const messages = useMessages();

  const differentiators = ([1, 2, 3] as const).map((n) => ({
    title: t(`differentiatorsItem${n}Title`),
    body: t(`differentiatorsItem${n}Body`),
  }));

  const institutionCounts = [
    { label: t('japan'), value: countryCount('JP') },
    { label: t('unitedStates'), value: countryCount('US') },
  ];

  return (
    <>
      <SplitHero className="min-h-[72vh] lg:grid-cols-[1fr_60%]" image={ROVER_IMAGE_URL} alt={t('heroImageAlt')} imageClass="opacity-90">
        <Reveal onMount y={24} duration={0.6}>
          <Eyebrow className="mb-6">{t('eyebrow')}</Eyebrow>
        </Reveal>
        <Reveal onMount y={28} duration={0.7} delay={0.08}>
          <h1 className="font-display text-[clamp(2.8rem,5.5vw,5rem)] font-bold leading-[0.95] tracking-tight text-ink mb-6">
            {t('heroTitleLine1')}<br />
            {t('heroTitleLine2')}<br />
            {t('heroTitleLine3')}
          </h1>
        </Reveal>
        <Reveal onMount duration={0.6} delay={0.18}>
          <p className="text-ink/50 text-base leading-relaxed max-w-[460px]">
            {t('heroDescription', { count: statValue('universities') })}
          </p>
        </Reveal>
      </SplitHero>

      {/* Stats bar */}
      <div className="border-y border-ink/8 bg-canvas">
        <Container className="grid grid-cols-2 md:grid-cols-4 divide-x divide-ink/8">
          {orgStats
            .filter((s) => s.key !== 'departments')
            .map((s, i) => (
              <Reveal key={s.key} y={12} delay={i * 0.07} className="px-8 py-8">
                <div className="font-mono text-[clamp(2rem,4vw,3rem)] font-bold text-ink leading-none mb-1">{s.value}</div>
                <div className="font-display text-sm font-semibold text-ink/70 mb-0.5">{tStats(`${s.key}.label`)}</div>
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink/30">{tStats(`${s.key}.sub`)}</div>
              </Reveal>
            ))}
        </Container>
      </div>

      {/* Mission */}
      <section className="py-24 lg:py-32">
        <Container className="grid lg:grid-cols-[280px_1fr] gap-16 lg:gap-24">
          <div className="lg:pt-2">
            <Eyebrow>{t('mission')}</Eyebrow>
            <h2 className="font-display text-2xl font-bold text-ink leading-tight">
              {t('missionTitleLine1')}<br />{t('missionTitleLine2')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="font-display text-[1.15rem] font-semibold text-ink leading-snug mb-4">{t('missionLead')}</p>
              <p className="text-ink/55 text-sm leading-relaxed">{t('missionBody')}</p>
            </div>
            <div>
              <p className="text-ink/55 text-sm leading-relaxed mb-5">{t('missionBody2')}</p>
              <p className="text-ink/55 text-sm leading-relaxed">{t('missionBody3')}</p>
              <div className="mt-8 pt-6 border-t border-ink/8">
                <Link
                  href="/rover"
                  className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase text-ink/60 hover:text-ink transition-colors group"
                >
                  <span className="w-5 h-px bg-current transition-all group-hover:w-8" />
                  {t('viewRoverSpecs')}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What sets us apart */}
      <section className="py-16 border-t border-ink/8 bg-ink">
        <Container className="grid lg:grid-cols-[280px_1fr] gap-16 lg:gap-24">
          <div className="lg:pt-2">
            <Eyebrow tone="text-white/30">{t('differentiators')}</Eyebrow>
            <h2 className="font-display text-2xl font-bold text-white leading-tight">
              {t('differentiatorsTitleLine1')}<br />{t('differentiatorsTitleLine2')}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/8">
            {differentiators.map((item, i) => (
              <div key={i} className="px-0 sm:px-8 py-8 first:pl-0 last:pr-0">
                <div className="font-mono text-[10px] tracking-[0.2em] text-white/20 mb-4">{indexLabel(i)}</div>
                <h3 className="font-display text-base font-bold text-white mb-3 leading-snug">{item.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Academic network */}
      <section className="py-24 lg:py-32 border-t border-ink/8">
        <Container className="grid lg:grid-cols-[280px_1fr] gap-16 lg:gap-24">
          <div>
            <Eyebrow>{t('academicNetwork')}</Eyebrow>
            <h2 className="font-display text-2xl font-bold text-ink leading-tight mb-6">{t('institutions')}</h2>
            <p className="text-ink/45 text-xs leading-relaxed mb-8 max-w-[220px]">{t('networkDescription')}</p>
            <div className="space-y-3">
              {institutionCounts.map((c) => (
                <div key={c.label} className="flex items-center justify-between border-b border-ink/8 pb-3">
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink/40">{c.label}</span>
                  <span className="font-mono text-sm font-bold text-ink">{c.value}</span>
                </div>
              ))}
              <div className="flex items-center justify-between pt-1">
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink/40">{t('total')}</span>
                <span className="font-mono text-sm font-bold text-mars-red">{universities.length}</span>
              </div>
            </div>
          </div>

          {/* Single flat grid, Texas A&M first */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-ink/8">
            {universities.map((u, i) => (
              <Reveal
                key={u.name}
                y={0}
                delay={i * 0.02}
                className="bg-canvas px-4 py-4 group hover:bg-ink transition-colors duration-200"
              >
                <div className="font-mono text-[8px] tracking-[0.18em] uppercase text-ink/25 group-hover:text-white/25 mb-1.5 transition-colors">
                  {u.city}
                </div>
                <div className="font-display text-xs font-semibold text-ink group-hover:text-white leading-snug transition-colors">
                  {u.name}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Program timeline */}
      <section className="py-24 border-t border-ink/8 bg-canvas">
        <Container className="grid lg:grid-cols-[280px_1fr] gap-16 lg:gap-24">
          <div className="lg:pt-2">
            <Eyebrow>{t('schedule')}</Eyebrow>
            <h2 className="font-display text-2xl font-bold text-ink leading-tight">
              {t('programTimelineLine1')}<br />{t('programTimelineLine2')}
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-ink/8 hidden md:block" />
            <div className="md:pl-10">
              {Object.entries(messages.timeline).map(([key, gen], i) => (
                <Reveal
                  key={key}
                  x={16}
                  y={0}
                  delay={i * 0.1}
                  duration={0.5}
                  className="relative grid sm:grid-cols-[120px_1fr] gap-6 border-b border-ink/8 py-8 last:border-b-0"
                >
                  <div className="absolute left-0 top-9 w-2 h-2 bg-ink/20 -translate-x-[calc(50%+0.5px)] hidden md:block" />
                  <div>
                    <div className="font-mono text-[clamp(1.4rem,3vw,2rem)] font-bold text-ink leading-none">{gen.phase}</div>
                    <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink/30 mt-1">{gen.season}</div>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink mb-2">{gen.title}</h3>
                    <p className="text-ink/50 text-sm leading-relaxed">{gen.note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Departments — section ids are anchor targets */}
      <section className="py-24 border-t border-ink/8">
        <Container>
          <div className="mb-14">
            <Eyebrow>{t('engineering')}</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">{t('departments')}</h2>
          </div>

          <div className="divide-y divide-ink/8 border-t border-b border-ink/8">
            {departments.map((dept, i) => (
              <Reveal
                key={dept.id}
                id={dept.id}
                delay={i * 0.07}
                className="grid md:grid-cols-[80px_200px_1fr_100px] gap-6 lg:gap-10 items-start py-8 scroll-mt-24"
              >
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink/25 pt-1">{indexLabel(i)}</div>
                <div>
                  <h3 className="font-display text-base font-bold text-ink mb-1">{messages.departments[dept.id].title}</h3>
                  <p className="font-mono text-[9px] tracking-[0.1em] text-ink/35 leading-relaxed">{messages.departments[dept.id].scope}</p>
                </div>
                <p className="text-ink/50 text-sm leading-relaxed">{messages.departments[dept.id].body}</p>
                <div className="text-right">
                  <div className="font-mono text-xl font-bold text-ink">{dept.members}</div>
                  <div className="font-mono text-[8px] tracking-[0.15em] uppercase text-ink/25">{t('members')}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {departments.map((dept) => (
              <Link
                key={dept.id}
                href={`#${dept.id}`}
                className="font-mono text-[9px] tracking-[0.15em] uppercase px-4 py-2 border border-ink/12 text-ink/40 hover:border-ink/30 hover:text-ink transition-colors duration-200"
              >
                {messages.departments[dept.id].title}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
