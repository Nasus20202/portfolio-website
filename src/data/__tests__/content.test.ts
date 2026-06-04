import { describe, it, expect } from 'vitest';
import { personalInfo, skills, timelineEvents } from '../content';

describe('Content Data Validation', () => {
  describe('personalInfo', () => {
    it('should have required fields with correct types', () => {
      expect(typeof personalInfo.name).toBe('string');
      expect(personalInfo.name.length).toBeGreaterThan(0);
      expect(typeof personalInfo.alias).toBe('string');
      expect(typeof personalInfo.role).toBe('string');
      expect(typeof personalInfo.company).toBe('string');
      expect(typeof personalInfo.bio).toBe('string');
      expect(Array.isArray(personalInfo.socials)).toBe(true);
    });

    it('should have valid social links', () => {
      personalInfo.socials.forEach((social) => {
        expect(typeof social.name).toBe('string');
        expect(social.url).toMatch(/^https?:\/\/|mailto:/);
        expect(typeof social.iconSlug).toBe('string');
      });
    });
  });

  describe('skills', () => {
    it('should have valid skill categories', () => {
      expect(skills.length).toBeGreaterThan(0);
      skills.forEach((category) => {
        expect(typeof category.id).toBe('string');
        expect(typeof category.name).toBe('string');
        expect(Array.isArray(category.icons)).toBe(true);
        expect(category.icons.length).toBeGreaterThan(0);
        if (category.details) {
          expect(typeof category.details).toBe('string');
        }
      });
    });
  });

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
});
