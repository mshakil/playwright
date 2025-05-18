// let login:string = "Mubbashir";
// let jsonObj:object = {"sds": "sd"}
// let isRequired:boolean = true;

//  test = >
import { test, expect } from '@playwright/test';



test('Verify That is should navigate to saucedemo website.', async ({ page }) => {


    await page.goto("https://www.saucedemo.com/v1/");

    await expect(page.getByText("LOGIN")).toBeVisible();
    await expect(page.locator('#login-button')).toBeEnabled();
  });


  
test('Verify that 2 Multiply by 4 is 8', async ({ page }) => {
    await expect(2*4).toEqual(8);
  });

  
test('Verify that 2 Addition by 4 is 6', async ({ page }) => {
    await expect(2+4).toEqual(6);
  });

test('Verify that 3 multiply by 3 is 9', async ({ page }) => {
    await expect(3*3).toEqual(8);
  });