import { expect, Locator, Page } from "@playwright/test";

export class HomePage {

    readonly page: Page;
    readonly homePageTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homePageTitle = page.locator("//h3[normalize-space()='Home']");
    }

    async verify_homePage_title() {
        await expect(this.homePageTitle).toBeVisible({timeout:1000});
    }

}

