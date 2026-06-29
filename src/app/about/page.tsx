'use client';

import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { orgStats } from '@/data/stats';
import { generationTimeline } from '@/data/rovers';

// ─── Data ───────────────────────────────────────────────────────────────────
// Stats (orgStats) and program timeline (generationTimeline) now live in
// src/data/stats.ts and src/data/rovers.ts — shared with the home page
// and /rover. Only content unique to this page (universities, department
// descriptions) stays local.

const universities = [
  // Japan
  { name: 'Waseda University', country: 'JP', city: 'Tokyo' },
  { name: 'Hiroshima University', country: 'JP', city: 'Hiroshima' },
  { name: 'Hosei University', country: 'JP', city: 'Tokyo' },
  { name: 'Ritsumeikan University', country: 'JP', city: 'Kyoto' },
  { name: 'Tokyo Metropolitan University', country: 'JP', city: 'Tokyo' },
  { name: 'Tokyo University of Science', country: 'JP', city: 'Tokyo' },
  { name: 'Shinshu University', country: 'JP', city: 'Nagano' },
  { name: 'University of Tokyo', country: 'JP', city: 'Tokyo' },
  { name: 'Kyoto University', country: 'JP', city: 'Kyoto' },
  { name: 'Tohoku University', country: 'JP', city: 'Sendai' },
  { name: 'Osaka University', country: 'JP', city: 'Osaka' },
  { name: 'Keio University', country: 'JP', city: 'Tokyo' },
  { name: 'Nagoya University', country: 'JP', city: 'Nagoya' },
  { name: 'Kyushu University', country: 'JP', city: 'Fukuoka' },
  // USA
  { name: 'Texas A&M University', country: 'US', city: 'College Station, TX' },
];

