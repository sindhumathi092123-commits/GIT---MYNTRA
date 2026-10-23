// @ts-check
import { test, expect } from '@playwright/test';

test('launch flipcart', async ({ page }) => {
  await page.goto('https://www.flipcart.com/');

});

``