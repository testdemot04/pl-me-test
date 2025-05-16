import { expect } from '@playwright/test';
import path from 'path';
import { createExcelFromJson } from '../utils/generate_excel';
import employeeUpdates from '../testdata/employee_updates.json';
import { test } from '../fixtures/fixtures.spec';
import { PageNavigations } from '../pages/PageNavigations';
import { waitUntilBannersDisappear } from '../utils/wait_helpers';
import { LoginFlow } from '../flows/LoginFlow';

const excelPath = path.resolve(__dirname, '../upload/generated_employee_update.xlsx');

test.describe('Employee Excel Upload', () => {
  test.beforeAll(() => {
    // Generate Excel from JSON before tests run
    createExcelFromJson(employeeUpdates, excelPath);
  });

  test('Upload Excel and verify updated employee data in UI', async ({ pages, page, loginFlow }) => {

    //login as admin
    await loginFlow.login_as('admin');

    //navigate to people Info employee
    await pages.pageNavigations.clickPeopleInfo();

    //select employee update dropdown
    await pages.employeesPage.click_on_import_button();
    await pages.employeesPage.click_on_employee_dropdown();
    await pages.employeesPage.click_on_update_existing();

    // 2. Upload the Excel file
    try {
      console.log('Uploading file...');
      await page.setInputFiles('input[type="file"]', excelPath);
    } catch (err) {
      console.error('Upload failed:', err);
      throw err; // rethrow to fail test properly
    }
    await pages.employeesPage.click_on_next_button();
    await pages.employeesPage.click_on_next_button();
    await pages.employeesPage.click_on_continue_button();
    await pages.employeesPage.click_on_import_button();
    await waitUntilBannersDisappear(
      page,
      "//span[@class='progess-message']", // Process banner
      "//div[contains(text(),'Import failed. Check your email for details and tr')]",
      "//div[contains(text(),'Import completed successfully')]"
    );

    // 3. Wait for upload confirmation
    //await expect(page.locator('.toast-success')).toContainText('Upload successful');

    // 4. Loop through each employee and validate updated UI fields
    for (const emp of employeeUpdates) {
      const url = `https://qa-portal.mewurk.com/peopleinfo/directory/${emp.employeeCode}/profile/job-info`;
      await page.goto(url);
      //await page.goto(`https://qa-portal.mewurk.com/peopleinfo/directory/100000022185/profile/job-info`);
      await page.waitForLoadState('domcontentloaded');

      // Validate selected fields (example: First Name, Department, Status)
      // const departmentText = page.locator("//p[normalize-space()='Development']");
      // await expect(departmentText).toHaveText(emp["Department"]);
      const departmentText = page.locator("//p[normalize-space()='Human Resources']");
      const deptValue = await departmentText.textContent();

      console.log(`✅ Validating Department: Expected = ${emp["Department"]}, Actual = ${deptValue?.trim()}`);

      await expect(departmentText).toHaveText(emp["Human Resources"]);
    }
  });
});
