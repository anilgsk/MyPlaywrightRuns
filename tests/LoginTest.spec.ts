import test from "@playwright/test";

test('Login Test', async({page})=>{

    await page.goto('http://www.leaftaps.com/opentaps/control/main')

    await page.fill('#username', 'Demosalesmanager')
    await page.fill('#password', 'crmsfa')
    await page.click('.decorativeSubmit')
    await page.click('text=CRM/SFA')
    const title = await page.title()
    console.log(title);

})