// src/app/join/page.tsx
'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

const positions = [
  {
    id: '01',
    department: 'Software',
    openings: '03',
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
    body: 'Submit your application and identify your preferred department and technical interests.',
  },
  {
    id: '02',
    title: 'INTERVIEW',
    body: 'Sub-team leads review portfolios, coursework, projects, and prior experience.',
  },
  {
    id: '03',
    title: 'ONBOARDING',
    body: 'Receive a project overview and complete the onboarding training for your department',
  },
  {
    id: '04',
    title: 'SUBTEAM ASSIGNMENT',
    body: 'Placed on a sub-team based on your skills, interests, and availability to contribute to the project.',
  },
];

export default function JoinPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen">
      <Header />

      {/* ══════════════════════════════════════════
          HERO — Split layout matching about page
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[72vh] grid lg:grid-cols-[1fr_60%] overflow-hidden border-b border-[#0A0A0A]/8">

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
              Recruitment &amp; Deployment
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-display text-[clamp(2.8rem,5.5vw,5rem)] font-bold leading-[0.95] tracking-tight text-[#0A0A0A] mb-6"
          >
            Join<br />
            The<br />
            Team
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-[#0A0A0A]/50 text-base leading-relaxed max-w-[460px]"
          >
            Build competition-proven Mars rover systems alongside students across Japan and Texas. Explore open roles, understand our international workflow, and become part of the next URC campaign.
          </motion.p>
        </div>

        {/* Right: rover image, full-bleed */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:block bg-[#0A0A0A]"
        >
          <Image
            src="/Images/Copy of IMG_9569.webp"
            alt="KARURA Mars Rover"
            fill
            priority
            className="object-cover object-center opacity-90"
          />
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#FAFAFA] to-transparent pointer-events-none" />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          MAIN CONTENT — 60/40 split
      ══════════════════════════════════════════ */}
      <section>
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">
          <div className="grid lg:grid-cols-[1.4fr_0.9fr] gap-16 py-24">

            {/* LEFT COLUMN — Open Positions */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-6 h-px bg-[#E63946]" />
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/40">
                  Open Positions
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
                      </div>
                      <div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN — Sticky portal + Pipeline */}
            <aside className="space-y-16">

              {/* Sticky portal card */}
              <div className="lg:sticky lg:top-28">
                <div className="border border-[#0A0A0A]/10 p-8">

                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/35 mb-4">
                    Recruitment Portal
                  </div>

                  <h2 className="font-display text-3xl font-bold leading-tight mb-6">
                    Build the next generation of Martian systems.
                  </h2>

                  <p className="text-sm leading-relaxed text-[#0A0A0A]/50 mb-8">
                    From autonomous navigation and science instrumentation to sponsorship strategy and field operations, every subsystem contributes directly to competition readiness.
                  </p>

                  <div className="space-y-5 border-y border-[#0A0A0A]/10 py-6">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#0A0A0A]/35">
                        Campaign
                      </span>
                      <span className="font-mono text-xs">URC 2026</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#0A0A0A]/35">
                        Collaboration Nodes
                      </span>
                      <span className="font-mono text-xs">TX / JP</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#0A0A0A]/35">
                        Positions Open
                      </span>
                      <span className="font-mono text-xs">13 ACTIVE</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#0A0A0A]/35">
                        Deployment
                      </span>
                      <span className="font-mono text-xs">COLLEGE STATION</span>
                    </div>
                  </div>

                  <a
                    href="https://docs.google.com/forms/d/1MJhQgfIRbGO-Up2x9Sr15ocGia40k2A-0Nlz3ijXtl8/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 block w-full bg-[#E63946] text-white text-center px-6 py-4 font-display font-semibold tracking-wide transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    SUBMIT APPLICATION
                  </a>
                </div>
              </div>

              {/* Pipeline */}
              <section>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-6 h-px bg-[#E63946]" />
                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/40">
                    Cross-Institutional Pipeline
                  </span>
                </div>

                <h2 className="font-display text-3xl font-bold mb-10">
                  How We Operate Across Oceans
                </h2>

                <div className="relative">
                  <div className="absolute left-[18px] top-0 bottom-0 w-px bg-[#0A0A0A]/10" />
                  <div className="space-y-10">
                    {pipeline.map((step) => (
                      <div key={step.id} className="relative pl-16">
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

      <Footer />
    </main>
  );
}