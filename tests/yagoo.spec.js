// import {test} from "@playwright/test"
// test('File uploading',async({page})=>{
//     await page.goto('https://uploadnow.io/upload');
//     await page.locator('#uploadfile').setInputFiles('/screen shot/doctorList .jpg');

// })

// test ('upload multiple files,'async({page}))=>{
//     await page.goto('https://uploadnow.io/upload');
//     await page.setInputFiles('//button[text()="Add files")]',['./doctorlist.jpg']);
//     await page.getByRole('button',{name:"validate and upload"}).click();
// }

// import {test} from "@playwright/test"
// test('Handling Download',async({page})=>{
//     await page.goto('https://demoqa.com/upload-download');

// const [downloadedFile]= await Promise.all ([
//     page.waitForEvent('download'),
//     page.getByRole('button',{name:"download"}).click()
// ]);
// await downloadedFile.saveAs('./Download/'+await downloadedFile.suggestedFilename());
// }


// )



test('upload multiple files', async ({ page }) => {
    await page.goto('https://uploadnow.io/upload');

    await page.locator('input[type="file"]').setInputFiles([
        './doctorlist.jpg'
    ]);

    await page.getByRole('button', {
        name: /validate and upload/i
    }).click();
});