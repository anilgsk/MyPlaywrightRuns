import test from "@playwright/test";

test('playwright locators demo', async({page})=>{

    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    await page.getByRole('link', {name: 'Admin Page'}).click();

    await page.waitForTimeout(3000);

    await page.getByText('Forgot login info?').click();

    await page.waitForTimeout(3000);

    await page.getByText('Locations').click();

    await page.waitForTimeout(3000);

})