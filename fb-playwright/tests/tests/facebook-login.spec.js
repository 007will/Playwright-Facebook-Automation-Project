import { test, expect } from '@playwright/test';

test.describe('Login no Facebook', () => {
  test('Login com conta de teste', async ({ page }) => {
    await page.goto('https://www.facebook.com/');

    // Preenche e-mail/senha
    await page.fill('input[name="email"]', 'emailaqui');
    await page.fill('input[name="pass"]', 'senhaqui');

    // Clica no botão de login
    await page.click('button[name="login"]');

    // Aguarda algum seletor típico da home logada
    await page.waitForTimeout(5000); // 🔹 simples delay (ou use um seletor confiável)
    await expect(page).toHaveURL(/facebook\.com/);

    console.log('Login realizado com sucesso ✅');
  });
});
