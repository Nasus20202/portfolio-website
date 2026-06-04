// @vitest-environment node
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect } from 'vitest';
import SkillsLog from '../SkillsLog.astro';

describe('SkillsLog.astro', () => {
  it('renders without crashing and contains terminal structure', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(SkillsLog);

    // Test for structural correctness and shell command presence
    expect(result).toContain('git log --oneline');
    expect(result).toContain('nasus@portfolio');
    expect(result).toContain('rounded-xl');
    expect(result).toContain('border-zinc-800');

    // Ensure it renders the list of skills from data
    expect(result).toContain('feat:');
  });
});
