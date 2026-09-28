"use client";

import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/ui';

// placeholder — swap with KARURA's actual competition highlight reel
const YOUTUBE_ID = 'MaB6N6yUZZI';

const cellLabel = 'font-mono text-[10px] tracking-[0.2em] uppercase text-white/60 block';

export default function VideoReel() {
  const t = useTranslations('home.video');

  return (
    <section className="bg-ink">
      {/* Large video left, stacked info cells right */}
      <div className="grid lg:grid-cols-[1fr_320px] min-h-[520px]">

        <Reveal y={0} duration={0.8} className="relative bg-black">
          <iframe
            className="w-full h-full min-h-[320px] lg:min-h-[520px] block"
            src={`https://www.youtube.com/embed/${YOUTUBE_ID}?rel=0&modestbranding=1&color=white`}
            title={t('iframeTitle')}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="absolute top-4 left-4 pointer-events-none">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/60">{t('watermark')}</span>
          </div>
        </Reveal>

        <div className="flex flex-col border-l border-white/5">
          <Reveal x={20} y={0} duration={0.5} delay={0.1} className="flex-1 px-8 py-8 border-b border-white/5 flex flex-col justify-between">
            <span className={`${cellLabel} mb-3`}>{t('competitionLabel')}</span>
            <div>
              <div className="font-display text-white font-bold text-xl leading-tight mb-2">{t('competitionName')}</div>
              <div className="font-mono text-mars-red-light text-sm">{t('competitionResult')}</div>
            </div>
            <p className="text-white/60 text-xs leading-relaxed mt-4">{t('competitionBody')}</p>
          </Reveal>

          <Reveal x={20} y={0} duration={0.5} delay={0.2} className="flex-1 px-8 py-8 border-b border-white/5">
            <span className={`${cellLabel} mb-3`}>{t('locationLabel')}</span>
            <div className="font-mono text-white text-sm">
              <div className="mb-1">{t('location')}</div>
              <div className="text-white/60 text-xs">38.3714° N, 110.7183° W</div>
            </div>
          </Reveal>

          <Reveal x={20} y={0} duration={0.5} delay={0.3} className="flex-1 px-8 py-8 flex flex-col justify-end">
            <span className={`${cellLabel} mb-4`}>{t('followLabel')}</span>
            <a
              href="https://youtube.com/@karuraproject"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors group"
            >
              <span className="w-6 h-px bg-white/30 group-hover:bg-white transition-colors" />
              {t('youtube')}
              <svg className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
