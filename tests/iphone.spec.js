// import { test } from "@playwright/test";

// test("Find minimum product rating", async ({ page }) => {

//     await page.goto("https://www.amazon.in/");

//     const ratingsText = await page.locator(
//        `//span[contains(text(),'iPhone 17 ')]/ancestor::div[@data-cy="title-recipe"]/following-sibling::div[@data-cy="reviews-block"]//span[contains(@class,"a-size-small a-color-base") and normalize-space(.)="${maxRating}"]`;
//     ).allInnerTexts();

//      const ratings = ratingsText.map(text =>
//         parseFloat(text.trim())
//     ).filter(rating => !isNaN(rating));

//     const maxRating = Math.max(...ratings);

//     console.log("Maximum Product Rating:", maxRating);

// });

import { test } from "@playwright/test";

test("Find maximum rating and click Add to Cart", async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    await page.locator('#twotabsearchtextbox').fill('iphone 17 pro');
    await page.locator('#twotabsearchtextbox').press('Enter');

    await page.waitForLoadState();

    // Step 1: Get all product ratings
    const ratingsText = await page.locator(
        `//span[contains(text(),'iPhone 17 Pro ')]/ancestor::div[@data-cy="title-recipe"]/following-sibling::div[@data-cy="reviews-block"]//span[contains(@class,"a-size-small a-color-base")]`
    ).allInnerTexts();

    // Step 2: Convert ratings into numbers using map()
    const ratings = ratingsText.map(text => parseFloat(text))
       
    // Step 3: Find maximum rating dynamically
    const maxRating = Math.max(...ratings);

    console.log("Maximum Rating:", maxRating);

    // Step 4: Use your XPath structure with the maximum rating
    const addToCartXPath =
        `//span[contains(text(),'iPhone 17 Pro ')]/ancestor::div[@data-cy="title-recipe"]/following-sibling::div[@data-cy="reviews-block"]//span[contains(@class,"a-size-small a-color-base") and normalize-space(.)="${maxRating}"]/ancestor::div[@role="listitem"]//input[@name="submit.addToCart"]`;

    // Step 5: Click Add to Cart
    const addToCart = page.locator(addToCartXPath).first();

    await addToCart.waitFor({ state: "visible" });
    await addToCart.click();

    console.log("Clicked Add to Cart for maximum-rated product");

});