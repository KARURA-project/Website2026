export interface Member {
  id: string;
  name: {
    en: string;
    jp: string;
  };
  role: string;
  department: Department;
  image: string;
  bio: string;
}

export type Department = 
  | 'mechanical' 
  | 'electrical' 
  | 'software' 
  | 'science' 
  | 'business';

export interface Rover {
  id: string;
  name: string;
  year: number;
  image: string;
  description: string;
  achievements: string[];
  specs: {
    weight: string;
    dimensions: string;
    speed: string;
  };
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  image?: string;
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
  website: string;
}