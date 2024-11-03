import { test, expect } from "@playwright/test"

test("Calendar", async ({ page }) => {
    await page.goto("https://www.easemytrip.com/");
    await page.locator("#ddate").click();
    const Month = "Feb 2025";
    while (true) {
        const currentMonth = await page.locator("div[class='month'] div[class='month2']").textContent();
        console.log(currentMonth);       
        if (currentMonth == Month) {
            break;
        }
        await page.locator("#img2Nex").click();        
    }
    await page.locator("li[id='fst_6_01/02/2025']").click();
});
