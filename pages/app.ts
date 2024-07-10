// page manager

import { Page } from "@playwright/test";
import { LoginPage } from "./login.page";
import { RegistrationPage } from "./registration.page";
import { MainPage } from "./main.page";
import { CartPage } from "./cart.page";
import { OrderPage } from "./order.page";
import { PaymentPage } from "./payment.page";

export class App{
    page: Page;
    loginPage: LoginPage;
    registrationPage: RegistrationPage;
    mainPage: MainPage;
    cartPage: CartPage;
    orderPage: OrderPage;
    paymentPage: PaymentPage;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.registrationPage = new RegistrationPage(this.page);
        this.mainPage = new MainPage(this.page);
        this.cartPage = new CartPage(this.page);
        this.orderPage = new OrderPage(this.page);
        this.paymentPage = new PaymentPage(this.page);
    };
};

