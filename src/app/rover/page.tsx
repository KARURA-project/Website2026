'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// ─── Data ────────────────────────────────────────────────────────────────────

const rovers = [
  {
    id: 'karura-3',
    designation: 'KARURA III',
    callsign: 'K-III',
    cycle: '2024 — 2026',
    status: 'ACTIVE BUILD',
    statusClass: 'text-[#E63946]',
    milestone: 'Historic URC Finals — First Japanese & International Team',
    description:
      'Third-generation competition platform built for the URC 2024 Finals. Features a fully autonomous navigation stack, 5-DOF manipulation arm, and modular science payload. Competed as the first international and first Japanese team to reach the URC Finals.',
    image:
      'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png',
    params: [
      { label: 'CONFIGURATION', value: '6-WHEEL DRIVE', unit: '' },
      { label: 'SUSPENSION', value: 'ROCKER-BOGIE', unit: '' },
      { label: 'DRIVE MOTORS', value: '6 × BRUSHLESS DC', unit: '' },
      { label: 'ARM DOF', value: '5', unit: 'degrees of freedom' },
      { label: 'LOCOMOTION', value: 'DIFFERENTIAL', unit: 'steering geometry' },
      { label: 'COMMS', value: '5.8 GHz', unit: 'RF + ROS2 bridge' },
      { label: 'COMPUTE', value: 'NVIDIA JETSON', unit: 'onboard SBC' },
      { label: 'POWER BUS', value: 'LiPo MULTI-CELL', unit: 'redundant rails' },
    ],
    subsystems: [
      'ROS2 Navigation Stack',
      'SLAM-based Localization',
      'Computer Vision Pipeline',
      '5-DOF Manipulator Arm',
      'Spectrometer Payload',
      'Soil Sample Collection',
      'Stereo Camera Array',
      'IMU + GPS Fusion',
    ],
  },
  {
    id: 'karura-2',
    designation: 'KARURA II',
    callsign: 'K-II',
    cycle: '2023 — 2024',
    status: 'RETIRED',
    statusClass: 'text-white/40',
    milestone: 'URC System Acceptance Review — Qualified',
    description:
      'Second-generation build focused on reliability and mobility improvements following lessons from KARURA I. Introduced a dedicated electrical architecture with centralized CAN-bus communication and an upgraded 5-DOF arm.',
    image:
      'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png',
    params: [
      { label: 'CONFIGURATION', value: '6-WHEEL DRIVE', unit: '' },
      { label: 'SUSPENSION', value: 'ROCKER-BOGIE', unit: '' },
      { label: 'DRIVE MOTORS', value: '6 × BRUSHLESS DC', unit: '' },
      { label: 'ARM DOF', value: '5', unit: 'degrees of freedom' },
      { label: 'COMMS', value: 'CAN-BUS', unit: 'centralized architecture' },
      { label: 'COMPUTE', value: 'RASPBERRY PI', unit: '+ co-processors' },
      { label: 'NAVIGATION', value: 'GPS + IMU', unit: 'waypoint-based' },
      { label: 'POWER BUS', value: 'LiPo PACK', unit: 'single rail' },
    ],
    subsystems: [
      'GPS Waypoint Navigation',
      'CAN-Bus Electrical Arch.',
      '5-DOF Manipulator Arm',
      'HD Camera System',
      'Basic Science Payload',
      'Object Detection (CV)',
      'Wireless RC Fallback',
      'Custom Motor Controllers',
    ],
  },
  {
    id: 'karura-1',
    designation: 'KARURA I',
    callsign: 'K-I',
    cycle: '2022 — 2023',
    status: 'ARCHIVED',
    statusClass: 'text-white/25',
    milestone: 'Program Launch — First Prototype Complete',
    description:
      "Founding prototype that established KARURA's core engineering framework and demonstrated the viability of the Japan–USA co-development model. Manual operation with basic sensing and a simple 3-DOF arm.",
    image:
      'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png',
    params: [
      { label: 'CONFIGURATION', value: '4-WHEEL DRIVE', unit: '' },
      { label: 'SUSPENSION', value: 'RIGID FRAME', unit: 'v1 prototype' },
      { label: 'ARM DOF', value: '3', unit: 'degrees of freedom' },
      { label: 'CONTROL', value: 'MANUAL RC', unit: 'radio 2.4 GHz' },
      { label: 'COMPUTE', value: 'RASPBERRY PI 4', unit: '' },
      { label: 'CAMERAS', value: '2 × STANDARD', unit: 'forward + arm' },
      { label: 'POWER', value: 'LiPo 14.8V', unit: 'basic distribution' },
      { label: 'BUILD TYPE', value: 'PROOF OF CONCEPT', unit: '' },
    ],
    subsystems: [
      'Manual Radio Control',
      '3-DOF Arm Prototype',
      'Standard Camera Feed',
      'Basic Telemetry',
      'Prototype Chassis',
      'International Co-Dev Model',
    ],
  },
];

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
      'Rover must operate a cache of hand tools — including levers, buttons, and valves — using only the robotic arm and end-effector.',
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
      { label: 'SUSPENSION', value: 'ROCKER-BOGIE 6-WHEEL' },
      { label: 'TRACTION', value: 'BRUSHLESS DC × 6 INDEPENDENT' },
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

