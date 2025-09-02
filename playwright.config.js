// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',                // pasta onde ficam os testes
  timeout: 30 * 1000,                // 30s por teste
  expect: {
    timeout: 5000,                   // 5s para cada expect
  },
  fullyParallel: true,               // roda em paralelo se quiser
  reporter: [['list'], ['html']],    // mostra no terminal + gera relatório HTML
  use: {
    headless: false,                 // abre o navegador visível
    viewport: { width: 1920, height: 1080 },
    actionTimeout: 0,
    ignoreHTTPSErrors: true,         // ignora problemas SSL
    video: 'on-first-retry',         // grava vídeo se falhar
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
