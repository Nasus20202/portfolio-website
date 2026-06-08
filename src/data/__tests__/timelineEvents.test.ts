import { describe, it, expect } from 'vitest';
import { timelineEvents } from '../timelineEvents';

describe('timelineEvents', () => {
  it('should have valid events', () => {
    expect(timelineEvents.length).toBeGreaterThan(0);
    timelineEvents.forEach((event) => {
      expect(typeof event.id).toBe('string');
      expect(['commit', 'branch', 'merge']).toContain(event.type);
      expect(typeof event.lane).toBe('string');
      expect(typeof event.title).toBe('string');
      expect(typeof event.date).toBe('string');

      if (event.type === 'branch' || event.type === 'merge') {
        expect(event.from).toBeDefined();
        expect(typeof event.from).toBe('string');
      }
    });
  });

  it('should have a chronological or logical order starting with init', () => {
    const lastEvent = timelineEvents[timelineEvents.length - 1];
    expect(lastEvent).toBeDefined();
    if (lastEvent) {
      expect(lastEvent.id).toBe('init');
      expect(lastEvent.lane).toBe('main');
    }
  });
});
