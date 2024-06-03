const { I } = inject();

module.exports = {
myAccountSpoiler: {xpath: '//span[text()= "My Account"]' },
registerButton:  {xpath: '//a[.="Register"]' },

openRegistrationPage(){
  I.click(this.myAccountSpoiler);
  I.click(this.registerButton);
}

}
