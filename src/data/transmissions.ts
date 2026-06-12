import { NewsItem } from '@/types';

export interface Transmission extends NewsItem {
  content: string;
  tags: string[];
  readTime?: string;
  campaign?: string;
}

export const transmissions: Transmission[] = [
  {
    id: 'urc-finals-2024',
    title: 'KARURA Makes History as First Japanese Team in URC Finals',
    description: 'In 2024, KARURA became the first international and Japanese team to reach the University Rover Challenge finals.',
    content: `<p>At URC 2024, our team reached the finals. The rover performed reliably in the field tests and our subsystems met mission goals.</p>`,
    date: '2024-06-15',
    imageUrl: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-462x174_webp_eeddf8f4-d769-4e9a-968b-9f9551bda5d7.webp',
    imageAlt: 'KARURA at URC Finals',
    category: 'Achievement',
    link: '/news/urc-finals-2024',
    tags: ['URC', 'Finals', 'History'],
    readTime: '5 MIN',
    campaign: 'URC 2024',
  },
  {
    id: 'urc-2025-preparation',
    title: 'Preparing for URC 2025: Our Winning Strategy',
    description: 'The team is in the final stages of System Acceptance Review for our 2025 rover.',
    content: `<p>We are finalizing the autonomy stack and refining mechanical tolerances ahead of field testing.</p>`,
    date: '2025-01-20',
    imageUrl: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png',
    imageAlt: 'KARURA 2025 rover preparation',
    category: 'Competition',
    link: '/news/urc-2025-preparation',
    tags: ['URC', 'Preparation'],
    readTime: '4 MIN',
    campaign: 'URC 2025',
  },
  {
  id: 'desert-field-test',
  title: 'Desert Systems Validation',
  description:
    'The rover completed a full systems validation.',
  content: `
    <p>
      KARURA conducted a weekend field deployment...
    </p>

    <h2>Mobility</h2>

    <p>
      The rover exceeded expectations...
    </p>
  `,
  date: '2026-03-12',
  imageUrl: '/images/desert.jpg',
  imageAlt: 'Field testing',
  category: 'Competition',
  link: '/news/desert-field-test',
  tags: ['Field Test', 'URC'],
  readTime: '4 MIN',
}
];

export default transmissions;
