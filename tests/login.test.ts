import{test} from '../fixtures/fixtures.spec';
import { expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test("login should be successfull",async({pages}) =>{
    await pages.loginPage.navigate_to_url();
    await pages.loginPage.Login_as_admin();
    await pages.homePage.verify_homePage_title();
    // const icon=page.locator("//ul[@id='side-menu']/li");
    // const count= await icon.count();
    // for (let index = 0; index < count; index++) {
    //     await expect(icosn.nth(index)).toBeVisible();
    // }
})