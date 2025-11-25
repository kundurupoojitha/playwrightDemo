const { test, expect } = require("@playwright/test");

test("Simple alert", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Enabling Alert Handling for simple alert
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("alert");
    expect(dialog.message()).toContain("I am an alert box!");
    await dialog.accept();
  });

  await page.waitForSelector("#alertBtn");
  await page.locator("#alertBtn").click();
  await page.waitForTimeout(5000);
});
/*test("Confirmation alert with ok", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Enabling Alert Handling for Confirmation alert with OK
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("confirm");
    expect(dialog.message()).toContain("Press a button!");
    await dialog.accept();
  });

  await page.waitForSelector("#confirmBtn");
  await page.locator("#confirmBtn").click();
  await expect(page.locator("#demo")).toHaveText("You pressed OK!");

  await page.waitForTimeout(5000);
});*/
/*test("Confirmation alert with Cancel", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Enabling Alert Handling for Confirmation alert with Cancel
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("confirm");
    expect(dialog.message()).toContain("Press a button!");
    await dialog.dismiss();
  });

  await page.waitForSelector("#confirmBtn");
  await page.locator("#confirmBtn").click();
  await expect(page.locator("#demo")).toHaveText("You pressed Cancel!");

  await page.waitForTimeout(5000);
});*/
/*test("Prompt alert", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Handling prompt dialog
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("prompt");
    expect(dialog.message()).toContain("Please enter your name:");
    expect(dialog.defaultValue()).toContain("Harry Potter");
    await dialog.accept("Deep");
  });

  await page.waitForSelector("#promptBtn");
  await page.locator("#promptBtn").click();
  await expect(page.locator("#demo")).toHaveText(
    "Hello Deep! How are you today?"
  );

  await page.waitForTimeout(5000);
});*/