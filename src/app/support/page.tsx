'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

// ─── Data ────────────────────────────────────────────────────────────────────

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

const testimonials = [
  {
    quote: 'OptoSigma provided the precision optical sensors that enabled our autonomous navigation stack at URC. Their engineering traveled to the desert with us.',
    company: 'OptoSigma',
    role: 'Optics / Navigation Sponsor',
    result: 'Stereo depth perception system enabling sub-5cm obstacle detection at 2 m/s traverse speed.',
  },
  {
    quote: 'Hiwin\'s linear actuators gave our robotic arm the positional accuracy we needed to pass the equipment servicing task at Finals. Off-the-shelf parts, competition-grade performance.',
    company: 'Hiwin',
    role: 'Motion Control Sponsor',
    result: 'Sub-millimeter joint repeatability across 5 DOF under field conditions in the Utah desert.',
  },
  {
    quote: 'Kikusui\'s power supply units powered the entire test bench for KARURA III\'s electrical validation. When we shipped to Hanksville, our power architecture was battle-tested.',
    company: 'Kikusui',
    role: 'Power Systems Sponsor',
    result: 'Zero electrical failures during the 4-day competition. Full power subsystem validation achieved pre-deployment.',
  },
];

const impactMetrics = [
  { value: '$180K+', label: 'Hardware Funded', sub: 'across all generations' },
  { value: '11', label: 'Active Sponsors', sub: '2026–27' },
  { value: '1st', label: 'International Finalists', sub: 'URC history' },
  { value: '2027', label: 'Next Competition', sub: 'Tottori, Japan' },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-[#FAFAFA] min-h-screen text-[#0A0A0A]">
      <Header />

      {/* ══════════════════════════════════════════
          HERO — Editorial asymmetric split
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[80vh] grid lg:grid-cols-[1fr_52%] overflow-hidden">

        <div className="flex flex-col justify-end px-8 md:px-16 lg:px-20 xl:px-28 pt-36 pb-16 lg:pb-20">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-6 h-px bg-[#E63946]" />
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/40">
              Sponsorship / 2026–27
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-display text-[clamp(2.8rem,5.5vw,5rem)] font-bold leading-[0.93] tracking-tight text-[#0A0A0A] mb-6"
          >
            We don't do<br />
            <span className="text-[#E63946]">Tier Tables.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#0A0A0A]/55 text-base leading-relaxed max-w-[480px] mb-10"
          >
            Each sponsorship opportunity is developed on a case-by-case basis, ensuring that every collaboration aligns with your organization's objectives, audience, and desired impact. We work closely with partners to create meaningful opportunities that deliver value for both your brand and our mission.
          </motion.p>

          {/* Impact metrics strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-8 border-t border-[#0A0A0A]/10 pt-8"
          >
            {impactMetrics.map((m) => (
              <div key={m.label}>
                <div className="font-mono text-2xl font-bold text-[#0A0A0A] leading-none mb-1">{m.value}</div>
                <div className="font-display text-xs font-semibold text-[#0A0A0A]/60 mb-0.5">{m.label}</div>
                <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-[#0A0A0A]/25">{m.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: rover image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:block bg-[#F0F0F0]"
        >
          <Image
            src="/Images/IMG_9088.webp"
            alt="KARURA Rover — URC Finals hardware"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FAFAFA] to-transparent pointer-events-none" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="bg-[#0A0A0A]/80 backdrop-blur-sm px-5 py-3 flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/60">
                KARURA III — URC Finals 2026
              </span>
              <span className="font-mono text-[10px] text-[#E63946] tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E63946] animate-pulse inline-block" />
                ARCHIVED
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT NOTE — First element post-hero
      ══════════════════════════════════════════ */}
      <section className="border-y border-[#0A0A0A]/8 bg-[#0A0A0A]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">
          <div className="grid lg:grid-cols-[1fr_1fr] divide-y lg:divide-y-0 lg:divide-x divide-white/8">

            <div className="py-12 lg:pr-16">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-6 h-px bg-[#E63946]" />
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/30">
                  Direct Contact
                </span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-[440px]">
                Our business team responds to all inquiries within 48 hours. Every sponsorship is scoped individually around your organization's goals.
              </p>
              <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-white/20 mb-2">
                Business Lead
              </div>
              <a
                href="mailto:Karura.urc.us@gmail.com"
                className="font-display text-lg font-bold text-white hover:text-[#E63946] transition-colors duration-200"
              >
                Karura.urc.us@gmail.com
              </a>
              <div className="font-mono text-[9px] text-white/25 mt-1">
                Brady Wood — Business Lead, KARURA Project
              </div>
            </div>

            <div className="py-12 lg:pl-16 flex flex-col justify-center">
              <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-white/20 mb-6">
                Sponsorship Scope
              </div>
              <div className="space-y-3">
                {[
                  'Hardware & component funding',
                  'In-kind material contributions',
                  'Engineering mentorship hours',
                  'Co-branding & field presence',
                  'Talent pipeline access',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-3 h-px bg-[#E63946] flex-shrink-0" />
                    <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-white/45">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* ══════════════════════════════════════════
         CURRENT SPONSORS — Static full-color grid
         To add a sponsor: append an entry to
         currentSponsors above with name, logo, url.
      ══════════════════════════════════════════ */}
      <section className="border-b border-[#0A0A0A]/8 py-24">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

          {/* Centered Header Section */}
          <div className="max-w-[900px] mx-auto flex flex-col items-center text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="w-8 h-px bg-[#E63946]" />
              <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#0A0A0A]/40">
                Current Sponsors
              </span>
              <span className="w-8 h-px bg-[#E63946]" />
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] leading-tight mb-4">
              2026–27 Sponsors
            </h2>
            
            <p className="text-[#0A0A0A]/50 text-sm md:text-base leading-relaxed max-w-[420px] mx-auto">
              Click any logo to visit the sponsor's website.
            </p>
          </div>

          {/* Sponsor grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 pl-px pt-px">
            {currentSponsors.map((sponsor, i) => (
              <motion.a
                key={sponsor.id}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="group bg-white flex items-center justify-center px-10 py-12 min-h-[140px] md:min-h-[160px] border border-[#0A0A0A]/8 -ml-px -mt-px hover:bg-[#FAFAFA] hover:z-10 transition-colors duration-200 relative"
                title={sponsor.name}
              >
                <div className="relative w-full h-16 md:h-20">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain transition-opacity duration-200 group-hover:opacity-80"
                  />
                </div>
                {/* Subtle hover indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[#E63946] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
              </motion.a>
            ))}
          </div>
          
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY SPONSOR — Proof narrative
      ══════════════════════════════════════════ */}
      <section className="border-b border-[#0A0A0A]/8 py-24">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

          <div className="grid lg:grid-cols-[280px_1fr] gap-16 lg:gap-24 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-px bg-[#E63946]" />
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/35">Why Sponsor</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-[#0A0A0A] leading-tight">
                The case<br />for KARURA
              </h2>
            </div>
            <p className="text-[#0A0A0A]/50 text-sm leading-relaxed self-end max-w-[580px]">
              Sponsorships with KARURA are not logo placements, they are engineering deployments. Your components, your technology, and your brand travel to one of the world's most demanding robotics competitions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 border-t border-l border-[#0A0A0A]/8">
            {[
              {
                index: '01',
                title: 'Real-world field testing',
                body: 'Your technology operates in Mars-like terrain, extreme UV, loose sediment, and temperature swings. It is the most credible field validation available to a student-engineering sponsor.',
              },
              {
                index: '02',
                title: 'Cross-Pacific talent pipeline',
                body: '100+ engineers from 30+ universities across Japan and Texas A&M. Sponsors gain direct access to a bilingual, internationally collaborative engineering cohort before they enter industry.',
              },
              {
                index: '03',
                title: 'Institutional brand placement',
                body: 'KARURA competes in front of NASA judges, aerospace industry observers, and a global press audience. Your logo is on the hardware being filmed and photographed throughout.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border-b border-r border-[#0A0A0A]/8 p-8 lg:p-10"
              >
                <div className="font-mono text-[8px] tracking-[0.2em] uppercase text-[#0A0A0A]/20 mb-6">{item.index}</div>
                <h3 className="font-display text-lg font-bold text-[#0A0A0A] mb-4 leading-snug">{item.title}</h3>
                <p className="text-[#0A0A0A]/50 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          Sponsor TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className="border-b border-[#0A0A0A]/8 py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

          <div className="flex items-center gap-3 mb-14">
            <span className="w-6 h-px bg-[#E63946]" />
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/35">
              Sponsor Impact
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-0 border-t border-l border-[#0A0A0A]/8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.company}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-b border-r border-[#0A0A0A]/8 p-8 lg:p-10 flex flex-col"
              >
                <div className="font-mono text-5xl text-[#0A0A0A]/8 leading-none mb-4 select-none">&ldquo;</div>
                <p className="text-[#0A0A0A]/70 text-sm leading-relaxed mb-8 flex-1 italic">
                  {t.quote}
                </p>
                <div className="bg-[#FAFAFA] border border-[#0A0A0A]/8 p-4 mb-6">
                  <div className="font-mono text-[8px] tracking-[0.18em] uppercase text-[#0A0A0A]/25 mb-1">Field Result</div>
                  <p className="font-display text-xs font-semibold text-[#0A0A0A]/70 leading-snug">{t.result}</p>
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-[#0A0A0A]">{t.company}</div>
                  <div className="font-mono text-[9px] tracking-[0.12em] uppercase text-[#0A0A0A]/30 mt-0.5">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}