const generationTimeline = [
  {
    year: '2022',
    label: 'GEN 01',
    designation: 'KARURA I',
    note: 'Program launch. First cross-Pacific co-development. 3-DOF prototype arm. Manual RC operation.',
    status: 'ARCHIVED',
  },
  {
    year: '2023',
    label: 'GEN 02',
    designation: 'KARURA II',
    note: 'CAN-bus electrical architecture. 5-DOF arm. GPS navigation. SAR qualification achieved.',
    status: 'RETIRED',
  },
  {
    year: '2024',
    label: 'GEN 03',
    designation: 'KARURA III',
    note: 'ROS2 stack. SLAM autonomy. URC Finals — historic milestone. Full science payload integration.',
    status: 'COMPETED',
  },
  {
    year: '2026',
    label: 'GEN 04',
    designation: 'KARURA IV',
    note: 'In active development. Upgraded autonomy, redesigned arm, next-gen science instruments.',
    status: 'IN DEV',
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function RoverPage() {
  const [activeRover, setActiveRover] = useState('karura-3');
  const current = rovers.find((r) => r.id === activeRover) || rovers[0];

  return (
    <main className="bg-[#0A0A0A] min-h-screen text-[#FAFAFA]">
      <Header />

      {/* ══════════════════════════════════════════
          HERO — Dark cinematic reveal
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
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/30">
              Engineering / Rover Program
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-display text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[0.92] tracking-tight text-[#FAFAFA] mb-8"
          >
            Mission<br />Hardware<br />
            <span className="text-white/20">Documentation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.22 }}
            className="text-white/40 text-sm leading-relaxed max-w-[400px] mb-10"
          >
            Three generations of competition-proven Mars rover hardware.
            Engineered across two countries, tested in Utah, refined for the next launch window.
          </motion.p>

          {/* System status strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap gap-6 border-t border-white/8 pt-8"
          >
            {[
              { label: 'ACTIVE PLATFORM', value: 'KARURA III' },
              { label: 'NEXT COMPETITION', value: 'URC 2026' },
              { label: 'BUILD STATUS', value: 'IN PROGRESS' },
            ].map((item) => (
              <div key={item.label}>
                <div className="font-mono text-[8px] tracking-[0.22em] uppercase text-white/25 mb-1">{item.label}</div>
                <div className="font-mono text-sm font-bold text-white/80">{item.value}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: rover image full-bleed */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="relative hidden lg:block"
        >
          <Image
            src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png"
            alt="KARURA Mars Rover hardware"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Left vignette — blends into dark canvas */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent pointer-events-none" />
          {/* Top vignette for header clearance */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0A0A0A] to-transparent pointer-events-none" />

          {/* Classification overlay */}
          <div className="absolute bottom-8 right-8 left-8">
            <div className="border border-white/10 px-5 py-3 flex items-center justify-between bg-[#0A0A0A]/60 backdrop-blur-sm">
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/30">KARURA III — Platform K-III</span>
              <span className="font-mono text-[9px] text-[#E63946] tracking-wider">URC FINALIST · 2024</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          GENERATION SELECTOR + SPEC MATRIX
      ══════════════════════════════════════════ */}
      <section className="border-t border-white/8 py-24">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

          {/* Section header */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-px bg-[#E63946]" />
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/30">Platform Registry</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#FAFAFA]">Rover Generations</h2>
          </div>

          {/* Generation selector tabs */}
          <div className="flex flex-wrap gap-px mb-0 bg-white/8">
            {rovers.map((r) => (
              <button
                key={r.id}
                onClick={() => setActiveRover(r.id)}
                className={`flex-1 min-w-[140px] px-6 py-4 text-left transition-colors duration-200 ${
                  activeRover === r.id
                    ? 'bg-[#FAFAFA] text-[#0A0A0A]'
                    : 'bg-[#0A0A0A] text-white/40 hover:text-white/70 hover:bg-white/5'
                }`}
              >
                <div className={`font-mono text-[8px] tracking-[0.2em] uppercase mb-1 ${activeRover === r.id ? 'text-[#0A0A0A]/40' : 'text-white/25'}`}>
                  {r.cycle}
                </div>
                <div className={`font-display text-sm font-bold ${activeRover === r.id ? 'text-[#0A0A0A]' : ''}`}>
                  {r.designation}
                </div>
              </button>
            ))}
          </div>

          {/* Rover detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="border border-white/8 border-t-0 grid lg:grid-cols-[1fr_380px]"
            >
              {/* Left: image + badge */}
              <div className="relative h-[360px] lg:h-[480px] overflow-hidden bg-[#111111]">
                <Image
                  src={current.image}
                  alt={current.designation}
                  fill
                  className="object-cover object-center opacity-80"
                />
                {/* Bottom-left status */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-[#0A0A0A]/80 backdrop-blur-sm px-5 py-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="font-display text-xl font-bold text-white mb-1">{current.designation}</div>
                        <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-white/40">{current.milestone}</div>
                      </div>
                      <div className={`font-mono text-[9px] tracking-[0.18em] uppercase font-bold whitespace-nowrap ${current.statusClass}`}>
                        {current.status}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: spec matrix + subsystems */}
              <div className="border-l border-white/8 flex flex-col">

                {/* Description */}
                <div className="px-7 py-6 border-b border-white/8">
                  <p className="text-white/50 text-xs leading-relaxed">{current.description}</p>
                </div>

                {/* Parameter matrix */}
                <div className="px-7 py-5 border-b border-white/8">
                  <div className="font-mono text-[8px] tracking-[0.2em] uppercase text-white/25 mb-4">System Parameters</div>
                  <div className="space-y-0 divide-y divide-white/5">
                    {current.params.map((p) => (
                      <div key={p.label} className="grid grid-cols-[1fr_auto] gap-4 py-2.5">
                        <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-white/30">{p.label}</span>
                        <div className="text-right">
                          <span className="font-mono text-[10px] font-bold text-[#FAFAFA]">{p.value}</span>
                          {p.unit && (
                            <span className="font-mono text-[8px] text-white/20 ml-1.5">{p.unit}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subsystems */}
                <div className="px-7 py-5 flex-1">
                  <div className="font-mono text-[8px] tracking-[0.2em] uppercase text-white/25 mb-3">Active Subsystems</div>
                  <div className="flex flex-wrap gap-1.5">
                    {current.subsystems.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[8px] tracking-[0.1em] uppercase px-2.5 py-1 border border-white/10 text-white/40"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GENERATION TIMELINE — Vertical precision
      ══════════════════════════════════════════ */}
      <section className="border-t border-white/8 py-24">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

          <div className="grid lg:grid-cols-[280px_1fr] gap-16 lg:gap-24">

            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-px bg-[#E63946]" />
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/30">Build History</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-[#FAFAFA] leading-tight">
                Platform<br />Progression
              </h2>
              <p className="text-white/30 text-xs leading-relaxed mt-4 max-w-[200px]">
                Each generation introduces compounding capability improvements over the prior build.
              </p>
            </div>

            {/* Timeline rail */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white/8 hidden md:block" />

              <div className="space-y-0 divide-y divide-white/8">
                {generationTimeline.map((gen, i) => (
                  <motion.div
                    key={gen.year}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.45 }}
                    className="relative grid sm:grid-cols-[100px_80px_1fr_80px] gap-4 lg:gap-8 items-start py-8 md:pl-10"
                  >
                    {/* Dot on rail */}
                    <div
                      className={`absolute left-0 top-9 w-1.5 h-1.5 -translate-x-[calc(50%+0.5px)] hidden md:block ${
                        gen.status === 'IN DEV' ? 'bg-[#E63946]' : 'bg-white/20'
                      }`}
                    />

                    {/* Year */}
                    <div className="font-mono text-[clamp(1.2rem,2.5vw,1.8rem)] font-bold text-[#FAFAFA]/80 leading-none">
                      {gen.year}
                    </div>

                    {/* Gen label */}
                    <div>
                      <div className="font-mono text-[8px] tracking-[0.2em] uppercase text-white/20 mb-1">{gen.label}</div>
                      <div className="font-mono text-[9px] tracking-[0.1em] text-white/50">{gen.designation}</div>
                    </div>

                    {/* Note */}
                    <p className="text-white/40 text-xs leading-relaxed">{gen.note}</p>

                    {/* Status badge */}
                    <div className="text-right">
                      <span
                        className={`font-mono text-[8px] tracking-[0.15em] uppercase px-2 py-1 border ${
                          gen.status === 'IN DEV'
                            ? 'border-[#E63946]/40 text-[#E63946]'
                            : gen.status === 'COMPETED'
                            ? 'border-white/20 text-white/50'
                            : 'border-white/8 text-white/20'
                        }`}
                      >
                        {gen.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          URC TASK EXPLAINER — Subsystem grid
      ══════════════════════════════════════════ */}
      <section className="border-t border-white/8 py-24">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

          {/* Header */}
          <div className="grid lg:grid-cols-[280px_1fr] gap-16 lg:gap-24 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-px bg-[#E63946]" />
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/30">Competition</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-[#FAFAFA] leading-tight">
                URC<br />Task Matrix
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-white/35 text-sm leading-relaxed max-w-[560px]">
                The University Rover Challenge comprises four scored tasks designed to simulate a functional Mars mission. Each task is directly mapped to a set of onboard hardware systems engineered to meet competition requirements.
              </p>
            </div>
          </div>

          {/* Task cards — dense specification blocks */}
          <div className="grid md:grid-cols-2 gap-px bg-white/8">
            {urcTasks.map((task, i) => (
              <motion.div
                key={task.index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#0A0A0A] p-8 lg:p-10"
              >
                {/* Task header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/20 mb-2">
                      TASK {task.index}
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#FAFAFA] leading-snug">
                      {task.name}
                    </h3>
                  </div>
                  <span className="font-mono text-[28px] font-bold text-white/5 leading-none select-none">
                    {task.index}
                  </span>
                </div>

                {/* Description */}
                <p className="text-white/45 text-xs leading-relaxed mb-2">{task.description}</p>
                <p className="text-white/25 text-[10px] leading-relaxed mb-7 italic">{task.challenge}</p>

                {/* Telemetry readouts */}
                <div className="border-t border-white/8 pt-5 space-y-0 divide-y divide-white/5">
                  <div className="font-mono text-[8px] tracking-[0.2em] uppercase text-white/20 pb-3">
                    Responsible Systems
                  </div>
                  {task.systems.map((sys) => (
                    <div key={sys.label} className="grid grid-cols-[1fr_auto] gap-4 py-2">
                      <span className="font-mono text-[9px] tracking-[0.1em] uppercase text-white/25">{sys.label}</span>
                      <span className="font-mono text-[9px] font-bold text-[#FAFAFA]/70 text-right">{sys.value}</span>
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
      <section className="border-t border-white/8 py-24">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

          <div className="grid lg:grid-cols-[280px_1fr] gap-16 lg:gap-24">

            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-px bg-[#E63946]" />
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/30">Architecture</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-[#FAFAFA] leading-tight">
                Subsystem<br />Inventory
              </h2>
            </div>

            <div className="divide-y divide-white/8 border-t border-b border-white/8">
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
                  <div className="font-mono text-[8px] tracking-[0.2em] uppercase text-white/20 pt-1">{sub.label}</div>
                  <div>
                    <div className="font-display text-sm font-bold text-[#FAFAFA] mb-1">{sub.title}</div>
                    <div className="font-mono text-[8px] tracking-[0.1em] uppercase text-white/25">{sub.dept}</div>
                  </div>
                  <p className="text-white/40 text-xs leading-relaxed">{sub.systems}</p>
                  <div className="md:text-right">
                    <Link
                      href={`/about#${sub.id === 'arm' ? 'mechanical' : sub.id === 'mobility' ? 'mechanical' : sub.id === 'electrical' ? 'electrical' : sub.id === 'software' ? 'software' : 'science'}`}
                      className="font-mono text-[8px] tracking-[0.15em] uppercase text-white/20 hover:text-white/50 transition-colors flex md:justify-end items-center gap-1.5 group"
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

      {/* ══════════════════════════════════════════
          CTA — Contact / Sponsors
          (Mars-red used here, once, for primary CTA)
      ══════════════════════════════════════════ */}
      <section className="border-t border-white/8 py-20">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <div>
              <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/25 mb-5">Technical Partnership</div>
              <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.8rem)] font-bold text-[#FAFAFA] leading-tight">
                Partner with KARURA's<br />Engineering Program
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-white/35 text-sm leading-relaxed max-w-sm">
                Technical sponsors gain direct access to a cross-Pacific engineering team building competition-level hardware. Logo placement, SAR review access, and team presentations available.
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                <Link
                  href="/support"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-[#E63946] text-white text-sm font-medium tracking-wide hover:bg-[#C1121F] transition-colors duration-200"
                >
                  Become a Technical Sponsor
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-7 py-3 border border-white/15 text-white/50 text-sm font-medium hover:border-white/30 hover:text-white/80 transition-colors duration-200"
                >
                  About the Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}