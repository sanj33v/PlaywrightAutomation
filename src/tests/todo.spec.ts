import { test, expect } from '@playwright/test';

test('todo', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');

  await page.locator("[class='new-todo']").fill("Sanjeev");
  await page.keyboard.press("Enter");
  await page.locator("[class='new-todo']").fill("Singh");
  await page.keyboard.press("Enter");

  // Expect the list contain same data.
  const dataListItem = await page.locator("[data-testid='todo-title']").first().textContent();
  expect(dataListItem).toContain("Sanjeev");

  // Expect the last list contain same data.
  const lastListItem = await page.locator("[data-testid='todo-title']").last().textContent();
  expect(lastListItem).toContain("Singh");
  

  await page.locator("[class='new-todo']").fill("SanjeevSingh");  
  await page.keyboard.press("Enter");

  expect(dataListItem).toContain("SanjeevSingh");
  await page.waitForTimeout(5000);
});