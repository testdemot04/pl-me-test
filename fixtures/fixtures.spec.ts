import { test as baseTest, expect } from '@playwright/test';
import { Pages } from '../types/pages';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { PageNavigations } from '../pages/PageNavigations';
import { LoginFlow } from '../flows/LoginFlow';
import { EmployeesPage } from '../pages/peopleInfo/EmployeesPage';
import { LeavePage } from '../pages/myInfo/LeavePage';

export const test = baseTest.extend<{pages:Pages,loginFlow:LoginFlow}>({
    pages: async ({ page }, use) => {
        await use({
            loginPage :new LoginPage(page),
            homePage : new HomePage(page),
            pageNavigations: new PageNavigations(page),
            employeesPage : new EmployeesPage(page),
            leavePage:new LeavePage(page)
        });
    },

    loginFlow: async({pages,page},use)=>{
        const loginFlow= new LoginFlow(pages,page);
        await use(loginFlow);
    }

});