import { test, expect } from "playwright/test";

test("practice test should pass", async ({ page }) => {
    await page.goto('http://localhost:3000');

    const textbox = page.getByRole('textbox');

    await textbox.fill('some value');

});

