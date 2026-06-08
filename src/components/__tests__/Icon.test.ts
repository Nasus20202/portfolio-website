// @vitest-environment node
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect } from 'vitest';
import Icon from '../Icon.astro';

describe('Icon.astro', () => {
  it('renders a UI icon (at-sign) correctly', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Icon, {
      props: { slug: 'at-sign' },
    });

    // Lucide icons generally render an SVG element with specific classes
    expect(result).toContain('<svg');
  });

  it('renders a simple-icon (github) correctly with colorful={true}', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Icon, {
      props: { slug: 'github', colorful: true },
    });

    expect(result).toContain('<svg');
    expect(result).toContain('fill="#181717"'); // GitHub's brand color
    expect(result).toContain('GitHub');
  });

  it('renders a simple-icon (github) correctly with colorful={false}', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Icon, {
      props: { slug: 'github', colorful: false },
    });

    expect(result).toContain('<svg');
    expect(result).toContain('fill="currentColor"');
  });

  it('renders custom java icon correctly', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Icon, {
      props: { slug: 'java' },
    });

    expect(result).toContain('<svg');
    expect(result).toContain('transform="scale(0.1875)"');
    expect(result).toContain('Java');
  });

  it('returns nothing for invalid slug', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Icon, {
      props: { slug: 'invalid-icon' as never },
    });

    expect(result.trim()).toBe('');
  });
});
