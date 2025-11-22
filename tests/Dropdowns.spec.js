import {test , expect} from '@playwright/test';
test('dropdowns',async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator("//select[@id='country']").selectOption('india');//visibletext
    await page.locator("//select[@id='country']").selectOption({value:'uk'});
    //Await page.selectOption(‘#colors’,[‘Red’ ,’Green’ ,’Blue’]);// selecting multiple elements


    const content=await page.locator('#colors').textContent();
     expect (content.includes('Blue')).toBeTruthy();
    await page.waitForTimeout(9000);
});