'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

// ─── Data ────────────────────────────────────────────────────────────────────

const sponsorTiers = [
  {
    tier: 'Platinum',
    slug: 'platinum',
    amount: '$10,000+',
    scale: 'lg', // large card
    accent: 'border-[#0A0A0A]',
    tagBg: 'bg-[#0A0A0A] text-[#FAFAFA]',
    perks: [
      { label: 'Rover Placement', value: 'Logo on rover chassis + arm' },
      { label: 'Uniform Branding', value: 'All competition jerseys' },
      { label: 'Annual Report', value: 'Full-page feature' },
      { label: 'Speaking Slot', value: 'Team events + SAR review' },
      { label: 'Website Priority', value: 'Homepage + support hero' },
      { label: 'Social Campaign', value: 'Dedicated spotlight series' },
      { label: 'Exclusive Demo', value: 'Live rover walkthrough' },
    ],
  },
  {
    tier: 'Gold',
    slug: 'gold',
    amount: '$5,000–$9,999',
    scale: 'md',
    accent: 'border-[#0A0A0A]/40',
    tagBg: 'bg-[#0A0A0A]/8 text-[#0A0A0A]',
    perks: [
      { label: 'Rover Placement', value: 'Logo on rover chassis' },
      { label: 'Annual Report', value: 'Half-page feature' },
      { label: 'Website Listing', value: 'Sponsorship page' },
      { label: 'Social Recognition', value: 'Partner posts + stories' },
      { label: 'Team Q&A', value: 'Virtual engineering session' },
    ],
  },
  {
    tier: 'Silver',
    slug: 'silver',
    amount: '$1,000–$4,999',
    scale: 'md',
    accent: 'border-[#0A0A0A]/25',
    tagBg: 'bg-[#0A0A0A]/5 text-[#0A0A0A]',
    perks: [
      { label: 'Uniform Branding', value: 'Logo on team uniforms' },
      { label: 'Annual Report', value: 'Sponsor mention' },
      { label: 'Website Listing', value: 'Sponsors section' },
      { label: 'Social Recognition', value: 'Thank-you post' },
    ],
  },
  {
    tier: 'Bronze',
    slug: 'bronze',
    amount: '$500–$999',
    scale: 'sm',
    accent: 'border-[#0A0A0A]/15',
    tagBg: 'bg-[#0A0A0A]/4 text-[#0A0A0A]/70',
    perks: [
      { label: 'Website Listing', value: 'Name + logo' },
      { label: 'Social Recognition', value: 'Digital acknowledgment' },
      { label: 'Annual Report', value: 'Acknowledgment section' },
    ],
  },
];

