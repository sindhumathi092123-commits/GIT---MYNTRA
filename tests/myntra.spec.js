

//  
// import { test } from "@playwright/test";

// test("Find minimum product price", async ({ page }) => {

//     await page.goto("https://www.myntra.com/boy-tshirts");

//     // Your XPath to get all product prices
//     const prices = page.locator(
//         '//span[@class="product-discountedPrice"]'
//     );

//     const count = await prices.count();
//     console.log("Total prices:", count);

//     let minPrice = Infinity;

//     for (let i = 0; i < count; i++) {

//         const priceText = await prices.nth(i).innerText();

//         // Convert price text into a number
//         const price = Number(priceText.replace(/[^\d]/g, ""));

//         if (price < minPrice) {
//             minPrice = price;
//         }
//     }

//     console.log("Minimum product price: ₹" + minPrice);
// });

// import { test } from "@playwright/test";
// test('launch myntra', async ({ page }) => {
//     await page.goto('https://www.myntra.com/boy-tshirts');
//     // const products = page.locator('//li[@class="product-base"]');

//     // const count = await products.count();
//     // console.log('Total products:', count);
//     const products = page.locator('//span[@class="product-discountedPrice"]')

//     const count = await products.count();
//     console.log('Total discounted products:', count);

// })
// import { test } from "@playwright/test";

// test("Find minimum product price using map()", async ({ page }) => {

//     await page.goto("https://www.myntra.com/boy-tshirts");

//     const prices = page.locator(
//         '//span[@class="product-discountedPrice"]'
//     );

//     const priceTexts = await prices.allInnerTexts();

//     // Convert price strings into numbers
//     const priceValues = priceTexts.map(text =>
//         Number(text.replace(/[^\d]/g, ""))
//     );

//     console.log("All prices:", priceValues);

//     // Find the minimum price
//     const minPrice = Math.min(...priceValues);

//     console.log("Minimum product price: ₹" + minPrice);

//     //const ProductBrand = `//span[normalize-space(.)='${minPrice.trim()}']/ancestor::li[@class="product-base"]//h3[@class="product-brand"]`;
//     const ProductBrand = page.locator(`//span[normalize-space(.)='${minPrice}']/ancestor::li[@class="product-base"]//h3[@class="product-brand"]`);
//     console.log(ProductBrand)

// });
// discount product mimimum price,name brand name 

// import { test } from "@playwright/test";

// test("Find minimum product price using map()", async ({ page }) => {

//     await page.goto("https://www.myntra.com/boy-tshirts");

//     const prices = page.locator(
//         //li[@class="product-base"]//div[@class="product-price"]//span[@class="product-discountPrice"]
//         `//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"]`
//         //span[@class="product-discountedPrice"]
//     );

//     const priceTexts = await prices.allInnerTexts();

//     // Convert price strings into numbers
//     const priceValues = priceTexts.map(text =>
//         Number(text.replace(/[^\d]/g, ""))
//     );

//     console.log("total prices:"
//         , priceValues);

//     // Find the minimum price
//     const minPrice = Math.min(...priceValues);

//     console.log("Minimum product price: ₹" + minPrice);

//     // Locate the brand of the product with the minimum price
//     const ProductBrand = page.locator(
//         // `//span[@class='product-discountedPrice'and normalize-space(.)='Rs. ${minPrice}']/ancestor::li[@class="product-base"]//h3[@class="product-brand"]`
//     `//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"and normalize-space(.)='Rs. ${minPrice}']/ancestor::div[@class="product-productMetaInfo"]//h3[@class="product-brand"]`
// );

//     console.log("Product Brand:", await ProductBrand.first().textContent());
//     //minimum productName
//     const ProductName = page.locator(
//         `//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"and normalize-space(.)='Rs. ${minPrice}']/ancestor::div[@class="product-productMetaInfo"]//h4[@class="product-product"]`);
// console.log("Product Name:", await ProductName.first().textContent());
// });
//total product 50 minimum
// import { test } from "@playwright/test";

// test("Find minimum product price using map()", async ({ page }) => {

