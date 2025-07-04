// let login:string = "Mubbashir";
// let jsonObj:object = {"sds": "sd"}
// let isRequired:boolean = true;

//  test = >
import { test, expect,BrowserContext, Page } from '@playwright/test';



// test('Verify That is should navigate to saucedemo website.', async ({ page }) => {


//     await page.goto("https://www.saucedemo.com/v1/");

//     await expect(page.getByText("LOGIN")).toBeVisible();

//     await expect(page.locator('#login-button')).toBeEnabled();
//   });


  
// test('Verify that 2 Multiply by 4 is 8', async ({ page }) => {
//     await expect(2*4).toEqual(8);
//   });

  
// test('Verify that 2 Addition by 4 is 6', async ({ page }) => {
//     await expect(2+4).toEqual(6);
//   });

// test('Verify that 3 multiply by 3 is 9', async ({ page }) => {
//     await expect(3*3).toEqual(9);
//   });

  // Hooks
  // > Before suite // driver class initial | DB setup | 
  // > Before test // Login > dashboar > product  - 
  // > test // Action steps and expected steps // failed | passed
          // test
  // > after test // driver quite / reinitialize
  // > after suite //Report // db close // chrome driver 

  
  test.describe('Playwright Hooks!',async ()=>{

    let context: BrowserContext;
    let page: Page;

    test.beforeAll('Executing beforeAll Hook!', async ({browser})=>{
      context = await browser.newContext();
      page = await context.newPage();
      console.log("This is before all!")
    })

    test.beforeEach('Executing beforeEach Hook!', async () =>{
      await page.goto('https://www.saucedemo.com/')
      console.log('This is beforEach hook!');

    })

    test('Login to saucedemo website', async () =>{
      
      test.step('Enter username:', async ()=> {

        //await page.locator() //XPATH //CSS | id # .
        await page.locator('#user-name').fill('standard_user');
      })

      test.step('Enter textbox:', async ()=> {
        await page.locator('#password').fill('secret_sauce');
      })

      test.step('click login button:', async ()=> {
        await page.locator('#login-button').click();

        //await page.waitForSelector("//span[@data-test='title']", {timeout: 6000});
        //await page.waitForTimeout(60000);
      })

    })

    test('Test Case 1: Verify that 2 Addition by 4 is 6', async ()=>{      
      test.step('Step 1: Asserting that 2+4 is equals to 6', async ()=>{
        await expect(2+4).toEqual(6);

      })
      test.step('Step 2: Logging that test result!', async ()=>{
        console.log('This is the test log for addition!');
      })      
    });

    test('Test Case 2: Verify that 3 multiply by 3 is 9', async () => {
      test.step('Step 1: Asserting that 3*3 is 9', async()=>{
        await expect(3*3).toEqual(9);
      })

      test.step('Step 2: Logging that test result!', async ()=>{
        console.log('This is the test log for multiplication!');
      })   
    });

    test('Test Case 3: Verify that 3 multiply by 3 is 8', async () => {
      test.step('Step 1: Asserting that 3*3 is 9', async()=>{
        await expect(3*3).toEqual(9);
      })

      test.step('Step 2: Logging that test result!', async ()=>{
        console.log('This is the test log for multiplication!: Arsalan ki khuwahish');
      })   
    });
})