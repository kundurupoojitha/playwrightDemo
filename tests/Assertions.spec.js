import {test , expect} from '@playwright/test';
test('assertions',async({page})=>
{
    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');
    await expect (page).not.toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F');
    const searchbox= page.locator("#small-searchterms")
    await expect(searchbox).toBeVisible()

    const maleradio= await page.locator('#gender-male');
    await maleradio.click();
    expect (maleradio).toBeChecked();
    


});