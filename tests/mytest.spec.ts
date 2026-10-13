import {test, expect} from '@playwright/test';

//test("title of the test", an Arrow function ({fixture}) =>{test block});
// fixture - global object that is provided by playwright test runner. {}-> wrapper for the fixture object.
// It contains all the methods and properties that are required to run the test. 
// It is an object that is passed to the test function as an argument.


// Example of different types of fixtures that can be used in playwright test runner are:
// 1. page - It is used to interact with the web page. It is an instance of the Page class.
// 2. browser - It is used to interact with the browser. It is an instance of the Browser class.
// 3. context - It is used to interact with the browser context. It is an instance of the BrowserContext class.
// 4. request - It is used to make HTTP requests. It is an instance of the APIRequestContext class.
// 5. response - It is used to handle HTTP responses. It is an instance of the APIResponse class.

test("Title of the Test",async ({page})=>{  //async function that takes a page fixture as an argument

    await page.goto("Url of the website") // Navigate to the specified URL

    let title: string = await page.title() // Get the title of the page
    console.log("Title: " + title) // Log the title to the console
    
    await expect(page).toHaveTitle("Expected Title of the Page") // Assert that the page title matches the expected title
})

//All the tests returns a promise, so we can use async/await to handle the asynchronous nature of the tests.