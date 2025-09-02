import { test as setup } from '@playwright/test';

setup('Login e salvar sessão', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.fill('input[name="email"]', 'emailaqui');
  await page.fill('input[name="pass"]', 'senhaaqui');
  await page.click('button[name="login"]');

  // Espera redirecionar para home
  await page.waitForURL(/facebook\.com/);

  // Salva cookies e localStorage
  await page.context().storageState({ path: 'auth.json' });
});
