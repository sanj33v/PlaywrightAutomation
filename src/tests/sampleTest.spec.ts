import { test, expect } from "@playwright/test";
import testJsonData from '../testData/userData.json';

test("Sample Test", async ({ page }) => {

    // Navigating to the target page
    await page.goto("https://testpages.herokuapp.com/styled/tag/dynamic-table.html");
    await page.locator("//summary[normalize-space()='Table Data']").waitFor({ state: "visible" });
    await page.locator("//summary[normalize-space()='Table Data']").click();

    // Inserting JSON data into the textbox
    await page.locator("//textarea[@id='jsondata']").fill(JSON.stringify(testJsonData));
    await page.locator("//button[@id='refreshtable']").click();

    const textBoxData = await page.locator("//textarea[@id='jsondata']").inputValue();
    const textBoxJsonData=JSON.parse(textBoxData);
    
    //comparing the textbox value and json data
    expect(textBoxJsonData).toEqual(testJsonData);

    console.log(textBoxJsonData);//consoling just to see the data 
    console.log(testJsonData);//consoling just to see the data 
    await page.waitForTimeout(5000);// just to see the UI while running script
})