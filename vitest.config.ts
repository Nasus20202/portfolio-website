import { getViteConfig } from 'astro/config';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  ...getViteConfig({}),
  test: {
    environment: 'jsdom',
    globals: true,
    exclude: ['**/node_modules/**', '**/e2e/**'],
    setupFiles: ['./vitest.setup.ts'],
  },
});
