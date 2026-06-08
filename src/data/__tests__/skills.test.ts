import { describe, it, expect } from 'vitest';
import { skills } from '../skills';

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
