import { Locator, Page, expect} from "@playwright/test";

export class CartPage {
    page: Page;
    productLocator: Locator;
    buyButtonLocator: Locator;
    cvvCodeLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productLocator = this.page.locator('//button[text()="Buy Now"]/../../div/h3[text()="IPHONE 13 PRO"]');
        this.buyButtonLocator = this.page.locator('button', { hasText: 'Buy Now' });
        this.cvvCodeLocator = this.page.locator('//div[text()="CVV Code "]/../input');
    };

    async open() {
        await this.page.goto('/client/dashboard/cart');
        await this.page.waitForURL('/client/dashboard/cart');
        
    };
    async confirmInCart(){
        await this.productLocator.click();
        await this.buyButtonLocator.click();
        await this.cvvCodeLocator.fill("12345");
    };  
};