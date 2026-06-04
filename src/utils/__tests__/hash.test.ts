import { describe, it, expect } from 'vitest';
import { getShortHash } from '../hash';

describe('Hash Utilities', () => {
  it('should generate a 7-character deterministic hash', () => {
    const hash1 = getShortHash('backend');
    const hash2 = getShortHash('backend');
    const hash3 = getShortHash('frontend');

    expect(hash1).toHaveLength(7);
    expect(hash1).toBe(hash2);
    expect(hash1).not.toBe(hash3);
  });
});
