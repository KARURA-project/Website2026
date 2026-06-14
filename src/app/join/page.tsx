// src/app/join/page.tsx
'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

const standings = [
  {
    year: '2022',
    final: '42.1',
    science: '10.2',
    delivery: '9.0',
    equipment: '8.3',
    autonomy: '14.6',
    standing: '31ST',
  },
  {
    year: '2023',
    final: '67.9',
    science: '15.4',
    delivery: '12.2',
    equipment: '17.1',
    autonomy: '23.2',
    standing: '14TH',
  },
  {
    year: '2024',
    final: '82.4',
    science: '18.9',
    delivery: '16.7',
    equipment: '20.1',
    autonomy: '26.7',
    standing: 'FINALS',
  },
  {
    year: '2026',
    final: 'ACTIVE',
    science: '--',
    delivery: '--',
    equipment: '--',
    autonomy: '--',
    standing: 'TBD',
  },
];

const positions = [
  {
    id: '01',
    department: 'AUTONOMY',
    openings: '03',
    commitment: '6–10 HRS/WK',
    location: 'REMOTE + TEXAS',
    responsibilities: [
      'ROS2 Navigation',
      'SLAM & Localization',
      'Computer Vision',
      'Simulation',
    ],
  },
  {
    id: '02',
    department: 'MECHANICAL',
    openings: '04',
    commitment: '6–12 HRS/WK',
    location: 'REMOTE + TEXAS',
    responsibilities: [
      'SolidWorks',
      'FEA',
      'Suspension Design',
      'Manufacturing',
    ],
  },
  {
    id: '03',
    department: 'ELECTRICAL',
    openings: '02',
    commitment: '5–10 HRS/WK',
    location: 'REMOTE + TEXAS',
    responsibilities: [
      'PCB Design',
      'CAN Integration',
      'Power Systems',
      'Embedded Debugging',
    ],
  },
  {
    id: '04',
    department: 'SCIENCE',
    openings: '02',
    commitment: '4–8 HRS/WK',
    location: 'REMOTE',
    responsibilities: [
      'Astrobiology',
      'Spectrometry',
      'Sampling Protocols',
      'Field Validation',
    ],
  },
  {
    id: '05',
    department: 'BUSINESS',
    openings: '02',
    commitment: '4–6 HRS/WK',
    location: 'REMOTE',
    responsibilities: [
      'Sponsors',
      'Grant Writing',
      'Operations',
      'Outreach',
    ],
  },
];

const pipeline = [
  {
    id: '01',
    title: 'APPLICATION',
    body:
      'Submit your application and identify your preferred department and technical interests.',
  },
  {
    id: '02',
    title: 'SCREENING',
    body:
      'Sub-team leads review portfolios, coursework, projects, and prior experience.',
  },
  {
    id: '03',
    title: 'SHADOW SPRINT',
    body:
      'Complete a short real-world engineering exercise alongside active members.',
  },
  {
    id: '04',
    title: 'NODE ASSIGNMENT',
    body:
      'Students are assigned to Texas deployment crews or remote Japanese collaboration nodes.',
  },
  {
    id: '05',
    title: 'TOOLCHAIN ACCESS',
    body:
      'Receive GitHub, Discord, CAD, documentation, and communication infrastructure access.',
  },
  {
    id: '06',
    title: 'ACTIVE OPERATIONS',
    body:
      'Transition directly into the competition cycle and contribute to hardware.',
  },
];

