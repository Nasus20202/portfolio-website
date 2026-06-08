import type { TimelineEvent } from '../data/types';
import { getShortHash } from './hash';

// Dimensions and styling constants
export const ROW_HEIGHT = 80;
export const LANE_WIDTH = 40;
export const NODE_RADIUS = 6;
export const STROKE_WIDTH = 2;

export function stringToColor(str: string) {
  if (str === 'main') return '#a1a1aa'; // zinc-400
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h = Math.abs(hash) % 360;
  return `hsl(${h}, 70%, 65%)`;
}

export const getEventHash = (event: TimelineEvent) => {
  if (event.commitHash) return event.commitHash;
  return getShortHash(event.description || event.title + event.date);
};
