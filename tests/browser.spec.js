import { test, chromium } from '@playwright/test';

test('launch chromium', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    // Keep your existing page actions here

    await browser.close();
});