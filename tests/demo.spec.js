import { test } from "@playwright/test";

test('Handling JS Alerts', async ({ page }) => {
    await page.goto('https://demoqa.com/alerts');
    page.on('dialog', (Dialog) => {
        console.log(Dialog.type());
        console.log(Dialog.message());
        Dialog.accept();

    })

    await page.locator("//button[@id ='alertButton']").click();
})

cconfirm Alert
import { test } from "@playwright/test";

test('Handling JS Alerts', async ({ page }) => {
    await page.goto('https://demoqa.com/alerts');
    page.on('dialog', (Dialog) => {
        console.log(Dialog.type());
        console.log(Dialog.message());
        Dialog.dismiss();
        

    })

    await page.locator("//button[@id='confirmButton']").click();
})
//genral Popups
