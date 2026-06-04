import { test, expect } from '@playwright/test';

test('page title is set correctly', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Krzysztof Nasuta');
});

test('displays personal info', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Krzysztof Nasuta');
  await expect(page.getByRole('heading', { level: 2 })).toContainText('Software Engineer');
  await expect(page.locator('#about p')).toContainText('Computer Science student');
});

test('renders all 4 social links with correct URLs', async ({ page }) => {
  await page.goto('/');
  const links = page.locator('[aria-label="Social links"] a');
  await expect(links).toHaveCount(4);

  await expect(links.filter({ hasText: 'GitHub' })).toHaveAttribute('href', /github\.com/);
  await expect(links.filter({ hasText: 'LinkedIn' })).toHaveAttribute('href', /linkedin\.com/);
  await expect(links.filter({ hasText: 'Discord' })).toHaveAttribute('href', /discord/);
  await expect(links.filter({ hasText: 'Email' })).toHaveAttribute('href', /mailto:/);
});

test('shows all 5 skill categories', async ({ page }) => {
  await page.goto('/');
  const skillsSection = page.locator('#skills');
  const categoryNames = ['Backend', 'DevOps', 'Frontend', 'System', 'AI'];
  for (const name of categoryNames) {
    await expect(skillsSection).toContainText(name);
  }
});

test('terminal panel updates when clicking a timeline node', async ({ page }) => {
  await page.goto('/');
  const terminal = page.getByTestId('terminal-panel');

  await expect(terminal).not.toContainText('Initial commit');

  await page.evaluate(() => {
    const container = document
      .querySelector('#experience')
      ?.closest('.overflow-y-auto') as HTMLElement;
    if (container) container.scrollTop = container.scrollHeight;
  });
  await page.waitForTimeout(200);
  await page.evaluate(() => {
    const container = document
      .querySelector('#experience')
      ?.closest('.overflow-y-auto') as HTMLElement;
    if (container) container.scrollTop = container.scrollHeight;
  });
  await page.waitForTimeout(100);
  await page.getByTestId('node-init').dispatchEvent('click');

  await expect(terminal).toContainText('Initial commit');
  await expect(terminal).toContainText('Hello World');
});

test('unknown routes serve homepage content', async ({ page }) => {
  await page.goto('/some/unknown/path');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Krzysztof Nasuta');
  await expect(page.locator('#skills')).toContainText('Backend');
});

test('mobile layout stacks about section above timeline', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'mobile-only test');
  await page.goto('/');
  const aboutBox = await page.locator('#about').boundingBox();
  const experienceBox = await page.locator('#experience').boundingBox();
  expect(aboutBox).toBeTruthy();
  expect(experienceBox).toBeTruthy();
  if (aboutBox && experienceBox) {
    expect(aboutBox.y).toBeLessThan(experienceBox.y);
  }
});

test.describe('pixel-perfect visual regression', () => {
  test('desktop full page matches snapshot', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium', 'chromium desktop only');
    await page.goto('/');
    await expect(page.getByTestId('terminal-panel')).toBeVisible();
    await page.waitForTimeout(1500);
    await expect(page).toHaveScreenshot('desktop-full.png', { fullPage: true });
  });

  test('mobile full page matches snapshot', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-mobile', 'chromium mobile only');
    await page.goto('/');
    await expect(page.getByTestId('terminal-panel')).toBeVisible();
    await page.waitForTimeout(1500);
    await expect(page).toHaveScreenshot('mobile-full.png', { fullPage: true });
  });
});
