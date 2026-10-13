/*
DOM- Document Object Model - API interface provided by the browser to interact with the HTML elements.
(Inspect or F12)


Locators: In Built locators of playwright are:
//page.getByRole() to locate by explicit and implicit accessibility attributes. (interactive elements, visible text, ARIA attributes, HTML attributes, etc.)
//page.getByText() to locate by text content, locate by visible text, no attributes, non interactive elements.
//page.getByLabel() to locate a form control by associated label's text.
//page.getByPlaceholder() to locate an input by placeholder.
//page.getByAltText() to locate an element, usually image, by its text alternative.
//page.getByTitle() to locate an element by its title attribute.
//page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

*/

import { test, expect, Locator } from '@playwright/test';

test("Verify Playwright In-Built Locators", async ({ page }) =>{

    await page.goto("https://demo.nopcommerce.com/");

// 1. page.getByAltText()
    const logo:Locator = page.getByAltText("nopCommerce demo store"); // await is not needed here because neither the statement is not returning a promise nor it is performing any action.
    await expect(logo).toBeVisible();

// 2. page.getByText()
    await expect(page.getByText("Welcome to our store")).toBeVisible(); //can accept String, substring and regex as well.

// 3. page.getByRole()
    await page.getByRole('link',{name: 'Register'}).click();

    await expect(page.getByRole('heading', {name: 'Register'})).toBeVisible(); // getByText() can be also used here.

// 4. page.getByLabel()
    await page.getByLabel('First Name').fill("John");
    await page.getByLabel('Last Name').fill("Kennedy");
    await page.getByLabel('Email').fill("john.kennedy@example.com");

// 5. page.getByPlaceholder()
    await page.getByPlaceholder('Search store').fill("Apple MacBook Pro 13-inch");

// 6. page.getByTitle()
   await page.goto("https://practice.expandtesting.com/locators");
   await expect(page.getByTitle("Settings panel")).toHaveText("Settings");

// 7. page.getByTestId()
   await expect(page.getByTestId("status-message")).toHaveText("All systems operational");

   // If the testid attribute gots changed then we have to go to playwright.config.ts file and add the below code to configure the testid attribute to some other attribute.
   // use: {
   //     testIdAttribute: 'data-test-id', // default is data-testid
   //   },
})


// If I want to create a .html file and want to open that in the browser then I can install an extension called "Live Server" in VS Code and then right click on the .html file and select "Open with Live Server" option to open that file in the browser.
    
