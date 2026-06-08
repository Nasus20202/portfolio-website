import { test, expect } from '@playwright/test';

test.describe('pixel-perfect visual regression', () => {
  test('desktop full page matches snapshot', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium', 'chromium desktop only');
    await page.goto('/');
    await expect(page.locator('#experience').getByTestId('terminal-panel')).toBeVisible();
    await expect(page).toHaveScreenshot('desktop-full.png', { fullPage: true });
  });

  test('mobile full page matches snapshot', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-mobile', 'chromium mobile only');
    await page.goto('/');
    await expect(page).toHaveScreenshot('mobile-full.png', { fullPage: true });
  });
});
