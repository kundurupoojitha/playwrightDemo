// @ts-check
import { test, expect } from '@playwright/test';

test('login test demoblaze', async ({ page }) => {
  await page.goto('https://demoblaze.com/');

  // Validate title
  await expect(page).toHaveTitle('STORE');

  // Click Login button
  await page.locator('#login2').click();

  // Fill username & password
  await page.locator("//input[@id='loginusername']").fill('Reddyyyyyy');
  await page.locator("//*[@id='loginpassword']").fill('kunduru');

  // Click the "Log in" button
  await page.locator('button:has-text("Log in")').click();

  // Optional: Wait to see result
  await page.waitForTimeout(3000);

  await page.close();
});
