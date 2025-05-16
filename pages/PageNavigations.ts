import { Locator, Page } from "@playwright/test";



export class PageNavigations {

    readonly page: Page;
    readonly peopleInfoEmployeeLink: Locator;


    constructor(page: Page) {

        this.page = page;
        this.peopleInfoEmployeeLink = page.locator("//a[@class='dsm-nav-link nav-link-peopleinfo ']");
    }

    async clickPeopleInfo() {
        await this.peopleInfoEmployeeLink.click();
    }

    async click_PeopleInfo_Leave_LeaveBalance_summary() {
        await this.peopleInfoEmployeeLink.click();
    }
}