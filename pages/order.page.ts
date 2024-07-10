import { Locator, Page, expect} from "@playwright/test";

export class OrderPage {
    page: Page;
    successfullPlacementLocator: Locator;


    constructor(page: Page) {
        this.page = page;
        this.successfullPlacementLocator = this.page.getByRole('heading', { name: 'Thankyou for the order.' });
    };

    async verifyOrder() {
        await expect(this.successfullPlacementLocator).toBeVisible();
    }
};