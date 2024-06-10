const { I } = inject();

module.exports = {

  priceText : {xpath: '//div[@class="price"]/span'},

  async getProductPrice(){
    return await I.grabTextFrom(this.priceText);
  },

  async checkElementIsVisible(locator) {
    return await tryTo(() => I.seeElement(locator));
  }
  // insert your locators and methods here
}
