import { test, expect } from "@playwright/test";
import HomePage from "../Pages/homePage"

test("DemoTest", async ({ page }) => {
    const homepage = new HomePage(page);

    //Naviagating to URL
    await homepage.navigateToUrl();

    //Login to the application
    await homepage.login();

    //Validating Landing page
    expect(page.isVisible(homepage.Logo)).toBeTruthy();

    //Navigationg to student Page
    await homepage.navigateToStudent();

    //Validating student landing page
    expect(page.isVisible(homepage.studentPage)).toBeTruthy();

    //Creating new student with all details
    await homepage.addStudents();

    //assigning team member
    await homepage.assignMember();
})