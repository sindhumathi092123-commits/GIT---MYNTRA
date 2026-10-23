
import {test} from '@playwright/test';
test('Handling Dropdown',async({page})=>{
    await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');
    await page.getByRole('button',{name:"multi-select"}).click();
    await page.selectOption('[multiple]',['option1','option2','option3','option4','option5'])
    await page.getByRole ('button',{name:"simple Dropdown"}).click();
    await page.selectOption('.form-select','option2',);
     await page.getByRole('button',{name:"Styled Dropdown"}).click();
    await page.selectOption('text-blue-500','option1');
    await page.getByRole('button',{name:"Grouped Dropdown"}).click();
    await page.selectOption('label=Group 1','option1');

})