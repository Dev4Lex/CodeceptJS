let registrationUser = {
    firstName: 'Alex',
    email : Date.now() + '@test.com',
};

Feature('store');

Scenario('test something', ({ I, homePage, registerPage }) => {
    I.openStore();
    homePage.openRegistrationPage();
    registerPage.verifyRegisterAccountText();
    registerPage.fillRegistrationDetails(registrationUser);
    pause();
});
