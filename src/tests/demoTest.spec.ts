import { test, expect } from "@playwright/test";
import homePage from "../Pages/homePage"
import { Locators } from "../Constants.ts/UIElements";

test("Add User", async ({ page }) => {
    const HomePage = new homePage(page);

    //Naviagating to URL
    await HomePage.navigateToUrl();

    //Login to the application
    await HomePage.login();

    //Validating Landing page
    expect(page.isVisible(Locators.Logo)).toBeTruthy();

    //Navigate to setup Page and manage Team member
    await HomePage.navigateToSetup();

    //Validating student landing page
    expect(page.isVisible(Locators.teamMemberPage)).toBeTruthy();

    //Creating new student with all details
    await HomePage.addMembers();
})

test("Edit User", async ({ page }) => {
    const HomePage = new homePage(page);

    //Naviagating to URL
    await HomePage.navigateToUrl();

    //Login to the application
    await HomePage.login();

    // //Navigate to setup Page and manage Team member
    await HomePage.navigateToSetup();

    // //Edit User
    await HomePage.editUser();
})

test("Delete User", async ({ page }) => {
    const HomePage = new homePage(page);

    //Naviagating to URL
    await HomePage.navigateToUrl();

    //Login to the application
    await HomePage.login();

    //Navigate to setup Page and manage Team member
    await HomePage.navigateToSetup();

    //Edit User
    await HomePage.deleteUser();
})