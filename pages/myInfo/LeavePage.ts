import { Locator, Page } from "@playwright/test";

export class LeavePage {

    readonly applyLeave;
    readonly leaveTypes;
    readonly fromDate;
    readonly selectDate;
    readonly applyButton;


    constructor(private page: Page) {
        this.applyLeave = page.getByRole('button', { name: 'Apply Leave' }).click();
        this.leaveTypes= page.getByRole('button', { name: 'Casual Leave' }).click();
        this.fromDate= page.locator('div').filter({ hasText: /^From\*Select date$/ }).getByRole('button').click();
        this.selectDate= page.getByRole('option', { name: 'Choose Thursday, May 8th,' }).click();
        this.applyButton=page.locator("//button[normalize-space()='Apply']");
    }

    async click_on_apply_leave_button(){
        await this.applyLeave.click();
    }

    async click_on_leave_type_field(){
        await this.leaveTypes.click();
    }

    async click_from_date(){
        await this.fromDate.click();
    }

    async select_yesterday_date(){

    }

    async click_on_apply_button(){
        await this.applyButton.click();
    }
}