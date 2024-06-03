const { I } = inject();

module.exports = {
  registerHeaderText: 'Register Account',
  firstNameField: {css: '#input-firstname'},
  lastNameField: {css: '#input-lastname'},
  emailField: { css: '#input-email'},
  telephoneField: {css: '#input-telephone'},
  passwordField: {css: '#input-password'},
  passwordConfirmField: {css: '#input-confirm'},
  privacyPolicyRadioField: '//input[@name="agree"]',
  continueButton: '//input[@value="Continue"]',
  successfullRegistrationText: 'Your Account Has Been Created!',

  verifyRegisterAccountText(){
    I.see(this.registerHeaderText);
  },

 fillRegistrationDetails(user){
    I.fillField(this.firstNameField, user.firstName);
    I.fillField(this.lastNameField, user.lastName);
    I.fillField(this.emailField, user.email);
    I.fillField(this.telephoneField, user.telephone);
    I.fillField(this.passwordField, user.password);
    I.fillField(this.passwordConfirmField, user.passwordConfirm);
    I.checkOption(this.privacyPolicyRadioField);
  },
  completeRegistration(){
    I.click(this.continueButton);
    I.see(this.successfullRegistrationText);
  }
}
