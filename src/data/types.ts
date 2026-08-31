/**
 * DEMO CONTENT
 * Replace with verified HIMA-TI data before production.
 */

export interface Division {
  id: string;
  name: string;
  shortName: string;
  description: string;
  focus: string[];
  order: number;
}

export type Status = 'Planned' | 'Ongoing' | 'Completed';

export interface Program {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  division: string;
  period: string;
  status: Status;
  featured: boolean;
}

export interface Event {
  id: string;
  title: string;
  slug: string;
  description: string;
  excerpt: string;
  date: string;
  time: string;
  location: string;
  category: string;
  organizer: string;
  status: Status;
  image: string;
  featured: boolean;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  excerpt: string;
  category: string;
  technologies: string[];
  year: number;
  status: Status;
  image: string;
  repository?: string;
  demo?: string;
  featured: boolean;
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  image: string;
  featured: boolean;
}
