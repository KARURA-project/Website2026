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
    description:
      'In 2024, KARURA became the first international and Japanese team to reach the University Rover Challenge finals.',
    content: `
        At URC 2024, KARURA became the first Japanese team to advance to
        the University Rover Challenge finals, marking a historic milestone
        for the organization and international participation in the competition.

        Throughout the competition, the rover demonstrated reliable operation
        across mobility, science, and communications objectives. Months of
        iterative testing and refinement enabled the team to perform under
        challenging field conditions.

        Completed critical mobility objectives.
        Successfully executed science mission workflows.
        Maintained subsystem reliability throughout deployment.

        This achievement validated KARURA's engineering process and established
        a foundation for future generations of rover development. Lessons learned
        during the campaign continue to influence current design decisions.
    `,
    date: '2024-06-15',
    imageUrl:
      'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-462x174_webp_eeddf8f4-d769-4e9a-968b-9f9551bda5d7.webp',
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
    description:
      'The team is in the final stages of System Acceptance Review for our 2025 rover.',
    content: `
        As preparations for URC 2025 intensified, KARURA focused on improving
        reliability, maintainability, and operational efficiency across all
        rover subsystems.
      
        Teams worked collaboratively across disciplines to finalize designs
        and validate performance before field deployment.
      
        Refined the autonomy and navigation stack.
        Improved mechanical tolerances and manufacturability.
        Expanded testing procedures for mission readiness.

        The completion of System Acceptance Review represented a major milestone
        toward competition readiness and ensured all teams were aligned on
        deployment expectations.
    `,
    date: '2025-01-20',
    imageUrl:
      'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png',
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
      'The rover completed a full systems validation deployment.',
    content: `
        KARURA conducted a weekend field deployment to evaluate rover
        performance under realistic operating conditions and identify areas
        for refinement before future competitions.

        The rover exceeded expectations during navigation exercises,
        maintaining stable operation across uneven terrain and extended runs.

        Completed all planned mobility checkpoints.
        Verified suspension and drivetrain reliability.
        Collected telemetry for post-test analysis.

        Team members also rehearsed operational workflows, communications,
        and science task execution to simulate competition conditions as
        closely as possible.

        Data gathered during the deployment will inform future software
        updates and hardware iterations ahead of the next campaign cycle.
    `,
    date: '2026-03-12',
    imageUrl: '/images/desert.jpg',
    imageAlt: 'Field testing',
    category: 'Competition',
    link: '/news/desert-field-test',
    tags: ['Field Test', 'URC'],
    readTime: '4 MIN',
  },
];

export default transmissions;