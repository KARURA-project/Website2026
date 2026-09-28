// Rover generations. Descriptions, specs and subsystems are translated:
// messages/*.json → rovers.<id>. The /about build-cycle timeline lives in messages → timeline.
import { ROVER_IMAGE_URL } from './assets';

export type RoverStatus = 'active' | 'retired' | 'archived';

export interface Rover {
  id: 'karura-4' | 'karura-3' | 'karura-2'; // also the key in messages → rovers
  designation: string; // 'KARURA III'
  callsign: string; // 'K-III'
  year: number; // primary year used by home/about
  status: RoverStatus; // label in messages → rovers.status
  statusClass: string; // tailwind color class, kept here so status + color never drift apart
  image: string;
}

export const rovers: Rover[] = [
  {
    id: 'karura-4',
    designation: 'KARURA IV',
    callsign: 'K-IV',
    year: 2027,
    status: 'active',
    statusClass: 'text-mars-red',
    image: '/Images/Copy of IMG_9585.webp',
  },
  {
    id: 'karura-3',
    designation: 'KARURA III',
    callsign: 'K-III',
    year: 2026,
    status: 'retired',
    statusClass: 'text-ink/60',
    image: '/Images/Copy of IMG_9076.webp',
  },
  {
    id: 'karura-2',
    designation: 'KARURA II',
    callsign: 'K-II',
    year: 2025,
    status: 'archived',
    statusClass: 'text-ink/60',
    image: ROVER_IMAGE_URL,
  },
];
