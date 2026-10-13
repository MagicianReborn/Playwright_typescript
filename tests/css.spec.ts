/* 
CSS (Cascading Style Sheets)
html + js +css = web application
CSS is used to style the HTML elements. It is a language that describes the style of an HTML document. CSS describes how HTML elements should be displayed. CSS saves a lot of work. It can control the layout of multiple web pages all at once.


two types of CSS:
Absolute CSS - It is a type of CSS that is used to style the HTML elements by using the absolute path of the HTML elements. It is not recommended to use absolute CSS because it is not flexible and it is not responsive.
Relative CSS - It is a type of CSS that is used to style the HTML elements by using the relative path of the HTML elements. It is recommended to use relative CSS because it is flexible and it is responsive.

CSS Selectors: (tag is always optional )
tag with id    tag#id (# represent an id)  #id
tag with class tag.class (. represent a class) .class
tag with attribute tag[attribute = value] ( [] represent an attribute) [attribute = value]
tag with both attribute and class tag.class[attribute = value] .class[attribute = value]

page.locator(css/xpath)

*/

import { test, expect, Locator } from '@playwright/test';

test("Verify Playwright In-Built Locators", async ({ page }) =>{

await page.goto("https://demowebshop.tricentis.com/");

await expect (page.locator("input#small-searchterms")).toBeVisible(); // Before filling the input field
await page.locator("input#small-searchterms").fill(""); // tag with id

await page.locator(".search-box-text").fill(""); // tag with class

await page.locator("[placeholder='Search store']").fill(""); // tag with attribute

await page.locator(".search-box-text[placeholder='Search store']").fill(""); // tag with both attribute and class


});