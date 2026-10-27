// import { test } from "@playwright/test";

// test('Handling JS Alerts', async ({ page }) => {
//     await page.goto('https://demoqa.com/alerts');
//     page.on('dialog', (Dialog) => {
//         console.log(Dialog.type());
//         console.log(Dialog.message());
//         Dialog.accept();

//     })

//     await page.locator("//button[@id ='alertButton']").click();
// })

// // confirm Alert


// test('Handling JS Alerts', async ({ page }) => {
//     await page.goto('https://demoqa.com/alerts');
//     page.on('dialog', (Dialog) => {
//         console.log(Dialog.type());
//         console.log(Dialog.message());
//         Dialog.dismiss();
        

//     })

//     await page.locator("//button[@id='confirmButton']").click();
// })
// //genral Popups


import { test } from '@playwright/test';

test('Handling JS Alert', async ({ page }) => {
    // Your first test code
});

test('Handling JS Confirm Alert', async ({ page }) => {
    // Your second test code
});