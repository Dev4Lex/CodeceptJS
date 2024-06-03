const signInButton = { xpath: '//a[text()="Sign In"]'};
const emailField = {css: '#input-email'};
const passwordField = {css: '#input-password'};
const submitButton = {xpath : '//input[@type = "submit"]'};
const colorSelector = {xpath: '//a[@class="sbSelector"]'};
const yellowColor = {xpath: '//a[contains(text(),"Yellow")]'}

// in this file you can append custom step methods to 'I' object

const STORE_URL = 'http://opencart.qatestlab.net/';

module.exports = function() {
  return actor({
    
    
    openStore(){
      this.amOnPage(STORE_URL);
    },

    login(user){
      this.openStore();
      this.click(signInButton);
      this.fillField(emailField, user.email);
      this.fillField(passwordField, user.password);
      this.click(submitButton);
    },

    selectColor(){
      this.click(colorSelector);
      this.click(yellowColor);
     
    }
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  });
}
