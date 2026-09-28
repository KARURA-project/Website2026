// The five departments, shared by the home, /about, /members and /join pages.
// Names, descriptions and skills are translated: messages/*.json → departments.<id>

export interface Department {
  id: 'hardware' | 'electrical' | 'software' | 'science' | 'business';
  members: number;
  openings: number; // /join
}

export const departments: Department[] = [
  { id: 'hardware', members: 32, openings: 9 },
  { id: 'electrical', members: 29, openings: 12 },
  { id: 'software', members: 24, openings: 6 },
  { id: 'science', members: 17, openings: 6 },
  { id: 'business', members: 25, openings: 10 },
];
