import { privateDecrypt } from 'crypto';
import { Pages } from '../types/pages';
import { Page } from '@playwright/test';


export class LeaveFlow {

    constructor(
        private pages: Pages,
        private page: Page) { }


    async apply_casual_leave() {
        this.pages.leavePage.click_on_apply_leave_button();
        this.pages.leavePage.click_on_leave_type_field();
        this.pages.leavePage.click_from_date();
        this.pages.leavePage.select_yesterday_date();
        this.pages.leavePage.click_on_apply_button();
    }

    async approveLeave() {
    //     await this.pages.leaveApprovalPage.openPendingRequests();
    //     await this.pages.leaveApprovalPage.approveLeave();
    //   }
}