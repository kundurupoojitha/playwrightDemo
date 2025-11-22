
/*import{test , expect} from '@playwright/test';
test('checking',async({page})=> {
    await page.goto('https://demoblaze.com/index.html');
    await page.waitForSelector("//div[@id='tbodyid']//div/h4/a");
    const products= await page.$$("//div[@id='tbodyid']//div/h4/a");
       for(const product of products)
       {
                const productname= await product.textContent();
                console.log(productname);
       }



});*/
import { test, expect } from '@playwright/test';

test('Print all product names from Demoblaze', async ({ page }) => {
  // Go to the website
  await page.goto('https://demoblaze.com/index.html');

  // Wait until all products are visible
  await page.waitForSelector("//div[@id='tbodyid']//div//h5");

  // Collect all product elements
  const productsp = await page.$$("//div[@id='tbodyid']//div//h5");

  

  // Loop through each product and print its name
  for (const product of productsp) {
    const productPrice = (await product.textContent())?.trim();
    console.log(productPrice);
  }

 // console.log('\n✅ All product names printed successfully.\n');
});

