// src/data/rovers.ts

export type RoverStatus = 'ACTIVE BUILD' | 'RETIRED' | 'ARCHIVED' | 'COMPETED' | 'IN DEV';

export interface RoverParam {
  label: string;
  value: string;
  unit?: string;
}

export interface Rover {
  id: string;            // slug, e.g. 'karura-3'
  designation: string;    // 'KARURA III'
  callsign: string;        // 'K-III'
  year: number;            // 2024 — primary year used by home/about
  cycle: string;           // '2024 — 2026' — used by /rover detail header
  status: RoverStatus;
  statusClass: string;     // tailwind color class, kept here so status+color never drift apart
  achievement: string;     // short milestone line used by RoverHistory cards
  milestone: string;       // longer milestone line used by the rover detail header
  description: string;
  image: string;
  params: RoverParam[];
  subsystems: string[];
}

export const rovers: Rover[] = [
  {
    id: 'karura-4',
    designation: 'KARURA IV',
    callsign: 'K-IV',
    year: 2027,
    cycle: '2026 to 2027',
    status: 'ACTIVE BUILD',
    statusClass: 'text-[#E63946]',
    achievement: 'Historic URC Finals: first Japanese team',
    milestone: 'Historic URC Finals: first Japanese and international team',
    description:
      'Fourth-generation competition platform built for the URC 2027 Finals. Features a fully autonomous navigation stack, 5-DOF manipulation arm, and modular science payload.',
    image:
      'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png',
    params: [
      { label: 'CONFIGURATION', value: '4-WHEEL DRIVE', unit: '' },
      { label: 'SUSPENSION', value: 'ROCKER-BOGIE', unit: '' },
      { label: 'DRIVE MOTORS', value: '4 × BRUSHLESS DC', unit: '' },
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
    id: 'karura-3',
    designation: 'KARURA III',
    callsign: 'K-III',
    year: 2026,
    cycle: '2025 to 2026',
    status: 'RETIRED',
    statusClass: 'text-[#0A0A0A]/30',
    achievement: 'URC Qualifiers Success',
    milestone: 'URC System Acceptance Review: qualified',
    description:
      'Second-generation build focused on reliability and mobility improvements following lessons from KARURA II. Introduced a dedicated electrical architecture with centralized CAN-bus communication and an upgraded 5-DOF arm.',
    image:
      'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png',
    params: [
      { label: 'CONFIGURATION', value: '4-WHEEL DRIVE', unit: '' },
      { label: 'DRIVE MOTORS', value: '4 × BRUSHLESS DC', unit: '' },
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
    id: 'karura-2',
    designation: 'KARURA II',
    callsign: 'K-II',
    year: 2025,
    cycle: '2024 to 2025',
    status: 'ARCHIVED',
    statusClass: 'text-[#0A0A0A]/20',
    achievement: 'Team Formation & First Prototype',
    milestone: 'Program launch: first prototype complete',
    description:
      "First prototype that established KARURA's core engineering framework and demonstrated the viability of the Japan–USA co-development model. Manual operation with basic sensing and a simple 3-DOF arm.",
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

// Convenience accessor — /rover defaults to the most recent (active) generation
export const activeRover = rovers[0];

// Used by /about's program timeline and /rover's generation timeline.
// Kept separate from `rovers` because milestones include the 2026 "in dev"
// entry, which is forward-looking and has no corresponding built Rover record.
export interface GenerationMilestone {
  year: string;
  label: string;
  designation: string;
  note: string;
  status: string;
}

export const generationTimeline: GenerationMilestone[] = [
  {
    year: 'Phase I',
    label: 'Summer',
    designation: 'Plan',
    note: 'Define subsystem requirements, establish Hardware/Software models, and budgets',
    status: 'In Progress',
  },
  {
    year: 'Phase II',
    label: 'Fall',
    designation: 'Develop',
    note: 'Machines mechanical components, manufactures custom PCBs, and writes autonomous navigation and control software to fully assemble the rover.',
    status: 'TBD',
  },
  {
    year: 'Phase III',
    label: 'Winter',
    designation: 'Test',
    note: 'Run hardware stress tests and field simulations to validate sensor feedback, debug software, and fix failure points before deployment.',
    status: 'TBD',
  },
  {
    year: 'Phase IV',
    label: 'Spring',
    designation: 'Compete',
    note: 'Prepare for and pass technical inspections process, then operate and maintain the rover in international competitions.',
    status: 'TBD',
  },
];

export default rovers;