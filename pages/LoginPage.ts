import { Locator, Page ,expect} from "@playwright/test"
import { users} from "../fixtures/users";



export class LoginPage {

    readonly page: Page;
    readonly emailID: Locator;
    readonly password: Locator;
    readonly nextButton: Locator;
    readonly loginButton: Locator;
    readonly tenantSelection:Locator;

    constructor(page: Page) {
        this.page = page
        this.emailID = page.locator("//input[@placeholder='Email ID / Mobile Number']");
        this.nextButton = page.locator('button:has-text("Next")');
        this.password = page.locator("//input[@placeholder='Password']");
        this.loginButton = page.locator("//button[normalize-space()='Login']");
        this.tenantSelection=page.locator("//div[normalize-space()='MP']");
    }

    async navigate_to_url() {
        await this.page.goto("https://qa-portal.mewurk.com/login");
    }

    async clickLogin() {
        await expect(this.loginButton).toBeVisible({ timeout: 5000 });
        await expect(this.loginButton).toBeEnabled();
        await this.loginButton.click();
    }

    async Login(email,password): Promise<void> {
        await this.emailID.fill(email);
        await this.nextButton.click();
        await this.password.fill(password)
        await this.clickLogin();
    }

}
