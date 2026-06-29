// src/data/index.ts
export { transmissions, default as transmissionsDefault } from './transmissions';
export type { Transmission } from './transmissions';

export type RoverStatus = 'inactive' | 'active' | 'complete';
export type RoverParam = string;
export type Rover = {
  name: string;
  status?: RoverStatus;
  params?: RoverParam[];
};
export type GenerationMilestone = {
  label: string;
  year?: number;
};

export const rovers: Rover[] = [];
export const activeRover: Rover | undefined = undefined;
export const generationTimeline: GenerationMilestone[] = [];
export const roversDefault = rovers;

export { orgStats, statsByLabel, default as orgStatsDefault } from './stats';
export type { Stat } from './stats';