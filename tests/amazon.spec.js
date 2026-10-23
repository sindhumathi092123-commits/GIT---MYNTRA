import {test} from "@playwright/test";

test ('launch redbus',async({page})=>{
    await page.goto('https://www.redbus.in/');
    await page.locator('//a[@aria-label="bus tickets"]').click();
})