//     await page.goto("https://www.myntra.com/boy-tshirts");

//     const pricesText = await page.locator(
//         `//li[@class="product-base"]//div[@class="product-price"]//span[@class="product-discountedPrice" or (not(@class) and normalize-space(text()))]`

//     ).allInnerTexts();

//     // Convert price strings into numbers
//     const prices = pricesText.map(text =>
//         Number(text.replace(/[^\d]/g, ""))
//     );

//     console.log("total prices:"
//         , prices);

//     // Find the minimum price
//     const minPrice = Math.min(...prices);

//     console.log("Minimum product price: ₹" + minPrice);
//     // Locate the brand of the product with the minimum price
//     const ProductBrand = await page.locator(
//         // `//span[@class='product-discountedPrice'and normalize-space(.)='Rs. ${minPrice}']/ancestor::li[@class="product-base"]//h3[@class="product-brand"]`
//         `//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"and normalize-space(.)='Rs. ${minPrice}']/ancestor::div[@class="product-productMetaInfo"]//h3[@class="product-brand"]`
//     ).allTextContents();

//     console.log("Product Brand:",ProductBrand);
//     //minimum productName
//     const ProductName = await page.locator(
//         `//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"and normalize-space(.)='Rs. ${minPrice}']/ancestor::div[@class="product-productMetaInfo"]//h4[@class="product-product"]`).allTextContents();
//     console.log("Product Name:", await ProductName);

// });

//minimize the program total 50 product : 
// import { test } from "@playwright/test";

// test("Minimum Product Price, Brand and Name", async ({ page }) => {
//     await page.goto("https://www.myntra.com/boy-tshirts");

//     const minPrice = await getMinPrice(page);
    
    
//     async function getMinPrice(page) {
//     const pricesText = await page.locator(
//         `//li[@class="product-base"]//div[@class="product-price"]//span[@class="product-discountedPrice" or (not(@class) and normalize-space(text()))]`
//     ).allInnerTexts();

//     const prices = pricesText.map(text =>
//         Number(text.replace(/[^\d]/g, ""))
//     );

//     return Math.min(...prices);
//     const { ProductBrand, ProductName } = await getProduct(page, minPrice);

//     console.log("Minimum Product Price: ₹" + minPrice);
//     console.log("Product Brand:", ProductBrand);
//     console.log("Product Name:", ProductName);
// }

// async function getProduct(page, minPrice) {
//     const ProductBrand = await page.locator(
//         `//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"and normalize-space(.)='Rs. ${minPrice}']/ancestor::div[@class="product-productMetaInfo"]//h3[@class="product-brand"]`
//     ).allTextContents();

//     const ProductName = await page.locator(
//         `//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"and normalize-space(.)='Rs. ${minPrice}']/ancestor::div[@class="product-productMetaInfo"]//h4[@class="product-product"]`
//     ).allTextContents();

//     return { ProductBrand, ProductName };
// }
// });

import { test } from "@playwright/test";

test("Find minimum product price", async ({ page }) => {

    await page.goto("https://www.myntra.com/boy-tshirts");

    const pricesText = await page.locator(
        `//li[@class="product-base"]//div[@class="product-price"]//span[@class="product-discountedPrice" or (not(@class) and normalize-space(text()))]`
    ).allInnerTexts();

    const prices = pricesText.map(text =>
        Number(text.replace(/[^\d]/g, ""))
    );

    const minimumPrice = Math.min(...prices);

    console.log("Minimum product price: ₹" + minimumPrice);

    const ProductName = await getName(page, minimumPrice);

    console.log("Product Name:", ProductName);
});

async function getName(page, minPrice) {
    const productName = await page.locator(
        `//li[@class="product-base"]/descendant::span[@class="product-discountedPrice" and normalize-space(.)='Rs. ${minPrice}' or not(@class) and normalize-space(.)='Rs. ${minPrice}']/ancestor::div[@class="product-productMetaInfo"]//h4[@class="product-product"]`
    ).allInnerTexts();
    
    return productName;
}