import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { Pages } from '../types/pages';
import { users } from '../fixtures/users';


export class LoginFlow {
    
    constructor(
        private pages: Pages,
        private page: Page
    ) { }

    async login_as(role: 'admin' | 'manager' | 'employee'): Promise<void> {
        let email = '';
        let password = '';
    
        switch (role) {
          case 'admin':
            email = users.admin.emailId;
            password = users.admin.password;
            break;
          case 'manager':
            email = users.manager.emailId;
            password = users.manager.password;
            break;
          case 'employee':
            email = users.employee.emailId; // Customize for employee
            password = users.employee.password; // Customize for employee
            break;
        }

        await this.pages.loginPage.navigate_to_url();
        await this.pages.loginPage.Login(email,password);
        await this.page.waitForLoadState('networkidle'); // Wait until no network requests for 500ms
        await this.pages.homePage.verify_homePage_title();
    }
}