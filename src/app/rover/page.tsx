'use client';

import { useState } from 'react';
import { useMessages, useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Eyebrow, Reveal, SplitHero, indexLabel } from '@/components/ui';
import { rovers, type Rover } from '@/data/rovers';
import type { Department } from '@/data/departments';
import type en from '../../../messages/en.json';

// Subsystem inventory: text in messages → rover.architecture.items; value is the /about department anchor
// Typed against messages, so adding a subsystem there without a team here fails tsc.
const SUBSYSTEM_TEAMS: Record<keyof (typeof en)['rover']['architecture']['items'], Department['id']> = {
  mobility: 'hardware',
  arm: 'hardware',
  electrical: 'electrical',
  software: 'software',
  science: 'science',
};

export default function RoverPage() {
  const t = useTranslations('rover');
  const messages = useMessages();
  const [activeId, setActiveId] = useState<Rover['id']>('karura-3');
  const current = rovers.find((r) => r.id === activeId) ?? rovers[0];
  const currentText = messages.rovers[current.id];

  const heroStatus = (['activePlatform', 'nextCompetition', 'buildStatus'] as const).map((k) => ({
    label: t(`hero.status.${k}Label`),
    value: t(`hero.status.${k}Value`),
  }));

  // The four URC tasks, in messages/*.json order (rover.tasks)
  const urcTasks = Object.entries(messages.rover.tasks);

  return (
    <div className="text-ink">
      <SplitHero
        className="min-h-screen lg:grid-cols-[1fr_48%]"
        image="/Images/IMG_9105.webp"
        alt={t('hero.imageAlt')}
        imageBg="bg-mist"
        fade="w-32"
        badge={
          <>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/60">{t('hero.badge')}</span>
            <span className="font-mono text-[10px] text-mars-red tracking-wider">{t('hero.badgeStatus')}</span>
          </>
        }
      >
        <Reveal onMount y={20} duration={0.5}>
          <Eyebrow className="mb-6">{t('hero.eyebrow')}</Eyebrow>
        </Reveal>
        <Reveal onMount y={28} duration={0.7} delay={0.08}>
          <h1 className="font-display text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[0.92] tracking-tight text-ink mb-8">
            {t('hero.titleLine1')}<br />{t('hero.titleLine2')}<br />
            <span className="text-ink/15">{t('hero.titleLine3')}</span>
          </h1>
        </Reveal>
        <Reveal onMount y={0} delay={0.22}>
          <p className="text-ink/50 text-sm leading-relaxed max-w-[400px] mb-10">{t('hero.description')}</p>
        </Reveal>
        <Reveal onMount y={0} delay={0.35} className="flex flex-wrap gap-6 border-t border-ink/10 pt-8">
          {heroStatus.map((item) => (
            <div key={item.label}>
              <div className="font-mono text-[8px] tracking-[0.22em] uppercase text-ink/30 mb-1">{item.label}</div>
              <div className="font-mono text-sm font-bold text-ink/80">{item.value}</div>
            </div>
          ))}
        </Reveal>
      </SplitHero>

      {/* Generation selector */}
      <div className="border-y border-ink/8 bg-canvas sticky top-[64px] z-30">
        <Container>
          <div className="flex items-stretch divide-x divide-ink/8 overflow-x-auto">
          {rovers.map((r) => {
            const active = activeId === r.id;
            return (
              <button
                key={r.id}
                onClick={() => setActiveId(r.id)}
                className={`flex-shrink-0 flex flex-col gap-0.5 px-6 py-5 text-left transition-colors duration-200 ${
                  active ? 'bg-ink text-canvas' : 'hover:bg-ink/4 text-ink'
                }`}
              >
                <span className={`font-mono text-[8px] tracking-[0.22em] uppercase ${active ? 'text-white/40' : 'text-ink/30'}`}>
                  {r.callsign}
                </span>
                <span className="font-display text-sm font-bold">{r.designation}</span>
                <span className={`font-mono text-[9px] ${r.statusClass} ${active && r.status !== 'active' ? 'opacity-50' : ''}`}>
                  {messages.rovers.status[r.status]}
                </span>
              </button>
            );
          })}
          </div>
        </Container>
      </div>

      {/* Selected rover detail */}
      <AnimatePresence mode="wait">
        <motion.section
          key={current.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4 }}
          className="py-20 border-b border-ink/8"
        >
          <Container className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-start">
            <div>
              <Eyebrow tone="text-ink/35">{currentText.cycle}</Eyebrow>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] font-bold text-ink leading-tight mb-2">{current.designation}</h2>
              <p className={`font-mono text-sm mb-8 ${current.statusClass}`}>{currentText.milestone}</p>
              <p className="text-ink/55 text-sm leading-relaxed max-w-[500px] mb-10">{currentText.description}</p>

              <div className="border-t border-ink/8">
                {Object.entries(currentText.params).map(([key, p]) => (
                  <div key={key} className="grid grid-cols-[140px_1fr_auto] gap-4 items-baseline py-3.5 border-b border-ink/6">
                    <span className="font-mono text-[8px] tracking-[0.18em] uppercase text-ink/25">{p.label}</span>
                    <span className="font-mono text-sm font-bold text-ink">{p.value}</span>
                    {'unit' in p && <span className="font-mono text-[9px] text-ink/30 text-right">{p.unit}</span>}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="relative aspect-[4/5] overflow-hidden bg-mist">
                <Image src={current.image} alt={current.designation} fill className="object-cover object-center" />
              </div>

              <div className="border border-ink/8 p-6">
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink/30 mb-5">{t('activeSubsystems')}</div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {Object.entries(currentText.subsystems).map(([key, sys]) => (
                    <div key={key} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-mars-red rounded-full shrink-0" />
                      <span className="font-mono text-[10px] text-ink/60">{sys}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </motion.section>
      </AnimatePresence>

      {/* URC tasks */}
      <section className="border-b border-ink/8 py-24">
        <Container>
          <div className="grid lg:grid-cols-[280px_1fr] gap-16 lg:gap-24 mb-16">
            <div>
              <Eyebrow tone="text-ink/35">{t('competition.eyebrow')}</Eyebrow>
              <h2 className="font-display text-2xl font-bold text-ink leading-tight">
                {t('competition.titleLine1')}<br />{t('competition.titleLine2')}
              </h2>
            </div>
            <p className="text-ink/50 text-sm leading-relaxed self-end max-w-[560px]">{t('competition.description')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-l border-ink/8">
            {urcTasks.map(([key, task], i) => {
              const index = indexLabel(i);
              return (
                <Reveal key={key} delay={i * 0.07} className="border-b border-r border-ink/8 p-8 flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="font-mono text-[8px] tracking-[0.2em] uppercase text-ink/25 mb-2">
                        {t('competition.taskLabel')} {index}
                      </div>
                      <h3 className="font-display text-lg font-bold text-ink leading-snug">{task.name}</h3>
                    </div>
                    <span className="font-mono text-[28px] font-bold text-ink/5 leading-none select-none">{index}</span>
                  </div>

                  <p className="text-ink/50 text-xs leading-relaxed mb-2">{task.description}</p>
                  <p className="text-ink/30 text-[10px] leading-relaxed mb-7 italic">{task.challenge}</p>

                  <div className="border-t border-ink/8 pt-5 divide-y divide-ink/6 mt-auto">
                    <div className="font-mono text-[8px] tracking-[0.2em] uppercase text-ink/20 pb-3">{t('competition.responsibleSystems')}</div>
                    {Object.entries(task.systems).map(([sysKey, sys]) => (
                      <div key={sysKey} className="grid grid-cols-[1fr_auto] gap-4 py-2">
                        <span className="font-mono text-[9px] tracking-[0.1em] uppercase text-ink/25">{sys.label}</span>
                        <span className="font-mono text-[9px] font-bold text-ink/60 text-right">{sys.value}</span>
                      </div>
                    ))}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Subsystem inventory */}
      <section className="border-b border-ink/8 py-24">
        <Container className="grid lg:grid-cols-[280px_1fr] gap-16 lg:gap-24">
          <div>
            <Eyebrow tone="text-ink/35">{t('architecture.eyebrow')}</Eyebrow>
            <h2 className="font-display text-2xl font-bold text-ink leading-tight">
              {t('architecture.titleLine1')}<br />{t('architecture.titleLine2')}
            </h2>
          </div>

          <div className="divide-y divide-ink/8 border-t border-b border-ink/8">
            {Object.entries(messages.rover.architecture.items).map(([id, sub], i) => (
              <Reveal
                key={id}
                id={id}
                y={0}
                delay={i * 0.07}
                className="grid md:grid-cols-[80px_180px_1fr_120px] gap-6 lg:gap-10 items-start py-7 scroll-mt-24"
              >
                <div className="font-mono text-[8px] tracking-[0.2em] uppercase text-ink/20 pt-1">{sub.label}</div>
                <div>
                  <div className="font-display text-sm font-bold text-ink mb-1">{sub.title}</div>
                  <div className="font-mono text-[8px] tracking-[0.1em] uppercase text-ink/25">{sub.dept}</div>
                </div>
                <p className="text-ink/45 text-xs leading-relaxed">{sub.systems}</p>
                <div className="md:text-right">
                  <Link
                    href={`/about#${SUBSYSTEM_TEAMS[id as keyof typeof SUBSYSTEM_TEAMS]}`}
                    className="font-mono text-[8px] tracking-[0.15em] uppercase text-ink/20 hover:text-ink/50 transition-colors flex md:justify-end items-center gap-1.5 group"
                  >
                    <span className="w-3 h-px bg-current" />
                    {t('architecture.teamLink')}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
