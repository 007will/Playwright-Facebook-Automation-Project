import { test, expect } from '@playwright/test';

// Suíte de testes
test.describe('Facebook Automation', () => {
  
  // Roda antes de cada teste
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.facebook.com', { waitUntil: 'domcontentloaded' });
  });

  // Teste 1 - Validar carregamento da página ou erro
  test('Valida se a página ou ícone de erro aparece', async ({ page }) => {
    const errorIcon = page.locator('#icon');
    if (await errorIcon.isVisible()) {
      await errorIcon.click();
      console.log('Clique no ícone de erro realizado com sucesso ✅');
    } else {
      console.log('Nenhum ícone de erro encontrado, página carregou normalmente ✅');
      await expect(page).toHaveTitle(/Facebook/i); // checa título da página
    }
  });

  // Teste 2 - Tentativa de login
  test('Tentativa de login', async ({ page }) => {
    const emailInput = page.locator('input[name="email"]');
    const passInput = page.locator('input[name="pass"]');
    const loginButton = page.locator('button[name="login"]');

    if (await emailInput.isVisible()) {
      await emailInput.fill('seu_email_aqui');   // 🔹 coloque um fake/real de teste
      await passInput.fill('sua_senha_aqui');   // 🔹 idem
      await loginButton.click();
      console.log('Tentativa de login executada ✅');
    } else {
      console.log('Campos de login não encontrados ❌');
    }
  });

});
