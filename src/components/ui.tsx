// Small building blocks shared by every page. Server-safe; the animated piece is in Reveal.tsx.

import type { ReactNode } from 'react';
import Image from 'next/image';
import { Reveal } from './Reveal';

export { Reveal };

/** '01', '02', … for numbered lists. */
export const indexLabel = (i: number) => String(i + 1).padStart(2, '0');

/** Locale-aware date. Date-only strings are UTC midnight, so format in UTC to avoid showing the previous day. */
export function formatDate(
  date: string | Date,
  locale: string,
  style: 'short' | 'long' = 'long',
  timeZone = 'UTC',
) {
  return new Date(date).toLocaleDateString(locale === 'ja' ? 'ja-JP' : 'en-US', {
    year: 'numeric',
    month: style === 'long' ? 'long' : '2-digit',
    day: style === 'long' ? 'numeric' : '2-digit',
    timeZone,
  });
}

/** Page-width wrapper with the standard side gutter. */
export function Container({ className = '', children }: { className?: string; children: ReactNode }) {
  return <div className={`max-w-[1400px] mx-auto px-page ${className}`}>{children}</div>;
}

/** Short rule + mono caption that sits above section headings. */
export function Eyebrow({
  children,
  className = 'mb-3',
  tone = 'text-ink/40',
  rule = 'bg-mars-red',
}: {
  children: ReactNode;
  className?: string;
  tone?: string;
  rule?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className={`w-6 h-px ${rule}`} />
      <span className={`font-mono text-[10px] tracking-[0.22em] uppercase ${tone}`}>{children}</span>
    </div>
  );
}

/** Tiny uppercase label above a value. */
export function Meta({
  label,
  children,
  labelClass = 'mb-1.5',
  valueClass = 'text-xs text-ink',
}: {
  label: ReactNode;
  children: ReactNode;
  labelClass?: string;
  valueClass?: string;
}) {
  return (
    <div>
      <div className={`font-mono text-[9px] tracking-[0.2em] uppercase text-ink/30 ${labelClass}`}>{label}</div>
      <div className={`font-mono ${valueClass}`}>{children}</div>
    </div>
  );
}

export function ArrowIcon({ className = 'w-4 h-4', strokeWidth = 2 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

/** Vertical rail of boxed markers with a title + text beside each (join pipeline, news timeline). */
export function RailList({ items }: { items: { marker: string; title: string; body: string }[] }) {
  return (
    <div className="relative">
      <div className="absolute left-[18px] top-0 bottom-0 w-px bg-ink/10" />
      <div className="space-y-10">
        {items.map((item) => (
          <div key={item.marker} className="relative pl-16">
            <div className="absolute left-0 top-0 w-9 h-9 border border-ink bg-canvas flex items-center justify-center font-mono text-[10px] tracking-[0.15em]">
              {item.marker}
            </div>
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink/35 mb-2">{item.title}</div>
            <p className="text-sm leading-relaxed text-ink/55">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Dark caption strip laid over the bottom of a hero image. */
export function ImageBadge({ children }: { children: ReactNode }) {
  return (
    <div className="absolute bottom-8 left-8 right-8">
      <div className="bg-ink/80 backdrop-blur-sm px-5 py-3 flex items-center justify-between">{children}</div>
    </div>
  );
}

/** Text on the left, full-bleed image on the right (desktop only). */
export function SplitHero({
  className,
  image,
  alt,
  imageClass = '',
  imageBg = 'bg-ink',
  fade = 'w-20',
  badge,
  children,
}: {
  /** Height + grid columns, e.g. 'min-h-[72vh] lg:grid-cols-[1fr_60%]'. */
  className: string;
  image: string;
  alt: string;
  imageClass?: string;
  imageBg?: string;
  fade?: string;
  badge?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className={`relative grid overflow-hidden ${className}`}>
      <div className="relative z-10 flex flex-col justify-end px-page pt-36 pb-16 lg:pb-20">{children}</div>
      <Reveal onMount y={0} duration={1} className={`relative hidden lg:block ${imageBg}`}>
        <Image src={image} alt={alt} fill priority className={`object-cover object-center ${imageClass}`} />
        <div className={`absolute inset-y-0 left-0 ${fade} bg-gradient-to-r from-canvas to-transparent pointer-events-none`} />
        {badge && <ImageBadge>{badge}</ImageBadge>}
      </Reveal>
    </section>
  );
}
