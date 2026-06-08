import { describe, it, expect } from 'vitest';
import { personalInfo } from '../personalInfo';

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
