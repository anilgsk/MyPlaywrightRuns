import test, { Page} from "@playwright/test";

test("Dropdown handling", async({page})=>{

    await page.goto('https://leafground.com/select.xhtml');

   await page.waitForTimeout(3000)

    await page.selectOption('.ui-selectonemenu', { label: 'Playwright' });

    await page.waitForTimeout(3000)

    await page.selectOption('.ui-selectonemenu', {index:4})


    // To print all the options present in the dropdown

    const allOptions = await page.locator('.ui-selectonemenu>option');
    const count = await allOptions.count();
    console.log("Total options are: "+count);
    for(let i=0; i<count; i++){  
        const optionText = await allOptions.nth(i).textContent();
        console.log(optionText);
    }
    

})


test("dropdown without select option", async({page})=>{

    await page.goto('https://leafground.com/select.xhtml');

    await page.waitForTimeout(3000)

    await page.locator('[id="j_idt87:country_label"]').click()

    await page.locator('[id="j_idt87:country_2"]').click();

    await page.waitForTimeout(3000)


})

test("dropdown with value attribute", async({page})=>{

      await page.goto('http://www.leaftaps.com/opentaps/control/logout');

      await page.getByLabel('Username').fill('Demosalesmanager');

      await page.getByLabel('Password').fill('crmsfa');

      await page.locator('.decorativeSubmit').click();

      await page.getByText('CRM/SFA').click();

      await page.getByText('Create Lead').first().click();

      await page.selectOption('#createLeadForm_dataSourceId', {value: 'LEAD_EXISTCUSTOMER'});

      await page.waitForTimeout(6000)


})

  