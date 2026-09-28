import { useMessages, useTranslations } from 'next-intl';
import Image from 'next/image';
import { Container, Eyebrow, Reveal, SplitHero, indexLabel } from '@/components/ui';

const CONTACT_EMAIL = 'Karura.urc.us@gmail.com';

const currentSponsors = [
  {
    id: '1',
    name: 'Sanso',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2400x740_v-frms_webp_47ab9e3a-894f-4fa5-ae7e-e04e6f6ff0a7_small.webp',
    url: 'https://www.sanso.co.jp',           // ← replace with actual URL
  },
  {
    id: '2',
    name: 'Kikusui',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-738x150_v-fs_webp_35ab6be7-00ff-45b5-b575-6589198d4233_small.webp',
    url: 'https://www.kikusui.co.jp',
  },
    {
    id: '3',
    name: 'Gutenberg',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1540x146_v-fms_webp_aa43e6b3-9a3b-4b50-8c88-5390ab14c413_small.webp',
    url: 'https://gutenberg.co.jp',        // ← replace with actual URL
  },
  {
    id: '4',
    name: 'Thor Labs',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-295x50_webp_be9895b1-b65e-402e-9bb0-240a65478fca.png',
    url: 'https://www.thorlabs.com/',
  },
  {
    id: '5',
    name: 'rd-stuff',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-258x58_webp_24894403-8386-407c-9d6d-ef5b9594dc47.jpg',
    url: 'https://www.rd-stuff.com/',
  },
  {
    id: '6',
    name: 'Yoshida',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-584x365_webp_52b3622e-bbc4-4f49-b4e4-50b5b1acb0f8.jpg',
    url: 'https://yoshidanet.com/',
  },
  {
    id: '7',
    name: 'Sunhayato',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1290x210_v-fms_webp_9decbc0e-4bd0-4a93-9aa0-71eaa5db8cfa.png',
    url: 'https://www.sunhayato.co.jp/',
  },
  {
    id: '8',
    name: 'Hiwin',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-738x150_v-fs_webp_a7752d8d-06eb-465b-bcac-89b642aeef58.png',
    url: 'https://www.hiwin.co.jp/',
  },
  {
    id: '9',
    name: 'Argo',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1602x500_v-fms_webp_37610fe1-46c9-438c-b91c-1004de53bc83.jpg',
    url: 'https://www.argocorp.com/',
  },
  {
    id: '10',
    name: 'Tenchijin',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1482x370_v-fms_webp_392f814c-2b0f-4bfa-9b98-a4c136832d54.png',
    url: 'https://tenchijin.co.jp/?hl=ja',             // ← replace with actual URL
  },
  {
    id: '11',
    name: 'Crecia',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2400x900_v-frms_webp_e4afed17-bd2a-46bb-bc4d-ac6e68d37be9.png',
    url: 'https://pro.crecia.co.jp/',      // ← replace with actual URL
  },
    {
    id: '12',
    name: 'Daico',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3200x1000_v-frms_webp_7fe4f299-a096-4575-ac41-7a20efddc9ca.jpg',
    url: 'https://www.daico.co.jp/',      // ← replace with actual URL
  },
    {
    id: '13',
    name: 'Igus',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2279x1182_v-frms_webp_6c74e893-da00-41e0-9e2f-bf2c784d07cf.jpg',
    url: 'https://www.igus.co.jp/',      // ← replace with actual URL
  },
    {
    id: '14',
    name: 'Spacegoods',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-800x209_v-fs_webp_5abd98f2-f13a-48f4-924d-29d9c0312265.jpg',
    url: 'https://spacegoods.net/',      // ← replace with actual URL
  },
    {
    id: '15',
    name: 'OptoSigma',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2048x512_v-frms_webp_553eb8dc-01cd-4074-80e0-ea1b8a0853f7.png',
    url: 'https://www.sigma-koki.com/',      // ← replace with actual URL
  },
    {
    id: '16',
    name: 'EMDgroup',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1632x306_v-fms_webp_f59ffa9a-87d1-4a09-82ab-a8135b4d55a4.png',
    url: 'https://www.emdgroup.com/en/',           // ← replace with actual URL
  },
  {
    id: '17',
    name: 'Ni',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-175x132_webp_da483921-1bf0-406f-b34b-fbf224087591.jpg',
    url: 'https://www.ni.com/en.html',
  },
    {
    id: '18',
    name: 'Aerodiode',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-841x595_v-fs_webp_d5e15445-4abb-487c-b0b9-b88e7d251d0c.png',
    url: 'https://www.aerodiode.com/',        // ← replace with actual URL
  },
  {
    id: '19',
    name: 'IDDK',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-850x850_v-fs_webp_e3e4575e-1057-4143-a29e-bde7a9ff5ea1.png',
    url: 'https://iddk.co.jp/app-def/S-102/iddk_wp/',
  },
  {
    id: '20',
    name: 'JA Pritech',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-610x97_v-fs_webp_a7dc40a6-bc2c-4fc2-a92b-03664e173b72.png',
    url: 'http://www.japritech.co.jp/',
  },
  {
    id: '21',
    name: 'Maimanelectronics',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1240x315_v-fms_webp_2e90833f-321b-422a-bd35-fdc71833dbe1.png',
    url: 'https://www.maimanelectronics.com/',
  },
  {
    id: '22',
    name: 'Makita',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-591x197_webp_4a09a182-0ac1-498b-b287-61b17fa44b41.jpg',
    url: 'https://www.makita.co.jp/',
  },
  {
    id: '23',
    name: 'Haneda Innovation City',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1188x568_v-fs_webp_9ed63bcb-6917-4760-9158-4461e22c4ae4.png',
    url: 'https://haneda-innovation-city.com/',
  },
  {
    id: '24',
    name: 'Terminal 0',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-900x900_v-fs_webp_f39876b7-01b8-4f2a-aa81-8bc0b983fc95.jpg',
    url: 'https://www.tokyo-airport-bldg.co.jp/terminal0/',
  },
  {
    id: '25',
    name: 'Hull Precision Instrument',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2400x1354_v-frms_webp_43068a6f-92c5-44d7-ba69-3453867f0c6b.png',
    url: 'https://hullprecisioninstrument.com/',             // ← replace with actual URL
  },
  {
    id: '26',
    name: 'Amulapo',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-666x140_v-fs_webp_c2904793-5b05-4517-8245-9c3657d440e2.png',
    url: 'https://www.amulapo-inc.com/',      // ← replace with actual URL
  },
    {
    id: '27',
    name: 'Hanpu',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-967x300_v-fs_webp_438232d1-0256-4f1f-8401-f83b5fafbea8.jpg',
    url: 'https://hanpu.jp/',      // ← replace with actual URL
  },
    {
    id: '28',
    name: 'Sinsyo',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2154x236_v-frms_webp_316f9c06-5ada-4498-8776-b0159edc490d.jpg',
    url: 'https://sinsyo-kk.co.jp/',      // ← replace with actual URL
  },
    {
    id: '29',
    name: 'Sugino',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2400x346_v-frms_webp_98a4e4ad-e8a8-4764-a861-b471d0281352.png',
    url: 'https://www.sugino.com/',      // ← replace with actual URL
  },
    {
    id: '30',
    name: 'Task-Inc',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2103x855_v-frms_webp_fe6d0445-7cce-4fc3-9d9d-96b9e683d51c.jpg',
    url: 'https://task-inc.tech/',      // ← replace with actual URL
  },
    {
    id: '31',
    name: 'Nikkan',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-850x108_v-fs_webp_0765e15f-61ca-47e4-b38f-8eb37689c551.png',
    url: 'https://corp.nikkan.co.jp/',           // ← replace with actual URL
  },
  {
    id: '32',
    name: 'Shinsu University',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-594x420_webp_13670535-e5d8-4813-9b82-346ff9d348f5.jpg',
    url: 'https://www.shinshu-u.ac.jp/',
  },
    {
    id: '33',
    name: 'Toyama College',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-334x61_webp_716ef7e6-a45a-4d90-a695-c99cd429b4e7.png',
    url: 'https://www.nc-toyama.ac.jp/',        // ← replace with actual URL
  },
  {
    id: '34',
    name: 'Wakasatokai Shinsu University Engineering Alumni',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2400x614_v-frms_webp_c860e2b5-c352-4469-a960-4785968e3e98.png',
    url: 'https://wakasatokai.jp/official/',
  },
  {
    id: '35',
    name: 'UchuBiz',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1500x279_v-fms_webp_de41bd6a-1dcc-4c1d-a96a-fb8c634fd8ab.png',
    url: 'https://uchubiz.com/',
  },
  {
    id: '36',
    name: 'Sorae',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1920x480_v-frms_webp_601e4f16-3eb2-442b-b8b4-2a64277b460c.png',
    url: 'https://sorae.info/',
  },
  {
    id: '37',
    name: '佐々木亮の宇宙ばなし',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2009x460_v-frms_webp_2f46553c-1401-4a5a-b120-312a267561b0.png',
    url: 'https://podcasts.apple.com/jp/podcast/%E4%BD%90%E3%80%85%E6%9C%A8%E4%BA%AE%E3%81%AE%E5%AE%87%E5%AE%99%E3%81%B0%E3%81%AA%E3%81%97/id1530818711',
  },
  {
    id: '38',
    name: 'Spacemedia',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2400x715_v-frms_webp_fa8c543d-fa10-4945-90fd-d741124f764d.png',
    url: 'https://spacemedia.jp/',
  },
  {
    id: '39',
    name: 'Space Development Forum',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1425x595_v-fms_webp_ac9fdcb5-0676-4897-a792-980a765faf30.png',
    url: 'https://www.sdfec.org/',
  },
  {
    id: '40',
    name: 'ASE-Lab',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1367x646_v-fms_webp_1fa915d6-1c48-4ed1-a601-4526eac61692.png',
    url: 'https://www.ase-lab.space/',             // ← replace with actual URL
  },
  {
    id: '41',
    name: 'Innovation City',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-256x256_webp_fda42e6f-6d4a-4682-a1c4-866a5028a965.jpg',
    url: 'https://innovationcity.jp',      // ← replace with actual URL
  },
  {
    id: '42',
    name: 'Lyncs',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1188x568_v-fs_webp_9ed63bcb-6917-4760-9158-4461e22c4ae4_small.webp',
    url: 'https://lyncs-keio.net/',      // ← replace with actual URL
  },
  {
    id: '43',
    name: 'TohokuSpaceElevato',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2400x1697_v-frms_webp_39fe14e6-8f7b-45ad-be8a-a4e7dc79fe0b.png',
    url: 'https://tohokuspaceelevato.wixsite.com/mysite',      // ← replace with actual URL
  },
  {
    id: '44',
    name: 'Lift',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1020x1008_v-fs_webp_12e15f05-1cce-4a0c-807d-fa3dfcccf844.png',
    url: 'https://x.com/lift_select',      // ← replace with actual URL
  },
  {
    id: '45',
    name: 'TelStar',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2118x772_v-frms_webp_08f97322-7734-40c9-81a3-5a18da2465b0.jpg',
    url: 'https://spacemgz-telstar.com/',      // ← replace with actual URL
  },
  {
    id: '46',
    name: 'FSIF',
    logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2048x2048_v-frms_webp_04afcf22-41a7-468c-8e61-966fa996210d.jpg',
    url: 'https://fsifofficial.wixsite.com/future-space-industr',      // ← replace with actual URL
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
