// @vitest-environment node
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect } from 'vitest';
import AboutMe from '../AboutMe.astro';

describe('AboutMe.astro', () => {
  it('renders without crashing and contains semantic structure', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(AboutMe);

    // Test for structural correctness rather than specific text content
    expect(result).toContain('<section');
    expect(result).toContain('id="about"');
    expect(result).toContain('<h1');
    expect(result).toContain('<ul');
    expect(result).toContain('aria-label="Social links"');
  });
});
