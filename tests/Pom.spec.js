const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { LoginPage } = require('../pages/LoginPage');
const { readExcelData } = require('../utils/readExcel');

test('POM', async ({page})=>
{
    const testData = readExcelData('Sheet1');
    for (const data of testData) 
    {
    console.log('Processing data:', data);

    //Login Page - Credentials
    const login=new LoginPage(page);
    await login.gotoLoginPage();
    await login.login(data.username,data.password);
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'LoginPage.png'})
    await page.waitForTimeout(1000);
   
    //Home Page - Add Loan 
    const home=new HomePage(page);
    await home.add(data.loanId, data.transactionId, data.priority,data.uploadFile);
    await page.waitForTimeout(4000);
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'DashBoardPage.png'})
    }  
})