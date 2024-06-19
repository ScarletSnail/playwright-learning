//TO DO Add validation tests for registration input fields (negative cases)

import { test, request, expect } from '@playwright/test';
import { dataSet, validationMessages } from '../utils/dataSet';
import { App } from '../pages/app';
import { RegistrationPage } from '../pages/registration.page';

//read about difference beforeEach and beforeAll

test.describe('validation', () => {
    test.beforeEach(async ({ page }) => {
        const app = new App(page);

        await app.registrationPage.startRegistration();
    })

    test('long first name validation: too long', async ({ page }) => {
        const app = new App(page);

        await app.registrationPage.inputFirstName(dataSet.longFirstName);
        await app.registrationPage.clickRegisterButton();
        await app.registrationPage.verifyValidation(validationMessages.firstNameTooLongValidation);

        await expect(app.registrationPage.firstNameInputErrorStateLocator).toBeVisible();
    });

    test('long first name validation: too short', async ({ page }) => {
        const app = new App(page);

        await app.registrationPage.inputFirstName(dataSet.shortFirstName);
        await app.registrationPage.clickRegisterButton();
        await app.registrationPage.verifyValidation(validationMessages.firstNameTooShortValidation);

        await expect(app.registrationPage.firstNameInputErrorStateLocator).toBeVisible();
    });


    test('first name input should be required', async ({ page }) => {
        const app = new App(page);

        await app.registrationPage.inputFirstName(dataSet.emptyFirstName);
        await app.registrationPage.clickRegisterButton();
        await app.registrationPage.verifyValidation(validationMessages.firstNameRequired);

        await expect(app.registrationPage.firstNameInputErrorStateLocator).toBeVisible();
    });

    test('email input should be required', async ({ page }) => {
        const app = new App(page);

        await app.registrationPage.inputEmail('');
        await app.registrationPage.clickRegisterButton();
        await app.registrationPage.verifyValidation(validationMessages.emailRequired);

        await expect(app.registrationPage.emailInputErrorStateLocator).toBeVisible();
    });

    const emails = [dataSet.emailNoDomain, dataSet.emailNoPrefix, dataSet.emailNoDomainNoPrefix];

    for (const email of emails) {
        test.only(`email input format validation: ${email}`, async ({ page }) => {
            const app = new App(page);

            await app.registrationPage.inputEmail(email);
            await app.registrationPage.clickRegisterButton();
            await app.registrationPage.verifyValidation(validationMessages.emailValidation);

            await expect(app.registrationPage.emailInputErrorStateLocator).toBeVisible();
            await page.pause();
        });
    }

    test('phone number should be required', async ({ page }) => {
        const app = new App(page);

        await app.registrationPage.inputUserMobile('');
        await app.registrationPage.clickRegisterButton();
        await app.registrationPage.verifyValidation(validationMessages.phoneRequired);

        await expect(app.registrationPage.phoneInputErrorStateLocator).toBeVisible();
    });

    test('phone number input: only numbers allowed', async ({ page }) => { //combine with the next one the same as email example
        const app = new App(page);

        await app.registrationPage.inputUserMobile(dataSet.userMobileLetters);
        await app.registrationPage.clickRegisterButton();
        await app.registrationPage.verifyValidation(validationMessages.phoneOnlyNumberAllowed);

        await expect(app.registrationPage.phoneInputErrorStateLocator).toBeVisible();
    });

    test('phone number must be no longer than 10 digits', async ({ page }) => {
        const app = new App(page);

        await app.registrationPage.inputUserMobile(dataSet.userMobileLong);
        await app.registrationPage.clickRegisterButton();
        await app.registrationPage.verifyValidation(validationMessages.phoneLengthValidation);

        await expect(app.registrationPage.phoneInputErrorStateLocator).toBeVisible();
        await page.pause();
    });


})





//TO DO Add test for buying a product
