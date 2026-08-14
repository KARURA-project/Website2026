'use client';

import { useTranslations } from 'next-intl';
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

// ─── Component ───────────────────────────────────────────────────────────────

export default function RoverPage() {
  const t = useTranslations('rover');

  const urcTasks = [
    {
      index: '01',
      name: t('tasks.navigation.name'),
      description: t('tasks.navigation.description'),
      challenge: t('tasks.navigation.challenge'),
      systems: [
        { label: t('tasks.navigation.systems.primarySensor.label'), value: t('tasks.navigation.systems.primarySensor.value') },
        { label: t('tasks.navigation.systems.localization.label'), value: t('tasks.navigation.systems.localization.value') },
        { label: t('tasks.navigation.systems.stack.label'), value: t('tasks.navigation.systems.stack.value') },
        { label: t('tasks.navigation.systems.obstacle.label'), value: t('tasks.navigation.systems.obstacle.value') },
        { label: t('tasks.navigation.systems.comms.label'), value: t('tasks.navigation.systems.comms.value') },
      ],
    },
    {
      index: '02',
      name: t('tasks.servicing.name'),
      description: t('tasks.servicing.description'),
      challenge: t('tasks.servicing.challenge'),
      systems: [
        { label: t('tasks.servicing.systems.arm.label'), value: t('tasks.servicing.systems.arm.value') },
        { label: t('tasks.servicing.systems.eef.label'), value: t('tasks.servicing.systems.eef.value') },
        { label: t('tasks.servicing.systems.depth.label'), value: t('tasks.servicing.systems.depth.value') },
        { label: t('tasks.servicing.systems.control.label'), value: t('tasks.servicing.systems.control.value') },
        { label: t('tasks.servicing.systems.feedback.label'), value: t('tasks.servicing.systems.feedback.value') },
      ],
    },
    {
      index: '03',
      name: t('tasks.retrieval.name'),
      description: t('tasks.retrieval.description'),
      challenge: t('tasks.retrieval.challenge'),
      systems: [
        { label: t('tasks.retrieval.systems.suspension.label'), value: t('tasks.retrieval.systems.suspension.value') },
        { label: t('tasks.retrieval.systems.traction.label'), value: t('tasks.retrieval.systems.traction.value') },
        { label: t('tasks.retrieval.systems.slope.label'), value: t('tasks.retrieval.systems.slope.value') },
        { label: t('tasks.retrieval.systems.terrain.label'), value: t('tasks.retrieval.systems.terrain.value') },
        { label: t('tasks.retrieval.systems.retrieval.label'), value: t('tasks.retrieval.systems.retrieval.value') },
      ],
    },
    {
      index: '04',
      name: t('tasks.science.name'),
      description: t('tasks.science.description'),
      challenge: t('tasks.science.challenge'),
      systems: [
        { label: t('tasks.science.systems.sampling.label'), value: t('tasks.science.systems.sampling.value') },
        { label: t('tasks.science.systems.spectroscopy.label'), value: t('tasks.science.systems.spectroscopy.value') },
        { label: t('tasks.science.systems.imaging.label'), value: t('tasks.science.systems.imaging.value') },
        { label: t('tasks.science.systems.gps.label'), value: t('tasks.science.systems.gps.value') },
        { label: t('tasks.science.systems.analysis.label'), value: t('tasks.science.systems.analysis.value') },
      ],
    },
  ];

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
              {t('hero.eyebrow')}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-display text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[0.92] tracking-tight text-[#0A0A0A] mb-8"
          >
            {t('hero.titleLine1')}<br />{t('hero.titleLine2')}<br />
            <span className="text-[#0A0A0A]/15">{t('hero.titleLine3')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.22 }}
            className="text-[#0A0A0A]/50 text-sm leading-relaxed max-w-[400px] mb-10"
          >
            {t('hero.description')}
          </motion.p>

          {/* System status strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap gap-6 border-t border-[#0A0A0A]/10 pt-8"
          >
            {[
              { label: t('hero.status.activePlatformLabel'), value: t('hero.status.activePlatformValue') },
              { label: t('hero.status.nextCompetitionLabel'), value: t('hero.status.nextCompetitionValue') },
              { label: t('hero.status.buildStatusLabel'), value: t('hero.status.buildStatusValue') },
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
            src="/Images/IMG_9105.webp"
            alt={t('hero.imageAlt')}
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
                {t('hero.badge')}
              </span>
              <span className="font-mono text-[10px] text-[#E63946] tracking-wider">
                {t('hero.badgeStatus')}
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
                  <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#0A0A0A]/30 mb-5">{t('activeSubsystems')}</div>
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
          URC TASKS — Competition brief
      ══════════════════════════════════════════ */}
      <section className="border-b border-[#0A0A0A]/8 py-24">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 xl:px-28">

          <div className="grid lg:grid-cols-[280px_1fr] gap-16 lg:gap-24 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-px bg-[#E63946]" />
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/35">{t('competition.eyebrow')}</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-[#0A0A0A] leading-tight">
                {t('competition.titleLine1')}<br />{t('competition.titleLine2')}
              </h2>
            </div>
            <p className="text-[#0A0A0A]/50 text-sm leading-relaxed self-end max-w-[560px]">
              {t('competition.description')}
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
                      {t('competition.taskLabel')} {task.index}
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
                    {t('competition.responsibleSystems')}
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
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/35">{t('architecture.eyebrow')}</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-[#0A0A0A] leading-tight">
                {t('architecture.titleLine1')}<br />{t('architecture.titleLine2')}
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
                      {t('architecture.teamLink')}
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