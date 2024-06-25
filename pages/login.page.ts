import { Locator, Page, expect } from "@playwright/test";

export class LoginPage {
    page: Page;
    userEmailLocator: Locator;
    userPasswordLocator: Locator;
    userLoginLocator: Locator;
    pageNameLocator: Locator;
    signOutLocator: Locator;
    emailInputErrorStateLocator: Locator;
    passwordInputErrorStateLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userEmailLocator = this.page.locator('#userEmail');
        this.userPasswordLocator = this.page.locator('#userPassword');
        this.userLoginLocator = this.page.getByText('Login');
        this.pageNameLocator = this.page.getByRole('link', { name: 'Automation Automation Practice' });
        this.signOutLocator = this.page.getByRole('button', { name: 'Sign Out' });
        this.emailInputErrorStateLocator = this.page.locator('#userEmail.is-invalid');
        this.passwordInputErrorStateLocator = this.page.locator('#userPassword.is-invalid');
    };

    async loginToTheApp(email: string, password: string) {
        await this.open();
        await this.inputEmail(email);
        await this.inputPassword(password);
        await this.login();
    }

    async login() {
        await this.userLoginLocator.click();
    }
    async open() {
        await this.page.goto('');
    }

    async inputEmail(email: string) {
        await this.userEmailLocator.fill(email);
    }


    async inputPassword(password: string) {
        await this.userPasswordLocator.fill(password);
    }

    async verifyLogin() {
        await expect(this.pageNameLocator).toBeVisible();
        await expect(this.signOutLocator).toBeVisible();
    }

    async verifyValidation(errorMessage: string){
        await expect(this.page.getByText(errorMessage)).toBeVisible();
    }
};