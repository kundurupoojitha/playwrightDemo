// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://demoblaze.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('STORE');
  
  page.locator('#login2').click();
  page.locator('#loginusername').fill('Redyyyyyy');
  page.locator('//*[@id="loginpassword"]').fill('kunduru');
  //page.click('#logInModal > div > div > div.modal-footer > button.btn.btn-primary')
  page.locator('button:has-text("Log in")');
  //page.locator('button').filter({ hasText: 'Log in' })
  await page.close();


});


