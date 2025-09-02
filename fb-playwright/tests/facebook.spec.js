import { test, expect } from '@playwright/test';

test('Automacao Facebook', async ({ page }) => {
  // 1. Força navegação mesmo que o status seja 400
  await page.goto('https://www.facebook.com', { waitUntil: 'domcontentloaded' });

  // 2. Tenta encontrar o "ícone" da página de erro
  const errorIcon = page.locator('#icon');
  if (await errorIcon.isVisible()) {
    await errorIcon.click();
    console.log('Clique no ícone de erro realizado com sucesso ✅');
  } else {
    console.log('Nenhum ícone de erro encontrado, talvez o Facebook carregou normalmente ✅');
  }

  // 3. Exemplo de tentativa de interagir no login (se não der erro 400)
  const emailInput = page.locator('input[name="email"]');
  if (await emailInput.isVisible()) {
    await emailInput.fill('seu_email_aqui');
    await page.locator('input[name="pass"]').fill('sua_senha_aqui');
    await page.locator('button[name="login"]').click();
    console.log('Tentativa de login executada ✅');
  }
});
