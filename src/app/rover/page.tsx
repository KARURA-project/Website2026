'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { rovers, generationTimeline } from '@/data/rovers';

// ─── Data ────────────────────────────────────────────────────────────────────
// Rover generation data (specs, subsystems, milestones) now lives in
// src/data/rovers.ts — shared with the home page's RoverHistory section
// and /about's program timeline. Only page-specific content (URC task
// breakdown, subsystem inventory) stays local to this file.

const urcTasks = [
  {
    index: '01',
    name: 'Autonomous Navigation',
    description:
      'Rover must navigate 1+ km of rocky Mars-analog terrain, identifying and reaching GPS waypoints without any human intervention.',
    challenge: 'No-comms zone for portions of the run. Terrain includes loose rock, slopes, and dry river beds.',
    systems: [
      { label: 'PRIMARY SENSOR', value: 'STEREO CAMERA + LiDAR' },
      { label: 'LOCALIZATION', value: 'SLAM + GPS/IMU FUSION' },
      { label: 'STACK', value: 'ROS2 NAV2 + CUSTOM PLANNER' },
      { label: 'OBSTACLE AVOID', value: 'COSTMAP 2D + VOXEL GRID' },
      { label: 'COMMS CUTOFF', value: 'ZERO OPERATOR INPUT' },
    ],
  },
  {
    index: '02',
    name: 'Equipment Servicing',
    description:
      'The rover must operate a cache of hand tools, including levers, buttons, and valves, using only the robotic arm and end-effector.',
    challenge: 'Requires sub-centimeter arm precision. All tools resemble real-world industrial hardware.',
    systems: [
      { label: 'ARM CONFIG', value: '5-DOF SERIAL MANIPULATOR' },
      { label: 'END EFFECTOR', value: 'CUSTOM GRIPPER + TOOL ADAPTER' },
      { label: 'DEPTH SENSING', value: 'STEREO CAMERA + ARUCO' },
      { label: 'CONTROL MODE', value: 'OPERATOR TELEOPERATION' },
      { label: 'FEEDBACK', value: 'JOINT ENCODER + FORCE EST.' },
    ],
  },
  {
    index: '03',
    name: 'Extreme Retrieval',
    description:
      'Navigate extreme terrain gradients and narrow passages to retrieve a cache object from a designated location and return it to base.',
    challenge: 'Maximum slope angles exceed 40°. Terrain designed to challenge all 6 wheels simultaneously.',
    systems: [
      { label: 'SUSPENSION', value: 'ROCKER-BOGIE 4-WHEEL' },
      { label: 'TRACTION', value: 'BRUSHLESS DC × 4 INDEPENDENT' },
      { label: 'SLOPE LIMIT', value: 'DESIGN TARGET: 45°' },
      { label: 'TERRAIN TYPE', value: 'LOOSE SEDIMENT / ROCK FIELD' },
      { label: 'RETRIEVAL', value: '5-DOF ARM + CLOSED GRIPPER' },
    ],
  },
  {
    index: '04',
    name: 'Science Mission',
    description:
      'Identify, document, and collect soil and rock samples from a designated site. Perform onboard analysis to detect potential biosignatures.',
    challenge: 'Samples must be documented in-situ with GPS coordinates, images, and onboard spectral analysis.',
    systems: [
      { label: 'SAMPLING', value: 'DRILL + PASSIVE SCOOP ARM' },
      { label: 'SPECTROSCOPY', value: 'PORTABLE SPECTROMETER' },
      { label: 'IMAGING', value: 'MACRO CAMERA + MICROSCOPE' },
      { label: 'GPS LOG', value: 'RTK-CAPABLE MODULE' },
      { label: 'ANALYSIS', value: 'ONBOARD CHEMISTRY PROTOCOL' },
    ],
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function RoverPage() {
  const [activeRover, setActiveRover] = useState('karura-3');
  const current = rovers.find((r) => r.id === activeRover) || rovers[0];

  return (
    <main className="bg-[#FAFAFA] min-h-screen text-[#0A0A0A]">
      <Header />

      {/* ══════════════════════════════════════════
          HERO — Light editorial split
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen grid lg:grid-cols-[1fr_48%] overflow-hidden">

        {/* Left: text */}
        <div className="flex flex-col justify-end px-8 md:px-16 lg:px-20 xl:px-28 pt-36 pb-16 lg:pb-20 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-6 h-px bg-[#E63946]" />
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/40">
              Engineering / Rover Program
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-display text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[0.92] tracking-tight text-[#0A0A0A] mb-8"
          >
            Mission<br />Hardware<br />
            <span className="text-[#0A0A0A]/15">Documentation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.22 }}
            className="text-[#0A0A0A]/50 text-sm leading-relaxed max-w-[400px] mb-10"
          >
            Three generations of competition-proven Mars rover hardware.
            Engineered across two countries, tested in Utah, refined for the next launch window.
          </motion.p>

          {/* System status strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap gap-6 border-t border-[#0A0A0A]/10 pt-8"
          >
            {[
              { label: 'ACTIVE PLATFORM', value: 'KARURA VI' },
              { label: 'NEXT COMPETITION', value: 'URC 2027' },
              { label: 'BUILD STATUS', value: 'IN PROGRESS' },
            ].map((item) => (
              <div key={item.label}>
                <div className="font-mono text-[8px] tracking-[0.22em] uppercase text-[#0A0A0A]/30 mb-1">{item.label}</div>
                <div className="font-mono text-sm font-bold text-[#0A0A0A]/80">{item.value}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: rover image full-bleed */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="relative hidden lg:block bg-[#F0F0F0]"
        >
          <Image
            src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png"
            alt="KARURA Mars Rover hardware"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Left vignette — blends into light canvas */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent pointer-events-none" />

          {/* Hardware classification overlay badge */}
          <div className="absolute bottom-8 left-8 right-8">
            <div className="bg-[#0A0A0A]/80 backdrop-blur-sm px-5 py-3 flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/60">
                KARURA: URC Finals 2026
              </span>
              <span className="font-mono text-[10px] text-[#E63946] tracking-wider">
                FINALIST
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          GENERATION SELECTOR — tab strip
      ══════════════════════════════════════════ */}
      <div className="border-y border-[#0A0A0A]/8 bg-[#FAFAFA] sticky top-[64px] z-30">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">
          <div className="flex items-stretch divide-x divide-[#0A0A0A]/8 overflow-x-auto">
            {rovers.map((r) => (
              <button
                key={r.id}
                onClick={() => setActiveRover(r.id)}
                className={`flex-shrink-0 flex flex-col gap-0.5 px-6 py-5 text-left transition-colors duration-200 ${
                  activeRover === r.id
                    ? 'bg-[#0A0A0A] text-[#FAFAFA]'
                    : 'hover:bg-[#0A0A0A]/4 text-[#0A0A0A]'
                }`}
              >
                <span className={`font-mono text-[8px] tracking-[0.22em] uppercase ${activeRover === r.id ? 'text-white/40' : 'text-[#0A0A0A]/30'}`}>
                  {r.callsign}
                </span>
                <span className="font-display text-sm font-bold">{r.designation}</span>
                <span className={`font-mono text-[9px] ${r.statusClass} ${activeRover === r.id && r.status !== 'ACTIVE BUILD' ? 'opacity-50' : ''}`}>
                  {r.status}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          ACTIVE ROVER DETAIL — Parameter grid
      ══════════════════════════════════════════ */}
      <AnimatePresence mode="wait">
        <motion.section
          key={current.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4 }}
          className="py-20 border-b border-[#0A0A0A]/8"
        >
          <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

            <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-start">

              {/* Left — specs */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-6 h-px bg-[#E63946]" />
                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/35">{current.cycle}</span>
                </div>
                <h2 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] font-bold text-[#0A0A0A] leading-tight mb-2">
                  {current.designation}
                </h2>
                <p className={`font-mono text-sm mb-8 ${current.statusClass}`}>{current.milestone}</p>
                <p className="text-[#0A0A0A]/55 text-sm leading-relaxed max-w-[500px] mb-10">
                  {current.description}
                </p>

                {/* Parameter table */}
                <div className="border-t border-[#0A0A0A]/8">
                  {current.params.map((p, i) => (
                    <div key={i} className="grid grid-cols-[140px_1fr_auto] gap-4 items-baseline py-3.5 border-b border-[#0A0A0A]/6">
                      <span className="font-mono text-[8px] tracking-[0.18em] uppercase text-[#0A0A0A]/25">{p.label}</span>
                      <span className="font-mono text-sm font-bold text-[#0A0A0A]">{p.value}</span>
                      {p.unit && <span className="font-mono text-[9px] text-[#0A0A0A]/30 text-right">{p.unit}</span>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — image + subsystems */}
              <div className="flex flex-col gap-8">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#F0F0F0]">
                  <Image
                    src={current.image}
                    alt={current.designation}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Subsystems checklist */}
                <div className="border border-[#0A0A0A]/8 p-6">
                  <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#0A0A0A]/30 mb-5">Active Subsystems</div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                    {current.subsystems.map((sys) => (
                      <div key={sys} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#E63946] rounded-full shrink-0" />
                        <span className="font-mono text-[10px] text-[#0A0A0A]/60">{sys}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>

      {/* ══════════════════════════════════════════
          GENERATION TIMELINE
      ══════════════════════════════════════════ */}
      <section className="border-b border-[#0A0A0A]/8 py-20">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

          <div className="flex items-center gap-3 mb-12">
            <span className="w-6 h-px bg-[#E63946]" />
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/35">Program Timeline</span>
          </div>

          <div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#0A0A0A]/8 border border-[#0A0A0A]/8">
            {generationTimeline.map((gen, i) => (
              <motion.div
                key={gen.year}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="px-8 py-8"
              >
                <div className="font-mono text-[8px] tracking-[0.2em] uppercase text-[#0A0A0A]/25 mb-1">{gen.label}</div>
                <div className="font-mono text-2xl font-bold text-[#0A0A0A] mb-1">{gen.year}</div>
                <div className="font-display text-sm font-bold text-[#0A0A0A] mb-3">{gen.designation}</div>
                <p className="text-[#0A0A0A]/45 text-xs leading-relaxed mb-4">{gen.note}</p>
                <span className={`font-mono text-[9px] tracking-[0.15em] uppercase ${gen.status === 'IN DEV' ? 'text-[#E63946]' : 'text-[#0A0A0A]/25'}`}>
                  {gen.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          URC TASKS — Competition brief
      ══════════════════════════════════════════ */}
      <section className="border-b border-[#0A0A0A]/8 py-24">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

          <div className="grid lg:grid-cols-[280px_1fr] gap-16 lg:gap-24 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-px bg-[#E63946]" />
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/35">Competition</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-[#0A0A0A] leading-tight">
                URC Task<br />Breakdown
              </h2>
            </div>
            <p className="text-[#0A0A0A]/50 text-sm leading-relaxed self-end max-w-[560px]">
              The University Rover Challenge scores teams across four mission categories. Each task is evaluated against Mars-analog conditions in the Utah desert, with scoring weighted by task completion percentage and time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-[#0A0A0A]/8">
            {urcTasks.map((task, i) => (
              <motion.div
                key={task.index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="border-b border-r border-[#0A0A0A]/8 p-8 flex flex-col"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="font-mono text-[8px] tracking-[0.2em] uppercase text-[#0A0A0A]/25 mb-2">
                      TASK {task.index}
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#0A0A0A] leading-snug">
                      {task.name}
                    </h3>
                  </div>
                  <span className="font-mono text-[28px] font-bold text-[#0A0A0A]/5 leading-none select-none">
                    {task.index}
                  </span>
                </div>

                <p className="text-[#0A0A0A]/50 text-xs leading-relaxed mb-2">{task.description}</p>
                <p className="text-[#0A0A0A]/30 text-[10px] leading-relaxed mb-7 italic">{task.challenge}</p>

                <div className="border-t border-[#0A0A0A]/8 pt-5 space-y-0 divide-y divide-[#0A0A0A]/6 mt-auto">
                  <div className="font-mono text-[8px] tracking-[0.2em] uppercase text-[#0A0A0A]/20 pb-3">
                    Responsible Systems
                  </div>
                  {task.systems.map((sys) => (
                    <div key={sys.label} className="grid grid-cols-[1fr_auto] gap-4 py-2">
                      <span className="font-mono text-[9px] tracking-[0.1em] uppercase text-[#0A0A0A]/25">{sys.label}</span>
                      <span className="font-mono text-[9px] font-bold text-[#0A0A0A]/60 text-right">{sys.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SUBSYSTEMS OVERVIEW — Full inventory
      ══════════════════════════════════════════ */}
      <section className="border-b border-[#0A0A0A]/8 py-24">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

          <div className="grid lg:grid-cols-[280px_1fr] gap-16 lg:gap-24">

            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-px bg-[#E63946]" />
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/35">Architecture</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-[#0A0A0A] leading-tight">
                Subsystem<br />Inventory
              </h2>
            </div>

            <div className="divide-y divide-[#0A0A0A]/8 border-t border-b border-[#0A0A0A]/8">
              {[
                {
                  id: 'mobility',
                  label: 'MOBILITY',
                  title: 'Drive & Suspension',
                  dept: 'Mechanical',
                  systems: '6-wheel independent drive · Rocker-bogie passive suspension · Brushless DC motors · Differential steering geometry',
                },
                {
                  id: 'arm',
                  label: 'MANIPULATION',
                  title: 'Robotic Arm',
                  dept: 'Mechanical / Electrical',
                  systems: '5-DOF serial manipulator · Custom end-effector · Joint encoders · Tool-change interface · Force estimation via current sensing',
                },
                {
                  id: 'electrical',
                  label: 'ELECTRICAL',
                  title: 'Power & Communications',
                  dept: 'Electrical',
                  systems: 'Multi-cell LiPo architecture · CAN-bus backbone · Custom PCB motor controllers · 5.8 GHz RF comms · Redundant E-stop',
                },
                {
                  id: 'software',
                  label: 'AUTONOMY',
                  title: 'Navigation & Vision Stack',
                  dept: 'Software',
                  systems: 'ROS2 Humble · Nav2 planner · SLAM Toolbox · Stereo depth estimation · YOLO-based object detection · Operator GUI',
                },
                {
                  id: 'science',
                  label: 'SCIENCE',
                  title: 'Onboard Payload',
                  dept: 'Science',
                  systems: 'Portable spectrometer · Soil drill + passive scoop · Macro camera · GPS coordinate logging · Onboard analysis protocol',
                },
              ].map((sub, i) => (
                <motion.div
                  key={sub.id}
                  id={sub.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="grid md:grid-cols-[80px_180px_1fr_120px] gap-6 lg:gap-10 items-start py-7 scroll-mt-24"
                >
                  <div className="font-mono text-[8px] tracking-[0.2em] uppercase text-[#0A0A0A]/20 pt-1">{sub.label}</div>
                  <div>
                    <div className="font-display text-sm font-bold text-[#0A0A0A] mb-1">{sub.title}</div>
                    <div className="font-mono text-[8px] tracking-[0.1em] uppercase text-[#0A0A0A]/25">{sub.dept}</div>
                  </div>
                  <p className="text-[#0A0A0A]/45 text-xs leading-relaxed">{sub.systems}</p>
                  <div className="md:text-right">
                    <Link
                      href={`/about#${sub.id === 'arm' ? 'mechanical' : sub.id === 'mobility' ? 'mechanical' : sub.id === 'electrical' ? 'electrical' : sub.id === 'software' ? 'software' : 'science'}`}
                      className="font-mono text-[8px] tracking-[0.15em] uppercase text-[#0A0A0A]/20 hover:text-[#0A0A0A]/50 transition-colors flex md:justify-end items-center gap-1.5 group"
                    >
                      <span className="w-3 h-px bg-current" />
                      Team
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}