import { test, request } from '@playwright/test';
import { dataSet } from '../utils/dataSet';
import { App } from '../pages/app';
import { ApiUtils } from '../utils/apiUtils';

test('navigate to website', async ({ page }) => {
  const app = new App(page);

  await app.registrationPage.registerToTheApp(dataSet.firstName, dataSet.email, dataSet.lastName,dataSet.userMobile, dataSet.password);
  await app.loginPage.loginToTheApp(dataSet.email, dataSet.password);
  await page.pause();
});

test.skip('api user creation', async ({ page }) => {
  const app = new App(page);
  const apiContext = await request.newContext();
  const api = new ApiUtils(apiContext);

  const user = await api.createUser(dataSet.email);

  //await app.registrationPage.registerToTheApp(dataSet.firstName, dataSet.email, dataSet.lastName,dataSet.userMobile, dataSet.password);
  await app.loginPage.loginToTheApp(user.userEmail, dataSet.password);
});
//TO DO Add test for buying a product