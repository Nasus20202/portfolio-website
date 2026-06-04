import { describe, it, expect } from 'vitest';
import { icon } from '../icon';

describe('icon', () => {
  it('returns SVG for custom icons like linkedin', () => {
    const svg = icon('linkedin');
    expect(svg).toContain('<svg');
    expect(svg).toContain('</svg>');
    expect(svg).toContain('<title>LinkedIn</title>');
  });

  it('returns SVG for standard simple-icons like docker', () => {
    const svg = icon('docker');
    expect(svg).toContain('<svg');
    expect(svg).toContain('<title>Docker</title>');
  });

  it('includes extra attributes', () => {
    const svg = icon('linkedin', { class: 'h-5 w-5', fill: 'none' });
    expect(svg).toContain('class="h-5 w-5"');
    expect(svg).toContain('fill="none"');
  });

  it('returns empty string for unknown icons', () => {
    expect(icon('nonexistent')).toBe('');
  });
});
