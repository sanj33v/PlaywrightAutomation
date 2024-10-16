import { Page } from "@playwright/test"
import { Locators } from "../Constants.ts/UIElements";

function createGuid() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(36).substring(1);
    }
    return (S4() + "-" + S4()).toLowerCase();
}

var guid = createGuid();
var mobNo = Math.floor(Math.random() * 9000000000) + 1000000000;

const Name = "SanjeevKumar" + guid;
const userName = "SanjeevKumar@" + guid;
const emailId = guid + "sanjeev@gmail.com"
export default class homePage {


    constructor(private page: Page) {

    }

    async navigateToUrl() {
        await this.page.goto(Locators.baseUrl);
        await this.page.waitForLoadState("domcontentloaded");
        await this.page.waitForLoadState("networkidle");
    }

    public async login() {
        await this.page.getByPlaceholder(Locators.userName).fill('kavithasub');
        await this.page.getByPlaceholder(Locators.password).click();
        await this.page.getByPlaceholder(Locators.password).fill('Welcome123');
        await this.page.getByRole('button', { name: 'Sign in' }).click().catch((error) => {
            console.error(`error clicking login button ${error}`);
            throw error;
        });
    }

    public async navigateToSetup() {
        await this.page.getByRole('link', { name: 'Setup' }).click();
        await this.page.getByLabel(Locators.manageMember).click();
        await this.page.getByRole('textbox', { name: 'Search team members' }).click();
    }

    public async addMembers() {
        await this.page.getByRole('button', { name: 'Add Team Member' }).click();        
        await this.page.getByLabel(Locators.firstName).fill(Name);
        await this.page.locator(Locators.lastName).fill("Singh");
        await this.page.locator(Locators.Email).fill(emailId);
        await this.page.locator(Locators.cellPhone).fill(`${mobNo}`)
        await this.page.locator(Locators.createUserName).fill(userName);
        await this.page.locator(Locators.createPassword).fill("Sk@sk241191");
        await this.page.locator(Locators.confirmPassword).fill("Sk@sk241191");
        await this.uploadMemberPhoto();
        await this.page.locator(Locators.saveAndClose).click();
        await this.page.waitForTimeout(5000);
    }

    public async uploadMemberPhoto() {
        const [UploadFile] = await Promise.all([
            this.page.waitForEvent('filechooser'),
            this.page.locator(Locators.uploadPhoto).click()
        ])
        UploadFile.setFiles("src/img.png");
    }

    public async editUser() {
        await this.page.getByRole('textbox', { name: 'Search team members' }).fill(Name);
        await this.page.getByRole('link', { name: 'Edit' }).first().click();
        await this.page.getByLabel(Locators.firstName).click();
        await this.page.getByLabel(Locators.firstName).fill(Name);
        await this.page.locator(Locators.saveAndClose).click();
        await this.page.waitForTimeout(5000);
    }

    public async deleteUser() {
        await this.page.getByRole('textbox', { name: 'Search team members' }).fill(Name);
        await this.page.getByRole('link', { name: 'Edit' }).first().click();
        await this.page.getByRole('button', { name: 'Delete' }).click();        
        await this.page.locator(Locators.deleteConfirm).click();
        await this.page.getByText(Locators.manageMember).click();        
        await this.page.waitForTimeout(5000);
    }
}