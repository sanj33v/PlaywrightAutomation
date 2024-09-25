import { test, expect } from "@playwright/test";
import testData from '../testData/userData.json';

test("Sample Test", async ({ page }) => {

    // Navigating to the target page
    await page.goto("https://testpages.herokuapp.com/styled/tag/dynamic-table.html");
    await page.locator("//summary[normalize-space()='Table Data']").waitFor({ state: "visible" });
    await page.locator("//summary[normalize-space()='Table Data']").click();

    // Inserting JSON data into the textbox
    await page.fill("//textarea[@id='jsondata']", JSON.stringify(testData));
    await page.locator("//button[@id='refreshtable']").click();

    const textBoxData = await page.locator("//textarea[@id='jsondata']").inputValue();

    //Asserting the textbox value
    expect(textBoxData).toContain(testData[1].name);
    expect(textBoxData).toContain(testData[2].name);
    expect(textBoxData).toContain(testData[3].name);

    await page.waitForTimeout(5000);// just to see the UI while running script
})