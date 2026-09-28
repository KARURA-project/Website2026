// Org-wide stats. Labels are translated: messages/*.json → stats.<key>
// Each page shows a subset:
// - home/TeamIntroduction.tsx  members, departments, countries
// - app/about/page.tsx         everything except departments
// - app/members/page.tsx       everything except competition cycles
import type en from '../../messages/en.json';

export interface Stat {
  key: keyof (typeof en)['stats'];
  value: string;
}

export const orgStats: Stat[] = [
  { key: 'activeMembers', value: '100+' },
  { key: 'universities', value: '30+' },
  { key: 'departments', value: '5' },
  { key: 'countries', value: '2' },
  { key: 'competitionCycles', value: '4' },
];

export const statValue = (key: Stat['key']) => orgStats.find((s) => s.key === key)!.value;
