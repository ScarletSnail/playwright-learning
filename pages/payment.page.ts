import { Locator, Page, expect} from "@playwright/test";

export class PaymentPage {
    page: Page;
    countryPlaceholderLocator: Locator;
    countryNameLocator: Locator;
    expirationMonthLocator: Locator;
    expirationYearLocator: Locator;
    placeOrderButtonLocator: Locator;
    successfullOrderLocator: Locator;


    constructor(page: Page) {
        this.page = page;
        this.countryPlaceholderLocator = this.page.getByPlaceholder('Select Country');
        this.countryNameLocator = this.page.getByRole('button', { name: ' Ukraine' });
        this.expirationMonthLocator = this.page.getByRole('combobox').first();
        this.expirationYearLocator = this.page.getByRole('combobox').nth(1);
        this.placeOrderButtonLocator = this.page.getByText('Place Order ');
        this.successfullOrderLocator = this.page.getByText('Order Placed Successfully');

    };

    async open() {
       // await this.page.goto('/client/dashboard/cart');
        //await this.page.waitForURL('/client/dashboard/cart');
        
    };
    async placeOrder(){
        await this.countryPlaceholderLocator.pressSequentially('ukr');
        await this.countryNameLocator.click();
        await this.expirationMonthLocator.selectOption('06');
        await this.expirationYearLocator.selectOption('30');
        await this.placeOrderButtonLocator.click();
    };

    async verifySuccessfull(){
        await expect(this.successfullOrderLocator).toBeVisible();

    };
    
};