export default function JoinPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen">
      <Header />

      {/* HERO */}
      <section className="pt-36 pb-20 border-b border-[#0A0A0A]/8">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-6 h-px bg-[#0A0A0A]" />

            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/40">
              Recruitment & Competition Hub
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="font-display text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.92] tracking-tight text-[#0A0A0A]"
          >
            JOIN THE
            <br />
            TEAM
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="max-w-[520px] mt-8 text-sm leading-relaxed text-[#0A0A0A]/50"
          >
            Build competition-proven Mars rover systems alongside students
            across Japan and Texas. Explore open roles, understand our
            international workflow, and become part of the next URC campaign.
          </motion.p>

        </div>
      </section>

      {/* 60 / 40 SPLIT */}
      <section>
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

          <div className="grid lg:grid-cols-[1.4fr_0.9fr] gap-16 py-24">

            {/* LEFT COLUMN */}
            <div>

              {/* HISTORICAL STANDINGS */}
              <section className="mb-24">

                <div className="flex items-center gap-3 mb-5">
                  <span className="w-6 h-px bg-[#0A0A0A]" />

                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/40">
                    Historical Standings Hub
                  </span>
                </div>

                <h2 className="font-display text-3xl font-bold mb-8">
                  Competition Metrics
                </h2>

                <div className="border border-[#0A0A0A]/10">

                  <div className="grid grid-cols-7 border-b border-[#0A0A0A]/10 bg-[#0A0A0A]/[0.03]">

                    {[
                      'YEAR',
                      'FINAL',
                      'SCI',
                      'DEL',
                      'EQ',
                      'AUTO',
                      'STAND',
                    ].map((item) => (
                      <div
                        key={item}
                        className="px-4 py-4 font-mono text-[10px] tracking-[0.18em] uppercase text-[#0A0A0A]/40"
                      >
                        {item}
                      </div>
                    ))}

                  </div>

                  {standings.map((row) => (
                    <div
                      key={row.year}
                      className="grid grid-cols-7 border-b last:border-b-0 border-[#0A0A0A]/10"
                    >
                      <div className="px-4 py-5 font-mono font-bold">
                        {row.year}
                      </div>

                      <div className="px-4 py-5 font-mono">
                        {row.final}
                      </div>

                      <div className="px-4 py-5 font-mono">
                        {row.science}
                      </div>

                      <div className="px-4 py-5 font-mono">
                        {row.delivery}
                      </div>

                      <div className="px-4 py-5 font-mono">
                        {row.equipment}
                      </div>

                      <div className="px-4 py-5 font-mono">
                        {row.autonomy}
                      </div>

                      <div className="px-4 py-5 font-mono font-bold">
                        {row.standing}
                      </div>
                    </div>
                  ))}

                </div>

              </section>

              {/* OPEN POSITIONS */}
              <section>

                <div className="flex items-center gap-3 mb-5">
                  <span className="w-6 h-px bg-[#0A0A0A]" />

                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/40">
                    Open Positions Funnel
                  </span>
                </div>

                <h2 className="font-display text-3xl font-bold mb-10">
                  Current Recruitment Tracks
                </h2>

                <div className="divide-y divide-[#0A0A0A]/10 border-y border-[#0A0A0A]/10">

                  {positions.map((position) => (
                    <div
                      key={position.id}
                      className="grid md:grid-cols-[80px_1fr_150px] gap-8 py-8"
                    >
                      <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#0A0A0A]/30">
                        {position.id}
                      </div>

                      <div>
                        <h3 className="font-display text-lg font-bold mb-4">
                          {position.department}
                        </h3>

                        <div className="flex flex-wrap gap-2">
                          {position.responsibilities.map((item) => (
                            <span
                              key={item}
                              className="px-3 py-2 border border-[#0A0A0A]/10 font-mono text-[10px] tracking-[0.15em] uppercase"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">

                        <div>
                          <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#0A0A0A]/30">
                            Openings
                          </div>

                          <div className="font-mono text-xl font-bold">
                            {position.openings}
                          </div>
                        </div>

                        <div>
                          <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#0A0A0A]/30">
                            Commitment
                          </div>

                          <div className="font-mono text-xs">
                            {position.commitment}
                          </div>
                        </div>

                        <div>
                          <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#0A0A0A]/30">
                            Location
                          </div>

                          <div className="font-mono text-xs">
                            {position.location}
                          </div>
                        </div>

                      </div>
                    </div>
                  ))}

                </div>

              </section>

            </div>
            {/* RIGHT COLUMN */}
            <aside className="space-y-16">

              {/* STICKY PORTAL */}
              <div className="lg:sticky lg:top-28">

                <div className="border border-[#0A0A0A]/10 p-8">

                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/35 mb-4">
                    Recruitment Portal
                  </div>

                  <h2 className="font-display text-3xl font-bold leading-tight mb-6">
                    Build the next generation of Martian systems.
                  </h2>

                  <p className="text-sm leading-relaxed text-[#0A0A0A]/50 mb-8">
                    From autonomous navigation and science instrumentation
                    to sponsorship strategy and field operations, every
                    subsystem contributes directly to competition readiness.
                  </p>

                  <div className="space-y-5 border-y border-[#0A0A0A]/10 py-6">

                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#0A0A0A]/35">
                        Campaign
                      </span>

                      <span className="font-mono text-xs">
                        URC 2026
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#0A0A0A]/35">
                        Collaboration Nodes
                      </span>

                      <span className="font-mono text-xs">
                        TX / JP
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#0A0A0A]/35">
                        Positions Open
                      </span>

                      <span className="font-mono text-xs">
                        13 ACTIVE
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#0A0A0A]/35">
                        Deployment
                      </span>

                      <span className="font-mono text-xs">
                        COLLEGE STATION
                      </span>
                    </div>

                  </div>

                  {/* ONLY MARS RED ELEMENT */}
                  <a
                    href="https://forms.gle/karuraRecruitment2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 block w-full bg-[#E63946] text-white text-center px-6 py-4 font-display font-semibold tracking-wide transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    SUBMIT APPLICATION
                  </a>

                </div>

              </div>

              {/* PIPELINE */}
              <section>

                <div className="flex items-center gap-3 mb-5">
                  <span className="w-6 h-px bg-[#0A0A0A]" />

                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/40">
                    Cross-Institutional Pipeline
                  </span>
                </div>

                <h2 className="font-display text-3xl font-bold mb-10">
                  How We Operate Across Oceans
                </h2>

                <div className="relative">

                  {/* Vertical Rail */}
                  <div className="absolute left-[18px] top-0 bottom-0 w-px bg-[#0A0A0A]/10" />

                  <div className="space-y-10">

                    {pipeline.map((step) => (
                      <div
                        key={step.id}
                        className="relative pl-16"
                      >

                        <div className="absolute left-0 top-0 w-9 h-9 border border-[#0A0A0A] bg-[#FAFAFA] flex items-center justify-center font-mono text-[10px] tracking-[0.15em]">
                          {step.id}
                        </div>

                        <div>

                          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#0A0A0A]/35 mb-2">
                            {step.title}
                          </div>

                          <p className="text-sm leading-relaxed text-[#0A0A0A]/55">
                            {step.body}
                          </p>

                        </div>

                      </div>
                    ))}

                  </div>

                </div>

              </section>

            </aside>

          </div>

        </div>
      </section>

      {/* FINAL SECTION */}
      <section className="border-t border-[#0A0A0A]/8 py-24">

        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

          <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">

            <div>

              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/35 mb-4">
                Engineering Momentum
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
                Build hardware that competes.
                <br />
                Join a team that scales globally.
              </h2>

            </div>

            <a
              href="https://forms.gle/karuraRecruitment2026"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#0A0A0A] px-8 py-4 font-mono text-[11px] tracking-[0.22em] uppercase hover:bg-[#0A0A0A] hover:text-white transition-colors duration-200"
            >
              Learn More
            </a>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}