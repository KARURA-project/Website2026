import { useMessages, useTranslations } from 'next-intl';
import { Container, Eyebrow, RailList, Reveal, SplitHero, indexLabel } from '@/components/ui';
import { departments, type Department } from '@/data/departments';

const APPLICATION_FORM_URL = 'https://docs.google.com/forms/d/1MJhQgfIRbGO-Up2x9Sr15ocGia40k2A-0Nlz3ijXtl8/edit';

// /join lists Software first; other pages use the default department order.
const JOIN_ORDER = ['software', 'hardware', 'electrical', 'science', 'business'] as const satisfies readonly Department['id'][];
// Sort rather than look up, so a department missing from JOIN_ORDER still shows (at the end) instead of vanishing.
const joinDepartments = [...departments].sort(
  (a, b) => (JOIN_ORDER.indexOf(a.id) + 1 || 99) - (JOIN_ORDER.indexOf(b.id) + 1 || 99),
);

export default function JoinPage() {
  const t = useTranslations('join');
  const messages = useMessages();
  const pipeline = Object.values(messages.join.pipeline.steps);

  const portalRows = [
    { label: t('portal.campaignLabel'), value: t('portal.campaignValue') },
    { label: t('portal.nodesLabel'), value: t('portal.nodesValue') },
    { label: t('portal.positionsLabel'), value: t('portal.positionsValue') },
    { label: t('portal.deploymentLabel'), value: t('portal.deploymentValue') },
  ];

  return (
    <>
      <SplitHero className="min-h-[72vh] lg:grid-cols-[1fr_60%] border-b border-ink/8" image="/Images/Copy of IMG_9569.webp" alt={t('hero.imageAlt')} imageClass="opacity-90">
        <Reveal onMount y={24} duration={0.6}>
          <Eyebrow className="mb-6">{t('hero.eyebrow')}</Eyebrow>
        </Reveal>
        <Reveal onMount y={28} duration={0.7} delay={0.08}>
          <h1 className="font-display text-[clamp(2.8rem,5.5vw,5rem)] font-bold leading-[0.95] tracking-tight text-ink mb-6">
            {t('hero.titleLine1')}<br />
            {t('hero.titleLine2')}<br />
            {t('hero.titleLine3')}
          </h1>
        </Reveal>
        <Reveal onMount duration={0.6} delay={0.18}>
          <p className="text-ink/60 text-base leading-relaxed max-w-[460px]">{t('hero.description')}</p>
        </Reveal>
      </SplitHero>

      <section>
        <Container className="grid lg:grid-cols-[1.4fr_0.9fr] gap-16 py-24">
          {/* Open positions */}
          <div>
            <Eyebrow className="mb-5">{t('positions.eyebrow')}</Eyebrow>
            <h2 className="font-display text-3xl font-bold mb-10">{t('positions.heading')}</h2>

            <div className="divide-y divide-ink/10 border-y border-ink/10">
              {joinDepartments.map((dept, i) => (
                <div key={dept.id} className="grid md:grid-cols-[80px_1fr_150px] gap-8 py-8">
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink/60">{indexLabel(i)}</div>
                  <div>
                    <h3 className="font-display text-lg font-bold uppercase mb-4">{messages.departments[dept.id].name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {Object.values(messages.departments[dept.id].skills).map((skill) => (
                        <span key={skill} className="px-3 py-2 border border-ink/10 font-mono text-[10px] tracking-[0.15em] uppercase">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink/60">{t('positions.openingsLabel')}</div>
                    <div className="font-mono text-xl font-bold">{String(dept.openings).padStart(2, '0')}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-16">
            {/* Sticky application card */}
            <div className="lg:sticky lg:top-28 border border-ink/10 p-8">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink/60 mb-4">{t('portal.eyebrow')}</div>
              <h2 className="font-display text-3xl font-bold leading-tight mb-6">{t('portal.heading')}</h2>
              <p className="text-sm leading-relaxed text-ink/60 mb-8">{t('portal.description')}</p>

              <div className="space-y-5 border-y border-ink/10 py-6">
                {portalRows.map((row) => (
                  <div key={row.label} className="flex justify-between items-center">
                    <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink/60">{row.label}</span>
                    <span className="font-mono text-xs">{row.value}</span>
                  </div>
                ))}
              </div>

              <a
                href={APPLICATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block w-full bg-mars-red text-white text-center px-6 py-4 font-display font-semibold tracking-wide transition-transform duration-200 hover:-translate-y-0.5"
              >
                {t('portal.submitButton')}
              </a>
            </div>

            {/* Recruitment pipeline */}
            <section>
              <Eyebrow className="mb-5">{t('pipeline.eyebrow')}</Eyebrow>
              <h2 className="font-display text-3xl font-bold mb-10">{t('pipeline.heading')}</h2>
              <RailList items={pipeline.map((step, i) => ({ marker: indexLabel(i), ...step }))} />
            </section>
          </aside>
        </Container>
      </section>
    </>
  );
}