const departments = [
  {
    id: 'mechanical',
    index: '01',
    title: 'Mechanical',
    scope: 'Chassis · Suspension · Drive Train · Robotic Arm',
    body: 'Structural and kinematic design of the rover frame, six-wheel drive system, rocker-bogie suspension, and multi-DOF manipulator arm for terrain traversal and sample collection.',
    members: 12,
  },
  {
    id: 'electrical',
    index: '02',
    title: 'Electrical',
    scope: 'Power · PCB Design · Motor Control · Sensors',
    body: 'Custom PCB design, power distribution architecture, brushless motor controllers, and sensor integration. Ensures system reliability under competition and environmental stress.',
    members: 8,
  },
  {
    id: 'software',
    index: '03',
    title: 'Software / Autonomy',
    scope: 'ROS2 · Navigation · Computer Vision · Telemetry',
    body: 'ROS2-based control stack, SLAM-driven autonomous navigation, computer vision for obstacle avoidance and task completion, and real-time telemetry UI.',
    members: 15,
  },
  {
    id: 'science',
    index: '04',
    title: 'Science',
    scope: 'Astrobiology · Life Detection · Sample Analysis',
    body: 'Designs and validates scientific protocols for detecting biosignatures and soil chemistry. Manages the onboard spectrometry and microscopy payload.',
    members: 6,
  },
  {
    id: 'business',
    index: '05',
    title: 'Business & Outreach',
    scope: 'Sponsorship · PR · Operations · Recruitment',
    body: 'Drives sponsorship acquisition, public communications, brand identity, and team logistics. Manages cross-cultural coordination between Japan and US nodes.',
    members: 5,
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen">
      <Header />

      {/* ══════════════════════════════════════════
          HERO — Editorial split, no gradient wash
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[72vh] grid lg:grid-cols-[1fr_40%] overflow-hidden">

        {/* Left: text */}
        <div className="flex flex-col justify-end px-8 md:px-16 lg:px-20 xl:px-28 pt-36 pb-16 lg:pb-20">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-6 h-px bg-[#E63946]" />
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/40">
              About KARURA
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-display text-[clamp(2.8rem,5.5vw,5rem)] font-bold leading-[0.95] tracking-tight text-[#0A0A0A] mb-6"
          >
            International<br />
            Rover<br />
            Development
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-[#0A0A0A]/50 text-base leading-relaxed max-w-[460px]"
          >
            KARURA unites students from{' '}
            <span className="text-[#0A0A0A]/80 font-medium">15+ universities</span> across Japan and the U.S. to build, test, and compete with a Mars rover, and to show that international engineering collaboration at the student level is both possible and world-class.
          </motion.p>
        </div>

        {/* Right: rover image, full-bleed, no overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:block bg-[#0A0A0A]"
        >
          <Image
            src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png"
            alt="KARURA Mars Rover hardware"
            fill
            priority
            className="object-cover object-center opacity-90"
          />
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#FAFAFA] to-transparent pointer-events-none" />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          TELEMETRY STATS BAR
      ══════════════════════════════════════════ */}
      <div className="border-y border-[#0A0A0A]/8 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#0A0A0A]/8">
            {orgStats
              .filter((s) => s.label !== 'Departments')
              .map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="px-8 py-8"
                >
                  <div className="font-mono text-[clamp(2rem,4vw,3rem)] font-bold text-[#0A0A0A] leading-none mb-1">{s.value}</div>
                  <div className="font-display text-sm font-semibold text-[#0A0A0A]/70 mb-0.5">{s.label}</div>
                  <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#0A0A0A]/30">{s.sub}</div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          MISSION — Uneven typographic column split
      ══════════════════════════════════════════ */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

          <div className="grid lg:grid-cols-[280px_1fr] gap-16 lg:gap-24">

            {/* Sticky left label */}
            <div className="lg:pt-2">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-px bg-[#E63946]" />
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/40">Mission</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-[#0A0A0A] leading-tight">
                Why We<br />Build Rovers
              </h2>
            </div>

            {/* Right: two-column body text */}
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="font-display text-[1.15rem] font-semibold text-[#0A0A0A] leading-snug mb-4">
                  The University Rover Challenge is the world's most demanding robotics competition for university students, held every year on Mars-analog terrain in Utah.
                </p>
                <p className="text-[#0A0A0A]/55 text-sm leading-relaxed">
                  KARURA was built on a simple thesis: the most advanced rover on the field should also be the most internationally diverse team on the field. We compete at URC every year, and in 2024 we proved that thesis true by reaching the Finals as the first Japanese and first international team in competition history.
                </p>
              </div>
              <div>
                <p className="text-[#0A0A0A]/55 text-sm leading-relaxed mb-5">
                  Our mission is not limited to competition podiums. Every system we engineer, every student who joins from a new university, and every sponsor partnership we build moves the needle on international space collaboration as a practical, replicable model.
                </p>
                <p className="text-[#0A0A0A]/55 text-sm leading-relaxed">
                  KARURA connects Japanese engineering excellence with the American aerospace research ecosystem at Texas A&M, combining complementary perspectives to solve hard engineering problems.
                </p>
                <div className="mt-8 pt-6 border-t border-[#0A0A0A]/8">
                  <Link
                    href="/rover"
                    className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors group"
                  >
                    <span className="w-5 h-px bg-current transition-all group-hover:w-8" />
                    View Rover Specs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHAT SETS US APART — Left-aligned blocks
      ══════════════════════════════════════════ */}
      <section className="py-16 border-t border-[#0A0A0A]/8 bg-[#0A0A0A]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

          <div className="grid lg:grid-cols-[280px_1fr] gap-16 lg:gap-24">
            <div className="lg:pt-2">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-px bg-[#E63946]" />
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/30">Differentiators</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-white leading-tight">
                What Sets<br />Us Apart
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/8">
              {[
                {
                  index: '01',
                  title: 'True Cross-Pacific Structure',
                  body: 'We are not an exchange program. We are a permanent dual-node organization with engineering operations running in Japan and Texas at the same time.',
                },
                {
                  index: '02',
                  title: 'Competition-Proven Hardware',
                  body: 'Every subsystem has been field-tested at URC on Mars-analog desert terrain. Our 2024 build reached the Finals, and the hardware performs under pressure.',
                },
                {
                  index: '03',
                  title: 'Academic Network Depth',
                  body: '15+ partner institutions across Japan, from Waseda to Kyushu, giving KARURA unrivaled access to diverse engineering talent and research resources.',
                },
              ].map((item) => (
                <div key={item.index} className="px-0 sm:px-8 py-8 first:pl-0 last:pr-0">
                  <div className="font-mono text-[10px] tracking-[0.2em] text-white/20 mb-4">{item.index}</div>
                  <h3 className="font-display text-base font-bold text-white mb-3 leading-snug">{item.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          UNIVERSITY NETWORK — Dense academic grid
      ══════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 border-t border-[#0A0A0A]/8">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

          <div className="grid lg:grid-cols-[280px_1fr] gap-16 lg:gap-24">

            {/* Left label */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-px bg-[#E63946]" />
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/40">Academic Network</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-[#0A0A0A] leading-tight mb-6">
                Partner<br />Universities
              </h2>
              <p className="text-[#0A0A0A]/45 text-xs leading-relaxed mb-8 max-w-[220px]">
                Students from these institutions form the engineering backbone of KARURA across all five departments.
              </p>
              {/* Country breakdown */}
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#0A0A0A]/8 pb-3">
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#0A0A0A]/40">Japan</span>
                  <span className="font-mono text-sm font-bold text-[#0A0A0A]">14</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#0A0A0A]/8 pb-3">
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#0A0A0A]/40">United States</span>
                  <span className="font-mono text-sm font-bold text-[#0A0A0A]">1</span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#0A0A0A]/40">Total</span>
                  <span className="font-mono text-sm font-bold text-[#E63946]">15+</span>
                </div>
              </div>
            </div>

            {/* Right: dense grid of university cells */}
            <div>
              {/* Japan block */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#0A0A0A]/30">Japan — JP</span>
                  <span className="flex-1 h-px bg-[#0A0A0A]/8" />
                  <span className="font-mono text-[9px] text-[#0A0A0A]/25">14 institutions</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-[#0A0A0A]/8">
                  {universities
                    .filter((u) => u.country === 'JP')
                    .map((u, i) => (
                      <motion.div
                        key={u.name}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.03 }}
                        className="bg-[#FAFAFA] px-4 py-4 group hover:bg-[#0A0A0A] transition-colors duration-200"
                      >
                        <div className="font-mono text-[8px] tracking-[0.18em] uppercase text-[#0A0A0A]/25 group-hover:text-white/25 mb-1.5 transition-colors">
                          {u.city}
                        </div>
                        <div className="font-display text-xs font-semibold text-[#0A0A0A] group-hover:text-white leading-snug transition-colors">
                          {u.name}
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>

              {/* USA block */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#0A0A0A]/30">United States — US</span>
                  <span className="flex-1 h-px bg-[#0A0A0A]/8" />
                  <span className="font-mono text-[9px] text-[#0A0A0A]/25">1 institution</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-[#0A0A0A]/8">
                  {universities
                    .filter((u) => u.country === 'US')
                    .map((u, i) => (
                      <motion.div
                        key={u.name}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.03 }}
                        className="bg-[#FAFAFA] px-4 py-4 group hover:bg-[#0A0A0A] transition-colors duration-200"
                      >
                        <div className="font-mono text-[8px] tracking-[0.18em] uppercase text-[#0A0A0A]/25 group-hover:text-white/25 mb-1.5 transition-colors">
                          {u.city}
                        </div>
                        <div className="font-display text-xs font-semibold text-[#0A0A0A] group-hover:text-white leading-snug transition-colors">
                          {u.name}
                        </div>
                      </motion.div>
                    ))}
                  {/* Filler "open" cell */}
                  <div className="bg-[#F0F0F0] px-4 py-4 flex items-center justify-center col-span-1">
                    <span className="font-mono text-[8px] tracking-[0.15em] uppercase text-[#0A0A0A]/20 text-center">
                      More<br />2026
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TIMELINE — Left-rail, technical blocks
      ══════════════════════════════════════════ */}
      <section className="py-24 border-t border-[#0A0A0A]/8 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

          <div className="grid lg:grid-cols-[280px_1fr] gap-16 lg:gap-24">

            <div className="lg:pt-2">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-px bg-[#E63946]" />
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/40">History</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-[#0A0A0A] leading-tight">
                Program<br />Timeline
              </h2>
            </div>

            <div className="relative">
              {/* Vertical rail */}
              <div className="absolute left-0 top-2 bottom-2 w-px bg-[#0A0A0A]/8 hidden md:block" />

              <div className="space-y-0 md:pl-10">
                {generationTimeline.map((gen, i) => (
                  <motion.div
                    key={gen.year}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="relative grid sm:grid-cols-[120px_1fr] gap-6 border-b border-[#0A0A0A]/8 py-8 last:border-b-0"
                  >
                    {/* Rail dot */}
                    <div className="absolute left-0 top-9 w-2 h-2 bg-[#0A0A0A]/20 -translate-x-[calc(50%+0.5px)] hidden md:block" />

                    <div>
                      <div className="font-mono text-[clamp(1.4rem,3vw,2rem)] font-bold text-[#0A0A0A] leading-none">{gen.year}</div>
                      <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#0A0A0A]/30 mt-1">{gen.label}</div>
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-[#0A0A0A] mb-2">{gen.designation}</h3>
                      <p className="text-[#0A0A0A]/50 text-sm leading-relaxed">{gen.note}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DEPARTMENTS — Explicit section IDs for
          smooth-scroll anchor navigation
      ══════════════════════════════════════════ */}
      <section className="py-24 border-t border-[#0A0A0A]/8">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

          <div className="mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-px bg-[#E63946]" />
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/40">Engineering</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A]">Departments</h2>
          </div>

          <div className="divide-y divide-[#0A0A0A]/8 border-t border-b border-[#0A0A0A]/8">
            {departments.map((dept, i) => (
              <motion.div
                key={dept.id}
                id={dept.id}                        // ← anchor ID for smooth-scroll nav
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="grid md:grid-cols-[80px_200px_1fr_100px] gap-6 lg:gap-10 items-start py-8 scroll-mt-24"
              >
                {/* Index */}
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#0A0A0A]/25 pt-1">
                  {dept.index}
                </div>

                {/* Title + scope */}
                <div>
                  <h3 className="font-display text-base font-bold text-[#0A0A0A] mb-1">{dept.title}</h3>
                  <p className="font-mono text-[9px] tracking-[0.1em] text-[#0A0A0A]/35 leading-relaxed">{dept.scope}</p>
                </div>

                {/* Body */}
                <p className="text-[#0A0A0A]/50 text-sm leading-relaxed">{dept.body}</p>

                {/* Member count */}
                <div className="text-right">
                  <div className="font-mono text-xl font-bold text-[#0A0A0A]">{dept.members}</div>
                  <div className="font-mono text-[8px] tracking-[0.15em] uppercase text-[#0A0A0A]/25">members</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {departments.map((dept) => (
              <Link
                key={dept.id}
                href={`#${dept.id}`}
                className="font-mono text-[9px] tracking-[0.15em] uppercase px-4 py-2 border border-[#0A0A0A]/12 text-[#0A0A0A]/40 hover:border-[#0A0A0A]/30 hover:text-[#0A0A0A] transition-colors duration-200"
              >
                {dept.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA — Support / Contact
      ══════════════════════════════════════════ */}
      <section className="py-20 border-t border-[#0A0A0A]/8 bg-[#0A0A0A]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

          <div className="grid md:grid-cols-2 gap-12 items-end">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-6 h-px bg-[#E63946]" />
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/25">Join the Mission</span>
              </div>
              <h2 className="font-display text-[clamp(1.8rem,4vw,3.2rem)] font-bold text-white leading-tight">
                Build the future<br />of space exploration<br />with us.
              </h2>
            </div>

            <div className="flex flex-col gap-4 md:items-start">
              <p className="text-white/40 text-sm leading-relaxed max-w-sm">
                Whether you're a student engineer, a potential sponsor, or a researcher, there's a place for you in KARURA's international network.
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                <Link
                  href="/support"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-[#E63946] text-white text-sm font-medium tracking-wide hover:bg-[#C1121F] transition-colors duration-200"
                >
                  Support KARURA
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                <a
                  href="mailto:zacharyrenkema@tamu.edu"
                  className="inline-flex items-center gap-2 px-7 py-3 border border-white/15 text-white/60 text-sm font-medium hover:border-white/40 hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}