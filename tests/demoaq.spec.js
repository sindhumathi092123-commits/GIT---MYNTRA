import {test} from "@playwright/test";

test ('launch demoqa',async({page})=>{
    await page.goto('https://demoqa.com/automation-practice-form/');

    await page.getByRole('textbox',{name:"First Name"}).fill('indhu');
    await page.getByRole('textbox',{name:"Last Name"}).fill ('mathi');
    await page.getByPlaceholder('name@example.com').fill ('mousy.indhuvy23@gmail.com');
    await page.getByLabel('female').check();
    await page.getByPlaceholder('Mobile Number').fill('9840726457');
    await page.getByText('22 Oct 2026').fill('22 Oct 2026');
    await page.getByRole('textbox',{name:"shipDesign"}).fill('shipDesign');
    await page.getByRole('button',{name:'music'}).click();
    await page.getByLabel('select picture').click('choose file');
    await page.getByPlaceholder('Current Address').fill("no 285 ,kottai medu street,vazhuthavur");
    await page.getByRole('textbox',{name:"selectState"}).fill ('TamilNadu');
    await page.getByRole('textbox',{name:"selectCity"}).fill ('villupuram');
    await page.getByRole('button',{name:'submit'}).click("submit");
})