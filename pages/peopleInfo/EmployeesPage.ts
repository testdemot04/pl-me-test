import { Locator, Page } from "@playwright/test";


export class EmployeesPage {

    readonly importDropdown: Locator;
    readonly employeeDropdown: Locator;
    readonly updateExisting: Locator;
    readonly browseButton: Locator;
    readonly nextButton: Locator;
    readonly continueButton:Locator;
    readonly importButton:Locator;
    readonly processMessage:Locator;

    constructor(private page:Page) {
        this.importDropdown = page.locator("//button[normalize-space()='Import']");
        this.employeeDropdown = page.locator('//span[normalize-space()="Employee"]');
        this.updateExisting = page.locator('//a[normalize-space()="Update Existing"]');
        this.browseButton = page.locator("//span[contains(@class,'dsm-linkbtn upload-btn')]");
        this.nextButton=page.locator("//button[normalize-space()='Next']");
        this.continueButton=page.locator("//button[normalize-space()='Continue']");
        this.importButton=page.locator("//button[normalize-space()='Import']");
        this.processMessage=page.locator("//span[@class='progess-message']");
    }

    async click_on_import_dropdown() {
        console.log('inside click dropdown')
        await this.importButton.waitFor({state:"visible",timeout:5000});
        await this.importDropdown.click();
    }

    async click_on_employee_dropdown() {
        await this.employeeDropdown.click();
    }

    async click_on_update_existing() {
        await this.updateExisting.click();
    }

    async click_on_browse_button() {
        await this.browseButton.click();
    }

    async click_on_next_button(){
        console.log('inside next')
        await this.nextButton.click();
        console.log('clicked next')
    }

    async click_on_continue_button(){
        await this.continueButton.click();
    }

    async click_on_import_button(){
        await this.importButton.click();
    }
}