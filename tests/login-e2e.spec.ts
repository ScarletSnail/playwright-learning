import { test, request, expect } from '@playwright/test';
import { dataSet } from '../utils/dataSet';
import { App } from '../pages/app';
import { ApiUtils } from '../utils/apiUtils';

test.skip('navigate to website', async ({ page }) => {
  const app = new App(page);

  await app.registrationPage.registerToTheApp(dataSet.firstName, dataSet.email, dataSet.lastName, dataSet.userMobile, dataSet.password);
  await app.loginPage.loginToTheApp(dataSet.email, dataSet.password);
  await app.loginPage.verifyLogin();
});

test.skip('api user creation', async ({ page }) => {
  const app = new App(page);
  const apiContext = await request.newContext();
  const api = new ApiUtils(apiContext);

  const user = await api.createUser(dataSet.email);
  await app.loginPage.loginToTheApp(user.userEmail, dataSet.password);
});

test.only('buy a product', async ({ page }) => {
  const app = new App(page);
  const apiContext = await request.newContext();
  const api = new ApiUtils(apiContext);

  const user = await api.createUser(dataSet.email);
  await app.loginPage.loginToTheApp(user.userEmail, dataSet.password);
  await app.mainPage.addProductTocart();

  await page.locator('[routerlink="/dashboard/cart"]').click();
  
  await app.cartPage.confirmInCart();
  await app.paymentPage.placeOrder();
  await app.paymentPage.verifySuccessfull();
  await app.orderPage.verifyOrder();
});