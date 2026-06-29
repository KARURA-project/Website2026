// src/data/stats.ts

export interface Stat {
  value: string;
  label: string;
  sub: string;
}

// Canonical org-wide stats. Used by:
// - home/TeamIntroduction.tsx   (subset: members, departments, countries)
// - app/about/page.tsx          (full set, includes competition cycles)
// - app/members/page.tsx        (subset: members, universities, departments, countries)
export const orgStats: Stat[] = [
  { value: '100+', label: 'Active Members', sub: 'AY 2025–26' },
  { value: '30+', label: 'Universities', sub: 'JP & US' },
  { value: '5', label: 'Departments', sub: 'Full-stack org' },
  { value: '2', label: 'Countries', sub: 'Japan · USA' },
  { value: '4', label: 'Competition Cycles', sub: '2022–2027' },
];

// Convenience lookup so pages can pull specific stats by label
// instead of re-deriving a filtered/reordered array each time.
export const statsByLabel: Record<string, Stat> = orgStats.reduce(
  (acc, stat) => ({ ...acc, [stat.label]: stat }),
  {} as Record<string, Stat>
);

export default orgStats;