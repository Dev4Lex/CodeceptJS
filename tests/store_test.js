const { passwordConfirmField, continueButton } = require("../pages/register");

let registrationUser = {
    firstName: 'Alex',
    lastName: '123',
    email : Date.now() + '@test.com',
    telephone: '1234567',
    password: 'veryStr0ngP@ssword',
    passwordConfirm: 'veryStr0ngP@ssword',
};

Feature('store');

Scenario('test something', ({ I, homePage, registerPage }) => {
    I.openStore();
    homePage.openRegistrationPage();
    registerPage.verifyRegisterAccountText();
    registerPage.fillRegistrationDetails(registrationUser);
    registerPage.completeRegistration();
    pause();
});
