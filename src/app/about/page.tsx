'use client';

import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { orgStats } from '@/data/stats';
import { generationTimeline } from '@/data/rovers';

// ─── Data ───────────────────────────────────────────────────────────────────

const universities = [
  // US first
  { name: 'Texas A&M University', city: 'College Station, TX' },
  { name: 'University of Texas at Austin', city: 'Austin, TX' },
  { name: 'Georgia Institute of Technology', city: 'Atlanta, GA' },
  { name: 'Mount Holyoke College', city: 'South Hadley, MA' },
  // Japan
  { name: 'University of Tokyo', city: 'Tokyo' },
  { name: 'Waseda University', city: 'Tokyo' },
  { name: 'Tohoku University', city: 'Sendai' },
  { name: 'Hiroshima University', city: 'Hiroshima' },
  { name: 'Tokyo University of Science', city: 'Tokyo' },
  { name: 'Osaka University', city: 'Osaka' },
  { name: 'Kyoto University', city: 'Kyoto' },
  { name: 'Keio University', city: 'Tokyo' },
  { name: 'Nagoya University', city: 'Nagoya' },
  { name: 'Kyushu University', city: 'Fukuoka' },
  { name: 'Ritsumeikan University', city: 'Kyoto' },
  { name: 'Hosei University', city: 'Tokyo' },
  { name: 'Tokyo Metropolitan University', city: 'Tokyo' },
  { name: 'Shinshu University', city: 'Nagano' },
  { name: 'Okayama University', city: 'Okayama' },
  { name: 'Nihon University', city: 'Tokyo' },
  { name: 'Shibaura Institute of Technology', city: 'Tokyo' },
  { name: 'Chuo University', city: 'Tokyo' },
  { name: 'Takushoku University', city: 'Tokyo' },
  { name: 'Kokugakuin University', city: 'Tokyo' },
  { name: 'Juntendo University', city: 'Tokyo' },
  { name: 'Musashino Art University', city: 'Tokyo' },
  { name: 'University of Nagano', city: 'Nagano' },
  { name: 'Tokyo University of Agriculture and Technology', city: 'Tokyo' },
  { name: 'Nat. Inst. of Technology (KOSEN), Toyama College', city: 'Toyama' },
  // Secondary / high school
  { name: 'Aomori Kenoh-hoshi High School', city: 'Aomori' },
  { name: 'Yokohama Science Frontier High School', city: 'Yokohama' },
  { name: 'Metropolitan Musashi High School', city: 'Tokyo' },
];

const departments = [
  {
    id: 'mechanical',
    index: '01',
    title: 'Mechanical',
    scope: 'Chassis · Suspension · Drive Train · Robotic Arm',
    body: 'Structural and kinematic design of the rover frame, six-wheel drive system, rocker-bogie suspension, and multi-DOF manipulator arm for terrain traversal and sample collection.',
    members: 32,
  },
  {
    id: 'electrical',
    index: '02',
    title: 'Electrical',
    scope: 'Power · PCB Design · Motor Control · Sensors',
    body: 'Custom PCB design, power distribution architecture, brushless motor controllers, and sensor integration. Ensures system reliability under competition and environmental stress.',
    members: 29,
  },
  {
    id: 'software',
    index: '03',
    title: 'Software / Autonomy',
    scope: 'ROS2 · Navigation · Computer Vision · Telemetry',
    body: 'ROS2-based control stack, SLAM-driven autonomous navigation, computer vision for obstacle avoidance and task completion, and real-time telemetry UI.',
    members: 24,
  },
  {
    id: 'science',
    index: '04',
    title: 'Science',
    scope: 'Astrobiology · Life Detection · Sample Analysis',
    body: 'Designs and validates scientific protocols for detecting biosignatures and soil chemistry. Manages the onboard spectrometry and microscopy payload.',
    members: 17,
  },
  {
    id: 'business',
    index: '05',
    title: 'Business & Outreach',
    scope: 'Sponsorship · PR · Operations · Recruitment',
    body: 'Drives sponsorship acquisition, public communications, brand identity, and team logistics. Manages cross-cultural coordination between Japan and US nodes.',
    members: 25,
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
            <span className="text-[#0A0A0A]/80 font-medium">30+ institutions</span> across Japan and the U.S. to build, test, and compete with a Mars rover, and to show that international engineering collaboration at the student level is both possible and world-class.
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
                  body: '30+ partner institutions across Japan and the U.S., giving KARURA unrivaled access to diverse engineering talent and research resources.',
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
          ACADEMIC NETWORK — Single flat grid
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
                Partner<br />Institutions
              </h2>
              <p className="text-[#0A0A0A]/45 text-xs leading-relaxed mb-8 max-w-[220px]">
                Students from these institutions form the engineering backbone of KARURA across all five departments.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#0A0A0A]/8 pb-3">
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#0A0A0A]/40">Japan</span>
                  <span className="font-mono text-sm font-bold text-[#0A0A0A]">27</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#0A0A0A]/8 pb-3">
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#0A0A0A]/40">United States</span>
                  <span className="font-mono text-sm font-bold text-[#0A0A0A]">4</span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#0A0A0A]/40">Total</span>
                  <span className="font-mono text-sm font-bold text-[#E63946]">31</span>
                </div>
              </div>
            </div>

            {/* Right: single flat grid, Texas A&M first, no country dividers */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-[#0A0A0A]/8">
              {universities.map((u, i) => (
                <motion.div
                  key={`${u.name}-${i}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.02 }}
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
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/40">Schedule</span>
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
                id={dept.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="grid md:grid-cols-[80px_200px_1fr_100px] gap-6 lg:gap-10 items-start py-8 scroll-mt-24"
              >
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#0A0A0A]/25 pt-1">
                  {dept.index}
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-[#0A0A0A] mb-1">{dept.title}</h3>
                  <p className="font-mono text-[9px] tracking-[0.1em] text-[#0A0A0A]/35 leading-relaxed">{dept.scope}</p>
                </div>
                <p className="text-[#0A0A0A]/50 text-sm leading-relaxed">{dept.body}</p>
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

      <Footer />
    </main>
  );
}