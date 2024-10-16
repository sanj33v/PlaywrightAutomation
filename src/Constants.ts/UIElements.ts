export enum Locators {
     baseUrl = "https://rta-edu-stg-web-03.azurewebsites.net/core",
     userName = 'Username or Email',
     password = 'Password',
     signIn = "//button[@id='next']",
     Logo = "[aria-label='Rethink Ed logo']",
     setupTab = "li[role='tablist'] a[aria-label='Setup']",
     manageMember = 'Manage Team Members',
     addMember = "//em[@class='rta-icon plus-lg']",
     teamMemberPage = "//h1[normalize-space()='Add Team Member']",
     firstName = 'First Name Required',
     lastName = "//input[@id='lastName']",
     uploadPhoto = "//button[normalize-space()='Upload a photo']",
     Email = "//input[@id='email']",
     cellPhone = "//input[@id='phone']",
     createUserName = "//input[@id='username']",
     createPassword = "//input[@id='password']",
     confirmPassword = "//input[@id='confirmPassword']",
     saveAndClose = "//button[@class='btn btn-primary btn-icon-left']",
     memberRole = "#memberRoleSelection",
     value = " Parent/Home Caregiver ",
     searchTeamMember = "[class='col-10 col-sm-6 mb-2'] [class='k-input-inner']",
     editUser = "//a[normalize-space()='Edit']",
     deleteUser = "//button[normalize-space()='Delete']",
     deleteConfirm = "//button[@class='btn btn-w-110 btn-danger']",
     manageBack = "//div[@class='back-link mb-0 p-2']",
     dontSave = "//div[@class='text-center mt-4'] //button[@class='btn ms-5 btn-success']"
}
