import {test} from "@playwright/test";

test ('launch redbus',async({page})=>{
    await page.goto('https://www.redbus.in/');
    await page.locator('//a[@aria-label="bus tickets"]').click();
    await page.getByRole('button',{name:"Styled Dropdown"}).click();
    await page.selectOption('text-blue-500','option1');
    await page.getByRole('button',{name:"Grouped Dropdown"}).click();
    await page.selectOption('label=Group 1','option1');
})
