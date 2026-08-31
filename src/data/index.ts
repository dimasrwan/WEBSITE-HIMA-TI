/**
 * DEMO CONTENT
 * Replace with verified HIMA-TI data before production.
 */

export * from './types';
export * from './divisions';
export * from './programs';
export * from './events';
export * from './projects';
export * from './news';

import { programs } from './programs';
import { events } from './events';
import { projects } from './projects';
import { news } from './news';

export function getProgramByIdOrSlug(idOrSlug: string) {
  return programs.find(p => p.slug === idOrSlug || p.id === idOrSlug);
}

export function getEventByIdOrSlug(idOrSlug: string) {
  return events.find(e => e.slug === idOrSlug || e.id === idOrSlug);
}

export function getProjectByIdOrSlug(idOrSlug: string) {
  return projects.find(p => p.slug === idOrSlug || p.id === idOrSlug);
}

export function getNewsByIdOrSlug(idOrSlug: string) {
  return news.find(n => n.slug === idOrSlug || n.id === idOrSlug);
}
