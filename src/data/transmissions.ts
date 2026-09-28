// News articles. Titles, descriptions, body text, image alt text and tags are translated:
// messages/*.json → news.articles.<id>
import type en from '../../messages/en.json';
import { LOGO_URL, ROVER_IMAGE_URL } from './assets';

export interface Transmission {
  id: keyof (typeof en)['news']['articles']; // also the URL slug: /news/<id>
  date: string;
  imageUrl: string;
  category: 'Competition' | 'Team' | 'Achievement' | 'Update' | 'Sponsor';
  readMinutes: number;
  campaign?: string;
}

export const transmissions: Transmission[] = [
  {
    id: 'urc-finals-2024',
    date: '2024-06-15',
    imageUrl: LOGO_URL,
    category: 'Achievement',
    readMinutes: 5,
    campaign: 'URC 2024',
  },
  {
    id: 'urc-2025-preparation',
    date: '2025-01-20',
    imageUrl: ROVER_IMAGE_URL,
    category: 'Competition',
    readMinutes: 4,
    campaign: 'URC 2025',
  },
  {
    id: 'desert-field-test',
    date: '2026-03-12',
    imageUrl: '/Images/IMG_9088.webp',
    category: 'Competition',
    readMinutes: 4,
  },
];
