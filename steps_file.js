const signInButton = { xpath: '//a[text()="Sign In"]'};
const emailField = {css: '#input-email'};
const passwordField = {css: '#input-password'};
const submitButton = {xpath : '//input[@type = "submit"]'};
const colorSelector = {xpath: '//label[text()="Color"]/following-sibling::div/a[2]'};
const grayColor = {xpath: '//a[contains(text(),"Gray")]'};

// in this file you can append custom step methods to 'I' object

const STORE_URL = 'http://opencart.qatestlab.net/';
const CHECKOUT_URL = 'http://opencart.qatestlab.net/index.php?route=checkout/cart';

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
      this.click(grayColor);
     
    },

    checkElementIsVisible(locator) {
      return tryTo(() => this.seeElement(locator));
    }
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  });
}
