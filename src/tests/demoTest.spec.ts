import { test, expect } from "@playwright/test";
import HomePage from "../Pages/homePage"

test("DemoTest", async ({ page }) => {
    const homepage = new HomePage(page);
    await homepage.navigateToUrl();
    await homepage.login();    
    expect(page.isVisible(homepage.Logo)).toBeTruthy();
    await homepage.navigateToStudent();
    expect(page.isVisible(homepage.studentPage)).toBeTruthy();
    await homepage.addStudents();
})