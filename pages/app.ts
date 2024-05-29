// page manager

import { Page } from "@playwright/test";
import { LoginPage } from "./login.page";
import { RegistrationPage } from "./registration.page";
import { MainPage } from "./main.page";

export class App{
    page: Page;
    loginPage: LoginPage;
    registrationPage: RegistrationPage;
    mainPage: MainPage;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.registrationPage = new RegistrationPage(this.page);
        this.mainPage = new MainPage(this.page);
    };
};

