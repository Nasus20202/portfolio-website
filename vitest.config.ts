import { getViteConfig } from 'astro/config';
import type { UserConfig } from 'vitest/config';

const config: UserConfig = {
  test: {
    environment: 'jsdom',
    globals: true,
    exclude: ['**/node_modules/**', '**/e2e/**'],
    setupFiles: ['./vitest.setup.ts'],
  },
};

export default getViteConfig(config);
