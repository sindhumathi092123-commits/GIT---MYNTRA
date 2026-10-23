import { test } from "@playwright/test";

// test('Handling Frames',async({page})=>{
//     await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame');
//     const frame = page.frameLocator('//iframe[@name="globalSqa"]');
//     await frame.getByText('JMeter Training').click();
//     // await frame.getByText('LoadTraining').click();
//     await page.getByRole('link', { name: 'Drag And Drop' }).click();
// await page.waitForTimeout(3000);
// })

// test('Handling Frames',async({page})=>{
//     await page.goto('https://www.tutorialspoint.com/selenium/practice/frames.php');
//     const frame1 = page.frameLocator('//h2[text()="Iframe 2"]/preceding-sibling::iframe[@src="new-tab-sample.php"]');
//     await frame1.locator(`//a[@href="https://www.tutorialspoint.com"]`).click();

//     const frame2 = page.frameLocator('//h2[text()="Iframe 2"]/following-sibling::iframe[@src="new-tab-sample.php"]');
//     await frame2.locator(`//a[@href="https://www.tutorialspoint.com"]`).click();

// })
test('Handling Frames', async ({ page }) => {
    await page.goto('https://www.hyrtutorials.com/p/frames-practice.html');
    const frame2= page.frameLocator('#frm2');
    await frame2.getByPlaceholder("Enter First Name").fill("indhu");
    await frame2.getByPlaceholder("Enter Last Name").fill("mathi");
    await frame2.locator('//input[@id="femalerb"]').check();
    await frame2.locator('//input[@id="chinesechbx"]').check();
    await frame2.getByPlaceholder("Enter Email").fill("purchase@voyagermarine.com");
    
    const frame3 = page.frameLocator('#frm3');
    const frame3_2 = frame3.frameLocator('#frm2');
    await frame3_2.getByPlaceholder("Enter First Name").fill("indhu");
    await frame3_2.getByPlaceholder("Enter Last Name").fill("mathi");
    await frame3_2.locator('//input[@id="femalerb"]').check();
    await frame3_2.locator('//input[@id="chinesechbx"]').check();
    
})



