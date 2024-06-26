import { test, request, expect } from '@playwright/test';
import { dataSet, validationMessages } from '../utils/dataSet';
import { App } from '../pages/app';
import { LoginPage } from '../pages/login.page';

test.describe('login validation', async () => {
    test('login with incorrect password', async ({ page }) => {
        const app = new App(page);
    
        await app.loginPage.loginToTheApp(dataSet.email, dataSet.wrongPassword);
        await app.loginPage.verifyValidation(validationMessages.loginWrongEmailOrPassword);
    });
    
    test('login with incorrect email', async ( {page} ) => {
        const app = new App(page);
    
        await app.loginPage.loginToTheApp(dataSet.wrongEmail, dataSet.password);
        await app.loginPage.verifyValidation(validationMessages.loginWrongEmailOrPassword);
    });
    
    
    test('login: email is required', async({page}) => {
        const app = new App(page);
    
        await app.loginPage.loginToTheApp(dataSet.emptyString, dataSet.password);
        await app.loginPage.verifyValidation(validationMessages.loginEmailRequired);
    
        await expect(app.loginPage.emailInputErrorStateLocator).toBeVisible();
    });
    
    test('login: password is required', async({page}) => {
        const app = new App(page);
    
        await app.loginPage.loginToTheApp(dataSet.email, dataSet.emptyString);
        await app.loginPage.verifyValidation(validationMessages.loginPasswordRequired);
    
        await expect(app.loginPage.passwordInputErrorStateLocator).toBeVisible();
    });
    
    const emails = [dataSet.emailNoDomain, dataSet.emailNoPrefix, dataSet.emailNoDomainNoPrefix];
    
    for (const email of emails) {
        test(`login: email format validation ${email}`, async ({ page }) => {
            const app = new App(page);
    
            await app.loginPage.loginToTheApp(email, dataSet.emptyString);
            await app.loginPage.verifyValidation(validationMessages.loginEmailValidation);
    
            await expect(app.loginPage.emailInputErrorStateLocator).toBeVisible();
        });
    }
})
