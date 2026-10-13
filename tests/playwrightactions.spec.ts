import {test, expect}from '@playwright/test';

test("Test to verify input actions", async ({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/");


// Input Box/ TextBox /Text Input
    const nameTextBox = page.getByRole('textbox', {name: 'Name'});

    await expect(nameTextBox).toBeVisible(); // Whenver we are applying expect on the action of the element then we should use await keyword because expect() is returning a promise and it is performing an action on the element.
    await expect(nameTextBox).toBeEnabled();

    const maxLength: string | null= await nameTextBox.getAttribute("maxlength"); //Better to avoid console.log() in the test script because it will not be visible in the report. Instead we can use expect() to verify the value of the attribute.
    expect(maxLength).toBe("15"); // Whenver we are applying expect on the value of the attribute then we should not use await keyword because expect() is not returning a promise and it is not performing any action on the element.

    await nameTextBox.fill("RiverDale");
    console.log("Value of the FirstName: " + await nameTextBox.inputValue()); // inputValue() is returning a promise and it is performing an action on the element. So we should use await keyword here.

// Radio Button::
    const maleRadionButton = page.locator("#male");
    await expect(maleRadionButton).toBeVisible();
    await expect(maleRadionButton).toBeEnabled();

    await expect(maleRadionButton).not.toBeChecked();
    maleRadionButton.check();
    await expect(maleRadionButton).toBeChecked();

// Checkbox:
    const sundayCheckBox = page.getByLabel('Sunday');
    await (sundayCheckBox).check();
    await expect(sundayCheckBox).toBeChecked();


//Multiple Checkboxes:
    const days: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const checkboxes: any[] = days.map(day => page.getByLabel(day));
    expect(checkboxes.length).toBe(days.length);
    for (const checkbox of checkboxes) {
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }
});