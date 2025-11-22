import {test , expect} from '@playwright/test';
test('select checkbox',async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('//*[@id="sunday"]').check();
    expect( page.locator('//*[@id="sunday"]')).toBeChecked();

    const multipleLocators=['//*[@id="tuesday"]','//*[@id="friday"]'];
    for (const locators of multipleLocators)
    {
        await page.locator(locators).check();
    }
    await page.waitForTimeout(5000);
});