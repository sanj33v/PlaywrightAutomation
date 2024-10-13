import { Page } from "@playwright/test"


export default class HomePage {
    private readonly Url = "https://rta-edu-stg-web-03.azurewebsites.net/core";
    private readonly userName = "//input[@id='signInName']";
    private readonly password = "//input[@id='password']";
    private readonly signIn = "//button[@id='next']";
    public readonly Logo = "[aria-label='Rethink Ed logo']";
    private readonly studentTab = "li[role='tablist'] a[aria-label='Students']";
    public readonly studentPage = "//h1[normalize-space()='My Students']";
    private readonly addStudent = "//em[@class='rta-icon plus-lg']";
    private readonly firstName = "//input[@id='firstName']";
    private readonly lastName = "//input[@id='lastName']";
    private readonly uploadPhoto = "//label[@class='fileUpload action-link btn-link blue mt-2 mb-0 blue-label']"
    private readonly studentId = "//div[@class='col-12 col-md-4 col-lg-3']//div//input[@id='stateTestNumber']";
    private readonly selectGender = "//select[@id='genderDD']";
    private readonly studentGender = "Male";
    private readonly selectEthnicity = "//select[@id='ethnicityDD']";
    private readonly studentEthnicity = 'Asian';////option[normalize-space()='Asian']
    private readonly selectBuilding = "//div[@class='col-12 col-md-4 col-lg-3']//div//select[@id='schoolDD']";
    private readonly studentBuilding = "Sub Account 1";////div[@class='col-12 col-md-4 col-lg-3']//div//option[@value='17973'][normalize-space()='Sub Account 1']
    private readonly studentbirthday = "//input[@id='datepicker-1']";
    private readonly Birthday = "12/3/1992";
    private readonly selectGrade = "//select[@id='gradeDD']";
    private readonly studentGrade = "Grade 1";////option[normalize-space()='Grade 1']
    private readonly Email = "//input[@id='email']";
    private readonly studentEamil = "sanjeev123@gmail.com";
    private readonly studentAcademicNeed = "//input[@id='iep_selected']";
    private readonly otherDetails = "//body/app-root/div[@id='skipcontent']/add-edit-student/div[@class='card']/div[@class='card-body px-sm-5']/div/form[@class='ng-invalid ng-touched ng-dirty']/div[@id='form1Start']/div[@class='row']/div[@class='col-12 col-md-5 col-lg-7']/div/div[@class='row']/div[1]/span[1]";
    private readonly createUserName = "//input[@id='userName']";
    private readonly createPassword = "//input[@id='password']";
    private readonly confirmPassword = "//input[@id='password2']";
    private readonly saveAndClose = "//button[@class='btn btn-primary btn-icon mb-2']";

    constructor(private page: Page) {

    }

    async navigateToUrl() {
        await this.page.goto(this.Url);
        await this.page.waitForLoadState();
    }

    public async login() {
        await this.page.locator(this.userName).fill("kavithasub")
        await this.page.locator(this.password).fill("Welcome123")
        await this.page.locator(this.signIn).click().catch((error) => {
            console.error(`error clicking login button ${error}`);
            throw error;
        });
    }

    public async navigateToStudent() {
        await this.page.waitForSelector(this.studentTab)
        await this.page.locator(this.studentTab).click();
    }

    public async addStudents() {
        await this.page.waitForSelector(this.addStudent)
        await this.page.locator(this.addStudent).click();
        await this.page.waitForSelector(this.firstName);
        await this.page.locator(this.firstName).fill("Sanjeev");
        await this.page.locator(this.lastName).fill("Singh");
        await this.page.locator(this.studentId).fill("001");
        await this.page.locator(this.selectGender).selectOption(this.studentGender);
        await this.page.locator(this.selectEthnicity).selectOption(this.studentEthnicity);
        await this.page.locator(this.selectBuilding).selectOption(this.studentBuilding);
        await this.page.locator(this.selectGrade).selectOption(this.studentGrade);
        await this.page.locator(this.Email).fill(this.studentEamil);
        await this.page.locator(this.studentAcademicNeed).click();
        await this.page.locator(this.createUserName).fill("sanjeev_singh2411");
        await this.page.locator(this.createPassword).fill("sanjeev@123");
        await this.page.locator(this.confirmPassword).fill("sanjeev@123");
        await this.uploadStudentPhoto();
        await this.page.locator(this.saveAndClose).click();
    }

    public async uploadStudentPhoto() {
        const [UploadFile] = await Promise.all([
            this.page.waitForEvent('filechooser'),
            this.page.locator(this.uploadPhoto).click()
        ])
        UploadFile.setFiles("src/img.jpg");
        await this.page.waitForTimeout(5000);
    }
}