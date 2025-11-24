import{test,expect} from '@playwright/test';
test('checking alerts',async({page})=>
{
await page.goto("https://testautomationpractice.blogspot.com/");
//handling alert window before clicking button
page.on('dialog',async dialog=>{
    expect(dialog.type()).toContain(alert);
    expect(dialog.message()).toContain('I am an alert box');
    await dialog.accept();//click ok 

})
//clicking alert button
await page.click('//button[normalize-space()="Alert"]');

//await page.waitForTimeout(5000);
});