const { I } = inject();

module.exports = {
myAccountSpoiler: {xpath: '//span[text()= "My Account"]' },
registerButton:  {xpath: '//a[.="Register"]' },
cartIcon: {xpath: "//i[@class='linearicons-cart']"},
emptyCartText: {xpath: '//p[text()="Your shopping cart is empty!"]'},
deleteItemfromCartIcon: {xpath: '//i[@class="linearicons-trash"]'},

openRegistrationPage(){
  I.click(this.myAccountSpoiler);
  I.click(this.registerButton);
},

async checkCartIsEmpty(){
  I.click(this.cartIcon);
  return I.checkElementIsVisible(this.emptyCartText);
}

}
