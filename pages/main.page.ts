import { Locator, Page, expect} from "@playwright/test";

export class MainPage {
    page: Page;
    iPhoneLocator: Locator;
    addedToCartLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.iPhoneLocator = this.page.locator('//*[text()="IPHONE 13 PRO"]/../../button[text()=" Add To Cart"]');
        this.addedToCartLocator = this.page.getByText('Product Added To Cart');
    };
    async open(){

    };
    
    async addSpecificProductToCart(option: "IPHONE 13 PRO" | "dsgjhf"){
        await this.page.locator(`//*[text()="${option}"]/../../button[text()=" Add To Cart"]`).click();
    }
    async addProductTocart(){
       // await this.iPhoneLocator.click();
       await this.addSpecificProductToCart("IPHONE 13 PRO");
        await this.addedToCartLocator.isVisible();
    }


};
