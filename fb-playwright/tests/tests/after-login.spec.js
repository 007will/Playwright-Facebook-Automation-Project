import { test, expect } from '@playwright/test';

test.use({ storageState: 'auth.json' });

test('Acessar página após login', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await expect(page).toHaveURL(/facebook\.com/);
  console.log('Página carregada já autenticado ✅');
});
