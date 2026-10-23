import{test} from "@playwright/test";
test ('Handling Mouse Actions ',async ({page})=>{
    await page.goto('https://demoqa.com/buttons');
    await page.getByRole('button',{name:"Double Click Me"}).dblclick();
    await page.getByRole('button',{name:"Right Click Me"}).click({button:'right'});
    await page.getByRole('button',{name:"Click Me"}).click();
})