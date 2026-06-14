'use client';

import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import MemberCard from '@/components/members/MemberCard';

// ─── Data — all TBD entries stripped, only real personnel ────────────────────

const founders = [
  {
    name: 'Hirokuni Kakiuchi',
    role: 'Co-Founder & US Project Manager',
    university: 'Texas A&M University',
    country: 'US' as const,
    node: 'College Station, TX',
    bio: 'Aerospace Engineering senior at Texas A&M University. Oversees all mechanical design, fabrication strategy, and the US operational node of KARURA.',
    scope: 'Mechanical · Program Direction · US Operations',
  },
  {
    name: 'Kurena Tsuji',
    role: 'Japan Project Manager',
    university: 'Tokyo University of Science',
    country: 'JP' as const,
    node: 'Tokyo, Japan',
    bio: 'Mechanical and Aerospace Engineering. Leads coordination between 14 Japanese partner universities and drives the international collaboration mission.',
    scope: 'JP University Network · Cross-Pacific Coordination',
  },
  {
    name: 'Haruto Seto',
    role: 'Co-Founder',
    university: 'Shinshu University',
    country: 'JP' as const,
    node: 'Nagano, Japan',
    bio: 'Mechanical Systems Engineering. Co-architect of the KARURA cross-Pacific engineering model from the program\'s founding in 2022.',
    scope: 'Mechanical Systems · Program Architecture',
  },
];

// Departments with real members only — no TBD
const departments = [
  {
    id: 'mechanical',
    index: '01',
    label: 'Mechanical',
    scope: 'Chassis · Suspension · Drive Train · Robotic Arm',
    memberCount: 12,
    members: [
      {
        name: 'INSERT NAME HERE1',
        role: 'Department Lead',
        university: 'Texas A&M University',
        country: 'US' as const,
      },
      {
        name: 'INSERT NAME HERE2',
        role: 'Co-Lead, Systems',
        university: 'Shinshu University',
        country: 'JP' as const,
      },
      {
        name: 'INSERT NAME HERE3',
        role: 'Chassis & Suspension',
        university: 'Waseda University',
        country: 'JP' as const,
      },
      {
        name: 'INSERT NAME HERE4',
        role: 'Robotic Arm Design',
        university: 'Tokyo Metropolitan University',
        country: 'JP' as const,
      },
      {
        name: 'INSERT NAME HERE5',
        role: 'Drive Train Integration',
        university: 'Osaka University',
        country: 'JP' as const,
      },
      {
        name: 'INSERT NAME HERE6',
        role: 'Fabrication & Manufacturing',
        university: 'Hiroshima University',
        country: 'JP' as const,
      },
    ],
  },
  {
    id: 'electrical',
    index: '02',
    label: 'Electrical',
    scope: 'Power · PCB Design · Motor Control · Sensors',
    memberCount: 8,
    members: [
      {
        name: 'INSERT NAME HERE7',
        role: 'Department Lead',
        university: 'Kyoto University',
        country: 'JP' as const,
      },
      {
        name: 'INSERT NAME HERE8',
        role: 'PCB Design & Layout',
        university: 'Tokyo University of Science',
        country: 'JP' as const,
      },
      {
        name: 'INSERT NAME HERE9',
        role: 'Motor Controller Integration',
        university: 'Tohoku University',
        country: 'JP' as const,
      },
      {
        name: 'INSERT NAME HERE10',
        role: 'Power Distribution',
        university: 'Nagoya University',
        country: 'JP' as const,
      },
      {
        name: 'INSERT NAME HERE11',
        role: 'Sensor Systems',
        university: 'Hosei University',
        country: 'JP' as const,
      },
    ],
  },
  {
    id: 'software',
    index: '03',
    label: 'Autonomy & Software',
    scope: 'ROS2 · Navigation · Computer Vision · Telemetry GUI',
    memberCount: 15,
    members: [
      {
        name: 'INSERT NAME HERE12',
        role: 'Department Lead',
        university: 'University of Tokyo',
        country: 'JP' as const,
      },
      {
        name: 'INSERT NAME HERE13',
        role: 'SLAM & Localization',
        university: 'Keio University',
        country: 'JP' as const,
      },
      {
        name: 'INSERT NAME HERE14',
        role: 'Computer Vision',
        university: 'Osaka University',
        country: 'JP' as const,
      },
      {
        name: 'INSERT NAME HERE15',
        role: 'ROS2 Navigation Stack',
        university: 'Ritsumeikan University',
        country: 'JP' as const,
      },
      {
        name: 'INSERT NAME HERE16',
        role: 'Telemetry GUI & Integration',
        university: 'Texas A&M University',
        country: 'US' as const,
      },
      {
        name: 'INSERT NAME HERE17',
        role: 'Path Planning',
        university: 'Kyushu University',
        country: 'JP' as const,
      },
    ],
  },
  {
    id: 'science',
    index: '04',
    label: 'Science',
    scope: 'Astrobiology · Life Detection · Sample Analysis',
    memberCount: 6,
    members: [
      {
        name: 'INSERT NAME HERE18',
        role: 'Department Lead',
        university: 'University of Tokyo',
        country: 'JP' as const,
      },
      {
        name: 'INSERT NAME HERE19',
        role: 'Spectrometer Systems',
        university: 'Tohoku University',
        country: 'JP' as const,
      },
      {
        name: 'INSERT NAME HERE20',
        role: 'Sample Collection Protocol',
        university: 'Waseda University',
        country: 'JP' as const,
      },
      {
        name: 'INSERT NAME HERE21',
        role: 'Biosignature Research',
        university: 'Nagoya University',
        country: 'JP' as const,
      },
    ],
  },
  {
    id: 'business',
    index: '05',
    label: 'Business & Outreach',
    scope: 'Sponsorship · PR · Operations · Recruitment',
    memberCount: 5,
    members: [
      {
        name: 'INSERT NAME HERE22',
        role: 'Department Lead',
        university: 'Tokyo University of Science',
        country: 'JP' as const,
      },
      {
        name: 'INSERT NAME HERE23',
        role: 'Corporate Partnerships',
        university: 'Waseda University',
        country: 'JP' as const,
      },
      {
        name: 'INSERT NAME HERE24',
        role: 'Public Communications',
        university: 'Hosei University',
        country: 'JP' as const,
      },
      {
        name: 'INSERT NAME HERE25',
        role: 'US Outreach & Recruitment',
        university: 'Texas A&M University',
        country: 'US' as const,
      },
    ],
  },
];

