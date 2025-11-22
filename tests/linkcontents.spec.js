
import { test, expect } from "@playwright/test";

test('checkinglinks', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');

  const links = await page.$$('a');
  for (const link of links) {
    const linkText = await link.textContent();
    console.log(linkText);//?.trim());
  }
});
