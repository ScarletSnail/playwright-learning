import { Locator, Page, expect } from "@playwright/test";
//TO DO divide registration to the app to the single methods

export class RegistrationPage {
    page: Page;
    userEmailLocator: Locator;
    userLastNameLocator: Locator;
    userFirstNameLocator: Locator;
    userMobileLocator: Locator;
    userPasswordLocator: Locator;
    userConfirmPasswordLocator: Locator;
    userGenderMaleLocator: Locator;
    userGenderFemaleLocator: Locator;
    userAgeCheckboxLocator: Locator;
    registerButtonLocator: Locator;
    successfullCreationLocator: Locator;
    loginButtonLocator: Locator;
    startRegistrationButtonLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userEmailLocator = this.page.locator('#userEmail'); //can be transfered to vocabulary
        this.userFirstNameLocator = this.page.locator('#firstName');
        this.userLastNameLocator = this.page.locator('#lastName');
        this.userMobileLocator = this.page.locator('#userMobile');
        this.userPasswordLocator = this.page.locator('#userPassword');
        this.userConfirmPasswordLocator = this.page.locator('#confirmPassword');
        this.userGenderFemaleLocator = this.page.locator('[value="Female"]');
        this.userGenderMaleLocator = this.page.locator('[value="Male"]');
        this.userAgeCheckboxLocator = this.page.locator('[type="checkbox"]');
        this.registerButtonLocator= this.page.locator('#login');
        this.successfullCreationLocator = this.page.getByText('Account Created Successfully');
        this.loginButtonLocator = this.page.getByText('Login');
        this.startRegistrationButtonLocator = this.page.getByRole('link', { name: 'Register' });
    };

    async registerToTheApp(firstName: string, email: string, lastName: string, userMobile: string, password: string) {
        await this.page.goto('');

        await expect(this.page).toHaveTitle("Let's Shop");

        await this.startRegistration();
        await expect(this.page.locator('.login-title')).toBeVisible();

        //TO DO create separate methods. To try: create one method "input" and pass locator and value

        await this.inputFirstName(firstName);
        await this.inputLastName(lastName);
        await this.inputEmail(email);
        await this.inputUserMobile(userMobile);
        await this.inputPassword(password);
        await this.inputConfirmPassword(password);

        await this.selectGenger('Male');
        await this.confirmAge();

        await this.page.pause();

        await this.clickRegister();
        await this.verifyCreation();
        await this.loginAfterRegistration();
    }

    async startRegistration(){
        await this.startRegistrationButtonLocator.click();
    };

    async inputEmail(email: string){
        await this.userEmailLocator.fill(email);
    };

    async inputFirstName (firstName: string){
        await this.userFirstNameLocator.fill(firstName);
    };

    async inputLastName (lastName: string){
        await this.userLastNameLocator.fill(lastName);
    };

    async inputUserMobile (userMobile: string){
        await this.userMobileLocator.fill(userMobile);
    };

    async inputPassword (password: string){
        await this.userPasswordLocator.fill(password);
    };

    async inputConfirmPassword(password: string){
        await this.userConfirmPasswordLocator.fill(password);
    };
   
    async confirmAge(){
        await this.userAgeCheckboxLocator.check();
    };
            
    async selectGenger(gender: string){
        if (gender = 'Female') {
            await this.userGenderFemaleLocator.click();
        };
        if (gender = 'Male') {
            await this.userGenderMaleLocator.click();
        };
    };

    async verifyCreation(){
        await expect(this.successfullCreationLocator).toBeVisible();
    };

    async clickRegister(){
        await this.registerButtonLocator.click();       
    };

    async loginAfterRegistration(){
        await this.loginButtonLocator.click();
    };
};