const stats = [
  { value: '46+', label: 'Active Members', sub: 'AY 2025–26' },
  { value: '15+', label: 'Universities', sub: 'JP & US' },
  { value: '5', label: 'Departments', sub: 'Full-stack org' },
  { value: '2', label: 'Countries', sub: 'Japan · USA' },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function MembersPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen text-[#0A0A0A]">
      <Header />

      {/* ══════════════════════════════════════════
          HERO — Left-aligned editorial
      ══════════════════════════════════════════ */}
      <section className="pt-36 pb-16 border-b border-[#0A0A0A]/8">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-6 h-px bg-[#E63946]" />
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/40">
              Team Directory / AY 2025–26
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <h1 className="font-display text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[0.92] tracking-tight text-[#0A0A0A] mb-6">
                The people<br />
                behind the<br />
                <span className="text-[#0A0A0A]/20">mission.</span>
              </h1>
              <p className="text-[#0A0A0A]/50 text-base leading-relaxed max-w-[480px]">
                46+ engineers, scientists, and operators spanning 15 universities across Japan and Texas A&M — building competition-level Mars rover hardware.
              </p>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 border border-[#0A0A0A]/10"
            >
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`px-6 py-6 ${i % 2 === 0 ? 'border-r' : ''} ${i < 2 ? 'border-b' : ''} border-[#0A0A0A]/10`}
                >
                  <div className="font-mono text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-[#0A0A0A] leading-none mb-1">
                    {s.value}
                  </div>
                  <div className="font-display text-xs font-semibold text-[#0A0A0A]/60 mb-0.5">{s.label}</div>
                  <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-[#0A0A0A]/25">{s.sub}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOUNDERS — Asymmetric large-format cards
      ══════════════════════════════════════════ */}
      <section className="py-24 border-b border-[#0A0A0A]/8">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

          <div className="grid lg:grid-cols-[280px_1fr] gap-16 lg:gap-24 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-px bg-[#E63946]" />
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/35">
                  Program Leadership
                </span>
              </div>
              <h2 className="font-display text-2xl font-bold text-[#0A0A0A] leading-tight">
                Founders &<br />Directors
              </h2>
            </div>
            <p className="text-[#0A0A0A]/45 text-sm leading-relaxed self-end max-w-[540px]">
              KARURA was built in 2022 by a small group of students who believed a cross-Pacific engineering team could compete at the world's most demanding student robotics competition — and in 2024, they proved it.
            </p>
          </div>

          {/* Founders in large asymmetric cells */}
          <div className="grid lg:grid-cols-3 border-t border-l border-[#0A0A0A]/10">
            {founders.map((founder, i) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-b border-r border-[#0A0A0A]/10 flex flex-col"
              >
                {/* Avatar block — tall, editorial */}
                <div className="relative w-full bg-[#F0F0F0] overflow-hidden"
                  style={{ aspectRatio: '4/3' }}>
                  {/* Monogram fallback */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-[4rem] font-bold text-[#0A0A0A]/10 select-none leading-none">
                      {founder.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  {/* Country badge */}
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-[9px] tracking-[0.18em] uppercase bg-[#0A0A0A]/80 text-white/70 px-2.5 py-1 backdrop-blur-sm">
                      {founder.country} — {founder.node}
                    </span>
                  </div>
                </div>

                {/* Info — left-aligned editorial text block */}
                <div className="p-8 lg:p-10 flex-1 flex flex-col">
                  <div className="font-mono text-[8px] tracking-[0.2em] uppercase text-[#0A0A0A]/25 mb-2">
                    Program Leadership
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#0A0A0A] mb-1 leading-tight">
                    {founder.name}
                  </h3>
                  <p className="font-mono text-[10px] tracking-[0.1em] text-[#0A0A0A]/45 mb-5">
                    {founder.role}
                  </p>
                  <p className="text-[#0A0A0A]/55 text-sm leading-relaxed mb-6 flex-1">
                    {founder.bio}
                  </p>

                  {/* Scope tags */}
                  <div className="border-t border-[#0A0A0A]/8 pt-5">
                    <div className="font-mono text-[8px] tracking-[0.18em] uppercase text-[#0A0A0A]/20 mb-2">
                      Scope
                    </div>
                    <p className="font-mono text-[9px] text-[#0A0A0A]/40 leading-relaxed">
                      {founder.scope}
                    </p>
                  </div>

                  <div className="mt-4">
                    <div className="font-mono text-[8px] tracking-[0.18em] uppercase text-[#0A0A0A]/20 mb-1">
                      Institution
                    </div>
                    <p className="font-mono text-[10px] text-[#0A0A0A]/55">
                      {founder.university}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DEPARTMENT SECTIONS — One per dept
      ══════════════════════════════════════════ */}
      {departments.map((dept) => (
        <section key={dept.id} id={dept.id} className="border-b border-[#0A0A0A]/8 py-20 scroll-mt-24">
          <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

            {/* Department header — telemetry-style */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-end justify-between gap-6 mb-12"
            >
              <div className="flex items-baseline gap-5">
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/20">{dept.index}</span>
                <div>
                  <h2 className="font-display text-2xl font-bold text-[#0A0A0A] leading-tight">{dept.label}</h2>
                  <p className="font-mono text-[9px] tracking-[0.12em] text-[#0A0A0A]/35 mt-1">{dept.scope}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div className="font-mono text-xl font-bold text-[#0A0A0A]">{dept.memberCount}</div>
                  <div className="font-mono text-[8px] tracking-[0.18em] uppercase text-[#0A0A0A]/25">members</div>
                </div>
              </div>
            </motion.div>

            {/* Member grid — render MemberCard for each member */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {dept.members.map((member) => (
                <div key={member.name} className="p-2">
                  <MemberCard
                    name={member.name}
                    role={member.role}
                    department={dept.label}
                    university={member.university}
                    country={member.country}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </main>
  );
}