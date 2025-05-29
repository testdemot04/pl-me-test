import { request } from "@playwright/test";
importimport { getConfig } from "./config";
import { getConfig } from "./config";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

export async function loginAndGetToken( userName: string, password: string,otp: string | null) {
    const context = await request.newContext();
    const response = await context.post("/account/login", {
        data: {userName, password, otp}
    });
    const data = await response.json();
    const token = data.token;
    return token;
}