const currentSponsors = [
  { id: '1', name: 'Sanso', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2400x740_v-frms_webp_47ab9e3a-894f-4fa5-ae7e-e04e6f6ff0a7_small.webp' },
  { id: '2', name: 'Kikusui', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-738x150_v-fs_webp_35ab6be7-00ff-45b5-b575-6589198d4233_small.webp' },
  { id: '3', name: 'Tenchijin', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1482x370_v-fms_webp_392f814c-2b0f-4bfa-9b98-a4c136832d54_small.webp' },
  { id: '4', name: 'Crecia', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2400x900_v-frms_webp_e4afed17-bd2a-46bb-bc4d-ac6e68d37be9_small.webp' },
  { id: '5', name: 'Hiwin', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-738x150_v-fs_webp_a7752d8d-06eb-465b-bcac-89b642aeef58_small.webp' },
  { id: '6', name: 'Spacegoods', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-800x209_v-fs_webp_5abd98f2-f13a-48f4-924d-29d9c0312265_small.webp' },
  { id: '7', name: 'OptoSigma', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1812x452_v-frms_webp_db352a0c-c6d2-4509-9518-9d34e1c6636a_small.webp' },
  { id: '8', name: 'Amulapo', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-666x140_v-fs_webp_c2904793-5b05-4517-8245-9c3657d440e2_small.webp' },
  { id: '9', name: 'Argo', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1088x228_v-fs_webp_68261acd-1c79-40e8-8a5c-2d016f970f3b_small.webp' },
  { id: '10', name: 'Gutenberg', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1540x146_v-fms_webp_aa43e6b3-9a3b-4b50-8c88-5390ab14c413_small.webp' },
  { id: '11', name: 'Innovation City', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1188x568_v-fs_webp_9ed63bcb-6917-4760-9158-4461e22c4ae4_small.webp' },
];

const testimonials = [
  {
    quote: 'OptoSigma provided the precision optical sensors that enabled our autonomous navigation stack at URC. Their engineering traveled to the desert with us.',
    company: 'OptoSigma',
    role: 'Optics / Navigation Partner',
    result: 'Stereo depth perception system enabling sub-5cm obstacle detection at 2 m/s traverse speed.',
  },
  {
    quote: 'Hiwin\'s linear actuators gave our robotic arm the positional accuracy we needed to pass the equipment servicing task at Finals. Off-the-shelf parts, competition-grade performance.',
    company: 'Hiwin',
    role: 'Motion Control Partner',
    result: 'Sub-millimeter joint repeatability across 5 DOF under field conditions in the Utah desert.',
  },
  {
    quote: 'Kikusui\'s power supply units powered the entire test bench for KARURA III\'s electrical validation. When we shipped to Hanksville, our power architecture was battle-tested.',
    company: 'Kikusui',
    role: 'Power Systems Partner',
    result: 'Zero electrical failures during the 4-day competition. Full power subsystem validation achieved pre-deployment.',
  },
];

const impactMetrics = [
  { value: '$180K+', label: 'Hardware Funded', sub: 'across all generations' },
  { value: '11', label: 'Active Partners', sub: 'AY 2025–26' },
  { value: '1st', label: 'International Finalists', sub: 'URC history' },
  { value: '2026', label: 'Next Competition', sub: 'Hanksville, Utah' },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    tier: '',
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
      <section className="relative min-h-[80vh] grid lg:grid-cols-[1fr_42%] overflow-hidden">

        {/* Left: text column */}
        <div className="flex flex-col justify-end px-8 md:px-16 lg:px-20 xl:px-28 pt-36 pb-16 lg:pb-20">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-6 h-px bg-[#E63946]" />
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/40">
              Corporate Partnership / 2025–26
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-display text-[clamp(2.8rem,5.5vw,5rem)] font-bold leading-[0.93] tracking-tight text-[#0A0A0A] mb-6"
          >
            Fund the hardware<br />
            going to<br />
            <span className="text-[#E63946]">Utah.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#0A0A0A]/55 text-base leading-relaxed max-w-[480px] mb-10"
          >
            In 2024, KARURA became the first Japanese and international team in URC history to reach the Finals. Your corporate partnership directly funds the physical hardware heading to the Utah desert in 2026.
          </motion.p>

          {/* Key stats strip */}
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

        {/* Right: rover image, full-bleed */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:block bg-[#F0F0F0]"
        >
          <Image
            src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png"
            alt="KARURA Rover URC Finals hardware"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FAFAFA] to-transparent pointer-events-none" />
          {/* Classification badge */}
          <div className="absolute bottom-8 left-8 right-8">
            <div className="bg-[#0A0A0A]/80 backdrop-blur-sm px-5 py-3 flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/60">
                KARURA III: URC Finals 2024
              </span>
              <span className="font-mono text-[10px] text-[#E63946] tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E63946] animate-pulse inline-block" />
                ACTIVE BUILD
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          PARTNER LOGO MARQUEE — Pure CSS, no JS
      ══════════════════════════════════════════ */}
      <div className="border-y border-[#0A0A0A]/8">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28 py-6">
          <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-[#0A0A0A]/25">
            Current Partners
          </span>
        </div>
        <div className="overflow-hidden border-t border-[#0A0A0A]/8">
          <div
            className="flex w-max"
            style={{ animation: 'marquee 28s linear infinite' }}
            onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
            onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = 'running')}
          >
            {[...currentSponsors, ...currentSponsors].map((sponsor, index) => (
              <div
                key={`${sponsor.id}-${index}`}
                className="flex-shrink-0 w-44 h-16 border-r border-[#0A0A0A]/8 flex items-center justify-center px-6"
              >
                <div className="relative w-full h-8">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain grayscale opacity-40 hover:opacity-70 hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          WHY PARTNER — Proof narrative
      ══════════════════════════════════════════ */}
      <section className="border-b border-[#0A0A0A]/8 py-24">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

          <div className="grid lg:grid-cols-[280px_1fr] gap-16 lg:gap-24 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-px bg-[#E63946]" />
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/35">Why Partner</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-[#0A0A0A] leading-tight">
                The case<br />for KARURA
              </h2>
            </div>
            <p className="text-[#0A0A0A]/50 text-sm leading-relaxed self-end max-w-[580px]">
              Corporate partnerships with KARURA are not just logo placements. They are engineering deployments. Your components, your technology, and your brand travel to one of the world's most demanding robotics competitions.
            </p>
          </div>

          {/* Three-column ROI grid */}
          <div className="grid md:grid-cols-3 border-t border-l border-[#0A0A0A]/8">
            {[
              {
                index: '01',
                title: 'Real-world field testing',
                body: 'Your technology operates in Mars-analog terrain, including extreme UV, loose sediment, and temperature swings. It gives a student-engineering partner some of the most credible field validation available.',
              },
              {
                index: '02',
                title: 'Cross-Pacific talent pipeline',
                body: '46+ engineers from 15+ universities across Japan and Texas A&M. Partners gain direct access to a bilingual, internationally collaborative engineering cohort before they enter industry.',
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
          SPONSORSHIP TIERS — Dynamic scale cards
      ══════════════════════════════════════════ */}
      <section className="border-b border-[#0A0A0A]/8 py-24">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

          <div className="mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-px bg-[#E63946]" />
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/35">Partnership Tiers</span>
            </div>
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-[#0A0A0A] leading-tight">
              Choose your level<br />of commitment
            </h2>
          </div>

          {/* Asymmetric tier layout — Platinum full-width, then 3-col */}
          <div className="space-y-0">

            {/* Platinum — full bleed featured card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-[#0A0A0A] p-0 grid lg:grid-cols-[1fr_340px]"
            >
              {/* Left content */}
              <div className="p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-[#0A0A0A]/15">
                <div className="flex items-start justify-between gap-6 mb-8">
                  <div>
                    <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase bg-[#0A0A0A] text-[#FAFAFA] px-3 py-1.5 mb-4">
                      Platinum
                    </span>
                    <div className="font-mono text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#0A0A0A] leading-none">
                      $10,000<span className="text-[#0A0A0A]/30 text-2xl">+</span>
                    </div>
                  </div>
                  <div className="text-right hidden md:block">
                    <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-[#0A0A0A]/25 mb-1">Availability</div>
                    <div className="font-mono text-sm font-bold text-[#0A0A0A]">2 Slots / Year</div>
                  </div>
                </div>
                <p className="text-[#0A0A0A]/55 text-sm leading-relaxed max-w-lg mb-10">
                  Maximum visibility on every piece of hardware that reaches the competition. Rover chassis, arm, uniforms, and all digital surfaces. Your engineering partnership travels to Utah.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-0 border-t border-[#0A0A0A]/10 pt-8 divide-y divide-[#0A0A0A]/6">
                  {sponsorTiers[0].perks.map((perk) => (
                    <div key={perk.label} className="py-3.5">
                      <div className="font-mono text-[8px] tracking-[0.15em] uppercase text-[#0A0A0A]/25 mb-1">{perk.label}</div>
                      <div className="font-display text-xs font-semibold text-[#0A0A0A]/70">{perk.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: image panel */}
              <div className="relative min-h-[260px] bg-[#0A0A0A] hidden lg:block">
                <Image
                  src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png"
                  alt="Rover at competition"
                  fill
                  className="object-cover object-center opacity-70"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/40 block mb-1">
                    Your logo here
                  </span>
                  <span className="font-mono text-xs text-white/70">
                    On hardware competing at URC 2026
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Gold / Silver / Bronze — 3 column */}
            <div className="grid md:grid-cols-3 border-l border-[#0A0A0A]/10">
              {sponsorTiers.slice(1).map((tier, i) => (
                <motion.div
                  key={tier.tier}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`border-b border-r border-[#0A0A0A]/10 p-8 lg:p-10 flex flex-col ${
                    tier.tier === 'Gold' ? 'bg-white' : ''
                  }`}
                >
                  <div className="mb-6">
                    <span className={`inline-flex font-mono text-[9px] tracking-[0.18em] uppercase px-2.5 py-1 mb-3 ${tier.tagBg}`}>
                      {tier.tier}
                    </span>
                    <div className="font-mono text-2xl font-bold text-[#0A0A0A] leading-none">
                      {tier.amount}
                    </div>
                  </div>

                  <div className="flex-1 divide-y divide-[#0A0A0A]/6 border-t border-[#0A0A0A]/8">
                    {tier.perks.map((perk) => (
                      <div key={perk.label} className="py-3">
                        <div className="font-mono text-[8px] tracking-[0.15em] uppercase text-[#0A0A0A]/20 mb-0.5">{perk.label}</div>
                        <div className="font-display text-xs font-semibold text-[#0A0A0A]/60">{perk.value}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PARTNER TESTIMONIALS — Hardware impact
      ══════════════════════════════════════════ */}
      <section className="border-b border-[#0A0A0A]/8 py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

          <div className="flex items-center gap-3 mb-14">
            <span className="w-6 h-px bg-[#E63946]" />
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/35">
              Partner Impact
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
                {/* Quote mark */}
                <div className="font-mono text-5xl text-[#0A0A0A]/8 leading-none mb-4 select-none">&ldquo;</div>

                <p className="text-[#0A0A0A]/70 text-sm leading-relaxed mb-8 flex-1 italic">
                  {t.quote}
                </p>

                {/* Outcome callout */}
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

      {/* ══════════════════════════════════════════
          SOCIAL PROOF — Urgency block above form
      ══════════════════════════════════════════ */}
      <section className="border-b border-[#0A0A0A]/8 py-20 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-center">

            {/* Left: bold statement */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-px bg-[#E63946]" />
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/35">
                  2026 Campaign: open now
                </span>
              </div>
              <h2 className="font-display text-[clamp(1.8rem,4vw,3.2rem)] font-bold text-[#0A0A0A] leading-tight mb-6">
                In 2024, KARURA became the first Japanese and international team in URC history to reach the Finals.
              </h2>
              <p className="text-[#0A0A0A]/55 text-base leading-relaxed max-w-[520px]">
                Your corporate partnership directly funds the physical hardware heading to Utah in 2026. Components, travel, entry, and the engineering hours of 46+ students across Japan and Texas A&M.
              </p>
            </div>

            {/* Right: validation cells */}
            <div className="border border-[#0A0A0A]/10 divide-y divide-[#0A0A0A]/8">
              {[
                { label: 'Competition', value: 'University Rover Challenge', sub: 'Hanksville, Utah · 2026' },
                { label: 'Team Status', value: 'URC 2024 Finalists', sub: 'First international team in URC history' },
                { label: 'Team Size', value: '46+ Engineers', sub: '15+ universities · Japan + USA' },
                { label: 'Partnership Slots', value: 'Open for 2025–26', sub: 'Platinum: 2 available · Gold: 4 available' },
              ].map((item) => (
                <div key={item.label} className="px-6 py-4 grid grid-cols-[100px_1fr] gap-4 items-start">
                  <div className="font-mono text-[8px] tracking-[0.18em] uppercase text-[#0A0A0A]/25 pt-0.5">{item.label}</div>
                  <div>
                    <div className="font-display text-sm font-semibold text-[#0A0A0A]">{item.value}</div>
                    <div className="font-mono text-[9px] text-[#0A0A0A]/35 mt-0.5">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CORPORATE INQUIRY FORM
      ══════════════════════════════════════════ */}
      <section className="border-b border-[#0A0A0A]/8 py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

          <div className="grid lg:grid-cols-[380px_1fr] gap-16 lg:gap-24 items-start">

            {/* Left: context */}
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-px bg-[#E63946]" />
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/35">
                  Corporate Inquiry
                </span>
              </div>
              <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-[#0A0A0A] leading-tight mb-5">
                Start the conversation
              </h2>
              <p className="text-[#0A0A0A]/50 text-sm leading-relaxed mb-8">
                Our business team responds to all inquiries within 48 hours. Sponsorship packages can be tailored to include in-kind hardware contributions, mentorship hours, or custom co-branding arrangements.
              </p>

              {/* Contact note */}
              <div className="border border-[#0A0A0A]/10 p-6">
                <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-[#0A0A0A]/25 mb-3">Direct Contact</div>
                
                <a
                  href="mailto:zacharyrenkema@tamu.edu"
                  className="font-display text-sm font-semibold text-[#0A0A0A] hover:text-[#E63946] transition-colors"
                >
                  zacharyrenkema@tamu.edu
                </a>
                <div className="font-mono text-[9px] text-[#0A0A0A]/30 mt-1">Business Lead, KARURA Project</div>
              </div>
            </div>

            {/* Right: form */}
            <div>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="border border-[#0A0A0A]/10 p-16 text-center"
                >
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#0A0A0A]/30 mb-4">
                    Transmission Received
                  </div>
                  <h3 className="font-display text-3xl font-bold text-[#0A0A0A] mb-4">
                    We&rsquo;ll be in touch.
                  </h3>
                  <p className="text-[#0A0A0A]/50 text-sm max-w-xs mx-auto">
                    Our business team will respond within 48 hours with a tailored partnership proposal.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="space-y-0 border border-[#0A0A0A]/10"
                >
                  {/* Form fields in bordered cell layout */}
                  <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#0A0A0A]/8 border-b border-[#0A0A0A]/8">
                    <div className="p-6">
                      <label className="block font-mono text-[9px] tracking-[0.18em] uppercase text-[#0A0A0A]/35 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-transparent text-[#0A0A0A] text-sm font-display placeholder:text-[#0A0A0A]/25 border-0 outline-none focus:ring-0"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="p-6">
                      <label className="block font-mono text-[9px] tracking-[0.18em] uppercase text-[#0A0A0A]/35 mb-2">
                        Work Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-transparent text-[#0A0A0A] text-sm font-display placeholder:text-[#0A0A0A]/25 border-0 outline-none focus:ring-0"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#0A0A0A]/8 border-b border-[#0A0A0A]/8">
                    <div className="p-6">
                      <label className="block font-mono text-[9px] tracking-[0.18em] uppercase text-[#0A0A0A]/35 mb-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full bg-transparent text-[#0A0A0A] text-sm font-display placeholder:text-[#0A0A0A]/25 border-0 outline-none focus:ring-0"
                        placeholder="Company or institution"
                      />
                    </div>
                    <div className="p-6">
                      <label className="block font-mono text-[9px] tracking-[0.18em] uppercase text-[#0A0A0A]/35 mb-2">
                        Partnership Tier
                      </label>
                      <select
                        name="tier"
                        value={formData.tier}
                        onChange={handleChange}
                        className="w-full bg-transparent text-[#0A0A0A] text-sm font-display border-0 outline-none focus:ring-0 cursor-pointer"
                      >
                        <option value="">Select tier</option>
                        {sponsorTiers.map((t) => (
                          <option key={t.tier} value={t.tier}>
                            {t.tier}: {t.amount}
                          </option>
                        ))}
                        <option value="custom">Custom / In-kind contribution</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-6 border-b border-[#0A0A0A]/8">
                    <label className="block font-mono text-[9px] tracking-[0.18em] uppercase text-[#0A0A0A]/35 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-transparent text-[#0A0A0A] text-sm font-display placeholder:text-[#0A0A0A]/25 border-0 outline-none focus:ring-0 resize-none"
                      placeholder="Tell us about your organization and how you'd like to collaborate..."
                    />
                  </div>

                  {/* CTA — mars-red, the only red element on the page */}
                  <button
                    onClick={handleSubmit}
                    className="w-full py-5 bg-[#E63946] text-white font-display font-semibold text-sm tracking-wide hover:bg-[#C1121F] transition-colors duration-200 flex items-center justify-center gap-3"
                  >
                    Submit Corporate Inquiry
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}