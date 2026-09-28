// The five departments, shared by the home, /about, /members and /join pages.
// Names, descriptions and skills are translated: messages/*.json → departments.<id>

export interface Department {
  id: 'hardware' | 'electrical' | 'software' | 'science' | 'business';
  members: number;
  openings: number; // /join
}

export const departments: Department[] = [
  { id: 'hardware', members: 13, openings: 2 },
  { id: 'electrical', members: 9, openings: 3 },
  { id: 'software', members: 13, openings: 2 },
  { id: 'science', members: 6, openings: 4 },
  { id: 'business', members: 8, openings: 2 },
];
