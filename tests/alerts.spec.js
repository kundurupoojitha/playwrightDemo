import{test,expect} from '@playwright/test';
test('checking alerts',async({page})=>
{
await page.goto("https://testautomationpractice.blogspot.com/");
//page.on('dialog'dialog=>accept)


await page.click("//button[@id='alertBtn']");
});