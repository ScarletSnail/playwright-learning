export const dataSet = {
    email: `email${Math.floor(
        Math.random() * (999999 - 100000) + 100000,
        )}@example.com`,
    password: 'Test123@#987',
    firstName: `name${Math.floor(
        Math.random() * (999999 - 100000) + 100000,)}`,
    lastName: `lastname${Math.floor(
        Math.random() * (999999 - 100000) + 100000,)}`,
    userMobile: `1234567890`,
    longFirstName: 'longInvalidFirstName',
    shortFirstName: 'ab',
    emptyFirstName: '',
    emailNoDomainNoPrefix: 'username',
    emailNoDomain: 'username@',
    emailNoPrefix: '@example',
    userMobileLetters: '123abc',
    userMobileLong: '1234567890123456789'

};
export const validationMessages = {
    firstNameTooLongValidation: 'First Name must be 12 or less character long',
    firstNameTooShortValidation: 'First Name must be 3 or more character long',
    firstNameRequired: 'First Name is required',
    emailValidation: 'Enter Valid Email',
    emailRequired: 'Email is required',
    phoneRequired: 'Phone Number is required',
    phoneOnlyNumberAllowed: 'only numbers is allowed',
    phoneLengthValidation: 'Phone Number must be 10 digit',
    passwordRequired: 'Password is required',
    confirmPasswordRequired: 'Confirm Password is required',
    confirmPasswordMatch: 'Password and Confirm Password must match with each other',
}

